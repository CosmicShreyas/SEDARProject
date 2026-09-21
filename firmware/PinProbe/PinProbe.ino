/*
  PinProbe -- answers one question: can this Nano pin actually pull the relay
  input to ground, and does the input rise again when released?

  Upload INSTEAD of RelayTest.ino. Open Serial Monitor at 115200.

  It drives D8 and D9 open-drain exactly as the firmware does, and reads the pin
  back each time to report what the line is really doing. Reading a pin while
  sinking it tells us whether the Nano wins against whatever is pulling it up.

  Interpreting "released": the pin is high-impedance, so a HIGH reading means
  something external (the relay board's pull-up) is holding the line up. A LOW
  reading with nothing connected just means the line is floating.
*/

#include <Arduino.h>

const uint8_t PINS[2] = {8, 9};

// Read the line while the Nano is actively sinking it. If this reports HIGH,
// the pin cannot overcome the external pull-up and the board will never switch.
int readWhileSinking(uint8_t pin) {
  digitalWrite(pin, LOW);
  pinMode(pin, OUTPUT);
  delay(5);
  // An output pin reads back its own driven level on AVR.
  int v = digitalRead(pin);
  return v;
}

int readWhileReleased(uint8_t pin) {
  pinMode(pin, INPUT); // No internal pull-up: report only what is external.
  delay(5);
  return digitalRead(pin);
}

void setup() {
  for (uint8_t i = 0; i < 2; ++i) {
    pinMode(PINS[i], INPUT);
    digitalWrite(PINS[i], LOW);
  }
  Serial.begin(115200);
  while (!Serial && millis() < 2000) {
  }
  Serial.println(F("PinProbe -- open-drain line check on D8/D9"));
  Serial.println(F("released=1 means something external holds the line HIGH (good:"));
  Serial.println(F("  that is the relay board pull-up). released=0 with the relay"));
  Serial.println(F("  connected means the line is NOT being pulled up."));
  Serial.println(F("sinking=0 means the Nano CAN pull the line down (good)."));
  Serial.println(F("sinking=1 means it CANNOT -- external drive is too strong."));
  Serial.println();
}

void loop() {
  for (uint8_t i = 0; i < 2; ++i) {
    uint8_t pin = PINS[i];
    int released = readWhileReleased(pin);
    int sinking = readWhileSinking(pin);
    pinMode(pin, INPUT); // Leave released so the relay ends up OFF.

    Serial.print(F("D"));
    Serial.print(pin);
    Serial.print(F("  released="));
    Serial.print(released);
    Serial.print(F("  sinking="));
    Serial.print(sinking);
    if (released == 0)
      Serial.print(F("   <- no pull-up seen on this line"));
    else if (sinking == 1)
      Serial.print(F("   <- CANNOT pull low"));
    else
      Serial.print(F("   <- line behaves correctly"));
    Serial.println();
  }
  Serial.println();
  delay(1500);
}
