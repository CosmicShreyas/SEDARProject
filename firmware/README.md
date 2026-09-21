# SEDAR Nano — wiring, upload and commissioning

This sketch targets the **classic 5 V Arduino Nano / ATmega328P**, a roof-mounted MPU6050 and a two-channel relay module with built-in drivers. It uses only `Wire`, included with Arduino AVR Boards 1.8.6. No separate MPU6050 library is needed.

The sketch compiles for this board but has **not been tested on your physical mechanism**. Unknown relay polarity, actuator force direction and component ratings prevent a guarantee of first-upload stabilization. It starts disarmed: calibrate, monitor, test each channel, then review the mechanical findings in REALITY_CHECK.md. Automatic feedback is disabled in the default build. The website uses ideal damping; real relays deliver short ON/OFF pulses.

## Start here: how to talk to the firmware

You send commands through **Arduino IDE's Serial Monitor**, not by editing the sketch each time and not through the SEDAR website. The Nano must be connected to your computer with a USB data cable. Choose its port, open **Tools → Serial Monitor**, set **115200 baud** and **Newline**, type a command in the input box, and press **Enter / Send**. Send one command at a time; wait for its response before continuing. Commands are case-insensitive: `calibrate` and `CALIBRATE` both work. Do not include backticks, quotes or explanations when typing.

### First session: exact order

1. **Before powering up**, place the complete base on a flat, level, stable table. Let the platform settle. Mount the roof sensor flat with its +Z axis upward. Keep the 12 V solenoid branch disconnected for the initial checks.
2. Connect the Nano and open Serial Monitor. It usually resets and begins calibration automatically. Keep your hands off the model and wait for the four progress messages, then `CAL OK. MONITOR: outputs disabled.`
3. Send `HELP` to see the commands. This also keeps automatic outputs disarmed.
4. Send `CALIBRATE` if you missed startup calibration, moved the sensor, changed its mounting, or received a calibration fault. Hold everything still until `CAL OK` appears. You do not need to send it again if startup calibration succeeded and the mounting has not changed.
5. Send `STATUS`. For a ready default build, expect `sensor=1 calibrating=0 calibrated=1 fault=0 armed=0` and `experimentalControl=0`. The axis and activeLOW values reflect your settings.
6. Send `STREAM ON`. Watch the numbers while gently moving the platform. This displays measurements; it does **not** enable automatic solenoid response. Send `STREAM OFF` when finished.
7. With coil power still disconnected, send `TEST1`, wait at least one second, then send `TEST2`. Check the appropriate relay briefly switches and returns OFF. These commands can actuate the solenoids when their power branch is connected, so do not send them casually.
8. Send `STOP` when finished. Keep automatic control locked until the mechanical checks in `REALITY_CHECK.md` have been completed.

### Before each demonstration

Place the base flat, allow all motion to stop, then power up and wait for successful calibration. If already powered and you want a fresh baseline, send `STOP`, `STREAM OFF`, then `CALIBRATE` **one at a time**. Wait for `CAL OK`, then check `STATUS`. Start sensing with `STREAM ON`; use individual actuator tests only after the power and direction checks below. At the end, send `STOP` and `STREAM OFF` and turn off the physical supply.

**Default behavior:** the uploaded sketch is a measurement and individual-actuator-test tool. It does not automatically stabilize when you shake the building. `ARM` is deliberately refused in the default build; `CALIBRATE` does not unlock it.

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
| Sensor WHO_AM_I | Not a gate. Clone modules sold as MPU6050 report 0x70/0x72/0x73/0x98 instead of 0x68 and work normally; `STATUS` prints `i2cAddr` and `whoAmI` for diagnosis. |

### If the sensor faults at startup

The fault now names the stage that failed, and `I2CSCAN` lists what is really on the bus.

| Symptom | Meaning |
| --- | --- |
| `I2CSCAN` reports `total=0`, `probe 0x68 returned 2` | Bus is electrically healthy but nothing is at that address. Wiring or power to the module: check VCC, that GND is **common with the Nano**, and that SDA/SCL are not swapped. |
| `I2CSCAN` reports `total=0`, `probe 0x68 returned 5` | SDA or SCL is stuck low: a short, a miswire, or a missing pull-up. The `SDA(A4)=`/`SCL(A5)=` line says which; both must read 1 when idle. |
| `SDA(A4)=0` or `SCL(A5)=0` | That line is held low. Most often SDA/SCL swapped, a solder bridge, or the module unpowered while still connected. |
| `I2CSCAN` lists 0x68 or 0x69, but init still fails | The bus is fine; read the reported stage. A stuck reset or "still asleep" points at a marginal supply or a clone needing longer settling. |
| `I2CSCAN` lists an address that is neither 0x68 nor 0x69 | Wrong sensor module, or AD0 floating at an odd level. |
| Stage says `config read back wrong values` | The part ACKs but will not hold configuration — typically an unstable 3.3 V rail or long/unshielded I2C leads. |

Long jumper leads and breadboards are the usual cause of intermittent ACK failures. Keep SDA/SCL short; the Nano's internal pull-ups are weak and most breakouts already carry their own.
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

1. Extract the GitHub repository ZIP. Open `SEDARProject-main/firmware/SEDAR_Nano/SEDAR_Nano.ino`, keeping `PulsePolicy.h` beside it. If using the firmware-only ZIP, open `SEDAR_Nano/SEDAR_Nano.ino`.
2. Install **Arduino AVR Boards 1.8.6 or later** through Boards Manager.
3. Review the constants at the top. Set `RELAY_ACTIVE_LOW` to match the actual relay module before powering its logic.
4. Connect the Nano using a USB data cable with the coil branch disconnected. Select **Arduino AVR Boards → Arduino Nano**, **Processor → ATmega328P**, and the correct port.
5. Click Verify, then Upload. If a classic clone fails to synchronize, try **ATmega328P (Old Bootloader)**. Check the cable, port and board-specific USB-serial driver too.
6. Open Serial Monitor at **115200 baud**, with **Newline** selected. Opening it normally resets a classic Nano.
7. Keep the model still for four seconds. Wait for `CAL OK. MONITOR: outputs disabled.` If calibration fails, fix the cause, keep still and send `CAL`.

Do not select Nano Every, Nano 33 or Nano ESP32. Uploading stores the sketch through power cycles, but this version deliberately boots disarmed on every reset. ARM is locked while ENABLE_EXPERIMENTAL_CONTROL is false (the default). There is no standalone arm button or persistent auto-arm mode.

## 4. Commission step by step

### A. Sensor only

Send `STATUS`, then `STREAM ON`. CSV columns are `a_mm_s2,v_mm_s,ch,armed`. Acceleration is filtered dynamic acceleration, not raw gravity-inclusive data. Velocity is a short-term leaky estimate, not precision measurement. Channel 0 means none, 1 means D8, 2 means D9. Armed is 0 or 1.

Readings should be small at rest. Gently move the platform along the marked axis and check the sign. Send `STREAM OFF` to finish. Secure loose mounting or noisy wiring before changing thresholds. Calibration requires a flat board with Z upward.

### B. Relay logic, coil power still disconnected

Send `TEST1`, wait a second, then `TEST2`. Each requests a nominal 40 ms pulse; processing and mechanical release add delay. Confirm the correct channel briefly closes COM–NO and opens again; LEDs alone do not establish contact wiring. Both must stay OFF at startup, reset, STOP and faults. If polarity is wrong, disconnect power, edit `RELAY_ACTIVE_LOW`, re-upload and repeat.

### C. Individual powered actuators

Disconnect all power before reconnecting the fused coil branch. Use the actual coil voltage and duty limits. Keep clear and test each actuator separately. Check return action, clearance and the **resulting platform force**, not just rod motion.

Defaults assume channel 1 gives negative/left force and channel 2 positive/right force: `CHANNEL_FORCE_SIGN = {-1, 1}`. Swap these signs if actual forces are reversed. If both act in the same direction, fix mounting. Set `SENSOR_SIGN = -1` if the sensor axis opposes the defined positive direction. Set `MOTION_AXIS = 1` if Y, rather than X, aligns with travel. Re-upload after edits.

### D. Reality check before feedback

Read `REALITY_CHECK.md`. The default sketch deliberately refuses ARM. It supports passive measurements and individual pulses; no automatic stabilization has been established for the actual mechanism. Opposite forces at opposite row offsets can both produce yaw in the same direction. A delayed pulse can add energy after motion reverses.

Only a measured bench-development process should consider changing `ENABLE_EXPERIMENTAL_CONTROL` to true. Even then, the algorithm remains experimental, requires quiet before ARM, and may worsen motion. Compare repeatable passive and controlled trials and STOP if motion or twisting increases. Keep the physical power switch accessible; Serial STOP is not an independent hardware emergency stop.

## 5. How the code works

- Samples the MPU6050 at approximately 100 Hz, ±4 g and ±500°/s, with approximately 44 Hz accelerometer low-pass filtering. Checks identity and configured registers.
- Uses 400 stationary samples and running variance to estimate gravity/bias, noise thresholds and gyro offsets; rejects noisy/moving or incorrectly oriented calibration.
- Removes a slowly changing acceleration baseline, smooths the signal and uses a 0.35-second leaky velocity estimate to limit drift.
- In the optional experimental build only, selects a channel opposing estimated velocity. Only one channel can be active at a time. Pulses request 40 ms and can release earlier at reversal; loop processing and real relay/coil release add delay; both channels then wait at least 220 ms.
- Allows at most six pulse starts per rolling five-second window. This is a software budget, not a measured thermal rating. Reduce settings when component ratings require it.
- Ends an episode after eight seconds and requires sustained quiet before another. Quiet resets residual velocity estimates, preventing indefinite noise-driven pulses.
- Checks data-ready and periodically rechecks sensor configuration. Latches outputs OFF for I2C failure, configuration changes or missing fresh samples over 50 ms. `CAL` reinitializes and recalibrates.
- Uses a 3 ms Wire timeout and checks pulse expiry before serial/sensor work. The 60 ms guard is software, not protection against a crashed processor or welded relay. Keep the physical switch accessible.

The built-in LED is OFF in monitor/calibration, steady ON when armed, and blinking on fault.

## 6. Commands: what to type, when and what happens

| Type exactly | When to use it | What it does / expected result |
| --- | --- | --- |
| `HELP` | When you forget the commands | Prints a short command list, stops any pulse and disarms automatic control. It does not erase a valid calibration. |
| `STATUS` | After calibration, before tests, or while diagnosing a problem | Prints sensor/calibration/fault/arming flags, selected axis, relay polarity and experimental-control setting. It ends a pulse currently in progress but otherwise preserves arming. |
| `CALIBRATE` | Before a session when you need a fresh resting baseline, after changing sensor mounting, or after correcting a fault | Stops and disarms outputs, initializes the sensor and collects 400 still samples. Takes about four seconds. Prints progress and `CAL OK`, or a fault explanation. |
| `CAL` | Whenever you would use CALIBRATE | Short alias for exactly the same calibration procedure. |
| `STREAM ON` | To see what the sensor/estimator is reporting | Starts CSV readings about 10 times per second. Does not arm, calibrate or run an actuator test. |
| `STREAM OFF` | When you want readable command replies or have finished recording | Stops CSV output only. It is **not** a substitute for STOP in an experimental armed build. |
| `TEST1` | During deliberate channel-1 commissioning, initially without coil power | Requests one nominal 40 ms pulse on D8 / IN1. Requires valid calibration, no fault, disarmed state and available pulse budget. No repeated motion is requested. |
| `TEST2` | During deliberate channel-2 commissioning | Same bounded test on D9 / IN2. Check this channel separately from TEST1. |
| `STOP` | Before handling the mechanism, after tests, or if behavior is unexpected | Commands both outputs OFF and disarms automatic feedback. Preserves valid calibration and does not stop CSV streaming. An ongoing calibration continues with outputs OFF. Use the physical switch for independent power removal. |
| `ARM` | Only in a separately enabled, measured experimental-control build | Default response: `ARM locked: experimental feedback not validated. See REALITY_CHECK.md.` If the experimental constant has been enabled, it also requires successful calibration, no fault and at least 700 ms of quiet. It is not a command to start a synthetic earthquake. |

Every nonempty command stops a pulse in progress before processing; STATUS and STREAM preserve the existing arming state. HELP, STOP and calibration disarm. An overlong command disarms. Tests share a rolling budget: a refused test may indicate cooldown or budget exhaustion. Wait at least five seconds after repeated tests, check STATUS, then retry one test if appropriate. Repeated commands do not bypass the budget.

### Calibration: flat table, still platform

1. Put the **ground base** on a flat, level table. The upper platform and roof sensor should rest level; secure the sensor with +Z pointing upward. Remove anything touching or restraining the moving assembly.
2. Allow the springs/building to stop moving. Stop table vibrations and avoid touching the model during measurement. For first commissioning, leave the coil power branch disconnected.
3. Send `CALIBRATE` (or `CAL`). The program turns both outputs OFF, disarms, rechecks the MPU6050 and starts collecting readings.
4. Expect `CAL progress: 100/400 samples. Keep still.`, then 200, 300 and 400. Wait for the **following** `CAL OK` message; reaching 400 alone does not mean the checks passed.
5. If it says `Moved during calibration...`, let the model settle and retry. If it says `Mount board flat, +Z up...`, correct the physical orientation and retry. For an I2C/configuration fault, check wiring and power before retrying.
6. Send `STATUS`. Confirm `calibrating=0`, `calibrated=1`, `fault=0`, `armed=0`.

Calibration measures stationary acceleration and gyro baselines and checks stillness/orientation. It does **not** physically level the platform, calibrate solenoid force, determine relay polarity, identify spring stiffness, or prove stable feedback. Do not shake or hold the building at an angle to force a false baseline. Results live in RAM and are lost on reset/power-off; startup repeats calibration. Sending CALIBRATE again restarts the whole measurement. STOP disables outputs but does not cancel sampling; disconnect power if you need to halt the device completely.

### Reading STATUS

| Field | Meaning |
| --- | --- |
| `sensor=1` | Sensor initialization succeeded. Inspect fault/calibration flags too; this alone does not prove current healthy measurements. |
| `calibrating=1` | Still collecting the resting baseline; wait. |
| `calibrated=1` | The current baseline passed the checks. |
| `fault=1` | A problem is latched and outputs are disabled. Correct it, then CALIBRATE. STOP alone does not clear it. |
| `armed=0` | Automatic feedback is disabled. Individual TEST commands can still pulse when permitted. |
| `axis=X` or `axis=Y` | Which roof-sensor axis is used for motion estimates. |
| `activeLOW=1` | Firmware assumes LOW turns a relay ON. This is a setting, not a measurement of the module. |
| `experimentalControl=0` | The default build locks ARM. |

### Reading STREAM output

The first line is `a_mm_s2,v_mm_s,ch,armed`. An illustrative line `120,-6,0,0` means filtered acceleration +120 mm/s² (0.120 m/s²), estimated velocity -6 mm/s, neither channel commanded ON, and automatic control disarmed. This is an example, not a target reading.

Channel values: 0=none, 1=channel 1, 2=channel 2. Because the stream is only 10 Hz and a test pulse is about 40 ms, a pulse can occur between CSV lines; seeing only zero does not prove the relay never switched. Telemetry reports commanded channel state, not measured contact closure or coil current. Calibration/progress/fault messages may appear alongside CSV; use STREAM OFF to read them clearly.

### If commands appear not to work

- Garbled text: set 115200 baud.
- No response after typing: select Newline and press Enter/Send; verify the board's port and USB data cable.
- Unknown command: send the command alone, without quotes/backticks or extra spaces.
- TEST refused: inspect STATUS, ensure you are disarmed and calibrated, and allow the cooldown/budget to recover. Do not increase pulse duration to bypass a refusal.
- Monitor reopened and calibration restarted: opening the connection can reset the Nano. Keep still and let it finish.

## Code map: where each step happens

The sketch is divided into eleven labelled sections. Search for the number/name in Arduino IDE:

| Section | What you will find |
| --- | --- |
| 01 / Libraries | Wire/I2C, math and command-string helpers |
| 02 / User settings and limits | Pins, relay polarity, sensor direction and experimental/pulse limits |
| 03 / Runtime state | Variables remembering calibration, readings, pulse history and console input |
| 04 / Relay outputs and fault handling | OFF handling, disarm, fault latch and pulse expiry |
| 05 / MPU6050 communication | Register configuration, data reading and conversion to physical units |
| 06 / Flat, stationary calibration | Begin/reset calibration, collect 400 samples and validate the baseline |
| 07 / Limited individual actuator pulses | One-channel rule, cooldown and rolling pulse budget |
| 08 / Filtering and optional feedback | Selected-axis acceleration, estimated velocity and experimental control |
| 09 / Serial Monitor commands | STATUS output, command dispatch and incoming-text parser |
| 10 / Startup | Runs once: initialize OFF pins, serial, I2C and calibration |
| 11 / Main loop | Repeats: check pulse expiry, process commands, sample/check sensor, calibrate or monitor, then print telemetry |

For normal use, send commands; no source edit or re-upload is needed. Editing constants such as relay polarity changes the compiled program and requires uploading again. The experimental flag remains false in the supplied download.

## Relay behavior in revision 1.3

Read [CONTROL_RESEARCH.md](CONTROL_RESEARCH.md) for the research, assumptions and tests. The experimental controller now waits for a consistent estimated direction, allows at most one pulse per confirmed half-cycle, skips pulses when a simple prediction approaches reversal, and requests OFF earlier to allow for release delay. Calibration sets noise-based acceleration thresholds above fixed minimums. Live operation uses only the selected horizontal axis. Tilt, yaw, vertical/other-axis motion and measurement clipping do not fault, disarm or inhibit the controller.

These changes may produce **fewer pulses**, which is intentional. TEST1/TEST2 remain individual hardware-characterization pulses and bypass the automatic direction/prediction selection. Do not repeatedly send TEST commands to simulate damping. The default automatic-control lock is unchanged.

STATUS now also reports `noiseSigma_m_s2`, `start` and `quiet`: measured stationary acceleration noise and the effective acceleration thresholds in m/s². Sensor communication, configuration and stale-data faults still disable outputs. Calibration still requires a flat, stationary model before use.

The sketch includes `PulsePolicy.h` beside the `.ino`. Keep both files together when opening/uploading the extracted folder. The header is part of the sketch, not an extra library to install.

## 7. Initial tuning values

| Constant | Default | Meaning |
| --- | --- | --- |
| ACCEL_START | 0.40 m/s² | Minimum episode threshold; actual value is at least 4× calibration sigma |
| ACCEL_QUIET | 0.18 m/s² | Minimum quiet threshold; actual value is at least 2× calibration sigma |
| VELOCITY_START | 0.025 m/s | Minimum estimated speed for a pulse |
| VELOCITY_RELEASE | 0.008 m/s | Release near rest/reversal |
| PULSE_MS | 40 ms | Maximum requested pulse |
| COOLDOWN_MS | 220 ms | Shared off interval |
| MAX_PULSES_PER_WINDOW | 6 per 5 s | Pulse budget |
| EPISODE_MAX_MS | 8000 ms | Response limit until quiet |
| ACTUATION_DELAY_MS | 20 ms | Assumed delay to effective contact; must be measured |
| FORCE_RELEASE_MS | 35 ms | Assumed complete force release; must be measured |
| TIMING_MARGIN_MS | 10 ms | Additional prediction allowance |
| DIRECTION_CONFIRM_MS | 30 ms | Continuous above-threshold direction confirmation |

Use stationary logs to set thresholds above noise; change one parameter at a time. Mechanical relays may be too slow for shorter pulses. Do not exceed coil duty limits. A roof accelerometer cannot independently measure base motion, spring travel or contact force. Tilt contaminates acceleration; filtering and leaky integration introduce phase error. Tilt can still contaminate the selected accelerometer reading even though it no longer causes a motion fault. Hardware measurements and repeated passive/active tests are essential; the geometry may require a different control arrangement.

## 8. Troubleshooting

- **MPU not found:** check specified supply, ground, A4/A5, AD0, logic levels and I2C pull-ups. Do not raise voltage blindly.
- **Calibration fault:** hold the secured sensor still; mount it flat with Z upward; send CAL.
- **Sampling fault:** check short, secure I2C wiring, separation from coils and supply integrity.
- **ARM refused:** expected in the default build. Read REALITY_CHECK.md; do not bypass the lock without measured commissioning.
- **No actuator movement:** check polarity, COM/NO, supply, pulse budget and actual ratings. Do not extend pulses beyond coil limits.
- **Continuous/chattering relays:** STOP; inspect polarity, noise and uploaded settings. Defaults do not command continuous energization.
- **Motion worsens:** STOP; verify resulting force sign, sensor orientation, release delay, contacts and yaw.

## References and validation

[Arduino Nano](https://docs.arduino.cc/hardware/nano/), [TDK MPU6050 register map](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf), [Arduino AVR Wire](https://github.com/arduino/ArduinoCore-avr/tree/master/libraries/Wire).

Compiled with `arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328 SEDAR_Nano`, AVR core 1.8.6. No physical device was flashed or stability-tested during preparation.

## Horizontal-only live demonstration update

After successful calibration, the code responds only to `MOTION_AXIS` (0 = X, default; 1 = Y if that axis physically points left/right). Align the chosen roof-sensor axis with the solenoid travel. Vertical motion and gyro rotation do not enter the live control decisions. Motion reaching sensor range limits can clip the data but no longer causes a fault. Calibration still checks all axes while the model is flat and stationary. Movement does not clear ARM; explicit STOP, calibration, and genuine sensor/bus faults retain their existing behavior. Existing pulse/cooldown/duty/episode limits and the compile-time ARM setting are unchanged.
