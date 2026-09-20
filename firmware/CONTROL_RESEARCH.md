# Relay-control improvements, revision 1.3

The two relays remain ON/OFF devices. This revision makes the experimental pulse selection more conservative; it does not add a physical damping technology or establish hardware stability. Automatic control remains disabled in the distributed build. CALIBRATE, TEST1, TEST2 and STOP continue to work as documented.

## Research and design decisions

1. **Release delay matters.** Omron explains how inductive-load suppression carries stored coil energy after switching, and how a diode prolongs release. Therefore an OFF command cannot be treated as immediate zero force. This firmware checks projected motion before starting and while holding a pulse. [Omron suppression guidance](https://www.ia.omron.com/support/faq/answer/36/faq02804/)
2. **A damper acts on relative motion.** MathWorks' physical damper model defines velocity as the difference between the two attachment-point velocities. Our roof sensor does not supply that relative contact velocity or actual force, so the program cannot certify negative mechanical work. No skyhook, PID, Kalman or passivity guarantee is claimed. [MathWorks damper definition](https://www.mathworks.com/help/sdl/ref/nonlineartranslationaldamper.html)
3. **Accelerometer output contains gravity.** TDK describes acceleration as containing both motion and gravity components. Stationary calibration, a slowly changing baseline and a gyro-based rotation guard help reject unwanted triggers, but do not solve all tilt/translation ambiguity. [TDK IMU overview](https://product.tdk.com/en/techlibrary/productoverview/imu.html)

The numerical thresholds below are project heuristics, not settings prescribed or validated by these sources.

## Implemented changes

| Change | Behavior | Practical limit |
| --- | --- | --- |
| Noise-based hysteresis | Calibration estimates acceleration standard deviation. Episode threshold = max(0.40 m/s², 4 sigma); quiet threshold = max(0.18 m/s², 2 sigma). | Stationary noise is not operational coil-interference noise. No automatic gain learning occurs during shaking. |
| More reliable calibration variance | Welford's running mean and squared-deviation calculation avoids cancellation from subtracting large gravity-squared values. | Still requires a stationary, correctly mounted sensor. |
| Direction confirmation | Estimated speed must exceed the start threshold in the same direction for 30 ms. | Added dwell delays response; some events are intentionally skipped. |
| One pulse per confirmed half-cycle | No repeated automatic pulse in the same confirmed direction; a confirmed opposite direction or sustained quiet resets eligibility. | Confirmation is based on estimated velocity, not measured spring displacement. |
| Reversal prediction | Require the chosen force to oppose both current estimated velocity and `v + a × horizon`. The start horizon includes assumed actuation delay, pulse time, release time and margin. | Constant acceleration is only a short-term heuristic. Incorrect force sign, timing, contact or motion estimates defeat it. |
| Earlier OFF request | During a pulse, request release if the estimated motion would cease to oppose the force over the release-delay-plus-margin horizon. | Current and mechanical force still decay afterward. |
| Yaw guard | Immediately commands OFF when roof Z-axis angular rate exceeds 15°/s; latches a fault if this persists for 100 ms. Quiet also requires low gyro rates on all axes. | Does not cancel torque; it also trips on externally imposed rotation. The 15°/s value is an example guard, not a structural limit. |

Existing sensor freshness/configuration checks, one-channel interlock, nominal 40 ms pulse, shared 220 ms cooldown, six starts per rolling five seconds and eight-second episode limit remain. Manual tests use the timing/budget and fault checks but intentionally bypass automatic direction/reversal selection, so they can characterize individual actuators. They are not damping commands.

## Timing assumptions requiring measurement

Default `ACTUATION_DELAY_MS = 20`, `FORCE_RELEASE_MS = 35`, `TIMING_MARGIN_MS = 10`. With a 40 ms pulse, the start projection covers 105 ms; the early-release projection covers 45 ms. These are placeholders, not your solenoid's specifications. Actuation delay must include relay closure and reaching effective spring contact; force release must include relay opening, current decay and mechanical return/contact persistence. Keep the flyback diodes in place.

Do not tune these down merely to obtain more pulses. If the mechanism cannot respond within a useful part of the vibration cycle, this control arrangement may not be suitable. The two-row force geometry can still cause yaw, and no code change fixes that geometry.

## Testing and interpretation

`PulsePolicy.h` contains the actual pulse-selection functions shared by the sketch and native C++ regression tests in `tests/firmware_policy_test.cpp`. Tests cover threshold floors/noise scaling, force direction, approaching reversal, NaN rejection, confirmation dwell, repeated-pulse suppression, noise around zero and unsigned timer rollover. Both default and experimental sketches are compiled for the classic Nano.

These tests check software decisions with supplied numbers. They do not validate the sensor estimate, coil force, mechanical release timing, temperature or closed-loop stability. Compare repeatable low-amplitude passive and experimental trials on the physical model. Reject settings that worsen movement or twist. Compilation and conservative gating are not evidence of a measured damping improvement.
