# SEDAR control reality check

**Verdict: the two-relay sketch can read the sensor and command bounded actuator pulses, but the supplied hardware information is insufficient to establish stable damping. The earlier heuristic must not be described as precise or guaranteed to stabilize the platform.**

The default revision 1.1 disables automatic actuation with `ENABLE_EXPERIMENTAL_CONTROL = false`. ARM is refused in this build. Calibration, telemetry, TEST1, TEST2 and STOP remain available. The experimental algorithm is retained in source for measured bench development, not as a finished stabilizing controller. No software audit substitutes for measuring the actual mechanism.

## What could increase shaking?

| Finding | Why it matters | Disposition |
| --- | --- | --- |
| Velocity is estimated from filtered roof acceleration | Bias, tilt, high-pass filtering and leaky integration change its amplitude and phase. Near reversal, the estimated direction can be wrong. | Labelled as an estimate; automatic feedback locked by default. |
| Ground/base motion is unmeasured | Roof velocity is not spring/contact velocity relative to the moving base. The controller cannot verify contact work or mechanical energy removal. | Do not claim a passive or energy-safe control law. |
| Relays are binary switches | They cannot continuously regulate coil force. Contact closure/release, bounce, plunger inertia and return travel all take time. | Brief tests and off intervals only; timings are assumptions until measured. No high-frequency PWM through mechanical relays. |
| Flyback current persists after OFF | Turning off D8/D9 does not instantly remove actuator force. A diode changes the release behavior. | Keep correctly rated suppression; measure release delay. Do not remove the diode to seek faster control. |
| Actuators sit in opposite rows | Opposite forces at opposite offsets may create torque in the SAME yaw direction, not cancel each other. Alternation can repeatedly twist the platform. | Inspect the force lines relative to the platform center. Mechanical redesign may be needed. |
| A spring contact is not a damper | Pushing it can store elastic energy that rebounds. Sliding/impact geometry can also side-load a plunger. | Validate contact and retained spring ends; do not assume a push removes energy. |
| Force/stroke/duty ratings are unknown | The assumed 40 ms pulse may be ineffective or unsuitable; the relay's inductive DC rating may differ from its printed resistive rating. | Match settings and power circuit to actual part specifications before powered tests. |

For a force on the moving structure, instantaneous power is `P = F · v` at the point of application, in the chosen reference frame. For the relative vibration mode, actuator generalized force must be considered with relative velocity and any torque with angular velocity. Energy change from a pulse depends on the **whole** integral of power, including delayed release and contact effects. Checking acceleration sign, or velocity sign only when the pulse starts, is insufficient.

### A concrete example of a pulse adding energy

This is a hypothetical calculation, not a measurement of your model. Let displacement be `x(t) = 0.005 cos(4πt)` metres (2 Hz, 5 mm amplitude). A -2 N force applied from 10 ms before the turning point to 30 ms after it initially opposes the positive velocity. Yet its net work is:

`W = -2 × [x(0.030) - x(-0.010)] ≈ +0.00062 J`.

The pulse adds energy because it continues after reversal. Real actuator forces are not constant, but this example disproves the assumption that a pulse starting in the opposing direction must damp the motion.

### Your two-row layout and yaw

If one leftward force acts at a negative transverse offset and one rightward force acts at a positive transverse offset, the yaw moment `τz = -y Fx` has the same sign in both cases. Exact forces transmitted through flexible springs depend on the contacts, but the torque concern is real. Two relays cannot fix a geometry whose available force directions do not provide the required opposing torque. Aligning resultant forces through the moving assembly's center, or using a symmetric linkage, would need an actual mechanical design and travel check.

## Corrections made in the code

1. Automatic feedback now has an explicit default-OFF build setting, checked at ARM, the control loop and pulse dispatch.
2. Sensor data-ready is checked; unchanged registers are not silently integrated as fresh data. Missing fresh samples trigger the existing stale-sample fault.
3. Sensor configuration is rechecked periodically, detecting a reset/brownout that still acknowledges I2C but changes range or sleep state.
4. Pulse budget is a rolling history, avoiding the prior fixed-window boundary burst. Manual tests use the same budget.
5. Compile-time checks require valid opposing +/-1 channel signs and consistent pulse limits.
6. Startup OFF, one channel at a time, cooldown, pulse cutoff, calibration rejection, bounded I2C calls and fault shutoff remain.

These checks concern commanded outputs. They cannot detect welded contacts, wrong relay input polarity, actual coil current, stalled rods or a processor hang. The nominal 40 ms cutoff is checked in the loop and can be delayed by bounded processing; it is not an independent hardware timer cutoff or a guarantee of 40 ms mechanical force.

## What you can do now with the existing two relays

1. Run the passive four-spring model with coil power disconnected. Log roof acceleration and record video showing base/platform movement.
2. Verify relay polarity and COM/NO wiring without coil power. Confirm OFF during reset.
3. With known coil ratings and the mechanism clear, run one TEST pulse at a time. Record which way the platform moves, whether it twists, when contact begins and how long release takes.
4. Compare repeatable, small trials. Use the same mass, base input and starting position. A phone recording is useful for inspection, but is not a calibrated force measurement.
5. If a pulse increases oscillation or produces yaw, revise contact/force geometry before attempting automatic control.

For tighter control, measurements of relative platform/base displacement or motion, actual actuator delay and force/contact behavior would be needed. A second base sensor can help characterize base excitation but does not by itself solve integration drift or measure contact force. A suitable transistor driver could improve switching/current control, but buying one does not establish stability either. The priority is measured mechanics and a validated control law, not a software-only promise.

## Verification and limits

The sketch is compiled for classic ATmega328P Nano. The actuator timing, sensor estimates, contact forces, relay polarity and closed-loop stability have not been physically validated. Do not interpret a successful compile or the website animation as that validation.

Primary references: [TDK MPU6050 register map](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf), [Omron relay timing definitions](https://www.ia.omron.com/support/guide/36/explanation_of_terms.html), [Omron inductive-load suppression](https://www.ia.omron.com/support/faq/answer/36/faq02804/), [Arduino Nano documentation](https://docs.arduino.cc/hardware/nano/).

## Revision 1.3 follow-up

See CONTROL_RESEARCH.md for noise thresholds, direction dwell, per-half-cycle pulse gating, assumed-delay reversal checks and the yaw shutoff. These reduce unwanted command opportunities but do not resolve the physical limitations above. The default automatic-feedback lock remains.
