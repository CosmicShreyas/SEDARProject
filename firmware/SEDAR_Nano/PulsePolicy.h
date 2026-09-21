#ifndef SEDAR_PULSE_POLICY_H
#define SEDAR_PULSE_POLICY_H
#include <stdint.h>
#include <math.h>

// Relay pulse admission, NOT a physical damper model or stability proof.
// The same functions are exercised by tests/firmware_policy_test.cpp.
namespace Sedar {
inline float startThreshold(float stationarySigma, float minimum = 0.40f) {
  return fmaxf(minimum, 4.0f * stationarySigma);
}
inline float quietThreshold(float stationarySigma, float minimum = 0.18f) {
  return fmaxf(minimum, 2.0f * stationarySigma);
}

// Demand opposition now AND after an assumed latency horizon. A constant-a
// prediction is deliberately simple; wrong delay/velocity estimates can defeat it.
inline bool opposingThroughHorizon(int8_t forceSign, float velocity, float acceleration,
                                   float horizonSeconds, float minimumSpeed) {
  if (!isfinite(velocity) || !isfinite(acceleration))
    return false;
  return forceSign * velocity < -minimumSpeed &&
         forceSign * (velocity + acceleration * horizonSeconds) < -minimumSpeed;
}

struct DirectionGate {
  int8_t candidate = 0;
  int8_t confirmed = 0;
  int8_t lastPulsed = 0;
  uint32_t candidateSince = 0;

  void reset() {
    candidate = 0;
    confirmed = 0;
    lastPulsed = 0;
    candidateSince = 0;
  }

  int8_t observe(uint32_t now, float velocity, float minimumSpeed, uint16_t confirmMs) {
    int8_t direction = velocity > minimumSpeed ? 1 : (velocity < -minimumSpeed ? -1 : 0);
    if (direction != candidate) {
      candidate = direction;
      candidateSince = now;
    }
    // A brief sign change or dip into the dead band does not earn another pulse.
    if (!direction || now - candidateSince < confirmMs)
      return 0;
    if (direction != confirmed) {
      confirmed = direction;
      lastPulsed = 0;
    }
    return direction == lastPulsed ? 0 : direction;
  }
  void fired(int8_t direction) {
    lastPulsed = direction;
  }
};
} // namespace Sedar
#endif
