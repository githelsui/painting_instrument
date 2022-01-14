// ESP32 Instrument Painting
// Notes for a C major scale

const int threshold = 15;
int noteC, noteD, noteE, noteF, noteG, noteA, noteB;
char buf1[64], buf2[64], buf3[64], buf4[64], buf5[64], buf6[64], buf7[64];

void setup()
{
  Serial.begin(115200);
  delay(1000); // give me time to bring up serial monitor
  Serial.println("Instrument Painting");
}

void loop()
{ 
  noteC = touchRead(04);
  sprintf (buf1, " Note C: %3d \r \n", noteC);
  if(noteC < threshold) {
    Serial.print (buf1);
  }
//  delay (500);

  noteD = touchRead(27);
  sprintf (buf2, " Note D: %3d \r \n", noteD);
  if(noteD < threshold) {
    Serial.print (buf2);
  }
//  delay (500);

  noteE = touchRead(33);
  sprintf (buf3, " Note E: %3d \r \n", noteE);
  if(noteE < threshold) {
    Serial.print (buf3);
  }
//  delay (500);

  noteF = touchRead(15);
  sprintf (buf4, " Note F: %3d \r \n", noteF);
  if(noteF < threshold) {
    Serial.print (buf4);
  }
//  delay (500);

  noteG = touchRead(13);
  sprintf (buf5, " Note G: %3d \r \n", noteG);
  if(noteG < threshold) {
    Serial.print (buf5);
  }
//  delay (500);

  noteA = touchRead(12);
  sprintf (buf6, " Note A: %3d \r \n", noteA);
  if(noteA < threshold) {
    Serial.print (buf6);
  }
//  delay (500);

  noteB = touchRead(14);
  sprintf (buf7, " Note B: %3d \r \n", noteB);
  if(noteB < threshold) {
    Serial.print (buf7);
  }
//  delay (500);
}
