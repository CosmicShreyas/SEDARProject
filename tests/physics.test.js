import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState,step} from '../src/physics.js';
function run(damping){const s=initialState();s.remaining=6;for(let i=0;i<2400;i++)step(s,1/120,{damping,strength:55});return s;}
test('active damping reduces RMS displacement and settles after the quake',()=>{const s=run(true);assert.ok(s.energy < s.passiveEnergy*.5);assert.ok(Math.abs(s.x)<.1);assert.ok(Math.abs(s.v)<.1);});
test('disabled active damping matches the passive comparison',()=>{const s=run(false);assert.equal(s.x,s.passiveX);assert.equal(s.energy,s.passiveEnergy);assert.equal(s.force,0);});
test('all supported intensities remain bounded',()=>{for(const strength of [15,55,100]){const s=initialState();s.remaining=6;for(let i=0;i<3600;i++){step(s,1/120,{strength});assert.ok(Number.isFinite(s.x));assert.ok(Math.abs(s.x)<100);assert.ok(Math.abs(s.force)<=650);}}});
test('control force opposes building velocity',()=>{const s=initialState();s.v=10;step(s,1/120,{damping:true});assert.ok(s.force<0);s.v=-10;step(s,1/120,{damping:true});assert.ok(s.force>0);});
