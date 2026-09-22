#include <cstdio>
#include "../firmware/SEDAR_Nano/SEDAR_Nano.ino"

static void tick(unsigned ms) {
  for (unsigned i = 0; i < ms; ++i) {
    fakeUs += 1000;
    loop();
  }
}
int main() {
  for (int &pin : fakePins)
    pin = HIGH;
  setup();
  tick(5000);
  assert(calibrated && !faulted);
  armed = true;
  // Simulate slow serial writes and a burst of commands from a console client.
  Serial.outputDelayUs = 3000;
  Serial.input = "STATUS\nSTATUS\nSTATUS\n";
  loop();
  assert(Serial.available() == 14); // Exactly one command processed.
  assert(!faulted && armed);
  loop();
  loop();
  assert(Serial.available() == 0 && !faulted && armed);
  Serial.outputDelayUs = 0;
  tick(100);
  assert(!faulted && calibrated);
  // An actual unaccounted sensor scheduling stall must still be detected.
  fakeUs += 60000;
  loop();
  assert(faulted && !armed);
  puts("Console checks passed: diagnostic bursts do not fault; real stalls still stop.");
}
