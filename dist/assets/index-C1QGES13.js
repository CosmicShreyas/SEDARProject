(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bd={exports:{}},hl={};var Dv;function AE(){if(Dv)return hl;Dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return hl.Fragment=t,hl.jsx=i,hl.jsxs=i,hl}var Nv;function RE(){return Nv||(Nv=1,bd.exports=AE()),bd.exports}var O=RE(),Td={exports:{}},he={};var Uv;function CE(){if(Uv)return he;Uv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function I(F,_t,Ct){this.props=F,this.context=_t,this.refs=S,this.updater=Ct||N}I.prototype.isReactComponent={},I.prototype.setState=function(F,_t){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,_t,"setState")},I.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function B(){}B.prototype=I.prototype;function C(F,_t,Ct){this.props=F,this.context=_t,this.refs=S,this.updater=Ct||N}var L=C.prototype=new B;L.constructor=C,M(L,I.prototype),L.isPureReactComponent=!0;var w=Array.isArray;function D(){}var b={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function H(F,_t,Ct){var et=Ct.ref;return{$$typeof:o,type:F,key:_t,ref:et!==void 0?et:null,props:Ct}}function j(F,_t){return H(F.type,_t,F.props)}function Q(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function J(F){var _t={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ct){return _t[Ct]})}var X=/\/+/g;function Z(F,_t){return typeof F=="object"&&F!==null&&F.key!=null?J(""+F.key):_t.toString(36)}function V(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(D,D):(F.status="pending",F.then(function(_t){F.status==="pending"&&(F.status="fulfilled",F.value=_t)},function(_t){F.status==="pending"&&(F.status="rejected",F.reason=_t)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function W(F,_t,Ct,et,mt){var At=typeof F;(At==="undefined"||At==="boolean")&&(F=null);var It=!1;if(F===null)It=!0;else switch(At){case"bigint":case"string":case"number":It=!0;break;case"object":switch(F.$$typeof){case o:case t:It=!0;break;case x:return It=F._init,W(It(F._payload),_t,Ct,et,mt)}}if(It)return mt=mt(F),It=et===""?"."+Z(F,0):et,w(mt)?(Ct="",It!=null&&(Ct=It.replace(X,"$&/")+"/"),W(mt,_t,Ct,"",function(Fe){return Fe})):mt!=null&&(Q(mt)&&(mt=j(mt,Ct+(mt.key==null||F&&F.key===mt.key?"":(""+mt.key).replace(X,"$&/")+"/")+It)),_t.push(mt)),1;It=0;var gt=et===""?".":et+":";if(w(F))for(var wt=0;wt<F.length;wt++)et=F[wt],At=gt+Z(et,wt),It+=W(et,_t,Ct,At,mt);else if(wt=T(F),typeof wt=="function")for(F=wt.call(F),wt=0;!(et=F.next()).done;)et=et.value,At=gt+Z(et,wt++),It+=W(et,_t,Ct,At,mt);else if(At==="object"){if(typeof F.then=="function")return W(V(F),_t,Ct,et,mt);throw _t=String(F),Error("Objects are not valid as a React child (found: "+(_t==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":_t)+"). If you meant to render a collection of children, use an array instead.")}return It}function at(F,_t,Ct){if(F==null)return F;var et=[],mt=0;return W(F,et,"","",function(At){return _t.call(Ct,At,mt++)}),et}function ot(F){if(F._status===-1){var _t=F._result,Ct=_t();Ct.then(function(et){(F._status===0||F._status===-1)&&(F._status=1,F._result=et,Ct.status===void 0&&(Ct.status="fulfilled",Ct.value=et))},function(et){(F._status===0||F._status===-1)&&(F._status=2,F._result=et,Ct.status===void 0&&(Ct.status="rejected",Ct.reason=et))}),F._status===-1&&(F._status=0,F._result=Ct)}if(F._status===1)return F._result.default;throw F._result}var ft=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(_t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function St(F){var _t=b.T,Ct={};Ct.types=_t!==null?_t.types:null,b.T=Ct;try{var et=F(),mt=b.S;mt!==null&&mt(Ct,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(D,ft)}catch(At){ft(At)}finally{_t!==null&&Ct.types!==null&&(_t.types=Ct.types),b.T=_t}}function Kt(F){var _t=b.T;if(_t!==null){var Ct=_t.types;Ct===null?_t.types=[F]:Ct.indexOf(F)===-1&&Ct.push(F)}else St(Kt.bind(null,F))}var Ft={map:at,forEach:function(F,_t,Ct){at(F,function(){_t.apply(this,arguments)},Ct)},count:function(F){var _t=0;return at(F,function(){_t++}),_t},toArray:function(F){return at(F,function(_t){return _t})||[]},only:function(F){if(!Q(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return he.Activity=g,he.Children=Ft,he.Component=I,he.Fragment=i,he.Profiler=l,he.PureComponent=C,he.StrictMode=s,he.Suspense=p,he.ViewTransition=v,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,he.__COMPILER_RUNTIME={__proto__:null,c:function(F){return b.H.useMemoCache(F)}},he.addTransitionType=Kt,he.cache=function(F){return function(){return F.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(F,_t,Ct){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var et=M({},F.props),mt=F.key;if(_t!=null)for(At in _t.key!==void 0&&(mt=""+_t.key),_t)!P.call(_t,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&_t.ref===void 0||(et[At]=_t[At]);var At=arguments.length-2;if(At===1)et.children=Ct;else if(1<At){for(var It=Array(At),gt=0;gt<At;gt++)It[gt]=arguments[gt+2];et.children=It}return H(F.type,mt,et)},he.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},he.createElement=function(F,_t,Ct){var et,mt={},At=null;if(_t!=null)for(et in _t.key!==void 0&&(At=""+_t.key),_t)P.call(_t,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(mt[et]=_t[et]);var It=arguments.length-2;if(It===1)mt.children=Ct;else if(1<It){for(var gt=Array(It),wt=0;wt<It;wt++)gt[wt]=arguments[wt+2];mt.children=gt}if(F&&F.defaultProps)for(et in It=F.defaultProps,It)mt[et]===void 0&&(mt[et]=It[et]);return H(F,At,mt)},he.createRef=function(){return{current:null}},he.forwardRef=function(F){return{$$typeof:d,render:F}},he.isValidElement=Q,he.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ot}},he.memo=function(F,_t){return{$$typeof:m,type:F,compare:_t===void 0?null:_t}},he.startTransition=St,he.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},he.use=function(F){return b.H.use(F)},he.useActionState=function(F,_t,Ct){return b.H.useActionState(F,_t,Ct)},he.useCallback=function(F,_t){return b.H.useCallback(F,_t)},he.useContext=function(F){return b.H.useContext(F)},he.useDebugValue=function(){},he.useDeferredValue=function(F,_t){return b.H.useDeferredValue(F,_t)},he.useEffect=function(F,_t){return b.H.useEffect(F,_t)},he.useEffectEvent=function(F){return b.H.useEffectEvent(F)},he.useId=function(){return b.H.useId()},he.useImperativeHandle=function(F,_t,Ct){return b.H.useImperativeHandle(F,_t,Ct)},he.useInsertionEffect=function(F,_t){return b.H.useInsertionEffect(F,_t)},he.useLayoutEffect=function(F,_t){return b.H.useLayoutEffect(F,_t)},he.useMemo=function(F,_t){return b.H.useMemo(F,_t)},he.useOptimistic=function(F,_t){return b.H.useOptimistic(F,_t)},he.useReducer=function(F,_t,Ct){return b.H.useReducer(F,_t,Ct)},he.useRef=function(F){return b.H.useRef(F)},he.useState=function(F){return b.H.useState(F)},he.useSyncExternalStore=function(F,_t,Ct){return b.H.useSyncExternalStore(F,_t,Ct)},he.useTransition=function(){return b.H.useTransition()},he.version="19.3.0",he}var Lv;function sm(){return Lv||(Lv=1,Td.exports=CE()),Td.exports}var Oe=sm(),Ad={exports:{}},dl={},Rd={exports:{}},Cd={};var Ov;function wE(){return Ov||(Ov=1,(function(o){function t(V,W){var at=V.length;V.push(W);t:for(;0<at;){var ot=at-1>>>1,ft=V[ot];if(0<l(ft,W))V[ot]=W,V[at]=ft,at=ot;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var W=V[0],at=V.pop();if(at!==W){V[0]=at;t:for(var ot=0,ft=V.length,St=ft>>>1;ot<St;){var Kt=2*(ot+1)-1,Ft=V[Kt],F=Kt+1,_t=V[F];if(0>l(Ft,at))F<ft&&0>l(_t,Ft)?(V[ot]=_t,V[F]=at,ot=F):(V[ot]=Ft,V[Kt]=at,ot=Kt);else if(F<ft&&0>l(_t,at))V[ot]=_t,V[F]=at,ot=F;else break t}}return W}function l(V,W){var at=V.sortIndex-W.sortIndex;return at!==0?at:V.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],x=1,g=null,v=3,y=!1,T=!1,N=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(V){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=V)s(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function L(V){if(N=!1,C(V),!T)if(i(p)!==null)T=!0,w||(w=!0,Q());else{var W=i(m);W!==null&&Z(L,W.startTime-V)}}var w=!1,D=-1,b=5,P=-1;function H(){return M?!0:!(o.unstable_now()-P<b)}function j(){if(M=!1,w){var V=o.unstable_now();P=V;var W=!0;try{t:{T=!1,N&&(N=!1,I(D),D=-1),y=!0;var at=v;try{e:{for(C(V),g=i(p);g!==null&&!(g.expirationTime>V&&H());){var ot=g.callback;if(typeof ot=="function"){g.callback=null,v=g.priorityLevel;var ft=ot(g.expirationTime<=V);if(V=o.unstable_now(),typeof ft=="function"){g.callback=ft,C(V),W=!0;break e}g===i(p)&&s(p),C(V)}else s(p);g=i(p)}if(g!==null)W=!0;else{var St=i(m);St!==null&&Z(L,St.startTime-V),W=!1}}break t}finally{g=null,v=at,y=!1}W=void 0}}finally{W?Q():w=!1}}}var Q;if(typeof B=="function")Q=function(){B(j)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,X=J.port2;J.port1.onmessage=j,Q=function(){X.postMessage(null)}}else Q=function(){S(j,0)};function Z(V,W){D=S(function(){V(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(V){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var at=v;v=W;try{return V()}finally{v=at}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(V,W){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var at=v;v=V;try{return W()}finally{v=at}},o.unstable_scheduleCallback=function(V,W,at){var ot=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?ot+at:ot):at=ot,V){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=at+ft,V={id:x++,callback:W,priorityLevel:V,startTime:at,expirationTime:ft,sortIndex:-1},at>ot?(V.sortIndex=at,t(m,V),i(p)===null&&V===i(m)&&(N?(I(D),D=-1):N=!0,Z(L,at-ot))):(V.sortIndex=ft,t(p,V),T||y||(T=!0,w||(w=!0,Q()))),V},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(V){var W=v;return function(){var at=v;v=W;try{return V.apply(this,arguments)}finally{v=at}}}})(Cd)),Cd}var Pv;function DE(){return Pv||(Pv=1,Rd.exports=wE()),Rd.exports}var wd={exports:{}},Pn={};var Iv;function NE(){if(Iv)return Pn;Iv=1;var o=sm();function t(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:x,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.browser=function(x){return{$$typeof:u,_reason:x}},Pn.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(x,g,null,v)},Pn.flushSync=function(x){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=g,s.p=v,s.d.f()}},Pn.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(x,g))},Pn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Pn.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:N}):v==="script"&&s.d.X(x,{crossOrigin:y,integrity:T,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pn.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(x)},Pn.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);s.d.L(x,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pn.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(x)},Pn.requestFormReset=function(x){s.d.r(x)},Pn.unstable_batchedUpdates=function(x,g){return x(g)},Pn.useFormState=function(x,g,v){return p.H.useFormState(x,g,v)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var zv;function UE(){if(zv)return wd.exports;zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),wd.exports=NE(),wd.exports}var Bv;function LE(){if(Bv)return dl;Bv=1;var o=DE(),t=sm(),i=UE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,r=f;break}if(R===r){_=!0,r=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=c;break}if(R===r){_=!0,r=f,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=v(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function B(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(I=e,!1):e===n?(I!==null&&(S=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function w(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var D=Object.assign,b=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Kt=Symbol.for("react.legacy_hidden"),Ft=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),_t=Symbol.for("react.recoverable"),Ct=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case J:return"Profiler";case Q:return"StrictMode";case W:return"Suspense";case at:return"SuspenseList";case St:return"Activity";case F:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Z:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ot:return n=e.displayName||null,n!==null?n:At(e.type)||"Memo";case ft:n=e._payload,e=e._init;try{return At(e(n))}catch{}}return null}var It=Array.isArray,gt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fe={pending:!1,data:null,method:null,action:null},pe=[],ve=-1;function ye(e){return{current:e}}function ae(e){0>ve||(e.current=pe[ve],pe[ve]=null,ve--)}function se(e,n){ve++,pe[ve]=e.current,e.current=n}var Ge=ye(null),rn=ye(null),Rt=ye(null),Qt=ye(null);function G(e,n){switch(se(Rt,n),se(rn,e),se(Ge,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?F_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=F_(n),e=H_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Ge),se(Ge,e)}function le(){ae(Ge),ae(rn),ae(Rt)}function ie(e){var n=e.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,se(Qt,e)),n=Ge.current;var a=H_(n,e.type);n!==a&&(se(rn,e),se(Ge,a))}function U(e){rn.current===e&&(ae(Ge),ae(rn)),Qt.current===e&&(ae(Qt),kr._currentValue=Fe)}var E,$;function st(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",$=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+$}var ht=!1;function Tt(e,n){if(!e||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(Pt){var tt=Pt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(Pt){tt=Pt}yt=!1;try{var ut=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new e}finally{yt&&(ut!==void 0?Object.defineProperty(e.prototype,"props",ut):delete e.prototype.props)}}}else{try{throw Error()}catch(Pt){tt=Pt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(Pt){if(Pt&&tt&&typeof Pt.stack=="string")return[Pt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var z=_.split(`
`),it=R.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===it.length)for(r=z.length-1,c=it.length-1;1<=r&&0<=c&&z[r]!==it[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==it[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==it[c]){var dt=`
`+z[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?st(a):""}function Dt(e,n){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==n&&n!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Tt(e.type,!1);case 11:return Tt(e.type.render,!1);case 1:return Tt(e.type,!0);case 31:return st("Activity");case 30:return st("ViewTransition");default:return""}}function vt(e){try{var n="",a=null;do n+=Dt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Et=Object.prototype.hasOwnProperty,Ut=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,zt=o.unstable_requestPaint,qt=o.unstable_now,oe=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,K=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Xt=o.log,bt=o.unstable_setDisableYieldValue,ee=null,kt=null;function Pe(e){if(typeof Xt=="function"&&bt(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(ee,e)}catch{}}var me=Math.clz32?Math.clz32:Ju,ai=Math.log,vi=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(ai(e)/vi|0)|0}var sr=256,Ts=262144,Va=4194304;function pa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function As(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=pa(r):(_&=R,_!==0?c=pa(_):a||(a=R&~e,a!==0&&(c=pa(a))))):(R=r&~f,R!==0?c=pa(R):_!==0?c=pa(_):a||(a=r&~e,a!==0&&(c=pa(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ka(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ki(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-me(a),c=1<<r;n|=e[r],a&=~c}return n}function vo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xo(){var e=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),e}function rr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Xi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ol(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,it=e.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-me(a),yt=1<<dt;R[dt]=0,z[dt]=-1;var tt=it[dt];if(tt!==null)for(it[dt]=null,dt=0;dt<tt.length;dt++){var ut=tt[dt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}r!==0&&Rs(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Rs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-me(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function So(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-me(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function yo(e,n){var a=n&-n;return a=(a&42)!==0?1:Mo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Eo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pl(){var e=wt.p;return e!==0?e:(e=window.event,e===void 0?32:Ev(e.type))}function Il(e,n){var a=wt.p;try{return wt.p=e,n()}finally{wt.p=a}}var xi=Math.random().toString(36).slice(2),A="__reactFiber$"+xi,k="__reactProps$"+xi,pt="__reactContainer$"+xi,lt="__reactEvents$"+xi,ct="__reactListeners$"+xi,Ht="__reactHandles$"+xi,Yt="__reactResources$"+xi,Ot="__reactMarker$"+xi,Zt="__reactLoad$"+xi;function $t(e){delete e[A],delete e[k],delete e[ct],delete e[Ht]}function fe(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[pt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=iv(e);e!==null;){if(a=e[A])return a;e=iv(e)}return n}e=a,a=e.parentNode}return null}function ge(e){if(e=e[A]||e[pt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Re(e){var n=e[Yt];return n||(n=e[Yt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(e){e[Ot]=!0}function Qe(e){e[Zt]=void 0}var Xe=new Set,Sn={};function Gt(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(Sn[e]=n,e=0;e<n.length;e++)Xe.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vn={},si={};function qi(e){return Et.call(si,e)?!0:Et.call(Vn,e)?!1:Ie.test(e)?si[e]=!0:(Vn[e]=!0,!1)}var be=!1;function Ve(){var e=be;return be=!1,e}function tn(e,n,a){if(qi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ri(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ne(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ma(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $u(e){if(!e._valueTracker){var n=ma(e)?"checked":"value";e._valueTracker=zl(e,n,""+e[n])}}function Rm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ma(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var WS=/[\n"\\]/g;function Si(e){return e.replace(WS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tf(e,n,a,r,c,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?ef(e,un(e.value)):ef(e,un(n)):a!=null?ef(e,un(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+un(R):e.removeAttribute("name")}function Cm(e,n,a,r,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){$u(e);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),$u(e)}function ef(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function or(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function wm(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function Dm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),$u(e)}function lr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||jS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Um(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",be=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Nm(e,c,r),be=!0)}else for(var f in n)n.hasOwnProperty(f)&&Nm(e,f,n[f])}function nf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(e){return KS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var af=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,ur=null;function Lm(e){var n=ge(e);if(n&&(e=n.stateNode)){var a=e[k]||null;t:switch(e=n.stateNode,n.type){case"input":if(tf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[k]||null;if(!c)throw Error(s(90));tf(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Rm(r)}break t;case"textarea":wm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&or(e,!!a.multiple,n,!1)}}}var rf=!1;function Om(e,n,a){if(rf)return e(n,a);rf=!0;try{var r=e(n);return r}finally{if(rf=!1,(cr!==null||ur!==null)&&(Bc(),cr&&(n=cr,e=ur,ur=cr=null,Lm(n),e)))for(n=0;n<e.length;n++)Lm(e[n])}}function bo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[k]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(ga)try{var To={};Object.defineProperty(To,"passive",{get:function(){of=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{of=!1}var Xa=null,lf=null,Fl=null;function Pm(){if(Fl)return Fl;var e,n=lf,a=n.length,r,c="value"in Xa?Xa.value:Xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Fl=c.slice(e,1<r?1-r:void 0)}function Hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gl(){return!0}function Im(){return!1}function kn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Gl:Im,this.isPropagationStopped=Im,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=kn(qa),Ao=D({},qa,{view:0,detail:0}),QS=kn(Ao),cf,uf,Ro,kl=D({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(cf=e.screenX-Ro.screenX,uf=e.screenY-Ro.screenY):uf=cf=0,Ro=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),zm=kn(kl),JS=D({},kl,{dataTransfer:0}),$S=kn(JS),ty=D({},Ao,{relatedTarget:0}),ff=kn(ty),ey=D({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=kn(ey),iy=D({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ay=kn(iy),sy=D({},qa,{data:0}),Bm=kn(sy),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ly[e])?!!n[e]:!1}function hf(){return cy}var uy=D({},Ao,{key:function(e){if(e.key){var n=ry[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fy=kn(uy),hy=D({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=kn(hy),dy=D({},qa,{submitter:0}),py=kn(dy),my=D({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),gy=kn(my),_y=D({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),vy=kn(_y),xy=D({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=kn(xy),yy=D({},qa,{newState:0,oldState:0,source:0}),My=kn(yy),Ey=[9,13,27,32],df=ga&&"CompositionEvent"in window,Co=null;ga&&"documentMode"in document&&(Co=document.documentMode);var by=ga&&"TextEvent"in window&&!Co,Hm=ga&&(!df||Co&&8<Co&&11>=Co),Gm=" ",Vm=!1;function km(e,n){switch(e){case"keyup":return Ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Ty(e,n){switch(e){case"compositionend":return Xm(n);case"keypress":return n.which!==32?null:(Vm=!0,Gm);case"textInput":return e=n.data,e===Gm&&Vm?null:e;default:return null}}function Ay(e,n){if(fr)return e==="compositionend"||!df&&km(e,n)?(e=Pm(),Fl=lf=Xa=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hm&&n.locale!=="ko"?null:n.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ry[e.type]:n==="textarea"}function Ym(e,n,a,r){cr?ur?ur.push(r):ur=[r]:cr=r,n=Xc(n,"onChange"),0<n.length&&(a=new Vl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var wo=null,Do=null;function Cy(e){L_(e,0)}function Xl(e){var n=Wt(e);if(Rm(n))return e}function Wm(e,n){if(e==="change")return n}var jm=!1;if(ga){var pf;if(ga){var mf="oninput"in document;if(!mf){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),mf=typeof Zm.oninput=="function"}pf=mf}else pf=!1;jm=pf&&(!document.documentMode||9<document.documentMode)}function Km(){wo&&(wo.detachEvent("onpropertychange",Qm),Do=wo=null)}function Qm(e){if(e.propertyName==="value"&&Xl(Do)){var n=[];Ym(n,Do,e,sf(e)),Om(Cy,n)}}function wy(e,n,a){e==="focusin"?(Km(),wo=n,Do=a,wo.attachEvent("onpropertychange",Qm)):e==="focusout"&&Km()}function Dy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(Do)}function Ny(e,n){if(e==="click")return Xl(n)}function Uy(e,n){if(e==="input"||e==="change")return Xl(n)}function Ly(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var oi=typeof Object.is=="function"?Object.is:Ly;function No(e,n){if(oi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Et.call(n,c)||!oi(e[c],n[c]))return!1}return!0}function gf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $m(e,n){var a=Jm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jm(a)}}function tg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function eg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gf(e.document)}return n}function _f(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Oy=ga&&"documentMode"in document&&11>=document.documentMode,hr=null,vf=null,Uo=null,xf=!1;function ng(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||hr==null||hr!==gf(r)||(r=hr,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&No(Uo,r)||(Uo=r,r=Xc(vf,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=hr)))}function Cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var dr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Sf={},ig={};ga&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ws(e){if(Sf[e])return Sf[e];if(!dr[e])return e;var n=dr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ig)return Sf[e]=n[a];return e}var ag=ws("animationend"),sg=ws("animationiteration"),rg=ws("animationstart"),Py=ws("transitionrun"),Iy=ws("transitionstart"),zy=ws("transitioncancel"),og=ws("transitionend"),lg=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function Ni(e,n){lg.set(e,n),Gt(n,[e])}var By=0;function _a(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Pi.identifierPrefix;var a=By++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function cg(e){if(e==null||typeof e=="string")return e;var n=null,a=Lr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function va(e,n){return e=cg(e),n=cg(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],pr=0,Mf=0;function Yl(){for(var e=pr,n=Mf=pr=0;n<e;){var a=yi[n];yi[n++]=null;var r=yi[n];yi[n++]=null;var c=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&ug(a,c,f)}}function Wl(e,n,a,r){yi[pr++]=e,yi[pr++]=n,yi[pr++]=a,yi[pr++]=r,Mf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ef(e,n,a,r){return Wl(e,n,a,r),jl(e)}function Ds(e,n){return Wl(e,null,null,n),jl(e)}function ug(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-me(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function jl(e){if(50<tl)throw tl=0,zc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var mr={};function Fy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new Fy(e,n,a,r)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fg(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zl(e,n,a,r,c,f){var _=0;if(r=e,typeof r=="function")bf(r)&&(_=1);else if(typeof r=="string")_=dE(e,a,Ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case St:return e=Zn(31,a,n,c),e.elementType=St,e.lanes=f,e;case j:return Ns(a.children,c,f,n);case Q:_=8,c|=24;break;case J:return e=Zn(12,a,n,c|2),e.elementType=J,e.lanes=f,e;case W:return e=Zn(13,a,n,c),e.elementType=W,e.lanes=f,e;case at:return e=Zn(19,a,n,c),e.elementType=at,e.lanes=f,e;case Kt:case F:return e=c|32,e=Zn(30,a,n,e),e.elementType=F,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Z:_=10;break t;case X:_=9;break t;case V:_=11;break t;case ot:_=14;break t;case ft:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ns(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function Tf(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function hg(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Af(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dg=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=dg.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},dg.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var gr=[],_r=0,Kl=null,Lo=0,Ei=[],bi=0,Ya=null,Wi=1,ji="";function Sa(e,n){gr[_r++]=Lo,gr[_r++]=Kl,Kl=e,Lo=n}function pg(e,n,a){Ei[bi++]=Wi,Ei[bi++]=ji,Ei[bi++]=Ya,Ya=e;var r=Wi;e=ji;var c=32-me(r)-1;r&=~(1<<c),a+=1;var f=32-me(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Wi=1<<32-me(n)+c|a<<c|r,ji=f+e}else Wi=1<<f|a<<c|r,ji=e}function Ql(e){e.return!==null&&(Sa(e,1),pg(e,1,0))}function Rf(e){for(;e===Kl;)Kl=gr[--_r],gr[_r]=null,Lo=gr[--_r],gr[_r]=null;for(;e===Ya;)Ya=Ei[--bi],Ei[bi]=null,ji=Ei[--bi],Ei[bi]=null,Wi=Ei[--bi],Ei[bi]=null}function mg(e,n){Ei[bi++]=Wi,Ei[bi++]=ji,Ei[bi++]=Ya,Wi=n.id,ji=n.overflow,Ya=e}var Tn=null,en=null,Te=!1,Wa=null,Ti=!1,Cf=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Mi(n,e)),Cf}function gg(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[k]=r,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)we(nl[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Cm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||z_(n.textContent,a)?(r.popover!=null&&(we("beforetoggle",n),we("toggle",n)),r.onScroll!=null&&we("scroll",n),r.onScrollEnd!=null&&we("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||ja(e,!0)}function Jl(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Tn=Tn.return}}function vr(e){if(e!==Tn)return!1;if(!Te)return Jl(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ad(e.type,e.memoizedProps)),a=!a),a&&en&&ja(e),Jl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=nv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=nv(e)}else n===27?(n=en,us(e.type)?(e=dd,dd=null,en=e):en=n):en=Tn?Ri(e.stateNode.nextSibling):null;return!0}function Us(){en=Tn=null,Te=!1}function wf(){var e=Wa;return e!==null&&(Jn===null?Jn=e:Jn.push.apply(Jn,e),Wa=null),e}function Oo(e){Wa===null?Wa=[e]:Wa.push(e)}var Df=ye(null),Ls=null,ya=null;function Za(e,n,a){se(Df,n._currentValue),n._currentValue=a}function Ma(e){e._currentValue=Df.current,ae(Df)}function $l(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var z=0;z<n.length;z++)if(R.context===n[z]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),$l(f.return,a,e),r||(_=null);break t}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),$l(_,a,e),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),$l(c.return,a,e),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Os(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;oi(c.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(c===Qt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(kr):e=[kr])}c=c.return}return e!==null&&Nf(n,e,a,r),n.flags|=262144,e!==null}function tc(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ps(e){Ls=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return _g(Ls,e)}function ec(e,n){return Ls===null&&Ps(e),_g(e,n)}function _g(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(s(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var Hy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gy=o.unstable_scheduleCallback,Vy=o.unstable_NormalPriority,mn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new Hy,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&Gy(Vy,function(){e.controller.abort()})}function vg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Io=null;function ky(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var zo=null,Lf=0,Is=0,xr=null;function Xy(e,n){if(zo===null){var a=zo=[];Lf=0,Is=Zh(),xr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lf++,n.then(xg,xg),n}function xg(){if(--Lf===0&&(Io=null,zo!==null)){xr!==null&&(xr.status="fulfilled");var e=zo;zo=null,Is=0,xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function qy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Sg=gt.S;gt.S=function(e,n){if(h_=qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xy(e,n),Io!==null)for(var a=zr;a!==null;)vg(a,Io),a=a.next;if(a=e.types,a!==null){for(var r=zr;r!==null;)vg(r,a),r=r.next;if(Is!==0){r=Io,r===null&&(r=Io=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}Sg!==null&&Sg(e,n)};var zs=ye(null);function Of(){var e=zs.current;return e!==null?e:$e.pooledCache}function nc(e,n){n===null?se(zs,zs.current):se(zs,n.pool)}function yg(){var e=Of();return e===null?null:{parent:mn._currentValue,pool:e}}var Sr=Error(s(460)),Pf=Error(s(474)),ic=Error(s(542)),ac={then:function(){}};function Mg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tg(e),e}throw Fs=n,Sr}}function Bs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,Sr):a}}var Fs=null;function bg(){if(Fs===null)throw Error(s(459));var e=Fs;return Fs=null,e}function Tg(e){if(e===Sr||e===ic)throw Error(s(483))}var yr=null,Bo=0;function sc(e){var n=Bo;return Bo+=1,yr===null&&(yr=[]),Eg(yr,e,n)}function Ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function rc(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ag(e){function n(nt,q){if(e){var rt=nt.deletions;rt===null?(nt.deletions=[q],nt.flags|=16):rt.push(q)}}function a(nt,q){if(!e)return null;for(;q!==null;)n(nt,q),q=q.sibling;return null}function r(nt){for(var q=new Map;nt!==null;)nt.key===null?q.set(nt.index,nt):q.set(nt.key,nt),nt=nt.sibling;return q}function c(nt,q){return nt=xa(nt,q),nt.index=0,nt.sibling=null,nt}function f(nt,q,rt){return nt.index=rt,e?(rt=nt.alternate,rt!==null?(rt=rt.index,rt<q?(nt.flags|=2,q):rt):(nt.flags|=134217730,q)):(nt.flags|=1048576,q)}function _(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function R(nt,q,rt,xt){return q===null||q.tag!==6?(q=Tf(rt,nt.mode,xt),q.return=nt,q):(q=c(q,rt),q.return=nt,q)}function z(nt,q,rt,xt){var jt=rt.type;return jt===j?(nt=dt(nt,q,rt.props.children,xt,rt.key),Ka(nt,rt),nt):q!==null&&(q.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ft&&Bs(jt)===q.type)?(q=c(q,rt.props),Ka(q,rt),q.return=nt,q):(q=Zl(rt.type,rt.key,rt.props,null,nt.mode,xt),Ka(q,rt),q.return=nt,q)}function it(nt,q,rt,xt){return q===null||q.tag!==4||q.stateNode.containerInfo!==rt.containerInfo||q.stateNode.implementation!==rt.implementation?(q=Af(rt,nt.mode,xt),q.return=nt,q):(q=c(q,rt.children||[]),q.return=nt,q)}function dt(nt,q,rt,xt,jt){return q===null||q.tag!==7?(q=Ns(rt,nt.mode,xt,jt),q.return=nt,q):(q=c(q,rt),q.return=nt,q)}function yt(nt,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Tf(""+q,nt.mode,rt),q.return=nt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case P:return rt=Zl(q.type,q.key,q.props,null,nt.mode,rt),Ka(rt,q),rt.return=nt,rt;case H:return q=Af(q,nt.mode,rt),q.return=nt,q;case ft:return q=Bs(q),yt(nt,q,rt)}if(It(q)||et(q))return q=Ns(q,nt.mode,rt,null),q.return=nt,q;if(typeof q.then=="function")return yt(nt,sc(q),rt);if(q.$$typeof===Z)return yt(nt,ec(nt,q),rt);rc(nt,q)}return null}function tt(nt,q,rt,xt){var jt=q!==null?q.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return jt!==null?null:R(nt,q,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case P:return rt.key===jt?z(nt,q,rt,xt):null;case H:return rt.key===jt?it(nt,q,rt,xt):null;case ft:return rt=Bs(rt),tt(nt,q,rt,xt)}if(It(rt)||et(rt))return jt!==null?null:dt(nt,q,rt,xt,null);if(typeof rt.then=="function")return tt(nt,q,sc(rt),xt);if(rt.$$typeof===Z)return tt(nt,q,ec(nt,rt),xt);rc(nt,rt)}return null}function ut(nt,q,rt,xt,jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return nt=nt.get(rt)||null,R(q,nt,""+xt,jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case P:return nt=nt.get(xt.key===null?rt:xt.key)||null,z(q,nt,xt,jt);case H:return nt=nt.get(xt.key===null?rt:xt.key)||null,it(q,nt,xt,jt);case ft:return xt=Bs(xt),ut(nt,q,rt,xt,jt)}if(It(xt)||et(xt))return nt=nt.get(rt)||null,dt(q,nt,xt,jt,null);if(typeof xt.then=="function")return ut(nt,q,rt,sc(xt),jt);if(xt.$$typeof===Z)return ut(nt,q,rt,ec(q,xt),jt);rc(q,xt)}return null}function Pt(nt,q,rt,xt){for(var jt=null,Le=null,re=q,ce=q=0,vn=null;re!==null&&ce<rt.length;ce++){re.index>ce?(vn=re,re=null):vn=re.sibling;var Be=tt(nt,re,rt[ce],xt);if(Be===null){re===null&&(re=vn);break}e&&re&&Be.alternate===null&&n(nt,re),q=f(Be,q,ce),Le===null?jt=Be:Le.sibling=Be,Le=Be,re=vn}if(ce===rt.length)return a(nt,re),Te&&Sa(nt,ce),jt;if(re===null){for(;ce<rt.length;ce++)re=yt(nt,rt[ce],xt),re!==null&&(q=f(re,q,ce),Le===null?jt=re:Le.sibling=re,Le=re);return Te&&Sa(nt,ce),jt}for(re=r(re);ce<rt.length;ce++)vn=ut(re,nt,ce,rt[ce],xt),vn!==null&&(e&&(Be=vn.alternate,Be!==null&&re.delete(Be.key===null?ce:Be.key)),q=f(vn,q,ce),Le===null?jt=vn:Le.sibling=vn,Le=vn);return e&&re.forEach(function(ms){return n(nt,ms)}),Te&&Sa(nt,ce),jt}function te(nt,q,rt,xt){if(rt==null)throw Error(s(151));for(var jt=null,Le=null,re=q,ce=q=0,vn=null,Be=rt.next();re!==null&&!Be.done;ce++,Be=rt.next()){re.index>ce?(vn=re,re=null):vn=re.sibling;var ms=tt(nt,re,Be.value,xt);if(ms===null){re===null&&(re=vn);break}e&&re&&ms.alternate===null&&n(nt,re),q=f(ms,q,ce),Le===null?jt=ms:Le.sibling=ms,Le=ms,re=vn}if(Be.done)return a(nt,re),Te&&Sa(nt,ce),jt;if(re===null){for(;!Be.done;ce++,Be=rt.next())Be=yt(nt,Be.value,xt),Be!==null&&(q=f(Be,q,ce),Le===null?jt=Be:Le.sibling=Be,Le=Be);return Te&&Sa(nt,ce),jt}for(re=r(re);!Be.done;ce++,Be=rt.next())Be=ut(re,nt,ce,Be.value,xt),Be!==null&&(e&&(vn=Be.alternate,vn!==null&&re.delete(vn.key===null?ce:vn.key)),q=f(Be,q,ce),Le===null?jt=Be:Le.sibling=Be,Le=Be);return e&&re.forEach(function(TE){return n(nt,TE)}),Te&&Sa(nt,ce),jt}function Se(nt,q,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===j&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case P:t:{for(var jt=rt.key;q!==null;){if(q.key===jt){if(jt=rt.type,jt===j){if(q.tag===7){a(nt,q.sibling),xt=c(q,rt.props.children),Ka(xt,rt),xt.return=nt,nt=xt;break t}}else if(q.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===ft&&Bs(jt)===q.type){a(nt,q.sibling),xt=c(q,rt.props),Ka(xt,rt),xt.return=nt,nt=xt;break t}a(nt,q);break}else n(nt,q);q=q.sibling}rt.type===j?(xt=Ns(rt.props.children,nt.mode,xt,rt.key),Ka(xt,rt),xt.return=nt,nt=xt):(xt=Zl(rt.type,rt.key,rt.props,null,nt.mode,xt),Ka(xt,rt),xt.return=nt,nt=xt)}return _(nt);case H:t:{for(jt=rt.key;q!==null;){if(q.key===jt)if(q.tag===4&&q.stateNode.containerInfo===rt.containerInfo&&q.stateNode.implementation===rt.implementation){a(nt,q.sibling),xt=c(q,rt.children||[]),xt.return=nt,nt=xt;break t}else{a(nt,q);break}else n(nt,q);q=q.sibling}xt=Af(rt,nt.mode,xt),xt.return=nt,nt=xt}return _(nt);case ft:return rt=Bs(rt),Se(nt,q,rt,xt)}if(It(rt))return Pt(nt,q,rt,xt);if(et(rt)){if(jt=et(rt),typeof jt!="function")throw Error(s(150));return rt=jt.call(rt),te(nt,q,rt,xt)}if(typeof rt.then=="function")return Se(nt,q,sc(rt),xt);if(rt.$$typeof===Z)return Se(nt,q,ec(nt,rt),xt);rc(nt,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,q!==null&&q.tag===6?(a(nt,q.sibling),xt=c(q,rt),xt.return=nt,nt=xt):(a(nt,q),xt=Tf(rt,nt.mode,xt),xt.return=nt,nt=xt),_(nt)):a(nt,q)}return function(nt,q,rt,xt){try{Bo=0;var jt=Se(nt,q,rt,xt);return yr=null,jt}catch(re){if(re===Sr||re===ic)throw re;var Le=Zn(29,re,null,nt.mode);return Le.lanes=xt,Le.return=nt,Le}}}var Hs=Ag(!0),Rg=Ag(!1),Qa=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=jl(e),ug(e,null,a),n}return Wl(e,r,n,a),jl(e)}function Fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,So(e,a)}}function Bf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ff=!1;function Ho(){if(Ff){var e=xr;if(e!==null)throw e}}function Go(e,n,a,r){Ff=!1;var c=e.updateQueue;Qa=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var z=R,it=z.next;z.next=null,_===null?f=it:_.next=it,_=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==_&&(R===null?dt.firstBaseUpdate=it:R.next=it,dt.lastBaseUpdate=z))}if(f!==null){var yt=c.baseState;_=0,dt=it=z=null,R=f;do{var tt=R.lane&-536870913,ut=tt!==R.lane;if(ut?(Ue&tt)===tt:(r&tt)===tt){tt!==0&&tt===Is&&(Ff=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Pt=e,te=R;tt=n;var Se=a;switch(te.tag){case 1:if(Pt=te.payload,typeof Pt=="function"){yt=Pt.call(Se,yt,tt);break t}yt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=te.payload,tt=typeof Pt=="function"?Pt.call(Se,yt,tt):Pt,tt==null)break t;yt=D({},yt,tt);break t;case 2:Qa=!0}}tt=R.callback,tt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[tt]:ut.push(tt))}else ut={lane:tt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(it=dt=ut,z=yt):dt=dt.next=ut,_|=tt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(z=yt),c.baseState=z,c.firstBaseUpdate=it,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),rs|=_,e.lanes=_,e.memoizedState=yt}}function Cg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function wg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cg(a[e],n)}var ts=ye(null),oc=ye(0);function Dg(e,n){e=Ra,se(oc,e),se(ts,n),Ra=e|n.baseLanes}function Hf(){se(oc,Ra),se(ts,ts.current)}function Gf(){Ra=oc.current,ae(ts),ae(oc)}var Nn=ye(null),Bn=null;function es(e){var n=e.alternate;se(Un,Un.current&1),se(Nn,e),Bn===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(Bn=e)}function Vf(e){se(Un,Un.current),se(Nn,e),Bn===null&&(Bn=e)}function Ng(e){e.tag===22?(se(Un,Un.current),se(Nn,e),Bn===null&&(Bn=e)):ns()}function ns(){se(Un,Un.current),se(Nn,Nn.current)}function li(e){ae(Nn),Bn===e&&(Bn=null),ae(Un)}var Un=ye(0);function Vo(e,n){se(Nn,Nn.current),se(Un,n)}function kf(e){ae(Un),ae(Nn),Bn===e&&(Bn=null)}function lc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||hd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,xe=null,Je=null,gn=null,cc=!1,Mr=!1,Gs=!1,uc=0,ko=0,Er=null,Yy=0;function fn(){throw Error(s(321))}function Xf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!oi(e[a],n[a]))return!1;return!0}function qf(e,n,a,r,c,f){return Ea=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,gt.H=e===null||e.memoizedState===null?p0:m0,Gs=!1,f=a(r,c),Gs=!1,Mr&&(f=Lg(n,a,r,c)),Ug(e),f}function Ug(e){gt.H=_c;var n=Je!==null&&Je.next!==null;if(Ea=0,gn=Je=xe=null,cc=!1,ko=0,Er=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&tc(e)&&(_n=!0))}function Lg(e,n,a,r){xe=e;var c=0;do{if(Mr&&(Er=null),ko=0,Mr=!1,25<=c)throw Error(s(301));if(c+=1,gn=Je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}gt.H=tM,f=n(a,r)}while(Mr);return f}function Wy(){var e=gt.H,n=e.useState()[0];return n=typeof n.then=="function"?Xo(n):n,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(xe.flags|=1024),n}function Yf(){var e=uc!==0;return uc=0,e}function Wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function jf(e){if(cc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cc=!1}Ea=0,gn=Je=xe=null,Mr=!1,ko=uc=0,Er=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xe.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(Je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var n=gn===null?xe.memoizedState:gn.next;if(n!==null)gn=n,Je=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},gn===null?xe.memoizedState=gn=e:gn=gn.next=e}return gn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(e){var n=ko;return ko+=1,Er===null&&(Er=[]),e=Eg(Er,e,n),n=xe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,gt.H=n===null||n.memoizedState===null?p0:m0),e}function hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xo(e);if(e.$$typeof===_t)return;if(e.$$typeof===Z)return Dn(e)}throw Error(s(438,String(e)))}function Zf(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=xe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ft;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function dc(e){var n=pn();return Kf(n,Je,e)}function Kf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=_=null,z=null,it=n,dt=!1;do{var yt=it.lane&-536870913;if(yt!==it.lane?(Ue&yt)===yt:(Ea&yt)===yt){var tt=it.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),yt===Is&&(dt=!0);else if((Ea&tt)===tt){it=it.next,tt===Is&&(dt=!0);continue}else yt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(R=z=yt,_=f):z=z.next=yt,xe.lanes|=tt,rs|=tt;yt=it.action,Gs&&a(f,yt),f=it.hasEagerState?it.eagerState:a(f,yt)}else tt={lane:yt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(R=z=tt,_=f):z=z.next=tt,xe.lanes|=yt,rs|=yt;it=it.next}while(it!==null&&it!==n);if(z===null?_=f:z.next=R,!oi(f,e.memoizedState)&&(_n=!0,dt&&(a=xr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Qf(e){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);oi(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Og(e,n,a){var r=xe,c=pn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!oi((Je||c).memoizedState,a);if(_&&(c.memoizedState=a,_n=!0),c=c.queue,th(zg.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||_||gn!==null&&(gn.memoizedState.tag&1)!==0,br(e?9:8,{destroy:void 0},Ig.bind(null,r,c,a,n),null),e){if(r.flags|=2048,$e===null)throw Error(s(349));f||(Ea&127)!==0||Pg(r,n,a)}return a}function Pg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=fc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ig(e,n,a,r){n.value=a,n.getSnapshot=r,Bg(n)&&Fg(e)}function zg(e,n,a){return a(function(){Bg(n)&&Fg(e)})}function Bg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!oi(e,a)}catch{return!0}}function Fg(e){var n=Ds(e,2);n!==null&&$n(n,e,2)}function Jf(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),Gs){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function Hg(e,n,a,r){return e.baseState=a,Kf(e,Je,typeof r=="function"?r:ba)}function jy(e,n,a,r,c){if(gc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};gt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Gg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gg(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=gt.T,_={};_.types=f!==null?f.types:null,gt.T=_;try{var R=a(c,r),z=gt.S;z!==null&&z(_,R),Vg(e,n,R)}catch(it){$f(e,n,it)}finally{f!==null&&_.types!==null&&(f.types=_.types),gt.T=f}}else try{f=a(c,r),Vg(e,n,f)}catch(it){$f(e,n,it)}}function Vg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){kg(e,n,r)},function(r){return $f(e,n,r)}):kg(e,n,a)}function kg(e,n,a){n.status="fulfilled",n.value=a,Xg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Gg(e,a)))}function $f(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Xg(n),n=n.next;while(n!==r)}e.action=null}function Xg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qg(e,n){return n}function Yg(e,n){if(Te){var a=$e.formState;if(a!==null){t:{var r=xe;if(Te){if(en){e:{for(var c=en,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=Ri(c.nextSibling),r=c.data==="F!";break t}}ja(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qg,lastRenderedState:n},a.queue=r,a=f0.bind(null,xe,r),r.dispatch=a,r=Jf(!1),f=sh.bind(null,xe,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=jy.bind(null,xe,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Wg(e){var n=pn();return jg(n,Je,e)}function jg(e,n,a){if(n=Kf(e,n,qg)[0],e=dc(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Xo(n)}catch(_){throw _===Sr?ic:_}else r=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,br(9,{destroy:void 0},Zy.bind(null,c,a),null)),[r,f,e]}function Zy(e,n){e.action=n}function Zg(e){var n=pn(),a=Je;if(a!==null)return jg(n,a,e);pn(),n=n.memoizedState,a=pn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function br(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=xe.updateQueue,n===null&&(n=fc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Kg(){return pn().memoizedState}function pc(e,n,a,r){var c=Xn();xe.flags|=e,c.memoizedState=br(1|n,{destroy:void 0},a,r===void 0?null:r)}function mc(e,n,a,r){var c=pn();r=r===void 0?null:r;var f=c.memoizedState.inst;Je!==null&&r!==null&&Xf(r,Je.memoizedState.deps)?c.memoizedState=br(n,f,a,r):(xe.flags|=e,c.memoizedState=br(1|n,f,a,r))}function Qg(e,n){pc(8390656,8,e,n)}function th(e,n){mc(2048,8,e,n)}function Ky(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=fc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Jg(e){var n=pn().memoizedState;return Ky({ref:n,nextImpl:e}),function(){if((ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $g(e,n){return mc(4,2,e,n)}function t0(e,n){return mc(4,4,e,n)}function e0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function n0(e,n,a){a=a!=null?a.concat([e]):null,mc(4,4,e0.bind(null,n,e),a)}function eh(){}function i0(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Xf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function a0(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Xf(n,r[1]))return r[0];if(r=e(),Gs){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r}function nh(e,n,a){return a===void 0||(Ea&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=p_(),xe.lanes|=e,rs|=e,a)}function s0(e,n,a,r){return oi(a,n)?a:ts.current!==null?(e=nh(e,a,r),oi(e,n)||(_n=!0),e):(Ea&106)===0||(Ea&1073741824)!==0&&(Ue&261930)===0?(_n=!0,e.memoizedState=a):(e=p_(),xe.lanes|=e,rs|=e,n)}function r0(e,n,a,r,c){var f=wt.p;wt.p=f!==0&&8>f?f:8;var _=gt.T,R={};R.types=_!==null?_.types:null,gt.T=R,sh(e,!1,n,a);try{var z=c(),it=gt.S;if(it!==null&&it(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=qy(z,r);qo(e,n,dt,hi(e))}else qo(e,n,r,hi(e))}catch(yt){qo(e,n,{then:function(){},status:"rejected",reason:yt},hi())}finally{wt.p=f,_!==null&&R.types!==null&&(_.types=R.types),gt.T=_}}function Qy(){}function ih(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=o0(e).queue;r0(e,c,n,Fe,a===null?Qy:function(){return l0(e),a(r)})}function o0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Fe,baseState:Fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Fe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function l0(e){var n=o0(e);n.next===null&&(n=e.alternate.memoizedState),qo(e,n.next.queue,{},hi())}function ah(){return Dn(kr)}function c0(){return pn().memoizedState}function u0(){return pn().memoizedState}function Jy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();e=Ja(a);var r=$a(n,e,a);r!==null&&($n(r,n,a),Fo(r,n,a)),n={cache:Uf()},e.payload=n;return}n=n.return}}function $y(e,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(e)?h0(n,a):(a=Ef(e,n,a,r),a!==null&&($n(a,e,r),d0(a,n,r)))}function f0(e,n,a){var r=hi();qo(e,n,a,r)}function qo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(e))h0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,oi(R,_))return Wl(e,n,c,0),$e===null&&Yl(),!1}catch{}if(a=Ef(e,n,c,r),a!==null)return $n(a,e,r),d0(a,n,r),!0}return!1}function sh(e,n,a,r){if(r={lane:2,revertLane:Zh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(n)throw Error(s(479))}else n=Ef(e,a,r,2),n!==null&&$n(n,e,2)}function gc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function h0(e,n){Mr=cc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function d0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,So(e,a)}}var _c={readContext:Dn,use:hc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},p0={readContext:Dn,use:hc,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Qg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pc(4194308,4,e0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pc(4194308,4,e,n)},useInsertionEffect:function(e,n){pc(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var r=e();if(Gs){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(Gs){Pe(!0);try{a(n)}finally{Pe(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=$y.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Jf(e);var n=e.queue,a=f0.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:eh,useDeferredValue:function(e,n){var a=Xn();return nh(a,e,n)},useTransition:function(){var e=Jf(!1);return e=r0.bind(null,xe,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=xe,c=Xn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$e===null)throw Error(s(349));(Ue&127)!==0||Pg(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qg(zg.bind(null,r,f,e),[e]),r.flags|=2048,br(9,{destroy:void 0},Ig.bind(null,r,f,a,n),null),a},useId:function(){var e=Xn(),n=$e.identifierPrefix;if(Te){var a=ji,r=Wi;a=(r&~(1<<32-me(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=uc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ah,useFormState:Yg,useActionState:Yg,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Zf,useCacheRefresh:function(){return Xn().memoizedState=Jy.bind(null,xe)},useEffectEvent:function(e){var n=Xn(),a={impl:e};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},m0={readContext:Dn,use:hc,useCallback:i0,useContext:Dn,useEffect:th,useImperativeHandle:n0,useInsertionEffect:$g,useLayoutEffect:t0,useMemo:a0,useReducer:dc,useRef:Kg,useState:function(){return dc(ba)},useDebugValue:eh,useDeferredValue:function(e,n){var a=pn();return s0(a,Je.memoizedState,e,n)},useTransition:function(){var e=dc(ba)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Xo(e),n]},useSyncExternalStore:Og,useId:c0,useHostTransitionStatus:ah,useFormState:Wg,useActionState:Wg,useOptimistic:function(e,n){var a=pn();return Hg(a,Je,e,n)},useMemoCache:Zf,useCacheRefresh:u0,useEffectEvent:Jg},tM={readContext:Dn,use:hc,useCallback:i0,useContext:Dn,useEffect:th,useImperativeHandle:n0,useInsertionEffect:$g,useLayoutEffect:t0,useMemo:a0,useReducer:Qf,useRef:Kg,useState:function(){return Qf(ba)},useDebugValue:eh,useDeferredValue:function(e,n){var a=pn();return Je===null?nh(a,e,n):s0(a,Je.memoizedState,e,n)},useTransition:function(){var e=Qf(ba)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Xo(e),n]},useSyncExternalStore:Og,useId:c0,useHostTransitionStatus:ah,useFormState:Zg,useActionState:Zg,useOptimistic:function(e,n){var a=pn();return Je!==null?Hg(a,Je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:u0,useEffectEvent:Jg};function rh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:D({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var oh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=hi(),c=Ja(r);c.payload=n,a!=null&&(c.callback=a),n=$a(e,c,r),n!==null&&($n(n,e,r),Fo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=hi(),c=Ja(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=$a(e,c,r),n!==null&&($n(n,e,r),Fo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=hi(),r=Ja(a);r.tag=2,n!=null&&(r.callback=n),n=$a(e,r,a),n!==null&&($n(n,e,a),Fo(n,e,a))}};function g0(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!No(a,r)||!No(c,f):!0}function _0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&oh.enqueueReplaceState(n,n.state,null)}function Vs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=D({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function v0(e){ql(e)}function x0(e){console.error(e)}function S0(e){ql(e)}function vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function y0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function lh(e,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(e,n)},a}function M0(e){return e=Ja(e),e.tag=3,e}function E0(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){y0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){y0(n,a,r),typeof c!="function"&&(os===null?os=new Set([this]):os.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function eM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?Fc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Yh(e,r,c)),!1;case 22:return a.flags|=65536,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Yh(e,r,c)),!1}throw Error(s(435,a.tag))}return Yh(e,r,c),Fc(),!1}if(Te)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Cf&&(e=Error(s(422),{cause:r}),Oo(Mi(e,a)))):(r!==Cf&&(n=Error(s(423),{cause:r}),Oo(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Mi(r,a),c=lh(e.stateNode,r,c),Bf(e,c),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:r});if(f=Mi(f,a),$o===null?$o=[f]:$o.push(f),hn!==4&&(hn=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=lh(a.stateNode,r,e),Bf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(os===null||!os.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=M0(c),E0(c,e,a,r),Bf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ch=Error(s(461)),_n=!1;function yn(e,n,a,r){n.child=e===null?Rg(n,null,a,r):Hs(n,e.child,a,r)}function b0(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return Ps(n),r=qf(e,n,a,_,f,c),R=Yf(),e!==null&&!_n?(Wf(e,n,c),Ta(e,n,c)):(Te&&R&&Ql(n),n.flags|=1,yn(e,n,r,c),n.child)}function T0(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!bf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A0(e,n,f,r,c)):(e=Zl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_h(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(_,r)&&e.ref===n.ref)return Ta(e,n,c)}return n.flags|=1,e=xa(f,r),e.ref=n.ref,e.return=n,n.child=e}function A0(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(No(f,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=f,_h(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ta(e,n,c)}return uh(e,n,a,r,c)}function R0(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return C0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(n,f!==null?f.cachePool:null),f!==null?Dg(n,f):Hf(),Ng(n);else return r=n.lanes=536870912,C0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(nc(n,f.cachePool),Dg(n,f),ns(),n.memoizedState=null):(e!==null&&nc(n,null),Hf(),ns());return yn(e,n,c,a),n.child}function Yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function C0(e,n,a,r,c){var f=Of();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&nc(n,null),Hf(),Ng(n),e!==null&&Os(e,n,r,!0),n.childLanes=c,null}function xc(e,n){return n=Sc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function w0(e,n,a){return Hs(n,e.child,null,a),e=xc(n,n.pendingProps),e.flags|=2,li(n),n.memoizedState=null,e}function nM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=xc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Yo(null,e);if(Vf(n),(e=en)?(e=ev(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Wi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=hg(e),a.return=n,n.child=a,Tn=n,en=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return xc(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Vf(n),c)if(n.flags&256)n.flags&=-257,n=w0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Os(e,n,a,!1),c=(a&e.childLanes)!==0,_n||c){if(ts.current===null){if(r=$e,r!==null&&(_=yo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ds(e,_),$n(r,e,_),ch;Fc()}n=w0(e,n,a)}else e=f.treeContext,en=Ri(_.nextSibling),Tn=n,Te=!0,Wa=null,Ti=!1,e!==null&&mg(n,e),n=xc(n,r),n.flags|=134221824;return n}return e=xa(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Tr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uh(e,n,a,r,c){return Ps(n),a=qf(e,n,a,r,void 0,c),r=Yf(),e!==null&&!_n?(Wf(e,n,c),Ta(e,n,c)):(Te&&r&&Ql(n),n.flags|=1,yn(e,n,a,c),n.child)}function D0(e,n,a,r,c,f){return Ps(n),n.updateQueue=null,a=Lg(n,r,a,c),Ug(e),r=Yf(),e!==null&&!_n?(Wf(e,n,f),Ta(e,n,f)):(Te&&r&&Ql(n),n.flags|=1,yn(e,n,a,f),n.child)}function N0(e,n,a,r,c){if(Ps(n),n.stateNode===null){var f=mr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Dn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=oh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},If(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Dn(_):mr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(rh(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&oh.enqueueReplaceState(f,f.state,null),Go(n,r,f,c),Ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,z=Vs(a,R);f.props=z;var it=f.context,dt=a.contextType;_=mr,typeof dt=="object"&&dt!==null&&(_=Dn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==_)&&_0(n,f,r,_),Qa=!1;var tt=n.memoizedState;f.state=tt,Go(n,r,f,c),Ho(),it=n.memoizedState,R||tt!==it||Qa?(typeof yt=="function"&&(rh(n,a,yt,r),it=n.memoizedState),(z=Qa||g0(n,a,z,r,tt,it,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,zf(e,n),_=n.memoizedProps,dt=Vs(a,_),f.props=dt,yt=n.pendingProps,tt=f.context,it=a.contextType,z=mr,typeof it=="object"&&it!==null&&(z=Dn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==yt||tt!==z)&&_0(n,f,r,z),Qa=!1,tt=n.memoizedState,f.state=tt,Go(n,r,f,c),Ho();var ut=n.memoizedState;_!==yt||tt!==ut||Qa||e!==null&&e.dependencies!==null&&tc(e.dependencies)?(typeof R=="function"&&(rh(n,a,R,r),ut=n.memoizedState),(dt=Qa||g0(n,a,dt,r,tt,ut,z)||e!==null&&e.dependencies!==null&&tc(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=z,r=dt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Hs(n,e.child,null,c),n.child=Hs(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ta(e,n,c),e}function U0(e,n,a,r){return Us(),n.flags|=256,yn(e,n,a,r),n.child}var fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(e){return{baseLanes:e,cachePool:yg()}}function dh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function L0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?es(n):ns(),(e=en)?(e=ev(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Wi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=hg(e),a.return=n,n.child=a,Tn=n,en=null)):e=null,e===null)throw ja(n);return hd(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(ns(),c=n.mode,f=Sc({mode:"hidden",children:f},c),r=Ns(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=hh(a),r.childLanes=dh(e,_,a),n.memoizedState=fh,Yo(null,r)):(es(n),ph(n,f))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return iM(e,n,f,_,r,z,R,a)}return c?(ns(),c=r.fallback,f=n.mode,R=e.child,z=R.sibling,r=xa(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,z!==null?c=xa(z,c):(c=Ns(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Yo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=hh(a):(f=c.cachePool,f!==null?(R=mn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=yg(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=dh(e,_,a),n.memoizedState=fh,Yo(e.child,r)):(es(n),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function ph(e,n){return n=Sc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sc(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function yc(e,n,a){return Hs(n,e.child,null,a),e=ph(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function iM(e,n,a,r,c,f,_,R){if(a)return n.flags&256?(es(n),n.flags&=-257,yc(e,n,R)):n.memoizedState!==null?(ns(),n.child=e.child,n.flags|=128,null):(ns(),f=c.fallback,_=n.mode,c=Sc({mode:"visible",children:c.children},_),f=Ns(f,_,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Hs(n,e.child,null,R),c=n.child,c.memoizedState=hh(R),c.childLanes=dh(e,r,R),n.memoizedState=fh,Yo(null,c));if(es(n),hd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Oo({value:c,source:null,stack:null})),yc(e,n,R)}if(_n||Os(e,n,R,!1),r=(R&e.childLanes)!==0,_n||r){if(ts.current!==null)return yc(e,n,R);if(r=$e,r!==null&&(c=yo(r,R),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ds(e,c),$n(r,e,c),ch;return fd(f)||Fc(),yc(e,n,R)}return fd(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,en=Ri(f.nextSibling),Tn=n,Te=!0,Wa=null,Ti=!1,e!==null&&mg(n,e),n=ph(n,c.children),n.flags|=134221824,n)}function O0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$l(e.return,n,a)}function P0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&lc(a)===null&&(n=e),e=e.sibling}return n}function Mc(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function mh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function gh(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Un.current;if(n.flags&128)return Vo(n,_),null;var R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Vo(n,_),c==="backwards"&&e!==null?(mh(e),yn(e,n,r,a),mh(e)):yn(e,n,r,a),r=Te?Lo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,a,n);else if(e.tag===19)O0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=P0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,mh(n)),Mc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&lc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Mc(n,!0,a,null,f,r);break;case"together":Mc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=P0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Mc(n,!1,c,a,f,r)}return n.child}function I0(e,n,a){var r=n.pendingProps;return Za(n,n.type,r.value),yn(e,n,r.children,a),n.child}function Ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),rs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Os(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=xa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _h(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tc(e)))}function aM(e,n,a){switch(n.tag){case 3:G(n,n.stateNode.containerInfo),Za(n,mn,e.memoizedState.cache),Us();break;case 27:case 5:ie(n);break;case 4:G(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return es(n),n.flags|=128,null;r=Os(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?L0(e,n,a):(es(n),e=Ta(e,n,a),e!==null?e.sibling:null)}es(n);break;case 19:if(n.flags&128)return gh(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Os(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return gh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Vo(n,Un.current),r)break;return null;case 22:return n.lanes=0,R0(e,n,a,n.pendingProps);case 24:Za(n,mn,e.memoizedState.cache)}return Ta(e,n,a)}function z0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!_h(e,a)&&(n.flags&128)===0)return _n=!1,aM(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(n.flags&1048576)!==0&&pg(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Bs(n.elementType),n.type=e,typeof e=="function")bf(e)?(r=Vs(e,r),n.tag=1,n=N0(null,n,e,r,a)):(n.tag=0,n=uh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===V){n.tag=11,n=b0(null,n,e,r,a);break t}else if(c===ot){n.tag=14,n=T0(null,n,e,r,a);break t}else if(c===Z){n.tag=10,n.type=e,n=I0(null,n,a);break t}}throw n=At(e)||e,Error(s(306,n,""))}}return n;case 0:return uh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Vs(r,n.pendingProps),N0(e,n,r,c,a);case 3:t:{if(G(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,zf(e,n),Go(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Za(n,mn,r),r!==f.cache&&Nf(n,[mn],a,!0),Ho(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=U0(e,n,r,a);break t}else if(r!==c){c=Mi(Error(s(424)),n),Oo(c),n=U0(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,en=Ri(e.firstChild),Tn=n,Te=!0,Wa=null,Ti=!0,a=Rg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Us(),r===c){n=Ta(e,n,a);break t}yn(e,n,r,a)}n=n.child}return n;case 26:return Tr(e,n),e===null?(a=lv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=G_(n.type,n.pendingProps,Rt.current,n)):n.memoizedState=lv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Te&&(r=n.stateNode=av(n.type,n.pendingProps,Rt.current),Tn=n,Ti=!0,c=en,us(n.type)?(dd=c,en=Ri(r.firstChild)):en=c),yn(e,n,n.pendingProps.children,a),Tr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=en)&&(r=JM(r,n.type,n.pendingProps,Ti),r!==null?(n.stateNode=r,Tn=n,en=Ri(r.firstChild),Ti=!1,c=!0):c=!1),c||ja(n)),ie(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,ad(c,f)?r=null:_!==null&&ad(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=qf(e,n,Wy,null,null,a),kr._currentValue=c),Tr(e,n),yn(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=en)&&(a=$M(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Tn=n,en=null,e=!0):e=!1),e||ja(n)),null;case 13:return L0(e,n,a);case 4:return G(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Hs(n,null,r,a):yn(e,n,r,a),n.child;case 11:return b0(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Tr(e,n),yn(e,n,r,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return I0(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Ps(n),c=Dn(c),r=r(c),n.flags|=1,yn(e,n,r,a),n.child;case 14:return T0(e,n,n.type,n.pendingProps,a);case 15:return A0(e,n,n.type,n.pendingProps,a);case 19:return gh(e,n,a);case 31:return nM(e,n,a);case 22:return R0(e,n,a,n.pendingProps);case 24:return Ps(n),r=Dn(mn),e===null?(c=Of(),c===null&&(c=$e,f=Uf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},If(n),Za(n,mn,c)):((e.lanes&a)!==0&&(zf(e,n),Go(n,null,null,a),Ho()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Za(n,mn,r)):(r=f.cache,Za(n,mn,r),r!==c.cache&&Nf(n,[mn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&Ql(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Tr(e,n),yn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Aa(e){e.flags|=4}function vh(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?hv(n,r):hv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(v_())e.flags|=8192;else throw Fs=ac,Pf}else e.flags&=-16777217}function B0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(n))if(v_())e.flags|=8192;else throw Fs=ac,Pf}function Ec(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xo():536870912,e.lanes|=n,Dr|=n)}function Wo(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function sM(e,n,a){var r=n.pendingProps;switch(Rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(mn),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vr(n)?Aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wf())),nn(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Aa(n),f!==null?(nn(n),B0(n,f)):(nn(n),vh(n,c,null,r,a))):f?f!==e.memoizedState?(Aa(n),nn(n),B0(n,f)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Aa(n),nn(n),vh(n,c,e,r,a)),null;case 27:if(U(n),a=Rt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}e=Ge.current,vr(n)?gg(n):(e=av(c,r,a),n.stateNode=e,Aa(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(U(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}if(f=Ge.current,vr(n))gg(n);else{var _=al(Rt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[A]=n,f[k]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(On(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Aa(n)}}return nn(n),n.subtreeFlags&=-33554433,vh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Rt.current,vr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||z_(e.nodeValue,a)),e||ja(n,!0)}else e=al(e).createTextNode(r),e[A]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=vr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[A]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ec(n,n.updateQueue),nn(n),null);case 4:return le(),e===null&&$h(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return Ma(n.type),nn(n),null;case 19:if(kf(n),r=n.memoizedState,r===null)return nn(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Wo(r,!1);else{if(hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=lc(e),f!==null){for(n.flags|=128,Wo(r,!1),e=f.updateQueue,n.updateQueue=e,Ec(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)fg(a,e),a=a.sibling;return Vo(n,Un.current&1|2),Te&&Sa(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&qt()>Pc&&(n.flags|=128,c=!0,Wo(r,!1),n.lanes=4194304)}else{if(!c)if(e=lc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ec(n,e),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Te)return nn(n),null}else 2*qt()-r.renderingStartTime>Pc&&a!==536870912&&(n.flags|=128,c=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=qt(),e.sibling=null,f=Un.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Te?Vo(n,f):(a=f,se(Nn,n),se(Un,a),Bn===null&&(Bn=n)),Te&&Sa(n,r.treeForkCount),e}return nn(n),null;case 22:case 23:return li(n),Gf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Ec(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ae(zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(mn),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(s(156,n.tag))}function rM(e,n){switch(Rf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ma(mn),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return U(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(li(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return kf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return le(),null;case 10:return Ma(n.type),null;case 22:case 23:return li(n),Gf(),e!==null&&ae(zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ma(mn),null;case 25:return null;default:return null}}function F0(e,n){switch(Rf(n),n.tag){case 3:Ma(mn),le();break;case 26:case 27:case 5:U(n);break;case 4:le();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:kf(n);break;case 10:Ma(n.type);break;case 22:case 23:li(n),Gf(),e!==null&&ae(zs);break;case 24:Ma(mn)}}function jo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(R){We(n,n.return,R)}}function is(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var z=a,it=R;try{it()}catch(dt){We(c,z,dt)}}}r=r.next}while(r!==f)}}catch(dt){We(n,n.return,dt)}}function H0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{wg(n,a)}catch(r){We(e,e.return,r)}}}function G0(e,n,a){a.props=Vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){We(e,n,r)}}function Zi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=_a(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=j_(f)),r=c.ref;break;case 7:if(e.stateNode===null){var _=new di(e);g(e.child,!1,KM,_,void 0,void 0),e.stateNode=_}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){We(e,n,R)}}function Ln(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){We(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(e,n,c)}else a.current=null}function bc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)tv(e.stateNode,n[a])}function V0(e){for(var n=e.return;n!==null&&(Sh(n)&&tv(e.stateNode,n.stateNode),!xh(n));)n=n.return}function Zo(e){for(var n=e.return;n!==null&&(Sh(n)&&QM(e.stateNode,n.stateNode),!xh(n));)n=n.return}function xh(e){return e.tag===5||e.tag===3||e.tag===27}function Sh(e){return e&&e.tag===7&&e.stateNode!==null}function yh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){We(e,e.return,c)}}function Mh(e,n,a){try{var r=e.stateNode;UM(r,e.type,a,n),r[k]=n}catch(c){We(e,e.return,c)}}function k0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&us(e.type)||e.tag===4}function Eh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&us(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),bc(e,r),be=!0;else if(c!==4&&(c===27&&(bc(e,r),r=null,us(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(bh(e,n,a,r),e=e.sibling;e!==null;)bh(e,n,a,r),e=e.sibling}function Tc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),bc(e,r),be=!0;else if(c!==4&&(c===27&&(bc(e,r),r=null,us(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Tc(e,n,a,r),e=e.sibling;e!==null;)Tc(e,n,a,r),e=e.sibling}function X0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,r,a),n[A]=e,n[k]=a}catch(f){We(e,e.return,f)}}var Ac=!1,ci=null;function q0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ac=!0)}var Ki=null;function Y0(){var e=Ki;return Ki=null,e}var Kn=0;function Ar(e,n,a,r,c){return Kn=0,W0(e.child,n,a,r,c)}function W0(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(r!==null){var R=od(_);r.push(R),R.view&&(f=!0)}else f||od(_).view&&(f=!0);Ac=!0,Y_(_,Kn===0?n:n+"_"+Kn,a),Kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||W0(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function Qi(e,n){for(;e!==null;)e.tag===5?W_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Qi(e.child,n)),e=e.sibling}function Rc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Rc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=va(n.default,n.share),n!=="none"&&(Ar(e,a,n,null,!1)||Qi(e.child,!1))}e=e.sibling}}function Th(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=_a(r,a),f=va(r.default,a.paired?r.share:r.enter);f!=="none"?Ar(e,c,f,null,!1)?(Rc(e),a.paired||n||Or(e,r.onEnter)):Qi(e.child,!1):Rc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Th(e,n),e=e.sibling;else Rc(e)}function Ah(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=va(a.default,a.share);if(f!=="none"&&(Ar(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Or(e,a.onShare)):Qi(e.child,!1)),n.delete(r),n.size===0)break}}}Ah(e)}e=e.sibling}}}function Rh(e){if(e.tag===30){var n=e.memoizedProps,a=_a(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=va(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Ar(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Or(e,n.onShare)):Or(e,n.onExit):Qi(e.child,!1)),ci!==null&&Ah(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Rh(e),e=e.sibling;else ci!==null&&Ah(e)}function j0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=_a(n,e.stateNode);n=va(n.default,n.update),e.flags&=-5,n!=="none"&&Ar(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&j0(e);e=e.sibling}}function Ch(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Qi(e.child,!1))}Ch(e)}e=e.sibling}}function Cc(e){if(e.tag===30)e.stateNode.paired=null,Qi(e.child,!1),Ch(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Cc(e),e=e.sibling;else Ch(e)}function Z0(e){for(e=e.child;e!==null;)e.tag===30?Qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Z0(e),e=e.sibling}function wh(e,n,a,r,c,f,_){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&Kn<f.length){var it=f[Kn],dt=od(z);(it.view||dt.view)&&(R=!0);var yt;if(yt=(e.flags&4)===0)if(dt.clip)yt=!0;else{yt=it.rect;var tt=dt.rect;yt=yt.y!==tt.y||yt.x!==tt.x||yt.height!==tt.height||yt.width!==tt.width}yt&&(e.flags|=4),dt.abs?dt=!it.abs:(it=it.rect,dt=dt.rect,dt=it.height!==dt.height||it.width!==dt.width),dt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Y_(z,Kn===0?a:a+"_"+Kn,c),R&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(z,Kn===0?r:r+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:wh(e,n.child,a,r,c,f,_)&&(R=!0));n=n.sibling}return R}function K0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=_a(a,r),f=va(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;Kn=0,c=wh(r,R,c,c,f,_,!1),(e.flags&4)!==0&&c&&Or(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&K0(e);e=e.sibling}}var An=!1,qe=!1,Ji=!1,Dh=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Rn=null,$i=!1,Ko=!1,wc=!1,Nh=!1;function oM(e,n,a){if(e=e.containerInfo,nd=Xr,e=eg(e),_f(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var R=0,z=-1,it=-1,dt=0,yt=0,tt=e,ut=null;e:for(;;){for(var Pt;tt!==r||f!==0&&tt.nodeType!==3||(z=R+f),tt!==_||c!==0&&tt.nodeType!==3||(it=R+c),tt.nodeType===3&&(R+=tt.nodeValue.length),(Pt=tt.firstChild)!==null;)ut=tt,tt=Pt;for(;;){if(tt===e)break e;if(ut===r&&++dt===f&&(z=R),ut===_&&++yt===c&&(it=R),(Pt=tt.nextSibling)!==null)break;tt=ut,ut=tt.parentNode}tt=Pt}r=z===-1||it===-1?null:{start:z,end:it}}else r=null}r=r||{start:0,end:0}}else r=null;for(id={focusedElem:e,selectionRange:r},Xr=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Rh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&q0(e),Dc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Rh(r),Dc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&q0(e),Dc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Rn=r):(a&&j0(e),Dc(a))}}ci=null}function Dc(e){for(;Rn!==null;){var n=Rn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Vs(n.type,c);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){We(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ud(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ud(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=_a(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=va(c.default,c.update),c!=="none"&&Ar(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Rn=r;break}Rn=n.return}}function J0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&jo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){We(a,a.return,_)}else{var c=Vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}r&64&&H0(a),r&512&&Zi(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wg(e,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&r&4&&X0(a);case 26:case 5:ta(e,a),n===null&&r&4&&yh(a),r&512&&Zi(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&n_(e,a);break;case 13:ta(e,a),r&4&&i_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xM.bind(null,a),tE(e,a))));break;case 22:if(r=a.memoizedState!==null||An,!r){var f=n!==null&&n.memoizedState!==null||qe;n=An,c=qe,An=r,(qe=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Oi(e,a,r)):ta(e,a),An=n,qe=c}break;case 30:ta(e,a),r&512&&Zi(a,a.return);break;case 7:r&512&&Zi(a,a.return);default:ta(e,a)}}function Uh(e,n){for(e=e.child;e!==null;)$0(e,n),e=e.sibling}function $0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){We(e,e.return,z)}Lh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,be=!0}catch(z){We(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?q_(R,!0):q_(e.stateNode,!1)}catch(z){We(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Uh(e,n);break;default:Uh(e,n)}}function Lh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:$0(a,r);break t;case 22:a.memoizedState===null&&Lh(a,r);break t;default:Lh(a,r)}}e=e.sibling}}function t_(e){var n=e.alternate;n!==null&&(e.alternate=null,t_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$t(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,Qn=!1;function Ui(e,n,a){for(a=a.child;a!==null;)e_(e,n,a),a=a.sibling}function e_(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 26:qe||Ln(a,n),Ui(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Ln(a,n),Zo(a);var r=sn,c=Qn;us(a.type)&&(sn=a.stateNode,Qn=!1),Ui(e,n,a),sv(a.stateNode,a.type,a.memoizedProps),sn=r,Qn=c;break;case 5:qe||Ln(a,n),Zo(a);case 6:if(a.tag===6&&Zo(a),r=sn,c=Qn,sn=null,Ui(e,n,a),sn=r,Qn=c,sn!==null)if(Qn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),be=!0}catch(f){We(a,n,f)}else try{sn.removeChild(a.stateNode),be=!0}catch(f){We(a,n,f)}break;case 18:sn!==null&&(Qn?(e=sn,X_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),qr(e)):X_(sn,a.stateNode));break;case 4:r=sn,c=Qn,sn=a.stateNode.containerInfo,Qn=!0,Ui(e,n,a),sn=r,Qn=c;break;case 0:case 11:case 14:case 15:is(2,a,n),qe||is(4,a,n),Ui(e,n,a);break;case 1:qe||(Ln(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&G0(a,n,r)),Ui(e,n,a);break;case 21:Ui(e,n,a);break;case 22:qe=(r=qe)||a.memoizedState!==null,Ui(e,n,a),qe=r;break;case 30:Ln(a,n),Ui(e,n,a);break;case 7:qe||Ln(a,n),Ui(e,n,a);break;default:Ui(e,n,a)}}function n_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qr(e)}catch(a){We(n,n.return,a)}}}function i_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qr(e)}catch(a){We(n,n.return,a)}}function lM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Q0),n;default:throw Error(s(435,e.tag))}}function Nc(e,n){var a=lM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=SM.bind(null,e,r);r.then(c,c)}})}function qn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],_=e,R=n,z=R;t:for(;z!==null;){switch(z.tag){case 27:if(us(z.type)){sn=z.stateNode,Qn=!1;break t}break;case 5:sn=z.stateNode,Qn=!1;break t;case 3:case 4:sn=z.stateNode.containerInfo,Qn=!0;break t}z=z.return}if(sn===null)throw Error(s(160));e_(_,R,f),sn=null,Qn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)a_(n,e,a),n=n.sibling}var Li=null;function a_(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}qn(n,e,a),Yn(e),c&4&&(is(3,e,e.return),jo(3,e),is(5,e,e.return));break;case 1:qn(n,e,a),Yn(e),c&512&&(qe||r===null||Ln(r,r.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Li,qn(n,e,a),Yn(e),c&512&&(qe||r===null||Ln(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=G_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ot]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),On(r,n,a),r[A]=e,Ee(r),n=r;break t;case"link":if(f=fv("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=c.createElement(n),On(r,n,a),c.head.appendChild(r);break;case"meta":if(f=fv("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=c.createElement(n),On(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,Ee(r),n=r}e.stateNode=n}else An||_d(f,e.type,e.stateNode);else e.stateNode=uv(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||qe||n.parentNode.removeChild(n)):c.count--,a===null?An||_d(f,e.type,e.stateNode):uv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Mh(e,e.memoizedProps,r.memoizedProps);break;case 27:qn(n,e,a),Yn(e),c&512&&(qe||r===null||Ln(r,r.return)),r!==null&&c&4&&Mh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=Ji,Ji=!1,qn(n,e,a),Ji=f,Yn(e),c&512&&(qe||r===null||Ln(r,r.return)),e.flags&32){n=e.stateNode;try{lr(n,""),be=!0}catch(dt){We(e,e.return,dt)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Mh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Dh=!0);break;case 6:if(qn(n,e,a),Yn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,be=!0}catch(dt){We(e,e.return,dt)}}break;case 3:if(be=!1,Yc=null,f=Li,Li=sl(n.containerInfo),qn(n,e,a),Li=f,Yn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(dt){We(e,e.return,dt)}Dh&&(Dh=!1,s_(e)),be=!1;break;case 4:c=Ji,Ji=An,r=Ve(),f=Li,Li=sl(e.stateNode.containerInfo),qn(n,e,a),Yn(e),Li=f,be&&Ko&&(wc=!0),be=r,Ji=c;break;case 12:qn(n,e,a),Yn(e);break;case 31:qn(n,e,a),Yn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nc(e,n)));break;case 13:qn(n,e,a),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Oc=qt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nc(e,n)));break;case 22:f=e.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var R=An,z=qe,it=Ji;An=R||f,Ji=it||f,qe=z||_,qn(n,e,a),qe=z,Ji=it,An=R,Yn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||An||qe||(n=_||qe,a=An,r=qe,An=f||An,qe=n,as(e,2),An=a,qe=r),!f&&Ji||Uh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Nc(e,a))));break;case 19:qn(n,e,a),Yn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Nc(e,n)));break;case 30:c&512&&(qe||r===null||Ln(r,r.return)),c=Ve(),f=Ko,_=(a&335544064)===a,R=e.memoizedProps,Ko=_&&va(R.default,R.update)!=="none",qn(n,e,a),Yn(e),_&&r!==null&&be&&(e.flags|=4),Ko=f,be=c;break;case 21:break;case 7:c&512&&(qe||r===null||Ln(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:qn(n,e,a),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(k0(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Sh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(xh(c))break;c=c.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,z=Eh(e);Tc(e,z,R,_);break;case 5:var it=a.stateNode;a.flags&32&&(lr(it,""),a.flags&=-33);var dt=Eh(e);Tc(e,dt,it,_);break;case 3:case 4:var yt=a.stateNode.containerInfo,tt=Eh(e);bh(e,tt,yt,_);break;default:throw Error(s(161))}}catch(ut){We(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function s_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;s_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),e=e.sibling}}function Rr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)r_(n,e),n=n.sibling;else K0(n)}function r_(e,n){var a=e.alternate;if(a===null)Th(e,!1);else switch(e.tag){case 3:if(Nh=$i=!1,Y0(),Rr(n,e),!$i&&!wc){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];W_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Nh=!0}Ki=null;break;case 5:Rr(n,e);break;case 4:r=$i,$i=!1,Rr(n,e),$i&&(wc=!0),$i=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Th(e,!1):Rr(n,e));break;case 30:r=$i,c=Y0(),$i=!1,Rr(n,e),$i&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=_a(f,_),_=_a(a.memoizedProps,_);var R=va(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,Kn=0,n=wh(e,a,n,_,R,f,!0),Kn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Or(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),$i=(e.flags&32)!==0?!0:r;break;default:Rr(n,e)}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(e,n.alternate,n),n=n.sibling}function as(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:is(4,a,a.return),as(a,r);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&G0(a,a.return,c),as(a,r);break;case 27:(r&2)!==0&&sv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||Zo(a),as(a,r);break;case 6:Zo(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||qe||c.parentNode.removeChild(c),as(a,r);break;case 22:a.memoizedState===null&&as(a,r);break;case 30:Ln(a,a.return),as(a,r);break;case 7:Ln(a,a.return);default:as(a,r)}e=e.sibling}}function Oi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Oi(c,f,a),jo(4,f);break;case 1:if(Oi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(dt){We(r,r.return,dt)}if(r=f,c=r.updateQueue,c!==null){var z=r.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)Cg(it[c],z)}catch(dt){We(r,r.return,dt)}}R&&_&64&&H0(f),Zi(f,f.return);break;case 27:(a&2)!==0&&X0(f);case 5:f.tag!==5&&f.tag!==27||V0(f),Oi(c,f,a),R&&r===null&&_&4&&yh(f),Zi(f,f.return);break;case 6:V0(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||An||_d(sl(z.ownerDocument),f.type,z),Oi(c,f,a),R&&r===null&&_&4&&yh(f),Zi(f,f.return);break;case 12:Oi(c,f,a);break;case 31:Oi(c,f,a),R&&_&4&&n_(c,f);break;case 13:Oi(c,f,a),R&&_&4&&i_(c,f);break;case 22:f.memoizedState===null&&Oi(c,f,a),Zi(f,f.return);break;case 30:Oi(c,f,a),Zi(f,f.return);break;case 7:Zi(f,f.return);default:Oi(c,f,a)}n=n.sibling}}function Oh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Po(a))}function Ph(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Po(e))}function Ai(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)o_(e,n,a,r),n=n.sibling;else c&&Z0(n)}function o_(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Cc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,r),f&2048&&jo(9,n);break;case 1:Ai(e,n,a,r);break;case 3:Ai(e,n,a,r),c&&Nh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Po(f)));break;case 12:if(f&2048){Ai(e,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,R=_.id,z=_.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(it){We(n,n.return,it)}}else Ai(e,n,a,r);break;case 31:Ai(e,n,a,r);break;case 13:Ai(e,n,a,r);break;case 23:break;case 22:_=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Cc(R),_._visibility&2?Ai(e,n,a,r):Qo(e,n)):(c&&R!==null&&R.memoizedState!==null&&Cc(n),_._visibility&2?Ai(e,n,a,r):(_._visibility|=2,Cr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Oh(R,n);break;case 24:Ai(e,n,a,r),f&2048&&Ph(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(Qi(f.child,!0),Qi(n.child,!0))),Ai(e,n,a,r);break;default:Ai(e,n,a,r)}}function Cr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,z=r,it=_.flags;switch(_.tag){case 0:case 11:case 15:Cr(f,_,R,z,c),jo(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?Cr(f,_,R,z,c):Qo(f,_):(dt._visibility|=2,Cr(f,_,R,z,c)),c&&it&2048&&Oh(_.alternate,_);break;case 24:Cr(f,_,R,z,c),c&&it&2048&&Ph(_.alternate,_);break;default:Cr(f,_,R,z,c)}n=n.sibling}}function Qo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:Qo(a,r),c&2048&&Oh(r.alternate,r);break;case 24:Qo(a,r),c&2048&&Ph(r.alternate,r);break;default:Qo(a,r)}n=n.sibling}}var ks=8192;function Xs(e,n,a){if(e.subtreeFlags&ks)for(e=e.child;e!==null;)l_(e,n,a),e=e.sibling}function l_(e,n,a){switch(e.tag){case 26:Xs(e,n,a),e.flags&ks&&(e.memoizedState!==null?pE(a,Li,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&mv(a,e)));break;case 5:Xs(e,n,a),e.flags&ks&&(e=e.stateNode,(n&335544128)===n&&mv(a,e));break;case 3:case 4:var r=Li;Li=sl(e.stateNode.containerInfo),Xs(e,n,a),Li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ks,ks=16777216,Xs(e,n,a),ks=r):Xs(e,n,a));break;case 30:if((e.flags&ks)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Xs(e,n,a);break;default:Xs(e,n,a)}}function c_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Jo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,f_(r,e)}c_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u_(e),e=e.sibling}function u_(e){switch(e.tag){case 0:case 11:case 15:Jo(e),e.flags&2048&&is(9,e,e.return);break;case 3:Jo(e);break;case 12:Jo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Uc(e)):Jo(e);break;default:Jo(e)}}function Uc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,f_(r,e)}c_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:is(8,n,n.return),Uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uc(n));break;default:Uc(n)}e=e.sibling}}function f_(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:is(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Po(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Rn=r;else t:for(a=e;Rn!==null;){r=Rn;var c=r.sibling,f=r.return;if(t_(r),r===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var cM={getCacheForType:function(e){var n=Dn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(mn).controller.signal}},uM=typeof WeakMap=="function"?WeakMap:Map,ke=0,$e=null,Ce=null,Ue=0,Ye=0,ui=null,ss=!1,wr=!1,Ih=!1,Ra=0,hn=0,rs=0,qs=0,Lc=0,fi=0,Dr=0,$o=null,Jn=null,zh=!1,Oc=0,h_=0,Pc=1/0,Ic=null,os=null,on=0,Pi=null,Ys=null,ea=0,Bh=0,Fh=null,d_=null,Nr=null,Ur=null,Lr=null,tl=0,zc=null;function hi(){return(ke&2)!==0&&Ue!==0?Ue&-Ue:gt.T!==null?Zh():Pl()}function p_(){if(fi===0)if((Ue&536870912)===0||Te){var e=Ts;Ts<<=1,(Ts&3932160)===0&&(Ts=262144),fi=e}else fi=536870912;return e=Nn.current,e!==null&&(e.flags|=32),fi}function Or(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=j_(_a(e.memoizedProps,a))),Ur===null&&(Ur=[]),Ur.push(n.bind(null,r))}}function $n(e,n,a){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),ls(e,Ue,fi,!1)),Xi(e,a),((ke&2)===0||e!==$e)&&(e===$e&&((ke&2)===0&&(qs|=a),hn===4&&ls(e,Ue,fi,!1)),na(e))}function m_(e,n,a){if((ke&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ka(e,n),c=r?dM(e,n):Gh(e,n,!0),f=r;do{if(c===0){wr&&!r&&ls(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!fM(a)){c=Gh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;c=$o;var z=R.current.memoizedState.isDehydrated;if(z&&(Pr(R,_).flags|=256),_=Gh(R,_,!1),_!==2&&_!==6){if(Ih&&!z){R.errorRecoveryDisabledLanes|=f,qs|=f,c=4;break t}f=Jn,Jn=c,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Pr(e,0),ls(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ls(r,n,fi,!ss);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Oc+300-qt(),10<c)){if(ls(r,n,fi,!ss),As(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=rd(g_.bind(null,r,a,Jn,Ic,zh,n,fi,qs,Dr,ss,f,"Throttled",-0,0),c);break t}g_(r,a,Jn,Ic,zh,n,fi,qs,Dr,ss,f,null,-0,0)}}break}while(!0);na(e)}function g_(e,n,a,r,c,f,_,R,z,it,dt,yt,tt,ut){e.timeoutHandle=-1;var Pt=n.subtreeFlags,te=(f&335544064)===f;if(yt=null,(te||Pt&8192||(Pt&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ci=null,l_(n,f,yt),te&&(Pt=yt,te=e.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=ll.bind(Pt),te.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Oc-qt():(f&4194048)===f?h_-qt():0,Pt=mE(yt,Pt),Pt!==null)){ea=f,e.cancelPendingCommit=Pt(b_.bind(null,e,n,f,a,r,c,_,R,z,it,dt,yt,null,tt,ut)),ls(e,f,_,!it);return}b_(e,n,f,a,r,c,_,R,z,it,dt,yt)}function fM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!oi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ls(e,n,a,r){n=ki(e,n),n&=~Lc,n&=~qs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-me(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Rs(e,a,n)}function Bc(){return(ke&6)===0?(el(0),!1):!0}function Hh(){if(Ce!==null){if(Ye===0)var e=Ce.return;else e=Ce,ya=Ls=null,jf(e),yr=null,Bo=0,e=Ce;for(;e!==null;)F0(e.alternate,e),e=e.return;Ce=null}}function Pr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,PM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Hh(),$e=e,Ce=a=xa(e.current,null),Ue=n,Ye=0,ui=null,ss=!1,wr=ka(e,n),Ih=!1,Dr=fi=Lc=qs=rs=hn=0,Jn=$o=null,zh=!1,Ra=ki(e,n),Yl(),a}function __(e,n){xe=null,gt.H=_c,n===Sr||n===ic?(n=bg(),Ye=3):n===Pf?(n=bg(),Ye=4):Ye=n===ch?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Ce===null&&(hn=1,vc(e,Mi(n,e.current)))}function v_(){var e=Nn.current;return e===null?!0:(Ue&4194048)===Ue?Bn===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Bn:!1}function x_(){var e=gt.H;return gt.H=_c,e===null?_c:e}function S_(){var e=gt.A;return gt.A=cM,e}function Fc(){hn=4,ss||(Ue&4194048)!==Ue&&Nn.current!==null||(wr=!0),(rs&134217727)===0&&(qs&134217727)===0||$e===null||ls($e,Ue,fi,!1)}function Gh(e,n,a){var r=ke;ke|=2;var c=x_(),f=S_();($e!==e||Ue!==n)&&(Ic=null,Pr(e,n)),n=!1;var _=hn;t:do try{if(Ye!==0&&Ce!==null){var R=Ce,z=ui;switch(Ye){case 8:Hh(),_=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var it=Ye;if(Ye=0,ui=null,Ir(e,R,z,it),a&&wr){_=0;break t}break;default:it=Ye,Ye=0,ui=null,Ir(e,R,z,it)}}hM(),_=hn;break}catch(dt){__(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ya=Ls=null,ke=r,gt.H=c,gt.A=f,Ce===null&&($e=null,Ue=0,Yl()),_}function hM(){for(;Ce!==null;)y_(Ce)}function dM(e,n){var a=ke;ke|=2;var r=x_(),c=S_();$e!==e||Ue!==n?(Ic=null,Pc=qt()+500,Pr(e,n)):wr=ka(e,n);t:do try{if(Ye!==0&&Ce!==null){n=Ce;var f=ui;e:switch(Ye){case 1:Ye=0,ui=null,Ir(e,n,f,1);break;case 2:case 9:if(Mg(f)){Ye=0,ui=null,M_(n);break}n=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),na(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:Mg(f)?(Ye=0,ui=null,M_(n)):(Ye=0,ui=null,Ir(e,n,f,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var R=Ce;if(_?dv(_):R.stateNode.complete){Ye=0,ui=null;var z=R.sibling;if(z!==null)Ce=z;else{var it=R.return;it!==null?(Ce=it,Hc(it)):Ce=null}break e}}Ye=0,ui=null,Ir(e,n,f,5);break;case 6:Ye=0,ui=null,Ir(e,n,f,6);break;case 8:Hh(),hn=6;break t;default:throw Error(s(462))}}pM();break}catch(dt){__(e,dt)}while(!0);return ya=Ls=null,gt.H=r,gt.A=c,ke=a,Ce!==null?0:($e=null,Ue=0,Yl(),hn)}function pM(){for(;Ce!==null&&!Bt();)y_(Ce)}function y_(e){var n=z0(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,n===null?Hc(e):Ce=n}function M_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=D0(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=D0(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:jf(n);var r=n;r===Tn&&(Te?(Jl(r),r.tag===5&&r.stateNode!=null&&(en=r.stateNode)):(Jl(r),Te=!0));default:F0(a,n),n=Ce=fg(n,Ra),n=z0(a,n,Ra)}e.memoizedProps=e.pendingProps,n===null?Hc(e):Ce=n}function Ir(e,n,a,r){ya=Ls=null,jf(n),yr=null,Bo=0;var c=n.return;try{if(eM(e,c,n,a,Ue)){hn=1,vc(e,Mi(a,e.current)),Ce=null;return}}catch(f){if(c!==null)throw Ce=c,f;hn=1,vc(e,Mi(a,e.current)),Ce=null;return}n.flags&32768?(Te||r===1?e=!0:wr||(Ue&536870912)!==0?e=!1:(ss=e=!0,(r===2||r===9||r===3||r===6)&&(r=Nn.current,r!==null&&r.tag===13&&(r.flags|=16384))),E_(n,e)):Hc(n)}function Hc(e){var n=e;do{if((n.flags&32768)!==0){E_(n,ss);return}e=n.return;var a=sM(n.alternate,n,Ra);if(a!==null){Ce=a;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);hn===0&&(hn=5)}function E_(e,n){do{var a=rM(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);hn=6,Ce=null}function b_(e,n,a,r,c,f,_,R,z,it,dt,yt){e.cancelPendingCommit=null;do Gc();while(on!==0);if((ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===$e&&(Ce=$e=null,Ue=0),Ys=n,Pi=e,ea=a,Fh=c,d_=r,mM(e,n,a,_,R,z,yt)}}function mM(e,n,a,r,c,f,_){var R=n.lanes|n.childLanes;if(Bh=R,R|=Mf,Ol(e,a,R,r,c,f),Ur=null,(a&335544064)===a?(Lr=ky(e),r=10262):(Lr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yM(Nt,function(){return qh(),null})):(e.callbackNode=null,e.callbackPriority=0),Ac=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=gt.T,gt.T=null,c=wt.p,wt.p=2,f=ke,ke|=4;try{oM(e,n,a)}finally{ke=f,wt.p=c,gt.T=r}}on=1,Ac?Nr=GM(_,e.containerInfo,Lr,Vh,kh,_M,Xh,qh,gM):(Vh(),kh(),Xh())}function gM(e){if(on!==0){var n=Pi.onRecoverableError;n(e,{componentStack:null})}}function _M(){on===3&&(on=0,r_(Ys,Pi),on=4)}function Vh(){if(on===1){on=0;var e=Pi,n=Ys,a=ea,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=gt.T,gt.T=null;var c=wt.p;wt.p=2;var f=ke;ke|=4;try{Ko=wc=!1,a_(n,e,a),a=id;var _=eg(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(_!==R&&R&&R.ownerDocument&&tg(R.ownerDocument.documentElement,R)){if(z!==null&&_f(R)){var it=z.start,dt=z.end;if(dt===void 0&&(dt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(dt,R.value.length);else{var yt=R.ownerDocument||document,tt=yt&&yt.defaultView||window;if(tt.getSelection){var ut=tt.getSelection(),Pt=R.textContent.length,te=Math.min(z.start,Pt),Se=z.end===void 0?te:Math.min(z.end,Pt);!ut.extend&&te>Se&&(_=Se,Se=te,te=_);var nt=$m(R,te),q=$m(R,Se);if(nt&&q&&(ut.rangeCount!==1||ut.anchorNode!==nt.node||ut.anchorOffset!==nt.offset||ut.focusNode!==q.node||ut.focusOffset!==q.offset)){var rt=yt.createRange();rt.setStart(nt.node,nt.offset),ut.removeAllRanges(),te>Se?(ut.addRange(rt),ut.extend(q.node,q.offset)):(rt.setEnd(q.node,q.offset),ut.addRange(rt))}}}}for(yt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var xt=yt[R];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Xr=!!nd,id=nd=null}finally{ke=f,wt.p=c,gt.T=r}}e.current=n,on=2}}function kh(){if(on===2){on=0;var e=Pi,n=Ys,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=gt.T,gt.T=null;var r=wt.p;wt.p=2;var c=ke;ke|=4;try{J0(e,n.alternate,n)}finally{ke=c,wt.p=r,gt.T=a}}on=3}}function Xh(){if(on===4||on===3){on=0;var e=Nr;Nr=null,zt();var n=Pi,a=Ys,r=ea,c=d_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Ys=Pi=null,T_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(os=null),Eo(r),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ee,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=gt.T,f=wt.p,wt.p=2,gt.T=null;try{for(var _=n.onRecoverableError,R=0;R<c.length;R++){var z=c[R];_(z.value,{componentStack:z.stack})}}finally{gt.T=a,wt.p=f}}if(c=Ur,_=Lr,Lr=null,c!==null&&(Ur=null,_===null&&(_=[]),e!==null))for(z=0;z<c.length;z++)a=(0,c[z])(_),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&Gc(),na(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===zc?tl++:(tl=0,zc=n):(tl=0,zc=null),el(0)}}function T_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Po(n)))}function Gc(){return Nr!==null&&(Nr.skipTransition(),Nr=null),Vh(),kh(),Xh(),qh()}function qh(){if(on!==5)return!1;var e=Pi,n=Bh;Bh=0;var a=Eo(ea),r=gt.T,c=wt.p;try{wt.p=32>a?32:a,gt.T=null,a=Fh,Fh=null;var f=Pi,_=ea;if(on=0,Ys=Pi=null,ea=0,(ke&6)!==0)throw Error(s(331));var R=ke;if(ke|=4,u_(f.current),o_(f,f.current,_,a),ke=R,el(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ee,f)}catch{}return!0}finally{wt.p=c,gt.T=r,T_(e,n)}}function A_(e,n,a){n=Mi(a,n),n=lh(e.stateNode,n,2),e=$a(e,n,2),e!==null&&(Xi(e,2),na(e))}function We(e,n,a){if(e.tag===3)A_(e,e,a);else for(;n!==null;){if(n.tag===3){A_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(os===null||!os.has(r))){e=Mi(a,e),a=M0(2),r=$a(n,a,2),r!==null&&(E0(a,r,n,e),Xi(r,2),na(r));break}}n=n.return}}function Yh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new uM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ih=!0,c.add(a),e=vM.bind(null,e,n,a),n.then(e,e))}function vM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Ue&a)===a&&((hn===4||hn===3&&(Ue&62914560)===Ue&&300>qt()-Oc)&&(ke&2)===0?Pr(e,0):Lc|=a,Dr===Ue&&(Dr=0)),na(e)}function R_(e,n){n===0&&(n=xo()),e=Ds(e,n),e!==null&&(Xi(e,n),na(e))}function xM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),R_(e,a)}function SM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),R_(e,a)}function yM(e,n){return Ut(e,n)}var zr=null,Br=null,Wh=!1,Vc=!1,jh=!1,cs=0;function na(e){e!==Br&&e.next===null&&(Br===null?zr=Br=e:Br=Br.next=e),Vc=!0,Wh||(Wh=!0,EM())}function el(e,n){if(!jh&&Vc){jh=!0;do for(var a=!1,r=zr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-me(42|e)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,N_(r,f))}else f=Ue,f=As(r,r===$e?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ka(r,f)||(a=!0,N_(r,f));r=r.next}while(a);jh=!1}}function MM(){C_()}function C_(){Vc=Wh=!1;var e=0;cs!==0&&OM()&&(e=cs);for(var n=qt(),a=null,r=zr;r!==null;){var c=r.next,f=w_(r,n);f===0?(r.next=null,a===null?zr=c:a.next=c,c===null&&(Br=a)):(a=r,(e!==0||(f&3)!==0)&&(Vc=!0)),r=c}on!==0&&on!==5||el(e),cs!==0&&(cs=0)}function w_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-me(f),R=1<<_,z=c[_];z===-1?((R&a)===0||(R&r)!==0)&&(c[_]=vo(R,n)):z<=n&&(e.expiredLanes|=R),f&=~R}if(n=$e,a=Ue,a=As(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ne(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ka(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ne(r),Eo(a)){case 2:case 8:a=K;break;case 32:a=Nt;break;case 268435456:a=Lt;break;default:a=Nt}return r=D_.bind(null,e),a=Ut(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ne(r),e.callbackPriority=2,e.callbackNode=null,2}function D_(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gc()&&e.callbackNode!==a)return null;var r=Ue;return r=As(e,e===$e?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(m_(e,r,n),w_(e,qt()),e.callbackNode!=null&&e.callbackNode===a?D_.bind(null,e):null)}function N_(e,n){if(Gc())return null;m_(e,n,!0)}function EM(){IM(function(){(ke&6)!==0?Ut(de,MM):C_()})}function Zh(){if(cs===0){var e=Is;e===0&&(e=sr,sr<<=1,(sr&261888)===0&&(sr=256)),cs=e}return cs}function U_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bl(e)}function bM(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=U_((c[k]||null).action),_=r.submitter;_&&(n=(n=_[k]||null)?U_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new Vl("action","action",null,r,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cs!==0){var z=new FormData(c,_);ih(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(R.preventDefault(),z=new FormData(c,_),ih(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Kh=0;Kh<yf.length;Kh++){var Qh=yf[Kh],TM=Qh.toLowerCase(),AM=Qh[0].toUpperCase()+Qh.slice(1);Ni(TM,"on"+AM)}Ni(ag,"onAnimationEnd"),Ni(sg,"onAnimationIteration"),Ni(rg,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Py,"onTransitionRun"),Ni(Iy,"onTransitionStart"),Ni(zy,"onTransitionCancel"),Ni(og,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function L_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],z=R.instance,it=R.currentTarget;if(R=R.listener,z!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ql(dt)}c.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(R=r[_],z=R.instance,it=R.currentTarget,R=R.listener,z!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ql(dt)}c.currentTarget=null,f=z}}}}function we(e,n){var a=n[lt];a===void 0&&(a=n[lt]=new Set);var r=e+"__bubble";a.has(r)||(O_(n,e,2,!1),a.add(r))}function Jh(e,n,a){var r=0;n&&(r|=4),O_(a,e,r,n)}var kc="_reactListening"+Math.random().toString(36).slice(2);function $h(e){if(!e[kc]){e[kc]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(RM.has(a)||Jh(a,!1,e),Jh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kc]||(n[kc]=!0,Jh("selectionchange",!1,n))}}function O_(e,n,a,r){switch(Ev(n)){case 2:var c=xE;break;case 8:c=SE;break;default:c=xd}a=c.bind(null,n,a,e),c=void 0,!of||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function td(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=fe(R),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}R=R.parentNode}}r=r.return}Om(function(){var it=f,dt=sf(a),yt=[];t:{var tt=lg.get(e);if(tt!==void 0){var ut=Vl,Pt=e;switch(e){case"keypress":if(Hl(a)===0)break t;case"keydown":case"keyup":ut=fy;break;case"focusin":Pt="focus",ut=ff;break;case"focusout":Pt="blur",ut=ff;break;case"beforeblur":case"afterblur":ut=ff;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=gy;break;case ag:case sg:case rg:ut=ny;break;case og:ut=vy;break;case"scroll":case"scrollend":ut=QS;break;case"wheel":ut=Sy;break;case"copy":case"cut":case"paste":ut=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Fm;break;case"submit":ut=py;break;case"toggle":case"beforetoggle":ut=My}var te=(n&4)!==0,Se=!te&&(e==="scroll"||e==="scrollend"),nt=te?tt!==null?tt+"Capture":null:tt;te=[];for(var q=it,rt;q!==null;){var xt=q;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||nt===null||(xt=bo(q,nt),xt!=null&&te.push(il(q,xt,rt))),Se)break;q=q.return}0<te.length&&(tt=new ut(tt,Pt,null,a,dt),yt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",ut&&a!==af&&(Pt=a.relatedTarget||a.fromElement)&&(fe(Pt)||Pt[pt]))break t;(tt||ut)&&(Pt=dt.window===dt?dt:(ut=dt.ownerDocument)?ut.defaultView||ut.parentWindow:window,tt?(ut=a.relatedTarget||a.toElement,tt=it,ut=ut?fe(ut):null,ut!==null&&(Se=u(ut),te=ut.tag,ut!==Se||te!==5&&te!==27&&te!==6)&&(ut=null)):(tt=null,ut=it),tt!==ut&&(te=zm,xt="onMouseLeave",nt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(te=Fm,xt="onPointerLeave",nt="onPointerEnter",q="pointer"),Se=tt==null?Pt:Wt(tt),rt=ut==null?Pt:Wt(ut),Pt=new te(xt,q+"leave",tt,a,dt),Pt.target=Se,Pt.relatedTarget=rt,xt=null,fe(dt)===it&&(te=new te(nt,q+"enter",ut,a,dt),te.target=rt,te.relatedTarget=Se,xt=te),Se=xt,te=tt&&ut?w(tt,ut,CM):null,tt!==null&&P_(yt,Pt,tt,te,!1),ut!==null&&Se!==null&&P_(yt,Se,ut,te,!0)))}t:{if(tt=it?Wt(it):window,ut=tt.nodeName&&tt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&tt.type==="file")var jt=Wm;else if(qm(tt))if(jm)jt=Uy;else{jt=Dy;var Le=wy}else ut=tt.nodeName,!ut||ut.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?it&&nf(it.elementType)&&(jt=Wm):jt=Ny;if(jt&&(jt=jt(e,it))){Ym(yt,jt,a,dt);break t}Le&&Le(e,tt,it)}switch(Le=it?Wt(it):window,e){case"focusin":(qm(Le)||Le.contentEditable==="true")&&(hr=Le,vf=it,Uo=null);break;case"focusout":Uo=vf=hr=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,ng(yt,a,dt);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":ng(yt,a,dt)}var re;if(df)t:{switch(e){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else fr?km(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Hm&&a.locale!=="ko"&&(fr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&fr&&(re=Pm()):(Xa=dt,lf="value"in Xa?Xa.value:Xa.textContent,fr=!0)),Le=Xc(it,ce),0<Le.length&&(ce=new Bm(ce,e,null,a,dt),yt.push({event:ce,listeners:Le}),re?ce.data=re:(re=Xm(a),re!==null&&(ce.data=re)))),(re=by?Ty(e,a):Ay(e,a))&&(ce=Xc(it,"onBeforeInput"),0<ce.length&&(Le=new Bm("onBeforeInput","beforeinput",null,a,dt),yt.push({event:Le,listeners:ce}),Le.data=re)),bM(yt,e,it,a,dt)}L_(yt,n)})}function il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=bo(e,a),c!=null&&r.unshift(il(e,c,f)),c=bo(e,n),c!=null&&r.push(il(e,c,f))),e.tag===3)return r;e=e.return}return[]}function CM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P_(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,z=R.alternate,it=R.stateNode;if(R=R.tag,z!==null&&z===r)break;R!==5&&R!==26&&R!==27||it===null||(z=it,c?(it=bo(a,f),it!=null&&_.unshift(il(a,it,z))):c||(it=bo(a,f),it!=null&&_.push(il(a,it,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var wM=/\r\n?/g,DM=/\u0000|\uFFFD/g;function I_(e){return(typeof e=="string"?e:""+e).replace(wM,`
`).replace(DM,"")}function z_(e,n){return n=I_(n),I_(e)===n}function je(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||lr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&lr(e,""+r);else return;break;case"className":ri(e,"class",r);break;case"tabIndex":ri(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,a,r);break;case"style":Um(e,r,f);return;case"data":if(n!=="object"){ri(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Bl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&je(e,n,"name",c.name,c,null),je(e,n,"formEncType",c.formEncType,c,null),je(e,n,"formMethod",c.formMethod,c,null),je(e,n,"formTarget",c.formTarget,c,null)):(je(e,n,"encType",c.encType,c,null),je(e,n,"method",c.method,c,null),je(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Bl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Yi);return;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Bl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":we("beforetoggle",e),we("toggle",e),tn(e,"popover",r);break;case"xlinkActuate":Ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ne(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ne(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ne(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ne(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tn(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ZS.get(a)||a,tn(e,a,r);else return}be=!0}function ed(e,n,a,r,c,f){switch(a){case"style":Um(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")lr(e,r);else if(typeof r=="number"||typeof r=="bigint")lr(e,""+r);else return;break;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[k]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break t}be=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):tn(e,a,r)}return}be=!0}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,f,_,a,null)}}c&&je(e,n,"srcSet",a.srcSet,a,null),r&&je(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var R=f=_=c=null,z=null,it=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":_=dt;break;case"checked":z=dt;break;case"defaultChecked":it=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:je(e,n,r,dt,a,null)}}Cm(e,f,R,z,it,_,c,!1);return;case"select":we("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:je(e,n,c,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?or(e,!!r,n,!1):a!=null&&or(e,!!r,a,!0);return;case"textarea":we("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:je(e,n,_,R,a,null)}Dm(e,r,c,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":je(e,n,z,r,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<nl.length;r++)we(nl[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(r=a[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,it,r,a,null)}return;default:if(nf(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&ed(e,n,dt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&je(e,n,R,r,a,null))}var NM={};function UM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,z=null,it=null,dt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":z=yt;default:r.hasOwnProperty(ut)||je(e,n,ut,null,r,yt)}}for(var tt in r){var ut=r[tt];if(yt=a[tt],r.hasOwnProperty(tt)&&(ut!=null||yt!=null))switch(tt){case"type":ut!==yt&&(be=!0),f=ut;break;case"name":ut!==yt&&(be=!0),c=ut;break;case"checked":ut!==yt&&(be=!0),it=ut;break;case"defaultChecked":ut!==yt&&(be=!0),dt=ut;break;case"value":ut!==yt&&(be=!0),_=ut;break;case"defaultValue":ut!==yt&&(be=!0),R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==yt&&je(e,n,tt,ut,r,yt)}}tf(e,_,R,z,it,dt,f,c);return;case"select":ut=_=R=tt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ut=z;default:r.hasOwnProperty(f)||je(e,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":f!==z&&(be=!0),tt=f;break;case"defaultValue":f!==z&&(be=!0),R=f;break;case"multiple":f!==z&&(be=!0),_=f;default:f!==z&&je(e,n,c,f,r,z)}n=R,a=_,r=ut,tt!=null?or(e,!!a,tt,!1):!!r!=!!a&&(n!=null?or(e,!!a,n,!0):or(e,!!a,a?[]:"",!1));return;case"textarea":ut=tt=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:je(e,n,R,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(be=!0),tt=c;break;case"defaultValue":c!==f&&(be=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&je(e,n,_,c,r,f)}wm(e,tt,ut);return;case"option":for(var Pt in a)tt=a[Pt],a.hasOwnProperty(Pt)&&tt!=null&&!r.hasOwnProperty(Pt)&&(Pt==="selected"?e.selected=!1:je(e,n,Pt,null,r,tt));for(z in r)tt=r[z],ut=a[z],r.hasOwnProperty(z)&&tt!==ut&&(tt!=null||ut!=null)&&(z==="selected"?(tt!==ut&&(be=!0),e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol"):je(e,n,z,tt,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&je(e,n,te,null,r,tt);for(it in r)if(tt=r[it],ut=a[it],r.hasOwnProperty(it)&&tt!==ut&&(tt!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:je(e,n,it,tt,r,ut)}return;default:if(nf(n)){for(var Se in a)tt=a[Se],a.hasOwnProperty(Se)&&tt!==void 0&&!r.hasOwnProperty(Se)&&ed(e,n,Se,void 0,r,tt);for(dt in r)tt=r[dt],ut=a[dt],!r.hasOwnProperty(dt)||tt===ut||tt===void 0&&ut===void 0||ed(e,n,dt,tt,r,ut);return}}for(var nt in a)tt=a[nt],a.hasOwnProperty(nt)&&tt!=null&&!r.hasOwnProperty(nt)&&je(e,n,nt,null,r,tt);for(yt in r)tt=r[yt],ut=a[yt],!r.hasOwnProperty(yt)||tt===ut||tt==null&&ut==null||je(e,n,yt,tt,r,ut)}function B_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&B_(_)){for(_=0,R=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],it=z.startTime;if(it>R)break;var dt=z.transferSize,yt=z.initiatorType;dt&&B_(yt)&&(z=z.responseEnd,_+=dt*(z<R?1:(R-it)/(z-it)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nd=null,id=null;function al(e){return e.nodeType===9?e:e.ownerDocument}function F_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function G_(e,n,a,r){return a=al(a).createElement(e),a[A]=r,a[k]=n,On(a,e,n),Ee(a),a}function ad(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function OM(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,PM=typeof clearTimeout=="function"?clearTimeout:void 0,V_=typeof Promise=="function"?Promise:void 0,k_=typeof requestAnimationFrame=="function"?requestAnimationFrame:rd,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof V_<"u"?function(e){return V_.resolve(null).then(e).catch(zM)}:rd;function zM(e){setTimeout(function(){throw e})}function us(e){return e==="head"}function X_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")pd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ot]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&pd(e.ownerDocument.body);a=c}while(a);qr(n)}function q_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Y_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function W_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function BM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function od(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return BM(n,a,e)}function FM(e){return e.documentElement.clientHeight}function HM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function GM(e,n,a,r,c,f,_,R,z){var it=n.nodeType===9?n:n.ownerDocument;try{var dt=it.startViewTransition({update:function(){var tt=it.defaultView,ut=tt.navigation&&tt.navigation.transition,Pt=it.fonts.status;r();var te=[];if(Pt==="loaded"&&(FM(it),it.fonts.status==="loading"&&te.push(it.fonts.ready)),Pt=te.length,e!==null)for(var Se=e.suspenseyImages,nt=0,q=0;q<Se.length;q++){var rt=Se[q];if(!rt.complete){var xt=rt.getBoundingClientRect();if(0<xt.bottom&&0<xt.right&&xt.top<tt.innerHeight&&xt.left<tt.innerWidth){if(nt+=pv(rt),nt>Wc){te.length=Pt;break}rt=new Promise(HM.bind(rt)),te.push(rt)}}}if(0<te.length)return tt=Promise.race([Promise.all(te),new Promise(function(jt){return setTimeout(jt,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,tt]):tt).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});it.__reactViewTransition=dt;var yt=[];return dt.ready.then(function(){for(var tt=it.documentElement.getAnimations({subtree:!0}),ut=0;ut<tt.length;ut++){var Pt=tt[ut],te=Pt.effect,Se=te.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){yt.push(Pt),Pt=te.getKeyframes();for(var nt=Se=void 0,q=!0,rt=0;rt<Pt.length;rt++){var xt=Pt[rt],jt=xt.width;if(Se===void 0)Se=jt;else if(Se!==jt){q=!1;break}if(jt=xt.height,nt===void 0)nt=jt;else if(nt!==jt){q=!1;break}delete xt.width,delete xt.height,xt.transform==="none"&&delete xt.transform}q&&Se!==void 0&&nt!==void 0&&(te.setKeyframes(Pt),q=getComputedStyle(te.target,te.pseudoElement),q.width!==Se||q.height!==nt)&&(q=Pt[0],q.width=Se,q.height=nt,q=Pt[Pt.length-1],q.width=Se,q.height=nt,te.setKeyframes(Pt))}}_()},function(tt){it.__reactViewTransition===dt&&(it.__reactViewTransition=null);try{typeof tt=="object"&&tt!==null&&tt.name==="InvalidStateError"&&(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null),tt!==null&&z(tt)}finally{r(),c(),_()}}),dt.finished.finally(function(){for(var tt=0;tt<yt.length;tt++)yt[tt].cancel();it.__reactViewTransition===dt&&(it.__reactViewTransition=null),R()}),dt}catch{return r(),c(),_(),null}}function Ws(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ws.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:D({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ws.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},Ws.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function j_(e){return{name:e,group:new Ws("group",e),imagePair:new Ws("image-pair",e),old:new Ws("old",e),new:new Ws("new",e)}}function di(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(K_(f,e,n,a)===-1){var _=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(c=_.removeEventListener.bind(_,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Fr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,VM,e,R,r)}this._eventListeners=f}};function VM(e,n,a,r){return M(e).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=K_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Fr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,kM,e,a,c),r.splice(n,1),f!==null&&f()}};function kM(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Fr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Z_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function K_(e,n,a,r){if(e.length===0)return-1;r=Z_(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Z_(f.optionsOrUseCapture)===r)return c}return-1}di.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},di.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Q_,e,void 0,void 0)};function Q_(e,n){return e.tag===6?!1:(e=M(e),eE(e,n))}di.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,ld,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Q_(n[a],e);a--);};function ld(e,n){return n.push(e),!1}di.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=M(e),e=al(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,XM,e,void 0,void 0))};function XM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,qM,e,void 0,void 0)};function qM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}di.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,YM,e,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var r=Ii[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ii[n++]=r}Ii.length=n}};function YM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ii=[],cd=!1;function WM(e,n,a){Ii.push({fragmentInstance:e,observer:n,instance:a}),cd||(cd=!0,nE(function(){cd=!1;var r=Ii;Ii=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}di.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,jM,e,void 0,void 0),e};function jM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}di.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},di.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,ld,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ZM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ZM(e,n,a,r,c){var f=fe(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=w(a,f,L),n===null?n=!1:(g(n,!0,B,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=w(r,f,L),n===null?n=!1:(g(n,!0,C,f,r),f=S,I=S=null,n=f!==null)),n):!1}function J_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,ld,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),J_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),J_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function KM(e,n){return e=M(e),$_(e,n),!1}function $_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function tv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,R=0;R<Ii.length;R++){var z=Ii[R];(z.fragmentInstance!==n||z.observer!==f||z.instance!==e)&&(Ii[_++]=z)}Ii.length=_,f.observe(e)}),$_(e,n))}function QM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?WM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),$t(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function JM(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ot])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function $M(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function ev(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dd=null;function nv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function iv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function eE(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function nE(e){k_(function(){k_(function(n){return e(n)})})}function av(e,n,a){switch(n=al(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function sv(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&je(e,n,r,null,NM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Yi&&(e.onclick=null),$t(e)}function pd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$t(e)}var Ci=new Map,rv=new Set;function sl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ca=wt.d;wt.d={f:iE,r:aE,D:sE,C:rE,L:oE,m:lE,X:uE,S:cE,M:fE};function iE(){var e=Ca.f(),n=Bc();return e||n}function aE(e){var n=ge(e);n!==null&&n.tag===5&&n.type==="form"?l0(n):Ca.r(e)}var Hr=typeof document>"u"?null:document;function ov(e,n,a){var r=Hr;if(r&&typeof n=="string"&&n){var c=Si(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),rv.has(c)||(rv.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),On(n,"link",e),Ee(n),r.head.appendChild(n)))}}function sE(e){Ca.D(e),ov("dns-prefetch",e,null)}function rE(e,n){Ca.C(e,n),ov("preconnect",e,n)}function oE(e,n,a){Ca.L(e,n,a);var r=Hr;if(r&&e&&n){var c='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Si(a.imageSizes)+'"]')):c+='[href="'+Si(e)+'"]';var f=c;switch(n){case"style":f=Gr(e);break;case"script":f=Vr(e)}if(!(Ci.has(f)||(e=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(rl(f))||n==="script"&&r.querySelector(ol(f))))){var _=r.createElement("link");On(_,"link",e),n==="style"&&(_[Zt]=!0,_.onload=_.onerror=function(){Qe(_)}),Ee(_),r.head.appendChild(_)}}}function lE(e,n){Ca.m(e,n);var a=Hr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Si(r)+'"][href="'+Si(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Vr(e)}if(!Ci.has(f)&&(e=D({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(f)))return}r=a.createElement("link"),On(r,"link",e),Ee(r),a.head.appendChild(r)}}}function cE(e,n,a){Ca.S(e,n,a);var r=Hr;if(r&&e){var c=Re(r).hoistableStyles,f=Gr(e);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(rl(f)))R.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&md(e,a);var z=_=r.createElement("link");Ee(z),On(z,"link",e),z._p=new Promise(function(it,dt){z.onload=it,z.onerror=dt}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,qc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function uE(e,n){Ca.X(e,n);var a=Hr;if(a&&e){var r=Re(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(ol(c)),f||(e=D({src:e,async:!0},n),(n=Ci.get(c))&&gd(e,n),f=a.createElement("script"),Ee(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function fE(e,n){Ca.M(e,n);var a=Hr;if(a&&e){var r=Re(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(ol(c)),f||(e=D({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&gd(e,n),f=a.createElement("script"),Ee(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function lv(e,n,a,r){var c=(c=Rt.current)?sl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gr(a.href),n=Re(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gr(a.href);var f=Re(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(rl(e)))?f._p||(_.instance=f,_.state.loading=5):(f=Ci.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,f)),hE(c,e,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vr(a),n=Re(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gr(e){return'href="'+Si(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function hE(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Zt]=!0,n.onload=n.onerror=Qe.bind(null,n),On(n,"link",a),Ee(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Vr(e){return'[src="'+Si(e)+'"]'}function ol(e){return"script[async]"+e}function uv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Si(a.href)+'"]');if(r)return n.instance=r,Ee(r),r;var c=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ee(r),On(r,"style",c),qc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Gr(a.href);var f=e.querySelector(rl(c));if(f)return n.state.loading|=4,n.instance=f,Ee(f),f;r=cv(a),(c=Ci.get(c))&&md(r,c),f=(e.ownerDocument||e).createElement("link"),Ee(f);var _=f;return _._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),On(f,"link",r),n.state.loading|=4,qc(f,a.precedence,e),n.instance=f;case"script":return f=Vr(a.src),(c=e.querySelector(ol(f)))?(n.instance=c,Ee(c),c):(r=a,(c=Ci.get(f))&&(r=D({},a),gd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ee(c),On(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,qc(r,a.precedence,e));return n.instance}function qc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yc=null;function fv(e,n,a){if(Yc===null){var r=new Map,c=Yc=new Map;c.set(a,r)}else c=Yc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ot]||f[A]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function _d(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function dE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function mv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=pv(n),e.suspenseyImages.push(n)),e=gE.bind(e),n.decode().then(e,e))}function pE(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gr(r.href),f=n.querySelector(rl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ll.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ee(f);return}f=n.ownerDocument||n,r=cv(r),(c=Ci.get(c))&&md(r,c),f=f.createElement("link"),Ee(f);var _=f;_._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),On(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ll.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wc=0;function mE(e,n){return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wc===0&&(Wc=62500*LM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function gv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Zc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ll(){this.count--,gv(this)}function gE(){this.imgCount--,gv(this)}var jc=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jc=new Map,n.forEach(_E,e),jc=null,ll.call(e))}function _E(e,n){if(!(n.state.loading&4)){var a=jc.get(e);if(a)var r=a.get(null);else{a=new Map,jc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=ll.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var kr={$$typeof:Z,Provider:null,Consumer:null,_currentValue:Fe,_currentValue2:Fe,_threadCount:0};function vE(e,n,a,r,c,f,_,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function _v(e,n,a,r,c,f,_,R,z,it,dt,yt){return e=new vE(e,n,a,_,z,it,dt,yt,R),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Uf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},If(f),e}function vv(e){return e?(e=mr,e):mr}function xv(e,n,a,r,c,f){c=vv(c),r.context===null?r.context=c:r.pendingContext=c,r=Ja(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=$a(e,r,n),a!==null&&($n(a,e,n),Fo(a,e,n))}function Sv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vd(e,n){Sv(e,n),(e=e.alternate)&&Sv(e,n)}function yv(e){if(e.tag===13||e.tag===31){var n=Ds(e,67108864);n!==null&&$n(n,e,67108864),vd(e,67108864)}}function Mv(e){if(e.tag===13||e.tag===31){var n=hi();n=Mo(n);var a=Ds(e,n);a!==null&&$n(a,e,n),vd(e,n)}}var Xr=!0;function xE(e,n,a,r){var c=gt.T;gt.T=null;var f=wt.p;try{wt.p=2,xd(e,n,a,r)}finally{wt.p=f,gt.T=c}}function SE(e,n,a,r){var c=gt.T;gt.T=null;var f=wt.p;try{wt.p=8,xd(e,n,a,r)}finally{wt.p=f,gt.T=c}}function xd(e,n,a,r){if(Xr){var c=Sd(r);if(c===null)td(e,n,r,Kc,a),bv(e,r);else if(ME(c,e,n,a,r))r.stopPropagation();else if(bv(e,r),n&4&&-1<yE.indexOf(e)){for(;c!==null;){var f=ge(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=pa(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var z=1<<31-me(_);R.entanglements[1]|=z,_&=~z}na(f),(ke&6)===0&&(Pc=qt()+500,el(0))}}break;case 31:case 13:R=Ds(f,2),R!==null&&$n(R,f,2),Bc(),vd(f,2)}if(f=Sd(r),f===null&&td(e,n,r,Kc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else td(e,n,r,null,a)}}function Sd(e){return e=sf(e),yd(e)}var Kc=null;function yd(e){if(Kc=null,e=fe(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kc=e,null}function Ev(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case de:return 2;case K:return 8;case Nt:case Mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Md=!1,fs=null,hs=null,ds=null,cl=new Map,ul=new Map,ps=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(e,n){switch(e){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function fl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ge(n),n!==null&&yv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ME(e,n,a,r,c){switch(n){case"focusin":return fs=fl(fs,e,n,a,r,c),!0;case"dragenter":return hs=fl(hs,e,n,a,r,c),!0;case"mouseover":return ds=fl(ds,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return cl.set(f,fl(cl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,ul.set(f,fl(ul.get(f)||null,e,n,a,r,c)),!0}return!1}function Tv(e){var n=fe(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Il(e.priority,function(){Mv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Il(e.priority,function(){Mv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Sd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);af=r,a.target.dispatchEvent(r),af=null}else return n=ge(a),n!==null&&yv(n),e.blockedOn=a,!1;n.shift()}return!0}function Av(e,n,a){Qc(e)&&a.delete(n)}function EE(){Md=!1,fs!==null&&Qc(fs)&&(fs=null),hs!==null&&Qc(hs)&&(hs=null),ds!==null&&Qc(ds)&&(ds=null),cl.forEach(Av),ul.forEach(Av)}function Jc(e,n){e.blockedOn===n&&(e.blockedOn=null,Md||(Md=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,EE)))}var $c=null;function Rv(e){$c!==e&&($c=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$c===e&&($c=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(yd(r||a)===null)continue;break}var f=ge(a);f!==null&&(e.splice(n,3),n-=3,ih(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function qr(e){function n(z){return Jc(z,e)}fs!==null&&Jc(fs,e),hs!==null&&Jc(hs,e),ds!==null&&Jc(ds,e),cl.forEach(n),ul.forEach(n);for(var a=0;a<ps.length;a++){var r=ps[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ps.length&&(a=ps[0],a.blockedOn===null);)Tv(a),a.blockedOn===null&&ps.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[k]||null;if(typeof f=="function")_||Rv(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[k]||null)R=_.formAction;else if(yd(c)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Rv(a)}}}function Cv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ed(e){this._internalRoot=e}tu.prototype.render=Ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();xv(a,r,e,n,null,null)},tu.prototype.unmount=Ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xv(e.current,2,null,e,null,null),Bc(),n[pt]=null}};function tu(e){this._internalRoot=e}tu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ps.length&&n!==0&&n<ps[a].priority;a++);ps.splice(a,0,e),a===0&&Tv(e)}};var wv=t.version;if(wv!=="19.3.0")throw Error(s(527,wv,"19.3.0"));wt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var bE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:gt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{ee=eu.inject(bE),kt=eu}catch{}}return dl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=v0,f=x0,_=S0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=_v(e,1,!1,null,null,a,r,null,c,f,_,Cv),e[pt]=n.current,$h(e),new Ed(n)},dl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=v0,_=x0,R=S0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=_v(e,1,!0,n,a??null,r,c,z,f,_,R,Cv),n.context=vv(null),a=n.current,r=hi(),r=Mo(r),c=Ja(r),c.callback=null,$a(a,c,r),a=r,n.current.lanes=a,Xi(n,a),na(n),e[pt]=n.current,$h(e),new tu(n)},dl.version="19.3.0",dl}var Fv;function OE(){if(Fv)return Ad.exports;Fv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ad.exports=LE(),Ad.exports}var PE=OE();const IE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$x=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();var zE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const BE=Oe.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>Oe.createElement("svg",{ref:p,...zE,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:$x("lucide",l),...d},[...h.map(([m,x])=>Oe.createElement(m,x)),...Array.isArray(u)?u:[u]]));const zn=(o,t)=>{const i=Oe.forwardRef(({className:s,...l},u)=>Oe.createElement(BE,{ref:u,iconNode:t,className:$x(`lucide-${IE(o)}`,s),...l}));return i.displayName=`${o}`,i};const Dd=zn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const FE=zn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const HE=zn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const so=zn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const Hv=zn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Gv=zn("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);const GE=zn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const VE=zn("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);const kE=zn("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);const XE=zn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const qE=zn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const YE=zn("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);const WE=zn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const jE=zn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const ZE=zn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);const tS=zn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const KE=zn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Pu=Object.freeze({mass:1.2,springK:45,zeta:.06,inertia:.025,halfSpacing:.1,force:2,stroke:.01,gap:.003,relayDelay:.015,voltage:12,resistance:12,inductance:.04,plungerMass:.025,returnK:70,plungerC:.8,contactK:1800,contactC:1.5,collarRatio:.46,minOn:.05,minOff:.08,maxOn:.15,velocityOn:.004,velocityOff:.0015}),QE=[["mass","Moving mass","kg",.3,5,.1],["springK","Lateral stiffness / spring","N/m",10,250,5],["zeta","Passive damping ratio","",.01,.3,.01],["inertia","Yaw inertia","kg·m²",.005,.15,.005],["force","Nominal coil force at 1 A","N",.2,6,.2],["stroke","Plunger stroke","mm",3,20,1,1e3],["gap","Retracted contact gap","mm",1,25,1,1e3],["relayDelay","Relay delay","ms",5,80,5,1e3]],Ru=()=>({t:0,elapsed:0,remaining:0,quakeStart:null,excitationStrength:55,y:new Array(14).fill(0),passiveY:new Array(14).fill(0),x:0,v:0,q:0,theta:0,omega:0,passiveX:0,ground:0,groundV:0,groundA:0,force:0,energy:0,passiveEnergy:0,mechanicalEnergy:0,peak:0,samples:[],nextSample:0,rangeExceeded:!1,actuators:[0,1].map(()=>({command:!1,relay:!1,pendingAt:0,changedAt:-10,position:0,current:0,contact:0,fraction:0}))});function JE(o=55){const t=Ru();return t.quakeStart=0,t.remaining=6,t.excitationStrength=o,t}function eS(o,t=55){if(o<=0||o>=6)return{x:0,v:0,a:0};const i=Math.PI/6,s=Math.sin(i*o),l=Math.cos(i*o),u=s**4,h=4*i*s**3*l,d=4*i*i*(3*s*s*l*l-s**4),p=2*Math.PI*1.6,m=2*Math.PI*3.3,x=t*12e-5,g=Math.sin(p*o)+.3*Math.sin(m*o),v=p*Math.cos(p*o)+.3*m*Math.cos(m*o),y=-p*p*Math.sin(p*o)-.3*m*m*Math.sin(m*o);return{x:x*u*g,v:x*(h*g+u*v),a:x*(d*g+2*h*v+u*y)}}function nS(o){const t=4*o.springK,i=2*o.zeta*Math.sqrt(t*o.mass),s=t*o.halfSpacing**2,l=2*o.zeta*Math.sqrt(s*o.inertia);return{k:t,c:i,kt:s,ct:l,Lprime:2*o.force/(o.voltage/o.resistance)**2}}function iS(o,t,i){const s=4+t*3,l=t===0?-1:1,u=t===0?-i.halfSpacing:i.halfSpacing,h=i.collarRatio*(o[0]+u*o[2]),d=i.collarRatio*(o[1]+u*o[3]),p=o[s]-i.gap-l*h;return p>0?Math.max(0,i.contactK*p+i.contactC*(o[s+1]-l*d)):0}function Vv(o,t,i,s,l,u,h=0){const{k:d,c:p,kt:m,ct:x,Lprime:g}=nS(s),v=u===null?{a:0}:eS(t-u,l),y=h-12*o[13]-36*o[12],T=v.a+y,N=new Array(14).fill(0);let M=0,S=0;for(let I=0;I<2;I++){const B=4+I*3,C=I===0?-1:1,L=I===0?-s.halfSpacing:s.halfSpacing,w=iS(o,I,s),D=Math.max(0,o[B+2]),b=.5*g*D*D;N[B]=o[B+1],N[B+1]=(b-s.returnK*o[B]-s.plungerC*o[B+1]-w)/s.plungerMass,N[B+2]=((i[I]?s.voltage:-.7)-s.resistance*D-g*D*o[B+1])/(s.inductance+g*Math.max(0,Math.min(s.stroke,o[B]))),D<=0&&N[B+2]<0&&(N[B+2]=0),M+=s.collarRatio*C*w,S+=s.collarRatio*L*C*w}return N[0]=o[1],N[1]=(-d*o[0]-p*o[1]+M)/s.mass-T,N[2]=o[3],N[3]=(-m*o[2]-x*o[3]+S)/s.inertia,N[10]=o[11],N[11]=(-d*o[10]-p*o[11])/s.mass-T,N[12]=o[13],N[13]=y,N}function $E(o,t,{damping:i=!0,input:s=0,params:l=Pu}={}){const u=l;o.t+1e-10>=o.nextSample&&(o.nextSample+=.01,o.actuators.forEach((w,D)=>{const b=D===0?-u.halfSpacing:u.halfSpacing,P=D===0?-1:1,H=u.collarRatio*(o.y[1]+b*o.y[3]),j=o.t-w.changedAt,Q=P*H<-(w.command?u.velocityOff:u.velocityOn);let J=w.command;i?w.command&&j>=u.minOn&&(!Q||j>=u.maxOn)?J=!1:!w.command&&j>=u.minOff&&Q&&(J=!0):J=!1,J!==w.command&&(w.command=J,w.pendingAt=o.t+u.relayDelay,w.changedAt=o.t)})),o.actuators.forEach(w=>{o.t+1e-10>=w.pendingAt&&(w.relay=w.command)});const h=o.actuators.map(w=>w.relay),d=(w,D)=>Vv(w,D,h,u,o.excitationStrength,o.quakeStart,s),p=o.y,m=d(p,o.t),x=d(p.map((w,D)=>w+t*m[D]/2),o.t+t/2),g=d(p.map((w,D)=>w+t*x[D]/2),o.t+t/2),v=d(p.map((w,D)=>w+t*g[D]),o.t+t);o.y=p.map((w,D)=>w+t*(m[D]+2*x[D]+2*g[D]+v[D])/6);for(let w=0;w<2;w++){const D=4+w*3;o.y[D]<0&&(o.y[D]=0,o.y[D+1]=Math.max(0,o.y[D+1])),o.y[D]>u.stroke&&(o.y[D]=u.stroke,o.y[D+1]=Math.min(0,o.y[D+1])),o.y[D+2]=Math.max(0,o.y[D+2])}const y=o.passiveY,T=(w,D)=>Vv(w,D,[!1,!1],u,o.excitationStrength,o.quakeStart,s),N=T(y,o.t),M=T(y.map((w,D)=>w+t*N[D]/2),o.t+t/2),S=T(y.map((w,D)=>w+t*M[D]/2),o.t+t/2),I=T(y.map((w,D)=>w+t*S[D]),o.t+t);o.passiveY=y.map((w,D)=>w+t*(N[D]+2*M[D]+2*S[D]+I[D])/6);for(let w=0;w<2;w++){const D=4+w*3;o.passiveY[D]<0&&(o.passiveY[D]=0,o.passiveY[D+1]=Math.max(0,o.passiveY[D+1])),o.passiveY[D]>u.stroke&&(o.passiveY[D]=u.stroke,o.passiveY[D+1]=Math.min(0,o.passiveY[D+1])),o.passiveY[D+2]=Math.max(0,o.passiveY[D+2])}o.t+=t,o.elapsed=o.t,o.remaining=o.quakeStart===null?0:Math.max(0,6-(o.t-o.quakeStart));const B=o.quakeStart===null?{x:0,v:0,a:0}:eS(o.t-o.quakeStart,o.excitationStrength);o.ground=B.x+o.y[12],o.groundV=B.v+o.y[13],o.groundA=B.a+s-12*o.y[13]-36*o.y[12],o.q=o.y[0],o.x=o.q+o.ground,o.v=o.y[1]+o.groundV,o.theta=o.y[2],o.omega=o.y[3],o.passiveX=o.passiveY[0]+o.ground,o.force=0,o.actuators.forEach((w,D)=>{w.position=o.y[4+D*3],w.current=o.y[6+D*3],w.contact=iS(o.y,D,u),w.fraction=w.position/u.stroke,o.force+=u.collarRatio*(D===0?-1:1)*w.contact}),o.energy+=o.x*o.x*t,o.passiveEnergy+=o.passiveX*o.passiveX*t,o.peak=Math.max(o.peak,Math.abs(o.x));const{k:C,kt:L}=nS(u);return o.mechanicalEnergy=.5*(u.mass*o.y[1]**2+C*o.q**2+u.inertia*o.omega**2+L*o.theta**2),o.rangeExceeded||=Math.abs(o.q)>.05||Math.abs(o.theta)>.15||o.y.some(w=>!Number.isFinite(w)),o}function tb(o){return o.passiveEnergy>1e-12?100*(1-Math.sqrt(o.energy/o.passiveEnergy)):null}function eb({params:o,onChange:t,s:i}){return O.jsxs("section",{className:"physics-panel",children:[O.jsxs("div",{className:"physics-heading",children:[O.jsxs("div",{children:[O.jsx("span",{className:"eyebrow",children:"SI-UNIT DYNAMICS / EXAMPLE PARAMETERS"}),O.jsx("h2",{children:"Match the model to your hardware."}),O.jsx("p",{children:"These values are illustrative, not measurements of your prototype. Changing a value starts a fresh comparison."})]}),O.jsxs("strong",{children:[(Math.sqrt(4*o.springK/o.mass)/(2*Math.PI)).toFixed(2)," Hz",O.jsx("small",{children:"undamped lateral natural frequency"})]})]}),O.jsx("div",{className:"physics-fields",children:QE.map(([s,l,u,h,d,p,m=1])=>O.jsxs("label",{children:[l,O.jsxs("div",{children:[O.jsx("input",{type:"number",min:h,max:d,step:p,value:+(o[s]*m).toFixed(4),onChange:x=>{const g=Number(x.target.value);x.target.value!==""&&Number.isFinite(g)&&g>=h&&g<=d&&t({...o,[s]:g/m})}}),O.jsx("span",{children:u})]})]},s))}),O.jsxs("div",{className:"physics-live",children:[O.jsxs("span",{children:["Platform travel ",O.jsxs("b",{children:[(i.q*1e3).toFixed(2)," mm"]})]}),O.jsxs("span",{children:["Yaw ",O.jsxs("b",{children:[(i.theta*180/Math.PI).toFixed(2),"°"]})]}),O.jsxs("span",{children:["Base acceleration ",O.jsxs("b",{children:[i.groundA.toFixed(2)," m/s²"]})]}),O.jsxs("span",{children:["Transferred force ",O.jsxs("b",{children:[i.force.toFixed(2)," N"]})]}),O.jsx("button",{onClick:()=>t({...Pu}),children:"Restore example values"})]}),i.rangeExceeded&&O.jsx("p",{className:"model-warning",role:"status",children:"The motion exceeded the small-motion model range (50 mm travel or 8.6° yaw). This run is not a reliable prediction. Reset and reduce excitation or revise parameters."}),O.jsxs("details",{children:[O.jsx("summary",{children:"Equations, controller and model limits"}),O.jsxs("p",{children:[O.jsx("b",{children:"m q̈ + c q̇ + 4k q = ΣF − m aᵍ"}),", with a separate yaw equation ",O.jsx("b",{children:"J θ̈ + cθ θ̇ + 4kb² θ = ΣrF"}),". Each spring sees q + rθ. The platform is a rigid body; floor bending and vertical motion are not modeled."]}),O.jsx("p",{children:"Plungers have mass, a return spring, damping and hard stroke stops. A compressive contact force exists only when a tip reaches its spring collar. The collar transfers force using a linear spring-shape approximation (height ratio 0.46). Contact is represented by a 1,800 N/m stiffness and 1.5 N·s/m damping, not detailed coil deformation."}),O.jsx("p",{children:"The coil obeys V = Ri + L di/dt + i(dL/dp)ṗ, with F = ½i²(dL/dp), a linear inductance assumption and a 0.7 V flyback diode. Example values: 12 V, 12 Ω, L₀ = 40 mH; plunger mass 25 g, return stiffness 70 N/m, damping 0.8 N·s/m. Magnetic saturation and heating are excluded."}),O.jsx("p",{children:"The controller samples simulated contact velocity at 100 Hz, uses hysteresis (4 / 1.5 mm/s), 50 ms minimum on-time, 80 ms minimum off-time and 150 ms maximum pulses. This assumes a usable velocity estimate; it is not a validated MPU6050 firmware algorithm. Delays can add energy and the actuators can twist the platform."}),O.jsx("p",{children:"RK4 integration at 2,000 steps/s; inelastic stroke stops. Comparison uses identical unpowered hardware, initial conditions and base input. Negative reduction means worse motion. The base signal is a smooth synthetic six-second input, not a recorded earthquake. Phone acceleration drives a recentering shake-table filter rather than reconstructing real ground displacement. The 3D assembly is schematic; motion is shown at 2× scale."}),O.jsxs("p",{children:["References: ",O.jsx("a",{href:"https://opensees.github.io/OpenSeesDocumentation/user/manual/model/pattern/uniformExcitationPattern.html",target:"_blank",rel:"noreferrer",children:"OpenSees base-excitation equations"})," · ",O.jsx("a",{href:"https://archive.nptel.ac.in/content/storage2/courses/112104040/lecture19/19_4.html",target:"_blank",rel:"noreferrer",children:"NPTEL actuator dynamics"})]})]})]})}const rm="186",co={ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nb=0,kv=1,ib=2,Cu=1,aS=2,Ml=3,nr=0,ni=1,Pa=2,Ba=0,bl=1,Xv=2,qv=3,Yv=4,ab=5,ro=100,sb=101,rb=102,ob=103,lb=104,cb=200,ub=201,fb=202,hb=203,sS=204,rS=205,db=206,pb=207,mb=208,gb=209,_b=210,vb=211,xb=212,Sb=213,yb=214,mp=0,gp=1,_p=2,Rl=3,vp=4,xp=5,Sp=6,yp=7,oS=0,Mb=1,Eb=2,la=0,lS=1,cS=2,uS=3,fS=4,hS=5,dS=6,pS=7,mS=300,ir=301,ho=302,Nd=303,Ud=304,Yu=306,Mp=1e3,za=1001,Ep=1002,In=1003,bb=1004,nu=1005,Gn=1006,Ld=1007,tr=1008,_i=1009,gS=1010,_S=1011,Cl=1012,om=1013,ca=1014,ra=1015,ua=1016,lm=1017,cm=1018,wl=1020,vS=35902,xS=35899,SS=1021,yS=1022,Gi=1023,Ga=1026,er=1027,MS=1028,um=1029,ar=1030,fm=1031,hm=1033,wu=33776,Du=33777,Nu=33778,Uu=33779,bp=35840,Tp=35841,Ap=35842,Rp=35843,Cp=36196,wp=37492,Dp=37496,Np=37488,Up=37489,Iu=37490,Lp=37491,Op=37808,Pp=37809,Ip=37810,zp=37811,Bp=37812,Fp=37813,Hp=37814,Gp=37815,Vp=37816,kp=37817,Xp=37818,qp=37819,Yp=37820,Wp=37821,jp=36492,Zp=36494,Kp=36495,Qp=36283,Jp=36284,zu=36285,$p=36286,Tb=3200,tm=0,Ab=1,ys="",gi="srgb",Bu="srgb-linear",Fu="linear",Ze="srgb",Od=7680,Rb=519,Cb=512,wb=513,Db=514,dm=515,Nb=516,Ub=517,pm=518,Lb=519,Ob=35044,Wv="300 es",oa=2e3,Dl=2001;function Pb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ib(){const o=Hu("canvas");return o.style.display="block",o}const jv={};function Zv(...o){const t="THREE."+o.shift();console.log(t,...o)}function ES(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ue(...o){o=ES(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function He(...o){o=ES(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function uo(...o){const t=o.join(" ");t in jv||(jv[t]=!0,ue(...o))}function zb(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const Bb={[mp]:gp,[_p]:Sp,[vp]:yp,[Rl]:xp,[gp]:mp,[Sp]:_p,[yp]:vp,[xp]:Rl};class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,em=180/Math.PI;function Ul(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function Fb(o,t){return(o%t+t)%t}function Pd(o,t,i){return(1-i)*o+i*t}function pl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hb={DEG2RAD:Lu},Mm=class Mm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mm.prototype.isVector2=!0;let Jt=Mm;class Ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],x=s[l+2],g=s[l+3],v=u[h+0],y=u[h+1],T=u[h+2],N=u[h+3];if(g!==N||p!==v||m!==y||x!==T){let M=p*v+m*y+x*T+g*N;M<0&&(v=-v,y=-y,T=-T,N=-N,M=-M);let S=1-d;if(M<.9995){const I=Math.acos(M),B=Math.sin(I);S=Math.sin(S*I)/B,d=Math.sin(d*I)/B,p=p*S+v*d,m=m*S+y*d,x=x*S+T*d,g=g*S+N*d}else{p=p*S+v*d,m=m*S+y*d,x=x*S+T*d,g=g*S+N*d;const I=1/Math.sqrt(p*p+m*m+x*x+g*g);p*=I,m*=I,x*=I,g*=I}}t[i]=p,t[i+1]=m,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],x=s[l+3],g=u[h],v=u[h+1],y=u[h+2],T=u[h+3];return t[i]=d*T+x*g+p*y-m*v,t[i+1]=p*T+x*v+m*g-d*y,t[i+2]=m*T+x*y+d*v-p*g,t[i+3]=x*T-d*g-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),x=d(l/2),g=d(u/2),v=p(s/2),y=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=v*x*g+m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g-v*y*T;break;case"YXZ":this._x=v*x*g+m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g+v*y*T;break;case"ZXY":this._x=v*x*g-m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g-v*y*T;break;case"ZYX":this._x=v*x*g-m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g+v*y*T;break;case"YZX":this._x=v*x*g+m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g-v*y*T;break;case"XZY":this._x=v*x*g-m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g+v*y*T;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],x=i[6],g=i[10],v=s+d+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(x-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,x=i._w;return this._x=s*x+h*d+l*m-u*p,this._y=l*x+h*p+u*d-s*m,this._z=u*x+h*m+s*p-l*d,this._w=h*x-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Em=class Em{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),x=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+p*m+h*g-d*x,this.y=s+p*x+d*m-u*g,this.z=l+p*g+u*x-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Id.copy(this).projectOnVector(t),this.sub(Id)}reflect(t){return this.sub(Id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Em.prototype.isVector3=!0;let Y=Em;const Id=new Y,Kv=new Ms,bm=class bm{constructor(t,i,s,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=p,x[6]=s,x[7]=h,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],x=s[4],g=s[7],v=s[2],y=s[5],T=s[8],N=l[0],M=l[3],S=l[6],I=l[1],B=l[4],C=l[7],L=l[2],w=l[5],D=l[8];return u[0]=h*N+d*I+p*L,u[3]=h*M+d*B+p*w,u[6]=h*S+d*C+p*D,u[1]=m*N+x*I+g*L,u[4]=m*M+x*B+g*w,u[7]=m*S+x*C+g*D,u[2]=v*N+y*I+T*L,u[5]=v*M+y*B+T*w,u[8]=v*S+y*C+T*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8];return i*h*x-i*d*m-s*u*x+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8],g=x*h-d*m,v=d*p-x*u,y=m*u-h*p,T=i*g+s*v+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return t[0]=g*N,t[1]=(l*m-x*s)*N,t[2]=(d*s-l*h)*N,t[3]=v*N,t[4]=(x*i-l*p)*N,t[5]=(l*u-d*i)*N,t[6]=y*N,t[7]=(s*p-m*i)*N,t[8]=(h*i-s*u)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zd.makeScale(t,i)),this}rotate(t){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zd.makeRotation(-t)),this}translate(t,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bm.prototype.isMatrix3=!0;let _e=bm;const zd=new _e,Qv=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jv=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gb(){const o={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ze&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ze&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?Fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bu]:{primaries:t,whitePoint:s,transfer:Fu,toXYZ:Qv,fromXYZ:Jv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ze,toXYZ:Qv,fromXYZ:Jv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const ze=Gb();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Yr;class Vb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Yr===void 0&&(Yr=Hu("canvas")),Yr.width=t.width,Yr.height=t.height;const l=Yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Fa(i[s]/255)*255):i[s]=Fa(i[s]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kb=0;class mm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Bd(l[h].image)):u.push(Bd(l[h]))}else u=Bd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let Xb=0;const Fd=new Y;class jn extends bs{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=za,l=za,u=Gn,h=tr,d=Gi,p=_i,m=jn.DEFAULT_ANISOTROPY,x=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Ul(),this.name="",this.source=new mm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mp:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case Ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mp:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case Ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=mS;jn.DEFAULT_ANISOTROPY=1;const Tm=class Tm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],x=p[4],g=p[8],v=p[1],y=p[5],T=p[9],N=p[2],M=p[6],S=p[10];if(Math.abs(x-v)<.01&&Math.abs(g-N)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+N)<.1&&Math.abs(T+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(m+1)/2,C=(y+1)/2,L=(S+1)/2,w=(x+v)/4,D=(g+N)/4,b=(T+M)/4;return B>C&&B>L?B<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(B),l=w/s,u=D/s):C>L?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=w/l,u=b/l):L<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),s=D/u,l=b/u),this.set(s,l,u,i),this}let I=Math.sqrt((M-T)*(M-T)+(g-N)*(g-N)+(v-x)*(v-x));return Math.abs(I)<.001&&(I=1),this.x=(M-T)/I,this.y=(g-N)/I,this.z=(v-x)/I,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tm.prototype.isVector4=!0;let ln=Tm;class qb extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new jn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends qb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class bS extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yb extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const qu=class qu{constructor(t,i,s,l,u,h,d,p,m,x,g,v,y,T,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,x,g,v,y,T,N,M)}set(t,i,s,l,u,h,d,p,m,x,g,v,y,T,N,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=x,S[10]=g,S[14]=v,S[3]=y,S[7]=T,S[11]=N,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Wr.setFromMatrixColumn(t,0).length(),u=1/Wr.setFromMatrixColumn(t,1).length(),h=1/Wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),x=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=h*x,y=h*g,T=d*x,N=d*g;i[0]=p*x,i[4]=-p*g,i[8]=m,i[1]=y+T*m,i[5]=v-N*m,i[9]=-d*p,i[2]=N-v*m,i[6]=T+y*m,i[10]=h*p}else if(t.order==="YXZ"){const v=p*x,y=p*g,T=m*x,N=m*g;i[0]=v+N*d,i[4]=T*d-y,i[8]=h*m,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=y*d-T,i[6]=N+v*d,i[10]=h*p}else if(t.order==="ZXY"){const v=p*x,y=p*g,T=m*x,N=m*g;i[0]=v-N*d,i[4]=-h*g,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*x,i[9]=N-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const v=h*x,y=h*g,T=d*x,N=d*g;i[0]=p*x,i[4]=T*m-y,i[8]=v*m+N,i[1]=p*g,i[5]=N*m+v,i[9]=y*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const v=h*p,y=h*m,T=d*p,N=d*m;i[0]=p*x,i[4]=N-v*g,i[8]=T*g+y,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-m*x,i[6]=y*g+T,i[10]=v-N*g}else if(t.order==="XZY"){const v=h*p,y=h*m,T=d*p,N=d*m;i[0]=p*x,i[4]=-g,i[8]=m*x,i[1]=v*g+N,i[5]=h*x,i[9]=y*g-T,i[2]=T*g-y,i[6]=d*x,i[10]=N*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wb,t,jb)}lookAt(t,i,s){const l=this.elements;return pi.subVectors(t,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),gs.crossVectors(s,pi),gs.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),gs.crossVectors(s,pi)),gs.normalize(),iu.crossVectors(pi,gs),l[0]=gs.x,l[4]=iu.x,l[8]=pi.x,l[1]=gs.y,l[5]=iu.y,l[9]=pi.y,l[2]=gs.z,l[6]=iu.z,l[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],x=s[1],g=s[5],v=s[9],y=s[13],T=s[2],N=s[6],M=s[10],S=s[14],I=s[3],B=s[7],C=s[11],L=s[15],w=l[0],D=l[4],b=l[8],P=l[12],H=l[1],j=l[5],Q=l[9],J=l[13],X=l[2],Z=l[6],V=l[10],W=l[14],at=l[3],ot=l[7],ft=l[11],St=l[15];return u[0]=h*w+d*H+p*X+m*at,u[4]=h*D+d*j+p*Z+m*ot,u[8]=h*b+d*Q+p*V+m*ft,u[12]=h*P+d*J+p*W+m*St,u[1]=x*w+g*H+v*X+y*at,u[5]=x*D+g*j+v*Z+y*ot,u[9]=x*b+g*Q+v*V+y*ft,u[13]=x*P+g*J+v*W+y*St,u[2]=T*w+N*H+M*X+S*at,u[6]=T*D+N*j+M*Z+S*ot,u[10]=T*b+N*Q+M*V+S*ft,u[14]=T*P+N*J+M*W+S*St,u[3]=I*w+B*H+C*X+L*at,u[7]=I*D+B*j+C*Z+L*ot,u[11]=I*b+B*Q+C*V+L*ft,u[15]=I*P+B*J+C*W+L*St,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],x=t[2],g=t[6],v=t[10],y=t[14],T=t[3],N=t[7],M=t[11],S=t[15],I=p*y-m*v,B=d*y-m*g,C=d*v-p*g,L=h*y-m*x,w=h*v-p*x,D=h*g-d*x;return i*(N*I-M*B+S*C)-s*(T*I-M*L+S*w)+l*(T*B-N*L+S*D)-u*(T*C-N*w+M*D)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],x=t[10];return i*(h*x-d*m)-s*(u*x-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],x=t[8],g=t[9],v=t[10],y=t[11],T=t[12],N=t[13],M=t[14],S=t[15],I=i*d-s*h,B=i*p-l*h,C=i*m-u*h,L=s*p-l*d,w=s*m-u*d,D=l*m-u*p,b=x*N-g*T,P=x*M-v*T,H=x*S-y*T,j=g*M-v*N,Q=g*S-y*N,J=v*S-y*M,X=I*J-B*Q+C*j+L*H-w*P+D*b;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/X;return t[0]=(d*J-p*Q+m*j)*Z,t[1]=(l*Q-s*J-u*j)*Z,t[2]=(N*D-M*w+S*L)*Z,t[3]=(v*w-g*D-y*L)*Z,t[4]=(p*H-h*J-m*P)*Z,t[5]=(i*J-l*H+u*P)*Z,t[6]=(M*C-T*D-S*B)*Z,t[7]=(x*D-v*C+y*B)*Z,t[8]=(h*Q-d*H+m*b)*Z,t[9]=(s*H-i*Q-u*b)*Z,t[10]=(T*w-N*C+S*I)*Z,t[11]=(g*C-x*w-y*I)*Z,t[12]=(d*P-h*j-p*b)*Z,t[13]=(i*j-s*P+l*b)*Z,t[14]=(N*B-T*L-M*I)*Z,t[15]=(x*L-g*B+v*I)*Z,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,x=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,x*d+s,x*p-l*h,0,m*p-l*d,x*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,x=h+h,g=d+d,v=u*m,y=u*x,T=u*g,N=h*x,M=h*g,S=d*g,I=p*m,B=p*x,C=p*g,L=s.x,w=s.y,D=s.z;return l[0]=(1-(N+S))*L,l[1]=(y+C)*L,l[2]=(T-B)*L,l[3]=0,l[4]=(y-C)*w,l[5]=(1-(v+S))*w,l[6]=(M+I)*w,l[7]=0,l[8]=(T+B)*D,l[9]=(M-I)*D,l[10]=(1-(v+N))*D,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let h=Wr.set(l[0],l[1],l[2]).length();const d=Wr.set(l[4],l[5],l[6]).length(),p=Wr.set(l[8],l[9],l[10]).length();u<0&&(h=-h),zi.copy(this);const m=1/h,x=1/d,g=1/p;return zi.elements[0]*=m,zi.elements[1]*=m,zi.elements[2]*=m,zi.elements[4]*=x,zi.elements[5]*=x,zi.elements[6]*=x,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,i.setFromRotationMatrix(zi),s.x=h,s.y=d,s.z=p,this}makePerspective(t,i,s,l,u,h,d=oa,p=!1){const m=this.elements,x=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let T,N;if(p)T=u/(h-u),N=h*u/(h-u);else if(d===oa)T=-(h+u)/(h-u),N=-2*h*u/(h-u);else if(d===Dl)T=-h/(h-u),N=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=oa,p=!1){const m=this.elements,x=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,N;if(p)T=1/(h-u),N=h/(h-u);else if(d===oa)T=-2/(h-u),N=-(h+u)/(h-u);else if(d===Dl)T=-1/(h-u),N=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};qu.prototype.isMatrix4=!0;let an=qu;const Wr=new Y,zi=new an,Wb=new Y(0,0,0),jb=new Y(1,1,1),gs=new Y,iu=new Y,pi=new Y,$v=new an,tx=new Ms;class Es{constructor(t=0,i=0,s=0,l=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],x=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $v.makeRotationFromQuaternion(t),this.setFromRotationMatrix($v,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return tx.setFromEuler(this),this.setFromQuaternion(tx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zb=0;const ex=new Y,jr=new Ms,wa=new an,au=new Y,ml=new Y,Kb=new Y,Qb=new Ms,nx=new Y(1,0,0),ix=new Y(0,1,0),ax=new Y(0,0,1),sx={type:"added"},Jb={type:"removed"},Zr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class wn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Y,i=new Es,s=new Ms,l=new Y(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new _e}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return jr.setFromAxisAngle(t,i),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,i){return jr.setFromAxisAngle(t,i),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(nx,t)}rotateY(t){return this.rotateOnAxis(ix,t)}rotateZ(t){return this.rotateOnAxis(ax,t)}translateOnAxis(t,i){return ex.copy(t).applyQuaternion(this.quaternion),this.position.add(ex.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(nx,t)}translateY(t){return this.translateOnAxis(ix,t)}translateZ(t){return this.translateOnAxis(ax,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?au.copy(t):au.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(ml,au,this.up):wa.lookAt(au,ml,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),jr.setFromRotationMatrix(wa),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sx),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Jb),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sx),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,t,Kb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,Qb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),x=h(t.images),g=h(t.shapes),v=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wn.DEFAULT_UP=new Y(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ia extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),S=this._getHandJoint(m,N);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,T=.005;m.inputState.pinching&&v>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($b)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ia;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const TS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},su={h:0,s:0,l:0};function Vd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ze.workingColorSpace){if(t=Fb(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Vd(h,u,t+1/3),this.g=Vd(h,u,t),this.b=Vd(h,u,t-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(u){u!==void 0&&parseFloat(u)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=TS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ze.workingToColorSpace(Hn.copy(this),t),Math.round(Ae(Hn.r*255,0,255))*65536+Math.round(Ae(Hn.g*255,0,255))*256+Math.round(Ae(Hn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,u=Hn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const x=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=x<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=x,t}getRGB(t,i=ze.workingColorSpace){return ze.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=gi){ze.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,l=Hn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+i,_s.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(_s),t.getHSL(su);const s=Pd(_s.h,su.h,i),l=Pd(_s.s,su.s,i),u=Pd(_s.l,su.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new De;De.NAMES=TS;class t1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new Y,Da=new Y,kd=new Y,Na=new Y,Kr=new Y,Qr=new Y,rx=new Y,Xd=new Y,qd=new Y,Yd=new Y,Wd=new ln,jd=new ln,Zd=new ln;class Hi{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Bi.subVectors(l,i),Da.subVectors(s,i),kd.subVectors(t,i);const h=Bi.dot(Bi),d=Bi.dot(Da),p=Bi.dot(kd),m=Da.dot(Da),x=Da.dot(kd),g=h*m-d*d;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(m*p-d*x)*v,T=(h*x-d*p)*v;return u.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Na.x),p.addScaledVector(h,Na.y),p.addScaledVector(d,Na.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return Wd.setScalar(0),jd.setScalar(0),Zd.setScalar(0),Wd.fromBufferAttribute(t,i),jd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Wd,u.x),h.addScaledVector(jd,u.y),h.addScaledVector(Zd,u.z),h}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),Da.subVectors(t,i),Bi.cross(Da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Bi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Hi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Kr.subVectors(l,s),Qr.subVectors(u,s),Xd.subVectors(t,s);const p=Kr.dot(Xd),m=Qr.dot(Xd);if(p<=0&&m<=0)return i.copy(s);qd.subVectors(t,l);const x=Kr.dot(qd),g=Qr.dot(qd);if(x>=0&&g<=x)return i.copy(l);const v=p*g-x*m;if(v<=0&&p>=0&&x<=0)return h=p/(p-x),i.copy(s).addScaledVector(Kr,h);Yd.subVectors(t,u);const y=Kr.dot(Yd),T=Qr.dot(Yd);if(T>=0&&y<=T)return i.copy(u);const N=y*m-p*T;if(N<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(Qr,d);const M=x*T-y*g;if(M<=0&&g-x>=0&&y-T>=0)return rx.subVectors(u,l),d=(g-x)/(g-x+(y-T)),i.copy(l).addScaledVector(rx,d);const S=1/(M+N+v);return h=N*S,d=v*S,i.copy(s).addScaledVector(Kr,h).addScaledVector(Qr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ll{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Fi):Fi.fromBufferAttribute(u,h),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ru.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ru.copy(s.boundingBox)),ru.applyMatrix4(t.matrixWorld),this.union(ru)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gl),ou.subVectors(this.max,gl),Jr.subVectors(t.a,gl),$r.subVectors(t.b,gl),to.subVectors(t.c,gl),vs.subVectors($r,Jr),xs.subVectors(to,$r),js.subVectors(Jr,to);let i=[0,-vs.z,vs.y,0,-xs.z,xs.y,0,-js.z,js.y,vs.z,0,-vs.x,xs.z,0,-xs.x,js.z,0,-js.x,-vs.y,vs.x,0,-xs.y,xs.x,0,-js.y,js.x,0];return!Kd(i,Jr,$r,to,ou)||(i=[1,0,0,0,1,0,0,0,1],!Kd(i,Jr,$r,to,ou))?!1:(lu.crossVectors(vs,xs),i=[lu.x,lu.y,lu.z],Kd(i,Jr,$r,to,ou))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ua=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fi=new Y,ru=new Ll,Jr=new Y,$r=new Y,to=new Y,vs=new Y,xs=new Y,js=new Y,gl=new Y,ou=new Y,lu=new Y,Zs=new Y;function Kd(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Zs.fromArray(o,u);const d=l.x*Math.abs(Zs.x)+l.y*Math.abs(Zs.y)+l.z*Math.abs(Zs.z),p=t.dot(Zs),m=i.dot(Zs),x=s.dot(Zs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const xn=new Y,cu=new Jt;let e1=0;class Ha extends bs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ob,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cu.fromBufferAttribute(this,i),cu.applyMatrix3(t),this.setXY(i,cu.x,cu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=pl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=pl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=pl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=pl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=pl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),u=ti(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class AS extends Ha{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class RS extends Ha{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class dn extends Ha{constructor(t,i,s){super(new Float32Array(t),i,s)}}const n1=new Ll,_l=new Y,Qd=new Y;class Wu{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):n1.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_l.subVectors(t,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_l,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_l.copy(t.center).add(Qd)),this.expandByPoint(_l.copy(t.center).sub(Qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let i1=0;const wi=new an,Jd=new wn,eo=new Y,mi=new Ll,vl=new Ll,Cn=new Y;class ii extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pb(t)?RS:AS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new _e().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return Jd.lookAt(t),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];mi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(mi.min,vl.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,vl.max),mi.expandByPoint(Cn)):(mi.expandByPoint(vl.min),mi.expandByPoint(vl.max))}mi.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)Cn.fromBufferAttribute(d,m),p&&(eo.fromBufferAttribute(t,m),Cn.add(eo)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Ha(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let b=0;b<s.count;b++)d[b]=new Y,p[b]=new Y;const m=new Y,x=new Y,g=new Y,v=new Jt,y=new Jt,T=new Jt,N=new Y,M=new Y;function S(b,P,H){m.fromBufferAttribute(s,b),x.fromBufferAttribute(s,P),g.fromBufferAttribute(s,H),v.fromBufferAttribute(u,b),y.fromBufferAttribute(u,P),T.fromBufferAttribute(u,H),x.sub(m),g.sub(m),y.sub(v),T.sub(v);const j=1/(y.x*T.y-T.x*y.y);isFinite(j)&&(N.copy(x).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(j),M.copy(g).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(j),d[b].add(N),d[P].add(N),d[H].add(N),p[b].add(M),p[P].add(M),p[H].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let b=0,P=I.length;b<P;++b){const H=I[b],j=H.start,Q=H.count;for(let J=j,X=j+Q;J<X;J+=3)S(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const B=new Y,C=new Y,L=new Y,w=new Y;function D(b){L.fromBufferAttribute(l,b),w.copy(L);const P=d[b];B.copy(P),B.sub(L.multiplyScalar(L.dot(P))).normalize(),C.crossVectors(w,P);const j=C.dot(p[b])<0?-1:1;h.setXYZW(b,B.x,B.y,B.z,j)}for(let b=0,P=I.length;b<P;++b){const H=I[b],j=H.start,Q=H.count;for(let J=j,X=j+Q;J<X;J+=3)D(t.getX(J+0)),D(t.getX(J+1)),D(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new Y,u=new Y,h=new Y,d=new Y,p=new Y,m=new Y,x=new Y,g=new Y;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),N=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,M),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),d.add(x),p.add(x),m.add(x),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(N,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,p){const m=d.array,x=d.itemSize,g=d.normalized,v=new m.constructor(p.length*x);let y=0,T=0;for(let N=0,M=p.length;N<M;N++){d.isInterleavedBufferAttribute?y=p[N]*d.data.stride+d.offset:y=p[N]*x;for(let S=0;S<x;S++)v[T++]=m[y++]}return new Ha(v,x,g)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let x=0,g=m.length;x<g;x++){const v=m[x],y=t(v,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];x.push(y.toJSON(t.data))}x.length>0&&(l[p]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const u=t.morphAttributes;for(const m in u){const x=[],g=u[m];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,x=h.length;m<x;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new Y,a1=new Y,s1=new _e;class Oa{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$d.subVectors(s,i).cross(a1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta($d),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||s1.getNormalMatrix(t),l=this.coplanarPoint($d).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let r1=0;class mo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=bl,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sS,this.blendDst=rS,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Od,this.stencilZFail=Od,this.stencilZPass=Od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new De().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Oa().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Jt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const La=new Y,tp=new Y,uu=new Y,fu=new Y;class ju{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,La)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=La.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(La.copy(this.origin).addScaledVector(this.direction,i),La.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){tp.copy(t).add(i).multiplyScalar(.5),uu.copy(i).sub(t).normalize(),fu.copy(this.origin).sub(tp);const u=t.distanceTo(i)*.5,h=-this.direction.dot(uu),d=fu.dot(this.direction),p=-fu.dot(uu),m=fu.lengthSq(),x=Math.abs(1-h*h);let g,v,y,T;if(x>0)if(g=h*p-d,v=h*d-p,T=u*x,g>=0)if(v>=-T)if(v<=T){const N=1/x;g*=N,v*=N,y=g*(g+h*v+2*d)+v*(h*g+v+2*p)+m}else v=u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v=-u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v<=-T?(g=Math.max(0,-(-h*u+d)),v=g>0?-u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+m):v<=T?(g=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+m):(g=Math.max(0,-(h*u+d)),v=g>0?u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+m);else v=h>0?-u:u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(tp).addScaledVector(uu,v),y}intersectSphere(t,i){if(t.radius<0)return null;La.subVectors(t.center,this.origin);const s=La.dot(this.direction),l=La.dot(La)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),x>=0?(u=(t.min.y-v.y)*x,h=(t.max.y-v.y)*x):(u=(t.max.y-v.y)*x,h=(t.min.y-v.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(d=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,La)!==null}intersectTriangle(t,i,s,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,g=t.x-h.x,v=t.y-h.y,y=t.z-h.z,T=i.x-h.x,N=i.y-h.y,M=i.z-h.z,S=s.x-h.x,I=s.y-h.y,B=s.z-h.z,C=Math.abs(p),L=Math.abs(m),w=Math.abs(x);let D,b,P,H,j,Q,J,X,Z,V,W,at;if(C>=L&&C>=w?(P=p,Q=g,Z=T,at=S,p>=0?(D=m,b=x,H=v,j=y,J=N,X=M,V=I,W=B):(D=x,b=m,H=y,j=v,J=M,X=N,V=B,W=I)):L>=w?(P=m,Q=v,Z=N,at=I,m>=0?(D=x,b=p,H=y,j=g,J=M,X=T,V=B,W=S):(D=p,b=x,H=g,j=y,J=T,X=M,V=S,W=B)):(P=x,Q=y,Z=M,at=B,x>=0?(D=p,b=m,H=g,j=v,J=T,X=N,V=S,W=I):(D=m,b=p,H=v,j=g,J=N,X=T,V=I,W=S)),P===0)return null;const ot=D/P,ft=b/P,St=1/P,Kt=H-ot*Q,Ft=j-ft*Q,F=J-ot*Z,_t=X-ft*Z,Ct=V-ot*at,et=W-ft*at,mt=Ct*_t-et*F,At=Kt*et-Ft*Ct,It=F*Ft-_t*Kt;if(l){if(mt<0||At<0||It<0)return null}else if((mt<0||At<0||It<0)&&(mt>0||At>0||It>0))return null;const gt=mt+At+It;if(gt===0)return null;const wt=St*(mt*Q+At*Z+It*at);return(gt>0?wt<0:wt>0)?null:this.at(wt/gt,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class CS extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=oS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ox=new an,Ks=new ju,hu=new Wu,lx=new Y,du=new Y,pu=new Y,mu=new Y,ep=new Y,gu=new Y,cx=new Y,_u=new Y;class fa extends wn{constructor(t=new ii,i=new CS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){gu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const x=d[p],g=u[p];x!==0&&(ep.fromBufferAttribute(g,t),h?gu.addScaledVector(ep,x):gu.addScaledVector(ep.sub(i),x))}i.add(gu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(u),Ks.copy(t.ray).recast(t.near),!(hu.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(hu,lx)===null||Ks.origin.distanceToSquared(lx)>(t.far-t.near)**2))&&(ox.copy(u).invert(),Ks.copy(t.ray).applyMatrix4(ox),!(s.boundingBox!==null&&Ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ks)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,x=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,N=v.length;T<N;T++){const M=v[T],S=h[M.materialIndex],I=Math.max(M.start,y.start),B=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,L=B;C<L;C+=3){const w=d.getX(C),D=d.getX(C+1),b=d.getX(C+2);l=vu(this,S,t,s,m,x,g,w,D,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),N=Math.min(d.count,y.start+y.count);for(let M=T,S=N;M<S;M+=3){const I=d.getX(M),B=d.getX(M+1),C=d.getX(M+2);l=vu(this,h,t,s,m,x,g,I,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,N=v.length;T<N;T++){const M=v[T],S=h[M.materialIndex],I=Math.max(M.start,y.start),B=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,L=B;C<L;C+=3){const w=C,D=C+1,b=C+2;l=vu(this,S,t,s,m,x,g,w,D,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),N=Math.min(p.count,y.start+y.count);for(let M=T,S=N;M<S;M+=3){const I=M,B=M+1,C=M+2;l=vu(this,h,t,s,m,x,g,I,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function o1(o,t,i,s,l,u,h,d){let p;if(t.side===ni?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===nr,d),p===null)return null;_u.copy(d),_u.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(_u);return m<i.near||m>i.far?null:{distance:m,point:_u.clone(),object:o}}function vu(o,t,i,s,l,u,h,d,p,m){o.getVertexPosition(d,du),o.getVertexPosition(p,pu),o.getVertexPosition(m,mu);const x=o1(o,t,i,s,du,pu,mu,cx);if(x){const g=new Y;Hi.getBarycoord(cx,du,pu,mu,g),l&&(x.uv=Hi.getInterpolatedAttribute(l,d,p,m,g,new Jt)),u&&(x.uv1=Hi.getInterpolatedAttribute(u,d,p,m,g,new Jt)),h&&(x.normal=Hi.getInterpolatedAttribute(h,d,p,m,g,new Y),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new Y,materialIndex:0};Hi.getNormal(du,pu,mu,v.normal),x.face=v,x.barycoord=g}return x}class l1 extends jn{constructor(t=null,i=1,s=1,l,u,h,d,p,m=In,x=In,g,v){super(null,h,d,p,m,x,l,u,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qs=new Wu,c1=new Jt(.5,.5),xu=new Y;class _m{constructor(t=new Oa,i=new Oa,s=new Oa,l=new Oa,u=new Oa,h=new Oa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],x=u[4],g=u[5],v=u[6],y=u[7],T=u[8],N=u[9],M=u[10],S=u[11],I=u[12],B=u[13],C=u[14],L=u[15];if(l[0].setComponents(m-h,y-x,S-T,L-I).normalize(),l[1].setComponents(m+h,y+x,S+T,L+I).normalize(),l[2].setComponents(m+d,y+g,S+N,L+B).normalize(),l[3].setComponents(m-d,y-g,S-N,L-B).normalize(),s)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,y-v,S-M,L-C).normalize();else if(l[4].setComponents(m-p,y-v,S-M,L-C).normalize(),i===oa)l[5].setComponents(m+p,y+v,S+M,L+C).normalize();else if(i===Dl)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const i=c1.distanceTo(t.center);return Qs.radius=.7071067811865476+i,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xu.x=l.normal.x>0?t.max.x:t.min.x,xu.y=l.normal.y>0?t.max.y:t.min.y,xu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wS extends mo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gu=new Y,Vu=new Y,ux=new an,xl=new ju,Su=new Wu,np=new Y,fx=new Y;class u1 extends wn{constructor(t=new ii,i=new wS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Gu.fromBufferAttribute(i,l-1),Vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gu.distanceTo(Vu);t.setAttribute("lineDistance",new dn(s,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Su.copy(s.boundingSphere),Su.applyMatrix4(l),Su.radius+=u,t.ray.intersectsSphere(Su)===!1)return;ux.copy(l).invert(),xl.copy(t.ray).applyMatrix4(ux);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const y=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let N=y,M=T-1;N<M;N+=m){const S=x.getX(N),I=x.getX(N+1),B=yu(this,t,xl,p,S,I,N);B&&i.push(B)}if(this.isLineLoop){const N=x.getX(T-1),M=x.getX(y),S=yu(this,t,xl,p,N,M,T-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let N=y,M=T-1;N<M;N+=m){const S=yu(this,t,xl,p,N,N+1,N);S&&i.push(S)}if(this.isLineLoop){const N=yu(this,t,xl,p,T-1,y,T-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function yu(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Gu.fromBufferAttribute(d,l),Vu.fromBufferAttribute(d,u),i.distanceSqToSegment(Gu,Vu,np,fx)>s)return;np.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(np);if(!(m<t.near||m>t.far))return{distance:m,point:fx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const hx=new Y,dx=new Y;class f1 extends u1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)hx.fromBufferAttribute(i,l),dx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+hx.distanceTo(dx);t.setAttribute("lineDistance",new dn(s,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DS extends jn{constructor(t=[],i=ir,s,l,u,h,d,p,m,x){super(t,i,s,l,u,h,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nl extends jn{constructor(t,i,s=ca,l,u,h,d=In,p=In,m,x=Ga,g=1){if(x!==Ga&&x!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,u,h,d,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class h1 extends Nl{constructor(t,i=ca,s=ir,l,u,h=In,d=In,p,m=Ga){const x={width:t,height:t,depth:1},g=[x,x,x,x,x,x];super(t,t,i,s,l,u,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class NS extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class go extends ii{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],x=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new dn(m,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(g,2));function T(N,M,S,I,B,C,L,w,D,b,P){const H=C/D,j=L/b,Q=C/2,J=L/2,X=w/2,Z=D+1,V=b+1;let W=0,at=0;const ot=new Y;for(let ft=0;ft<V;ft++){const St=ft*j-J;for(let Kt=0;Kt<Z;Kt++){const Ft=Kt*H-Q;ot[N]=Ft*I,ot[M]=St*B,ot[S]=X,m.push(ot.x,ot.y,ot.z),ot[N]=0,ot[M]=0,ot[S]=w>0?1:-1,x.push(ot.x,ot.y,ot.z),g.push(Kt/D),g.push(1-ft/b),W+=1}}for(let ft=0;ft<b;ft++)for(let St=0;St<D;St++){const Kt=v+St+Z*ft,Ft=v+St+Z*(ft+1),F=v+(St+1)+Z*(ft+1),_t=v+(St+1)+Z*ft;p.push(Kt,Ft,_t),p.push(Ft,F,_t),at+=6}d.addGroup(y,at,P),y+=at,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class vm extends ii{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const x=[],g=[],v=[],y=[];let T=0;const N=[],M=s/2;let S=0;I(),h===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(x),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(y,2));function I(){const C=new Y,L=new Y;let w=0;const D=(i-t)/s;for(let b=0;b<=u;b++){const P=[],H=b/u,j=H*(i-t)+t;for(let Q=0;Q<=l;Q++){const J=Q/l,X=J*p+d,Z=Math.sin(X),V=Math.cos(X);L.x=j*Z,L.y=-H*s+M,L.z=j*V,g.push(L.x,L.y,L.z),C.set(Z,D,V).normalize(),v.push(C.x,C.y,C.z),y.push(J,1-H),P.push(T++)}N.push(P)}for(let b=0;b<l;b++)for(let P=0;P<u;P++){const H=N[P][b],j=N[P+1][b],Q=N[P+1][b+1],J=N[P][b+1];(t>0||P!==0)&&(x.push(H,j,J),w+=3),(i>0||P!==u-1)&&(x.push(j,Q,J),w+=3)}m.addGroup(S,w,0),S+=w}function B(C){const L=T,w=new Jt,D=new Y;let b=0;const P=C===!0?t:i,H=C===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,M*H,0),v.push(0,H,0),y.push(.5,.5),T++;const j=T;for(let Q=0;Q<=l;Q++){const X=Q/l*p+d,Z=Math.cos(X),V=Math.sin(X);D.x=P*V,D.y=M*H,D.z=P*Z,g.push(D.x,D.y,D.z),v.push(0,H,0),w.x=Z*.5+.5,w.y=V*.5*H+.5,y.push(w.x,w.y),T++}for(let Q=0;Q<l;Q++){const J=L+Q,X=j+Q;C===!0?x.push(X,X+1,J):x.push(X+1,X,J),b+=3}m.addGroup(S,b,C===!0?1:2),S+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ue("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=t*s[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const x=s[l],v=s[l+1]-x,y=(h-x)/v;return(l+y)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Jt:new Y);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Y,l=[],u=[],h=[],d=new Y,p=new an;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new Y)}u[0]=new Y,h[0]=new Y;let m=Number.MAX_VALUE;const x=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);x<=m&&(m=x,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),v<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let y=1;y<=t;y++){if(u[y]=u[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Ae(l[y-1].dot(l[y]),-1,1));u[y].applyMatrix4(p.makeRotationAxis(d,T))}h[y].crossVectors(l[y],u[y])}if(i===!0){let y=Math.acos(Ae(u[0].dot(u[t]),-1,1));y/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(y=-y);for(let T=1;T<=t;T++)u[T].applyMatrix4(p.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],u[T])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class US extends da{constructor(t=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Jt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=p-this.aX,y=m-this.aY;p=v*x-y*g+this.aX,m=v*g+y*x+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class d1 extends US{constructor(t,i,s,l,u,h){super(t,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function xm(){let o=0,t=0,i=0,s=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,m){l(h,d,m*(d-u),m*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,m,x,g){let v=(h-u)/m-(d-u)/(m+x)+(d-h)/x,y=(d-h)/x-(p-h)/(x+g)+(p-d)/g;v*=x,y*=x,l(h,d,v,y)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+s*d}}}const px=new Y,mx=new Y,ip=new xm,ap=new xm,sp=new xm;class p1 extends da{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Y){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,x;this.closed||d>0?m=l[(d-1)%u]:(mx.subVectors(l[0],l[1]).add(l[0]),m=mx);const g=l[d%u],v=l[(d+1)%u];if(this.closed||d+2<u?x=l[(d+2)%u]:(px.subVectors(l[u-1],l[u-2]).add(l[u-1]),x=px),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(g),y),N=Math.pow(g.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(x),y);N<1e-4&&(N=1),T<1e-4&&(T=N),M<1e-4&&(M=N),ip.initNonuniformCatmullRom(m.x,g.x,v.x,x.x,T,N,M),ap.initNonuniformCatmullRom(m.y,g.y,v.y,x.y,T,N,M),sp.initNonuniformCatmullRom(m.z,g.z,v.z,x.z,T,N,M)}else this.curveType==="catmullrom"&&(ip.initCatmullRom(m.x,g.x,v.x,x.x,this.tension),ap.initCatmullRom(m.y,g.y,v.y,x.y,this.tension),sp.initCatmullRom(m.z,g.z,v.z,x.z,this.tension));return s.set(ip.calc(p),ap.calc(p),sp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gx(o,t,i,s,l){const u=(s-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function m1(o,t){const i=1-o;return i*i*t}function g1(o,t){return 2*(1-o)*o*t}function _1(o,t){return o*o*t}function Tl(o,t,i,s){return m1(o,t)+g1(o,i)+_1(o,s)}function v1(o,t){const i=1-o;return i*i*i*t}function x1(o,t){const i=1-o;return 3*i*i*o*t}function S1(o,t){return 3*(1-o)*o*o*t}function y1(o,t){return o*o*o*t}function Al(o,t,i,s,l){return v1(o,t)+x1(o,i)+S1(o,s)+y1(o,l)}class M1 extends da{constructor(t=new Jt,i=new Jt,s=new Jt,l=new Jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Jt){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Al(t,l.x,u.x,h.x,d.x),Al(t,l.y,u.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E1 extends da{constructor(t=new Y,i=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Y){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Al(t,l.x,u.x,h.x,d.x),Al(t,l.y,u.y,h.y,d.y),Al(t,l.z,u.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class b1 extends da{constructor(t=new Jt,i=new Jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Jt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Jt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T1 extends da{constructor(t=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Y){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A1 extends da{constructor(t=new Jt,i=new Jt,s=new Jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Jt){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Tl(t,l.x,u.x,h.x),Tl(t,l.y,u.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class LS extends da{constructor(t=new Y,i=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Y){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Tl(t,l.x,u.x,h.x),Tl(t,l.y,u.y,h.y),Tl(t,l.z,u.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R1 extends da{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Jt){const s=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],m=l[h],x=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return s.set(gx(d,p.x,m.x,x.x,g.x),gx(d,p.y,m.y,x.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Jt().fromArray(l))}return this}}var C1=Object.freeze({__proto__:null,ArcCurve:d1,CatmullRomCurve3:p1,CubicBezierCurve:M1,CubicBezierCurve3:E1,EllipseCurve:US,LineCurve:b1,LineCurve3:T1,QuadraticBezierCurve:A1,QuadraticBezierCurve3:LS,SplineCurve:R1});class Zu extends ii{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,x=p+1,g=t/d,v=i/p,y=[],T=[],N=[],M=[];for(let S=0;S<x;S++){const I=S*v-h;for(let B=0;B<m;B++){const C=B*g-u;T.push(C,-I,0),N.push(0,0,1),M.push(B/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let I=0;I<d;I++){const B=I+m*S,C=I+m*(S+1),L=I+1+m*(S+1),w=I+1+m*S;y.push(B,C,w),y.push(C,L,w)}this.setIndex(y),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(N,3)),this.setAttribute("uv",new dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.width,t.height,t.widthSegments,t.heightSegments)}}class ku extends ii{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],x=[],g=[],v=new Y,y=new Y,T=new Y;for(let N=0;N<=s;N++){const M=h+N/s*d;for(let S=0;S<=l;S++){const I=S/l*u;y.x=(t+i*Math.cos(M))*Math.cos(I),y.y=(t+i*Math.cos(M))*Math.sin(I),y.z=i*Math.sin(M),m.push(y.x,y.y,y.z),v.x=t*Math.cos(I),v.y=t*Math.sin(I),T.subVectors(y,v).normalize(),x.push(T.x,T.y,T.z),g.push(S/l),g.push(N/s)}}for(let N=1;N<=s;N++)for(let M=1;M<=l;M++){const S=(l+1)*N+M-1,I=(l+1)*(N-1)+M-1,B=(l+1)*(N-1)+M,C=(l+1)*N+M;p.push(S,I,C),p.push(I,B,C)}this.setIndex(p),this.setAttribute("position",new dn(m,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Xu extends ii{constructor(t=new LS(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new Y,p=new Y,m=new Jt;let x=new Y;const g=[],v=[],y=[],T=[];N(),this.setIndex(T),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(y,2));function N(){for(let B=0;B<i;B++)M(B);M(u===!1?i:0),I(),S()}function M(B){x=t.getPointAt(B/i,x);const C=h.normals[B],L=h.binormals[B];for(let w=0;w<=l;w++){const D=w/l*Math.PI*2,b=Math.sin(D),P=-Math.cos(D);p.x=P*C.x+b*L.x,p.y=P*C.y+b*L.y,p.z=P*C.z+b*L.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=x.x+s*p.x,d.y=x.y+s*p.y,d.z=x.z+s*p.z,g.push(d.x,d.y,d.z)}}function S(){for(let B=1;B<=i;B++)for(let C=1;C<=l;C++){const L=(l+1)*(B-1)+(C-1),w=(l+1)*B+(C-1),D=(l+1)*B+C,b=(l+1)*(B-1)+C;T.push(L,w,b),T.push(w,D,b)}}function I(){for(let B=0;B<=i;B++)for(let C=0;C<=l;C++)m.x=B/i,m.y=C/l,y.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xu(new C1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function po(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(_x(l))l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(_x(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Wn(o){const t={};for(let i=0;i<o.length;i++){const s=po(o[i]);for(const l in s)t[l]=s[l]}return t}function _x(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function w1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function OS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const D1={clone:po,merge:Wn};var N1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N1,this.fragmentShader=U1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=po(t.uniforms),this.uniformsGroups=w1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new De().setHex(l.value);break;case"v2":this.uniforms[s].value=new Jt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Y().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new _e().fromArray(l.value);break;case"m4":this.uniforms[s].value=new an().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class L1 extends ha{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O1 extends mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tm,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class P1 extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I1 extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class PS extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class z1 extends PS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const rp=new an,vx=new Y,xx=new Y;class B1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;vx.setFromMatrixPosition(t.matrixWorld),i.position.copy(vx),xx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(xx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(rp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Dl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mu=new Y,Eu=new Ms,ia=new Y;class IS extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mu,Eu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,Eu,ia.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Mu,Eu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,Eu,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new Y,Sx=new Jt,yx=new Jt;class Di extends IS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=em*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return em*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,i){return this.getViewBounds(t,Sx,yx),i.subVectors(yx,Sx)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Lu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Sm extends IS{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class F1 extends B1{constructor(){super(new Sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H1 extends PS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new F1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const no=-90,io=1;class G1 extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(no,io,t,i);l.layers=this.layers,this.add(l);const u=new Di(no,io,t,i);u.layers=this.layers,this.add(u);const h=new Di(no,io,t,i);h.layers=this.layers,this.add(h);const d=new Di(no,io,t,i);d.layers=this.layers,this.add(d);const p=new Di(no,io,t,i);p.layers=this.layers,this.add(p);const m=new Di(no,io,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(g,v,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class V1 extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Mx=new an;class k1{constructor(t,i,s=0,l=1/0){this.ray=new ju(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new gm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):He("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Mx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mx),this}intersectObject(t,i=!0,s=[]){return nm(t,this,s,i),s.sort(Ex),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)nm(t[l],this,s,i);return s.sort(Ex),s}}function Ex(o,t){return o.distance-t.distance}function nm(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)nm(u[h],t,i,!0)}}class bx{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ae(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Am=class Am{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};Am.prototype.isMatrix2=!0;let Tx=Am;class X1 extends f1{constructor(t=10,i=10,s=4473924,l=8947848){s=new De(s),l=new De(l);const u=i/2,h=t/i,d=t/2,p=[],m=[];for(let v=0,y=0,T=-d;v<=i;v++,T+=h){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const N=v===u?s:l;N.toArray(m,y),y+=3,N.toArray(m,y),y+=3,N.toArray(m,y),y+=3,N.toArray(m,y),y+=3}const x=new ii;x.setAttribute("position",new dn(p,3)),x.setAttribute("color",new dn(m,3));const g=new wS({vertexColors:!0,toneMapped:!1});super(x,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class q1 extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ax(o,t,i,s){const l=Y1(s);switch(i){case SS:return o*t;case MS:return o*t/l.components*l.byteLength;case um:return o*t/l.components*l.byteLength;case ar:return o*t*2/l.components*l.byteLength;case fm:return o*t*2/l.components*l.byteLength;case yS:return o*t*3/l.components*l.byteLength;case Gi:return o*t*4/l.components*l.byteLength;case hm:return o*t*4/l.components*l.byteLength;case wu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Uu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tp:case Rp:return Math.max(o,16)*Math.max(t,8)/4;case bp:case Ap:return Math.max(o,8)*Math.max(t,8)/2;case Cp:case wp:case Np:case Up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Dp:case Iu:case Lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case kp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case qp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Yp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Wp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case jp:case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Qp:case Jp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zu:case $p:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Y1(o){switch(o){case _i:case gS:return{byteLength:1,components:1};case Cl:case _S:case ua:return{byteLength:2,components:1};case lm:case cm:return{byteLength:2,components:4};case ca:case om:case ra:return{byteLength:4,components:1};case vS:case xS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rm}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rm);function zS(){let o=null,t=!1,i=null,s=null;function l(u,h){s=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function W1(o){const t=new WeakMap;function i(d,p){const m=d.array,x=d.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const x=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,x);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],N=g[y];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++v,g[v]=N)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const N=g[y];o.bufferSubData(m,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,HT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:j1,alphahash_pars_fragment:Z1,alphamap_fragment:K1,alphamap_pars_fragment:Q1,alphatest_fragment:J1,alphatest_pars_fragment:$1,aomap_fragment:tT,aomap_pars_fragment:eT,batching_pars_vertex:nT,batching_vertex:iT,begin_vertex:aT,beginnormal_vertex:sT,bsdfs:rT,iridescence_fragment:oT,bumpmap_pars_fragment:lT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:fT,clipping_planes_vertex:hT,color_fragment:dT,color_pars_fragment:pT,color_pars_vertex:mT,color_vertex:gT,common:_T,cube_uv_reflection_fragment:vT,defaultnormal_vertex:xT,displacementmap_pars_vertex:ST,displacementmap_vertex:yT,emissivemap_fragment:MT,emissivemap_pars_fragment:ET,colorspace_fragment:bT,colorspace_pars_fragment:TT,envmap_fragment:AT,envmap_common_pars_fragment:RT,envmap_pars_fragment:CT,envmap_pars_vertex:wT,envmap_physical_pars_fragment:HT,envmap_vertex:DT,fog_vertex:NT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:OT,gradientmap_pars_fragment:PT,lightmap_pars_fragment:IT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:BT,lights_pars_begin:FT,lights_toon_fragment:GT,lights_toon_pars_fragment:VT,lights_phong_fragment:kT,lights_phong_pars_fragment:XT,lights_physical_fragment:qT,lights_physical_pars_fragment:YT,lights_fragment_begin:WT,lights_fragment_maps:jT,lights_fragment_end:ZT,lightprobes_pars_fragment:KT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:tA,map_fragment:eA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:aA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:rA,morphinstance_vertex:oA,morphcolor_vertex:lA,morphnormal_vertex:cA,morphtarget_pars_vertex:uA,morphtarget_vertex:fA,normal_fragment_begin:hA,normal_fragment_maps:dA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:_A,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:SA,iridescence_pars_fragment:yA,opaque_fragment:MA,packing:EA,premultiplied_alpha_fragment:bA,project_vertex:TA,dithering_fragment:AA,dithering_pars_fragment:RA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:NA,shadowmap_vertex:UA,shadowmask_pars_fragment:LA,skinbase_vertex:OA,skinning_pars_vertex:PA,skinning_vertex:IA,skinnormal_vertex:zA,specularmap_fragment:BA,specularmap_pars_fragment:FA,tonemapping_fragment:HA,tonemapping_pars_fragment:GA,transmission_fragment:VA,transmission_pars_fragment:kA,uv_pars_fragment:XA,uv_pars_vertex:qA,uv_vertex:YA,worldpos_vertex:WA,background_vert:jA,background_frag:ZA,backgroundCube_vert:KA,backgroundCube_frag:QA,cube_vert:JA,cube_frag:$A,depth_vert:tR,depth_frag:eR,distance_vert:nR,distance_frag:iR,equirect_vert:aR,equirect_frag:sR,linedashed_vert:rR,linedashed_frag:oR,meshbasic_vert:lR,meshbasic_frag:cR,meshlambert_vert:uR,meshlambert_frag:fR,meshmatcap_vert:hR,meshmatcap_frag:dR,meshnormal_vert:pR,meshnormal_frag:mR,meshphong_vert:gR,meshphong_frag:_R,meshphysical_vert:vR,meshphysical_frag:xR,meshtoon_vert:SR,meshtoon_frag:yR,points_vert:MR,points_frag:ER,shadow_vert:bR,shadow_frag:TR,sprite_vert:AR,sprite_frag:RR},Vt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},sa={basic:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Wn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Wn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Wn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Wn([Vt.points,Vt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Wn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Wn([Vt.common,Vt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Wn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Wn([Vt.sprite,Vt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Wn([Vt.common,Vt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Wn([Vt.lights,Vt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};sa.physical={uniforms:Wn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const bu={r:0,b:0,g:0},CR=new an,BS=new _e;BS.set(-1,0,0,0,1,0,0,0,1);function wR(o,t,i,s,l,u){const h=new De(0);let d=l===!0?0:1,p,m,x=null,g=0,v=null;function y(I){let B=I.isScene===!0?I.background:null;if(B&&B.isTexture){const C=I.backgroundBlurriness>0;B=t.get(B,C)}return B}function T(I){let B=!1;const C=y(I);C===null?M(h,d):C&&C.isColor&&(M(C,1),B=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(I,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===Yu)?(m===void 0&&(m=new fa(new go(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:po(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CR.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(BS),m.material.toneMapped=ze.getTransfer(C.colorSpace)!==Ze,(x!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new fa(new Zu(2,2),new ha({name:"BackgroundMaterial",uniforms:po(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=ze.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function M(I,B){I.getRGB(bu,OS(o)),i.buffers.color.setClear(bu.r,bu.g,bu.b,B,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,B=1){h.set(I),d=B,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,M(h,d)},render:T,addToRenderList:N,dispose:S}}function DR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let u=l,h=!1;function d(j,Q,J,X,Z){let V=!1;const W=g(j,X,J,Q);u!==W&&(u=W,m(u.object)),V=y(j,X,J,Z),V&&T(j,X,J,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,C(j,Q,J,X),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return o.createVertexArray()}function m(j){return o.bindVertexArray(j)}function x(j){return o.deleteVertexArray(j)}function g(j,Q,J,X){const Z=X.wireframe===!0;let V=s[Q.id];V===void 0&&(V={},s[Q.id]=V);const W=j.isInstancedMesh===!0?j.id:0;let at=V[W];at===void 0&&(at={},V[W]=at);let ot=at[J.id];ot===void 0&&(ot={},at[J.id]=ot);let ft=ot[Z];return ft===void 0&&(ft=v(p()),ot[Z]=ft),ft}function v(j){const Q=[],J=[],X=[];for(let Z=0;Z<i;Z++)Q[Z]=0,J[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:J,attributeDivisors:X,object:j,attributes:{},index:null}}function y(j,Q,J,X){const Z=u.attributes,V=Q.attributes;let W=0;const at=J.getAttributes();for(const ot in at)if(at[ot].location>=0){const St=Z[ot];let Kt=V[ot];if(Kt===void 0&&(ot==="instanceMatrix"&&j.instanceMatrix&&(Kt=j.instanceMatrix),ot==="instanceColor"&&j.instanceColor&&(Kt=j.instanceColor)),St===void 0||St.attribute!==Kt||Kt&&St.data!==Kt.data)return!0;W++}return u.attributesNum!==W||u.index!==X}function T(j,Q,J,X){const Z={},V=Q.attributes;let W=0;const at=J.getAttributes();for(const ot in at)if(at[ot].location>=0){let St=V[ot];St===void 0&&(ot==="instanceMatrix"&&j.instanceMatrix&&(St=j.instanceMatrix),ot==="instanceColor"&&j.instanceColor&&(St=j.instanceColor));const Kt={};Kt.attribute=St,St&&St.data&&(Kt.data=St.data),Z[ot]=Kt,W++}u.attributes=Z,u.attributesNum=W,u.index=X}function N(){const j=u.newAttributes;for(let Q=0,J=j.length;Q<J;Q++)j[Q]=0}function M(j){S(j,0)}function S(j,Q){const J=u.newAttributes,X=u.enabledAttributes,Z=u.attributeDivisors;J[j]=1,X[j]===0&&(o.enableVertexAttribArray(j),X[j]=1),Z[j]!==Q&&(o.vertexAttribDivisor(j,Q),Z[j]=Q)}function I(){const j=u.newAttributes,Q=u.enabledAttributes;for(let J=0,X=Q.length;J<X;J++)Q[J]!==j[J]&&(o.disableVertexAttribArray(J),Q[J]=0)}function B(j,Q,J,X,Z,V,W){W===!0?o.vertexAttribIPointer(j,Q,J,Z,V):o.vertexAttribPointer(j,Q,J,X,Z,V)}function C(j,Q,J,X){N();const Z=X.attributes,V=J.getAttributes(),W=Q.defaultAttributeValues;for(const at in V){const ot=V[at];if(ot.location>=0){let ft=Z[at];if(ft===void 0&&(at==="instanceMatrix"&&j.instanceMatrix&&(ft=j.instanceMatrix),at==="instanceColor"&&j.instanceColor&&(ft=j.instanceColor)),ft!==void 0){const St=ft.normalized,Kt=ft.itemSize,Ft=t.get(ft);if(Ft===void 0)continue;const F=Ft.buffer,_t=Ft.type,Ct=Ft.bytesPerElement,et=_t===o.INT||_t===o.UNSIGNED_INT||ft.gpuType===om;if(ft.isInterleavedBufferAttribute){const mt=ft.data,At=mt.stride,It=ft.offset;if(mt.isInstancedInterleavedBuffer){for(let gt=0;gt<ot.locationSize;gt++)S(ot.location+gt,mt.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<ot.locationSize;gt++)M(ot.location+gt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let gt=0;gt<ot.locationSize;gt++)B(ot.location+gt,Kt/ot.locationSize,_t,St,At*Ct,(It+Kt/ot.locationSize*gt)*Ct,et)}else{if(ft.isInstancedBufferAttribute){for(let mt=0;mt<ot.locationSize;mt++)S(ot.location+mt,ft.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<ot.locationSize;mt++)M(ot.location+mt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let mt=0;mt<ot.locationSize;mt++)B(ot.location+mt,Kt/ot.locationSize,_t,St,Kt*Ct,Kt/ot.locationSize*mt*Ct,et)}}else if(W!==void 0){const St=W[at];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(ot.location,St);break;case 3:o.vertexAttrib3fv(ot.location,St);break;case 4:o.vertexAttrib4fv(ot.location,St);break;default:o.vertexAttrib1fv(ot.location,St)}}}}I()}function L(){P();for(const j in s){const Q=s[j];for(const J in Q){const X=Q[J];for(const Z in X){const V=X[Z];for(const W in V)x(V[W].object),delete V[W];delete X[Z]}}delete s[j]}}function w(j){if(s[j.id]===void 0)return;const Q=s[j.id];for(const J in Q){const X=Q[J];for(const Z in X){const V=X[Z];for(const W in V)x(V[W].object),delete V[W];delete X[Z]}}delete s[j.id]}function D(j){for(const Q in s){const J=s[Q];for(const X in J){const Z=J[X];if(Z[j.id]===void 0)continue;const V=Z[j.id];for(const W in V)x(V[W].object),delete V[W];delete Z[j.id]}}}function b(j){for(const Q in s){const J=s[Q],X=j.isInstancedMesh===!0?j.id:0,Z=J[X];if(Z!==void 0){for(const V in Z){const W=Z[V];for(const at in W)x(W[at].object),delete W[at];delete Z[V]}delete J[X],Object.keys(J).length===0&&delete s[Q]}}}function P(){H(),h=!0,u!==l&&(u=l,m(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:N,enableAttribute:M,disableUnusedAttributes:I}}function NR(o,t,i){let s;function l(p){s=p}function u(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function h(p,m,x){x!==0&&(o.drawArraysInstanced(s,p,m,x),i.update(m,s,x))}function d(p,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let v=0;for(let y=0;y<x;y++)v+=m[y];i.update(v,s,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function UR(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(D){return!(D!==Gi&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const b=D===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==_i&&D!==ra&&!b&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(ue("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),w=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:C,maxSamples:L,samples:w}}function LR(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Oa,d=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,N=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||T===null||T.length===0||u&&!M)u?x(null):m();else{const I=u?0:s,B=I*4;let C=S.clippingState||null;p.value=C,C=x(T,v,B,y);for(let L=0;L!==B;++L)C[L]=i[L];S.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,v,y,T){const N=g!==null?g.length:0;let M=null;if(N!==0){if(M=p.value,T!==!0||M===null){const S=y+N*4,I=v.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,C=y;B!==N;++B,C+=4)h.copy(g[B]).applyMatrix4(I,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const lo=4,OR=6,PR=20,IR=256,Sl=new Sm,Rx=new De;let op=null,lp=0,cp=0,up=!1;const zR=new Y,Js=new Y;class Cx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=zR}=u;op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(op,lp,cp),this._renderer.xr.enabled=up,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ir||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ua,format:Gi,colorSpace:Bu,depthBuffer:!1},l=wx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BR(u)),this._blurMaterial=HR(u,t,i),this._ggxMaterial=FR(u,t,i)}return l}_compileMaterial(t){const i=new fa(new ii,t);this._renderer.compile(i,Sl)}_sceneToCubeUV(t,i,s,l,u){const p=new Di(90,1,i,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Rx),g.toneMapping=la,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fa(new go,new CS({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let S=!1;const I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,S=!0):(M.color.copy(Rx),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+x[B],u.y,u.z)):C===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+x[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+x[B]));const L=this._cubeSize;ao(l,C*L,B>2?L:0,L,L),g.setRenderTarget(l),S&&g.render(N,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ir||t.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dx());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;ao(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Sl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const p=h.uniforms,m=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-x*x),v=m*1.25,y=g*v,{_lodMax:T}=this,N=this._sizeLods[s],M=3*N*(s>T-lo?s-T+lo:0),S=4*(this._cubeSize-N);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=T-i,ao(u,M,S,3*N,2*N),l.setRenderTarget(u),l.render(d,Sl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-s,ao(t,M,S,3*N,2*N),l.setRenderTarget(t),l.render(d,Sl)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,h),this._blurPass(u,t,s,s,h)}_blurPass(t,i,s,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-s;const x=this._sizeLods[l],g=3*x*(l>this._lodMax-lo?l-this._lodMax+lo:0),v=4*(this._cubeSize-x);ao(i,g,v,3*x,2*x),h.setRenderTarget(i),h.render(p,Sl)}}function BR(o){const t=[],i=[];let s=o;const l=o-lo+1+OR;for(let u=0;u<l;u++){const h=Math.pow(2,s);t.push(h);const d=1/(h-2),p=-d,m=1+d,x=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,T=new Float32Array(y*v*g),N=new Float32Array(y*v*g);for(let S=0;S<g;S++){const I=S%3*2/3-1,B=S>2?0:-1,C=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];T.set(C,y*v*S);for(let L=0;L<v;L++){const w=x[L*2]*2-1,D=x[L*2+1]*2-1;S===0?Js.set(1,D,w):S===1?Js.set(-w,1,-D):S===2?Js.set(-w,D,1):S===3?Js.set(-1,D,-w):S===4?Js.set(-w,-1,D):Js.set(w,D,-1),Js.toArray(N,(S*v+L)*y)}}const M=new ii;M.setAttribute("position",new Ha(T,y)),M.setAttribute("outputDirection",new Ha(N,y)),i.push(new fa(M,null)),s>lo&&s--}return{lodMeshes:i,sizeLods:t}}function wx(o,t,i){const s=new Vi(o,t,i);return s.texture.mapping=Yu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ao(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function FR(o,t,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function HR(o,t,i){return new ha({name:"SphericalGaussianBlur",defines:{SAMPLES:PR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Dx(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Nx(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class FS extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new DS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new go(5,5,5),u=new ha({name:"CubemapFromEquirect",uniforms:po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Ba});u.uniforms.tEquirect.value=i;const h=new fa(l,u),d=i.minFilter;return i.minFilter===tr&&(i.minFilter=Gn),new G1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}function GR(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?h(v):u(v)}function u(v){if(v&&v.isTexture){const y=v.mapping;if(y===Nd||y===Ud)if(t.has(v)){const T=t.get(v).texture;return d(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const N=new FS(T.height);return N.fromEquirectangularTexture(o,v),t.set(v,N),v.addEventListener("dispose",m),d(N.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const y=v.mapping,T=y===Nd||y===Ud,N=y===ir||y===ho;if(T||N){let M=i.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new Cx(o)),M=T?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const I=v.image;return T&&I&&I.height>0||N&&I&&p(I)?(s===null&&(s=new Cx(o)),M=T?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",x),M.texture):null}}}return v}function d(v,y){return y===Nd?v.mapping=ir:y===Ud&&(v.mapping=ho),v}function p(v){let y=0;const T=6;for(let N=0;N<T;N++)v[N]!==void 0&&y++;return y===T}function m(v){const y=v.target;y.removeEventListener("dispose",m);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function VR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uo("WebGLRenderer: "+s+" extension not supported."),l}}}function kR(o,t,i,s){const l={},u=new WeakMap;function h(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,T=g.attributes.position;let N=0;if(T===void 0)return;if(y!==null){const I=y.array;N=y.version;for(let B=0,C=I.length;B<C;B+=3){const L=I[B+0],w=I[B+1],D=I[B+2];v.push(L,w,w,D,D,L)}}else{const I=T.array;N=T.version;for(let B=0,C=I.length/3-1;B<C;B+=3){const L=B+0,w=B+1,D=B+2;v.push(L,w,w,D,D,L)}}const M=new(T.count>=65535?RS:AS)(v,1);M.version=N;const S=u.get(g);S&&t.remove(S),u.set(g,M)}function x(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:x}}function XR(o,t,i){let s;function l(g){s=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function p(g,v){o.drawElements(s,v,u,g*h),i.update(v,s,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(s,v,u,g*h,y),i.update(v,s,y))}function x(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,u,g,0,y);let N=0;for(let M=0;M<y;M++)N+=v[M];i.update(N,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function qR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:He("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YR(o,t,i){const s=new WeakMap,l=new ln;function u(h,d,p){const m=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let H=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",H)};var y=H;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),N===!0&&(C=2),M===!0&&(C=3);let L=d.attributes.position.count*C,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const D=new Float32Array(L*w*4*g),b=new bS(D,L,w,g);b.type=ra,b.needsUpdate=!0;const P=C*4;for(let j=0;j<g;j++){const Q=S[j],J=I[j],X=B[j],Z=L*w*4*j;for(let V=0;V<Q.count;V++){const W=V*P;T===!0&&(l.fromBufferAttribute(Q,V),D[Z+W+0]=l.x,D[Z+W+1]=l.y,D[Z+W+2]=l.z,D[Z+W+3]=0),N===!0&&(l.fromBufferAttribute(J,V),D[Z+W+4]=l.x,D[Z+W+5]=l.y,D[Z+W+6]=l.z,D[Z+W+7]=0),M===!0&&(l.fromBufferAttribute(X,V),D[Z+W+8]=l.x,D[Z+W+9]=l.y,D[Z+W+10]=l.z,D[Z+W+11]=X.itemSize===4?l.w:1)}}v={count:g,texture:b,size:new Jt(L,w)},s.set(d,v),d.addEventListener("dispose",H)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const N=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",N),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function WR(o,t,i,s,l){let u=new WeakMap;function h(m){const x=l.render.frame,g=m.geometry,v=t.get(m,g);if(u.get(v)!==x&&(t.update(v),u.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;u.get(y)!==x&&(y.update(),u.set(y,x))}return v}function d(){u=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:d}}const jR={[lS]:"LINEAR_TONE_MAPPING",[cS]:"REINHARD_TONE_MAPPING",[uS]:"CINEON_TONE_MAPPING",[fS]:"ACES_FILMIC_TONE_MAPPING",[dS]:"AGX_TONE_MAPPING",[pS]:"NEUTRAL_TONE_MAPPING",[hS]:"CUSTOM_TONE_MAPPING"};function ZR(o,t,i,s,l,u){const h=new Vi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new ii;m.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new dn([0,2,0,0,2,0],2));const x=new L1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new fa(m,x),v=new Sm(-1,1,1,-1,0,1);let y=null,T=null,N=!1,M,S=null,I=[],B=!1;this.setSize=function(C,L){h.setSize(C,L),d!==null&&d.setSize(C,L),p!==null&&p.setSize(C,L);for(let w=0;w<I.length;w++){const D=I[w];D.setSize&&D.setSize(C,L)}},this.setEffects=function(C){I=C,B=I.length>0&&I[0].isRenderPass===!0;const L=h.width,w=h.height;I.length>0&&d===null&&(d=new Vi(L,w,{type:ua,depthBuffer:!1,stencilBuffer:!1}),p=new Vi(L,w,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<I.length;D++){const b=I[D];b.setSize&&b.setSize(L,w)}},this.begin=function(C,L){if(N||C.toneMapping===la&&I.length===0)return!1;if(S=L,L!==null){const w=L.width,D=L.height;(h.width!==w||h.height!==D)&&this.setSize(w,D)}return B===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=la,!0},this.hasRenderPass=function(){return B},this.end=function(C,L){C.toneMapping=M,N=!0;let w=h,D=d;for(let b=0;b<I.length;b++){const P=I[b];P.enabled!==!1&&(P.render(C,D,w,L),P.needsSwap!==!1&&(w=D,D=D===d?p:d))}if(y!==C.outputColorSpace||T!==C.toneMapping){y=C.outputColorSpace,T=C.toneMapping,x.defines={},ze.getTransfer(y)===Ze&&(x.defines.SRGB_TRANSFER="");const b=jR[T];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=w.texture,C.setRenderTarget(S),C.render(g,v),S=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),x.dispose()}}const HS=new jn,im=new Nl(1,1),GS=new bS,VS=new Yb,kS=new DS,Ux=[],Lx=[],Ox=new Float32Array(16),Px=new Float32Array(9),Ix=new Float32Array(4);function _o(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Ux[l];if(u===void 0&&(u=new Float32Array(l),Ux[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function bn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Qu(o,t){let i=Lx[t];i===void 0&&(i=new Int32Array(t),Lx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function KR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function QR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),bn(i,t)}}function JR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),bn(i,t)}}function $R(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),bn(i,t)}}function tC(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;Ix.set(s),o.uniformMatrix2fv(this.addr,!1,Ix),bn(i,s)}}function eC(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;Px.set(s),o.uniformMatrix3fv(this.addr,!1,Px),bn(i,s)}}function nC(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;Ox.set(s),o.uniformMatrix4fv(this.addr,!1,Ox),bn(i,s)}}function iC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),bn(i,t)}}function sC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),bn(i,t)}}function rC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),bn(i,t)}}function oC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),bn(i,t)}}function cC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),bn(i,t)}}function uC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),bn(i,t)}}function fC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(im.compareFunction=i.isReversedDepthBuffer()?pm:dm,u=im):u=HS,i.setTexture2D(t||u,l)}function hC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||VS,l)}function dC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||kS,l)}function pC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||GS,l)}function mC(o){switch(o){case 5126:return KR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return tC;case 35675:return eC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return sC;case 35669:case 35673:return rC;case 5125:return oC;case 36294:return lC;case 36295:return cC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return hC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return pC}}function gC(o,t){o.uniform1fv(this.addr,t)}function _C(o,t){const i=_o(t,this.size,2);o.uniform2fv(this.addr,i)}function vC(o,t){const i=_o(t,this.size,3);o.uniform3fv(this.addr,i)}function xC(o,t){const i=_o(t,this.size,4);o.uniform4fv(this.addr,i)}function SC(o,t){const i=_o(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yC(o,t){const i=_o(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MC(o,t){const i=_o(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function EC(o,t){o.uniform1iv(this.addr,t)}function bC(o,t){o.uniform2iv(this.addr,t)}function TC(o,t){o.uniform3iv(this.addr,t)}function AC(o,t){o.uniform4iv(this.addr,t)}function RC(o,t){o.uniform1uiv(this.addr,t)}function CC(o,t){o.uniform2uiv(this.addr,t)}function wC(o,t){o.uniform3uiv(this.addr,t)}function DC(o,t){o.uniform4uiv(this.addr,t)}function NC(o,t,i){const s=this.cache,l=t.length,u=Qu(i,l);En(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=im:h=HS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function UC(o,t,i){const s=this.cache,l=t.length,u=Qu(i,l);En(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||VS,u[h])}function LC(o,t,i){const s=this.cache,l=t.length,u=Qu(i,l);En(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||kS,u[h])}function OC(o,t,i){const s=this.cache,l=t.length,u=Qu(i,l);En(s,u)||(o.uniform1iv(this.addr,u),bn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||GS,u[h])}function PC(o){switch(o){case 5126:return gC;case 35664:return _C;case 35665:return vC;case 35666:return xC;case 35674:return SC;case 35675:return yC;case 35676:return MC;case 5124:case 35670:return EC;case 35667:case 35671:return bC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return RC;case 36294:return CC;case 36295:return wC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return NC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return LC;case 36289:case 36303:case 36311:case 36292:return OC}}class IC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mC(i.type)}}class zC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PC(i.type)}}class BC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const fp=/(\w+)(\])?(\[|\.)?/g;function zx(o,t){o.seq.push(t),o.map[t.id]=t}function FC(o,t,i){const s=o.name,l=s.length;for(fp.lastIndex=0;;){const u=fp.exec(s),h=fp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){zx(i,m===void 0?new IC(d,o,t):new zC(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new BC(d),zx(i,g)),i=g}}}class Ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);FC(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Bx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const HC=37297;let GC=0;function VC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Fx=new _e;function kC(o){ze._getMatrix(Fx,ze.workingColorSpace,o);const t=`mat3( ${Fx.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case Fu:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Hx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+VC(o.getShaderSource(t),d)}else return u}function XC(o,t){const i=kC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const qC={[lS]:"Linear",[cS]:"Reinhard",[uS]:"Cineon",[fS]:"ACESFilmic",[dS]:"AgX",[pS]:"Neutral",[hS]:"Custom"};function YC(o,t){const i=qC[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tu=new Y;function WC(){ze.getLuminanceCoefficients(Tu);const o=Tu.x.toFixed(4),t=Tu.y.toFixed(4),i=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function ZC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function KC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function El(o){return o!==""}function Gx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function am(o){return o.replace(QC,$C)}const JC=new Map;function $C(o,t){let i=Me[t];if(i===void 0){const s=JC.get(t);if(s!==void 0)i=Me[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return am(i)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(tw,ew)}function ew(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Xx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const nw={[Cu]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function iw(o){return nw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aw={[ir]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function sw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":aw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const rw={[ho]:"ENVMAP_MODE_REFRACTION"};function ow(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":rw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[oS]:"ENVMAP_BLENDING_MULTIPLY",[Mb]:"ENVMAP_BLENDING_MIX",[Eb]:"ENVMAP_BLENDING_ADD"};function cw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":lw[o.combine]||"ENVMAP_BLENDING_NONE"}function uw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fw(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=iw(i),m=sw(i),x=ow(i),g=cw(i),v=uw(i),y=jC(i),T=ZC(u),N=l.createProgram();let M,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(El).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(El).join(`
`),S.length>0&&(S+=`
`)):(M=[Xx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),S=[Xx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?Me.tonemapping_pars_fragment:"",i.toneMapping!==la?YC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,XC("linearToOutputTexel",i.outputColorSpace),WC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(El).join(`
`)),h=am(h),h=Gx(h,i),h=Vx(h,i),d=am(d),d=Gx(d,i),d=Vx(d,i),h=kx(h),d=kx(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=I+M+h,C=I+S+d,L=Bx(l,l.VERTEX_SHADER,B),w=Bx(l,l.FRAGMENT_SHADER,C);l.attachShader(N,L),l.attachShader(N,w),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function D(j){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(N)||"",J=l.getShaderInfoLog(L)||"",X=l.getShaderInfoLog(w)||"",Z=Q.trim(),V=J.trim(),W=X.trim();let at=!0,ot=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,L,w);else{const ft=Hx(l,L,"vertex"),St=Hx(l,w,"fragment");He("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+Z+`
`+ft+`
`+St)}else Z!==""?ue("WebGLProgram: Program Info Log:",Z):(V===""||W==="")&&(ot=!1);ot&&(j.diagnostics={runnable:at,programLog:Z,vertexShader:{log:V,prefix:M},fragmentShader:{log:W,prefix:S}})}l.deleteShader(L),l.deleteShader(w),b=new Ou(l,N),P=KC(l,N)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let H=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=l.getProgramParameter(N,HC)),H},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GC++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=L,this.fragmentShader=w,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new pw(t),i.set(t,s)),s}}class pw{constructor(t){this.id=hw++,this.code=t,this.usedTimes=0}}function mw(o){return o===ar||o===Iu||o===zu}function gw(o,t,i,s,l,u){const h=new gm,d=new dw,p=new Set,m=[],x=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function N(b,P,H,j,Q,J){const X=j.fog,Z=Q.geometry,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,at=t.get(b.envMap||V,W),ot=at&&at.mapping===Yu?at.image.height:null,ft=y[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&ue("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=St!==void 0?St.length:0;let Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let F,_t,Ct,et;if(ft){const Pe=sa[ft];F=Pe.vertexShader,_t=Pe.fragmentShader}else{F=b.vertexShader,_t=b.fragmentShader;const Pe=d.getVertexShaderStage(b),me=d.getFragmentShaderStage(b);d.update(b,Pe,me),Ct=Pe.id,et=me.id}const mt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),It=Q.isInstancedMesh===!0,gt=Q.isBatchedMesh===!0,wt=!!b.map,Fe=!!b.matcap,pe=!!at,ve=!!b.aoMap,ye=!!b.lightMap,ae=!!b.bumpMap&&b.wireframe===!1,se=!!b.normalMap,Ge=!!b.displacementMap,rn=!!b.emissiveMap,Rt=!!b.metalnessMap,Qt=!!b.roughnessMap,G=b.anisotropy>0,le=b.clearcoat>0,ie=b.dispersion>0,U=b.retroreflectivity>0,E=b.iridescence>0,$=b.sheen>0,st=b.transmission>0,ht=G&&!!b.anisotropyMap,Tt=le&&!!b.clearcoatMap,Dt=le&&!!b.clearcoatNormalMap,vt=le&&!!b.clearcoatRoughnessMap,Et=E&&!!b.iridescenceMap,Ut=E&&!!b.iridescenceThicknessMap,ne=$&&!!b.sheenColorMap,Bt=$&&!!b.sheenRoughnessMap,zt=!!b.specularMap,qt=!!b.specularColorMap,oe=!!b.specularIntensityMap,de=st&&!!b.transmissionMap,K=st&&!!b.thicknessMap,Nt=!!b.gradientMap,Mt=!!b.alphaMap,Lt=b.alphaTest>0,Xt=!!b.alphaHash,bt=!!b.extensions;let ee=la;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ee=o.toneMapping);const kt={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:F,fragmentShader:_t,defines:b.defines,customVertexShaderID:Ct,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:gt,batchingColor:gt&&Q._colorsTexture!==null,instancing:It,instancingColor:It&&Q.instanceColor!==null,instancingMorph:It&&Q.morphTexture!==null,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:wt,matcap:Fe,envMap:pe,envMapMode:pe&&at.mapping,envMapCubeUVHeight:ot,aoMap:ve,lightMap:ye,bumpMap:ae,normalMap:se,displacementMap:Ge,emissiveMap:rn,normalMapObjectSpace:se&&b.normalMapType===Ab,normalMapTangentSpace:se&&b.normalMapType===tm,packedNormalMap:se&&b.normalMapType===tm&&mw(b.normalMap.format),metalnessMap:Rt,roughnessMap:Qt,anisotropy:G,anisotropyMap:ht,clearcoat:le,clearcoatMap:Tt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:vt,dispersion:ie,retroreflection:U,iridescence:E,iridescenceMap:Et,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:ne,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:qt,specularIntensityMap:oe,transmission:st,transmissionMap:de,thicknessMap:K,gradientMap:Nt,opaque:b.transparent===!1&&b.blending===bl&&b.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Lt,alphaHash:Xt,combine:b.combine,mapUv:wt&&T(b.map.channel),aoMapUv:ve&&T(b.aoMap.channel),lightMapUv:ye&&T(b.lightMap.channel),bumpMapUv:ae&&T(b.bumpMap.channel),normalMapUv:se&&T(b.normalMap.channel),displacementMapUv:Ge&&T(b.displacementMap.channel),emissiveMapUv:rn&&T(b.emissiveMap.channel),metalnessMapUv:Rt&&T(b.metalnessMap.channel),roughnessMapUv:Qt&&T(b.roughnessMap.channel),anisotropyMapUv:ht&&T(b.anisotropyMap.channel),clearcoatMapUv:Tt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(b.sheenRoughnessMap.channel),specularMapUv:zt&&T(b.specularMap.channel),specularColorMapUv:qt&&T(b.specularColorMap.channel),specularIntensityMapUv:oe&&T(b.specularIntensityMap.channel),transmissionMapUv:de&&T(b.transmissionMap.channel),thicknessMapUv:K&&T(b.thicknessMap.channel),alphaMapUv:Mt&&T(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(se||G),vertexNormals:!!Z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Z.attributes.uv&&(wt||Mt),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Z.attributes.normal===void 0&&se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:Ft,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ze.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:rn&&b.emissiveMap.isVideoTexture===!0&&ze.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pa,flipSided:b.side===ni,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function M(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)P.push(H),P.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(S(P,b),I(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function S(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function I(b,P){h.disableAll(),P.instancing&&h.enable(0),P.instancingColor&&h.enable(1),P.instancingMorph&&h.enable(2),P.matcap&&h.enable(3),P.envMap&&h.enable(4),P.normalMapObjectSpace&&h.enable(5),P.normalMapTangentSpace&&h.enable(6),P.clearcoat&&h.enable(7),P.iridescence&&h.enable(8),P.alphaTest&&h.enable(9),P.vertexColors&&h.enable(10),P.vertexAlphas&&h.enable(11),P.vertexUv1s&&h.enable(12),P.vertexUv2s&&h.enable(13),P.vertexUv3s&&h.enable(14),P.vertexTangents&&h.enable(15),P.anisotropy&&h.enable(16),P.alphaHash&&h.enable(17),P.batching&&h.enable(18),P.dispersion&&h.enable(19),P.retroreflection&&h.enable(24),P.batchingColor&&h.enable(20),P.gradientMap&&h.enable(21),P.packedNormalMap&&h.enable(22),P.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),P.numLightProbeGrids>0&&h.enable(22),P.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function B(b){const P=y[b.type];let H;if(P){const j=sa[P];H=D1.clone(j.uniforms)}else H=b.uniforms;return H}function C(b,P){let H=x.get(P);return H!==void 0?++H.usedTimes:(H=new fw(o,P,b,l),m.push(H),x.set(P,H)),H}function L(b){if(--b.usedTimes===0){const P=m.indexOf(b);m[P]=m[m.length-1],m.pop(),x.delete(b.cacheKey),b.destroy()}}function w(b){d.remove(b)}function D(){d.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:L,releaseShaderCache:w,programs:m,dispose:D}}function _w(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function vw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function qx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Yx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,T,N,M,S){let I=o[t];return I===void 0?(I={id:v.id,object:v,geometry:y,material:T,materialVariant:h(v),groupOrder:N,renderOrder:v.renderOrder,z:M,group:S},o[t]=I):(I.id=v.id,I.object=v,I.geometry=y,I.material=T,I.materialVariant=h(v),I.groupOrder=N,I.renderOrder=v.renderOrder,I.z=M,I.group=S),t++,I}function p(v,y,T,N,M,S,I){I.reversedDepth===!0&&(M=-M);const B=d(v,y,T,N,M,S);T.transmission>0?s.push(B):T.transparent===!0?l.push(B):i.push(B)}function m(v,y,T,N,M,S){const I=d(v,y,T,N,M,S);T.transmission>0?s.unshift(I):T.transparent===!0?l.unshift(I):i.unshift(I)}function x(v,y){i.length>1&&i.sort(v||vw),s.length>1&&s.sort(y||qx),l.length>1&&l.sort(y||qx)}function g(){for(let v=t,y=o.length;v<y;v++){const T=o[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:p,unshift:m,finish:g,sort:x}}function xw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Yx,o.set(s,[h])):l>=u.length?(h=new Yx,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Sw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new Y,color:new De};break;case"SpotLight":i={position:new Y,direction:new Y,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function yw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Mw=0;function Ew(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function bw(o){const t=new Sw,i=yw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Y);const l=new Y,u=new an,h=new an;function d(m){let x=0,g=0,v=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let y=0,T=0,N=0,M=0,S=0,I=0,B=0,C=0,L=0,w=0,D=0,b=0,P=0,H=0;m.sort(Ew);for(let Q=0,J=m.length;Q<J;Q++){const X=m[Q],Z=X.color,V=X.intensity,W=X.distance;let at=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ar?at=X.shadow.map.texture:at=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=Z.r*V,g+=Z.g*V,v+=Z.b*V;else if(X.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(X.sh.coefficients[ot],V);H++}else if(X.isSunLight){const ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ft=X.shadow,St=i.get(X);St.shadowIntensity=ft.intensity,St.shadowBias=ft.bias,St.shadowNormalBias=ft.normalBias,St.shadowRadius=ft.radius,St.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),s.sunShadow[T]=St,s.sunShadowMap[T]=at;const Kt=ft.getViewportCount();for(let Ft=0;Ft<Kt;Ft++)s.sunShadowMatrix[N+Ft]=ft.getMatrix(Ft),s.sunShadowCascade[N+Ft]=ft._cascadeData[Ft];N+=Kt,T++}s.sun[y]=ot,y++}else if(X.isDirectionalLight){const ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ft=X.shadow,St=i.get(X);St.shadowIntensity=ft.intensity,St.shadowBias=ft.bias,St.shadowNormalBias=ft.normalBias,St.shadowRadius=ft.radius,St.shadowMapSize=ft.mapSize,s.directionalShadow[M]=St,s.directionalShadowMap[M]=at,s.directionalShadowMatrix[M]=X.shadow.matrix,L++}s.directional[M]=ot,M++}else if(X.isSpotLight){const ot=t.get(X);ot.position.setFromMatrixPosition(X.matrixWorld),ot.color.copy(Z).multiplyScalar(V),ot.distance=W,ot.coneCos=Math.cos(X.angle),ot.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ot.decay=X.decay,s.spot[I]=ot;const ft=X.shadow;if(X.map&&(s.spotLightMap[b]=X.map,b++,ft.updateMatrices(X),X.castShadow&&P++),s.spotLightMatrix[I]=ft.matrix,X.castShadow){const St=i.get(X);St.shadowIntensity=ft.intensity,St.shadowBias=ft.bias,St.shadowNormalBias=ft.normalBias,St.shadowRadius=ft.radius,St.shadowMapSize=ft.mapSize,s.spotShadow[I]=St,s.spotShadowMap[I]=at,D++}I++}else if(X.isRectAreaLight){const ot=t.get(X);ot.color.copy(Z).multiplyScalar(V),ot.halfWidth.set(X.width*.5,0,0),ot.halfHeight.set(0,X.height*.5,0),s.rectArea[B]=ot,B++}else if(X.isPointLight){const ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),ot.distance=X.distance,ot.decay=X.decay,X.castShadow){const ft=X.shadow,St=i.get(X);St.shadowIntensity=ft.intensity,St.shadowBias=ft.bias,St.shadowNormalBias=ft.normalBias,St.shadowRadius=ft.radius,St.shadowMapSize=ft.mapSize,St.shadowCameraNear=ft.camera.near,St.shadowCameraFar=ft.camera.far,s.pointShadow[S]=St,s.pointShadowMap[S]=at,s.pointShadowMatrix[S]=X.shadow.matrix,w++}s.point[S]=ot,S++}else if(X.isHemisphereLight){const ot=t.get(X);ot.skyColor.copy(X.color).multiplyScalar(V),ot.groundColor.copy(X.groundColor).multiplyScalar(V),s.hemi[C]=ot,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const j=s.hash;(j.sunLength!==y||j.directionalLength!==M||j.pointLength!==S||j.spotLength!==I||j.rectAreaLength!==B||j.hemiLength!==C||j.numSunShadows!==T||j.numDirectionalShadows!==L||j.numPointShadows!==w||j.numSpotShadows!==D||j.numSpotMaps!==b||j.numLightProbes!==H)&&(s.sun.length=y,s.directional.length=M,s.spot.length=I,s.rectArea.length=B,s.point.length=S,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.pointShadowMatrix.length=w,s.spotShadow.length=D,s.spotShadowMap.length=D,s.spotLightMatrix.length=D+b-P,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=H,j.sunLength=y,j.directionalLength=M,j.pointLength=S,j.spotLength=I,j.rectAreaLength=B,j.hemiLength=C,j.numSunShadows=T,j.numDirectionalShadows=L,j.numPointShadows=w,j.numSpotShadows=D,j.numSpotMaps=b,j.numLightProbes=H,s.version=Mw++)}function p(m,x){let g=0,v=0,y=0,T=0,N=0,M=0;const S=x.matrixWorldInverse;for(let I=0,B=m.length;I<B;I++){const C=m[I];if(C.isSunLight){const L=s.sun[g];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),g++}else if(C.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),v++}else if(C.isSpotLight){const L=s.spot[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const L=s.rectArea[N];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),h.identity(),u.copy(C.matrixWorld),u.premultiply(S),h.extractRotation(u),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),N++}else if(C.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const L=s.hemi[M];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),M++}}}return{setup:d,setupView:p,state:s}}function Wx(o){const t=new bw(o),i=[],s=[],l=[];function u(v){g.camera=v,i.length=0,s.length=0,l.length=0}function h(v){i.push(v)}function d(v){s.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function x(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:x,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function Tw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Wx(o),t.set(l,[d])):u>=h.length?(d=new Wx(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cw=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],ww=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],jx=new an,yl=new Y,hp=new Y;function Dw(o,t,i){let s=new _m;const l=new Jt,u=new Jt,h=new ln,d=new P1,p=new I1,m={},x=i.maxTextureSize,g={[nr]:ni,[ni]:nr,[Pa]:Pa},v=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:Aw,fragmentShader:Rw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new fa(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let S=this.type;this.render=function(w,D,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||w.length===0)return;this.type===aS&&(ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cu);const P=o.getRenderTarget(),H=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=S!==this.type;J&&D.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Z=>Z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Z=w.length;X<Z;X++){const V=w[X],W=V.shadow;if(W===void 0){ue("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const at=W.getFrameExtents();l.multiply(at),u.copy(W.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/at.x),l.x=u.x*at.x,W.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/at.y),l.y=u.y*at.y,W.mapSize.y=u.y));const ot=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ot,W.map===null||J===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ml){if(V.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Vi(l.x,l.y,{format:ar,type:ua,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new Nl(l.x,l.y,ra),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Ga,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In}else V.isPointLight?(W.map=new FS(l.x),W.map.depthTexture=new h1(l.x,ca)):(W.map=new Vi(l.x,l.y),W.map.depthTexture=new Nl(l.x,l.y,ca)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Ga,this.type===Cu?(W.map.depthTexture.compareFunction=ot?pm:dm,W.map.depthTexture.minFilter=Gn,W.map.depthTexture.magFilter=Gn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==l.x||W.map.height!==l.y)&&W.map.setSize(l.x,l.y);const ft=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,b);for(let St=0;St<ft;St++){const Kt=W.getCamera(St);if(V.isPointLight){const Ft=W.camera,F=W.matrix,_t=V.distance||Ft.far;_t!==Ft.far&&(Ft.far=_t,Ft.updateProjectionMatrix()),yl.setFromMatrixPosition(V.matrixWorld),Ft.position.copy(yl),hp.copy(Ft.position),hp.add(Cw[St]),Ft.up.copy(ww[St]),Ft.lookAt(hp),Ft.updateMatrixWorld(),F.makeTranslation(-yl.x,-yl.y,-yl.z),jx.multiplyMatrices(Ft.projectionMatrix,Ft.matrixWorldInverse),W._frustum.setFromProjectionMatrix(jx,Ft.coordinateSystem,Ft.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,St),o.clear();else{St===0&&(o.setRenderTarget(W.map),o.clear());const Ft=W.getViewport(St);h.set(u.x*Ft.x,u.y*Ft.y,u.x*Ft.z,u.y*Ft.w),Q.viewport(h)}s=W.getFrustum(St),C(D,b,Kt,V,this.type)}W.isPointLightShadow!==!0&&this.type===Ml&&I(W,b),W.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(P,H,j)};function I(w,D){const b=t.update(N);v.defines.VSM_SAMPLES!==w.blurSamples&&(v.defines.VSM_SAMPLES=w.blurSamples,y.defines.VSM_SAMPLES=w.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),w.mapPass===null?w.mapPass=new Vi(l.x,l.y,{format:ar,type:ua}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),v.uniforms.shadow_pass.value=w.map.depthTexture,v.uniforms.resolution.value.set(w.map.width,w.map.height),v.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(D,null,b,v,N,null),y.uniforms.shadow_pass.value=w.mapPass.texture,y.uniforms.resolution.value.set(w.map.width,w.map.height),y.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(D,null,b,y,N,null)}function B(w,D,b,P){let H=null;const j=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)H=j;else if(H=b.isPointLight===!0?p:d,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Q=H.uuid,J=D.uuid;let X=m[Q];X===void 0&&(X={},m[Q]=X);let Z=X[J];Z===void 0&&(Z=H.clone(),X[J]=Z,D.addEventListener("dispose",L)),H=Z}if(H.visible=D.visible,H.wireframe=D.wireframe,P===Ml?H.side=D.shadowSide!==null?D.shadowSide:D.side:H.side=D.shadowSide!==null?D.shadowSide:g[D.side],H.alphaMap=D.alphaMap,H.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,H.map=D.map,H.clipShadows=D.clipShadows,H.clippingPlanes=D.clippingPlanes,H.clipIntersection=D.clipIntersection,H.displacementMap=D.displacementMap,H.displacementScale=D.displacementScale,H.displacementBias=D.displacementBias,H.wireframeLinewidth=D.wireframeLinewidth,H.linewidth=D.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Q=o.properties.get(H);Q.light=b}return H}function C(w,D,b,P,H){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&H===Ml)&&(!w.frustumCulled||w.intersectsFrustum(s))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const J=t.update(w),X=w.material;if(Array.isArray(X)){const Z=J.groups;for(let V=0,W=Z.length;V<W;V++){const at=Z[V],ot=X[at.materialIndex];if(ot&&ot.visible){const ft=B(w,ot,P,H);w.onBeforeShadow(o,w,D,b,J,ft,at),o.renderBufferDirect(b,null,J,ft,w,at),w.onAfterShadow(o,w,D,b,J,ft,at)}}}else if(X.visible){const Z=B(w,X,P,H);w.onBeforeShadow(o,w,D,b,J,Z,null),o.renderBufferDirect(b,null,J,Z,w,null),w.onAfterShadow(o,w,D,b,J,Z,null)}}const Q=w.children;for(let J=0,X=Q.length;J<X;J++)C(Q[J],D,b,P,H)}function L(w){w.target.removeEventListener("dispose",L);for(const b in m){const P=m[b],H=w.target.uuid;H in P&&(P[H].dispose(),delete P[H])}}}function Nw(o,t){function i(){let K=!1;const Nt=new ln;let Mt=null;const Lt=new ln(0,0,0,0);return{setMask:function(Xt){Mt!==Xt&&!K&&(o.colorMask(Xt,Xt,Xt,Xt),Mt=Xt)},setLocked:function(Xt){K=Xt},setClear:function(Xt,bt,ee,kt,Pe){Pe===!0&&(Xt*=kt,bt*=kt,ee*=kt),Nt.set(Xt,bt,ee,kt),Lt.equals(Nt)===!1&&(o.clearColor(Xt,bt,ee,kt),Lt.copy(Nt))},reset:function(){K=!1,Mt=null,Lt.set(-1,0,0,0)}}}function s(){let K=!1,Nt=!1,Mt=null,Lt=null,Xt=null;return{setReversed:function(bt){if(Nt!==bt){const ee=t.get("EXT_clip_control");bt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Nt=bt;const kt=Xt;Xt=null,this.setClear(kt)}},getReversed:function(){return Nt},setTest:function(bt){bt?mt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(bt){Mt!==bt&&!K&&(o.depthMask(bt),Mt=bt)},setFunc:function(bt){if(Nt&&(bt=Bb[bt]),Lt!==bt){switch(bt){case mp:o.depthFunc(o.NEVER);break;case gp:o.depthFunc(o.ALWAYS);break;case _p:o.depthFunc(o.LESS);break;case Rl:o.depthFunc(o.LEQUAL);break;case vp:o.depthFunc(o.EQUAL);break;case xp:o.depthFunc(o.GEQUAL);break;case Sp:o.depthFunc(o.GREATER);break;case yp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=bt}},setLocked:function(bt){K=bt},setClear:function(bt){Xt!==bt&&(Xt=bt,Nt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){K=!1,Mt=null,Lt=null,Xt=null,Nt=!1}}}function l(){let K=!1,Nt=null,Mt=null,Lt=null,Xt=null,bt=null,ee=null,kt=null,Pe=null;return{setTest:function(me){K||(me?mt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(me){Nt!==me&&!K&&(o.stencilMask(me),Nt=me)},setFunc:function(me,ai,vi){(Mt!==me||Lt!==ai||Xt!==vi)&&(o.stencilFunc(me,ai,vi),Mt=me,Lt=ai,Xt=vi)},setOp:function(me,ai,vi){(bt!==me||ee!==ai||kt!==vi)&&(o.stencilOp(me,ai,vi),bt=me,ee=ai,kt=vi)},setLocked:function(me){K=me},setClear:function(me){Pe!==me&&(o.clearStencil(me),Pe=me)},reset:function(){K=!1,Nt=null,Mt=null,Lt=null,Xt=null,bt=null,ee=null,kt=null,Pe=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let x={},g={},v={},y=new WeakMap,T=[],N=null,M=!1,S=null,I=null,B=null,C=null,L=null,w=null,D=null,b=new De(0,0,0),P=0,H=!1,j=null,Q=null,J=null,X=null,Z=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(ot)[1]),W=at>=1):ot.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),W=at>=2);let ft=null,St={};const Kt=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),F=new ln().fromArray(Kt),_t=new ln().fromArray(Ft);function Ct(K,Nt,Mt,Lt){const Xt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(K,bt),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<Mt;ee++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Nt+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return bt}const et={};et[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(Rl),ae(!1),se(kv),mt(o.CULL_FACE),ve(Ba);function mt(K){x[K]!==!0&&(o.enable(K),x[K]=!0)}function At(K){x[K]!==!1&&(o.disable(K),x[K]=!1)}function It(K,Nt){return v[K]!==Nt?(o.bindFramebuffer(K,Nt),v[K]=Nt,K===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),K===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function gt(K,Nt){let Mt=T,Lt=!1;if(K){Mt=y.get(Nt),Mt===void 0&&(Mt=[],y.set(Nt,Mt));const Xt=K.textures;if(Mt.length!==Xt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,ee=Xt.length;bt<ee;bt++)Mt[bt]=o.COLOR_ATTACHMENT0+bt;Mt.length=Xt.length,Lt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(Mt)}function wt(K){return N!==K?(o.useProgram(K),N=K,!0):!1}const Fe={[ro]:o.FUNC_ADD,[sb]:o.FUNC_SUBTRACT,[rb]:o.FUNC_REVERSE_SUBTRACT};Fe[ob]=o.MIN,Fe[lb]=o.MAX;const pe={[cb]:o.ZERO,[ub]:o.ONE,[fb]:o.SRC_COLOR,[sS]:o.SRC_ALPHA,[_b]:o.SRC_ALPHA_SATURATE,[mb]:o.DST_COLOR,[db]:o.DST_ALPHA,[hb]:o.ONE_MINUS_SRC_COLOR,[rS]:o.ONE_MINUS_SRC_ALPHA,[gb]:o.ONE_MINUS_DST_COLOR,[pb]:o.ONE_MINUS_DST_ALPHA,[vb]:o.CONSTANT_COLOR,[xb]:o.ONE_MINUS_CONSTANT_COLOR,[Sb]:o.CONSTANT_ALPHA,[yb]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(K,Nt,Mt,Lt,Xt,bt,ee,kt,Pe,me){if(K===Ba){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(mt(o.BLEND),M=!0),K!==ab){if(K!==S||me!==H){if((I!==ro||L!==ro)&&(o.blendEquation(o.FUNC_ADD),I=ro,L=ro),me)switch(K){case bl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xv:o.blendFunc(o.ONE,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:He("WebGLState: Invalid blending: ",K);break}else switch(K){case bl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case qv:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yv:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",K);break}B=null,C=null,w=null,D=null,b.set(0,0,0),P=0,S=K,H=me}return}Xt=Xt||Nt,bt=bt||Mt,ee=ee||Lt,(Nt!==I||Xt!==L)&&(o.blendEquationSeparate(Fe[Nt],Fe[Xt]),I=Nt,L=Xt),(Mt!==B||Lt!==C||bt!==w||ee!==D)&&(o.blendFuncSeparate(pe[Mt],pe[Lt],pe[bt],pe[ee]),B=Mt,C=Lt,w=bt,D=ee),(kt.equals(b)===!1||Pe!==P)&&(o.blendColor(kt.r,kt.g,kt.b,Pe),b.copy(kt),P=Pe),S=K,H=!1}function ye(K,Nt){K.side===Pa?At(o.CULL_FACE):mt(o.CULL_FACE);let Mt=K.side===ni;Nt&&(Mt=!Mt),ae(Mt),K.blending===bl&&K.transparent===!1?ve(Ba):ve(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),h.setFunc(K.depthFunc),h.setTest(K.depthTest),h.setMask(K.depthWrite),u.setMask(K.colorWrite);const Lt=K.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),rn(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(K){j!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),j=K)}function se(K){K!==nb?(mt(o.CULL_FACE),K!==Q&&(K===kv?o.cullFace(o.BACK):K===ib?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),Q=K}function Ge(K){K!==J&&(W&&o.lineWidth(K),J=K)}function rn(K,Nt,Mt){K?(mt(o.POLYGON_OFFSET_FILL),(X!==Nt||Z!==Mt)&&(X=Nt,Z=Mt,h.getReversed()&&(Nt=-Nt),o.polygonOffset(Nt,Mt))):At(o.POLYGON_OFFSET_FILL)}function Rt(K){K?mt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Qt(K){K===void 0&&(K=o.TEXTURE0+V-1),ft!==K&&(o.activeTexture(K),ft=K)}function G(K,Nt,Mt){Mt===void 0&&(ft===null?Mt=o.TEXTURE0+V-1:Mt=ft);let Lt=St[Mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},St[Mt]=Lt),(Lt.type!==K||Lt.texture!==Nt)&&(ft!==Mt&&(o.activeTexture(Mt),ft=Mt),o.bindTexture(K,Nt||et[K]),Lt.type=K,Lt.texture=Nt)}function le(){const K=St[ft];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ie(){try{o.compressedTexImage2D(...arguments)}catch(K){He("WebGLState:",K)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(K){He("WebGLState:",K)}}function E(){try{o.texSubImage2D(...arguments)}catch(K){He("WebGLState:",K)}}function $(){try{o.texSubImage3D(...arguments)}catch(K){He("WebGLState:",K)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(K){He("WebGLState:",K)}}function ht(){try{o.compressedTexSubImage3D(...arguments)}catch(K){He("WebGLState:",K)}}function Tt(){try{o.texStorage2D(...arguments)}catch(K){He("WebGLState:",K)}}function Dt(){try{o.texStorage3D(...arguments)}catch(K){He("WebGLState:",K)}}function vt(){try{o.texImage2D(...arguments)}catch(K){He("WebGLState:",K)}}function Et(){try{o.texImage3D(...arguments)}catch(K){He("WebGLState:",K)}}function Ut(K){return g[K]!==void 0?g[K]:o.getParameter(K)}function ne(K,Nt){g[K]!==Nt&&(o.pixelStorei(K,Nt),g[K]=Nt)}function Bt(K){F.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),F.copy(K))}function zt(K){_t.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),_t.copy(K))}function qt(K,Nt){let Mt=m.get(Nt);Mt===void 0&&(Mt=new WeakMap,m.set(Nt,Mt));let Lt=Mt.get(K);Lt===void 0&&(Lt=o.getUniformBlockIndex(Nt,K.name),Mt.set(K,Lt))}function oe(K,Nt){const Lt=m.get(Nt).get(K);p.get(Nt)!==Lt&&(o.uniformBlockBinding(Nt,Lt,K.__bindingPointIndex),p.set(Nt,Lt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},g={},ft=null,St={},v={},y=new WeakMap,T=[],N=null,M=!1,S=null,I=null,B=null,C=null,L=null,w=null,D=null,b=new De(0,0,0),P=0,H=!1,j=null,Q=null,J=null,X=null,Z=null,F.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:mt,disable:At,bindFramebuffer:It,drawBuffers:gt,useProgram:wt,setBlending:ve,setMaterial:ye,setFlipSided:ae,setCullFace:se,setLineWidth:Ge,setPolygonOffset:rn,setScissorTest:Rt,activeTexture:Qt,bindTexture:G,unbindTexture:le,compressedTexImage2D:ie,compressedTexImage3D:U,texImage2D:vt,texImage3D:Et,pixelStorei:ne,getParameter:Ut,updateUBOMapping:qt,uniformBlockBinding:oe,texStorage2D:Tt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Bt,viewport:zt,reset:de}}function Uw(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Jt,x=new WeakMap,g=new Set;let v;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(U,E){return T?new OffscreenCanvas(U,E):Hu("canvas")}function M(U,E,$){let st=1;const ht=ie(U);if((ht.width>$||ht.height>$)&&(st=$/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Tt=Math.floor(st*ht.width),Dt=Math.floor(st*ht.height);v===void 0&&(v=N(Tt,Dt));const vt=E?N(Tt,Dt):v;return vt.width=Tt,vt.height=Dt,vt.getContext("2d").drawImage(U,0,0,Tt,Dt),ue("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Tt+"x"+Dt+")."),vt}else return"data"in U&&ue("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function S(U){return U.generateMipmaps}function I(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(U,E,$,st,ht,Tt=!1){if(U!==null){if(o[U]!==void 0)return o[U];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Dt;st&&(Dt=t.get("EXT_texture_norm16"),Dt||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=E;if(E===o.RED&&($===o.FLOAT&&(vt=o.R32F),$===o.HALF_FLOAT&&(vt=o.R16F),$===o.UNSIGNED_BYTE&&(vt=o.R8),$===o.UNSIGNED_SHORT&&Dt&&(vt=Dt.R16_EXT),$===o.SHORT&&Dt&&(vt=Dt.R16_SNORM_EXT)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.R8UI),$===o.UNSIGNED_SHORT&&(vt=o.R16UI),$===o.UNSIGNED_INT&&(vt=o.R32UI),$===o.BYTE&&(vt=o.R8I),$===o.SHORT&&(vt=o.R16I),$===o.INT&&(vt=o.R32I)),E===o.RG&&($===o.FLOAT&&(vt=o.RG32F),$===o.HALF_FLOAT&&(vt=o.RG16F),$===o.UNSIGNED_BYTE&&(vt=o.RG8),$===o.UNSIGNED_SHORT&&Dt&&(vt=Dt.RG16_EXT),$===o.SHORT&&Dt&&(vt=Dt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RG8UI),$===o.UNSIGNED_SHORT&&(vt=o.RG16UI),$===o.UNSIGNED_INT&&(vt=o.RG32UI),$===o.BYTE&&(vt=o.RG8I),$===o.SHORT&&(vt=o.RG16I),$===o.INT&&(vt=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),$===o.UNSIGNED_INT&&(vt=o.RGB32UI),$===o.BYTE&&(vt=o.RGB8I),$===o.SHORT&&(vt=o.RGB16I),$===o.INT&&(vt=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),$===o.UNSIGNED_INT&&(vt=o.RGBA32UI),$===o.BYTE&&(vt=o.RGBA8I),$===o.SHORT&&(vt=o.RGBA16I),$===o.INT&&(vt=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_SHORT&&Dt&&(vt=Dt.RGB16_EXT),$===o.SHORT&&Dt&&(vt=Dt.RGB16_SNORM_EXT),$===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),E===o.RGBA){const Et=Tt?Fu:ze.getTransfer(ht);$===o.FLOAT&&(vt=o.RGBA32F),$===o.HALF_FLOAT&&(vt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(vt=Et===Ze?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT&&Dt&&(vt=Dt.RGBA16_EXT),$===o.SHORT&&Dt&&(vt=Dt.RGBA16_SNORM_EXT),$===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function L(U,E){let $;return U?E===null||E===ca||E===wl?$=o.DEPTH24_STENCIL8:E===ra?$=o.DEPTH32F_STENCIL8:E===Cl&&($=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ca||E===wl?$=o.DEPTH_COMPONENT24:E===ra?$=o.DEPTH_COMPONENT32F:E===Cl&&($=o.DEPTH_COMPONENT16),$}function w(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==In&&U.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function D(U){const E=U.target;E.removeEventListener("dispose",D),P(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&g.delete(E)}function b(U){const E=U.target;E.removeEventListener("dispose",b),j(E)}function P(U){const E=s.get(U);if(E.__webglInit===void 0)return;const $=U.source,st=y.get($);if(st){const ht=st[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&H(U),Object.keys(st).length===0&&y.delete($)}s.remove(U)}function H(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,st=y.get($);delete st[E.__cacheKey],h.memory.textures--}function j(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ht=0;ht<E.__webglFramebuffer[st].length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[st][ht]);else o.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)o.deleteFramebuffer(E.__webglFramebuffer[st]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let st=0,ht=$.length;st<ht;st++){const Tt=s.get($[st]);Tt.__webglTexture&&(o.deleteTexture(Tt.__webglTexture),h.memory.textures--),s.remove($[st])}s.remove(U)}let Q=0;function J(){Q=0}function X(){return Q}function Z(U){Q=U}function V(){const U=Q;return U>=l.maxTextures&&ue("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+l.maxTextures),Q+=1,U}function W(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function at(U,E){const $=s.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const st=U.image;if(st===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{At($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function ot(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){At($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function ft(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){At($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function St(U,E){const $=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){It($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const Kt={[Mp]:o.REPEAT,[za]:o.CLAMP_TO_EDGE,[Ep]:o.MIRRORED_REPEAT},Ft={[In]:o.NEAREST,[bb]:o.NEAREST_MIPMAP_NEAREST,[nu]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Ld]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},F={[Cb]:o.NEVER,[Lb]:o.ALWAYS,[wb]:o.LESS,[dm]:o.LEQUAL,[Db]:o.EQUAL,[pm]:o.GEQUAL,[Nb]:o.GREATER,[Ub]:o.NOTEQUAL};function _t(U,E){if(E.type===ra&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===Ld||E.magFilter===nu||E.magFilter===tr||E.minFilter===Gn||E.minFilter===Ld||E.minFilter===nu||E.minFilter===tr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Kt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Kt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Kt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Ft[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Ft[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==nu&&E.minFilter!==tr||E.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ct(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",D));const st=E.source;let ht=y.get(st);ht===void 0&&(ht={},y.set(st,ht));const Tt=W(E);if(Tt!==U.__cacheKey){ht[Tt]===void 0&&(ht[Tt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),ht[Tt].usedTimes++;const Dt=ht[U.__cacheKey];Dt!==void 0&&(ht[U.__cacheKey].usedTimes--,Dt.usedTimes===0&&H(E)),U.__cacheKey=Tt,U.__webglTexture=ht[Tt].texture}return $}function et(U,E,$){return Math.floor(Math.floor(U/$)/E)}function mt(U,E,$,st){const Tt=U.updateRanges;if(Tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,st,E.data);else{Tt.sort((ne,Bt)=>ne.start-Bt.start);let Dt=0;for(let ne=1;ne<Tt.length;ne++){const Bt=Tt[Dt],zt=Tt[ne],qt=Bt.start+Bt.count,oe=et(zt.start,E.width,4),de=et(Bt.start,E.width,4);zt.start<=qt+1&&oe===de&&et(zt.start+zt.count-1,E.width,4)===oe?Bt.count=Math.max(Bt.count,zt.start+zt.count-Bt.start):(++Dt,Tt[Dt]=zt)}Tt.length=Dt+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),Et=i.getParameter(o.UNPACK_SKIP_PIXELS),Ut=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ne=0,Bt=Tt.length;ne<Bt;ne++){const zt=Tt[ne],qt=Math.floor(zt.start/4),oe=Math.ceil(zt.count/4),de=qt%E.width,K=Math.floor(qt/E.width),Nt=oe,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,de,K,Nt,Mt,$,st,E.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function At(U,E,$){let st=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=o.TEXTURE_3D);const ht=Ct(U,E),Tt=E.source;i.bindTexture(st,U.__webglTexture,o.TEXTURE0+$);const Dt=s.get(Tt);if(Tt.version!==Dt.__version||ht===!0){if(i.activeTexture(o.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Mt=ze.getPrimaries(ze.workingColorSpace),Lt=E.colorSpace===ys?null:ze.getPrimaries(E.colorSpace),Xt=E.colorSpace===ys||Mt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Et=M(E.image,!1,l.maxTextureSize);Et=le(E,Et);const Ut=u.convert(E.format,E.colorSpace),ne=u.convert(E.type);let Bt=C(E.internalFormat,Ut,ne,E.normalized,E.colorSpace,E.isVideoTexture);_t(st,E);let zt;const qt=E.mipmaps,oe=E.isVideoTexture!==!0,de=Dt.__version===void 0||ht===!0,K=Tt.dataReady,Nt=w(E,Et);if(E.isDepthTexture)Bt=L(E.format===er,E.type),de&&(oe?i.texStorage2D(o.TEXTURE_2D,1,Bt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ut,ne,null));else if(E.isDataTexture)if(qt.length>0){oe&&de&&i.texStorage2D(o.TEXTURE_2D,Nt,Bt,qt[0].width,qt[0].height);for(let Mt=0,Lt=qt.length;Mt<Lt;Mt++)zt=qt[Mt],oe?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ut,ne,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Ut,ne,zt.data);E.generateMipmaps=!1}else oe?(de&&i.texStorage2D(o.TEXTURE_2D,Nt,Bt,Et.width,Et.height),K&&mt(E,Et,Ut,ne)):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ut,ne,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Bt,qt[0].width,qt[0].height,Et.depth);for(let Mt=0,Lt=qt.length;Mt<Lt;Mt++)if(zt=qt[Mt],E.format!==Gi)if(Ut!==null)if(oe){if(K)if(E.layerUpdates.size>0){const Xt=Ax(zt.width,zt.height,E.format,E.type);for(const bt of E.layerUpdates){const ee=zt.data.subarray(bt*Xt/zt.data.BYTES_PER_ELEMENT,(bt+1)*Xt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,bt,zt.width,zt.height,1,Ut,ee)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Et.depth,Ut,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,Et.depth,0,zt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?K&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Et.depth,Ut,ne,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,Et.depth,0,Ut,ne,zt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&de&&i.texStorage2D(o.TEXTURE_2D,Nt,Bt,qt[0].width,qt[0].height);for(let Mt=0,Lt=qt.length;Mt<Lt;Mt++)zt=qt[Mt],E.format!==Gi?Ut!==null?oe?K&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ut,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,zt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ut,ne,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Ut,ne,zt.data)}else if(E.isDataArrayTexture)if(oe){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Bt,Et.width,Et.height,Et.depth),K)if(E.layerUpdates.size>0){const Mt=Ax(Et.width,Et.height,E.format,E.type);for(const Lt of E.layerUpdates){const Xt=Et.data.subarray(Lt*Mt/Et.data.BYTES_PER_ELEMENT,(Lt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,Et.width,Et.height,1,Ut,ne,Xt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ut,ne,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,Ut,ne,Et.data);else if(E.isData3DTexture)oe?(de&&i.texStorage3D(o.TEXTURE_3D,Nt,Bt,Et.width,Et.height,Et.depth),K&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ut,ne,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,Ut,ne,Et.data);else if(E.isFramebufferTexture){if(de)if(oe)i.texStorage2D(o.TEXTURE_2D,Nt,Bt,Et.width,Et.height);else{let Mt=Et.width,Lt=Et.height;for(let Xt=0;Xt<Nt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Bt,Mt,Lt,0,Ut,ne,null),Mt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),Et.parentNode!==Mt){Mt.appendChild(Et),g.add(E),Mt.onpaint=Lt=>{const Xt=Lt.changedElements;for(const bt of g)Xt.includes(bt.image)&&(bt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Et);else{const Xt=o.RGBA,bt=o.RGBA,ee=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,bt,ee,Et)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(qt.length>0){if(oe&&de){const Mt=ie(qt[0]);i.texStorage2D(o.TEXTURE_2D,Nt,Bt,Mt.width,Mt.height)}for(let Mt=0,Lt=qt.length;Mt<Lt;Mt++)zt=qt[Mt],oe?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut,ne,zt):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Ut,ne,zt);E.generateMipmaps=!1}else if(oe){if(de){const Mt=ie(Et);i.texStorage2D(o.TEXTURE_2D,Nt,Bt,Mt.width,Mt.height)}K&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,ne,Et)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ut,ne,Et);S(E)&&I(st),Dt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function It(U,E,$){if(E.image.length!==6)return;const st=Ct(U,E),ht=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const Tt=s.get(ht);if(ht.version!==Tt.__version||st===!0){i.activeTexture(o.TEXTURE0+$);const Dt=ze.getPrimaries(ze.workingColorSpace),vt=E.colorSpace===ys?null:ze.getPrimaries(E.colorSpace),Et=E.colorSpace===ys||Dt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let bt=0;bt<6;bt++)!Ut&&!ne?Bt[bt]=M(E.image[bt],!0,l.maxCubemapSize):Bt[bt]=ne?E.image[bt].image:E.image[bt],Bt[bt]=le(E,Bt[bt]);const zt=Bt[0],qt=u.convert(E.format,E.colorSpace),oe=u.convert(E.type),de=C(E.internalFormat,qt,oe,E.normalized,E.colorSpace),K=E.isVideoTexture!==!0,Nt=Tt.__version===void 0||st===!0,Mt=ht.dataReady;let Lt=w(E,zt);_t(o.TEXTURE_CUBE_MAP,E);let Xt;if(Ut){K&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,de,zt.width,zt.height);for(let bt=0;bt<6;bt++){Xt=Bt[bt].mipmaps;for(let ee=0;ee<Xt.length;ee++){const kt=Xt[ee];E.format!==Gi?qt!==null?K?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee,0,0,kt.width,kt.height,qt,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee,de,kt.width,kt.height,0,kt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee,0,0,kt.width,kt.height,qt,oe,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee,de,kt.width,kt.height,0,qt,oe,kt.data)}}}else{if(Xt=E.mipmaps,K&&Nt){Xt.length>0&&Lt++;const bt=ie(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,de,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(ne){K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Bt[bt].width,Bt[bt].height,qt,oe,Bt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,Bt[bt].width,Bt[bt].height,0,qt,oe,Bt[bt].data);for(let ee=0;ee<Xt.length;ee++){const Pe=Xt[ee].image[bt].image;K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee+1,0,0,Pe.width,Pe.height,qt,oe,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee+1,de,Pe.width,Pe.height,0,qt,oe,Pe.data)}}else{K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,qt,oe,Bt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,qt,oe,Bt[bt]);for(let ee=0;ee<Xt.length;ee++){const kt=Xt[ee];K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee+1,0,0,qt,oe,kt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ee+1,de,qt,oe,kt.image[bt])}}}S(E)&&I(o.TEXTURE_CUBE_MAP),Tt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function gt(U,E,$,st,ht,Tt){const Dt=u.convert($.format,$.colorSpace),vt=u.convert($.type),Et=C($.internalFormat,Dt,vt,$.normalized,$.colorSpace),Ut=s.get(E),ne=s.get($);if(ne.__renderTarget=E,!Ut.__hasExternalTextures){const Bt=Math.max(1,E.width>>Tt),zt=Math.max(1,E.height>>Tt);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?i.texImage3D(ht,Tt,Et,Bt,zt,E.depth,0,Dt,vt,null):i.texImage2D(ht,Tt,Et,Bt,zt,0,Dt,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Qt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,st,ht,ne.__webglTexture,0,Rt(E)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,st,ht,ne.__webglTexture,Tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const st=E.depthTexture,ht=st&&st.isDepthTexture?st.type:null,Tt=L(E.stencilBuffer,ht),Dt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Qt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt(E),Tt,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt(E),Tt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,U)}else{const st=E.textures;for(let ht=0;ht<st.length;ht++){const Tt=st[ht],Dt=u.convert(Tt.format,Tt.colorSpace),vt=u.convert(Tt.type),Et=C(Tt.internalFormat,Dt,vt,Tt.normalized,Tt.colorSpace);Qt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt(E),Et,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt(E),Et,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Et,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Fe(U,E,$){const st=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=s.get(E.depthTexture);if(ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),ht.__webglTexture===void 0){ht.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),_t(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ut=u.convert(E.depthTexture.format),ne=u.convert(E.depthTexture.type);let Bt;E.depthTexture.format===Ga?Bt=o.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Bt=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Bt,E.width,E.height,0,Ut,ne,null)}}else at(E.depthTexture,0);const Tt=ht.__webglTexture,Dt=Rt(E),vt=st?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,Et=E.depthTexture.format===er?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ga)Qt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,vt,Tt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,vt,Tt,0);else if(E.depthTexture.format===er)Qt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,vt,Tt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Et,vt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(U){const E=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const st=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=st}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let st=0;st<6;st++)Fe(E.__webglFramebuffer[st],U,st);else{const st=U.texture.mipmaps;st&&st.length>0?Fe(E.__webglFramebuffer[0],U,0):Fe(E.__webglFramebuffer,U,0)}else if($){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=o.createRenderbuffer(),wt(E.__webglDepthbuffer[st],U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer[st];o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Tt)}}else{const st=U.texture.mipmaps;if(st&&st.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),wt(E.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(U,E,$){const st=s.get(U);E!==void 0&&gt(st.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&pe(U)}function ye(U){const E=U.texture,$=s.get(U),st=s.get(E);U.addEventListener("dispose",b);const ht=U.textures,Tt=U.isWebGLCubeRenderTarget===!0,Dt=ht.length>1;if(Dt||(st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture()),st.__version=E.version,h.memory.textures++),Tt){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let Et=0;Et<E.mipmaps.length;Et++)$.__webglFramebuffer[vt][Et]=o.createFramebuffer()}else $.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)$.__webglFramebuffer[vt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let vt=0,Et=ht.length;vt<Et;vt++){const Ut=s.get(ht[vt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Qt(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Et=ht[vt];$.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[vt]);const Ut=u.convert(Et.format,Et.colorSpace),ne=u.convert(Et.type),Bt=C(Et.internalFormat,Ut,ne,Et.normalized,Et.colorSpace,U.isXRRenderTarget===!0),zt=Rt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,$.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),wt($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture),_t(o.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)gt($.__webglFramebuffer[vt][Et],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Et);else gt($.__webglFramebuffer[vt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);S(E)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let vt=0,Et=ht.length;vt<Et;vt++){const Ut=ht[vt],ne=s.get(Ut);let Bt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Bt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ne.__webglTexture),_t(Bt,Ut),gt($.__webglFramebuffer,U,Ut,o.COLOR_ATTACHMENT0+vt,Bt,0),S(Ut)&&I(Bt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(vt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,st.__webglTexture),_t(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)gt($.__webglFramebuffer[Et],U,E,o.COLOR_ATTACHMENT0,vt,Et);else gt($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,vt,0);S(E)&&I(vt),i.unbindTexture()}U.depthBuffer&&pe(U)}function ae(U){const E=U.textures;for(let $=0,st=E.length;$<st;$++){const ht=E[$];if(S(ht)){const Tt=B(U),Dt=s.get(ht).__webglTexture;i.bindTexture(Tt,Dt),I(Tt),i.unbindTexture()}}}const se=[],Ge=[];function rn(U){if(U.samples>0){if(Qt(U)===!1){const E=U.textures,$=U.width,st=U.height;let ht=o.COLOR_BUFFER_BIT;const Tt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=s.get(U),vt=E.length>1;if(vt)for(let Ut=0;Ut<E.length;Ut++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Et=U.texture.mipmaps;Et&&Et.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ut=0;Ut<E.length;Ut++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);const ne=s.get(E[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,$,st,0,0,$,st,ht,o.NEAREST),p===!0&&(se.length=0,Ge.length=0,se.push(o.COLOR_ATTACHMENT0+Ut),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(se.push(Tt),Ge.push(Tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ge)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Ut=0;Ut<E.length;Ut++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);const ne=s.get(E[Ut]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Rt(U){return Math.min(l.maxSamples,U.samples)}function Qt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(U){const E=h.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function le(U,E){const $=U.colorSpace,st=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Bu&&$!==ys&&(ze.getTransfer($)===Ze?(st!==Gi||ht!==_i)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",$)),E}function ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=V,this.resetTextureUnits=J,this.getTextureUnits=X,this.setTextureUnits=Z,this.setTexture2D=at,this.setTexture2DArray=ot,this.setTexture3D=ft,this.setTextureCube=St,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Lw(o,t){function i(s,l=ys){let u;const h=ze.getTransfer(l);if(s===_i)return o.UNSIGNED_BYTE;if(s===lm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===cm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===vS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===xS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===gS)return o.BYTE;if(s===_S)return o.SHORT;if(s===Cl)return o.UNSIGNED_SHORT;if(s===om)return o.INT;if(s===ca)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===SS)return o.ALPHA;if(s===yS)return o.RGB;if(s===Gi)return o.RGBA;if(s===Ga)return o.DEPTH_COMPONENT;if(s===er)return o.DEPTH_STENCIL;if(s===MS)return o.RED;if(s===um)return o.RED_INTEGER;if(s===ar)return o.RG;if(s===fm)return o.RG_INTEGER;if(s===hm)return o.RGBA_INTEGER;if(s===wu||s===Du||s===Nu||s===Uu)if(h===Ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===wu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===wu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Du)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bp||s===Tp||s===Ap||s===Rp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===bp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ap)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cp||s===wp||s===Dp||s===Np||s===Up||s===Iu||s===Lp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Cp||s===wp)return h===Ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Dp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Np)return u.COMPRESSED_R11_EAC;if(s===Up)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Iu)return u.COMPRESSED_RG11_EAC;if(s===Lp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Op||s===Pp||s===Ip||s===zp||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===kp||s===Xp||s===qp||s===Yp||s===Wp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Op)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wp)return h===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jp||s===Zp||s===Kp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===jp)return h===Ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qp||s===Jp||s===zu||s===$p)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Qp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Jp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$p)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new NS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ha({vertexShader:Ow,fragmentShader:Pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Zu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends bs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,x=null,g=null,v=null,y=null,T=null;const N=typeof XRWebGLBinding<"u",M=new Iw,S={},I=i.getContextAttributes();let B=null,C=null;const L=[],w=[],D=new Jt;let b=null,P=null;const H=new Di;H.viewport=new ln;const j=new Di;j.viewport=new ln;const Q=[H,j],J=new V1;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let mt=L[et];return mt===void 0&&(mt=new Gd,L[et]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(et){let mt=L[et];return mt===void 0&&(mt=new Gd,L[et]=mt),mt.getGripSpace()},this.getHand=function(et){let mt=L[et];return mt===void 0&&(mt=new Gd,L[et]=mt),mt.getHandSpace()};function V(et){const mt=w.indexOf(et.inputSource);if(mt===-1)return;const At=L[mt];At!==void 0&&(At.update(et.inputSource,et.frame,m||h),At.dispatchEvent({type:et.type,data:et.inputSource}))}function W(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",at);for(let et=0;et<L.length;et++){const mt=w[et];mt!==null&&(w[et]=null,L[et].disconnect(mt))}X=null,Z=null,M.reset();for(const et in S)delete S[et];if(t.setRenderTarget(B),y=null,v=null,g=null,l=null,C=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),P!==null){const et=P.camera;et.fov=P.fov,et.zoom=P.zoom,et.updateProjectionMatrix(),P=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(et){m=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&N&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",W),l.addEventListener("inputsourceschange",at),I.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,It=null,gt=null;I.depth&&(gt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=I.stencil?er:Ga,It=I.stencil?wl:ca);const wt={colorFormat:i.RGBA8,depthFormat:gt,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(wt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Vi(v.textureWidth,v.textureHeight,{format:Gi,type:_i,depthTexture:new Nl(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(et){for(let mt=0;mt<et.removed.length;mt++){const At=et.removed[mt],It=w.indexOf(At);It>=0&&(w[It]=null,L[It].disconnect(At))}for(let mt=0;mt<et.added.length;mt++){const At=et.added[mt];let It=w.indexOf(At);if(It===-1){for(let wt=0;wt<L.length;wt++)if(wt>=w.length){w.push(At),It=wt;break}else if(w[wt]===null){w[wt]=At,It=wt;break}if(It===-1)break}const gt=L[It];gt&&gt.connect(At)}}const ot=new Y,ft=new Y;function St(et,mt,At){ot.setFromMatrixPosition(mt.matrixWorld),ft.setFromMatrixPosition(At.matrixWorld);const It=ot.distanceTo(ft),gt=mt.projectionMatrix.elements,wt=At.projectionMatrix.elements,Fe=gt[14]/(gt[10]-1),pe=gt[14]/(gt[10]+1),ve=(gt[9]+1)/gt[5],ye=(gt[9]-1)/gt[5],ae=(gt[8]-1)/gt[0],se=(wt[8]+1)/wt[0],Ge=Fe*ae,rn=Fe*se,Rt=It/(-ae+se),Qt=Rt*-ae;if(mt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Qt),et.translateZ(Rt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),gt[10]===-1)et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const G=Fe+Rt,le=pe+Rt,ie=Ge-Qt,U=rn+(It-Qt),E=ve*pe/le*G,$=ye*pe/le*G;et.projectionMatrix.makePerspective(ie,U,E,$,G,le),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Kt(et,mt){mt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(mt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let mt=et.near,At=et.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),J.near=j.near=H.near=mt,J.far=j.far=H.far=At,(X!==J.near||Z!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),X=J.near,Z=J.far),J.layers.mask=et.layers.mask|6,H.layers.mask=J.layers.mask&-5,j.layers.mask=J.layers.mask&-3;const It=et.parent,gt=J.cameras;Kt(J,It);for(let wt=0;wt<gt.length;wt++)Kt(gt[wt],It);gt.length===2?St(J,H,j):J.projectionMatrix.copy(H.projectionMatrix),P===null&&et.isPerspectiveCamera&&(P={camera:et,fov:et.fov,zoom:et.zoom}),Ft(et,J,It)};function Ft(et,mt,At){At===null?et.matrix.copy(mt.matrixWorld):(et.matrix.copy(At.matrixWorld),et.matrix.invert(),et.matrix.multiply(mt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=em*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(et){p=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(et){return S[et]};let F=null;function _t(et,mt){if(x=mt.getViewerPose(m||h),T=mt,x!==null){const At=x.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let It=!1;At.length!==J.cameras.length&&(J.cameras.length=0,It=!0);for(let pe=0;pe<At.length;pe++){const ve=At[pe];let ye=null;if(y!==null)ye=y.getViewport(ve);else{const se=g.getViewSubImage(v,ve);ye=se.viewport,pe===0&&(t.setRenderTargetTextures(C,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(C))}let ae=Q[pe];ae===void 0&&(ae=new Di,ae.layers.enable(pe),ae.viewport=new ln,Q[pe]=ae),ae.matrix.fromArray(ve.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ye.x,ye.y,ye.width,ye.height),pe===0&&(J.matrix.copy(ae.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),It===!0&&J.cameras.push(ae)}const gt=l.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){g=s.getBinding();const pe=g.getDepthInformation(At[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(gt&&gt.includes("camera-access")&&N){t.state.unbindTexture(),g=s.getBinding();for(let pe=0;pe<At.length;pe++){const ve=At[pe].camera;if(ve){let ye=S[ve];ye||(ye=new NS,S[ve]=ye);const ae=g.getCameraImage(ve);ye.sourceTexture=ae}}}}for(let At=0;At<L.length;At++){const It=w[At],gt=L[At];It!==null&&gt!==void 0&&gt.update(It,mt,m||h)}F&&F(et,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const Ct=new zS;Ct.setAnimationLoop(_t),this.setAnimationLoop=function(et){F=et},this.dispose=function(){}}}const Bw=new an,XS=new _e;XS.set(-1,0,0,0,1,0,0,0,1);function Fw(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,OS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,I,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(u(M,S),T(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),N(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,I,B):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ni&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ni&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const I=t.get(S),B=I.envMap,C=I.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(XS),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,I,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*I,M.scale.value=B*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,I){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function N(M,S){const I=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Hw(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const w=L.program;s.uniformBlockBinding(C,w)}function m(C,L){let w=l[C.id];w===void 0&&(M(C),w=x(C),l[C.id]=w,C.addEventListener("dispose",I));const D=L.program;s.updateUBOMapping(C,D);const b=t.render.frame;u[C.id]!==b&&(v(C),u[C.id]=b)}function x(C){const L=g();C.__bindingPointIndex=L;const w=o.createBuffer(),D=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,D,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const L=l[C.id],w=C.uniforms,D=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let b=0,P=w.length;b<P;b++){const H=w[b];if(Array.isArray(H))for(let j=0,Q=H.length;j<Q;j++)y(H[j],b,j,D);else y(H,b,0,D)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,L,w,D){if(N(C,L,w,D)===!0){const b=C.__offset,P=C.value;if(Array.isArray(P)){let H=0;for(let j=0;j<P.length;j++){const Q=P[j],J=S(Q);T(Q,C.__data,H),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function T(C,L,w){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,w)}function N(C,L,w,D){const b=C.value,P=L+"_"+w;if(D[P]===void 0)return typeof b=="number"||typeof b=="boolean"?D[P]=b:ArrayBuffer.isView(b)?D[P]=b.slice():D[P]=b.clone(),!0;{const H=D[P];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return D[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function M(C){const L=C.uniforms;let w=0;const D=16;for(let P=0,H=L.length;P<H;P++){const j=Array.isArray(L[P])?L[P]:[L[P]];for(let Q=0,J=j.length;Q<J;Q++){const X=j[Q],Z=Array.isArray(X.value)?X.value:[X.value];for(let V=0,W=Z.length;V<W;V++){const at=Z[V],ot=S(at),ft=w%D,St=ft%ot.boundary,Kt=ft+St;w+=St,Kt!==0&&D-Kt<ot.storage&&(w+=D-Kt),X.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=ot.storage}}}const b=w%D;return b>0&&(w+=D-b),C.__size=w,C.__cache={},this}function S(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",C),L}function I(C){const L=C.target;L.removeEventListener("dispose",I);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function B(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:B}}const Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function Vw(){return aa===null&&(aa=new l1(Gw,16,16,ar,ua),aa.name="DFG_LUT",aa.minFilter=Gn,aa.magFilter=Gn,aa.wrapS=za,aa.wrapT=za,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class kw{constructor(t={}){const{canvas:i=Ib(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=_i}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const N=y,M=new Set([hm,fm,um]),S=new Set([_i,ca,Cl,wl,lm,cm]),I=new Uint32Array(4),B=new Int32Array(4),C=new Y;let L=null,w=null;const D=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let j=!1,Q=null,J=null,X=null,Z=null;this._outputColorSpace=gi;let V=0,W=0,at=null,ot=-1,ft=null;const St=new ln,Kt=new ln;let Ft=null;const F=new De(0);let _t=0,Ct=i.width,et=i.height,mt=1,At=null,It=null;const gt=new ln(0,0,Ct,et),wt=new ln(0,0,Ct,et);let Fe=!1;const pe=new _m;let ve=!1,ye=!1;const ae=new an,se=new Y,Ge=new ln,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Qt(){return at===null?mt:1}let G=s;function le(A,k){return i.getContext(A,k)}let ie,U,E,$,st,ht,Tt,Dt,vt,Et,Ut,ne,Bt,zt,qt,oe,de,K,Nt,Mt,Lt,Xt,bt;try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rm}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",ai,!1),G===null){const k="webgl2";if(G=le(k,A),G===null)throw le(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(A){throw i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),He("WebGLRenderer: "+A.message),A}function ee(){ie=new VR(G),ie.init(),Lt=new Lw(G,ie),U=new UR(G,ie,t,Lt),E=new Nw(G,ie),U.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),J=G.createFramebuffer(),X=G.createFramebuffer(),Z=G.createFramebuffer(),$=new qR(G),st=new _w,ht=new Uw(G,ie,E,st,U,Lt,$),Tt=new GR(H),Dt=new W1(G),Xt=new DR(G,Dt),vt=new kR(G,Dt,$,Xt),Et=new WR(G,vt,Dt,Xt,$),K=new YR(G,U,ht),qt=new LR(st),Ut=new gw(H,Tt,ie,U,Xt,qt),ne=new Fw(H,st),Bt=new xw,zt=new Tw(ie),de=new wR(H,Tt,E,Et,T,p),oe=new Dw(H,Et,U),bt=new Hw(G,$,U,E),Nt=new NR(G,ie,$),Mt=new XR(G,ie,$),$.programs=Ut.programs,H.capabilities=U,H.extensions=ie,H.properties=st,H.renderLists=Bt,H.shadowMap=oe,H.state=E,H.info=$}N!==_i&&(P=new ZR(N,i.width,i.height,d,l,u));const kt=new zw(H,G);this.xr=kt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(A){A!==void 0&&(mt=A,this.setSize(Ct,et,!1))},this.getSize=function(A){return A.set(Ct,et)},this.setSize=function(A,k,pt=!0){if(kt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=A,et=k,i.width=Math.floor(A*mt),i.height=Math.floor(k*mt),pt===!0&&(i.style.width=A+"px",i.style.height=k+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Ct*mt,et*mt).floor()},this.setDrawingBufferSize=function(A,k,pt){Ct=A,et=k,mt=pt,i.width=Math.floor(A*pt),i.height=Math.floor(k*pt),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(N===_i){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(St)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,k,pt,lt){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,k,pt,lt),E.viewport(St.copy(gt).multiplyScalar(mt).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,k,pt,lt){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,k,pt,lt),E.scissor(Kt.copy(wt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){E.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,pt=!0){let lt=0;if(A){let ct=!1;if(at!==null){const Ht=at.texture.format;ct=M.has(Ht)}if(ct){const Ht=at.texture.type,Yt=S.has(Ht),Ot=de.getClearColor(),Zt=de.getClearAlpha(),$t=Ot.r,fe=Ot.g,ge=Ot.b;Yt?(I[0]=$t,I[1]=fe,I[2]=ge,I[3]=Zt,G.clearBufferuiv(G.COLOR,0,I)):(B[0]=$t,B[1]=fe,B[2]=ge,B[3]=Zt,G.clearBufferiv(G.COLOR,0,B))}else lt|=G.COLOR_BUFFER_BIT}k&&(lt|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),de.dispose(),Bt.dispose(),zt.dispose(),st.dispose(),Tt.dispose(),Et.dispose(),Xt.dispose(),bt.dispose(),Ut.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",As),kt.removeEventListener("sessionend",ka),ki.stop()};function Pe(A){A.preventDefault(),Zv("WebGLRenderer: Context Lost."),j=!0}function me(){Zv("WebGLRenderer: Context Restored."),j=!1;const A=$.autoReset,k=oe.enabled,pt=oe.autoUpdate,lt=oe.needsUpdate,ct=oe.type;ee(),$.autoReset=A,oe.enabled=k,oe.autoUpdate=pt,oe.needsUpdate=lt,oe.type=ct}function ai(A){He("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vi(A){const k=A.target;k.removeEventListener("dispose",vi),Ju(k)}function Ju(A){sr(A),st.remove(A)}function sr(A){const k=st.get(A).programs;k!==void 0&&(k.forEach(function(pt){Ut.releaseProgram(pt)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,pt,lt,ct,Ht){k===null&&(k=rn);const Yt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Ot=Eo(A,k,pt,lt,ct);E.setMaterial(lt,Yt);let Zt=pt.index,$t=1;if(lt.wireframe===!0){if(Zt=vt.getWireframeAttribute(pt),Zt===void 0)return;$t=2}const fe=pt.drawRange,ge=pt.attributes.position;let Wt=fe.start*$t,Re=(fe.start+fe.count)*$t;Ht!==null&&(Wt=Math.max(Wt,Ht.start*$t),Re=Math.min(Re,(Ht.start+Ht.count)*$t)),Zt!==null?(Wt=Math.max(Wt,0),Re=Math.min(Re,Zt.count)):ge!=null&&(Wt=Math.max(Wt,0),Re=Math.min(Re,ge.count));const Ee=Re-Wt;if(Ee<0||Ee===1/0)return;Xt.setup(ct,lt,Ot,pt,Zt);let Qe,Xe=Nt;if(Zt!==null&&(Qe=Dt.get(Zt),Xe=Mt,Xe.setIndex(Qe)),ct.isMesh)lt.wireframe===!0?(E.setLineWidth(lt.wireframeLinewidth*Qt()),Xe.setMode(G.LINES)):Xe.setMode(G.TRIANGLES);else if(ct.isLine){let Sn=lt.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*Qt()),ct.isLineSegments?Xe.setMode(G.LINES):ct.isLineLoop?Xe.setMode(G.LINE_LOOP):Xe.setMode(G.LINE_STRIP)}else ct.isPoints?Xe.setMode(G.POINTS):ct.isSprite&&Xe.setMode(G.TRIANGLES);if(ct.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Xe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const Sn=ct._multiDrawStarts,Gt=ct._multiDrawCounts,cn=ct._multiDrawCount,Ie=Zt?Dt.get(Zt).bytesPerElement:1,Vn=st.get(lt).currentProgram.getUniforms();for(let si=0;si<cn;si++)Vn.setValue(G,"_gl_DrawID",si),Xe.render(Sn[si]/Ie,Gt[si])}else if(ct.isInstancedMesh)Xe.renderInstances(Wt,Ee,ct.count);else if(pt.isInstancedBufferGeometry){const Sn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Gt=Math.min(pt.instanceCount,Sn);Xe.renderInstances(Wt,Ee,Gt)}else Xe.render(Wt,Ee)};function Ts(A,k,pt,lt){Q!==null&&A.isNodeMaterial&&Q.setObject(lt,A),ve===!0&&qt.setState(A,pt,!1),A.transparent===!0&&A.side===Pa&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,Rs(A,k,lt),A.side=nr,A.needsUpdate=!0,Rs(A,k,lt),A.side=Pa):Rs(A,k,lt)}this.compile=function(A,k,pt=null){pt===null&&(pt=A),Q!==null&&Q.renderStart(A,k,pt),w=zt.get(pt),w.init(k),b.push(w),pt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(k.layers)&&(w.pushLight(ct),ct.castShadow&&w.pushShadow(ct))}),A!==pt&&A.traverseVisible(function(ct){ct.isLight&&ct.layers.test(k.layers)&&(w.pushLight(ct),ct.castShadow&&w.pushShadow(ct))}),w.setupLights(),Q!==null&&Q.updateLights(w.state.lightsArray),ye=this.localClippingEnabled,ve=qt.init(this.clippingPlanes,ye),ve===!0&&qt.setGlobalState(this.clippingPlanes,k),Q!==null&&oe.render(w.state.shadowsArray,pt,k);const lt=new Set;return A.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Ht=ct.material;if(Ht)if(Array.isArray(Ht))for(let Yt=0;Yt<Ht.length;Yt++){const Ot=Ht[Yt];Ts(Ot,pt,k,ct),lt.add(Ot)}else Ts(Ht,pt,k,ct),lt.add(Ht)}),w=b.pop(),Q!==null&&Q.renderEnd(),lt},this.compileAsync=function(A,k,pt=null){const lt=this.compile(A,k,pt);return new Promise(ct=>{function Ht(){if(lt.forEach(function(Yt){const Zt=st.get(Yt).currentProgram;(Zt===void 0||Zt.isReady())&&lt.delete(Yt)}),lt.size===0){ct(A);return}setTimeout(Ht,10)}ie.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Va=null;function pa(A){Va&&Va(A)}function As(){ki.stop()}function ka(){ki.start()}const ki=new zS;ki.setAnimationLoop(pa),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Va=A,kt.setAnimationLoop(A),A===null?ki.stop():ki.start()},kt.addEventListener("sessionstart",As),kt.addEventListener("sessionend",ka),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;Q!==null&&Q.renderStart(A,k);const pt=kt.enabled===!0&&kt.isPresenting===!0,lt=P!==null&&(at===null||pt)&&P.begin(H,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(k),k=kt.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,k,at),w=zt.get(A,b.length),w.init(k),w.state.textureUnits=ht.getTextureUnits(),b.push(w),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),pe.setFromProjectionMatrix(ae,oa,k.reversedDepth),ye=this.localClippingEnabled,ve=qt.init(this.clippingPlanes,ye),L=Bt.get(A,D.length),L.init(),D.push(L),kt.enabled===!0&&kt.isPresenting===!0){const Yt=H.xr.getDepthSensingMesh();Yt!==null&&vo(Yt,k,-1/0,H.sortObjects)}vo(A,k,0,H.sortObjects),L.finish(),Q!==null&&Q.updateLights(w.state.lightsArray),H.sortObjects===!0&&L.sort(At,It),Rt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Rt&&de.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&qt.beginShadows();const ct=w.state.shadowsArray;if(oe.render(ct,A,k),ve===!0&&qt.endShadows(),(lt&&P.hasRenderPass())===!1){const Yt=L.opaque,Ot=L.transmissive;if(w.setupLights(),k.isArrayCamera){const Zt=k.cameras;if(Ot.length>0)for(let $t=0,fe=Zt.length;$t<fe;$t++){const ge=Zt[$t];rr(Yt,Ot,A,ge)}Rt&&de.render(A);for(let $t=0,fe=Zt.length;$t<fe;$t++){const ge=Zt[$t];xo(L,A,ge,ge.viewport)}}else Ot.length>0&&rr(Yt,Ot,A,k),Rt&&de.render(A),xo(L,A,k)}at!==null&&W===0&&(ht.updateMultisampleRenderTarget(at),ht.updateRenderTargetMipmap(at)),lt&&P.end(H),A.isScene===!0&&A.onAfterRender(H,A,k),Xt.resetDefaultState(),ot=-1,ft=null,b.pop(),b.length>0?(w=b[b.length-1],ht.setTextureUnits(w.state.textureUnits),ve===!0&&qt.setGlobalState(H.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?L=D[D.length-1]:L=null,Q!==null&&Q.renderEnd()};function vo(A,k,pt,lt){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)pt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(pe)){lt&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Yt=Et.update(A),Ot=A.material;Ot.visible&&L.push(A,Yt,Ot,pt,Ge.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(pe))){const Yt=Et.update(A),Ot=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Ge.copy(Yt.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Ot)){const Zt=Yt.groups;for(let $t=0,fe=Zt.length;$t<fe;$t++){const ge=Zt[$t],Wt=Ot[ge.materialIndex];Wt&&Wt.visible&&L.push(A,Yt,Wt,pt,Ge.z,ge,k)}}else Ot.visible&&L.push(A,Yt,Ot,pt,Ge.z,null,k)}}const Ht=A.children;for(let Yt=0,Ot=Ht.length;Yt<Ot;Yt++)vo(Ht[Yt],k,pt,lt)}function xo(A,k,pt,lt){const{opaque:ct,transmissive:Ht,transparent:Yt}=A;w.setupLightsView(pt),ve===!0&&qt.setGlobalState(H.clippingPlanes,pt),lt&&E.viewport(St.copy(lt)),ct.length>0&&Xi(ct,k,pt),Ht.length>0&&Xi(Ht,k,pt),Yt.length>0&&Xi(Yt,k,pt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rr(A,k,pt,lt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[lt.id]===void 0){const Wt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[lt.id]=new Vi(1,1,{generateMipmaps:!0,type:Wt?ua:_i,minFilter:tr,samples:Math.max(4,U.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Ht=w.state.transmissionRenderTarget[lt.id],Yt=lt.viewport||St;Ht.setSize(Yt.z*H.transmissionResolutionScale,Yt.w*H.transmissionResolutionScale);const Ot=H.getRenderTarget(),Zt=H.getActiveCubeFace(),$t=H.getActiveMipmapLevel();H.setRenderTarget(Ht),H.getClearColor(F),_t=H.getClearAlpha(),_t<1&&H.setClearColor(16777215,.5),H.clear(),Rt&&de.render(pt);const fe=H.toneMapping;H.toneMapping=la;const ge=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),w.setupLightsView(lt),ve===!0&&qt.setGlobalState(H.clippingPlanes,lt),Xi(A,pt,lt),ht.updateMultisampleRenderTarget(Ht),ht.updateRenderTargetMipmap(Ht),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Re=0,Ee=k.length;Re<Ee;Re++){const Qe=k[Re],{object:Xe,geometry:Sn,material:Gt,group:cn}=Qe;if(Gt.side===Pa&&Xe.layers.test(lt.layers)){const Ie=Gt.side;Gt.side=ni,Gt.needsUpdate=!0,Ol(Xe,pt,lt,Sn,Gt,cn),Gt.side=Ie,Gt.needsUpdate=!0,Wt=!0}}Wt===!0&&(ht.updateMultisampleRenderTarget(Ht),ht.updateRenderTargetMipmap(Ht))}H.setRenderTarget(Ot,Zt,$t),H.setClearColor(F,_t),ge!==void 0&&(lt.viewport=ge),H.toneMapping=fe}function Xi(A,k,pt){const lt=k.isScene===!0?k.overrideMaterial:null;for(let ct=0,Ht=A.length;ct<Ht;ct++){const Yt=A[ct],{object:Ot,geometry:Zt,group:$t}=Yt;let fe=Yt.material;fe.allowOverride===!0&&lt!==null&&(fe=lt),Ot.layers.test(pt.layers)&&Ol(Ot,k,pt,Zt,fe,$t)}}function Ol(A,k,pt,lt,ct,Ht){Q!==null&&ct.isNodeMaterial&&Q.setObject(A,ct),A.onBeforeRender(H,k,pt,lt,ct,Ht),A.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ct.onBeforeRender(H,k,pt,lt,A,Ht),ct.transparent===!0&&ct.side===Pa&&ct.forceSinglePass===!1?(ct.side=ni,ct.needsUpdate=!0,H.renderBufferDirect(pt,k,lt,ct,A,Ht),ct.side=nr,ct.needsUpdate=!0,H.renderBufferDirect(pt,k,lt,ct,A,Ht),ct.side=Pa):H.renderBufferDirect(pt,k,lt,ct,A,Ht),A.onAfterRender(H,k,pt,lt,ct,Ht)}function Rs(A,k,pt){k.isScene!==!0&&(k=rn);const lt=st.get(A),ct=w.state.lights,Ht=w.state.shadowsArray,Yt=ct.state.version,Ot=Ut.getParameters(A,ct.state,Ht,k,pt,w.state.lightProbeGridArray),Zt=Ut.getProgramCacheKey(Ot);let $t=lt.programs;lt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,lt.fog=k.fog;const fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;lt.envMap=Tt.get(A.envMap||lt.environment,fe),lt.envMapRotation=lt.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",vi),$t=new Map,lt.programs=$t);let ge=$t.get(Zt);if(ge!==void 0){if(lt.currentProgram===ge&&lt.lightsStateVersion===Yt)return yo(A,Ot),ge}else Ot.uniforms=Ut.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,pt,Ot),A.onBeforeCompile(Ot,H),ge=Ut.acquireProgram(Ot,Zt),$t.set(Zt,ge),lt.uniforms=Ot.uniforms;const Wt=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=qt.uniform),yo(A,Ot),lt.needsLights=Il(A),lt.lightsStateVersion=Yt,lt.needsLights&&(Wt.ambientLightColor.value=ct.state.ambient,Wt.lightProbe.value=ct.state.probe,Wt.sunLights.value=ct.state.sun,Wt.sunLightShadows.value=ct.state.sunShadow,Wt.directionalLights.value=ct.state.directional,Wt.directionalLightShadows.value=ct.state.directionalShadow,Wt.spotLights.value=ct.state.spot,Wt.spotLightShadows.value=ct.state.spotShadow,Wt.rectAreaLights.value=ct.state.rectArea,Wt.ltc_1.value=ct.state.rectAreaLTC1,Wt.ltc_2.value=ct.state.rectAreaLTC2,Wt.pointLights.value=ct.state.point,Wt.pointLightShadows.value=ct.state.pointShadow,Wt.hemisphereLights.value=ct.state.hemi,Wt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Wt.sunShadowCascade.value=ct.state.sunShadowCascade,Wt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Wt.spotLightMatrix.value=ct.state.spotLightMatrix,Wt.spotLightMap.value=ct.state.spotLightMap,Wt.pointShadowMatrix.value=ct.state.pointShadowMatrix),lt.lightProbeGrid=w.state.lightProbeGridArray.length>0,lt.currentProgram=ge,lt.uniformsList=null,ge}function So(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ou.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function yo(A,k){const pt=st.get(A);pt.outputColorSpace=k.outputColorSpace,pt.batching=k.batching,pt.batchingColor=k.batchingColor,pt.instancing=k.instancing,pt.instancingColor=k.instancingColor,pt.instancingMorph=k.instancingMorph,pt.skinning=k.skinning,pt.morphTargets=k.morphTargets,pt.morphNormals=k.morphNormals,pt.morphColors=k.morphColors,pt.morphTargetsCount=k.morphTargetsCount,pt.numClippingPlanes=k.numClippingPlanes,pt.numIntersection=k.numClipIntersection,pt.vertexAlphas=k.vertexAlphas,pt.vertexTangents=k.vertexTangents,pt.toneMapping=k.toneMapping}function Mo(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let pt=0,lt=A.length;pt<lt;pt++){const ct=A[pt];if(ct.texture!==null&&ct.boundingBox.containsPoint(C))return ct}return null}function Eo(A,k,pt,lt,ct){k.isScene!==!0&&(k=rn),ht.resetTextureUnits();const Ht=k.fog,Yt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?k.environment:null,Ot=at===null?H.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ze.workingColorSpace,Zt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,$t=Tt.get(lt.envMap||Yt,Zt),fe=lt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ge=!!pt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Wt=!!pt.morphAttributes.position,Re=!!pt.morphAttributes.normal,Ee=!!pt.morphAttributes.color;let Qe=la;lt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=H.toneMapping);const Xe=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Sn=Xe!==void 0?Xe.length:0,Gt=st.get(lt),cn=w.state.lights;if(ve===!0&&(ye===!0||A!==ft)){const Ne=A===ft&&lt.id===ot;qt.setState(lt,A,Ne)}let Ie=!1;lt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==cn.state.version||Gt.outputColorSpace!==Ot||ct.isBatchedMesh&&Gt.batching===!1||!ct.isBatchedMesh&&Gt.batching===!0||ct.isBatchedMesh&&Gt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Gt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Gt.instancing===!1||!ct.isInstancedMesh&&Gt.instancing===!0||ct.isSkinnedMesh&&Gt.skinning===!1||!ct.isSkinnedMesh&&Gt.skinning===!0||ct.isInstancedMesh&&Gt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Gt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Gt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Gt.instancingMorph===!1&&ct.morphTexture!==null||Gt.envMap!==$t||lt.fog===!0&&Gt.fog!==Ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==qt.numPlanes||Gt.numIntersection!==qt.numIntersection)||Gt.vertexAlphas!==fe||Gt.vertexTangents!==ge||Gt.morphTargets!==Wt||Gt.morphNormals!==Re||Gt.morphColors!==Ee||Gt.toneMapping!==Qe||Gt.morphTargetsCount!==Sn||!!Gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ie=!0):(Ie=!0,Gt.__version=lt.version);let Vn=Gt.currentProgram;Ie===!0&&(Vn=Rs(lt,k,ct),Q&&lt.isNodeMaterial&&Q.onUpdateProgram(lt,Vn,Gt));let si=!1,qi=!1,be=!1;const Ve=Vn.getUniforms(),tn=Gt.uniforms;if(E.useProgram(Vn.program)&&(si=!0,qi=!0,be=!0),lt.id!==ot&&(ot=lt.id,qi=!0),Gt.needsLights){const Ne=Mo(w.state.lightProbeGridArray,ct);Gt.lightProbeGrid!==Ne&&(Gt.lightProbeGrid=Ne,qi=!0)}if(si||ft!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(G,"projectionMatrix",A.projectionMatrix),Ve.setValue(G,"viewMatrix",A.matrixWorldInverse);const un=Ve.map.cameraPosition;un!==void 0&&un.setValue(G,se.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Ve.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ve.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ft!==A&&(ft=A,qi=!0,be=!0)}if(Gt.needsLights&&(cn.state.sunShadowMap.length>0&&Ve.setValue(G,"sunShadowMap",cn.state.sunShadowMap,ht),cn.state.directionalShadowMap.length>0&&Ve.setValue(G,"directionalShadowMap",cn.state.directionalShadowMap,ht),cn.state.spotShadowMap.length>0&&Ve.setValue(G,"spotShadowMap",cn.state.spotShadowMap,ht),cn.state.pointShadowMap.length>0&&Ve.setValue(G,"pointShadowMap",cn.state.pointShadowMap,ht)),ct.isSkinnedMesh){Ve.setOptional(G,ct,"bindMatrix"),Ve.setOptional(G,ct,"bindMatrixInverse");const Ne=ct.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ve.setValue(G,"boneTexture",Ne.boneTexture,ht))}ct.isBatchedMesh&&(Ve.setOptional(G,ct,"batchingTexture"),Ve.setValue(G,"batchingTexture",ct._matricesTexture,ht),Ve.setOptional(G,ct,"batchingIdTexture"),Ve.setValue(G,"batchingIdTexture",ct._indirectTexture,ht),Ve.setOptional(G,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Ve.setValue(G,"batchingColorTexture",ct._colorsTexture,ht));const ri=pt.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&K.update(ct,pt,Vn),(qi||Gt.receiveShadow!==ct.receiveShadow)&&(Gt.receiveShadow=ct.receiveShadow,Ve.setValue(G,"receiveShadow",ct.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Vw()),qi){if(Ve.setValue(G,"toneMappingExposure",H.toneMappingExposure),Gt.needsLights&&Pl(tn,be),Ht&&lt.fog===!0&&ne.refreshFogUniforms(tn,Ht),ne.refreshMaterialUniforms(tn,lt,mt,et,w.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ne=Gt.lightProbeGrid;tn.probesSH.value=Ne.texture,tn.probesMin.value.copy(Ne.boundingBox.min),tn.probesMax.value.copy(Ne.boundingBox.max),tn.probesResolution.value.copy(Ne.resolution)}Ou.upload(G,So(Gt),tn,ht)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ou.upload(G,So(Gt),tn,ht),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ve.setValue(G,"center",ct.center),Ve.setValue(G,"modelViewMatrix",ct.modelViewMatrix),Ve.setValue(G,"normalMatrix",ct.normalMatrix),Ve.setValue(G,"modelMatrix",ct.matrixWorld),lt.uniformsGroups!==void 0){const Ne=lt.uniformsGroups;for(let un=0,ma=Ne.length;un<ma;un++){const zl=Ne[un];bt.update(zl,Vn),bt.bind(zl,Vn)}}return Vn}function Pl(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,k,pt){const lt=st.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=k,st.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:pt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const pt=st.get(A);pt.__webglFramebuffer=k,pt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,pt=0){at=A,V=k,W=pt;let lt=null,ct=!1,Ht=!1;if(A){const Ot=st.get(A);if(Ot.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(G.FRAMEBUFFER,Ot.__webglFramebuffer),St.copy(A.viewport),Kt.copy(A.scissor),Ft=A.scissorTest,E.viewport(St),E.scissor(Kt),E.setScissorTest(Ft),ot=-1;return}else if(Ot.__webglFramebuffer===void 0)ht.setupRenderTarget(A);else if(Ot.__hasExternalTextures)ht.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const fe=A.depthTexture;if(Ot.__boundDepthTexture!==fe){if(fe!==null&&st.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(A)}}const Zt=A.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ht=!0);const $t=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[k])?lt=$t[k][pt]:lt=$t[k],ct=!0):A.samples>0&&ht.useMultisampledRTT(A)===!1?lt=st.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?lt=$t[pt]:lt=$t,St.copy(A.viewport),Kt.copy(A.scissor),Ft=A.scissorTest}else St.copy(gt).multiplyScalar(mt).floor(),Kt.copy(wt).multiplyScalar(mt).floor(),Ft=Fe;if(pt!==0&&(lt=J),E.bindFramebuffer(G.FRAMEBUFFER,lt)&&E.drawBuffers(A,lt),E.viewport(St),E.scissor(Kt),E.setScissorTest(Ft),ct){const Ot=st.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,pt)}else if(Ht){const Ot=k;for(let Zt=0;Zt<A.textures.length;Zt++){const $t=st.get(A.textures[Zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,pt,Ot)}}else if(A!==null&&pt!==0){const Ot=st.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,pt)}ot=-1};function xi(A){const k=st.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=U.textureFormatReadable(A.format),k.__typeReadable=U.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,pt,lt,ct,Ht,Yt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt){E.bindFramebuffer(G.FRAMEBUFFER,Zt);try{const $t=A.textures[Ot],fe=$t.format,ge=$t.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot);const Wt=xi($t);if(Wt.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-lt&&pt>=0&&pt<=A.height-ct&&G.readPixels(k,pt,lt,ct,Lt.convert(fe),Lt.convert(ge),Ht)}finally{const $t=at!==null?st.get(at).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,k,pt,lt,ct,Ht,Yt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt)if(k>=0&&k<=A.width-lt&&pt>=0&&pt<=A.height-ct){E.bindFramebuffer(G.FRAMEBUFFER,Zt);const $t=A.textures[Ot],fe=$t.format,ge=$t.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot);const Wt=xi($t);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Re),G.bufferData(G.PIXEL_PACK_BUFFER,Ht.byteLength,G.STREAM_READ),G.readPixels(k,pt,lt,ct,Lt.convert(fe),Lt.convert(ge),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Ee=at!==null?st.get(at).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,Ee);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zb(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Re),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ht),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Re),G.deleteSync(Qe),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,pt=0){const lt=Math.pow(2,-pt),ct=Math.floor(A.image.width*lt),Ht=Math.floor(A.image.height*lt),Yt=k!==null?k.x:0,Ot=k!==null?k.y:0;ht.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,pt,0,0,Yt,Ot,ct,Ht),E.unbindTexture()},this.copyTextureToTexture=function(A,k,pt=null,lt=null,ct=0,Ht=0){let Yt,Ot,Zt,$t,fe,ge,Wt,Re,Ee;const Qe=A.isCompressedTexture?A.mipmaps[Ht]:A.image;if(pt!==null)Yt=pt.max.x-pt.min.x,Ot=pt.max.y-pt.min.y,Zt=pt.isBox3?pt.max.z-pt.min.z:1,$t=pt.min.x,fe=pt.min.y,ge=pt.isBox3?pt.min.z:0;else{const tn=Math.pow(2,-ct);Yt=Math.floor(Qe.width*tn),Ot=Math.floor(Qe.height*tn),A.isDataArrayTexture?Zt=Qe.depth:A.isData3DTexture?Zt=Math.floor(Qe.depth*tn):Zt=1,$t=0,fe=0,ge=0}lt!==null?(Wt=lt.x,Re=lt.y,Ee=lt.z):(Wt=0,Re=0,Ee=0);const Xe=Lt.convert(k.format),Sn=Lt.convert(k.type);let Gt;k.isData3DTexture?(ht.setTexture3D(k,0),Gt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ht.setTexture2DArray(k,0),Gt=G.TEXTURE_2D_ARRAY):(ht.setTexture2D(k,0),Gt=G.TEXTURE_2D),E.activeTexture(G.TEXTURE0),E.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const cn=E.getParameter(G.UNPACK_ROW_LENGTH),Ie=E.getParameter(G.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(G.UNPACK_SKIP_PIXELS),si=E.getParameter(G.UNPACK_SKIP_ROWS),qi=E.getParameter(G.UNPACK_SKIP_IMAGES);E.pixelStorei(G.UNPACK_ROW_LENGTH,Qe.width),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qe.height),E.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(G.UNPACK_SKIP_ROWS,fe),E.pixelStorei(G.UNPACK_SKIP_IMAGES,ge);const be=A.isDataArrayTexture||A.isData3DTexture,Ve=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const tn=st.get(A),ri=st.get(k),Ne=st.get(tn.__renderTarget),un=st.get(ri.__renderTarget);E.bindFramebuffer(G.READ_FRAMEBUFFER,Ne.__webglFramebuffer),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ma=0;ma<Zt;ma++)be&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,st.get(A).__webglTexture,ct,ge+ma),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,st.get(k).__webglTexture,Ht,Ee+ma)),G.blitFramebuffer($t,fe,Yt,Ot,Wt,Re,Yt,Ot,G.DEPTH_BUFFER_BIT,G.NEAREST);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ct!==0||A.isRenderTargetTexture||st.has(A)){const tn=st.get(A),ri=st.get(k);E.bindFramebuffer(G.READ_FRAMEBUFFER,X),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let Ne=0;Ne<Zt;Ne++)be?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,ct,ge+Ne):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,ct),Ve?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ri.__webglTexture,Ht,Ee+Ne):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ri.__webglTexture,Ht),ct!==0?G.blitFramebuffer($t,fe,Yt,Ot,Wt,Re,Yt,Ot,G.COLOR_BUFFER_BIT,G.NEAREST):Ve?G.copyTexSubImage3D(Gt,Ht,Wt,Re,Ee+Ne,$t,fe,Yt,Ot):G.copyTexSubImage2D(Gt,Ht,Wt,Re,$t,fe,Yt,Ot);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ve?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Gt,Ht,Wt,Re,Ee,Yt,Ot,Zt,Xe,Sn,Qe.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Ht,Wt,Re,Ee,Yt,Ot,Zt,Xe,Qe.data):G.texSubImage3D(Gt,Ht,Wt,Re,Ee,Yt,Ot,Zt,Xe,Sn,Qe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ht,Wt,Re,Yt,Ot,Xe,Sn,Qe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ht,Wt,Re,Qe.width,Qe.height,Xe,Qe.data):G.texSubImage2D(G.TEXTURE_2D,Ht,Wt,Re,Yt,Ot,Xe,Sn,Qe);E.pixelStorei(G.UNPACK_ROW_LENGTH,cn),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie),E.pixelStorei(G.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(G.UNPACK_SKIP_ROWS,si),E.pixelStorei(G.UNPACK_SKIP_IMAGES,qi),Ht===0&&k.generateMipmaps&&G.generateMipmap(Gt),E.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&ht.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ht.setTextureCube(A,0):A.isData3DTexture?ht.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ht.setTexture2DArray(A,0):ht.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){V=0,W=0,at=null,E.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=ze._getUnpackColorSpace()}}const Zx={type:"change"},ym={type:"start"},qS={type:"end"},Au=new ju,Kx=new Oa,Xw=Math.cos(70*Hb.DEG2RAD),Mn=new Y,ei=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dp=1e-6;class qw extends q1{constructor(t,i=null){super(t,i),this.state=Ke.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:co.ROTATE,MIDDLE:co.DOLLY,RIGHT:co.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Ms,this._lastTargetPosition=new Y,this._quat=new Ms().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bx,this._sphericalDelta=new bx,this._scale=1,this._panOffset=new Y,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new Y,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ww.bind(this),this._onPointerDown=Yw.bind(this),this._onPointerUp=jw.bind(this),this._onContextMenu=e3.bind(this),this._onMouseWheel=Qw.bind(this),this._onKeyDown=Jw.bind(this),this._onTouchStart=$w.bind(this),this._onTouchMove=t3.bind(this),this._onMouseDown=Zw.bind(this),this._onMouseMove=Kw.bind(this),this._interceptControlDown=n3.bind(this),this._interceptControlUp=i3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zx),this.update(),this.state=Ke.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Mn.copy(i).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ei:s>Math.PI&&(s-=ei),l<-Math.PI?l+=ei:l>Math.PI&&(l-=ei),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Mn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new Y(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Au.origin.copy(this.object.position),Au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Au.direction))<Xw?this.object.lookAt(this.target):(Kx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Au.intersectPlane(Kx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>dp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dp||this._lastTargetPosition.distanceToSquared(this.target)>dp?(this.dispatchEvent(Zx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ei/60*this.autoRotateSpeed*t:ei/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Mn.setFromMatrixColumn(i,0),Mn.multiplyScalar(-t),this._panOffset.add(Mn)}_panUp(t,i){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(i,1):(Mn.setFromMatrixColumn(i,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(t),this._panOffset.add(Mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Mn.copy(l).sub(this.target);let u=Mn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/i.clientHeight),this._rotateUp(ei*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/i.clientHeight),this._rotateUp(ei*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Jt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Yw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ww(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function jw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qS),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Zw(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ke.DOLLY;break;case co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ke.ROTATE}break;case co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(ym)}function Kw(o){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Qw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(o.preventDefault(),this.dispatchEvent(ym),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(qS))}function Jw(o){this.enabled!==!1&&this._handleKeyDown(o)}function $w(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ke.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ke.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(ym)}function t3(o){switch(this._trackPointer(o),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ke.NONE}}function e3(o){this.enabled!==!1&&o.preventDefault()}function n3(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i3(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const a3={x:0,ground:0,force:0},pp={Perspective:[7,5.5,8],Front:[0,3,10],Side:[10,3,0],Top:[0,11,.01],Underside:[5,-5,7]};class Qx extends da{constructor(t=0,i=0){super(),this.shear=t,this.shearZ=i}getPoint(t,i=new Y){const s=t*Math.PI*2*6;return i.set(Math.cos(s)*.19+t*this.shear,.44+t*1.58,Math.sin(s)*.19+t*this.shearZ)}}function Jx({s:o=a3,onQuake:t,labels:i=!0,reference:s=!1}){const l=Oe.useRef(null),u=Oe.useRef(null),h=Oe.useRef(o),[d,p]=Oe.useState(s),[m,x]=Oe.useState(s),[g,v]=Oe.useState(""),[y,T]=Oe.useState(!0);h.current=o,Oe.useEffect(()=>{const M=l.current;let S;try{S=new kw({antialias:!0,alpha:!1})}catch{v("3D rendering is unavailable in this browser. Try a browser with WebGL enabled. The experiment controls and graphs still work.");return}S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setClearColor("#eef4ef"),S.outputColorSpace=gi,S.shadowMap.enabled=!0,S.shadowMap.type=aS,M.appendChild(S.domElement),S.domElement.setAttribute("aria-label","Rotatable 3D model: four springs on base bolts, two opposed solenoids between spring pairs, platform and roof-mounted sensor");const I=new t1,B=new Di(38,1,.1,80);B.position.set(...pp.Perspective);const C=new qw(B,S.domElement);C.target.set(0,s?1:2.3,0),C.enableDamping=!0,C.minDistance=4,C.maxDistance=19,C.maxPolarAngle=Math.PI-.05,C.minPolarAngle=.05,C.autoRotateSpeed=.65,C.enablePan=!0,I.add(new z1(16777215,7112057,2.4));const L=new H1(16777215,3.5);L.position.set(4,9,5),L.castShadow=!0,L.shadow.mapSize.set(1024,1024),L.shadow.camera.left=-7,L.shadow.camera.right=7,L.shadow.camera.top=8,L.shadow.camera.bottom=-7,I.add(L);const w=[];function D(Rt,Qt={}){const G=new O1({color:Rt,roughness:.55,...Qt});return w.push(G),G}const b=D("#dce4df"),P=D("#407c88",{metalness:.45,roughness:.24}),H=D("#97aaa7",{metalness:.7,roughness:.3}),j=D("#39736a"),Q=D("#839e91"),J=D("#da9a40",{metalness:.4}),X=D("#244e48");function Z(Rt,Qt,G,le=0,ie=0,U=0){const E=new fa(Rt,Qt);return E.position.set(le,ie,U),E.castShadow=!0,E.receiveShadow=!0,G.add(E),E}const V=(Rt,Qt,G,le,ie,U=0,E=0,$=0)=>Z(new go(Qt,G,le),ie,Rt,U,E,$),W=(Rt,Qt,G,le,ie,U,E,$=24)=>Z(new vm(Qt,Qt,G,$),le,Rt,ie,U,E),at=new Ia;I.add(at),V(at,4.8,.22,3.5,Q,0,.11,0);const ot=new X1(15,30,12833992,14477020);ot.position.y=-.025,I.add(ot);const ft=new Ia;I.add(ft);const St=D("#c7d9ce"),Kt=V(ft,4.05,.18,2.85,St,0,2.13,0),Ft=new Ia;Ft.position.y=2.24,ft.add(Ft),V(Ft,2.18,3.26,1.62,P,0,1.68,0);for(let Rt=0;Rt<=6;Rt++)V(Ft,2.4,.095,1.82,b,0,.06+Rt*.55,0);for(let Rt of[-1.14,-.57,0,.57,1.14])for(let Qt of[-.87,.87])V(Ft,.065,3.3,.085,b,Rt,1.68,Qt);for(let Rt of[-.85,-.28,.28,.85])for(let Qt of[-1.15,1.15])V(Ft,.085,3.3,.055,b,Qt,1.68,Rt);V(Ft,.4,.46,.035,X,0,.3,.925);const F=new Ia;F.position.set(.25,3.45,.15),Ft.add(F),V(F,.34,.055,.23,j),V(F,.11,.027,.09,X,0,.04,0);for(let Rt of[-.13,.13])for(let Qt of[-.08,.08])W(F,.017,.018,J,Rt,.038,Qt);const _t=[],Ct=[],et=[[-1.15,-1.1],[1.15,-1.1],[-1.15,1.1],[1.15,1.1]];for(const[Rt,Qt]of et){W(at,.07,.76,H,Rt,.46,Qt),W(at,.25,.035,H,Rt,.245,Qt),W(at,.135,.1,H,Rt,.315,Qt,6);for(let ie=.29;ie<.84;ie+=.035){const U=Z(new ku(.073,.008,5,16),H,at,Rt,ie,Qt);U.rotation.x=Math.PI/2}const G=Z(new Xu(new Qx,100,.028,6,!1),H,at,Rt,0,Qt);_t.push(G),W(ft,.23,.055,H,Rt,2.03,Qt);const le=W(at,.22,.1,j,Rt,1.17,Qt);Ct.push(le)}const mt=[];for(let Rt=0;Rt<2;Rt++){const Qt=Rt===0?-1.1:1.1,G=Rt===0?-1:1,le=new Ia;le.position.set(0,1.17,Qt),at.add(le),V(at,.72,.09,.65,H,0,.285,Qt),V(at,.11,.78,.43,H,-.29,.7,Qt),V(at,.11,.78,.43,H,.29,.7,Qt);const ie=D("#2563a6"),U=W(le,.21,.6,ie,0,0,0);U.rotation.z=Math.PI/2,V(le,.76,.045,.48,H,0,.25,0),V(le,.76,.045,.48,H,0,-.25,0);for(const ht of[-1,1])V(le,.045,.5,.07,H,ht*.36,0,-.22),V(le,.045,.5,.07,H,ht*.36,0,.22);const E=W(le,.047,1.15,H,-G*.35,0,0);E.rotation.z=Math.PI/2;const $=[-1,1].map(ht=>{const Tt=W(le,.083,.045,H,ht*.575-G*.35,0,0);return Tt.rotation.z=Math.PI/2,Tt}),st=[];for(let ht=0;ht<5;ht++){const Tt=Z(new ku(.084,.012,6,24),H,le,-G*(.39+ht*.1),0,0);Tt.rotation.y=Math.PI/2,st.push(Tt)}mt.push({group:le,rod:E,tips:$,dir:G,coilMat:ie,returnRings:st,travel:0})}const It=[["Roof / MPU6050",ft,new Y(.25,5.8,.15),"roof"],["S1",at,new Y(-1.42,1.5,-1.1)],["S2",at,new Y(1.42,1.5,-1.1)],["S3",at,new Y(-1.42,1.5,1.1)],["S4",at,new Y(1.42,1.5,1.1)],["01 · short stroke",at,new Y(0,1.6,-1.1)],["02 · short stroke",at,new Y(0,1.6,1.1)]].map(([Rt,Qt,G,le])=>{const ie=document.createElement("span");return ie.className="model-tag",ie.textContent=Rt,M.appendChild(ie),{tag:ie,parent:Qt,position:G,type:le}}),gt={cutaway:s,spin:s,labels:i,active:!0};let wt=1/0,Fe,pe=0;const ve=new ResizeObserver(()=>{const Rt=M.clientWidth,Qt=M.clientHeight;S.setSize(Rt,Qt,!1),B.aspect=Rt/Qt,B.updateProjectionMatrix()});ve.observe(M);const ye=new IntersectionObserver(([Rt])=>{gt.active=Rt.isIntersecting});ye.observe(M);function ae(Rt){if(Fe=requestAnimationFrame(ae),!gt.active)return;const Qt=Math.min((Rt-pe)/1e3,.05);pe=Rt;const G=h.current;at.position.x=G.ground*40,ft.position.x=G.x*40,ft.rotation.y=(G.theta??0)*2;const le=ft.position.x-at.position.x,ie=ft.rotation.y;if(Math.abs(le-wt)>1e-4||Math.abs(ie-(gt.lastYaw??0))>1e-4){for(let U=0;U<_t.length;U++){const[E,$]=et[U],st=le+E*Math.cos(ie)+$*Math.sin(ie)-E,ht=-E*Math.sin(ie)+$*Math.cos(ie)-$;_t[U].geometry.dispose(),_t[U].geometry=new Xu(new Qx(st,ht),100,.028,6,!1),Ct[U].position.set(E+st*.46,1.17,$+ht*.46)}wt=le,gt.lastYaw=ie}mt.forEach((U,E)=>{const $=G.actuators?.[E],st=$?.relay??!1;U.travel=$?.fraction??0;const ht=U.dir*(-.35+.7*U.travel);U.rod.position.x=ht,U.tips.forEach((Tt,Dt)=>Tt.position.x=(Dt===0?-.575:.575)+ht),U.returnRings.forEach((Tt,Dt)=>Tt.position.x=-U.dir*(.39+Dt*(.1-.087*U.travel))),U.coilMat.color.set(st?"#e5a445":"#2563a6"),U.coilMat.emissive.set(st?"#452a05":"#000000")}),Ft.visible=!gt.cutaway,Kt.visible=!gt.cutaway,C.autoRotate=gt.spin,C.update(Qt),I.updateMatrixWorld(),It.forEach(({tag:U,parent:E,position:$,type:st})=>{U.hidden=!gt.labels||gt.cutaway&&st==="roof";const ht=E.localToWorld($.clone()).project(B);U.style.left=`${(ht.x*.5+.5)*M.clientWidth}px`,U.style.top=`${(-ht.y*.5+.5)*M.clientHeight}px`,U.style.visibility=ht.z>1||Math.abs(ht.x)>1||Math.abs(ht.y)>1?"hidden":"visible"}),S.render(I,B)}Fe=requestAnimationFrame(ae);let se=null;const Ge=Rt=>{se={x:Rt.clientX,y:Rt.clientY,time:performance.now()}},rn=Rt=>{if(!t||!se||Math.hypot(Rt.clientX-se.x,Rt.clientY-se.y)>5||performance.now()-se.time>450)return;const Qt=S.domElement.getBoundingClientRect(),G=new Jt((Rt.clientX-Qt.left)/Qt.width*2-1,-(Rt.clientY-Qt.top)/Qt.height*2+1),le=new k1;le.setFromCamera(G,B),!gt.cutaway&&le.intersectObjects(Ft.children,!0).length&&t()};return S.domElement.addEventListener("pointerdown",Ge),S.domElement.addEventListener("pointerup",rn),u.current={state:gt,view(Rt){B.position.set(...pp[Rt]),C.target.set(0,Rt==="Top"||Rt==="Underside"?1:2.3,0),C.update()}},()=>{cancelAnimationFrame(Fe),ve.disconnect(),ye.disconnect(),C.dispose(),S.domElement.removeEventListener("pointerdown",Ge),S.domElement.removeEventListener("pointerup",rn),I.traverse(Rt=>{Rt.geometry&&Rt.geometry.dispose()}),w.forEach(Rt=>Rt.dispose()),S.dispose(),It.forEach(Rt=>Rt.tag.remove()),S.domElement.remove(),u.current=null}},[]),Oe.useEffect(()=>{u.current&&Object.assign(u.current.state,{cutaway:d,spin:m,labels:s?y:i})},[d,m,i,y,s]);function N(M){(M==="Top"||M==="Underside")&&p(!0),x(!1),u.current?.view(M)}return O.jsxs("div",{className:`three-model ${s?"reference-model":""}`,children:[O.jsxs("div",{className:"three-topline",children:[O.jsx("span",{children:s?"MECHANICAL REFERENCE":"LIVE 3D MODEL"}),O.jsx("span",{children:"4 springs · 2 solenoids"})]}),O.jsx("div",{ref:l,className:"three-canvas",children:g&&O.jsx("p",{className:"webgl-error",role:"alert",children:g})}),O.jsx("div",{className:"view-controls","aria-label":s?"Reference model views":"Live model views",children:Object.keys(pp).map(M=>O.jsx("button",{onClick:()=>N(M),children:M},M))}),O.jsxs("div",{className:"three-toolbar",children:[O.jsx("button",{"aria-pressed":d,onClick:()=>p(!d),children:d?"Show building":"Inspect mechanism"}),O.jsx("button",{"aria-pressed":m,onClick:()=>x(!m),children:m?"Stop rotation":"Auto-rotate"}),s&&O.jsx("button",{"aria-pressed":y,onClick:()=>T(!y),children:y?"Hide labels":"Show labels"})]}),O.jsxs("p",{className:"orbit-hint",children:["Drag to orbit · scroll / pinch to zoom · right-drag / two fingers to pan",s?"":" · click building to shake"]})]})}const YS=[{title:"Place and assemble the hardware",intro:"Build the mechanism with all power disconnected. The 3D view shows arrangement, not fabrication dimensions.",steps:[{title:"Check the actual parts",text:"Record the solenoid voltage, current, stroke, force, return action and duty cycle; spring free length and rate; platform mass; relay input logic and DC inductive contact rating; and the exact sensor breakout voltage requirements. Use four matching springs. Choose an adapter and wiring rated for the combined load."},{title:"Lay out four spring centers",text:"Mark S1 and S2 as one row, S3 and S4 as the other. Center one solenoid between each pair. Keep both rows parallel. Reduce spring spacing until the real plunger can reach its intended spring contact within its rated stroke, while retaining clearance for the opposite end. The slightly longer rod in the illustration is not an instruction to extend a real plunger."},{title:"Fit the base screws and longer springs",text:"Fix one screw securely to the base at each corner. Use a retained lower spring seat and suitable washer/nut arrangement. Each screw must enter its spring by 1/2 inch (12.7 mm), measured from the lower end of the spring. Select screw diameter to clear the spring bore; total screw length also includes base thickness and fastening hardware. Leave the rest of the spring free to flex."},{title:"Seat the platform and mount the coils",text:"Retain the four upper spring ends under the platform so they cannot slip out during the demonstration. The corner screws must not clamp the upper platform rigidly to the ground base. Fasten the coil bodies to low brackets on the base, centered within the spring pairs. Mirror the units: channel 1's energized stroke points left, channel 2's points right. Align the short plunger with a spring-contact collar; the contact design is provisional and needs a bench check."},{title:"Place the building and electronics",text:"Secure the building centrally on the platform. Rigidly mount the MPU6050 on the roof and mark its axes. Keep the Nano, buck converter, relay module and power distribution on an insulated, accessible area of the base outside the moving mechanism. Route a flexible sensor cable loop to the roof. Move the platform by hand to verify clearance, retained spring ends and no binding."}]},{title:"Wire the low-voltage control circuit",intro:"Keep the solenoid power branch disconnected during these steps. Use the component terminal labels, not wire colors alone.",steps:[{title:"Make the supply distribution",text:"With the adapter unplugged, route its positive output through the main switch and an appropriately rated fuse to the switched 12 V distribution point. Route adapter negative to a separate common-ground terminal. Select fuse and cable ratings from actual load specifications; do not route coil current through a solderless breadboard or Nano pins."},{title:"Set the LM2596 output first",text:"Connect buck IN+ to switched 12 V and IN- to common ground. Leave all output loads disconnected. Power only the buck, measure OUT+ to OUT- with a multimeter, and adjust to 5.0 V. Switch off and unplug the adapter before making the next connections."},{title:"Power the Nano and relay logic",text:"Connect regulated OUT+ to the classic Nano 5V pin and relay VCC; connect OUT- to their GND terminals. Do not feed regulated 5 V into VIN. This guide assumes a relay module with onboard drivers and a documented VCC/GND logic connection. Follow the particular module's JD-VCC/isolation instructions if its arrangement differs. Avoid simultaneous USB and external power unless the board's power arrangement is verified."},{title:"Connect the roof sensor",text:"Power the MPU6050 breakout only at its documented voltage; use a suitable 3.3 V source or level translation if required. A regulator on a breakout does not establish I2C logic tolerance. Connect sensor GND to common ground, SDA to Nano A4 and SCL to A5. Optional INT goes to D2. AD0 may connect to GND for address 0x68. Leave XDA and XCL unused. Keep this cable away from coil wiring."},{title:"Connect and verify relay inputs",text:"Connect Nano D8 to IN1 and D9 to IN2. Verify whether the relay board is active-LOW or active-HIGH using its documentation. With the 12 V contact branch still disconnected, test each relay independently with a simple known test sketch. Both channels must default OFF at startup and on a sensor fault. Firmware is not supplied by the frontend and must match the actual module."}]},{title:"Wire the solenoid power branch",intro:"Disconnect all power before wiring. Relay contact terminals COM/NO/NC are separate from the module's logic pins.",steps:[{title:"Feed the two COM terminals",text:"Connect switched 12 V to channel 1 COM and channel 2 COM. Leave both NC terminals unused. Use a meter and the module markings to confirm terminal order; do not infer the order from the blue housing orientation."},{title:"Connect each coil through NO",text:"Connect channel 1 NO to solenoid 01 positive. Connect channel 2 NO to solenoid 02 positive. Return each solenoid negative directly to the common-ground distribution point using its own appropriately sized path. Keep these high-current returns separate from the sensor ground wire until the common point."},{title:"Add the two flyback diodes",text:"Place one suitable flyback diode across each coil, close to the solenoid terminals. Connect the striped cathode to coil positive (the relay NO side) and the anode to coil negative. Confirm polarity before applying power: a reversed diode can short the supply when the relay closes. Choose the diode for the coil current, reverse voltage and desired release behavior."},{title:"Inspect the complete wiring",text:"With power off, check for 12 V-to-ground shorts, loose strands, exposed conductors and mistaken relay terminals. Verify the buck still feeds only the control supply and the sensor receives its specified voltage. Confirm both solenoid positive wires are disconnected by inactive relay contacts. Confirm the physical switch removes the 12 V input."},{title:"Test one actuator at a time",text:"Keep the model clear and start with a brief pulse within the coil's duty rating. Observe the actual plunger direction and return action, then test the other channel. Check that no rod hits the platform, jams a spring or exceeds travel. Stop on binding or abnormal heating. Correct mounting or control polarity before enabling feedback."}]},{title:"Commission the complete prototype",intro:"The website uses idealized forces. Real control must be tuned to the actual sensor, relays, coils and mechanical contact.",steps:[{title:"Establish a sensor baseline",text:"Keep the platform still, verify sensor communication, log acceleration and angular rate, and estimate stationary offsets. Mark which sensor axis aligns with the two solenoids. Confirm readings change in the expected direction when the platform is gently moved."},{title:"Record a passive test",text:"Leave the actuator outputs disabled and apply a small repeatable base movement. Record the input method, peak building response and settling time. Use the same model mass and initial conditions for subsequent comparisons. A roof sensor alone does not provide an independent ground-motion record."},{title:"Implement conservative feedback",text:"Use firmware that reads and filters motion, estimates the relevant movement, selects an opposing response, and releases each actuator appropriately. Include hysteresis, minimum switching intervals, maximum on-time, and default-OFF behavior for startup or sensor failure. Acceleration sign alone is not velocity direction; do not copy the continuous web damping force directly into relay switching."},{title:"Compare and tune gradually",text:"Repeat the same small base input with feedback enabled. Compare the traces and settling time against the passive run, and inspect for unwanted twisting caused by the offset actuators. If movement increases, stop and check direction, timing, sensor orientation and contact geometry. Tune one parameter at a time; do not increase excitation to hide a poor response."},{title:"Prepare the college demonstration",text:"Secure the base, retain the springs, cover exposed power terminals, label all components and keep the power switch accessible. Demonstrate sensing first, then individual actuators, then passive versus controlled motion. Explain that the current mechanism is active solenoid response, not a proven eddy-current damping stage or a full-scale building protection system."}]}],$s=YS.flatMap((o,t)=>o.steps.map(i=>({...i,chapter:t,chapterTitle:o.title,intro:o.intro})));function s3(){const[o,t]=Oe.useState(0),[i,s]=Oe.useState(!1),l=Oe.useRef(null),u=Oe.useRef(null),h=$s[o];function d(m){t(Math.max(0,Math.min($s.length-1,m))),requestAnimationFrame(()=>{l.current?.focus({preventScroll:!0}),l.current?.scrollIntoView({block:"start",behavior:"auto"})})}function p(){s(!0),requestAnimationFrame(()=>u.current?.showModal())}return O.jsxs("section",{className:"build-guide",children:[O.jsxs("div",{className:"guide-intro",children:[O.jsx("span",{className:"eyebrow",children:"ILLUSTRATED BUILD / 20 STEPS"}),O.jsx("h2",{children:"From the first screw to the finished build."}),O.jsx("p",{children:"Follow the placement images, wire one circuit at a time, then test the complete prototype."}),O.jsxs("a",{href:"/SEDAR-reference.pdf",target:"_blank",rel:"noreferrer",children:["Download the illustrated reference ",O.jsx(so,{size:16})]})]}),O.jsx("div",{className:"wizard-chapters","aria-label":"Build phases",children:YS.map((m,x)=>O.jsxs("button",{"aria-current":h.chapter===x?"step":void 0,onClick:()=>d(x*5),children:[O.jsxs("span",{children:["0",x+1]}),["Hardware","Control wiring","Coil wiring","Test & finish"][x]]},m.title))}),O.jsxs("div",{className:"wizard-progress",children:[O.jsx("label",{htmlFor:"guide-step",children:"Jump to a step"}),O.jsx("select",{id:"guide-step",value:o,onChange:m=>d(Number(m.target.value)),children:$s.map((m,x)=>O.jsxs("option",{value:x,children:[String(x+1).padStart(2,"0")," · ",m.title]},m.title))}),O.jsxs("span",{role:"status",children:["Step ",o+1," of ",$s.length]})]}),O.jsx("progress",{value:o+1,max:$s.length,"aria-label":"Build guide progress"}),O.jsxs("article",{className:"wizard-step",children:[O.jsxs("div",{className:"wizard-title",children:[O.jsx("span",{className:"eyebrow",children:h.chapterTitle}),O.jsxs("h3",{ref:l,tabIndex:-1,children:[String(o+1).padStart(2,"0")," / ",h.title]}),O.jsx("p",{children:h.intro})]}),O.jsxs("button",{className:"guide-image",onClick:p,"aria-label":`Enlarge diagram for step ${o+1}`,children:[O.jsx("img",{src:`/guide/step-${String(o+1).padStart(2,"0")}.svg`,alt:`Step ${o+1}: ${h.title}. Labeled component placement and connection diagram.`}),O.jsxs("span",{children:[O.jsx(VE,{size:15}),"Enlarge diagram"]})]}),O.jsxs("div",{className:"step-instructions",children:[O.jsx("h4",{children:"What to do"}),O.jsx("p",{children:h.text})]})]}),O.jsxs("div",{className:"wizard-navigation",children:[O.jsxs("button",{onClick:()=>d(o-1),disabled:o===0,children:[O.jsx(FE,{size:18}),"Previous"]}),O.jsx("span",{children:o===19?"Finished assembly · ready for a careful bench check":`Up next: ${$s[o+1].title}`}),O.jsxs("button",{className:"primary",onClick:()=>d(o+1),disabled:o===$s.length-1,children:["Next",O.jsx(HE,{size:18})]})]}),o===19&&O.jsx("button",{className:"restart-guide",onClick:()=>d(0),children:"Back to the first step"}),O.jsxs("div",{className:"guide-callout",children:[O.jsx("strong",{children:"Use the actual component specifications"}),O.jsx("p",{children:"Images are connection and placement diagrams, not scale drawings. The screw insertion is ½ inch; match spring spacing to the real actuator stroke. Verify coil ratings, sensor supply, relay logic and firmware before powering the mechanism."})]}),i&&O.jsxs("dialog",{ref:u,className:"guide-dialog",onClose:()=>s(!1),onClick:m=>{m.target===u.current&&u.current.close()},children:[O.jsx("button",{autoFocus:!0,"aria-label":"Close enlarged diagram",onClick:()=>u.current.close(),children:O.jsx(tS,{})}),O.jsx("img",{src:`/guide/step-${String(o+1).padStart(2,"0")}.svg`,alt:`Full-size diagram: ${h.title}`})]})]})}function r3({samples:o}){const t=Math.max(.005,...o.flatMap(s=>[Math.abs(s.x),Math.abs(s.ground)])),i=s=>o.map((l,u)=>`${u?"L":"M"}${u*600/239},${60-l[s]/t*45}`).join(" ");return O.jsxs("div",{children:[O.jsxs("svg",{viewBox:"0 0 600 120",className:"chart",role:"img","aria-label":`Ground and building displacement, vertical range plus or minus ${(t*1e3).toFixed(1)} millimeters`,children:[O.jsx("path",{d:"M0 15H600M0 60H600M0 105H600",stroke:"#e5eae7",strokeDasharray:"4 4"}),O.jsx("path",{d:i("ground"),fill:"none",stroke:"#c79666",strokeWidth:"1.5"}),O.jsx("path",{d:i("x"),fill:"none",stroke:"#22716a",strokeWidth:"2.5"})]}),O.jsxs("span",{className:"chart-scale",children:["±",(t*1e3).toFixed(1)," mm · auto scale"]})]})}function o3(){const o=Oe.useRef(Ru()),t=Oe.useRef({damping:!0,params:Pu}),i=Oe.useRef(0),s=Oe.useRef(null),[l,u]=Oe.useState({...Pu}),[h,d]=Oe.useState({...o.current}),[p,m]=Oe.useState(55),[x,g]=Oe.useState(!0),[v,y]=Oe.useState(!1),[T,N]=Oe.useState(!0),[M,S]=Oe.useState(!1),[I,B]=Oe.useState(""),[C,L]=Oe.useState("simulation"),[w,D]=Oe.useState(!1),b=h.remaining>0?"Earthquake in progress":Math.abs(h.v)>.001||Math.abs(h.q)>2e-4||Math.abs(h.omega)>.002?"Settling":"System stable";Oe.useEffect(()=>{t.current={damping:x,params:l,strength:p}},[x,l,p]),Oe.useEffect(()=>{let J,X=0,Z=0,V=0,W=0;function at(ot){X||(X=ot);const ft=Math.min((ot-X)/1e3,.05);if(X=ot,!v){for(Z+=ft;Z>=1/2e3;)$E(o.current,1/2e3,{...t.current,input:i.current}),i.current*=.999,Z-=1/2e3;V+=ft,W+=ft,V>=.05&&(V=0,o.current.samples.push({ground:o.current.ground,x:o.current.x}),o.current.samples.length>240&&o.current.samples.shift()),W>=1/30&&(W=0,d({...o.current,actuators:o.current.actuators.map(St=>({...St})),samples:[...o.current.samples]}))}J=requestAnimationFrame(at)}return J=requestAnimationFrame(at),()=>cancelAnimationFrame(J)},[v]),Oe.useEffect(()=>()=>s.current?.(),[]),Oe.useEffect(()=>{if(!w)return;const J=X=>{X.key==="Escape"&&D(!1)};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[w]);function P(){o.current=JE(t.current.strength??55),i.current=0,d({...o.current}),y(!1)}function H(){o.current=Ru(),i.current=0,d({...o.current}),y(!1)}async function j(){if(M){s.current?.(),S(!1),B("Phone motion disconnected.");return}if(!window.isSecureContext){B("Phone motion needs HTTPS. Open the published site on your phone.");return}if(!window.DeviceMotionEvent){B("Motion sensors are unavailable here. Use the earthquake button instead.");return}try{if(typeof DeviceMotionEvent.requestPermission=="function"&&await DeviceMotionEvent.requestPermission()!=="granted"){B("Motion access was declined. You can still use the earthquake button.");return}let J=!1,X=0,Z=0;const V=at=>{const ot=at.acceleration?.x,ft=at.accelerationIncludingGravity?.x;if(ot==null&&ft==null)return;J=!0,Z=.9*Z+.1*(ft??0);const St=ot??(ft??0)-Z;Math.abs(St)>.35&&(i.current=Math.max(-4,Math.min(4,St)),Date.now()-X>300&&(B("Motion detected — gently shake left and right."),X=Date.now()))};window.addEventListener("devicemotion",V);const W=setTimeout(()=>{J||B("No sensor readings yet. Check browser motion access, or use the earthquake button.")},4e3);s.current=()=>{window.removeEventListener("devicemotion",V),clearTimeout(W),i.current=0},S(!0),y(!1),B("Connected. Gently move your phone left and right.")}catch{B("Could not access motion sensors. Use the earthquake button instead.")}}const Q=tb(h);return O.jsxs(O.Fragment,{children:[O.jsxs("header",{children:[O.jsxs("a",{className:"brand",href:"#",children:[O.jsx("span",{className:"brand-icon",children:O.jsx(Dd,{size:25})}),"SEDAR",O.jsx("span",{className:"brand-divider"}),O.jsx("span",{className:"brand-caption",children:"SEISMIC RESPONSE LAB"})]}),O.jsxs("a",{className:"project-link",href:"/SEDAR-reference.pdf",target:"_blank",rel:"noreferrer",children:[O.jsx(Hv,{size:16}),"Project reference",O.jsx(so,{size:15})]})]}),O.jsxs("main",{children:[O.jsxs("div",{className:"intro",children:[O.jsxs("div",{children:[O.jsx("div",{className:"eyebrow text-teal-700",children:"INTERACTIVE ENGINEERING EXPLORER"}),O.jsxs("h1",{children:["A little motion.",O.jsx("br",{className:"mobile-break"})," A smarter response."]}),O.jsx("p",{children:"Explore how SEDAR senses movement and helps a model building find its balance."})]}),O.jsxs("div",{className:"prototype",children:[O.jsx("span",{className:"dot"}),"EDUCATIONAL PROTOTYPE",O.jsx("span",{children:"Seismic Eddy Current and Active Damping Response"})]})]}),O.jsxs("nav",{className:"tabs","aria-label":"Project views",children:[O.jsxs("button",{onClick:()=>L("simulation"),className:C==="simulation"?"selected":"",children:[O.jsx(Dd,{size:17}),"Live simulation"]}),O.jsxs("button",{onClick:()=>L("system"),className:C==="system"?"selected":"",children:[O.jsx(Gv,{size:17}),"Inside the system"]}),O.jsxs("button",{onClick:()=>L("build"),className:C==="build"?"selected":"",children:[O.jsx(Hv,{size:17}),"Build guide"]}),O.jsxs("span",{children:["MODEL 01 ",O.jsx("span",{children:"/"})," ACTIVE DAMPING"]})]}),C==="build"?O.jsx(s3,{}):C==="simulation"?O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"lab-grid",children:[O.jsxs("section",{className:"model-panel",children:[O.jsxs("div",{className:"panel-heading",children:[O.jsxs("div",{children:[O.jsx("span",{className:"section-number",children:"01"}),O.jsx("h2",{children:"The shake table"})]}),O.jsxs("span",{className:`status ${b==="System stable"?"stable":""}`,children:[O.jsx("span",{className:"dot"}),v?"Simulation paused":b]})]}),O.jsx(Jx,{s:h,onQuake:P,labels:T}),O.jsxs("div",{className:"model-footer",children:[O.jsxs("label",{children:[O.jsx("input",{type:"checkbox",checked:T,onChange:J=>N(J.target.checked)})," Show component labels"]}),O.jsx("span",{children:"Translation + yaw · motion ×2"})]})]}),O.jsxs("aside",{className:"controls",children:[O.jsx("div",{className:"panel-heading",children:O.jsxs("div",{children:[O.jsx("span",{className:"section-number",children:"02"}),O.jsx("h2",{children:"Experiment controls"})]})}),O.jsxs("div",{className:"control-content",children:[O.jsxs("label",{className:"range-label",htmlFor:"intensity",children:["Earthquake intensity ",O.jsx("span",{children:p<35?"Gentle":p<75?"Moderate":"Strong"})]}),O.jsx("input",{id:"intensity",type:"range",min:"15",max:"100",value:p,onChange:J=>m(+J.target.value)}),O.jsxs("div",{className:"range-ends",children:[O.jsx("span",{children:"Gentle"}),O.jsx("span",{children:"Strong"})]}),O.jsxs("button",{className:"primary",onClick:P,children:[O.jsx(Dd,{size:19}),"Trigger earthquake",O.jsx(so,{size:18})]}),O.jsxs("div",{className:"secondary-buttons",children:[O.jsxs("button",{onClick:()=>y(!v),children:[v?O.jsx(qE,{size:16}):O.jsx(XE,{size:16})," ",v?"Resume":"Pause"]}),O.jsxs("button",{onClick:H,children:[O.jsx(WE,{size:16}),"Reset"]})]}),O.jsxs("div",{className:"damping-row",children:[O.jsxs("div",{children:[O.jsx("strong",{children:"Active damping"}),O.jsx("p",{children:"Finite-stroke relay control"})]}),O.jsx("button",{className:`switch ${x?"on":""}`,role:"switch","aria-checked":x,"aria-label":"Active damping",onClick:()=>g(!x),children:O.jsx("span",{})})]}),O.jsx("div",{className:"actuator-cards",children:["01 · pushes left","02 · pushes right"].map((J,X)=>{const Z=h.actuators[X].relay;return O.jsxs("div",{className:Z?"energized":"",children:[O.jsx("span",{children:J}),O.jsxs("strong",{children:[O.jsx("span",{className:`dot ${Z?"":"muted"}`}),Z?"Energized":"Standby"]}),O.jsxs("small",{children:[h.actuators[X].current.toFixed(2)," A · ",(h.actuators[X].position*1e3).toFixed(1)," mm"]}),O.jsx("small",{children:h.actuators[X].contact>.01?`${h.actuators[X].contact.toFixed(2)} N contact`:"No spring contact"})]},J)})}),O.jsxs("button",{className:`phone ${M?"connected":""}`,onClick:j,children:[O.jsx(ZE,{size:20}),O.jsxs("span",{children:[M?"Disconnect phone motion":"Use your phone’s motion",O.jsx("small",{children:M?"Motion input enabled":"Shake your phone to move the base"})]}),O.jsx(so,{size:16})]}),I&&O.jsx("p",{className:"phone-message",role:"status",children:I})]})]})]}),O.jsxs("div",{className:"readouts",children:[O.jsxs("section",{className:"trace-panel",children:[O.jsxs("div",{className:"trace-header",children:[O.jsx("h2",{children:"Motion, in real time"}),O.jsxs("div",{className:"legend",children:[O.jsxs("span",{children:[O.jsx("i",{}),"Ground"]}),O.jsxs("span",{children:[O.jsx("i",{}),"Building"]})]})]}),O.jsx(r3,{samples:h.samples}),O.jsxs("div",{className:"chart-footer",children:[O.jsx("span",{children:"Absolute displacement · mm"}),O.jsx("span",{children:"12-second rolling window"})]})]}),O.jsxs("section",{className:"metric",children:[O.jsx("span",{className:"metric-icon",children:O.jsx(kE,{size:20})}),O.jsx("p",{children:"Building displacement"}),O.jsxs("strong",{children:[(h.x*1e3).toFixed(2),O.jsx("small",{children:" mm"})]}),O.jsx("span",{children:"Signed displacement from rest"})]}),O.jsxs("section",{className:"metric",children:[O.jsx("span",{className:"metric-icon",children:O.jsx(jE,{size:20})}),O.jsx("p",{children:"Motion reduction"}),O.jsxs("strong",{children:[Q===null?"—":Math.round(Q),O.jsx("small",{children:Q===null?"":" %"})]}),O.jsx("span",{children:"RMS vs. unpowered hardware"})]})]}),O.jsx(eb,{params:l,s:h,onChange:J=>{u(J),o.current=Ru(),i.current=0,d({...o.current}),y(!1)}}),O.jsxs("section",{className:"explanation",children:[O.jsxs("div",{children:[O.jsx("span",{className:"eyebrow",children:"THE FEEDBACK LOOP"}),O.jsx("h2",{children:"Sense. Respond. Stabilize."}),O.jsx("p",{children:"Movement becomes a signal. A signal becomes an opposing force."})]}),O.jsxs("div",{className:"flow",children:[O.jsxs("div",{children:[O.jsx(YE,{}),O.jsx("strong",{children:"01 / Detect"}),O.jsx("span",{children:"MPU6050 reads motion"})]}),O.jsx("b",{children:"→"}),O.jsxs("div",{children:[O.jsx(Gv,{}),O.jsx("strong",{children:"02 / Decide"}),O.jsx("span",{children:"Arduino selects a channel"})]}),O.jsx("b",{children:"→"}),O.jsxs("div",{children:[O.jsx(KE,{}),O.jsx("strong",{children:"03 / Dampen"}),O.jsx("span",{children:"Rods act on the springs"})]})]}),O.jsxs("button",{onClick:()=>L("system"),children:["Explore the circuit",O.jsx(so,{size:16})]})]})]}):O.jsxs("section",{className:"system-view",children:[O.jsxs("div",{className:"system-copy",children:[O.jsx("span",{className:"eyebrow",children:"FROM MOVEMENT TO RESPONSE"}),O.jsxs("h2",{children:["Small components.",O.jsx("br",{}),"A continuous feedback loop."]}),O.jsx("p",{children:"The roof-mounted MPU6050 measures the model’s movement. The Nano evaluates the signal, then switches either 12 V solenoid through a two-channel relay."}),O.jsxs("button",{className:"primary",onClick:()=>D(!0),children:["Inspect wiring diagram",O.jsx(GE,{size:17})]}),O.jsx("p",{className:"note",children:"This explorer follows the relay-based circuit and your detailed project description. The revised PDF explains the four-spring mechanism, through-rods, roof sensor, power paths and feedback loop. The original PDF described an earlier MOSFET / eddy-current concept."})]}),O.jsx("button",{className:"circuit-preview",onClick:()=>D(!0),"aria-label":"Enlarge supplied circuit diagram",children:O.jsx("img",{src:"/circuit.png",alt:"Supplied SEDAR wiring diagram with power adapter, buck converter, Arduino Nano, MPU6050, relay and two solenoids"})}),O.jsx("div",{className:"component-list",children:[["MPU6050","Sense movement","SDA → A4 · SCL → A5 · optional INT → D2"],["Arduino Nano","Process the response","5 V regulated supply · shared ground"],["Two-channel relay","Switch each actuator","IN1 → D8 · IN2 → D9 · COM / NO contacts"],["2 × 12 V solenoids","Apply opposing forces","Compact mirrored push-pull plungers between each spring pair; short stroke."],["LM2596 converter","Power the electronics","12 V input → regulated 5 V output"],["Four corner springs","Carry the building platform","Four longer springs; each base-fixed screw enters its spring by 1/2 inch"]].map(([J,X,Z],V)=>O.jsxs("article",{children:[O.jsxs("span",{className:"section-number",children:["0",V+1]}),O.jsx("h3",{children:J}),O.jsx("strong",{children:X}),O.jsx("p",{children:Z})]},J))})]}),O.jsxs("section",{className:"reference-section",children:[O.jsxs("div",{className:"reference-heading",children:[O.jsxs("div",{children:[O.jsx("span",{className:"eyebrow",children:"FOUR CORNERS. ONE MOVING PLATFORM."}),O.jsx("h2",{children:"The mechanism, from every angle."}),O.jsx("p",{children:"Each longer spring fits over a base-fixed screw with 1/2 inch (12.7 mm) of insertion. The platform rests on the four springs; the solenoid rods act on the springs beneath it."})]}),O.jsxs("a",{href:"/SEDAR-reference.pdf",target:"_blank",rel:"noreferrer",children:["Read the updated reference ",O.jsx(so,{size:16})]})]}),O.jsxs("div",{className:"reference-grid",children:[O.jsx(Jx,{reference:!0,labels:!0}),O.jsxs("div",{className:"mechanism-notes",children:[O.jsx("span",{className:"eyebrow",children:"TOP VIEW / PLATFORM REMOVED"}),O.jsxs("div",{className:"layout-row",children:[O.jsx("span",{children:"S1"}),O.jsx("strong",{children:"← Solenoid 01"}),O.jsx("span",{children:"S2"})]}),O.jsxs("div",{className:"layout-row",children:[O.jsx("span",{children:"S3"}),O.jsx("strong",{children:"Solenoid 02 →"}),O.jsx("span",{children:"S4"})]}),O.jsx("h3",{children:"The force goes into the spring."}),O.jsx("p",{children:"The coil bodies are shown fastened to the base between each pair of springs. Each short plunger protrudes inward at rest, then slides through the coil toward its spring when energized. The second unit is mirrored. These are compact push-pull solenoids, not long rods joining two springs."}),O.jsx("p",{children:"Each coil is centered between a closer pair of springs, with a slightly longer illustrated plunger. Spring spacing, plunger length, contact collars and brackets must be matched to the actual actuator stroke. Your four springs carry the platform; there are no additional support pillars."}),O.jsx("p",{className:"note",children:"The 3D camera can inspect every side. The dynamics model calculates lateral movement and the yaw produced by offset contacts; it does not simulate vertical motion or flexible building floors. The screw insertion is 1/2 inch (12.7 mm); other dimensions are illustrative."})]})]})]}),O.jsxs("footer",{children:[O.jsxs("span",{className:"footer-brand",children:["SEDAR ",O.jsx("span",{children:"/ BUILT TO UNDERSTAND MOTION"})]}),O.jsx("p",{children:"Physics-based educational model with example parameters. Calibrate against your hardware; not a structural safety prediction."})]})]}),w&&O.jsx("div",{className:"modal",role:"dialog","aria-modal":"true","aria-label":"Supplied circuit diagram",onClick:()=>D(!1),children:O.jsxs("div",{onClick:J=>J.stopPropagation(),children:[O.jsx("button",{autoFocus:!0,"aria-label":"Close circuit diagram",onClick:()=>D(!1),children:O.jsx(tS,{})}),O.jsx("img",{src:"/circuit.png",alt:"Full supplied SEDAR circuit diagram"}),O.jsx("p",{children:"Reference wiring supplied with the project. Pin assignments follow the detailed project description."})]})})]})}PE.createRoot(document.getElementById("root")).render(O.jsx(o3,{}));
