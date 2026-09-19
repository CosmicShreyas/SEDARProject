import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const resting={x:0,ground:0,force:0};
const views={Perspective:[7,5.5,8],Front:[0,3,10],Side:[10,3,0],Top:[0,11,.01],Underside:[5,-5,7]};

// A spring's lower seat follows the ground; its upper seat follows the platform.
class Helix extends THREE.Curve {
  constructor(shear=0){super();this.shear=shear;}
  getPoint(t,target=new THREE.Vector3()){
    const angle=t*Math.PI*2*6;
    return target.set(Math.cos(angle)*.19+t*this.shear,.44+t*1.58,Math.sin(angle)*.19);
  }
}

export default function Model3D({s=resting,onQuake,labels=true,reference=false}){
 const host=useRef(null),api=useRef(null),latest=useRef(s);
 const [cutaway,setCutaway]=useState(reference),[spin,setSpin]=useState(reference),[error,setError]=useState(''),[referenceLabels,setReferenceLabels]=useState(true);
 latest.current=s;
 useEffect(()=>{
  const el=host.current; let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});}catch{setError('3D rendering is unavailable in this browser. Try a browser with WebGL enabled. The experiment controls and graphs still work.');return;}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));renderer.setClearColor('#eef4ef');renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  el.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','Rotatable 3D model: four springs on base bolts, two opposed solenoids between spring pairs, platform and roof-mounted sensor');
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(38,1,.1,80);camera.position.set(...views.Perspective);
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,reference?1:2.3,0);controls.enableDamping=true;controls.minDistance=4;controls.maxDistance=19;controls.maxPolarAngle=Math.PI-.05;controls.minPolarAngle=.05;controls.autoRotateSpeed=.65;controls.enablePan=true;
  scene.add(new THREE.HemisphereLight(0xffffff,0x6c8579,2.4));const light=new THREE.DirectionalLight(0xffffff,3.5);light.position.set(4,9,5);light.castShadow=true;light.shadow.mapSize.set(1024,1024);light.shadow.camera.left=-7;light.shadow.camera.right=7;light.shadow.camera.top=8;light.shadow.camera.bottom=-7;scene.add(light);
  const materials=[];function mat(color,opts={}){const m=new THREE.MeshStandardMaterial({color,roughness:.55,...opts});materials.push(m);return m;}
  const concrete=mat('#dce4df'),glass=mat('#407c88',{metalness:.45,roughness:.24}),steel=mat('#97aaa7',{metalness:.7,roughness:.3}),green=mat('#39736a'),baseMat=mat('#839e91'),gold=mat('#da9a40',{metalness:.4}),dark=mat('#244e48');
  function mesh(g,m,parent,x=0,y=0,z=0){const a=new THREE.Mesh(g,m);a.position.set(x,y,z);a.castShadow=true;a.receiveShadow=true;parent.add(a);return a;}
  const box=(p,w,h,d,m,x=0,y=0,z=0)=>mesh(new THREE.BoxGeometry(w,h,d),m,p,x,y,z);
  const cyl=(p,r,h,m,x,y,z,n=24)=>mesh(new THREE.CylinderGeometry(r,r,h,n),m,p,x,y,z);
  const ground=new THREE.Group();scene.add(ground);box(ground,4.8,.22,3.5,baseMat,0,.11,0);
  const grid=new THREE.GridHelper(15,30,0xc3d4c8,0xdce6dc);grid.position.y=-.025;scene.add(grid);
  const moving=new THREE.Group();scene.add(moving);
  const platformMat=mat('#c7d9ce');const platform=box(moving,4.05,.18,2.85,platformMat,0,2.13,0);
  const building=new THREE.Group();building.position.y=2.24;moving.add(building);
  // Six architectural floors, built as actual 3D geometry visible from every side.
  box(building,2.18,3.26,1.62,glass,0,1.68,0);
  for(let i=0;i<=6;i++)box(building,2.4,.095,1.82,concrete,0,.06+i*.55,0);
  for(let x of [-1.14,-.57,0,.57,1.14])for(let z of [-.87,.87])box(building,.065,3.3,.085,concrete,x,1.68,z);
  for(let z of [-.85,-.28,.28,.85])for(let x of [-1.15,1.15])box(building,.085,3.3,.055,concrete,x,1.68,z);
  box(building,.4,.46,.035,dark,0,.3,.925);
  const sensor=new THREE.Group();sensor.position.set(.25,3.45,.15);building.add(sensor);box(sensor,.34,.055,.23,green);box(sensor,.11,.027,.09,dark,0,.04,0);
  for(let x of [-.13,.13])for(let z of [-.08,.08])cyl(sensor,.017,.018,gold,x,.038,z);
  const springs=[],collars=[];
  const corners=[[-1.15,-1.1],[1.15,-1.1],[-1.15,1.1],[1.15,1.1]];
  for(const [x,z] of corners){
    // Short threaded anchor, washer and hex nut; no freestanding pillar.
    cyl(ground,.07,.76,steel,x,.46,z);cyl(ground,.25,.035,steel,x,.245,z);cyl(ground,.135,.10,steel,x,.315,z,6);
    for(let y=.29;y<.84;y+=.035){const ring=mesh(new THREE.TorusGeometry(.073,.008,5,16),steel,ground,x,y,z);ring.rotation.x=Math.PI/2;}
    const spring=mesh(new THREE.TubeGeometry(new Helix(),100,.028,6,false),steel,ground,x,0,z);springs.push(spring);
    cyl(moving,.23,.055,steel,x,2.03,z);
    const collar=cyl(ground,.22,.10,green,x,1.17,z);collars.push(collar);
  }
  const actuators=[];
  for(let i=0;i<2;i++){
    const z=i===0?-1.1:1.1,dir=i===0?-1:1;
    const group=new THREE.Group();group.position.set(0,1.17,z);ground.add(group);
    // Base-fixed saddle bracket secures the coil; only the through-rod translates.
    box(ground,.72,.09,.65,steel,0,.285,z);box(ground,.11,.78,.43,steel,-.29,.70,z);box(ground,.11,.78,.43,steel,.29,.70,z);
    const coilMat=mat('#2563a6');const coil=cyl(group,.21,.60,coilMat,0,0,0);coil.rotation.z=Math.PI/2;
    // Compact metal frame and blue winding, matching the supplied push-pull unit.
    box(group,.76,.045,.48,steel,0,.25,0);box(group,.76,.045,.48,steel,0,-.25,0);
    for(const side of [-1,1]){box(group,.045,.50,.07,steel,side*.36,0,-.22);box(group,.045,.50,.07,steel,side*.36,0,.22);}
    const rod=cyl(group,.047,1.15,steel,-dir*.35,0,0);rod.rotation.z=Math.PI/2;
    const tips=[-1,1].map(side=>{const tip=cyl(group,.083,.045,steel,side*.575-dir*.35,0,0);tip.rotation.z=Math.PI/2;return tip;});
    const returnRings=[];for(let j=0;j<5;j++){const ring=mesh(new THREE.TorusGeometry(.084,.012,6,24),steel,group,-dir*(.39+j*.10),0,0);ring.rotation.y=Math.PI/2;returnRings.push(ring);}
    actuators.push({group,rod,tips,dir,coilMat,returnRings,travel:0});
  }
  // Project lightweight HTML labels from their true 3D attachment points.
  const labelSpecs=[['Roof / MPU6050',moving,new THREE.Vector3(.25,5.8,.15),'roof'],['S1',ground,new THREE.Vector3(-1.42,1.5,-1.1)],['S2',ground,new THREE.Vector3(1.42,1.5,-1.1)],['S3',ground,new THREE.Vector3(-1.42,1.5,1.1)],['S4',ground,new THREE.Vector3(1.42,1.5,1.1)],['01 · short stroke',ground,new THREE.Vector3(0,1.6,-1.1)],['02 · short stroke',ground,new THREE.Vector3(0,1.6,1.1)]];
  const tags=labelSpecs.map(([text,parent,position,type])=>{const tag=document.createElement('span');tag.className='model-tag';tag.textContent=text;el.appendChild(tag);return{tag,parent,position,type};});
  const state={cutaway:reference,spin:reference,labels,active:true};let lastShear=Infinity,raf,last=0;
  const resize=new ResizeObserver(()=>{const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();});resize.observe(el);
  const visibility=new IntersectionObserver(([entry])=>{state.active=entry.isIntersecting;});visibility.observe(el);
  function render(now){raf=requestAnimationFrame(render);if(!state.active)return;const dt=Math.min((now-last)/1000,.05);last=now;const data=latest.current;
    ground.position.x=data.ground*.016;moving.position.x=data.x*.016;const shear=moving.position.x-ground.position.x;
    if(Math.abs(shear-lastShear)>.001){for(const spring of springs){spring.geometry.dispose();spring.geometry=new THREE.TubeGeometry(new Helix(shear),100,.028,6,false);}lastShear=shear;}
    collars.forEach((c,i)=>c.position.x=corners[i][0]+shear*.48);
    actuators.forEach((a,i)=>{const active=i===0?data.force< -12:data.force>12;
      a.travel+=(Number(active)-a.travel)*Math.min(1,dt*22);
      const offset=a.dir*(-.35+.70*a.travel);a.rod.position.x=offset;
      a.tips.forEach((tip,index)=>tip.position.x=(index===0?-.575:.575)+offset);
      a.returnRings.forEach((ring,j)=>ring.position.x=-a.dir*(.39+j*(.10-.087*a.travel)));
      a.coilMat.color.set(active?'#e5a445':'#2563a6');a.coilMat.emissive.set(active?'#452a05':'#000000');
    });
    building.visible=!state.cutaway;platform.visible=!state.cutaway;
    controls.autoRotate=state.spin;controls.update(dt);scene.updateMatrixWorld();
    tags.forEach(({tag,parent,position,type})=>{tag.hidden=!state.labels||(state.cutaway&&type==='roof');const p=parent.localToWorld(position.clone()).project(camera);tag.style.left=`${(p.x*.5+.5)*el.clientWidth}px`;tag.style.top=`${(-p.y*.5+.5)*el.clientHeight}px`;tag.style.visibility=p.z>1||Math.abs(p.x)>1||Math.abs(p.y)>1?'hidden':'visible';});
    renderer.render(scene,camera);
  }
  raf=requestAnimationFrame(render);
  let start=null;const down=e=>{start={x:e.clientX,y:e.clientY,time:performance.now()}};
  const up=e=>{if(!onQuake||!start||Math.hypot(e.clientX-start.x,e.clientY-start.y)>5||performance.now()-start.time>450)return;const rect=renderer.domElement.getBoundingClientRect();const mouse=new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);const ray=new THREE.Raycaster();ray.setFromCamera(mouse,camera);if(!state.cutaway&&ray.intersectObjects(building.children,true).length)onQuake();};
  renderer.domElement.addEventListener('pointerdown',down);renderer.domElement.addEventListener('pointerup',up);
  api.current={state,view(name){camera.position.set(...views[name]);controls.target.set(0,name==='Top'||name==='Underside'?1:2.3,0);controls.update();}};
  return()=>{cancelAnimationFrame(raf);resize.disconnect();visibility.disconnect();controls.dispose();renderer.domElement.removeEventListener('pointerdown',down);renderer.domElement.removeEventListener('pointerup',up);scene.traverse(o=>{if(o.geometry)o.geometry.dispose()});materials.forEach(m=>m.dispose());renderer.dispose();tags.forEach(x=>x.tag.remove());renderer.domElement.remove();api.current=null;};
 },[]);
 useEffect(()=>{if(api.current)Object.assign(api.current.state,{cutaway,spin,labels:reference?referenceLabels:labels})},[cutaway,spin,labels,referenceLabels,reference]);
 function view(name){if(name==='Top'||name==='Underside')setCutaway(true);setSpin(false);api.current?.view(name)}
 return <div className={`three-model ${reference?'reference-model':''}`}>
  <div className="three-topline"><span>{reference?'MECHANICAL REFERENCE':'LIVE 3D MODEL'}</span><span>4 springs · 2 solenoids</span></div>
  <div ref={host} className="three-canvas">{error&&<p className="webgl-error" role="alert">{error}</p>}</div>
  <div className="view-controls" aria-label={reference?'Reference model views':'Live model views'}>{Object.keys(views).map(v=><button key={v} onClick={()=>view(v)}>{v}</button>)}</div>
  <div className="three-toolbar"><button aria-pressed={cutaway} onClick={()=>setCutaway(!cutaway)}>{cutaway?'Show building':'Inspect mechanism'}</button><button aria-pressed={spin} onClick={()=>setSpin(!spin)}>{spin?'Stop rotation':'Auto-rotate'}</button>{reference&&<button aria-pressed={referenceLabels} onClick={()=>setReferenceLabels(!referenceLabels)}>{referenceLabels?'Hide labels':'Show labels'}</button>}</div>
  <p className="orbit-hint">Drag to orbit · scroll / pinch to zoom · right-drag / two fingers to pan{!reference?' · click building to shake':''}</p>
 </div>
}
