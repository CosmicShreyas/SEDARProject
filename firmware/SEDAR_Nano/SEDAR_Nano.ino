/*
  SEDAR -- four-spring college demonstrator, classic Arduino Nano (ATmega328P)
  Revision 1.3, selective relay pulse policy. Read ../README.md before coil power.

  Hardware: roof MPU6050, two DRIVER-equipped relay module inputs, two
  mirrored spring-contact solenoids. Nano outputs NEVER drive coils directly.
  A4=SDA, A5=SCL, D8=IN1, D9=IN2. Polling: INT is not required.

  No third-party libraries: Wire is included in Arduino AVR Boards.
  Serial Monitor: 115200 baud, Newline. Boot -> calibrate -> MONITOR only.
  Commands: HELP STATUS CALIBRATE (or CAL) TEST1 TEST2 ARM STOP
            STREAM ON / STREAM OFF

  This is a conservative experimental controller, not a validated seismic
  protection system. It cannot know spring displacement or ground acceleration
  from a roof accelerometer alone. A high-pass acceleration signal and leaky
  velocity estimate choose brief opposing pulses. Contact geometry, mechanical
  delay, sensor tilt and relay delay can make a pulse ADD energy. Compare
  passive/active trials and STOP if motion or twisting increases.
*/
// ============================================================================
// 01 / LIBRARIES
// Wire talks to the MPU6050 over I2C; the other headers provide math and command parsing.
// ============================================================================
#include <Wire.h>
#include <math.h>
#include <string.h>
#include <ctype.h>
#include "PulsePolicy.h"

// ============================================================================
// 02 / USER SETTINGS AND LIMITS
// Review pin assignments and hardware polarity here. Times are milliseconds unless marked otherwise.
// ============================================================================
// -------------------- SETTINGS TO VERIFY ON YOUR HARDWARE --------------------
const uint8_t RELAY_PINS[2] = {8, 9};
// NO validated stabilizing law is possible from the supplied hardware details.
// Default build supports measurement and bounded individual actuator tests.
// Only enable experimental feedback after measured direction/delay/contact tests
// and repeatable passive/active trials. Enabling is NOT a stability guarantee.
const bool ENABLE_EXPERIMENTAL_CONTROL = false;
const bool RELAY_ACTIVE_LOW = true; // Change to false ONLY for active-HIGH modules.
const uint8_t MOTION_AXIS = 0;      // 0=X, 1=Y. Mount that axis along actuator travel.
const int8_t SENSOR_SIGN = 1;       // +1 or -1: defines positive motion direction.
// Resulting PLATFORM force, not merely the rod's visual direction:
constexpr int8_t CHANNEL_FORCE_SIGN[2] = {-1, 1}; // Verify with TEST1 / TEST2.

// Starting bench values, NOT measured ratings of your unknown solenoids.
const uint16_t PULSE_MS = 40;       // Reduce if the coil's specification requires it.
const uint16_t HARD_MAX_ON_MS = 60;
// Assumptions ONLY: measure closure, rod contact and complete force release.
// These settings do not make the unmeasured hardware timing trustworthy.
const uint16_t ACTUATION_DELAY_MS = 20;
const uint16_t FORCE_RELEASE_MS = 35;
const uint16_t TIMING_MARGIN_MS = 10;
const uint16_t DIRECTION_CONFIRM_MS = 30;
const float MAX_YAW_RATE_DPS = 15.0f;
const uint16_t YAW_FAULT_DWELL_MS = 100;
const uint16_t COOLDOWN_MS = 220;   // Both channels remain off between pulses.
const uint16_t WINDOW_MS = 5000;
const uint8_t MAX_PULSES_PER_WINDOW = 6; // <=240 ms commanded ON in a 5 s window.
// Thermal budget. The 5 s burst window above does NOT bound average heating:
// six pulses every 5 s, sustained, is ~5% duty indefinitely, which can still cook
// a small solenoid over minutes. These limit accumulated ON-time per channel over
// a long rolling window. Starting values are ASSUMPTIONS, not measured ratings of
// your solenoids: if a coil still becomes hot to touch, lower THERMAL_BUDGET_MS.
const uint32_t THERMAL_WINDOW_MS = 60000; // Rolling one-minute observation window.
const uint16_t THERMAL_BUDGET_MS = 1500;  // Max commanded ON per channel per window.
const uint16_t EPISODE_MAX_MS = 8000;   // Then wait for sustained quiet.
const uint16_t QUIET_MS = 700;
const float ACCEL_START = 0.40f;    // m/s^2, filtered dynamic acceleration.
const float ACCEL_QUIET = 0.18f;    // Hysteresis. Adjust from stationary logs.
const float VELOCITY_START = 0.025f; // m/s, estimated, NOT a displacement sensor.
const float VELOCITY_RELEASE = 0.008f;
const float MAX_TILT_DEG = 15.0f;   // Inhibit by latching a fault beyond this tilt.
const float G = 9.80665f;
const uint32_t SAMPLE_US = 10000UL; // 100 Hz; MPU also configured to 100 Hz.
const uint16_t CAL_SAMPLES = 400;   // Four seconds of stationary calibration.

static_assert(MOTION_AXIS < 2, "Choose horizontal X or Y axis");
static_assert(SENSOR_SIGN == 1 || SENSOR_SIGN == -1, "SENSOR_SIGN must be +/-1");
static_assert(PULSE_MS <= HARD_MAX_ON_MS, "Pulse exceeds software on-time limit");
static_assert((CHANNEL_FORCE_SIGN[0] == -1 && CHANNEL_FORCE_SIGN[1] == 1)
           || (CHANNEL_FORCE_SIGN[0] == 1 && CHANNEL_FORCE_SIGN[1] == -1), "Signs must be opposite +/-1");
static_assert(PULSE_MS > 0 && COOLDOWN_MS >= HARD_MAX_ON_MS, "Check pulse/cooldown");
static_assert(MAX_PULSES_PER_WINDOW > 0, "Pulse budget must be positive");

// ============================================================================
// 03 / RUNTIME STATE
// These variables remember calibration, measurements, relay timing and console input.
// They live in RAM: resetting the Nano clears them and requires calibration again.
// ============================================================================
struct Sample { float a[3]; float w[3]; }; // acceleration m/s^2; angular rate deg/s.
uint8_t mpuAddress = 0;
uint8_t whoAmI = 0; // Last WHO_AM_I value read; informational, never a gate.
const __FlashStringHelper *initStage = nullptr; // Where initSensor() last got to.
bool sensorReady = false, calibrated = false, calibrating = false;
bool faulted = false, armed = false, streaming = false;
bool episode = false, waitingForQuiet = false, quietTracking = false;
int8_t activeChannel = -1;
bool manualPulse = false;
uint32_t pulseStarted = 0, lastOff = 0;
uint32_t pulseHistory[MAX_PULSES_PER_WINDOW] = {};
uint8_t historyHead = 0, historyCount = 0;
// Accumulated commanded ON-time per channel, decayed continuously so the budget
// refills linearly over THERMAL_WINDOW_MS rather than resetting at a boundary.
uint32_t thermalOnMs[2] = {0, 0};
uint32_t thermalLastDecay = 0;
uint32_t episodeStarted = 0, quietStarted = 0, nextSample = 0, lastSample = 0;
uint32_t lastReport = 0;
uint32_t lastConfigCheck = 0;
uint16_t calCount = 0;
// Welford means / sum of squared deviations avoid subtracting two large g^2 values.
float meanA[3] = {}, m2A[3] = {}, meanW[3] = {}, m2W[3] = {};
float measuredAccelSigma = 0, accelStartThreshold = ACCEL_START;
float accelQuietThreshold = ACCEL_QUIET, gyroQuietThreshold = 2.0f;
Sedar::DirectionGate directionGate;
bool yawExceeded = false;
uint32_t yawExceededSince = 0;
float baselineA[3] = {}, gyroBias[3] = {}, gravity[3] = {};
float dynamicA = 0, velocityEstimate = 0, tiltX = 0, tiltY = 0;
char commandBuffer[24];
uint8_t commandLength = 0;
bool commandOverflow = false;

// ============================================================================
// 04 / RELAY OUTPUTS AND FAULT HANDLING
// All relay writes go through these helpers. OFF is translated to the module polarity.
// disarm() prevents automatic pulses; fault() also requires successful recalibration.
// ============================================================================
// PUSH-PULL drive: the pin actively drives both levels. Measured on this
// hardware, releasing a relay pin leaves it floating LOW (no external pull-up),
// so high-impedance would hold an active-LOW board permanently energised.
// RELAY_ACTIVE_LOW selects the polarity; verify it with firmware/RelayTest.
void writeRelay(uint8_t channel, bool on) {
  digitalWrite(RELAY_PINS[channel], (on == RELAY_ACTIVE_LOW) ? LOW : HIGH);
}
void outputsOff() {
  writeRelay(0, false); writeRelay(1, false);
  if (activeChannel >= 0) {
    uint32_t now = millis();
    // Charge the thermal budget with ACTUAL elapsed on-time, not the nominal
    // PULSE_MS, so a pulse extended by slow processing is still accounted for.
    uint32_t onMs = now - pulseStarted;
    if (onMs > HARD_MAX_ON_MS) onMs = HARD_MAX_ON_MS; // Ignore rollover artefacts.
    thermalOnMs[activeChannel] += onMs;
    lastOff = now;
  }
  activeChannel = -1; manualPulse = false;
}
void disarm() {
  outputsOff(); armed = false; episode = false; waitingForQuiet = false;
  quietTracking = false; velocityEstimate = 0; directionGate.reset();
}
void fault(const __FlashStringHelper *reason) {
  disarm(); faulted = true; calibrated = false; calibrating = false;
  Serial.print(F("FAULT: ")); Serial.println(reason);
  Serial.println(F("Outputs OFF. Correct cause; keep still; send CAL."));
}
// Every loop enforces pulse duration BEFORE sensor reads or serial processing.
void servicePulse(uint32_t now) {
  if (activeChannel < 0) return;
  uint32_t age = now - pulseStarted;
  if (age >= PULSE_MS || age >= HARD_MAX_ON_MS || faulted || !sensorReady
      || !calibrated || (!manualPulse && !armed)) outputsOff();
}
// ============================================================================
// 05 / MPU6050 COMMUNICATION
// Configure the sensor and convert signed raw registers into m/s^2 and degrees/second.
// A failed I2C transaction returns false so the caller can switch outputs OFF.
// ============================================================================
bool writeRegister(uint8_t reg, uint8_t value) {
  Wire.beginTransmission(mpuAddress); Wire.write(reg); Wire.write(value);
  return Wire.endTransmission() == 0;
}
bool readRegisters(uint8_t reg, uint8_t count, uint8_t *out) {
  Wire.clearWireTimeoutFlag();
  Wire.beginTransmission(mpuAddress); Wire.write(reg);
  if (Wire.endTransmission(false) != 0) return false;
  if (Wire.requestFrom(mpuAddress, count, (uint8_t)true) != count) return false;
  for (uint8_t i = 0; i < count; ++i) out[i] = Wire.read();
  return !Wire.getWireTimeoutFlag();
}
bool initSensor() {
  // Configure while disarmed. Probe both addresses: AD0 low is 0x68, AD0 high 0x69.
  // Selection is by ACK, not by WHO_AM_I. Genuine InvenSense parts report 0x68, but
  // the clones sold as "MPU6050" commonly report 0x70, 0x72, 0x73 or 0x98 while
  // exposing the identical register map. Requiring 0x68 rejects correctly wired
  // hardware; the configuration read-back below is what actually proves the part works.
  // initStage records how far we got so a fault names the exact failing step
  // instead of collapsing eight distinct causes into one message.
  uint8_t id = 0;
  bool found = false;
  initStage = F("probe: no ACK at 0x68 or 0x69");
  // Probe with a bare address write, not a register read: a plain ACK is the
  // existence test, and it avoids the repeated START that some clones mishandle.
  // Retry for ~1 s because the part needs time after power-up before it answers,
  // and setup() reaches here only milliseconds after Wire.begin().
  for (uint8_t attempt = 0; attempt < 10 && !found; ++attempt) {
    for (uint8_t n = 0; n < 2 && !found; ++n) {
      uint8_t addr = 0x68 + n;
      Wire.beginTransmission(addr);
      if (Wire.endTransmission() == 0) { mpuAddress = addr; found = true; }
    }
    if (!found) delay(100); // Disarmed; blocking here is safe.
  }
  if (!found) return false;
  // Identity is informational only; a failed read must not veto a part that ACKed.
  if (!readRegisters(0x75, 1, &id)) id = 0;
  whoAmI = id; // Reported by WHOAMI/STATUS so an odd clone ID stays visible.

  // Reset first: PWR_MGMT_1 powers up as 0x40 (sleep), and a module that was
  // left half-configured by a previous sketch otherwise keeps those settings.
  initStage = F("write 0x6B device reset");
  if (!writeRegister(0x6B, 0x80)) return false;
  delay(100);                    // Datasheet reset time; disarmed, so blocking is safe.
  // DEVICE_RESET self-clears when the reset completes. Clones can be slow, so poll
  // rather than assuming a fixed delay was enough.
  initStage = F("device reset never completed (0x6B bit7 stuck)");
  bool cleared = false;
  for (uint8_t tries = 0; tries < 20 && !cleared; ++tries) {
    uint8_t power = 0;
    if (readRegisters(0x6B, 1, &power) && !(power & 0x80)) cleared = true;
    else delay(10);
  }
  if (!cleared) return false;

  initStage = F("write 0x6B wake/PLL");
  if (!writeRegister(0x6B, 0x01)) return false; // Wake, PLL clock.
  delay(100);                               // Only during disarmed initialization.
  // Reset leaves SLEEP set; confirm the part actually woke before trusting it.
  initStage = F("sensor still asleep after wake (0x6B)");
  uint8_t power = 0;
  if (!readRegisters(0x6B, 1, &power) || (power & 0x40)) return false;

  initStage = F("write config registers 0x6C/0x1A/0x19/0x1B/0x1C");
  if (!writeRegister(0x6C, 0x00) ||           // All axes awake.
      !writeRegister(0x1A, 0x03) ||           // DLPF: gyro ~42 Hz, accel ~44 Hz.
      !writeRegister(0x19, 0x09) ||           // 1 kHz / (1+9) = 100 Hz.
      !writeRegister(0x1B, 0x08) ||           // Gyro +/-500 deg/s: 65.5 LSB/(deg/s).
      !writeRegister(0x1C, 0x08)) return false; // Accel +/-4 g: 8192 LSB/g.
  initStage = F("read back config 0x19..0x1C");
  uint8_t settings[4];
  if (!readRegisters(0x19, 4, settings)) return false;
  initStage = F("config read back wrong values");
  if (!(settings[0] == 9 && settings[1] == 3 && settings[2] == 8 && settings[3] == 8)) return false;
  initStage = F("ok");
  return true;
}
int16_t signedWord(const uint8_t *b) {
  return (int16_t)(((uint16_t)b[0] << 8) | b[1]);
}
bool readSample(Sample &s) {
  uint8_t b[14];
  if (!readRegisters(0x3B, 14, b)) return false;
  for (uint8_t i = 0; i < 3; ++i) {
    s.a[i] = signedWord(b + 2*i) * (G / 8192.0f);
    s.w[i] = signedWord(b + 8 + 2*i) / 65.5f;
    if (fabs(s.a[i]) > 3.8f*G || fabs(s.w[i]) > 475.0f) return false;
  }
  return true;
}
// ============================================================================
// 06 / FLAT, STATIONARY CALIBRATION
// CALIBRATE and CAL both enter this routine. Place the complete base on a level table;
// the roof sensor must be rigid, flat and +Z up. Calibration measures a resting
// baseline; it cannot physically level the building or determine actuator direction.
// ============================================================================
void beginCalibration() {
  disarm(); faulted = false; calibrated = false; calibrating = false;
  sensorReady = initSensor();
  if (!sensorReady) {
    Serial.print(F("MPU6050 init failed at stage: ")); Serial.println(initStage);
    Serial.print(F("  i2cAddr=0x")); Serial.print(mpuAddress,16);
    Serial.print(F(" whoAmI=0x")); Serial.println(whoAmI,16);
    Serial.println(F("  Run I2CSCAN to list devices actually answering on the bus."));
    fault(F("MPU6050 did not ACK or configure at 0x68/0x69; check VCC/GND, SDA=A4, SCL=A5"));
    return;
  }
  memset(meanA, 0, sizeof(meanA)); memset(m2A, 0, sizeof(m2A));
  memset(meanW, 0, sizeof(meanW)); memset(m2W, 0, sizeof(m2W));
  yawExceeded = false; gyroQuietThreshold = 2.0f;
  calCount = 0; calibrating = true; dynamicA = 0; velocityEstimate = 0;
  tiltX = 0; tiltY = 0; lastSample = micros(); nextSample = lastSample + SAMPLE_US;
  Serial.println(F("CAL: base on a flat table, roof sensor flat/+Z up. Keep still for 4 seconds."));
}
void calibrateSample(const Sample &s) {
  ++calCount;
  for (uint8_t i=0; i<3; ++i) {
    float da=s.a[i]-meanA[i]; meanA[i]+=da/calCount;
    m2A[i]+=da*(s.a[i]-meanA[i]);
    float dw=s.w[i]-meanW[i]; meanW[i]+=dw/calCount;
    m2W[i]+=dw*(s.w[i]-meanW[i]);
  }
  // Report progress once per 100 fresh samples (approximately one second).
  if (calCount % 100 == 0) {
    Serial.print(F("CAL progress: ")); Serial.print(calCount);
    Serial.println(F("/400 samples. Keep still."));
  }
  if (calCount < CAL_SAMPLES) return;
  // Reject a moving/noisy baseline rather than storing misleading offsets.
  for (uint8_t i=0; i<3; ++i) {
    baselineA[i] = meanA[i]; gyroBias[i] = meanW[i];
    float varA = fmaxf(0,m2A[i]/(CAL_SAMPLES-1));
    float varW = fmaxf(0,m2W[i]/(CAL_SAMPLES-1));
    if (i==MOTION_AXIS) measuredAccelSigma=sqrtf(varA);
    gyroQuietThreshold=fmaxf(gyroQuietThreshold,4.0f*sqrtf(varW));
    if (varA > 0.04f || varW > 1.0f || fabs(gyroBias[i]) > 10) {
      fault(F("Moved during calibration or excessive gyro bias")); return;
    }
    gravity[i] = baselineA[i];
  }
  float norm = sqrt(baselineA[0]*baselineA[0]+baselineA[1]*baselineA[1]+baselineA[2]*baselineA[2]);
  if (norm < 0.85f*G || norm > 1.15f*G || fabs(baselineA[0]) > 0.20f*G
      || fabs(baselineA[1]) > 0.20f*G || baselineA[2] < 0.8f*G) {
    fault(F("Mount board flat, +Z up; check accelerometer readings")); return;
  }
  // Four-sigma start / two-sigma quiet with fixed minimums: no online gain learning.
  accelStartThreshold=Sedar::startThreshold(measuredAccelSigma,ACCEL_START);
  accelQuietThreshold=Sedar::quietThreshold(measuredAccelSigma,ACCEL_QUIET);
  calibrating = false; calibrated = true;
  Serial.println(F("CAL OK. MONITOR: outputs disabled. HELP for next steps."));
}
// ============================================================================
// 07 / LIMITED INDIVIDUAL ACTUATOR PULSES
// TEST1/TEST2 and optional feedback share this gate: one channel, cooldown and
// a rolling pulse budget. This controls commands, not actual measured coil force.
// ============================================================================
// Bleed off accumulated on-time at THERMAL_BUDGET_MS per THERMAL_WINDOW_MS, which
// models cooling as a linear refill. Called from the main loop so the budget
// recovers whether or not pulses are being requested.
void serviceThermal(uint32_t now) {
  uint32_t elapsed = now - thermalLastDecay;
  if (elapsed < 100) return;             // Coarse steps keep the integer maths exact.
  uint32_t bleed = (elapsed * THERMAL_BUDGET_MS) / THERMAL_WINDOW_MS;
  if (!bleed) return;                    // Wait for a whole millisecond of credit.
  // Advance the clock only by the time this bleed actually represents, so the
  // truncated remainder carries into the next call. Consuming the whole elapsed
  // interval would discard that fraction and refill slower than configured.
  thermalLastDecay += (bleed * THERMAL_WINDOW_MS) / THERMAL_BUDGET_MS;
  for (uint8_t i = 0; i < 2; ++i) {
    thermalOnMs[i] = (thermalOnMs[i] > bleed) ? thermalOnMs[i] - bleed : 0;
  }
}
bool startPulse(uint8_t channel, bool manual, uint32_t now) {
  if (channel > 1 || activeChannel >= 0 || faulted || !sensorReady || !calibrated) return false;
  // Thermal budget: refuse if this pulse would exceed the channel's ON-time
  // allowance for the rolling window. Applies to manual TEST commands too, since
  // the coil heats identically whether a human or the controller asked for it.
  if (thermalOnMs[channel] + PULSE_MS > THERMAL_BUDGET_MS) return false;
  if (!manual && (!ENABLE_EXPERIMENTAL_CONTROL || !armed)) return false;
  if (now-lastOff < COOLDOWN_MS) return false;
  // Rolling start-time budget: no fixed-window boundary burst. Unsigned elapsed
  // subtraction handles millis rollover for these short time intervals.
  while (historyCount && now-pulseHistory[historyHead] >= WINDOW_MS) {
    historyHead = (historyHead+1)%MAX_PULSES_PER_WINDOW; --historyCount;
  }
  if (historyCount >= MAX_PULSES_PER_WINDOW) return false;
  // Budget applies to manual tests too; ARM / STOP never reset this budget.
  pulseHistory[(historyHead+historyCount)%MAX_PULSES_PER_WINDOW] = now;
  ++historyCount; outputsOff(); activeChannel = channel;
  pulseStarted = now; manualPulse = manual; writeRelay(channel, true); return true;
}
// ============================================================================
// 08 / FILTERING, MOTION ESTIMATION AND OPTIONAL FEEDBACK
// Every calibrated sample updates the motion display and tilt guard. The default
// build returns before automatic actuation. Filtered velocity is only an estimate.
// ============================================================================
void controlSample(const Sample &s, float dt, uint32_t now) {
  // Remove a slowly varying gravity/bias baseline (time constant 0.75 s).
  // This is a motion detector, NOT full inertial navigation. Tilt contamination
  // remains possible; fixed flat mounting and passive/active tests are essential.
  float raw = SENSOR_SIGN * (s.a[MOTION_AXIS]-gravity[MOTION_AXIS]);
  for (uint8_t i=0; i<3; ++i) gravity[i] += (dt/(0.75f+dt))*(s.a[i]-gravity[i]);
  dynamicA += (dt/(0.04f+dt))*(raw-dynamicA);
  velocityEstimate = (velocityEstimate + dynamicA*dt)/(1.0f+dt/0.35f);
  velocityEstimate = constrain(velocityEstimate, -0.5f, 0.5f);
  // Complementary tilt estimate is a coarse guard, not a calibrated attitude unit.
  float rollA = atan2(s.a[1], s.a[2])*57.29578f;
  float pitchA = atan2(-s.a[0], sqrt(s.a[1]*s.a[1]+s.a[2]*s.a[2]))*57.29578f;
  float blend = 0.75f/(0.75f+dt);
  tiltX = blend*(tiltX+(s.w[0]-gyroBias[0])*dt)+(1-blend)*rollA;
  tiltY = blend*(tiltY+(s.w[1]-gyroBias[1])*dt)+(1-blend)*pitchA;
  if (fabs(tiltX)>MAX_TILT_DEG || fabs(tiltY)>MAX_TILT_DEG) {
    fault(F("Tilt limit exceeded; inspect mounting/mechanism")); return;
  }
  // Offset actuators can inject yaw. Stop commands immediately above the limit;
  // latch a fault only if it persists. This cannot actively cancel yaw torque.
  float yawRate=fabs(s.w[2]-gyroBias[2]);
  if (yawRate>MAX_YAW_RATE_DPS) {
    outputsOff();
    if (!yawExceeded) { yawExceeded=true; yawExceededSince=now; }
    if (now-yawExceededSince>=YAW_FAULT_DWELL_MS) {
      fault(F("Sustained yaw: inspect offset actuator forces")); return;
    }
  } else yawExceeded=false;
  float maxRate=fmaxf(yawRate,fmaxf(fabs(s.w[0]-gyroBias[0]),fabs(s.w[1]-gyroBias[1])));
  bool quiet = fabs(dynamicA)<accelQuietThreshold &&
               fabs(velocityEstimate)<VELOCITY_RELEASE && maxRate<gyroQuietThreshold;
  if (quiet) {
    if (!quietTracking) { quietTracking = true; quietStarted = now; }
    if (now-quietStarted >= QUIET_MS) {
      episode = false; waitingForQuiet = false; velocityEstimate = 0; directionGate.reset();
      if (!manualPulse) outputsOff();
    }
  } else quietTracking = false;
  if (!ENABLE_EXPERIMENTAL_CONTROL || !armed || yawExceeded) return;
  if (episode && now-episodeStarted >= EPISODE_MAX_MS) {
    outputsOff(); episode = false; waitingForQuiet = true;
  }
  if (!episode && !waitingForQuiet && fabs(dynamicA)>accelStartThreshold) {
    episode = true; episodeStarted = now;
  }
  // Ask for OFF before estimated reversal, allowing assumed force-release delay.
  const float offHorizon=(FORCE_RELEASE_MS+TIMING_MARGIN_MS)*0.001f;
  if (activeChannel>=0 && !manualPulse &&
      !Sedar::opposingThroughHorizon(CHANNEL_FORCE_SIGN[activeChannel],
                                    velocityEstimate,dynamicA,offHorizon,VELOCITY_RELEASE))
    outputsOff();
  // Observe direction even when acceleration falls below the actuation gate.
  int8_t direction=directionGate.observe(now,velocityEstimate,VELOCITY_START,DIRECTION_CONFIRM_MS);
  if (!episode || waitingForQuiet || !direction || fabs(dynamicA)<accelQuietThreshold) return;
  int8_t wantedForce=-direction;
  const float fullHorizon=(ACTUATION_DELAY_MS+PULSE_MS+FORCE_RELEASE_MS+TIMING_MARGIN_MS)*0.001f;
  // Skip if constant-acceleration prediction approaches reversal over the entire
  // assumed response window. This is a rejection heuristic, NOT an energy proof.
  if (!Sedar::opposingThroughHorizon(wantedForce,velocityEstimate,dynamicA,
                                    fullHorizon,VELOCITY_RELEASE)) return;
  for (uint8_t i=0;i<2;++i) if (CHANNEL_FORCE_SIGN[i]==wantedForce) {
    if (startPulse(i,false,now)) directionGate.fired(direction);
    break;
  }
}
// ============================================================================
// 09 / SERIAL MONITOR COMMANDS
// Type one command and press Enter with Newline selected, at 115200 baud.
// Dispatch stops any current pulse first; HELP, STOP and calibration disarm.
// ============================================================================
void printStatus() {
  Serial.print(F("sensor=")); Serial.print(sensorReady);
  Serial.print(F(" calibrating=")); Serial.print(calibrating);
  Serial.print(F(" calibrated=")); Serial.print(calibrated);
  Serial.print(F(" fault=")); Serial.print(faulted);
  Serial.print(F(" armed=")); Serial.print(armed);
  Serial.print(F(" axis=")); Serial.print(MOTION_AXIS==0?'X':'Y');
  Serial.print(F(" activeLOW=")); Serial.println(RELAY_ACTIVE_LOW);
  // A non-0x68 whoAmI is a clone, which is normal and not a fault.
  Serial.print(F("i2cAddr=0x")); Serial.print(mpuAddress,16);
  Serial.print(F(" whoAmI=0x")); Serial.println(whoAmI,16);
  Serial.print(F("experimentalControl=")); Serial.println(ENABLE_EXPERIMENTAL_CONTROL);
  Serial.print(F("noiseSigma_m_s2=")); Serial.print(measuredAccelSigma,3);
  Serial.print(F(" start=")); Serial.print(accelStartThreshold,3);
  Serial.print(F(" quiet=")); Serial.println(accelQuietThreshold,3);
  // Remaining coil ON-time allowance per channel before pulses are refused.
  Serial.print(F("thermalUsedMs ch1=")); Serial.print(thermalOnMs[0]);
  Serial.print(F(" ch2=")); Serial.print(thermalOnMs[1]);
  Serial.print(F(" budget=")); Serial.println(THERMAL_BUDGET_MS);
}
void executeCommand() {
  // Human console commands stop outputs first, so long text cannot prolong pulses.
  outputsOff();
  if (!strcmp(commandBuffer,"STOP")) { disarm(); Serial.println(F("STOP: disarmed; both outputs OFF.")); }
  else if (!strcmp(commandBuffer,"CAL") || !strcmp(commandBuffer,"CALIBRATE")) beginCalibration();
  else if (!strcmp(commandBuffer,"ARM")) {
    if (!ENABLE_EXPERIMENTAL_CONTROL) {
      disarm(); Serial.println(F("ARM locked: experimental feedback not validated. See REALITY_CHECK.md."));
    } else if (faulted || !calibrated || !sensorReady || !quietTracking
        || millis()-quietStarted<QUIET_MS) Serial.println(F("ARM refused: calibrate and keep still first."));
    else { armed=true; episode=false; waitingForQuiet=false; velocityEstimate=0; directionGate.reset();
      Serial.println(F("ARMED: brief pulses enabled. STOP disables.")); }
  } else if (!strcmp(commandBuffer,"TEST1") || !strcmp(commandBuffer,"TEST2")) {
    if (armed) Serial.println(F("Send STOP before individual tests."));
    else Serial.println(startPulse(commandBuffer[4]-'1',true,millis())
                        ? F("Test pulse started.") : F("Test refused: calibration/fault/cooldown/budget."));
  } else if (!strcmp(commandBuffer,"STREAM ON")) { streaming=true; Serial.println(F("a_mm_s2,v_mm_s,ch,armed")); }
  else if (!strcmp(commandBuffer,"STREAM OFF")) streaming=false;
  else if (!strcmp(commandBuffer,"STATUS")) printStatus();
  else if (!strcmp(commandBuffer,"I2CSCAN")) {
    // Bus-level truth, independent of any MPU6050 logic: which addresses ACK at all.
    disarm();
    Serial.println(F("I2CSCAN: probing 0x08..0x77"));
    uint8_t seen = 0;
    for (uint8_t addr = 0x08; addr < 0x78; ++addr) {
      Wire.beginTransmission(addr);
      if (Wire.endTransmission() == 0) {
        ++seen; Serial.print(F("  device at 0x")); Serial.println(addr,16);
      }
    }
    if (!seen) {
      // Distinguish "bus idle, nobody home" from "bus electrically stuck".
      Serial.println(F("  none answering."));
      Wire.beginTransmission(0x68);
      uint8_t code = Wire.endTransmission();
      Serial.print(F("  probe 0x68 returned ")); Serial.println(code);
      Serial.println(F("  2=address NACK: powered bus, no device (wiring/address)"));
      Serial.println(F("  5=timeout: SDA/SCL stuck low -- wiring, short, or no pull-ups"));
      Serial.print(F("  SDA(A4)=")); Serial.print(digitalRead(A4));
      Serial.print(F(" SCL(A5)=")); Serial.println(digitalRead(A5));
      Serial.println(F("  Both should read 1 when idle. A 0 means that line is held low."));
    }
    Serial.print(F("  total=")); Serial.println(seen);
  }
  else if (!strcmp(commandBuffer,"HELP")) {
    disarm();
    Serial.println(F("CALIBRATE (or CAL): flat/still calibration. TEST1/TEST2: short test."));
    Serial.println(F("Check relay polarity, rod contact & force direction FIRST."));
    Serial.println(F("ARM: locked in default build. STOP: disable. STATUS: diagnostics."));
    Serial.println(F("STREAM ON/OFF: 10 Hz CSV acceleration/estimated velocity."));
    Serial.println(F("I2CSCAN: list I2C devices answering; use when the sensor faults."));
    Serial.println(F("HELP also disarms. Serial Monitor 115200, Newline."));
  } else Serial.println(F("Unknown command. Send HELP."));
}
void serviceSerial() {
  // Bound processing so a continuous serial stream cannot starve pulse cutoff.
  for (uint8_t n=0; n<16 && Serial.available(); ++n) {
    char c=Serial.read();
    if (c=='\r' || c=='\n') {
      if (commandOverflow) { disarm(); Serial.println(F("Command too long; disarmed.")); }
      else if (commandLength) { commandBuffer[commandLength]=0; executeCommand(); }
      commandLength=0; commandOverflow=false;
    } else if (!commandOverflow) {
      if (commandLength<sizeof(commandBuffer)-1) commandBuffer[commandLength++]=toupper((unsigned char)c);
      else commandOverflow=true;
    }
  }
}
// ============================================================================
// 10 / STARTUP: RUNS ONCE AFTER POWER-UP OR RESET
// Set relay pins OFF before making them outputs, initialize serial/I2C, then
// start automatic stationary calibration. Opening Serial Monitor may reset Nano.
// ============================================================================
void setup() {
  for (uint8_t i=0; i<2; ++i) {
    // Set inactive latch BEFORE enabling output to avoid a firmware startup glitch.
    digitalWrite(RELAY_PINS[i], RELAY_ACTIVE_LOW?HIGH:LOW);
    pinMode(RELAY_PINS[i], OUTPUT);
  }
  pinMode(LED_BUILTIN, OUTPUT); Serial.begin(115200);
  Wire.begin(); Wire.setClock(100000UL);
  Wire.setWireTimeout(3000UL, true); // AVR Boards 1.8.6: bounded I2C fault handling.
  Serial.println(F("SEDAR Nano v1.3 -- monitor/test default. HELP for commissioning."));
  beginCalibration();
}
// ============================================================================
// 11 / MAIN LOOP: REPEATS WHILE POWERED
// A: expire pulses and read commands. B: obtain fresh sensor samples and check
// faults. C: calibrate or estimate motion. D: emit optional CSV and update the LED.
// ============================================================================
void loop() {
  // Step A: enforce requested pulse duration before other work.
  uint32_t now=millis(); servicePulse(now); serviceThermal(now); serviceSerial(); servicePulse(millis());
  // Step B: sample at about 100 Hz; elapsed time uses rollover-safe subtraction.
  uint32_t us=micros();
  if (sensorReady && !faulted && (int32_t)(us-nextSample)>=0) {
    nextSample=us+SAMPLE_US; // Do not replay stale samples after a delay.
    uint32_t elapsed=us-lastSample;
    if (elapsed>50000UL) { fault(F("Sampling stalled for over 50 ms")); return; }
    // A reset MPU can still ACK while using wrong ranges or sleeping. Detect it.
    if (millis()-lastConfigCheck >= 250) {
      lastConfigCheck = millis(); uint8_t cfg[4], power;
      if (!readRegisters(0x19,4,cfg) || !readRegisters(0x6B,1,&power)
          || cfg[0]!=9 || cfg[1]!=3 || cfg[2]!=8 || cfg[3]!=8 || power!=1) {
        fault(F("Sensor configuration changed or read failed")); return;
      }
    }
    // Do not integrate a repeated output register as a fresh measurement.
    uint8_t ready;
    if (!readRegisters(0x3A,1,&ready)) { fault(F("Sensor status read failed")); return; }
    if (!(ready & 0x01)) { servicePulse(millis()); return; }
    Sample sample;
    if (!readSample(sample)) { fault(F("Sensor read failure or measurement saturation")); return; }
    lastSample=us;
    // Step C: a sample belongs either to calibration or to normal monitoring.
    if (calibrating) calibrateSample(sample);
    else if (calibrated) controlSample(sample, elapsed*0.000001f, millis());
  }
  // Step D: optional human-readable telemetry and the status LED.
  // Short integer-only CSV fits TX buffer; never block a relay pulse for telemetry.
  if (streaming && calibrated && millis()-lastReport>=100 && Serial.availableForWrite()>=48) {
    lastReport=millis();
    Serial.print((long)(dynamicA*1000)); Serial.print(',');
    Serial.print((int)(velocityEstimate*1000)); Serial.print(',');
    Serial.print(activeChannel+1); Serial.print(','); Serial.println(armed?1:0);
  }
  digitalWrite(LED_BUILTIN, faulted ? ((millis()/150)%2) : (armed?HIGH:LOW));
}
