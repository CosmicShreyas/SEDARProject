"""Deterministic, labeled engineering images for all 20 guide steps."""
from pathlib import Path
from html import escape
import json, math
OUT=Path('public/guide');OUT.mkdir(exist_ok=True)
steps=[s for section in json.loads(Path('src/build-guide.json').read_text(encoding='utf-8')) for s in section['steps']]
parts=[]
def text(x,y,t,size=16,color='#244c43',weight='normal'):
 parts.append(f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" font-weight="{weight}">{escape(t)}</text>')
def rect(x,y,w,h,fill='#ffffff',stroke='#789b8b',r=6):parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>')
def line(points,color='#647970',width=3,dash=''):
 parts.append(f'<polyline points="{points}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"'+(f' stroke-dasharray="{dash}"' if dash else '')+'/>')
def circle(x,y,r,fill='#fff',stroke='#447160'):parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>')
def coil(x,y,direction=1,active=False):
 rect(x-32,y-20,64,40,'#dfac50' if active else '#386da1','#4b6265',2)
 for n in range(6):line(f'{x-24+n*9},{y-16} {x-24+n*9},{y+16}','#9ac3e0',1)
 tip=direction*(55 if active else -55);line(f'{x-tip*.2},{y} {x+tip},{y}','#89958f',6)
 for n in range(5):line(f'{x-direction*(36+n*4)},{y-5} {x-direction*(36+n*4)},{y+5}','#57665f',1)
def spring(x,y):
 circle(x,y,21,'#edf4ef');circle(x,y,7,'#9baaa2')
 for r in [12,16,20]:parts.append(f'<ellipse cx="{x}" cy="{y}" rx="{r}" ry="{r*.48}" fill="none" stroke="#587a6b" stroke-width="2"/>')
def hardware(n):
 text(35,75,'PLACEMENT VIEW  /  schematic, not to scale',13,'#7a8e80')
 rect(70,130,505,315,'#deebe1','#75917e',12);text(90,158,'GROUND BASE',13)
 corners=[(210,225,'S1'),(435,225,'S2'),(210,370,'S3'),(435,370,'S4')]
 for x,y,label in corners:
  if n>=2:spring(x,y)
  else:circle(x,y,8,'#fff');line(f'{x-15},{y} {x+15},{y}','#5a7965',1);line(f'{x},{y-15} {x},{y+15}','#5a7965',1)
  text(x-10,y-30,label,15,weight='bold')
 if n>=3:
  coil(322,225,-1,n>=18);coil(322,370,1,n>=18);text(283,193,'Solenoid 01',13);text(283,416,'Solenoid 02',13)
  line('245,184 402,184','#dd9f43',2);text(248,176,'Center each coil',13,'#95692f')
 if n in [2,3]:
  rect(622,150,235,278,'#fff');text(644,179,'SCREW / SPRING',16,weight='bold')
  line('663,375 817,375','#708b7b',10);line('739,375 739,317','#a0aaa5',10)
  for y in range(322,370,8):line(f'733,{y} 745,{y}','#586d61',2)
  pts=' '.join(f'{739+(17 if j%2 else -17)},{200+j*8}' for j in range(21));line(pts,'#426552',3)
  line('785,318 785,366','#dd9f43',2);line('780,318 790,318','#dd9f43',2);line('780,366 790,366','#dd9f43',2)
  text(795,335,'½ in',15);text(795,355,'12.7 mm',12);text(646,402,'Insertion into the spring',13)
 elif n<2:
  text(625,164,'LAY OUT BEFORE DRILLING',14,weight='bold')
  for j,t in enumerate(['4 matching springs','4 retained corner screws','2 mirrored push-pull coils','Base + upper platform','Building + roof sensor']):text(625,203+j*34,t,15)
  text(625,409,'Set spacing from actual stroke.',13)
 else:
  rect(622,135,230,300,'#fff');text(645,163,'SIDE / FINISHED STACK',14,weight='bold')
  rect(690,207,100,112,'#448294','#577569',1)
  for yy in range(221,311,22):line(f'690,{yy} 790,{yy}','#dfe9e1',5)
  for xx in range(706,790,25):line(f'{xx},208 {xx},318','#dfe9e1',3)
  rect(728,189,24,12,'#31876b');text(647,181,'MPU6050 on roof',13)
  rect(665,319,150,12,'#b1c8b8');line('657,389 823,389','#708b7b',10)
  for x in [686,794]:
   pts=' '.join(f'{x+(7 if j%2 else -7)},{335+j*4}' for j in range(13));line(pts,'#668777',2);line(f'{x},388 {x},373','#a0aaa5',5)
  text(646,419,'Platform rests on four springs',12)
 if n>=4:
  for x,label in [(93,'Nano'),(420,'Relay')]:rect(x,275,100,40,'#547c72');text(x+10,300,label,14,'white')
  line('144,273 144,175 570,175 570,100 738,100 738,185','#a77734',2,'5 4');text(215,112,'Flexible cable to roof sensor',14)
 text(85,489,['Inventory and positioning','Four marked screw centers','Long springs over base screws','Centered coils; mirrored working stroke','Complete hardware placement'][min(n,4)],16,weight='bold')

def wiring(n):
 text(35,75,'CONNECTION MAP  /  physical terminal positions vary by module',13,'#7a8e80')
 # Each route has an exact terminal at each end. No crossing is a junction unless marked.
 routes=[
 (5,'60,145 60,175 25,175 25,275 45,275','#cd5b4e'),
 (5,'165,145 165,190 15,190 15,315 45,315','#344951'),
 (7,'195,275 245,275 245,265 325,265','#c68b22'),
 (7,'195,315 260,315 260,295 325,295','#344951'),
 (7,'245,275 245,215 662,215 662,205','#c68b22'),
 (7,'260,315 260,200 700,200 700,205','#344951'),
 (8,'360,175 360,190 295,190 295,280','#c68b22'),
 (8,'400,175 400,192 280,192 280,315 260,315','#344951'),
 (8,'440,175 440,225 350,225 350,240','#268565'),
 (8,'470,175 470,232 390,232 390,240','#297ba3'),
 (9,'485,265 560,265 560,187 738,187 738,205','#9362b2'),
 (9,'485,295 578,295 578,181 776,181 776,205','#bb6398'),
 (10,'25,275 25,400 663,400 663,360','#cd5b4e'),
 (10,'663,400 795,400 795,360','#cd5b4e'),
 (11,'705,360 705,422 625,422 625,445','#cd5b4e'),
 (11,'835,360 835,418 785,418 785,445','#cd5b4e'),
 (11,'685,490 685,520 15,520 15,315','#344951'),
 (11,'845,490 845,520 685,520','#344951')]
 for born,pts,col in routes:
  if born<=n:line(pts,col,4 if born==n else 2.4)
 rect(40,92,150,53,'#eff3ee');text(53,116,'12 V ADAPTER',16,weight='bold');text(50,137,'+             −',15)
 if n>=5:rect(43,157,34,23,'#f2cb72');text(87,173,'Switch + fuse',12)
 rect(45,250,150,95,'#e2ece4');text(63,277,'LM2596',18,weight='bold');text(63,299,'12 V → 5 V',14)
 for x,y,label in [(45,275,'IN+'),(45,315,'IN−'),(195,275,'OUT+'),(195,315,'OUT−')]:circle(x,y,4);text(x+6 if x<100 else x-51,y-7,label,10)
 rect(325,240,160,130,'#e5f0ed');text(353,322,'NANO',20,weight='bold')
 for x,y,label in [(325,265,'5V'),(325,295,'GND'),(350,240,'A4'),(390,240,'A5'),(485,265,'D8'),(485,295,'D9')]:circle(x,y,4);text(x+7 if x==325 else x-25,y+14 if y==240 else y-7,label,11)
 rect(345,92,150,83,'#e5f0ed');text(365,120,'MPU6050',18,weight='bold');text(363,144,'ON THE ROOF',12)
 for x,label in [(360,'VCC'),(400,'GND'),(440,'SDA'),(470,'SCL')]:circle(x,175,4);text(x-12,166,label,10)
 if n>=8:rect(267,280,43,35,'#fff4d9');text(272,294,'VCC*',11);text(269,307,'supply',9)
 rect(640,205,225,155,'#e6edf5');text(682,281,'2-CH RELAY',18,weight='bold');text(667,306,'logic / contacts separate',12)
 for x,label in [(662,'VCC'),(700,'GND'),(738,'IN1'),(776,'IN2')]:circle(x,205,4);text(x-12,225,label,10)
 for x,label in [(663,'COM1'),(705,'NO1'),(795,'COM2'),(835,'NO2')]:circle(x,360,4);text(x-18,351,label,10)
 rect(600,445,105,45,'#dbe8f2');text(612,473,'COIL 01',15,weight='bold');rect(760,445,105,45,'#dbe8f2');text(772,473,'COIL 02',15,weight='bold')
 for x,y,label in [(625,445,'+'),(685,490,'−'),(785,445,'+'),(845,490,'−')]:circle(x,y,4);text(x+6,y-5,label,14)
 if n>=12:
  for x in [585,745]:
   # Diode connected across coil nodes, cathode on the positive upper branch.
   line(f'{x+40},445 {x+40},433 {x},433 {x},502 {x+100},502 {x+100},490','#5c735f',2)
   line(f'{x-7},456 {x+7},456','#b3782c',3)
   parts.append(f'<polygon points="{x-6},477 {x+6},477 {x},458" fill="#5c735f"/>')
  text(38,470,'DIODE: striped cathode → coil +',14,'#926221')
 if n==6:rect(240,380,180,57,'#fff4d9');text(256,404,'METER: 5.0 V',17,weight='bold');text(256,424,'Loads disconnected',13)
 text(35,558,'Red: 12 V   Gold: 5 V   Dark: GND   Green/blue: I²C   Purple/pink: D8 / D9',13)
 text(35,582,'*Sensor VCC and I²C levels must match your breakout. NC contacts unused. Crossings are not junctions.',12)

for n,step in enumerate(steps):
 parts=['<svg xmlns="http://www.w3.org/2000/svg" width="900" height="620" viewBox="0 0 900 620"><style>text{font-family:Arial,sans-serif}</style><rect width="900" height="620" rx="12" fill="#f4f8f4"/>']
 text(35,40,f'{n+1:02d} / {step["title"]}',22,weight='bold')
 if n<5 or n>=15:
  hardware(n)
  if n>=15:
   labels=['Roof sensor: establish a stationary baseline','Actuators OFF: record a passive run','Feedback ON: verify direction and timing','Compare identical inputs; watch for twisting','Finished prototype: inspect before demonstration']
   rect(60,529,800,57,'#e4efe4');text(78,564,labels[n-15],19,weight='bold')
 else:wiring(n)
 parts.append('</svg>');(OUT/f'step-{n+1:02d}.svg').write_text(''.join(parts),encoding='utf-8')
print(f'Created {len(steps)} step images in {OUT}')
