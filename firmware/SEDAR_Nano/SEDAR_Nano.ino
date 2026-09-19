/*
  SEDAR -- four-spring college demonstrator, classic Arduino Nano (ATmega328P)
  Revision 1.0. Read ../README.md BEFORE connecting the 12 V coil branch.

  Hardware: roof MPU6050, two DRIVER-equipped relay module inputs, two
  mirrored spring-contact solenoids. Nano outputs NEVER drive coils directly.
  A4=SDA, A5=SCL, D8=IN1, D9=IN2. Polling: INT is not required.

  No third-party libraries: Wire is included in Arduino AVR Boards.
  Serial Monitor: 115200 baud, Newline. Boot -> calibrate -> MONITOR only.
  Commands: HELP STATUS CAL TEST1 TEST2 ARM STOP STREAM ON STREAM OFF

  This is a conservative experimental controller, not a validated seismic
  protection system. It cannot know spring displacement or ground acceleration
  from a roof accelerometer alone. A high-pass acceleration signal and leaky
  velocity estimate choose brief opposing pulses. Contact geometry, mechanical
  delay, sensor tilt and relay delay can make a pulse ADD energy. Compare
  passive/active trials and STOP if motion or twisting increases.
*/
#include <Wire.h>
#include <math.h>
#include <string.h>
#include <ctype.h>

// -------------------- SETTINGS TO VERIFY ON YOUR HARDWARE --------------------
const uint8_t RELAY_PINS[2] = {8, 9};
const bool RELAY_ACTIVE_LOW = true; // Change to false ONLY for active-HIGH modules.
const uint8_t MOTION_AXIS = 0;      // 0=X, 1=Y. Mount that axis along actuator travel.
const int8_t SENSOR_SIGN = 1;       // +1 or -1: defines positive motion direction.
// Resulting PLATFORM force, not merely the rod's visual direction:
constexpr int8_t CHANNEL_FORCE_SIGN[2] = {-1, 1}; // Verify with TEST1 / TEST2.

// Starting bench values, NOT measured ratings of your unknown solenoids.
const uint16_t PULSE_MS = 40;       // Reduce if the coil's specification requires it.
const uint16_t HARD_MAX_ON_MS = 60;
const uint16_t COOLDOWN_MS = 220;   // Both channels remain off between pulses.
const uint16_t WINDOW_MS = 5000;
const uint8_t MAX_PULSES_PER_WINDOW = 6; // <=240 ms commanded ON in a 5 s window.
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
static_assert(CHANNEL_FORCE_SIGN[0] != CHANNEL_FORCE_SIGN[1], "Channels must oppose");

struct Sample { float a[3]; float w[3]; }; // acceleration m/s^2; angular rate deg/s.
uint8_t mpuAddress = 0;
bool sensorReady = false, calibrated = false, calibrating = false;
bool faulted = false, armed = false, streaming = false;
bool episode = false, waitingForQuiet = false, quietTracking = false;
int8_t activeChannel = -1;
bool manualPulse = false;
uint32_t pulseStarted = 0, lastOff = 0, windowStarted = 0;
uint32_t episodeStarted = 0, quietStarted = 0, nextSample = 0, lastSample = 0;
uint32_t lastReport = 0;
uint8_t pulsesInWindow = 0;
uint16_t calCount = 0;
float sumA[3] = {}, sumSqA[3] = {}, sumW[3] = {}, sumSqW[3] = {};
float baselineA[3] = {}, gyroBias[3] = {}, gravity[3] = {};
float dynamicA = 0, velocityEstimate = 0, tiltX = 0, tiltY = 0;
char commandBuffer[24];
uint8_t commandLength = 0;
bool commandOverflow = false;

void writeRelay(uint8_t channel, bool on) {
  digitalWrite(RELAY_PINS[channel], (on == RELAY_ACTIVE_LOW) ? LOW : HIGH);
}
void outputsOff() {
  writeRelay(0, false); writeRelay(1, false);
  if (activeChannel >= 0) lastOff = millis();
  activeChannel = -1; manualPulse = false;
}
void disarm() {
  outputsOff(); armed = false; episode = false; waitingForQuiet = false;
  quietTracking = false; velocityEstimate = 0;
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
  // Configure while disarmed. WHO_AM_I returns 0x68 even with AD0 high (0x69).
  uint8_t id = 0;
  for (uint8_t n = 0; n < 2; ++n) {
    mpuAddress = 0x68 + n;
    if (readRegisters(0x75, 1, &id) && id == 0x68) break;
    if (n == 1) return false;
  }
  if (!writeRegister(0x6B, 0x01)) return false; // Wake, PLL clock.
  delay(100);                               // Only during disarmed initialization.
  if (!writeRegister(0x6C, 0x00) ||           // All axes awake.
      !writeRegister(0x1A, 0x03) ||           // DLPF: gyro ~42 Hz, accel ~44 Hz.
      !writeRegister(0x19, 0x09) ||           // 1 kHz / (1+9) = 100 Hz.
      !writeRegister(0x1B, 0x08) ||           // Gyro +/-500 deg/s: 65.5 LSB/(deg/s).
      !writeRegister(0x1C, 0x08)) return false; // Accel +/-4 g: 8192 LSB/g.
  uint8_t settings[4];
  if (!readRegisters(0x19, 4, settings)) return false;
  return settings[0] == 9 && settings[1] == 3 && settings[2] == 8 && settings[3] == 8;
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
void beginCalibration() {
  disarm(); faulted = false; calibrated = false; calibrating = false;
  sensorReady = initSensor();
  if (!sensorReady) { fault(F("MPU6050 not found/configured; check power/SDA/SCL")); return; }
  memset(sumA, 0, sizeof(sumA)); memset(sumSqA, 0, sizeof(sumSqA));
  memset(sumW, 0, sizeof(sumW)); memset(sumSqW, 0, sizeof(sumSqW));
  calCount = 0; calibrating = true; dynamicA = 0; velocityEstimate = 0;
  tiltX = 0; tiltY = 0; lastSample = micros(); nextSample = lastSample + SAMPLE_US;
  Serial.println(F("CAL: keep roof sensor level and entire model still for 4 seconds."));
}
void calibrateSample(const Sample &s) {
  for (uint8_t i=0; i<3; ++i) {
    sumA[i] += s.a[i]; sumSqA[i] += s.a[i]*s.a[i];
    sumW[i] += s.w[i]; sumSqW[i] += s.w[i]*s.w[i];
  }
  if (++calCount < CAL_SAMPLES) return;
  for (uint8_t i=0; i<3; ++i) {
    baselineA[i] = sumA[i]/CAL_SAMPLES; gyroBias[i] = sumW[i]/CAL_SAMPLES;
    float varA = sumSqA[i]/CAL_SAMPLES - baselineA[i]*baselineA[i];
    float varW = sumSqW[i]/CAL_SAMPLES - gyroBias[i]*gyroBias[i];
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
  calibrating = false; calibrated = true;
  Serial.println(F("CAL OK. MONITOR: outputs disabled. HELP for next steps."));
}
bool startPulse(uint8_t channel, bool manual, uint32_t now) {
  if (channel > 1 || activeChannel >= 0 || faulted || !sensorReady || !calibrated) return false;
  if (now-lastOff < COOLDOWN_MS) return false;
  if (now-windowStarted >= WINDOW_MS) { windowStarted = now; pulsesInWindow = 0; }
  if (pulsesInWindow >= MAX_PULSES_PER_WINDOW) return false;
  // Budget applies to manual tests too; ARM / STOP never reset this budget.
  ++pulsesInWindow; outputsOff(); activeChannel = channel;
  pulseStarted = now; manualPulse = manual; writeRelay(channel, true); return true;
}
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
  bool quiet = fabs(dynamicA)<ACCEL_QUIET && fabs(velocityEstimate)<VELOCITY_RELEASE;
  if (quiet) {
    if (!quietTracking) { quietTracking = true; quietStarted = now; }
    if (now-quietStarted >= QUIET_MS) {
      episode = false; waitingForQuiet = false; velocityEstimate = 0;
      if (!manualPulse) outputsOff();
    }
  } else quietTracking = false;
  if (!armed) return;
  if (episode && now-episodeStarted >= EPISODE_MAX_MS) {
    outputsOff(); episode = false; waitingForQuiet = true;
  }
  if (!episode && !waitingForQuiet && fabs(dynamicA)>ACCEL_START) {
    episode = true; episodeStarted = now;
  }
  // Release as soon as the estimated force would assist the movement. Mechanical
  // relay opening and flyback current decay still take time in the real hardware.
  if (activeChannel >= 0 && !manualPulse
      && CHANNEL_FORCE_SIGN[activeChannel]*velocityEstimate >= -VELOCITY_RELEASE) outputsOff();
  if (!episode || waitingForQuiet || fabs(dynamicA)<ACCEL_QUIET
      || fabs(velocityEstimate)<VELOCITY_START) return;
  int8_t wantedForce = velocityEstimate > 0 ? -1 : 1;
  for (uint8_t i=0; i<2; ++i) if (CHANNEL_FORCE_SIGN[i]==wantedForce) {
    startPulse(i, false, now); break;
  }
}
void printStatus() {
  Serial.print(F("sensor=")); Serial.print(sensorReady);
  Serial.print(F(" calibrated=")); Serial.print(calibrated);
  Serial.print(F(" fault=")); Serial.print(faulted);
  Serial.print(F(" armed=")); Serial.print(armed);
  Serial.print(F(" axis=")); Serial.print(MOTION_AXIS==0?'X':'Y');
  Serial.print(F(" activeLOW=")); Serial.println(RELAY_ACTIVE_LOW);
}
void executeCommand() {
  // Human console commands stop outputs first, so long text cannot prolong pulses.
  outputsOff();
  if (!strcmp(commandBuffer,"STOP")) { disarm(); Serial.println(F("STOP: disarmed; both outputs OFF.")); }
  else if (!strcmp(commandBuffer,"CAL")) beginCalibration();
  else if (!strcmp(commandBuffer,"ARM")) {
    if (faulted || !calibrated || !sensorReady || !quietTracking
        || millis()-quietStarted<QUIET_MS) Serial.println(F("ARM refused: calibrate and keep still first."));
    else { armed=true; episode=false; waitingForQuiet=false; velocityEstimate=0;
      Serial.println(F("ARMED: brief pulses enabled. STOP disables.")); }
  } else if (!strcmp(commandBuffer,"TEST1") || !strcmp(commandBuffer,"TEST2")) {
    if (armed) Serial.println(F("Send STOP before individual tests."));
    else Serial.println(startPulse(commandBuffer[4]-'1',true,millis())
                        ? F("Test pulse started.") : F("Test refused: calibration/fault/cooldown/budget."));
  } else if (!strcmp(commandBuffer,"STREAM ON")) { streaming=true; Serial.println(F("a_mm_s2,v_mm_s,ch,armed")); }
  else if (!strcmp(commandBuffer,"STREAM OFF")) streaming=false;
  else if (!strcmp(commandBuffer,"STATUS")) printStatus();
  else if (!strcmp(commandBuffer,"HELP")) {
    disarm();
    Serial.println(F("CAL: stationary calibration. TEST1/TEST2: one short pulse."));
    Serial.println(F("Check relay polarity, rod contact & force direction FIRST."));
    Serial.println(F("ARM: enable from quiet. STOP: disable. STATUS: diagnostics."));
    Serial.println(F("STREAM ON/OFF: 10 Hz CSV acceleration/estimated velocity."));
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
void setup() {
  for (uint8_t i=0; i<2; ++i) {
    // Set inactive latch BEFORE enabling output to avoid a firmware startup glitch.
    digitalWrite(RELAY_PINS[i], RELAY_ACTIVE_LOW?HIGH:LOW);
    pinMode(RELAY_PINS[i], OUTPUT);
  }
  pinMode(LED_BUILTIN, OUTPUT); Serial.begin(115200);
  Wire.begin(); Wire.setClock(100000UL);
  Wire.setWireTimeout(3000UL, true); // AVR Boards 1.8.6: bounded I2C fault handling.
  Serial.println(F("SEDAR Nano v1.0 -- boots disarmed. HELP for commissioning."));
  beginCalibration();
}
void loop() {
  uint32_t now=millis(); servicePulse(now); serviceSerial(); servicePulse(millis());
  uint32_t us=micros();
  if (sensorReady && !faulted && (int32_t)(us-nextSample)>=0) {
    nextSample=us+SAMPLE_US; // Do not replay stale samples after a delay.
    uint32_t elapsed=us-lastSample;
    if (elapsed>50000UL) { fault(F("Sampling stalled for over 50 ms")); return; }
    Sample sample;
    if (!readSample(sample)) { fault(F("Sensor read failure or measurement saturation")); return; }
    lastSample=us;
    if (calibrating) calibrateSample(sample);
    else if (calibrated) controlSample(sample, elapsed*0.000001f, millis());
  }
  // Short integer-only CSV fits TX buffer; never block a relay pulse for telemetry.
  if (streaming && calibrated && millis()-lastReport>=100 && Serial.availableForWrite()>=48) {
    lastReport=millis();
    Serial.print((long)(dynamicA*1000)); Serial.print(',');
    Serial.print((int)(velocityEstimate*1000)); Serial.print(',');
    Serial.print(activeChannel+1); Serial.print(','); Serial.println(armed?1:0);
  }
  digitalWrite(LED_BUILTIN, faulted ? ((millis()/150)%2) : (armed?HIGH:LOW));
}
