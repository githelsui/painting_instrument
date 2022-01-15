// ESP32 Instrument Painting
// Notes for a C major scale

const int threshold = 15;
int noteC, noteD, noteE, noteF, noteG, noteA, noteB, noteC1;
char buf1[64], buf2[64], buf3[64], buf4[64], buf5[64], buf6[64], buf7[64], buf8[64];

void setup()
{
  Serial.begin(115200);
  delay(1000); // give me time to bring up serial monitor
  Serial.println("Instrument Painting");
}

void loop()
{ 
  noteC = touchRead(04);
  sprintf (buf1, " Note C4: %3d \r \n", noteC);
  if(noteC < threshold) {
    Serial.print (buf1);
  }

  noteD = touchRead(27);
  sprintf (buf2, " Note D4: %3d \r \n", noteD);
  if(noteD < threshold) {
    Serial.print (buf2);
  }

  noteE = touchRead(33);
  sprintf (buf3, " Note E4: %3d \r \n", noteE);
  if(noteE < threshold) {
    Serial.print (buf3);
  }

  noteF = touchRead(15);
  sprintf (buf4, " Note F4: %3d \r \n", noteF);
  if(noteF < threshold) {
    Serial.print (buf4);
  }

  noteG = touchRead(13);
  sprintf (buf5, " Note G4: %3d \r \n", noteG);
  if(noteG < threshold) {
    Serial.print (buf5);
  }

  noteA = touchRead(12);
  sprintf (buf6, " Note A4: %3d \r \n", noteA);
  if(noteA < threshold) {
    Serial.print (buf6);
  }

  noteB = touchRead(14);
  sprintf (buf7, " Note B4: %3d \r \n", noteB);
  if(noteB < threshold) {
    Serial.print (buf7);
  }
  noteC1 = touchRead(32);
  sprintf (buf8, " Note C5: %3d \r \n", noteC1);
  if(noteC1 < threshold) {
    Serial.print (buf8);
  }
}
