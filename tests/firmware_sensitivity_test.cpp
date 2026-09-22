#include <cstdio>
#include "../firmware/SEDAR_Nano/SEDAR_Nano.ino"

static void command(const char *text) {
  strcpy(commandBuffer, text);
  executeCommand();
}

int main() {
  measuredAccelSigma = 0.024f;
  command("SENS 1");
  assert(sensitivityLevel == 1 && fabs(accelStartThreshold - 0.8f) < 0.001f);
  command("SENS 3");
  assert(sensitivityLevel == 3 && fabs(accelStartThreshold - 0.2f) < 0.001f);
  command("SENS 30");
  command("SENS 0");
  command("SENS X");
  assert(sensitivityLevel == 3);
  armed = true;
  command("SENS 1");
  assert(armed && sensitivityLevel == 3); // Do not silently change live control.
  armed = false;
  measuredAccelSigma = 0.2f;
  command("SENS 3");
  assert(fabs(accelStartThreshold - 0.8f) < 0.001f); // Noise floor survives.
  assert(fabs(accelQuietThreshold - 0.4f) < 0.001f);
  command("SENS 2");
  assert(sensitivityLevel == 2 && sensitivityScale == 1.0f);
  puts("Sensitivity: levels, invalid input, armed refusal and noise floor passed.");
}
