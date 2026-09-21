/*
  RelayTest -- standalone relay commissioning sketch. NOT part of the SEDAR build.

  Purpose: prove the relay wiring, polarity and coil supply independently of the
  sensor, calibration and pulse-budget logic in SEDAR_Nano.ino. Use this when a
  channel's indicator LED responds but the relay does not audibly switch.

  Pins match the main firmware so a result here transfers directly:
    D8 -> relay 1 IN, D9 -> relay 2 IN.

  SAFETY: run this FIRST with the solenoid/coil power branch DISCONNECTED.
  Confirm the click and the COM-NO contact with a meter before energising loads.
  This sketch switches slowly and deliberately; it is a bench test, not the
  seismic controller, and it enforces no duty-cycle limit on an attached load.
*/

#include <Arduino.h>

const uint8_t RELAY_PINS[2] = {8, 9};

// Opto-isolated SRD-05VDC modules (JD-VCC / RY-VCC style) are ACTIVE LOW.
// If a board ever behaves inverted, set this false and re-upload.
const bool RELAY_ACTIVE_LOW = true;

// Deliberately long compared with the 40 ms used in flight. A mechanical relay
// needs roughly 5-10 ms to pull in; holding it far longer makes a marginal coil
// supply obvious as a buzz or a failure to latch rather than a missed click.
const uint16_t ON_MS = 600;
const uint16_t GAP_MS = 600;

// PUSH-PULL drive. Measured on this hardware (PinProbe): releasing the pin
// leaves it floating LOW -- there is no external pull-up on the IN lines. So the
// Nano must actively drive BOTH levels; high-impedance would hold an active-LOW
// board permanently energised.
void setRelay(uint8_t channel, bool on) {
  digitalWrite(RELAY_PINS[channel], (on == RELAY_ACTIVE_LOW) ? LOW : HIGH);
}

void allOff() {
  for (uint8_t i = 0; i < 2; ++i)
    setRelay(i, false);
}

void setup() {
  // Set the inactive level BEFORE enabling the output so the relay cannot glitch
  // closed while the pin is being configured.
  for (uint8_t i = 0; i < 2; ++i) {
    digitalWrite(RELAY_PINS[i], RELAY_ACTIVE_LOW ? HIGH : LOW);
    pinMode(RELAY_PINS[i], OUTPUT);
  }
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);
  while (!Serial && millis() < 2000) { /* wait briefly for USB serial */
  }

  Serial.println(F("RelayTest -- alternating relay check"));
  Serial.print(F("activeLOW="));
  Serial.println(RELAY_ACTIVE_LOW);
  Serial.println(F("Listen for a CLICK on each relay, not just the LED."));
  Serial.println(F("LED without click = coil has no supply or not enough current."));
  Serial.println(F("Run with coil/solenoid power DISCONNECTED first."));
  allOff();
  delay(1000);
}

void loop() {
  for (uint8_t ch = 0; ch < 2; ++ch) {
    allOff(); // Never energise both: one at a time, always.
    delay(GAP_MS);

    Serial.print(F("Relay "));
    Serial.print(ch + 1);
    Serial.print(F(" (D"));
    Serial.print(RELAY_PINS[ch]);
    Serial.println(F(") ON"));
    digitalWrite(LED_BUILTIN, HIGH);
    setRelay(ch, true);
    delay(ON_MS);

    setRelay(ch, false);
    digitalWrite(LED_BUILTIN, LOW);
    Serial.print(F("Relay "));
    Serial.print(ch + 1);
    Serial.println(F(" OFF"));
    delay(GAP_MS);
  }
}
