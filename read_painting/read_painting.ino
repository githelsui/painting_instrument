// ESP32 Instrument Painting
// Notes for a C major scale

const int threshold = 20;
int noteC, noteD, noteE, noteF, noteG, noteA, noteB;

void setup()
{
  Serial.begin(115200);
  delay(1000); // give me time to bring up serial monitor
  Serial.println("Instrument Painting");
}

void loop()
{
  Serial.println(touchRead(T0));  // get value using T0
  delay(1000);
}
