export const initialState = () => ({t:0,x:0,v:0,passiveX:0,passiveV:0,ground:0,groundV:0,force:0,remaining:0,elapsed:0,energy:0,passiveEnergy:0,samples:[]});
export function step(s,dt,{strength=55,damping=true,input=0}={}) {
  s.t+=dt; s.elapsed+=dt; s.remaining=Math.max(0,s.remaining-dt);
  const envelope=s.remaining>0 ? Math.min(1,s.remaining/1.5) : 0;
  const ground=envelope*strength*.38*(Math.sin(s.t*10)+.36*Math.sin(s.t*17)) + input;
  const gv=(ground-s.ground)/dt;
  // Unit-mass spring model in illustrative display units; not calibrated structural data.
  const force=damping ? Math.max(-650,Math.min(650,-19*s.v)) : 0;
  const a=32*(ground-s.x)+1.4*(gv-s.v)+force;
  const pa=32*(ground-s.passiveX)+1.4*(gv-s.passiveV);
  s.v+=a*dt; s.x+=s.v*dt; s.passiveV+=pa*dt; s.passiveX+=s.passiveV*dt;
  s.ground=ground; s.groundV=gv; s.force=force;
  s.energy+=s.x*s.x*dt; s.passiveEnergy+=s.passiveX*s.passiveX*dt;
  return s;
}
