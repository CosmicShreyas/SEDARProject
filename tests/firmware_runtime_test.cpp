#include <cstdio>
#include "../firmware/SEDAR_Nano/SEDAR_Nano.ino"
static void tick(uint32_t ms){for(uint32_t i=0;i<ms;++i){fakeUs+=1000;loop();}}
static void command(const char* s){strcpy(commandBuffer,s);executeCommand();}
static bool off(){return fakePins[8]==HIGH && fakePins[9]==HIGH;}
int main(){
 for(int &pin:fakePins)pin=HIGH;
 setup(); assert(calibrating && !armed && off());
 tick(4100); assert(calibrated && !calibrating && !faulted && off());
 assert(accelStartThreshold==ACCEL_START);
 command("ARM"); assert(!armed && off()); // default lock remains
 command("TEST1"); assert(activeChannel==0 && !armed);
 tick(40); assert(off() && activeChannel==-1);
 command("TEST2"); assert(off()); // cooldown refuses immediate switch
 tick(220); command("TEST2"); assert(activeChannel==1);
 command("STOP"); assert(off() && calibrated && !armed);
 for(int i=0;i<4;++i){tick(220);command("TEST1");assert(activeChannel==0);tick(40);assert(off());}
 tick(220); command("TEST1"); assert(off()); // six starts already used
 tick(5000); command("TEST1"); assert(activeChannel==0);
 Wire.broken=true; tick(11); assert(faulted && off() && !calibrated);
 Wire.broken=false;command("CALIBRATE");tick(4100);assert(calibrated && !faulted);
 Wire.regs[0x1B]=0;tick(260);assert(faulted && off()); // sensor brownout/config change
 command("CAL");tick(4100);assert(calibrated && !faulted);
 Wire.ready=false;tick(60);assert(faulted && off()); // no fresh measurements
 Wire.ready=true;command("CALIBRATE");tick(4100);assert(calibrated && !faulted);
 command("TEST1");assert(activeChannel==0);
 Wire.setWord(0x47,1310);tick(11);assert(activeChannel==0 && !faulted); // yaw must NOT cut pulse
 tick(110);assert(!faulted && off()); // normal pulse timer still expires
 // Other axes and full-scale readings do not fault or disarm after calibration.
 armed=true;
 Wire.setWord(0x3D,32767);Wire.setWord(0x3F,-32768);
 Wire.setWord(0x43,32767);Wire.setWord(0x45,-32768);Wire.setWord(0x47,32767);
 tick(250);assert(!faulted && calibrated && armed && fabs(dynamicA)<0.001f);
 Wire.setWord(0x3B,32767);tick(20);
 assert(!faulted && armed && dynamicA>0); // selected horizontal axis still measured
 Wire.setWord(0x3B,0);Wire.setWord(0x3D,0);Wire.setWord(0x3F,8192);
 Wire.setWord(0x43,0);Wire.setWord(0x45,0);Wire.setWord(0x47,0);
 command("CALIBRATE");tick(4100);assert(calibrated && !faulted);
 // Motion/noise during calibration cannot establish a valid resting baseline.
 command("CALIBRATE");
 for(int i=0;i<410;++i){Wire.setWord(0x3B,(i%2)?1000:-1000);tick(10);}
 assert(faulted && !calibrated && off());
 puts("Firmware runtime checks passed: calibration/aliases, ARM lock, pulses, interlock, cooldown, budget, I2C/config/stale faults, horizontal-only operation without motion disarming, moving-calibration rejection.");
}
