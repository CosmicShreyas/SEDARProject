#include <cstdio>
#include "../firmware/SEDAR_Nano/SEDAR_Nano.ino"

// Feed the actual controller motion that previously could request repeated
// alternating pulses. This tests admission/settling, not physical damping.
static void sample(float acceleration) {
  fakeUs += 10000;
  Sample s = {};
  s.a[0] = acceleration;
  servicePulse(millis());
  controlSample(s, 0.01f, millis());
}

int main() {
  for (int &pin : fakePins)
    pin = HIGH;
  fakeUs = 1000000;
  sensorReady = calibrated = armed = true;
  accelStartThreshold = ACCEL_START * sensitivityScale;
  accelQuietThreshold = ACCEL_QUIET * sensitivityScale;
  // A clear acceleration ramp admits the first opposing pulse.
  for (int i = 0; i < 40; ++i)
    sample(2.0f);
  assert(historyCount == 1 && waitingForQuiet && armed);
  // Large alternating recoil must not admit further pulses, even past cooldown.
  for (int i = 0; i < 500; ++i)
    sample((i / 15) % 2 ? 3.0f : -3.0f);
  assert(historyCount == 1 && waitingForQuiet && armed && activeChannel == -1);
  // Only sustained quiet opens admission again; ARM remains set throughout.
  for (int i = 0; i < 500; ++i)
    sample(0.0f);
  assert(!waitingForQuiet && armed && activeChannel == -1);
  const uint32_t oldPulse = pulseStarted;
  for (int i = 0; i < 40; ++i)
    sample(2.0f);
  assert(pulseStarted > oldPulse && waitingForQuiet && armed);
  puts("Settling checks passed: one pulse, recoil blocked, quiet recovery, ARM retained.");
}
