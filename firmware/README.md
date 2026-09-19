# SEDAR Nano — wiring, upload and commissioning

This sketch targets the **classic 5 V Arduino Nano / ATmega328P**, a roof-mounted MPU6050 and a two-channel relay module with built-in drivers. It uses only `Wire`, included with Arduino AVR Boards 1.8.6. No separate MPU6050 library is needed.

The sketch compiles for this board but has **not been tested on your physical mechanism**. Unknown relay polarity, actuator force direction and component ratings prevent a guarantee of first-upload stabilization. It starts disarmed: calibrate, monitor, test each channel, then explicitly arm. The website uses ideal damping; real relays deliver short ON/OFF pulses.

## 1. Hardware placement

Use four retained springs on four base-fixed screws; each screw enters its spring by 12.7 mm (1/2 inch). Match screw diameter to the spring bore. Secure the building on the spring-supported platform. Mount the sensor firmly on its roof, **flat with +Z up**, and the marked X axis along actuator travel. Leave a flexible cable loop.

Center one solenoid between S1/S2 and the other between S3/S4; mirror their working strokes. Check spring contact, clearance and return action. Do not lengthen a real rod based on the illustration. Keep electronics on the fixed base. The website has an illustrated 20-step assembly guide.

## 2. Wiring

Disconnect power before changing wires. Keep the **12 V relay-contact/coil branch disconnected** during upload and initial relay checks.

| Connection | Destination / note |
| --- | --- |
| Nano A4 | MPU6050 SDA |
| Nano A5 | MPU6050 SCL |
| Sensor GND | Common logic ground |
| Sensor VCC | Supply specified for the exact breakout; a bare MPU6050 is not a 5 V device. Verify I2C logic compatibility; use level shifting if required. |
| Sensor AD0 | GND when appropriate, address 0x68; sketch also probes 0x69 |
| Sensor INT | Unused; polling needs no interrupt connection |
| Nano D8 / D9 | Relay IN1 / IN2 |
| Buck OUT+, adjusted to 5.0 V first | Nano 5V and relay logic VCC, not Nano VIN |
| Buck OUT- | Nano and relay GND |
| Switched, fused 12 V | Buck IN+ and both relay COM terminals |
| Adapter negative | Buck IN- and common power ground |
| Relay 1 NO / Relay 2 NO | Solenoid 1 positive / Solenoid 2 positive; NC unused |
| Coil negatives | Separate appropriately sized returns to common power ground |
| Diode across each coil | Striped cathode to positive, anode to negative; rating matched to coil |

Verify the relay module's VCC/JD-VCC/isolation requirements. Do not drive a bare relay or solenoid from a Nano pin. The module's relay-coil suppression does not replace the diode across each external solenoid. Never route coil current through the Nano or breadboard. Select fuse, adapter, wire and contact ratings from actual loads.

Avoid simultaneous USB and external 5 V unless the particular Nano's power arrangement supports it. During reset/bootloader, pins are inputs: firmware cannot hold them OFF. If the relay module lacks an appropriate OFF bias, use a module-compatible pull-up for active-LOW or pull-down for active-HIGH. Verify startup/reset with coil power disconnected.

## 3. Upload in Arduino IDE

1. Extract `SEDAR-Arduino.zip`. Open `SEDAR_Nano/SEDAR_Nano.ino`, keeping the matching folder name.
2. Install **Arduino AVR Boards 1.8.6 or later** through Boards Manager.
3. Review the constants at the top. Set `RELAY_ACTIVE_LOW` to match the actual relay module before powering its logic.
4. Connect the Nano using a USB data cable with the coil branch disconnected. Select **Arduino AVR Boards → Arduino Nano**, **Processor → ATmega328P**, and the correct port.
5. Click Verify, then Upload. If a classic clone fails to synchronize, try **ATmega328P (Old Bootloader)**. Check the cable, port and board-specific USB-serial driver too.
6. Open Serial Monitor at **115200 baud**, with **Newline** selected. Opening it normally resets a classic Nano.
7. Keep the model still for four seconds. Wait for `CAL OK. MONITOR: outputs disabled.` If calibration fails, fix the cause, keep still and send `CAL`.

Do not select Nano Every, Nano 33 or Nano ESP32. Uploading stores the sketch through power cycles, but this version deliberately boots disarmed on every reset. Arming requires Serial Monitor; there is no standalone arm button or persistent auto-arm mode.

## 4. Commission step by step

### A. Sensor only

Send `STATUS`, then `STREAM ON`. CSV columns are `a_mm_s2,v_mm_s,ch,armed`. Acceleration is filtered dynamic acceleration, not raw gravity-inclusive data. Velocity is a short-term leaky estimate, not precision measurement. Channel 0 means none, 1 means D8, 2 means D9. Armed is 0 or 1.

Readings should be small at rest. Gently move the platform along the marked axis and check the sign. Send `STREAM OFF` to finish. Secure loose mounting or noisy wiring before changing thresholds. Calibration requires a flat board with Z upward.

### B. Relay logic, coil power still disconnected

Send `TEST1`, wait a second, then `TEST2`. Each requests at most a 40 ms pulse. Confirm the correct channel briefly closes COM–NO and opens again; LEDs alone do not establish contact wiring. Both must stay OFF at startup, reset, STOP and faults. If polarity is wrong, disconnect power, edit `RELAY_ACTIVE_LOW`, re-upload and repeat.

### C. Individual powered actuators

Disconnect all power before reconnecting the fused coil branch. Use the actual coil voltage and duty limits. Keep clear and test each actuator separately. Check return action, clearance and the **resulting platform force**, not just rod motion.

Defaults assume channel 1 gives negative/left force and channel 2 positive/right force: `CHANNEL_FORCE_SIGN = {-1, 1}`. Swap these signs if actual forces are reversed. If both act in the same direction, fix mounting. Set `SENSOR_SIGN = -1` if the sensor axis opposes the defined positive direction. Set `MOTION_AXIS = 1` if Y, rather than X, aligns with travel. Re-upload after edits.

### D. Passive versus controlled trial

1. Send `STOP`. Apply a small repeatable base movement and record passive behavior.
2. Let it settle. Send `ARM`; it requires successful calibration and 700 ms of quiet.
3. Repeat the same input. Observe settling, contact timing and twisting from the offset actuators.
4. Send `STOP` if motion increases. Check signs, delay and contacts instead of increasing force.
5. Keep the physical power switch accessible. Serial STOP is not an independent hardware emergency stop.

## 5. How the code works

- Samples the MPU6050 at approximately 100 Hz, ±4 g and ±500°/s, with approximately 44 Hz accelerometer low-pass filtering. Checks identity and configured registers.
- Uses 400 stationary samples to estimate gravity/bias and gyro offsets; rejects noisy/moving or incorrectly oriented calibration.
- Removes a slowly changing acceleration baseline, smooths the signal and uses a 0.35-second leaky velocity estimate to limit drift.
- Selects a channel opposing estimated velocity. Only one channel can be active at a time. Pulses last at most 40 ms and can release earlier at reversal; both channels then wait at least 220 ms.
- Allows six pulses per five-second fixed window. This is a software budget, not a measured thermal rating. A window boundary can increase short-term pulse density, still limited by cooldown. Reduce settings when component ratings require it.
- Ends an episode after eight seconds and requires sustained quiet before another. Quiet resets residual velocity estimates, preventing indefinite noise-driven pulses.
- Latches outputs OFF for I2C failure, saturation, excessive estimated tilt or sampling stalls over 50 ms. `CAL` reinitializes and recalibrates.
- Uses a 3 ms Wire timeout and checks pulse expiry before serial/sensor work. The 60 ms guard is software, not protection against a crashed processor or welded relay. Keep the physical switch accessible.

The built-in LED is OFF in monitor/calibration, steady ON when armed, and blinking on fault.

## 6. Serial commands

| Command | Effect |
| --- | --- |
| HELP | Prints help and disarms |
| STATUS | Sensor, calibration, fault, arming, axis and polarity |
| CAL | Disarms, initializes and starts stationary calibration |
| TEST1 / TEST2 | One bounded pulse while disarmed and calibrated |
| ARM | Enables control after sustained quiet |
| STOP | Disarms and switches both outputs OFF |
| STREAM ON / STREAM OFF | Starts/stops 10 Hz CSV telemetry |

Commands are case-insensitive and need a newline. Every nonempty command stops the current pulse before processing. STATUS and STREAM preserve arming. HELP, CAL and STOP disarm; an overlong command also disarms. Tests share the pulse budget, so a refused test can mean cooldown or budget exhaustion.

## 7. Initial tuning values

| Constant | Default | Meaning |
| --- | --- | --- |
| ACCEL_START | 0.40 m/s² | Episode threshold |
| ACCEL_QUIET | 0.18 m/s² | Quiet / noise hysteresis |
| VELOCITY_START | 0.025 m/s | Minimum estimated speed for a pulse |
| VELOCITY_RELEASE | 0.008 m/s | Release near rest/reversal |
| PULSE_MS | 40 ms | Maximum requested pulse |
| COOLDOWN_MS | 220 ms | Shared off interval |
| MAX_PULSES_PER_WINDOW | 6 per 5 s | Pulse budget |
| EPISODE_MAX_MS | 8000 ms | Response limit until quiet |
| MAX_TILT_DEG | 15° | Coarse tilt guard |

Use stationary logs to set thresholds above noise; change one parameter at a time. Mechanical relays may be too slow for shorter pulses. Do not exceed coil duty limits. A roof accelerometer cannot independently measure base motion, spring travel or contact force. Tilt contaminates acceleration; filtering and leaky integration introduce phase error. The complementary tilt guard is also affected by translation. Hardware measurements and repeated passive/active tests are essential; the geometry may require a different control arrangement.

## 8. Troubleshooting

- **MPU not found:** check specified supply, ground, A4/A5, AD0, logic levels and I2C pull-ups. Do not raise voltage blindly.
- **Calibration fault:** hold the secured sensor still; mount it flat with Z upward; send CAL.
- **Sampling fault:** check short, secure I2C wiring, separation from coils and supply integrity.
- **ARM refused:** wait quietly after successful calibration and clear faults with CAL.
- **No actuator movement:** check polarity, COM/NO, supply, pulse budget and actual ratings. Do not extend pulses beyond coil limits.
- **Continuous/chattering relays:** STOP; inspect polarity, noise and uploaded settings. Defaults do not command continuous energization.
- **Motion worsens:** STOP; verify resulting force sign, sensor orientation, release delay, contacts and yaw.

## References and validation

[Arduino Nano](https://docs.arduino.cc/hardware/nano/), [TDK MPU6050 register map](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf), [Arduino AVR Wire](https://github.com/arduino/ArduinoCore-avr/tree/master/libraries/Wire).

Compiled with `arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328 SEDAR_Nano`, AVR core 1.8.6. No physical device was flashed or stability-tested during preparation.
