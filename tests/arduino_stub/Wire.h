// Minimal desktop test double. Does not emulate electrical I2C/relay behavior.
#pragma once
#include <stdint.h>
#include <cstring>
#include <cassert>
#define HIGH 1
#define LOW 0
#define OUTPUT 1
#define INPUT 0
#define LED_BUILTIN 13
#define A4 18
#define A5 19
struct __FlashStringHelper {};
#define F(s) reinterpret_cast<const __FlashStringHelper *>(s)
static uint32_t fakeUs=0;
static int fakePins[24];
static int fakeModes[24];
inline uint32_t millis(){return fakeUs/1000;}
inline uint32_t micros(){return fakeUs;}
inline void delay(uint32_t ms){fakeUs+=ms*1000;}
inline void pinMode(int p,int m){fakeModes[p]=m;}
// A relay is energised only while its pin is actively driven LOW (open-drain).
inline bool fakeEnergised(int p){return fakeModes[p]==OUTPUT && fakePins[p]==LOW;}
inline int digitalRead(int pin){return fakePins[pin];}
inline void digitalWrite(int pin,int value){
 fakePins[pin]=value;
 assert(!(fakePins[8]==LOW && fakePins[9]==LOW)); // interlock: never both coils
}
template<class T> T constrain(T x,T lo,T hi){return x<lo?lo:(x>hi?hi:x);}
struct SerialStub {
 const char* input="";
 uint32_t outputDelayUs=0;
 void begin(int){}
 int available(){return strlen(input);}
 int read(){return *input ? *input++ : -1;}
 int availableForWrite(){return 64;}
 template<class T> void print(T,int=0){fakeUs+=outputDelayUs;}
 template<class T> void println(T,int=0){fakeUs+=outputDelayUs;}
} Serial;
struct WireStub {
 uint8_t regs[256]={}; uint8_t buffer[16]={}; uint8_t length=0,pointer=0;
 bool broken=false,ready=true; uint32_t liveAfterUs=0; // part answers only past this time
 WireStub(){reset();}
 void reset(){memset(regs,0,sizeof(regs));regs[0x75]=0x68;regs[0x3F]=0x20;regs[0x6B]=0x40;} // powers up asleep
 void begin(){} void setClock(uint32_t){} void setWireTimeout(uint32_t,bool){}
 void clearWireTimeoutFlag(){} bool getWireTimeoutFlag(){return false;}
 void beginTransmission(uint8_t){length=0;}
 void write(uint8_t x){buffer[length++]=x;}
 uint8_t endTransmission(bool=true){
  if(broken)return 4;
  if(fakeUs<liveAfterUs)return 2; // address NACK while still powering up
  pointer=buffer[0];
  if(length==2){
   uint8_t v=buffer[1];
   if(pointer==0x6B&&(v&0x80)){reset();return 0;} // DEVICE_RESET self-clears
   regs[pointer]=v;
  }
  return 0;
 }
 uint8_t requestFrom(uint8_t,uint8_t count,uint8_t){return (broken||fakeUs<liveAfterUs)?0:count;}
 uint8_t read(){uint8_t r=pointer++;return r==0x3A?(ready?1:0):regs[r];}
 void setWord(uint8_t reg,int16_t n){regs[reg]=(uint16_t)n>>8;regs[reg+1]=(uint8_t)n;}
} Wire;
