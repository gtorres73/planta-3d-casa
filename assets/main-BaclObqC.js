import{F as or,a as Ph,b as Lh,c as Dh}from"./firstCourseV1-DrvdFeUO.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="174",Di={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ih=0,Ba=1,Uh=2,pl=1,ml=2,Sn=3,On=0,Le=1,yn=2,Nn=0,Ii=1,ka=2,Ha=3,Ga=4,Nh=5,jn=100,zh=101,Oh=102,Fh=103,Bh=104,kh=200,Hh=201,Gh=202,Vh=203,vo=204,So=205,Wh=206,Xh=207,Yh=208,qh=209,Zh=210,Kh=211,jh=212,$h=213,Jh=214,yo=0,Mo=1,wo=2,Oi=3,Eo=4,bo=5,To=6,Ao=7,gl=0,Qh=1,tu=2,zn=0,eu=1,nu=2,iu=3,_l=4,su=5,ru=6,ou=7,xl=300,Fi=301,Bi=302,Ro=303,Co=304,Er=306,Jn=1e3,Qn=1001,Po=1002,rn=1003,au=1004,Ts=1005,ln=1006,Ir=1007,ti=1008,bn=1009,vl=1010,Sl=1011,ps=1012,ha=1013,ei=1014,Mn=1015,Ss=1016,ua=1017,da=1018,ki=1020,yl=35902,Ml=1021,wl=1022,sn=1023,El=1024,bl=1025,Ui=1026,Hi=1027,Tl=1028,fa=1029,Al=1030,pa=1031,ma=1033,ar=33776,cr=33777,lr=33778,hr=33779,Lo=35840,Do=35841,Io=35842,Uo=35843,No=36196,zo=37492,Oo=37496,Fo=37808,Bo=37809,ko=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,Yo=37816,qo=37817,Zo=37818,Ko=37819,jo=37820,$o=37821,ur=36492,Jo=36494,Qo=36495,Rl=36283,ta=36284,ea=36285,na=36286,cu=3200,lu=3201,Cl=0,hu=1,Un="",Pe="srgb",Gi="srgb-linear",pr="linear",ae="srgb",li=7680,Va=519,uu=512,du=513,fu=514,Pl=515,pu=516,mu=517,gu=518,_u=519,ia=35044,Wa="300 es",wn=2e3,mr=2001;class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xa=1234567;const Ni=Math.PI/180,ms=180/Math.PI;function hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function ga(i,t){return(i%t+t)%t}function xu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vu(i,t,e){return i!==t?(e-i)/(t-i):0}function cs(i,t,e){return(1-e)*i+e*t}function Su(i,t,e,n){return cs(i,t,1-Math.exp(-e*n))}function yu(i,t=1){return t-Math.abs(ga(i,t*2)-t)}function Mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Tu(i){return i*(.5-Math.random())}function Au(i){i!==void 0&&(Xa=i);let t=Xa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(i){return i*Ni}function Cu(i){return i*ms}function Pu(i){return(i&i-1)===0&&i!==0}function Lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dn={DEG2RAD:Ni,RAD2DEG:ms,generateUUID:hn,clamp:Xt,euclideanModulo:ga,mapLinear:xu,inverseLerp:vu,lerp:cs,damp:Su,pingpong:yu,smoothstep:Mu,smootherstep:wu,randInt:Eu,randFloat:bu,randFloatSpread:Tu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Iu,normalize:oe,denormalize:nn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],_=s[0],g=s[3],f=s[6],M=s[1],y=s[4],x=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*_+a*M+c*L,r[3]=o*g+a*y+c*R,r[6]=o*f+a*x+c*C,r[1]=l*_+h*M+u*L,r[4]=l*g+h*y+u*R,r[7]=l*f+h*x+u*C,r[2]=d*_+p*M+m*L,r[5]=d*g+p*y+m*R,r[8]=d*f+p*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Wt;function Ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){const i=gr("canvas");return i.style.display="block",i}const Ya={};function Zn(i){i in Ya||(Ya[i]=!0,console.warn(i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ou(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qa=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?pr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:qa,fromXYZ:Za,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:qa,fromXYZ:Za,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const ee=Fu();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Bu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=gr("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ku=0;class _a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nr(s[o].image)):r.push(Nr(s[o]))}else r=Nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class Oe extends ri{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Qn,s=Qn,r=ln,o=ti,a=sn,c=bn,l=Oe.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=hn(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=xl;Oe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(p+1)/2,L=(f+1)/2,R=(h+d)/4,C=(u+_)/4,D=(m+g)/4;return y>x&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=C/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==m){let g=1-a;const f=c*d+l*p+h*m+u*_,M=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const L=Math.sqrt(y),R=Math.atan2(L,f*M);g=Math.sin(g*R)/L,a=Math.sin(a*R)/L}const x=a*M;if(c=c*g+d*x,l=l*g+p*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-a*p,t[e+2]=l*m+h*p+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new I,Ka=new ii;class ys{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),Rs.subVectors(this.max,qi),ui.subVectors(t.a,qi),di.subVectors(t.b,qi),fi.subVectors(t.c,qi),Tn.subVectors(di,ui),An.subVectors(fi,di),Hn.subVectors(ui,fi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!Or(e,ui,di,fi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,ui,di,fi,Rs))?!1:(Cs.crossVectors(Tn,An),e=[Cs.x,Cs.y,Cs.z],Or(e,ui,di,fi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new I,new I,new I,new I,new I,new I,new I,new I],Je=new I,As=new ys,ui=new I,di=new I,fi=new I,Tn=new I,An=new I,Hn=new I,qi=new I,Rs=new I,Cs=new I,Gn=new I;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gn.fromArray(i,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wu=new ys,Zi=new I,Fr=new I;class br{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Fr)),this.expandByPoint(Zi.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new I,Br=new I,Ps=new I,Rn=new I,kr=new I,Ls=new I,Hr=new I;class xa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=Rn.dot(this.direction),c=-Rn.dot(Ps),l=Rn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(Ps,d),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Ls.subVectors(n,t),Hr.crossVectors(kr,Ls);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const c=a*this.direction.dot(Ls.crossVectors(Rn,Ls));if(c<0)return null;const l=a*this.direction.dot(kr.cross(Rn));if(l<0||c+l>o)return null;const h=-a*Rn.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,m,_,g){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,_,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,p=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,Yu)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Cn.crossVectors(n,He),Cn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Cn.crossVectors(n,He)),Cn.normalize(),Ds.crossVectors(He,Cn),s[0]=Cn.x,s[4]=Ds.x,s[8]=He.x,s[1]=Cn.y,s[5]=Ds.y,s[9]=He.y,s[2]=Cn.z,s[6]=Ds.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],_=n[6],g=n[10],f=n[14],M=n[3],y=n[7],x=n[11],L=n[15],R=s[0],C=s[4],D=s[8],S=s[12],v=s[1],b=s[5],U=s[9],N=s[13],H=s[2],Z=s[6],V=s[10],et=s[14],X=s[3],lt=s[7],K=s[11],k=s[15];return r[0]=o*R+a*v+c*H+l*X,r[4]=o*C+a*b+c*Z+l*lt,r[8]=o*D+a*U+c*V+l*K,r[12]=o*S+a*N+c*et+l*k,r[1]=h*R+u*v+d*H+p*X,r[5]=h*C+u*b+d*Z+p*lt,r[9]=h*D+u*U+d*V+p*K,r[13]=h*S+u*N+d*et+p*k,r[2]=m*R+_*v+g*H+f*X,r[6]=m*C+_*b+g*Z+f*lt,r[10]=m*D+_*U+g*V+f*K,r[14]=m*S+_*N+g*et+f*k,r[3]=M*R+y*v+x*H+L*X,r[7]=M*C+y*b+x*Z+L*lt,r[11]=M*D+y*U+x*V+L*K,r[15]=M*S+y*N+x*et+L*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],_=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],_=t[13],g=t[14],f=t[15],M=u*g*l-_*d*l+_*c*p-a*g*p-u*c*f+a*d*f,y=m*d*l-h*g*l-m*c*p+o*g*p+h*c*f-o*d*f,x=h*_*l-m*u*l+m*a*p-o*_*p-h*a*f+o*u*f,L=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,R=e*M+n*y+s*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=M*C,t[1]=(_*d*r-u*g*r-_*s*p+n*g*p+u*s*f-n*d*f)*C,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*f+n*c*f)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*C,t[4]=y*C,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*C,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*f-e*c*f)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*C,t[8]=x*C,t[9]=(m*u*r-h*_*r-m*n*p+e*_*p+h*n*f-e*u*f)*C,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*C,t[12]=L*C,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,_=o*h,g=o*u,f=a*u,M=c*l,y=c*h,x=c*u,L=n.x,R=n.y,C=n.z;return s[0]=(1-(_+f))*L,s[1]=(p+x)*L,s[2]=(m-y)*L,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(d+f))*R,s[6]=(g+M)*R,s[7]=0,s[8]=(m+y)*C,s[9]=(g-M)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const l=1/r,h=1/o,u=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(a===wn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===mr)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let m,_;if(a===wn)m=(o+r)*u,_=-2*u;else if(a===mr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new I,Qe=new ue,Xu=new I(0,0,0),Yu=new I(1,1,1),Cn=new I,Ds=new I,He=new I,ja=new ue,$a=new ii;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $a.setFromEuler(this),this.setFromQuaternion($a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qu=0;const Ja=new I,mi=new ii,gn=new ue,Is=new I,Ki=new I,Zu=new I,Ku=new ii,Qa=new I(1,0,0),tc=new I(0,1,0),ec=new I(0,0,1),nc={type:"added"},ju={type:"removed"},gi={type:"childadded",child:null},Gr={type:"childremoved",child:null};class ye extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new I,e=new un,n=new ii,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ki,Is,this.up):gn.lookAt(Is,Ki,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(gn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new I,_n=new I,Vr=new I,xn=new I,_i=new I,xi=new I,ic=new I,Wr=new I,Xr=new I,Yr=new I,qr=new le,Zr=new le,Kr=new le;class We{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),Vr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(Vr),l=_n.dot(_n),h=_n.dot(Vr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qr.setScalar(0),Zr.setScalar(0),Kr.setScalar(0),qr.fromBufferAttribute(t,e),Zr.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qr,r.x),o.addScaledVector(Zr,r.y),o.addScaledVector(Kr,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_i.subVectors(s,n),xi.subVectors(r,n),Wr.subVectors(t,n);const c=_i.dot(Wr),l=xi.dot(Wr);if(c<=0&&l<=0)return e.copy(n);Xr.subVectors(t,s);const h=_i.dot(Xr),u=xi.dot(Xr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(_i,o);Yr.subVectors(t,r);const p=_i.dot(Yr),m=xi.dot(Yr);if(m>=0&&p<=m)return e.copy(r);const _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(xi,a);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return ic.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(ic,a);const f=1/(g+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(_i,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ga(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jr(o,r,t+1/3),this.g=jr(o,r,t),this.b=jr(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ee.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Xt(Ce.r*255,0,255))*65536+Math.round(Xt(Ce.g*255,0,255))*256+Math.round(Xt(Ce.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Pe){ee.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Us);const n=cs(Pn.h,Us.h,e),s=cs(Pn.s,Us.s,e),r=cs(Pn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Kt;Kt.NAMES=Ul;let $u=0;class oi extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Ii,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=So,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new I,Ns=new at;let Ju=0;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ia&&(t.usage=this.usage),t}}class Nl extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zl extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qu=0;const Ze=new ue,$r=new ye,vi=new I,Ge=new ys,ji=new ys,be=new I;class De extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?zl:Nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ge.min,ji.min),Ge.expandByPoint(be),be.addVectors(Ge.max,ji.max),Ge.expandByPoint(be)):(Ge.expandByPoint(ji.min),Ge.expandByPoint(ji.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(vi.fromBufferAttribute(t,l),be.add(vi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new at,p=new at,m=new at,_=new I,g=new I;function f(D,S,v){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),m.sub(d);const b=1/(p.x*m.y-m.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(b),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(b),a[D].add(_),a[S].add(_),a[v].add(_),c[D].add(g),c[S].add(g),c[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,S=M.length;D<S;++D){const v=M[D],b=v.start,U=v.count;for(let N=b,H=b+U;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new I,x=new I,L=new I,R=new I;function C(D){L.fromBufferAttribute(s,D),R.copy(L);const S=a[D];y.copy(S),y.sub(L.multiplyScalar(L.dot(S))).normalize(),x.crossVectors(R,S);const b=x.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,b)}for(let D=0,S=M.length;D<S;++D){const v=M[D],b=v.start,U=v.count;for(let N=b,H=b+U;N<H;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ue,Vn=new xa,zs=new br,rc=new I,Os=new I,Fs=new I,Bs=new I,Jr=new I,ks=new I,oc=new I,Hs=new I;class P extends ye{constructor(t=new De,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Jr.fromBufferAttribute(u,t),o?ks.addScaledVector(Jr,h):ks.addScaledVector(Jr.sub(e),h))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(zs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(zs,rc)===null||Vn.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=o[g.materialIndex],M=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=M,L=y;x<L;x+=3){const R=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);s=Gs(this,f,t,n,l,h,u,R,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Gs(this,o,t,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=o[g.materialIndex],M=Math.max(g.start,p.start),y=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let x=M,L=y;x<L;x+=3){const R=x,C=x+1,D=x+2;s=Gs(this,f,t,n,l,h,u,R,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const M=g,y=g+1,x=g+2;s=Gs(this,o,t,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function td(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:i}}function Gs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Os),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Bs);const h=td(i,t,e,n,Os,Fs,Bs,oc);if(h){const u=new I;We.getBarycoord(oc,Os,Fs,Bs,u),s&&(h.uv=We.getInterpolatedAttribute(s,a,c,l,u,new at)),r&&(h.uv1=We.getInterpolatedAttribute(r,a,c,l,u,new at)),o&&(h.normal=We.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};We.getNormal(Os,Fs,Bs,d.normal),h.face=d,h.barycoord=u}return h}class z extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function m(_,g,f,M,y,x,L,R,C,D,S){const v=x/C,b=L/D,U=x/2,N=L/2,H=R/2,Z=C+1,V=D+1;let et=0,X=0;const lt=new I;for(let K=0;K<V;K++){const k=K*b-N;for(let $=0;$<Z;$++){const _t=$*v-U;lt[_]=_t*M,lt[g]=k*y,lt[f]=H,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[g]=0,lt[f]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push($/C),u.push(1-K/D),et+=1}}for(let K=0;K<D;K++)for(let k=0;k<C;k++){const $=d+k+Z*K,_t=d+k+Z*(K+1),q=d+(k+1)+Z*(K+1),st=d+(k+1)+Z*K;c.push($,_t,st),c.push(_t,q,st),X+=6}a.addGroup(p,X,S),p+=X,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function ed(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ol(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const nd={clone:Vi,merge:Ne};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fl extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new I,ac=new at,cc=new at;class Ve extends Fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,ac,cc),e.subVectors(cc,ac)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,yi=1;class rd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Si,yi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Si,yi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Si,yi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Si,yi,t,e);a.layers=this.layers,this.add(a);const c=new Ve(Si,yi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(Si,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Bl extends Oe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new z(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Nn});r.uniforms.tEquirect.value=e;const o=new P(s,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=ln),new rd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class It extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ad={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class va{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kl extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ia,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new I;class _r{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hl extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mi;const $i=new I,wi=new I,Ei=new I,bi=new at,Ji=new at,Gl=new ue,Vs=new I,Qi=new I,Ws=new I,lc=new at,to=new at,hc=new at;class ld extends ye{constructor(t=new Hl){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cd(e,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new _r(n,3,0,!1)),Mi.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=Mi,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wi.setFromMatrixScale(this.matrixWorld),Gl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wi.multiplyScalar(-Ei.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Xs(Vs.set(-.5,-.5,0),Ei,o,wi,s,r),Xs(Qi.set(.5,-.5,0),Ei,o,wi,s,r),Xs(Ws.set(.5,.5,0),Ei,o,wi,s,r),lc.set(0,0),to.set(1,0),hc.set(1,1);let a=t.ray.intersectTriangle(Vs,Qi,Ws,!1,$i);if(a===null&&(Xs(Qi.set(-.5,.5,0),Ei,o,wi,s,r),to.set(0,1),a=t.ray.intersectTriangle(Vs,Ws,Qi,!1,$i),a===null))return;const c=t.ray.origin.distanceTo($i);c<t.near||c>t.far||e.push({distance:c,point:$i.clone(),uv:We.getInterpolation($i,Vs,Qi,Ws,lc,to,hc,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xs(i,t,e,n,s,r){bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ji.x=r*bi.x-s*bi.y,Ji.y=s*bi.x+r*bi.y):Ji.copy(bi),i.copy(t),i.x+=Ji.x,i.y+=Ji.y,i.applyMatrix4(Gl)}const eo=new I,hd=new I,ud=new Wt;class In{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=eo.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new br,Ys=new I;class Sa{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],_=s[10],g=s[11],f=s[12],M=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-p,x-f).normalize(),n[1].setComponents(c+r,d+l,g+p,x+f).normalize(),n[2].setComponents(c+o,d+h,g+m,x+M).normalize(),n[3].setComponents(c-o,d-h,g-m,x-M).normalize(),n[4].setComponents(c-a,d-u,g-_,x-y).normalize(),e===wn)n[5].setComponents(c+a,d+u,g+_,x+y).normalize();else if(e===mr)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ya extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xr=new I,vr=new I,uc=new ue,ts=new xa,qs=new br,no=new I,dc=new I;class Vl extends ye{constructor(t=new De,e=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xr.fromBufferAttribute(e,s-1),vr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xr.distanceTo(vr);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;uc.copy(s).invert(),ts.copy(t.ray).applyMatrix4(uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){const f=h.getX(_),M=h.getX(_+1),y=Zs(this,t,ts,c,f,M,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(p),f=Zs(this,t,ts,c,_,g,m-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){const f=Zs(this,t,ts,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=Zs(this,t,ts,c,m-1,p,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zs(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(xr.fromBufferAttribute(a,s),vr.fromBufferAttribute(a,r),e.distanceSqToSegment(xr,vr,no,dc)>n)return;no.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(no);if(!(l<t.near||l>t.far))return{distance:l,point:dc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const fc=new I,pc=new I;class dd extends Vl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fc.fromBufferAttribute(e,s),pc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fc.distanceTo(pc);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sr extends Oe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wl extends Oe{constructor(t,e,n,s,r,o,a,c,l,h=Ui){if(h!==Ui&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ei),n===void 0&&h===Hi&&(n=ki),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new ue;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Xt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Xt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ma extends dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fd extends Ma{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ks=new I,io=new wa,so=new wa,ro=new wa;class pd extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ks.subVectors(s[0],s[1]).add(s[0]),l=Ks);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ks.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),io.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),so.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),ro.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(io.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),so.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ro.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(io.calc(c),so.calc(c),ro.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function md(i,t){const e=1-i;return e*e*t}function gd(i,t){return 2*(1-i)*i*t}function _d(i,t){return i*i*t}function ls(i,t,e,n){return md(i,t)+gd(i,e)+_d(i,n)}function xd(i,t){const e=1-i;return e*e*e*t}function vd(i,t){const e=1-i;return 3*e*e*i*t}function Sd(i,t){return 3*(1-i)*i*i*t}function yd(i,t){return i*i*i*t}function hs(i,t,e,n,s){return xd(i,t)+vd(i,e)+Sd(i,n)+yd(i,s)}class Xl extends dn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Md extends dn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,s.x,r.x,o.x,a.x),hs(t,s.y,r.y,o.y,a.y),hs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yl extends dn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ql extends dn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y),ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(mc(a,c.x,l.x,h.x,u.x),mc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var sa=Object.freeze({__proto__:null,ArcCurve:fd,CatmullRomCurve3:pd,CubicBezierCurve:Xl,CubicBezierCurve3:Md,EllipseCurve:Ma,LineCurve:Yl,LineCurve3:wd,QuadraticBezierCurve:ql,QuadraticBezierCurve3:Ed,SplineCurve:Zl});class bd extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new sa[s.type]().fromJSON(s))}return this}}class gc extends bd{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yl(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ql(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xl(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ma(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ot extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const _=[],g=n/2;let f=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2));function M(){const x=new I,L=new I;let R=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const S=[],v=D/r,b=v*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,H=N*c+a,Z=Math.sin(H),V=Math.cos(H);L.x=b*Z,L.y=-v*n+g,L.z=b*V,u.push(L.x,L.y,L.z),x.set(Z,C,V).normalize(),d.push(x.x,x.y,x.z),p.push(N,1-v),S.push(m++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const v=_[S][D],b=_[S+1][D],U=_[S+1][D+1],N=_[S][D+1];(t>0||S!==0)&&(h.push(v,b,N),R+=3),(e>0||S!==r-1)&&(h.push(b,U,N),R+=3)}l.addGroup(f,R,0),f+=R}function y(x){const L=m,R=new at,C=new I;let D=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),m++;const b=m;for(let U=0;U<=s;U++){const H=U/s*c+a,Z=Math.cos(H),V=Math.sin(H);C.x=S*V,C.y=g*v,C.z=S*Z,u.push(C.x,C.y,C.z),d.push(0,v,0),R.x=Z*.5+.5,R.y=V*.5*v+.5,p.push(R.x,R.y),m++}for(let U=0;U<s;U++){const N=L+U,H=b+U;x===!0?h.push(H,H+1,N):h.push(H+1,H,N),D+=3}l.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends Ot{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ea(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new I,x=new I,L=new I;for(let R=0;R<e.length;R+=3)p(e[R+0],y),p(e[R+1],x),p(e[R+2],L),c(y,x,L,M)}function c(M,y,x,L){const R=L+1,C=[];for(let D=0;D<=R;D++){C[D]=[];const S=M.clone().lerp(x,D/R),v=y.clone().lerp(x,D/R),b=R-D;for(let U=0;U<=b;U++)U===0&&D===R?C[D][U]=S:C[D][U]=S.clone().lerp(v,U/b)}for(let D=0;D<R;D++)for(let S=0;S<2*(R-D)-1;S++){const v=Math.floor(S/2);S%2===0?(d(C[D][v+1]),d(C[D+1][v]),d(C[D][v])):(d(C[D][v+1]),d(C[D+1][v+1]),d(C[D+1][v]))}}function l(M){const y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;o.push(x,1-L)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],L=o[M+4],R=Math.max(y,x,L),C=Math.min(y,x,L);R>.9&&C<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,y){const x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const M=new I,y=new I,x=new I,L=new I,R=new at,C=new at,D=new at;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),R.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),L.copy(M).add(y).add(x).divideScalar(3);const b=g(L);_(R,v+0,M,b),_(C,v+2,y,b),_(D,v+4,x,b)}}function _(M,y,x,L){L<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.details)}}class gs extends ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}const js=new I,$s=new I,oo=new I,Js=new We;class Td extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ni*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:g,c:f}=Js;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Js.getNormal(oo),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const y=(M+1)%3,x=u[M],L=u[y],R=Js[h[M]],C=Js[h[y]],D=`${x}_${L}`,S=`${L}_${x}`;S in d&&d[S]?(oo.dot(d[S].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[S]=null):D in d||(d[D]={index0:l[M],index1:l[y],normal:oo.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:g}=d[m];js.fromBufferAttribute(a,_),$s.fromBufferAttribute(a,g),p.push(js.x,js.y,js.z),p.push($s.x,$s.y,$s.z)}this.setAttribute("position",new fe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Kl extends gc{constructor(t){super(t),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gc().fromJSON(s))}return this}}class Ad{static triangulate(t,e,n=2){const s=e&&e.length,r=s?e[0]*n:t.length;let o=jl(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,u,d,p,m;if(s&&(o=Dd(t,e,o,n)),t.length>80*n){c=h=t[0],l=u=t[1];for(let _=n;_<r;_+=n)d=t[_],p=t[_+1],d<c&&(c=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p);m=Math.max(h-c,u-l),m=m!==0?32767/m:0}return _s(o,a,n,c,l,m,0),a}}function jl(i,t,e,n,s){let r,o;if(s===Vd(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_c(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_c(r,i[r],i[r+1],o);return o&&Tr(o,o.next)&&(vs(o),o=o.next),o}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Tr(e,e.next)||pe(e.prev,e,e.next)===0)){if(vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Od(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Cd(i,n,s,r):Rd(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Pd(si(i),t,e),_s(i,t,e,n,s,r,2)):o===2&&Ld(i,t,e,n,s,r):_s(si(i),t,e,n,s,r,1);break}}}function Rd(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Pi(s,a,r,c,o,l,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,f=ra(p,m,t,e,n),M=ra(_,g,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=f&&x&&x.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Pi(a,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Pi(a,h,c,u,l,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Pi(a,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Pi(a,h,c,u,l,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Pd(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Tr(s,r)&&$l(s,n,n.next,r)&&xs(s,r)&&xs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vs(n),vs(n.next),n=i=r),n=n.next}while(n!==i);return si(n)}function Ld(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kd(o,a)){let c=Jl(o,a);o=si(o,o.next),c=si(c,c.next),_s(o,t,e,n,s,r,0),_s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Dd(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=jl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Bd(l));for(s.sort(Id),r=0;r<s.length;r++)e=Ud(s[r],e);return e}function Id(i,t){return i.x-t.x}function Ud(i,t){const e=Nd(i,t);if(!e)return t;const n=Jl(e,i);return si(n,n.next),si(e,e.next)}function Nd(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Pi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),xs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&zd(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function zd(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Od(i,t,e,n){let s=i;do s.z===0&&(s.z=ra(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fd(s)}function Fd(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ra(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hd(i,t)&&(xs(i,t)&&xs(t,i)&&Gd(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Tr(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Tr(i,t){return i.x===t.x&&i.y===t.y}function $l(i,t,e,n){const s=tr(pe(i,t,e)),r=tr(pe(i,t,n)),o=tr(pe(e,n,i)),a=tr(pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Qs(i,e,t)||r===0&&Qs(i,n,t)||o===0&&Qs(e,i,n)||a===0&&Qs(e,t,n))}function Qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tr(i){return i>0?1:i<0?-1:0}function Hd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$l(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xs(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Gd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jl(i,t){const e=new oa(i.i,i.x,i.y),n=new oa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _c(i,t,e,n){const s=new oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class us{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return us.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xc(t),vc(n,t);let o=t.length;e.forEach(xc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vc(n,e[c]);const a=Ad.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ta extends De{constructor(t=new Kl([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Wd;let y,x=!1,L,R,C,D;f&&(y=f.getSpacedPoints(h),x=!0,d=!1,L=f.computeFrenetFrames(h,!1),R=new I,C=new I,D=new I),d||(g=0,p=0,m=0,_=0);const S=a.extractPoints(l);let v=S.shape;const b=S.holes;if(!us.isClockWise(v)){v=v.reverse();for(let rt=0,nt=b.length;rt<nt;rt++){const A=b[rt];us.isClockWise(A)&&(b[rt]=A.reverse())}}const N=us.triangulateShape(v,b),H=v;for(let rt=0,nt=b.length;rt<nt;rt++){const A=b[rt];v=v.concat(A)}function Z(rt,nt,A){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(nt,A)}const V=v.length,et=N.length;function X(rt,nt,A){let Ct,ot,Et;const ft=rt.x-nt.x,zt=rt.y-nt.y,St=A.x-rt.x,T=A.y-rt.y,w=ft*ft+zt*zt,G=ft*T-zt*St;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(w),it=Math.sqrt(St*St+T*T),Q=nt.x-zt/J,Pt=nt.y+ft/J,gt=A.x-T/it,wt=A.y+St/it,jt=((gt-Q)*T-(wt-Pt)*St)/(ft*T-zt*St);Ct=Q+ft*jt-rt.x,ot=Pt+zt*jt-rt.y;const ut=Ct*Ct+ot*ot;if(ut<=2)return new at(Ct,ot);Et=Math.sqrt(ut/2)}else{let J=!1;ft>Number.EPSILON?St>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?St<-Number.EPSILON&&(J=!0):Math.sign(zt)===Math.sign(T)&&(J=!0),J?(Ct=-zt,ot=ft,Et=Math.sqrt(w)):(Ct=ft,ot=zt,Et=Math.sqrt(w/2))}return new at(Ct/Et,ot/Et)}const lt=[];for(let rt=0,nt=H.length,A=nt-1,Ct=rt+1;rt<nt;rt++,A++,Ct++)A===nt&&(A=0),Ct===nt&&(Ct=0),lt[rt]=X(H[rt],H[A],H[Ct]);const K=[];let k,$=lt.concat();for(let rt=0,nt=b.length;rt<nt;rt++){const A=b[rt];k=[];for(let Ct=0,ot=A.length,Et=ot-1,ft=Ct+1;Ct<ot;Ct++,Et++,ft++)Et===ot&&(Et=0),ft===ot&&(ft=0),k[Ct]=X(A[Ct],A[Et],A[ft]);K.push(k),$=$.concat(k)}for(let rt=0;rt<g;rt++){const nt=rt/g,A=p*Math.cos(nt*Math.PI/2),Ct=m*Math.sin(nt*Math.PI/2)+_;for(let ot=0,Et=H.length;ot<Et;ot++){const ft=Z(H[ot],lt[ot],Ct);dt(ft.x,ft.y,-A)}for(let ot=0,Et=b.length;ot<Et;ot++){const ft=b[ot];k=K[ot];for(let zt=0,St=ft.length;zt<St;zt++){const T=Z(ft[zt],k[zt],Ct);dt(T.x,T.y,-A)}}}const _t=m+_;for(let rt=0;rt<V;rt++){const nt=d?Z(v[rt],$[rt],_t):v[rt];x?(C.copy(L.normals[0]).multiplyScalar(nt.x),R.copy(L.binormals[0]).multiplyScalar(nt.y),D.copy(y[0]).add(C).add(R),dt(D.x,D.y,D.z)):dt(nt.x,nt.y,0)}for(let rt=1;rt<=h;rt++)for(let nt=0;nt<V;nt++){const A=d?Z(v[nt],$[nt],_t):v[nt];x?(C.copy(L.normals[rt]).multiplyScalar(A.x),R.copy(L.binormals[rt]).multiplyScalar(A.y),D.copy(y[rt]).add(C).add(R),dt(D.x,D.y,D.z)):dt(A.x,A.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){const nt=rt/g,A=p*Math.cos(nt*Math.PI/2),Ct=m*Math.sin(nt*Math.PI/2)+_;for(let ot=0,Et=H.length;ot<Et;ot++){const ft=Z(H[ot],lt[ot],Ct);dt(ft.x,ft.y,u+A)}for(let ot=0,Et=b.length;ot<Et;ot++){const ft=b[ot];k=K[ot];for(let zt=0,St=ft.length;zt<St;zt++){const T=Z(ft[zt],k[zt],Ct);x?dt(T.x,T.y+y[h-1].y,y[h-1].x+A):dt(T.x,T.y,u+A)}}}q(),st();function q(){const rt=s.length/3;if(d){let nt=0,A=V*nt;for(let Ct=0;Ct<et;Ct++){const ot=N[Ct];Lt(ot[2]+A,ot[1]+A,ot[0]+A)}nt=h+g*2,A=V*nt;for(let Ct=0;Ct<et;Ct++){const ot=N[Ct];Lt(ot[0]+A,ot[1]+A,ot[2]+A)}}else{for(let nt=0;nt<et;nt++){const A=N[nt];Lt(A[2],A[1],A[0])}for(let nt=0;nt<et;nt++){const A=N[nt];Lt(A[0]+V*h,A[1]+V*h,A[2]+V*h)}}n.addGroup(rt,s.length/3-rt,0)}function st(){const rt=s.length/3;let nt=0;mt(H,nt),nt+=H.length;for(let A=0,Ct=b.length;A<Ct;A++){const ot=b[A];mt(ot,nt),nt+=ot.length}n.addGroup(rt,s.length/3-rt,1)}function mt(rt,nt){let A=rt.length;for(;--A>=0;){const Ct=A;let ot=A-1;ot<0&&(ot=rt.length-1);for(let Et=0,ft=h+g*2;Et<ft;Et++){const zt=V*Et,St=V*(Et+1),T=nt+Ct+zt,w=nt+ot+zt,G=nt+ot+St,J=nt+Ct+St;Zt(T,w,G,J)}}}function dt(rt,nt,A){c.push(rt),c.push(nt),c.push(A)}function Lt(rt,nt,A){Dt(rt),Dt(nt),Dt(A);const Ct=s.length/3,ot=M.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);Jt(ot[0]),Jt(ot[1]),Jt(ot[2])}function Zt(rt,nt,A,Ct){Dt(rt),Dt(nt),Dt(Ct),Dt(nt),Dt(A),Dt(Ct);const ot=s.length/3,Et=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Jt(Et[0]),Jt(Et[1]),Jt(Et[3]),Jt(Et[1]),Jt(Et[2]),Jt(Et[3])}function Dt(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function Jt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sa[s.type]().fromJSON(s)),new Ta(n,t.options)}}const Wd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-u),new at(d,1-m),new at(_,1-f)]:[new at(a,1-c),new at(h,1-u),new at(p,1-m),new at(g,1-f)]}};function Xd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ms extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){const M=f*d-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const y=M+l*f,x=M+l*(f+1),L=M+1+l*(f+1),R=M+1+l*f;p.push(y,x,R),p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class ws extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,p=[],m=[],_=[],g=[];for(let f=0;f<=n;f++){const M=[],y=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(R+x,1-y),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const y=h[f][M+1],x=h[f][M],L=h[f+1][M],R=h[f+1][M+1];(f!==0||o>0)&&p.push(y,x,R),(f!==n-1||c<Math.PI)&&p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const _=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const _=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,M=(s+1)*p+m;o.push(_,g,M),o.push(g,f,M)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ct extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wi extends ct{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Yd extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qd extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rr extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Zd extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ao=new ue,Sc=new I,yc=new I;class Ql{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mc=new ue,es=new I,co=new I;class Kd extends Ql{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),co.copy(n.position),co.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(co),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),Mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc)}}class th extends Rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eh extends Fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jd extends Ql{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $d extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new jd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jd extends Rr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qd extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class tf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wc(){return performance.now()}class Ec{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ef extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function bc(i,t,e,n){const s=nf(n);switch(e){case Ml:return i*t;case El:return i*t;case bl:return i*t*2;case Tl:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case Al:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case wl:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Io:return Math.max(i,8)*Math.max(t,8)/2;case No:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ur:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rl:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nf(i){switch(i){case bn:case vl:return{byteLength:1,components:1};case ps:case Sl:case Ss:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case ei:case ha:case Mn:return{byteLength:4,components:1};case yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Mm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:rf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:cf,alphatest_fragment:lf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:wf,color_fragment:Ef,color_pars_fragment:bf,color_pars_vertex:Tf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:zf,envmap_fragment:Of,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:Hf,fog_vertex:Gf,fog_pars_vertex:Vf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:qf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Kf,lights_pars_begin:jf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:xp,morphnormal_vertex:vp,morphtarget_pars_vertex:Sp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:wp,normal_pars_fragment:Ep,normal_pars_vertex:bp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Ip,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:zp,dithering_pars_fragment:Op,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:Yp,skinnormal_vertex:qp,specularmap_fragment:Zp,specularmap_pars_fragment:Kp,tonemapping_fragment:jp,tonemapping_pars_fragment:$p,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:cm,cube_frag:lm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:vm,meshlambert_vert:Sm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:wm,meshnormal_vert:Em,meshnormal_frag:bm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Im,shadow_vert:Um,shadow_frag:Nm,sprite_vert:zm,sprite_frag:Om},pt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},cn={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};cn.physical={uniforms:Ne([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const er={r:0,b:0,g:0},Xn=new un,Fm=new ue;function Bm(i,t,e,n,s,r,o){const a=new Kt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const L=m(y);L===null?f(a,c):L&&L.isColor&&(f(L,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const L=m(x);L&&(L.isCubeTexture||L.mapping===Er)?(h===void 0&&(h=new P(new z(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Vi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(Xn)),h.material.toneMapped=ee.getTransfer(L.colorSpace)!==ae,(u!==L||d!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new P(new Ms(2,2),new Fn({name:"BackgroundMaterial",uniforms:Vi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ee.getTransfer(L.colorSpace)!==ae,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(er,Ol(i)),n.buffers.color.setClear(er.r,er.g,er.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:g,dispose:M}}function km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,b,U,N,H){let Z=!1;const V=u(N,U,b);r!==V&&(r=V,l(r.object)),Z=p(v,N,U,H),Z&&m(v,N,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(v,b,U,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,b,U){const N=U.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let Z=H[b.id];Z===void 0&&(Z={},H[b.id]=Z);let V=Z[N];return V===void 0&&(V=d(c()),Z[N]=V),V}function d(v){const b=[],U=[],N=[];for(let H=0;H<e;H++)b[H]=0,U[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,b,U,N){const H=r.attributes,Z=b.attributes;let V=0;const et=U.getAttributes();for(const X in et)if(et[X].location>=0){const K=H[X];let k=Z[X];if(k===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(k=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(k=v.instanceColor)),K===void 0||K.attribute!==k||k&&K.data!==k.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function m(v,b,U,N){const H={},Z=b.attributes;let V=0;const et=U.getAttributes();for(const X in et)if(et[X].location>=0){let K=Z[X];K===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(K=v.instanceColor));const k={};k.attribute=K,K&&K.data&&(k.data=K.data),H[X]=k,V++}r.attributes=H,r.attributesNum=V,r.index=N}function _(){const v=r.newAttributes;for(let b=0,U=v.length;b<U;b++)v[b]=0}function g(v){f(v,0)}function f(v,b){const U=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;U[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),H[v]!==b&&(i.vertexAttribDivisor(v,b),H[v]=b)}function M(){const v=r.newAttributes,b=r.enabledAttributes;for(let U=0,N=b.length;U<N;U++)b[U]!==v[U]&&(i.disableVertexAttribArray(U),b[U]=0)}function y(v,b,U,N,H,Z,V){V===!0?i.vertexAttribIPointer(v,b,U,H,Z):i.vertexAttribPointer(v,b,U,N,H,Z)}function x(v,b,U,N){_();const H=N.attributes,Z=U.getAttributes(),V=b.defaultAttributeValues;for(const et in Z){const X=Z[et];if(X.location>=0){let lt=H[et];if(lt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const K=lt.normalized,k=lt.itemSize,$=t.get(lt);if($===void 0)continue;const _t=$.buffer,q=$.type,st=$.bytesPerElement,mt=q===i.INT||q===i.UNSIGNED_INT||lt.gpuType===ha;if(lt.isInterleavedBufferAttribute){const dt=lt.data,Lt=dt.stride,Zt=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)f(X.location+Dt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)g(X.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Dt=0;Dt<X.locationSize;Dt++)y(X.location+Dt,k/X.locationSize,q,K,Lt*st,(Zt+k/X.locationSize*Dt)*st,mt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)f(X.location+dt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<X.locationSize;dt++)g(X.location+dt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let dt=0;dt<X.locationSize;dt++)y(X.location+dt,k/X.locationSize,q,K,k*st,k/X.locationSize*dt*st,mt)}}else if(V!==void 0){const K=V[et];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(X.location,K);break;case 3:i.vertexAttrib3fv(X.location,K);break;case 4:i.vertexAttrib4fv(X.location,K);break;default:i.vertexAttrib1fv(X.location,K)}}}}M()}function L(){D();for(const v in n){const b=n[v];for(const U in b){const N=b[U];for(const H in N)h(N[H].object),delete N[H];delete b[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const U in b){const N=b[U];for(const H in N)h(N[H].object),delete N[H];delete b[U]}delete n[v.id]}function C(v){for(const b in n){const U=n[b];if(U[v.id]===void 0)continue;const N=U[v.id];for(const H in N)h(N[H].object),delete N[H];delete U[v.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Hm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function Vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new In,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,y=M*4;let x=f.clippingState||null;c.value=x,x=h(m,d,y,p);for(let L=0;L!==y;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Wm(i){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=Fi:a===Co&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new od(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Li=4,Tc=[.125,.215,.35,.446,.526,.582],$n=20,lo=new eh,Ac=new Kt;let ho=null,uo=0,fo=0,po=!1;const Kn=(1+Math.sqrt(5))/2,Ti=1/Kn,Rc=[new I(-Kn,Ti,0),new I(Kn,Ti,0),new I(-Ti,0,Kn),new I(Ti,0,Kn),new I(0,Kn,-Ti),new I(0,Kn,Ti),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Xm=new I;class aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Xm}=r;ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ss,format:sn,colorSpace:Gi,depthBuffer:!1},s=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(r)),this._blurMaterial=qm(r,t,e)}return s}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,s,r){const c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ac),u.toneMapping=zn,u.autoClear=!1;const m=new Xe({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),_=new P(new z,m);let g=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,g=!0):(m.color.copy(Ac),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const x=this._cubeSize;nr(s,y*x,M>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(_,c),u.render(t,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new P(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rc[(s-r-1)%Rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new P(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):$n;g>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);const f=[];let M=0;for(let C=0;C<$n;++C){const D=C/_,S=Math.exp(-D*D/2);f.push(S),C===0?M+=S:C<g&&(M+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[s],L=3*x*(s>y-Li?s-y+Li:0),R=4*(this._cubeSize-x);nr(e,L,R,3*x,2*x),c.setRenderTarget(e),c.render(u,lo)}}function Ym(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+Tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Li?c=Tc[o-i+Li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,_=3,g=2,f=1,M=new Float32Array(_*m*p),y=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,D=R>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(S,_*m*R),y.set(d,g*m*R);const v=[R,R,R,R,R,R];x.set(v,f*m*R)}const L=new De;L.setAttribute("position",new on(M,_)),L.setAttribute("uv",new on(y,g)),L.setAttribute("faceIndex",new on(x,f)),t.push(L),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qm(i,t,e){const n=new Float32Array($n),s=new I(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Pc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Lc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ro||c===Co,h=c===Fi||c===Bi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new aa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new aa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,m=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,x=M.length;y<x;y+=3){const L=M[y+0],R=M[y+1],C=M[y+2];d.push(L,R,R,C,C,L)}}else if(m!==void 0){const M=m.array;_=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const L=y+0,R=y+1,C=y+2;d.push(L,R,R,C,C,L)}}else return;const g=new(Ll(d)?zl:Nl)(d,1);g.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $m(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,t,e){const n=new WeakMap,s=new le;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*L*4*u),C=new Dl(R,x,L,u);C.type=Mn,C.needsUpdate=!0;const D=y*4;for(let v=0;v<u;v++){const b=g[v],U=f[v],N=M[v],H=x*L*4*v;for(let Z=0;Z<b.count;Z++){const V=Z*D;p===!0&&(s.fromBufferAttribute(b,Z),R[H+V+0]=s.x,R[H+V+1]=s.y,R[H+V+2]=s.z,R[H+V+3]=0),m===!0&&(s.fromBufferAttribute(U,Z),R[H+V+4]=s.x,R[H+V+5]=s.y,R[H+V+6]=s.z,R[H+V+7]=0),_===!0&&(s.fromBufferAttribute(N,Z),R[H+V+8]=s.x,R[H+V+9]=s.y,R[H+V+10]=s.z,R[H+V+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new at(x,L)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function t0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const ih=new Oe,Dc=new Wl(1,1),sh=new Dl,rh=new Vu,oh=new Bl,Ic=[],Uc=[],Nc=new Float32Array(16),zc=new Float32Array(9),Oc=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),we(e,n)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),we(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),we(e,n)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function d0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=Pl,r=Dc):r=ih,e.setTexture2D(t||r,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rh,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oh,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sh,s)}function S0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return c0;case 35667:case 35671:return l0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(i,t){i.uniform1fv(this.addr,t)}function M0(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T0(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function z0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ih,r[o])}function O0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rh,r[o])}function F0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||oh,r[o])}function B0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sh,r[o])}function k0(i){switch(i){case 5126:return y0;case 35664:return M0;case 35665:return w0;case 35666:return E0;case 35674:return b0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){const n=i.name,s=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),o=mo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fc(e,l===void 0?new H0(a,i,t):new G0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new V0(a),Fc(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const X0=37297;let Y0=0;function q0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kc=new Wt;function Z0(i){ee._getMatrix(kc,ee.workingColorSpace,i);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+q0(i.getShaderSource(t),o)}else return s}function K0(i,t){const e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="Cineon";break;case _l:e="ACESFilmic";break;case ru:e="AgX";break;case ou:e="Neutral";break;case su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new I;function $0(){ee.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(eg,ig)}const ng=new Map;function ig(i,t){let e=qt[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ca(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(sg,rg)}function rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function hg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ug(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=og(e),l=ag(e),h=cg(e),u=lg(e),d=hg(e),p=J0(e),m=Q0(r),_=s.createProgram();let g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ss).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(g=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?qt.tonemapping_pars_fragment:"",e.toneMapping!==zn?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),$0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=ca(o),o=Gc(o,e),o=Vc(o,e),a=ca(a),a=Gc(a,e),a=Vc(a,e),o=Wc(o),a=Wc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=M+g+o,x=M+f+a,L=Bc(s,s.VERTEX_SHADER,y),R=Bc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(b){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(R).trim();let Z=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{const et=Hc(s,L,"vertex"),X=Hc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+et+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||H==="")&&(V=!1);V&&(b.diagnostics={runnable:Z,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(R),D=new dr(s,_),S=tg(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,X0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function mg(i,t,e,n,s,r,o){const a=new Il,c=new fg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,v,b,U,N){const H=U.fog,Z=N.geometry,V=S.isMeshStandardMaterial?U.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),X=et&&et.mapping===Er?et.image.height:null,lt=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,k=K!==void 0?K.length:0;let $=0;Z.morphAttributes.position!==void 0&&($=1),Z.morphAttributes.normal!==void 0&&($=2),Z.morphAttributes.color!==void 0&&($=3);let _t,q,st,mt;if(lt){const re=cn[lt];_t=re.vertexShader,q=re.fragmentShader}else _t=S.vertexShader,q=S.fragmentShader,c.update(S),st=c.getVertexShaderID(S),mt=c.getFragmentShaderID(S);const dt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Zt=N.isInstancedMesh===!0,Dt=N.isBatchedMesh===!0,Jt=!!S.map,rt=!!S.matcap,nt=!!et,A=!!S.aoMap,Ct=!!S.lightMap,ot=!!S.bumpMap,Et=!!S.normalMap,ft=!!S.displacementMap,zt=!!S.emissiveMap,St=!!S.metalnessMap,T=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Pt=S.transmission>0,gt=w&&!!S.anisotropyMap,wt=G&&!!S.clearcoatMap,jt=G&&!!S.clearcoatNormalMap,ut=G&&!!S.clearcoatRoughnessMap,Tt=it&&!!S.iridescenceMap,Ft=it&&!!S.iridescenceThicknessMap,Bt=Q&&!!S.sheenColorMap,At=Q&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Yt=!!S.specularColorMap,he=!!S.specularIntensityMap,O=Pt&&!!S.transmissionMap,xt=Pt&&!!S.thicknessMap,j=!!S.gradientMap,tt=!!S.alphaMap,Mt=S.alphaTest>0,yt=!!S.alphaHash,Vt=!!S.extensions;let me=zn;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(me=i.toneMapping);const Ae={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:q,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&N._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&N.instanceColor!==null,instancingMorph:Zt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:rt,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:Ct,bumpMap:ot,normalMap:Et,displacementMap:d&&ft,emissiveMap:zt,normalMapObjectSpace:Et&&S.normalMapType===hu,normalMapTangentSpace:Et&&S.normalMapType===Cl,metalnessMap:St,roughnessMap:T,anisotropy:w,anisotropyMap:gt,clearcoat:G,clearcoatMap:wt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ut,dispersion:J,iridescence:it,iridescenceMap:Tt,iridescenceThicknessMap:Ft,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:$t,specularColorMap:Yt,specularIntensityMap:he,transmission:Pt,transmissionMap:O,thicknessMap:xt,gradientMap:j,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:yt,combine:S.combine,mapUv:Jt&&_(S.map.channel),aoMapUv:A&&_(S.aoMap.channel),lightMapUv:Ct&&_(S.lightMap.channel),bumpMapUv:ot&&_(S.bumpMap.channel),normalMapUv:Et&&_(S.normalMap.channel),displacementMapUv:ft&&_(S.displacementMap.channel),emissiveMapUv:zt&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:gt&&_(S.anisotropyMap.channel),clearcoatMapUv:wt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:$t&&_(S.specularMap.channel),specularColorMapUv:Yt&&_(S.specularColorMap.channel),specularIntensityMapUv:he&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:xt&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Et||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(Jt||tt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:$,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:zt&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)v.push(b),v.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=m[S.type];let b;if(v){const U=cn[v];b=nd.clone(U.uniforms)}else b=S.uniforms;return b}function L(S,v){let b;for(let U=0,N=h.length;U<N;U++){const H=h[U];if(H.cacheKey===v){b=H,++b.usedTimes;break}}return b===void 0&&(b=new ug(i,v,S,r),h.push(b)),b}function R(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function gg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,_,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=_,f.group=g),t++,f}function a(u,d,p,m,_,g){const f=o(u,d,p,m,_,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,_,g){const f=o(u,d,p,m,_,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Yc),s.length>1&&s.sort(d||Yc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function xg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new qc,i.set(n,[o])):s>=r.length?(o=new qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){const t=new vg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,M=0,y=0,x=0,L=0,R=0,C=0;l.sort(Mg);for(let S=0,v=l.length;S<v;S++){const b=l[S],U=b.color,N=b.intensity,H=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],N);C++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const et=b.shadow,X=e.get(b);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=b.shadow.matrix,M++}n.directional[p]=V,p++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(U).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[_]=V;const et=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,et.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[_]=et.matrix,b.castShadow){const X=e.get(b);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,x++}_++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(U).multiplyScalar(N),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=V,g++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const et=b.shadow,X=e.get(b);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=b.shadow.matrix,y++}n.point[m]=V,m++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(N),V.groundColor.copy(b.groundColor).multiplyScalar(N),n.hemi[f]=V,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=L,D.numLightProbes=C,n.version=yg++)}function c(l,h){let u=0,d=0,p=0,m=0,_=0;const g=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const y=l[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Zc(i){const t=new wg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Eg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zc(i),t.set(s,[a])):r>=o.length?(a=new Zc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(i,t,e){let n=new Sa;const s=new at,r=new at,o=new le,a=new Yd({depthPacking:lu}),c=new qd,l={},h=e.maxTextureSize,u={[On]:Le,[Le]:On,[yn]:yn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:bg,fragmentShader:Tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new De;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new P(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let f=this.type;this.render=function(R,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Nn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=f!==Sn&&this.type===Sn,H=f===Sn&&this.type!==Sn;for(let Z=0,V=R.length;Z<V;Z++){const et=R[Z],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const lt=X.getFrameExtents();if(s.multiply(lt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||N===!0||H===!0){const k=this.type!==Sn?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new ni(s.x,s.y,k),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let k=0;k<K;k++){const $=X.getViewport(k);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),U.viewport(o),X.updateMatrices(et,k),n=X.getFrustum(),x(C,D,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===Sn&&M(X,D),X.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(S,v,b)};function M(R,C){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,D,p,_,null)}function y(R,C,D,S){let v=null;const b=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)v=b;else if(v=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=v.uuid,N=C.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let Z=H[N];Z===void 0&&(Z=v.clone(),H[N]=Z,C.addEventListener("dispose",L)),v=Z}if(v.visible=C.visible,v.wireframe=C.wireframe,S===Sn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=D}return v}function x(R,C,D,S,v){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const N=t.update(R),H=R.material;if(Array.isArray(H)){const Z=N.groups;for(let V=0,et=Z.length;V<et;V++){const X=Z[V],lt=H[X.materialIndex];if(lt&&lt.visible){const K=y(R,lt,S,v);R.onBeforeShadow(i,R,C,D,N,K,X),i.renderBufferDirect(D,null,N,K,R,X),R.onAfterShadow(i,R,C,D,N,K,X)}}}else if(H.visible){const Z=y(R,H,S,v);R.onBeforeShadow(i,R,C,D,N,Z,null),i.renderBufferDirect(D,null,N,Z,R,null),R.onAfterShadow(i,R,C,D,N,Z,null)}}const U=R.children;for(let N=0,H=U.length;N<H;N++)x(U[N],C,D,S,v)}function L(R){R.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Rg={[yo]:Mo,[wo]:To,[Eo]:Ao,[Oi]:bo,[Mo]:yo,[To]:wo,[Ao]:Eo,[bo]:Oi};function Cg(i,t){function e(){let O=!1;const xt=new le;let j=null;const tt=new le(0,0,0,0);return{setMask:function(Mt){j!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),j=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,yt,Vt,me,Ae){Ae===!0&&(Mt*=me,yt*=me,Vt*=me),xt.set(Mt,yt,Vt,me),tt.equals(xt)===!1&&(i.clearColor(Mt,yt,Vt,me),tt.copy(xt))},reset:function(){O=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,xt=!1,j=null,tt=null,Mt=null;return{setReversed:function(yt){if(xt!==yt){const Vt=t.get("EXT_clip_control");xt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const me=Mt;Mt=null,this.setClear(me)}xt=yt},getReversed:function(){return xt},setTest:function(yt){yt?dt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(yt){j!==yt&&!O&&(i.depthMask(yt),j=yt)},setFunc:function(yt){if(xt&&(yt=Rg[yt]),tt!==yt){switch(yt){case yo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=yt}},setLocked:function(yt){O=yt},setClear:function(yt){Mt!==yt&&(xt&&(yt=1-yt),i.clearDepth(yt),Mt=yt)},reset:function(){O=!1,j=null,tt=null,Mt=null,xt=!1}}}function s(){let O=!1,xt=null,j=null,tt=null,Mt=null,yt=null,Vt=null,me=null,Ae=null;return{setTest:function(re){O||(re?dt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(re){xt!==re&&!O&&(i.stencilMask(re),xt=re)},setFunc:function(re,je,fn){(j!==re||tt!==je||Mt!==fn)&&(i.stencilFunc(re,je,fn),j=re,tt=je,Mt=fn)},setOp:function(re,je,fn){(yt!==re||Vt!==je||me!==fn)&&(i.stencilOp(re,je,fn),yt=re,Vt=je,me=fn)},setLocked:function(re){O=re},setClear:function(re){Ae!==re&&(i.clearStencil(re),Ae=re)},reset:function(){O=!1,xt=null,j=null,tt=null,Mt=null,yt=null,Vt=null,me=null,Ae=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,M=null,y=null,x=null,L=null,R=null,C=new Kt(0,0,0),D=0,S=!1,v=null,b=null,U=null,N=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,et=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let lt=null,K={};const k=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),_t=new le().fromArray(k),q=new le().fromArray($);function st(O,xt,j,tt){const Mt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(O,yt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<j;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(xt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return yt}const mt={};mt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Oi),ot(!1),Et(Ba),dt(i.CULL_FACE),A(Nn);function dt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Lt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Zt(O,xt){return u[O]!==xt?(i.bindFramebuffer(O,xt),u[O]=xt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Dt(O,xt){let j=p,tt=!1;if(O){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const Mt=O.textures;if(j.length!==Mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Vt=Mt.length;yt<Vt;yt++)j[yt]=i.COLOR_ATTACHMENT0+yt;j.length=Mt.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function Jt(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const rt={[jn]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};rt[Fh]=i.MIN,rt[Bh]=i.MAX;const nt={[kh]:i.ZERO,[Hh]:i.ONE,[Gh]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function A(O,xt,j,tt,Mt,yt,Vt,me,Ae,re){if(O===Nn){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(dt(i.BLEND),_=!0),O!==Nh){if(O!==g||re!==S){if((f!==jn||x!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,x=jn),re)switch(O){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,L=null,R=null,C.set(0,0,0),D=0,g=O,S=re}return}Mt=Mt||xt,yt=yt||j,Vt=Vt||tt,(xt!==f||Mt!==x)&&(i.blendEquationSeparate(rt[xt],rt[Mt]),f=xt,x=Mt),(j!==M||tt!==y||yt!==L||Vt!==R)&&(i.blendFuncSeparate(nt[j],nt[tt],nt[yt],nt[Vt]),M=j,y=tt,L=yt,R=Vt),(me.equals(C)===!1||Ae!==D)&&(i.blendColor(me.r,me.g,me.b,Ae),C.copy(me),D=Ae),g=O,S=!1}function Ct(O,xt){O.side===yn?Lt(i.CULL_FACE):dt(i.CULL_FACE);let j=O.side===Le;xt&&(j=!j),ot(j),O.blending===Ii&&O.transparent===!1?A(Nn):A(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Et(O){O!==Ih?(dt(i.CULL_FACE),O!==b&&(O===Ba?i.cullFace(i.BACK):O===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),b=O}function ft(O){O!==U&&(V&&i.lineWidth(O),U=O)}function zt(O,xt,j){O?(dt(i.POLYGON_OFFSET_FILL),(N!==xt||H!==j)&&(i.polygonOffset(xt,j),N=xt,H=j)):Lt(i.POLYGON_OFFSET_FILL)}function St(O){O?dt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function T(O){O===void 0&&(O=i.TEXTURE0+Z-1),lt!==O&&(i.activeTexture(O),lt=O)}function w(O,xt,j){j===void 0&&(lt===null?j=i.TEXTURE0+Z-1:j=lt);let tt=K[j];tt===void 0&&(tt={type:void 0,texture:void 0},K[j]=tt),(tt.type!==O||tt.texture!==xt)&&(lt!==j&&(i.activeTexture(j),lt=j),i.bindTexture(O,xt||mt[O]),tt.type=O,tt.texture=xt)}function G(){const O=K[lt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){_t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function At(O){q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function $t(O,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let tt=j.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(xt,O.name),j.set(O,tt))}function Yt(O,xt){const tt=l.get(xt).get(O);c.get(xt)!==tt&&(i.uniformBlockBinding(xt,tt,O.__bindingPointIndex),c.set(xt,tt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,K={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,M=null,y=null,x=null,L=null,R=null,C=new Kt(0,0,0),D=0,S=!1,v=null,b=null,U=null,N=null,H=null,_t.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Lt,bindFramebuffer:Zt,drawBuffers:Dt,useProgram:Jt,setBlending:A,setMaterial:Ct,setFlipSided:ot,setCullFace:Et,setLineWidth:ft,setPolygonOffset:zt,setScissorTest:St,activeTexture:T,bindTexture:w,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:Tt,texImage3D:Ft,updateUBOMapping:$t,uniformBlockBinding:Yt,texStorage2D:jt,texStorage3D:ut,texSubImage2D:Q,texSubImage3D:Pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:Bt,viewport:At,reset:he}}function Pg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,w){return p?new OffscreenCanvas(T,w):gr("canvas")}function _(T,w,G){let J=1;const it=St(T);if((it.width>G||it.height>G)&&(J=G/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(J*it.width),Pt=Math.floor(J*it.height);u===void 0&&(u=m(Q,Pt));const gt=w?m(Q,Pt):u;return gt.width=Q,gt.height=Pt,gt.getContext("2d").drawImage(T,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Pt+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function g(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,w,G,J,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=w;if(w===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),w===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),w===i.RGBA){const Pt=it?pr:ee.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Pt===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(T,w){let G;return T?w===null||w===ei||w===ki?G=i.DEPTH24_STENCIL8:w===Mn?G=i.DEPTH32F_STENCIL8:w===ps&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===ki?G=i.DEPTH_COMPONENT24:w===Mn?G=i.DEPTH_COMPONENT32F:w===ps&&(G=i.DEPTH_COMPONENT16),G}function L(T,w){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function R(T){const w=T.target;w.removeEventListener("dispose",R),D(w),w.isVideoTexture&&h.delete(w)}function C(T){const w=T.target;w.removeEventListener("dispose",C),v(w)}function D(T){const w=n.get(T);if(w.__webglInit===void 0)return;const G=T.source,J=d.get(G);if(J){const it=J[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(T),Object.keys(J).length===0&&d.delete(G)}n.remove(T)}function S(T){const w=n.get(T);i.deleteTexture(w.__webglTexture);const G=T.source,J=d.get(G);delete J[w.__cacheKey],o.memory.textures--}function v(T){const w=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let it=0;it<w.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(w.__webglFramebuffer[J][it]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=T.textures;for(let J=0,it=G.length;J<it;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(T)}let b=0;function U(){b=0}function N(){const T=b;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function H(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function Z(T,w){const G=n.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,T,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function V(T,w){const G=n.get(T);if(T.version>0&&G.__version!==T.version){q(G,T,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function et(T,w){const G=n.get(T);if(T.version>0&&G.__version!==T.version){q(G,T,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function X(T,w){const G=n.get(T);if(T.version>0&&G.__version!==T.version){st(G,T,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const lt={[Jn]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},K={[rn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},k={[uu]:i.NEVER,[_u]:i.ALWAYS,[du]:i.LESS,[Pl]:i.LEQUAL,[fu]:i.EQUAL,[gu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function $(T,w){if(w.type===Mn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===Ir||w.magFilter===Ts||w.magFilter===ti||w.minFilter===ln||w.minFilter===Ir||w.minFilter===Ts||w.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,lt[w.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,lt[w.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,lt[w.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,K[w.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==Ts&&w.minFilter!==ti||w.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _t(T,w){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",R));const J=w.source;let it=d.get(J);it===void 0&&(it={},d.set(J,it));const Q=H(w);if(Q!==T.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[Q].usedTimes++;const Pt=it[T.__cacheKey];Pt!==void 0&&(it[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&S(w)),T.__cacheKey=Q,T.__webglTexture=it[Q].texture}return G}function q(T,w,G){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const it=_t(T,w),Q=w.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+G);const Pt=n.get(Q);if(Q.version!==Pt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const gt=ee.getPrimaries(ee.workingColorSpace),wt=w.colorSpace===Un?null:ee.getPrimaries(w.colorSpace),jt=w.colorSpace===Un||gt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ut=_(w.image,!1,s.maxTextureSize);ut=zt(w,ut);const Tt=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type);let Bt=y(w.internalFormat,Tt,Ft,w.colorSpace,w.isVideoTexture);$(J,w);let At;const $t=w.mipmaps,Yt=w.isVideoTexture!==!0,he=Pt.__version===void 0||it===!0,O=Q.dataReady,xt=L(w,ut);if(w.isDepthTexture)Bt=x(w.format===Hi,w.type),he&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Tt,Ft,null));else if(w.isDataTexture)if($t.length>0){Yt&&he&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)At=$t[j],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,Tt,Ft,At.data):e.texImage2D(i.TEXTURE_2D,j,Bt,At.width,At.height,0,Tt,Ft,At.data);w.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,ut.width,ut.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Tt,Ft,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Tt,Ft,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Bt,$t[0].width,$t[0].height,ut.depth);for(let j=0,tt=$t.length;j<tt;j++)if(At=$t[j],w.format!==sn)if(Tt!==null)if(Yt){if(O)if(w.layerUpdates.size>0){const Mt=bc(At.width,At.height,w.format,w.type);for(const yt of w.layerUpdates){const Vt=At.data.subarray(yt*Mt/At.data.BYTES_PER_ELEMENT,(yt+1)*Mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,yt,At.width,At.height,1,Tt,Vt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ut.depth,Tt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Bt,At.width,At.height,ut.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,At.width,At.height,ut.depth,Tt,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Bt,At.width,At.height,ut.depth,0,Tt,Ft,At.data)}else{Yt&&he&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)At=$t[j],w.format!==sn?Tt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At.width,At.height,Tt,Ft,At.data):e.texImage2D(i.TEXTURE_2D,j,Bt,At.width,At.height,0,Tt,Ft,At.data)}else if(w.isDataArrayTexture)if(Yt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Bt,ut.width,ut.height,ut.depth),O)if(w.layerUpdates.size>0){const j=bc(ut.width,ut.height,w.format,w.type);for(const tt of w.layerUpdates){const Mt=ut.data.subarray(tt*j/ut.data.BYTES_PER_ELEMENT,(tt+1)*j/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ut.width,ut.height,1,Tt,Ft,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ft,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,Tt,Ft,ut.data);else if(w.isData3DTexture)Yt?(he&&e.texStorage3D(i.TEXTURE_3D,xt,Bt,ut.width,ut.height,ut.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ft,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,Tt,Ft,ut.data);else if(w.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(i.TEXTURE_2D,xt,Bt,ut.width,ut.height);else{let j=ut.width,tt=ut.height;for(let Mt=0;Mt<xt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Bt,j,tt,0,Tt,Ft,null),j>>=1,tt>>=1}}else if($t.length>0){if(Yt&&he){const j=St($t[0]);e.texStorage2D(i.TEXTURE_2D,xt,Bt,j.width,j.height)}for(let j=0,tt=$t.length;j<tt;j++)At=$t[j],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt,Ft,At):e.texImage2D(i.TEXTURE_2D,j,Bt,Tt,Ft,At);w.generateMipmaps=!1}else if(Yt){if(he){const j=St(ut);e.texStorage2D(i.TEXTURE_2D,xt,Bt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ft,ut)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Tt,Ft,ut);g(w)&&f(J),Pt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function st(T,w,G){if(w.image.length!==6)return;const J=_t(T,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const Q=n.get(it);if(it.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Pt=ee.getPrimaries(ee.workingColorSpace),gt=w.colorSpace===Un?null:ee.getPrimaries(w.colorSpace),wt=w.colorSpace===Un||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const jt=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!jt&&!ut?Tt[tt]=_(w.image[tt],!0,s.maxCubemapSize):Tt[tt]=ut?w.image[tt].image:w.image[tt],Tt[tt]=zt(w,Tt[tt]);const Ft=Tt[0],Bt=r.convert(w.format,w.colorSpace),At=r.convert(w.type),$t=y(w.internalFormat,Bt,At,w.colorSpace),Yt=w.isVideoTexture!==!0,he=Q.__version===void 0||J===!0,O=it.dataReady;let xt=L(w,Ft);$(i.TEXTURE_CUBE_MAP,w);let j;if(jt){Yt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,$t,Ft.width,Ft.height);for(let tt=0;tt<6;tt++){j=Tt[tt].mipmaps;for(let Mt=0;Mt<j.length;Mt++){const yt=j[Mt];w.format!==sn?Bt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,$t,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,yt.width,yt.height,Bt,At,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,$t,yt.width,yt.height,0,Bt,At,yt.data)}}}else{if(j=w.mipmaps,Yt&&he){j.length>0&&xt++;const tt=St(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ut){Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Bt,At,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Tt[tt].width,Tt[tt].height,0,Bt,At,Tt[tt].data);for(let Mt=0;Mt<j.length;Mt++){const Vt=j[Mt].image[tt].image;Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Vt.width,Vt.height,Bt,At,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,$t,Vt.width,Vt.height,0,Bt,At,Vt.data)}}else{Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,At,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Bt,At,Tt[tt]);for(let Mt=0;Mt<j.length;Mt++){const yt=j[Mt];Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Bt,At,yt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,$t,Bt,At,yt.image[tt])}}}g(w)&&f(i.TEXTURE_CUBE_MAP),Q.__version=it.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function mt(T,w,G,J,it,Q){const Pt=r.convert(G.format,G.colorSpace),gt=r.convert(G.type),wt=y(G.internalFormat,Pt,gt,G.colorSpace),jt=n.get(w),ut=n.get(G);if(ut.__renderTarget=w,!jt.__hasExternalTextures){const Tt=Math.max(1,w.width>>Q),Ft=Math.max(1,w.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,wt,Tt,Ft,w.depth,0,Pt,gt,null):e.texImage2D(it,Q,wt,Tt,Ft,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Et(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,ut.__webglTexture,0,ot(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,ut.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(T,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),w.depthBuffer){const J=w.depthTexture,it=J&&J.isDepthTexture?J.type:null,Q=x(w.stencilBuffer,it),Pt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ot(w);Et(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Q,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const J=w.textures;for(let it=0;it<J.length;it++){const Q=J[it],Pt=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),wt=y(Q.internalFormat,Pt,gt,Q.colorSpace),jt=ot(w);G&&Et(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,wt,w.width,w.height):Et(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,wt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,wt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const it=J.__webglTexture,Q=ot(w);if(w.depthTexture.format===Ui)Et(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===Hi)Et(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Zt(T){const w=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=J}if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,T)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(w.__webglDepthbuffer[J],T,!1);else{const it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),dt(w.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,w,G){const J=n.get(T);w!==void 0&&mt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Zt(T)}function Jt(T){const w=T.texture,G=n.get(T),J=n.get(w);T.addEventListener("dispose",C);const it=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let wt=0;wt<w.mipmaps.length;wt++)G.__webglFramebuffer[gt][wt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,wt=it.length;gt<wt;gt++){const jt=n.get(it[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Et(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<it.length;gt++){const wt=it[gt];G.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const jt=r.convert(wt.format,wt.colorSpace),ut=r.convert(wt.type),Tt=y(wt.internalFormat,jt,ut,wt.colorSpace,T.isXRRenderTarget===!0),Ft=ot(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),$(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)mt(G.__webglFramebuffer[gt][wt],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else mt(G.__webglFramebuffer[gt],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,wt=it.length;gt<wt;gt++){const jt=it[gt],ut=n.get(jt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),$(i.TEXTURE_2D,jt),mt(G.__webglFramebuffer,T,jt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(gt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,J.__webglTexture),$(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)mt(G.__webglFramebuffer[wt],T,w,i.COLOR_ATTACHMENT0,gt,wt);else mt(G.__webglFramebuffer,T,w,i.COLOR_ATTACHMENT0,gt,0);g(w)&&f(gt),e.unbindTexture()}T.depthBuffer&&Zt(T)}function rt(T){const w=T.textures;for(let G=0,J=w.length;G<J;G++){const it=w[G];if(g(it)){const Q=M(T),Pt=n.get(it).__webglTexture;e.bindTexture(Q,Pt),f(Q),e.unbindTexture()}}}const nt=[],A=[];function Ct(T){if(T.samples>0){if(Et(T)===!1){const w=T.textures,G=T.width,J=T.height;let it=i.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),gt=w.length>1;if(gt)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const jt=n.get(w[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,it,i.NEAREST),c===!0&&(nt.length=0,A.length=0,nt.push(i.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(Q),A.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const jt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const w=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(T){return Math.min(s.maxSamples,T.samples)}function Et(T){const w=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(T){const w=o.render.frame;h.get(T)!==w&&(h.set(T,w),T.update())}function zt(T,w){const G=T.colorSpace,J=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Gi&&G!==Un&&(ee.getTransfer(G)===ae?(J!==sn||it!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=Dt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Et}function Lg(i,t){function e(n,s=Un){let r;const o=ee.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.BYTE;if(n===Sl)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===wl)return i.RGB;if(n===sn)return i.RGBA;if(n===El)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===Al)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===ar||n===cr||n===lr||n===hr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===zo||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===zo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Bo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Ko||n===jo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ur)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends ri{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null;const _=new Ug,g=e.getContextAttributes();let f=null,M=null;const y=[],x=[],L=new at;let R=null;const C=new Ve;C.viewport=new le;const D=new Ve;D.viewport=new le;const S=[C,D],v=new Qd;let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=y[q];return st===void 0&&(st=new Qr,y[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=y[q];return st===void 0&&(st=new Qr,y[q]=st),st.getGripSpace()},this.getHand=function(q){let st=y[q];return st===void 0&&(st=new Qr,y[q]=st),st.getHandSpace()};function N(q){const st=x.indexOf(q.inputSource);if(st===-1)return;const mt=y[st];mt!==void 0&&(mt.update(q.inputSource,q.frame,l||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){const st=x[q];st!==null&&(x[q]=null,y[q].disconnect(st))}b=null,U=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,dt=null,Lt=null;g.depth&&(Lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=g.stencil?Hi:Ui,dt=g.stencil?ki:ei);const Zt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ni(d.textureWidth,d.textureHeight,{format:sn,type:bn,depthTexture:new Wl(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ni(p.framebufferWidth,p.framebufferHeight,{format:sn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let st=0;st<q.removed.length;st++){const mt=q.removed[st],dt=x.indexOf(mt);dt>=0&&(x[dt]=null,y[dt].disconnect(mt))}for(let st=0;st<q.added.length;st++){const mt=q.added[st];let dt=x.indexOf(mt);if(dt===-1){for(let Zt=0;Zt<y.length;Zt++)if(Zt>=x.length){x.push(mt),dt=Zt;break}else if(x[Zt]===null){x[Zt]=mt,dt=Zt;break}if(dt===-1)break}const Lt=y[dt];Lt&&Lt.connect(mt)}}const V=new I,et=new I;function X(q,st,mt){V.setFromMatrixPosition(st.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);const dt=V.distanceTo(et),Lt=st.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,Dt=Lt[14]/(Lt[10]-1),Jt=Lt[14]/(Lt[10]+1),rt=(Lt[9]+1)/Lt[5],nt=(Lt[9]-1)/Lt[5],A=(Lt[8]-1)/Lt[0],Ct=(Zt[8]+1)/Zt[0],ot=Dt*A,Et=Dt*Ct,ft=dt/(-A+Ct),zt=ft*-A;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const St=Dt+ft,T=Jt+ft,w=ot-zt,G=Et+(dt-zt),J=rt*Jt/T*St,it=nt*Jt/T*St;q.projectionMatrix.makePerspective(w,G,J,it,St,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,mt=q.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),v.near=D.near=C.near=st,v.far=D.far=C.far=mt,(b!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,U=v.far),C.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,v.layers.mask=C.layers.mask|D.layers.mask;const dt=q.parent,Lt=v.cameras;lt(v,dt);for(let Zt=0;Zt<Lt.length;Zt++)lt(Lt[Zt],dt);Lt.length===2?X(v,C,D):v.projectionMatrix.copy(C.projectionMatrix),K(q,v,dt)};function K(q,st,mt){mt===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let k=null;function $(q,st){if(h=st.getViewerPose(l||o),m=st,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let dt=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Dt=0;Dt<mt.length;Dt++){const Jt=mt[Dt];let rt=null;if(p!==null)rt=p.getViewport(Jt);else{const A=u.getViewSubImage(d,Jt);rt=A.viewport,Dt===0&&(t.setRenderTargetTextures(M,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(M))}let nt=S[Dt];nt===void 0&&(nt=new Ve,nt.layers.enable(Dt),nt.viewport=new le,S[Dt]=nt),nt.matrix.fromArray(Jt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Jt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),Dt===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(nt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Dt=u.getDepthInformation(mt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let mt=0;mt<y.length;mt++){const dt=x[mt],Lt=y[mt];dt!==null&&Lt!==void 0&&Lt.update(dt,st,l||o)}k&&k(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const _t=new nh;_t.setAnimationLoop($),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}}const Yn=new un,zg=new ue;function Og(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Ol(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,M,y):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Le&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Le&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const M=t.get(f),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),g.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Yn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,M,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=y*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));const L=y.program;n.updateUBOMapping(M,L);const R=t.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function h(M){const y=u();M.__bindingPointIndex=y;const x=i.createBuffer(),L=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],x=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,C=x.length;R<C;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,v=D.length;S<v;S++){const b=D[S];if(p(b,R,S,L)===!0){const U=b.__offset,N=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let Z=0;Z<N.length;Z++){const V=N[Z],et=_(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+H,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,H),H+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,y,x,L){const R=M.value,C=y+"_"+x;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const D=L[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return L[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(M){const y=M.uniforms;let x=0;const L=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,b=S.length;v<b;v++){const U=S[v],N=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Z=N.length;H<Z;H++){const V=N[H],et=_(V),X=x%L,lt=X%et.boundary,K=X+lt;x+=lt,K!==0&&L-K<et.storage&&(x+=L-K),U.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=et.storage}}}const R=x%L;return R>0&&(x+=L-R),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Bg{constructor(t={}){const{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let L=!1,R=0,C=0,D=null,S=-1,v=null;const b=new le,U=new le;let N=null;const H=new Kt(0);let Z=0,V=e.width,et=e.height,X=1,lt=null,K=null;const k=new le(0,0,V,et),$=new le(0,0,V,et);let _t=!1;const q=new Sa;let st=!1,mt=!1;this.transmissionResolutionScale=1;const dt=new ue,Lt=new ue,Zt=new I,Dt=new le,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function nt(){return D===null?X:1}let A=n;function Ct(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),A===null){const F="webgl2";if(A=Ct(F,E),A===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ot,Et,ft,zt,St,T,w,G,J,it,Q,Pt,gt,wt,jt,ut,Tt,Ft,Bt,At,$t,Yt,he,O;function xt(){ot=new Km(A),ot.init(),Yt=new Lg(A,ot),Et=new Gm(A,ot,t,Yt),ft=new Cg(A,ot),Et.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),zt=new Jm(A),St=new gg,T=new Pg(A,ot,ft,St,Et,Yt,zt),w=new Wm(x),G=new Zm(x),J=new sf(A),he=new km(A,J),it=new jm(A,J,zt,he),Q=new t0(A,it,J,zt),Bt=new Qm(A,Et,T),ut=new Vm(St),Pt=new mg(x,w,G,ot,Et,he,ut),gt=new Og(x,St),wt=new xg,jt=new Eg(ot),Ft=new Bm(x,w,G,ft,Q,p,c),Tt=new Ag(x,Q,Et),O=new Fg(A,zt,Et,ft),At=new Hm(A,ot,zt),$t=new $m(A,ot,zt),zt.programs=Pt.programs,x.capabilities=Et,x.extensions=ot,x.properties=St,x.renderLists=wt,x.shadowMap=Tt,x.state=ft,x.info=zt}xt();const j=new Ng(x,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(V,et,!1))},this.getSize=function(E){return E.set(V,et)},this.setSize=function(E,F,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,et=F,e.width=Math.floor(E*X),e.height=Math.floor(F*X),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(V*X,et*X).floor()},this.setDrawingBufferSize=function(E,F,W){V=E,et=F,X=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,F,W,Y){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,F,W,Y),ft.viewport(b.copy(k).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,F,W,Y){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,F,W,Y),ft.scissor(U.copy($).multiplyScalar(X).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(E){ft.setScissorTest(_t=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let Y=0;if(E){let B=!1;if(D!==null){const ht=D.texture.format;B=ht===ma||ht===pa||ht===fa}if(B){const ht=D.texture.type,vt=ht===bn||ht===ei||ht===ps||ht===ki||ht===ua||ht===da,bt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),kt=bt.r,Ht=bt.g,Ut=bt.b;vt?(m[0]=kt,m[1]=Ht,m[2]=Ut,m[3]=Rt,A.clearBufferuiv(A.COLOR,0,m)):(_[0]=kt,_[1]=Ht,_[2]=Ut,_[3]=Rt,A.clearBufferiv(A.COLOR,0,_))}else Y|=A.COLOR_BUFFER_BIT}F&&(Y|=A.DEPTH_BUFFER_BIT),W&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Ft.dispose(),wt.dispose(),jt.dispose(),St.dispose(),w.dispose(),G.dispose(),Q.dispose(),he.dispose(),O.dispose(),Pt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Da),j.removeEventListener("sessionend",Ia),Bn.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=zt.autoReset,F=Tt.enabled,W=Tt.autoUpdate,Y=Tt.needsUpdate,B=Tt.type;xt(),zt.autoReset=E,Tt.enabled=F,Tt.autoUpdate=W,Tt.needsUpdate=Y,Tt.type=B}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const F=E.target;F.removeEventListener("dispose",Vt),me(F)}function me(E){Ae(E),St.remove(E)}function Ae(E){const F=St.get(E).programs;F!==void 0&&(F.forEach(function(W){Pt.releaseProgram(W)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,Y,B,ht){F===null&&(F=Jt);const vt=B.isMesh&&B.matrixWorld.determinant()<0,bt=Eh(E,F,W,Y,B);ft.setMaterial(Y,vt);let Rt=W.index,kt=1;if(Y.wireframe===!0){if(Rt=it.getWireframeAttribute(W),Rt===void 0)return;kt=2}const Ht=W.drawRange,Ut=W.attributes.position;let Qt=Ht.start*kt,ne=(Ht.start+Ht.count)*kt;ht!==null&&(Qt=Math.max(Qt,ht.start*kt),ne=Math.min(ne,(ht.start+ht.count)*kt)),Rt!==null?(Qt=Math.max(Qt,0),ne=Math.min(ne,Rt.count)):Ut!=null&&(Qt=Math.max(Qt,0),ne=Math.min(ne,Ut.count));const xe=ne-Qt;if(xe<0||xe===1/0)return;he.setup(B,Y,bt,W,Rt);let ge,te=At;if(Rt!==null&&(ge=J.get(Rt),te=$t,te.setIndex(ge)),B.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*nt()),te.setMode(A.LINES)):te.setMode(A.TRIANGLES);else if(B.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),ft.setLineWidth(Nt*nt()),B.isLineSegments?te.setMode(A.LINES):B.isLineLoop?te.setMode(A.LINE_LOOP):te.setMode(A.LINE_STRIP)}else B.isPoints?te.setMode(A.POINTS):B.isSprite&&te.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Nt=B._multiDrawStarts,Te=B._multiDrawCounts,ie=B._multiDrawCount,$e=Rt?J.get(Rt).bytesPerElement:1,ci=St.get(Y).currentProgram.getUniforms();for(let ke=0;ke<ie;ke++)ci.setValue(A,"_gl_DrawID",ke),te.render(Nt[ke]/$e,Te[ke])}else if(B.isInstancedMesh)te.renderInstances(Qt,xe,B.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Nt);te.renderInstances(Qt,xe,Te)}else te.render(Qt,xe)};function re(E,F,W){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,bs(E,F,W),E.side=On,E.needsUpdate=!0,bs(E,F,W),E.side=yn):bs(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),f=jt.get(W),f.init(F),y.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const bt=ht[vt];re(bt,W,B),Y.add(bt)}else re(ht,W,B),Y.add(ht)}),f=y.pop(),Y},this.compileAsync=function(E,F,W=null){const Y=this.compile(E,F,W);return new Promise(B=>{function ht(){if(Y.forEach(function(vt){St.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){B(E);return}setTimeout(ht,10)}ot.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let je=null;function fn(E){je&&je(E)}function Da(){Bn.stop()}function Ia(){Bn.start()}const Bn=new nh;Bn.setAnimationLoop(fn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){je=E,j.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},j.addEventListener("sessionstart",Da),j.addEventListener("sessionend",Ia),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,D),f=jt.get(E,y.length),f.init(F),y.push(f),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Lt),mt=this.localClippingEnabled,st=ut.init(this.clippingPlanes,mt),g=wt.get(E,M.length),g.init(),M.push(g),j.enabled===!0&&j.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Lr(ht,F,-1/0,x.sortObjects)}Lr(E,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(lt,K),rt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,rt&&Ft.addToRenderList(g,E),this.info.render.frame++,st===!0&&ut.beginShadows();const W=f.state.shadowsArray;Tt.render(W,E,F),st===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,B=g.transmissive;if(f.setupLights(),F.isArrayCamera){const ht=F.cameras;if(B.length>0)for(let vt=0,bt=ht.length;vt<bt;vt++){const Rt=ht[vt];Na(Y,B,E,Rt)}rt&&Ft.render(E);for(let vt=0,bt=ht.length;vt<bt;vt++){const Rt=ht[vt];Ua(g,E,Rt,Rt.viewport)}}else B.length>0&&Na(Y,B,E,F),rt&&Ft.render(E),Ua(g,E,F);D!==null&&C===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,F),he.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],st===!0&&ut.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Lr(E,F,W,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){Y&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const vt=Q.update(E),bt=E.material;bt.visible&&g.push(E,vt,bt,W,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const vt=Q.update(E),bt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Dt.copy(vt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(bt)){const Rt=vt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ut=Rt[kt],Qt=bt[Ut.materialIndex];Qt&&Qt.visible&&g.push(E,vt,Qt,W,Dt.z,Ut)}}else bt.visible&&g.push(E,vt,bt,W,Dt.z,null)}}const ht=E.children;for(let vt=0,bt=ht.length;vt<bt;vt++)Lr(ht[vt],F,W,Y)}function Ua(E,F,W,Y){const B=E.opaque,ht=E.transmissive,vt=E.transparent;f.setupLightsView(W),st===!0&&ut.setGlobalState(x.clippingPlanes,W),Y&&ft.viewport(b.copy(Y)),B.length>0&&Es(B,F,W),ht.length>0&&Es(ht,F,W),vt.length>0&&Es(vt,F,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Na(E,F,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ss:bn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ht=f.state.transmissionRenderTarget[Y.id],vt=Y.viewport||b;ht.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);const bt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),rt&&Ft.render(W);const Rt=x.toneMapping;x.toneMapping=zn;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),st===!0&&ut.setGlobalState(x.clippingPlanes,Y),Es(E,W,Y),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,Qt=F.length;Ut<Qt;Ut++){const ne=F[Ut],xe=ne.object,ge=ne.geometry,te=ne.material,Nt=ne.group;if(te.side===yn&&xe.layers.test(Y.layers)){const Te=te.side;te.side=Le,te.needsUpdate=!0,za(xe,W,Y,ge,te,Nt),te.side=Te,te.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht))}x.setRenderTarget(bt),x.setClearColor(H,Z),kt!==void 0&&(Y.viewport=kt),x.toneMapping=Rt}function Es(E,F,W){const Y=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ht=E.length;B<ht;B++){const vt=E[B],bt=vt.object,Rt=vt.geometry,kt=Y===null?vt.material:Y,Ht=vt.group;bt.layers.test(W.layers)&&za(bt,F,W,Rt,kt,Ht)}}function za(E,F,W,Y,B,ht){E.onBeforeRender(x,F,W,Y,B,ht),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,F,W,Y,E,ht),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,x.renderBufferDirect(W,F,Y,B,E,ht),B.side=On,B.needsUpdate=!0,x.renderBufferDirect(W,F,Y,B,E,ht),B.side=yn):x.renderBufferDirect(W,F,Y,B,E,ht),E.onAfterRender(x,F,W,Y,B,ht)}function bs(E,F,W){F.isScene!==!0&&(F=Jt);const Y=St.get(E),B=f.state.lights,ht=f.state.shadowsArray,vt=B.state.version,bt=Pt.getParameters(E,B.state,ht,F,W),Rt=Pt.getProgramCacheKey(bt);let kt=Y.programs;Y.environment=E.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Vt),kt=new Map,Y.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===vt)return Fa(E,bt),Ht}else bt.uniforms=Pt.getUniforms(E),E.onBeforeCompile(bt,x),Ht=Pt.acquireProgram(bt,Rt),kt.set(Rt,Ht),Y.uniforms=bt.uniforms;const Ut=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ut.uniform),Fa(E,bt),Y.needsLights=Th(E),Y.lightsStateVersion=vt,Y.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function Oa(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=dr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Fa(E,F){const W=St.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Eh(E,F,W,Y,B){F.isScene!==!0&&(F=Jt),T.resetTextureUnits();const ht=F.fog,vt=Y.isMeshStandardMaterial?F.environment:null,bt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,Rt=(Y.isMeshStandardMaterial?G:w).get(Y.envMap||vt),kt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let xe=zn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=x.toneMapping);const ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=ge!==void 0?ge.length:0,Nt=St.get(Y),Te=f.state.lights;if(st===!0&&(mt===!0||E!==v)){const Ie=E===v&&Y.id===S;ut.setState(Y,E,Ie)}let ie=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Te.state.version||Nt.outputColorSpace!==bt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Rt||Y.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==Qt||Nt.morphColors!==ne||Nt.toneMapping!==xe||Nt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,Nt.__version=Y.version);let $e=Nt.currentProgram;ie===!0&&($e=bs(Y,F,B));let ci=!1,ke=!1,Yi=!1;const de=$e.getUniforms(),Ye=Nt.uniforms;if(ft.useProgram($e.program)&&(ci=!0,ke=!0,Yi=!0),Y.id!==S&&(S=Y.id,ke=!0),ci||v!==E){ft.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),zu(dt),Ou(dt),de.setValue(A,"projectionMatrix",dt)):de.setValue(A,"projectionMatrix",E.projectionMatrix),de.setValue(A,"viewMatrix",E.matrixWorldInverse);const Fe=de.map.cameraPosition;Fe!==void 0&&Fe.setValue(A,Zt.setFromMatrixPosition(E.matrixWorld)),Et.logarithmicDepthBuffer&&de.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,ke=!0,Yi=!0)}if(B.isSkinnedMesh){de.setOptional(A,B,"bindMatrix"),de.setOptional(A,B,"bindMatrixInverse");const Ie=B.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),de.setValue(A,"boneTexture",Ie.boneTexture,T))}B.isBatchedMesh&&(de.setOptional(A,B,"batchingTexture"),de.setValue(A,"batchingTexture",B._matricesTexture,T),de.setOptional(A,B,"batchingIdTexture"),de.setValue(A,"batchingIdTexture",B._indirectTexture,T),de.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&de.setValue(A,"batchingColorTexture",B._colorsTexture,T));const qe=W.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Bt.update(B,W,$e),(ke||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,de.setValue(A,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ye.envMap.value=Rt,Ye.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Ye.envMapIntensity.value=F.environmentIntensity),ke&&(de.setValue(A,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&bh(Ye,Yi),ht&&Y.fog===!0&&gt.refreshFogUniforms(Ye,ht),gt.refreshMaterialUniforms(Ye,Y,X,et,f.state.transmissionRenderTarget[E.id]),dr.upload(A,Oa(Nt),Ye,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(dr.upload(A,Oa(Nt),Ye,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(A,"center",B.center),de.setValue(A,"modelViewMatrix",B.modelViewMatrix),de.setValue(A,"normalMatrix",B.normalMatrix),de.setValue(A,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ie=Y.uniformsGroups;for(let Fe=0,Dr=Ie.length;Fe<Dr;Fe++){const kn=Ie[Fe];O.update(kn,$e),O.bind(kn,$e)}}return $e}function bh(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Th(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,W){St.get(E.texture).__webglTexture=F,St.get(E.depthTexture).__webglTexture=W;const Y=St.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=St.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Ah=A.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){D=E,R=F,C=W;let Y=!0,B=null,ht=!1,vt=!1;if(E){const Rt=St.get(E);if(Rt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1;else if(Rt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Rt.__hasExternalTextures)T.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Rt.__boundDepthTexture!==Ut){if(Ut!==null&&St.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const Ht=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?B=Ht[F][W]:B=Ht[F],ht=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?B=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[W]:B=Ht,b.copy(E.viewport),U.copy(E.scissor),N=E.scissorTest}else b.copy(k).multiplyScalar(X).floor(),U.copy($).multiplyScalar(X).floor(),N=_t;if(W!==0&&(B=Ah),ft.bindFramebuffer(A.FRAMEBUFFER,B)&&Y&&ft.drawBuffers(E,B),ft.viewport(b),ft.scissor(U),ft.setScissorTest(N),ht){const Rt=St.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,W)}else if(vt){const Rt=St.get(E.texture),kt=F;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,W,kt)}else if(E!==null&&W!==0){const Rt=St.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(E,F,W,Y,B,ht,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){ft.bindFramebuffer(A.FRAMEBUFFER,bt);try{const Rt=E.texture,kt=Rt.format,Ht=Rt.type;if(!Et.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&W>=0&&W<=E.height-B&&A.readPixels(F,W,Y,B,Yt.convert(kt),Yt.convert(Ht),ht)}finally{const Rt=D!==null?St.get(D).__webglFramebuffer:null;ft.bindFramebuffer(A.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,Y,B,ht,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){const Rt=E.texture,kt=Rt.format,Ht=Rt.type;if(!Et.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-Y&&W>=0&&W<=E.height-B){ft.bindFramebuffer(A.FRAMEBUFFER,bt);const Ut=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.bufferData(A.PIXEL_PACK_BUFFER,ht.byteLength,A.STREAM_READ),A.readPixels(F,W,Y,B,Yt.convert(kt),Yt.convert(Ht),0);const Qt=D!==null?St.get(D).__webglFramebuffer:null;ft.bindFramebuffer(A.FRAMEBUFFER,Qt);const ne=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Nu(A,ne,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ht),A.deleteBuffer(Ut),A.deleteSync(ne),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(Zn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-W),B=Math.floor(E.image.width*Y),ht=Math.floor(E.image.height*Y),vt=F!==null?F.x:0,bt=F!==null?F.y:0;T.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,vt,bt,B,ht),ft.unbindTexture()};const Rh=A.createFramebuffer(),Ch=A.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,Y=null,B=0,ht=null){E.isTexture!==!0&&(Zn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],F=arguments[2],ht=arguments[3]||0,W=null),ht===null&&(B!==0?(Zn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=B,B=0):ht=0);let vt,bt,Rt,kt,Ht,Ut,Qt,ne,xe;const ge=E.isCompressedTexture?E.mipmaps[ht]:E.image;if(W!==null)vt=W.max.x-W.min.x,bt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,kt=W.min.x,Ht=W.min.y,Ut=W.isBox3?W.min.z:0;else{const qe=Math.pow(2,-B);vt=Math.floor(ge.width*qe),bt=Math.floor(ge.height*qe),E.isDataArrayTexture?Rt=ge.depth:E.isData3DTexture?Rt=Math.floor(ge.depth*qe):Rt=1,kt=0,Ht=0,Ut=0}Y!==null?(Qt=Y.x,ne=Y.y,xe=Y.z):(Qt=0,ne=0,xe=0);const te=Yt.convert(F.format),Nt=Yt.convert(F.type);let Te;F.isData3DTexture?(T.setTexture3D(F,0),Te=A.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Te=A.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Te=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,F.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,F.unpackAlignment);const ie=A.getParameter(A.UNPACK_ROW_LENGTH),$e=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ci=A.getParameter(A.UNPACK_SKIP_PIXELS),ke=A.getParameter(A.UNPACK_SKIP_ROWS),Yi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ge.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ge.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,kt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ht),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ut);const de=E.isDataArrayTexture||E.isData3DTexture,Ye=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const qe=St.get(E),Ie=St.get(F),Fe=St.get(qe.__renderTarget),Dr=St.get(Ie.__renderTarget);ft.bindFramebuffer(A.READ_FRAMEBUFFER,Fe.__webglFramebuffer),ft.bindFramebuffer(A.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let kn=0;kn<Rt;kn++)de&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.get(E).__webglTexture,B,Ut+kn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.get(F).__webglTexture,ht,xe+kn)),A.blitFramebuffer(kt,Ht,vt,bt,Qt,ne,vt,bt,A.DEPTH_BUFFER_BIT,A.NEAREST);ft.bindFramebuffer(A.READ_FRAMEBUFFER,null),ft.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||St.has(E)){const qe=St.get(E),Ie=St.get(F);ft.bindFramebuffer(A.READ_FRAMEBUFFER,Rh),ft.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ch);for(let Fe=0;Fe<Rt;Fe++)de?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,qe.__webglTexture,B,Ut+Fe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,qe.__webglTexture,B),Ye?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.__webglTexture,ht,xe+Fe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ie.__webglTexture,ht),B!==0?A.blitFramebuffer(kt,Ht,vt,bt,Qt,ne,vt,bt,A.COLOR_BUFFER_BIT,A.NEAREST):Ye?A.copyTexSubImage3D(Te,ht,Qt,ne,xe+Fe,kt,Ht,vt,bt):A.copyTexSubImage2D(Te,ht,Qt,ne,kt,Ht,vt,bt);ft.bindFramebuffer(A.READ_FRAMEBUFFER,null),ft.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ye?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Te,ht,Qt,ne,xe,vt,bt,Rt,te,Nt,ge.data):F.isCompressedArrayTexture?A.compressedTexSubImage3D(Te,ht,Qt,ne,xe,vt,bt,Rt,te,ge.data):A.texSubImage3D(Te,ht,Qt,ne,xe,vt,bt,Rt,te,Nt,ge):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ht,Qt,ne,vt,bt,te,Nt,ge.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ht,Qt,ne,ge.width,ge.height,te,ge.data):A.texSubImage2D(A.TEXTURE_2D,ht,Qt,ne,vt,bt,te,Nt,ge);A.pixelStorei(A.UNPACK_ROW_LENGTH,ie),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,$e),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ci),A.pixelStorei(A.UNPACK_SKIP_ROWS,ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Yi),ht===0&&F.generateMipmaps&&A.generateMipmap(Te),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,Y=null,B=0){return E.isTexture!==!0&&(Zn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),Zn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,Y,B)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){R=0,C=0,D=null,ft.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Ra={width:5,houseLength:18.5,backyardLength:11.5,totalLength:30},Ke=3,se=3,Kc=3.4,fr=2.8,ds=2.4,Gt=.14,ze=.14,go=.24,_e=1.65,Ca=[{id:"garagem",name:"Garagem",shortName:"Garagem",dimensionsLabel:"5,00 m × 5,00 m",bounds:{minX:0,maxX:5,minZ:0,maxZ:5},floorType:"pisoExterno",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[3.45,_e,1.05],lookAt:[1.85,1.3,5.4]}},{id:"sala",name:"Sala",shortName:"Sala",dimensionsLabel:"3,80 m × 3,00 m",bounds:{minX:0,maxX:3.8,minZ:5,maxZ:8},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.75,_e,5.65],lookAt:[2.1,1.45,8.8]}},{id:"cozinha",name:"Cozinha",shortName:"Cozinha",dimensionsLabel:"3,80 m × 3,00 m",bounds:{minX:0,maxX:3.8,minZ:8,maxZ:11},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.3,_e,8.65],lookAt:[3.2,1.35,9.8]}},{id:"corredor-interno",name:"Corredor Interno",shortName:"Corredor int.",dimensionsLabel:"0,90 m × 3,50 m",bounds:{minX:0,maxX:.87,minZ:11,maxZ:14.5},floorType:"radierPolido",ceiling:!0,showInNav:!1,showLabel:!1,cameraPreset:{pos:[.44,_e,11.4],lookAt:[.44,1.45,14.5]}},{id:"area-servico",name:"Área de Serviço",shortName:"Á. Serviço",dimensionsLabel:"2,90 m × 1,50 m",bounds:{minX:.87,maxX:3.8,minZ:11,maxZ:12.5},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[.65,_e,11.38],lookAt:[2.3,1,12.15]}},{id:"banheiro",name:"Banheiro",shortName:"Banheiro",dimensionsLabel:"2,90 m × 2,00 m",bounds:{minX:.87,maxX:3.8,minZ:12.5,maxZ:14.5},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.35,_e,13.72],lookAt:[3.15,1.25,13.35]}},{id:"closet",name:"Closet",shortName:"Closet",dimensionsLabel:"2,90 m × 1,80 m",bounds:{minX:.87,maxX:3.8,minZ:14.5,maxZ:16.3},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[.55,_e,15.4],lookAt:[3.4,1.45,15.4]}},{id:"quarto",name:"Quarto",shortName:"Quarto",dimensionsLabel:"3,80 m × 4,00 m",bounds:{minX:0,maxX:3.8,minZ:14.5,maxZ:18.5},floorType:"radierPolido",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[.55,_e,16.58],lookAt:[2.35,1.35,17.9]}},{id:"corredor",name:"Corredor Lateral",shortName:"Corredor",dimensionsLabel:"1,20 m × 13,50 m",bounds:{minX:3.8,maxX:5,minZ:5,maxZ:18.5},floorType:"pisoExterno",ceiling:!1,showInNav:!0,showLabel:!0,cameraPreset:{pos:[4.42,_e,6.2],lookAt:[4.05,1.75,13.8]}}],ah=[{id:"muro-oeste-garagem",x1:-.07,z1:0,x2:-.07,z2:5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"muro-oeste-casa-frente",x1:-.07,z1:5,x2:-.07,z2:12.5,thickness:Gt,yBottom:0,yTop:Kc,material:"reboco",collidable:!0},{id:"muro-oeste-casa-laje",x1:-.07,z1:12.5,x2:-.07,z2:14.5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"muro-oeste-casa-fundos",x1:-.07,z1:14.5,x2:-.07,z2:18.57,thickness:Gt,yBottom:0,yTop:Kc,material:"reboco",collidable:!0},{id:"muro-leste-garagem",x1:5.07,z1:0,x2:5.07,z2:5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"pilar-frente-esq",x1:0,z1:-.07,x2:.08,z2:-.07,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"pilar-frente-meio",x1:3.65,z1:-.07,x2:3.85,z2:-.07,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"pilar-frente-dir",x1:4.92,z1:-.07,x2:5,z2:-.07,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"viga-frente-garagem",x1:0,z1:-.07,x2:5,z2:-.07,thickness:Gt,yBottom:2.4,yTop:se,material:"reboco",collidable:!1},{id:"sala-frente-esq",x1:0,z1:5,x2:.28,z2:5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"sala-frente-bandeira",x1:.28,z1:5,x2:3.43,z2:5,thickness:Gt,yBottom:2.7,yTop:se,material:"reboco",collidable:!1},{id:"sala-frente-dir",x1:3.43,z1:5,x2:3.87,z2:5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"leste-sala-inicio",x1:3.8,z1:5.07,x2:3.8,z2:5.35,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"leste-sala-peitoril",x1:3.8,z1:5.35,x2:3.8,z2:7.35,thickness:Gt,yBottom:0,yTop:1,material:"reboco",collidable:!0},{id:"leste-sala-verga",x1:3.8,z1:5.35,x2:3.8,z2:7.35,thickness:Gt,yBottom:2.7,yTop:se,material:"reboco",collidable:!1},{id:"leste-sala-cozinha",x1:3.8,z1:7.35,x2:3.8,z2:8.35,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"leste-cozinha-peitoril",x1:3.8,z1:8.35,x2:3.8,z2:10.35,thickness:Gt,yBottom:0,yTop:1,material:"reboco",collidable:!0},{id:"leste-cozinha-verga",x1:3.8,z1:8.35,x2:3.8,z2:10.35,thickness:Gt,yBottom:2.7,yTop:se,material:"reboco",collidable:!1},{id:"leste-cozinha-area",x1:3.8,z1:10.35,x2:3.8,z2:11.28,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"leste-area-verga",x1:3.8,z1:11.28,x2:3.8,z2:12.18,thickness:Gt,yBottom:2.1,yTop:se,material:"reboco",collidable:!1},{id:"leste-area-banheiro",x1:3.8,z1:12.18,x2:3.8,z2:13.1,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"leste-banheiro-peitoril",x1:3.8,z1:13.1,x2:3.8,z2:13.9,thickness:Gt,yBottom:0,yTop:1.8,material:"reboco",collidable:!0},{id:"leste-banheiro-verga",x1:3.8,z1:13.1,x2:3.8,z2:13.9,thickness:Gt,yBottom:2.4,yTop:se,material:"reboco",collidable:!1},{id:"leste-quarto-fundo",x1:3.8,z1:13.9,x2:3.8,z2:18.57,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"div-cozinha-area",x1:.87,z1:11,x2:3.73,z2:11,thickness:ze,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"div-area-banheiro-corredor-verga",x1:0,z1:12.5,x2:.87,z2:12.5,thickness:ze,yBottom:2.1,yTop:se,material:"reboco",collidable:!1},{id:"div-area-banheiro",x1:.87,z1:12.5,x2:3.73,z2:12.5,thickness:ze,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"porta-quarto-verga",x1:0,z1:14.5,x2:.87,z2:14.5,thickness:ze,yBottom:2.1,yTop:se,material:"reboco",collidable:!1},{id:"div-banheiro-quarto",x1:.87,z1:14.5,x2:3.73,z2:14.5,thickness:ze,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"corredor-int-as",x1:.94,z1:11.88,x2:.94,z2:12.43,thickness:ze,yBottom:0,yTop:3.3,material:"reboco",collidable:!0},{id:"corredor-int-banheiro",x1:.94,z1:12.57,x2:.94,z2:13.55,thickness:ze,yBottom:0,yTop:fr,material:"reboco",collidable:!0},{id:"corredor-int-porta-banheiro-verga",x1:.94,z1:13.55,x2:.94,z2:14.35,thickness:ze,yBottom:2.1,yTop:fr,material:"reboco",collidable:!1},{id:"corredor-int-ombreira-banheiro",x1:.94,z1:14.35,x2:.94,z2:14.43,thickness:ze,yBottom:0,yTop:fr,material:"reboco",collidable:!0},{id:"quarto-fundo-esq",x1:0,z1:18.5,x2:.86,z2:18.5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0},{id:"quarto-fundo-peitoril",x1:.86,z1:18.5,x2:2.86,z2:18.5,thickness:Gt,yBottom:0,yTop:.8,material:"reboco",collidable:!0},{id:"quarto-fundo-verga",x1:.86,z1:18.5,x2:2.86,z2:18.5,thickness:Gt,yBottom:2.8,yTop:se,material:"reboco",collidable:!1},{id:"quarto-fundo-dir",x1:2.86,z1:18.5,x2:3.73,z2:18.5,thickness:Gt,yBottom:0,yTop:se,material:"reboco",collidable:!0}],ch=[{id:"oitao-frente",x1:0,x2:3.73,z:5,thickness:Gt},{id:"oitao-p5",x1:.87,x2:3.73,z:11,thickness:ze},{id:"oitao-p6",x1:0,x2:3.73,z:12.5,thickness:ze},{id:"oitao-p7",x1:0,x2:3.73,z:14.5,thickness:ze},{id:"oitao-fundos",x1:0,x2:3.73,z:18.5,thickness:Gt}],lh=[{id:"telha-frente",zStart:4.9,zEnd:12.58,yWest:3.4,yEast:3},{id:"telha-fundos",zStart:14.42,zEnd:18.62,yWest:3.4,yEast:3}],hh={x1:0,x2:3.73,z1:12.5,z2:14.5,yTop:fr,tank:{x:1.75,z:13.5,liters:1e3}},uh=[{id:"portao-carro",type:"gate",orientation:"horizontal",x1:.08,x2:3.65,z:-.04,yBottom:0,yTop:2.38,closedSpans:[{minX:.08,maxX:3.65,minZ:-.1,maxZ:.02}]},{id:"portao-social",type:"gate",orientation:"horizontal",x1:3.85,x2:4.92,z:-.04,yBottom:0,yTop:2.38,closedSpans:[{minX:3.85,maxX:4.92,minZ:-.1,maxZ:.02}]},{id:"porta-balcao-sala",type:"sliding-door",orientation:"horizontal",x1:.28,x2:3.43,z:5,yBottom:0,yTop:2.7,panels:4,openGap:{x1:1.07,x2:2.64},closedSpans:[{minX:.28,maxX:1.07,minZ:4.94,maxZ:5.06},{minX:2.64,maxX:3.43,minZ:4.94,maxZ:5.06}]},{id:"janela-sala",type:"window",orientation:"vertical",x:3.8,z1:5.35,z2:7.35,yBottom:1,yTop:2.7,frosted:!1},{id:"janela-cozinha",type:"window",orientation:"vertical",x:3.8,z1:8.35,z2:10.35,yBottom:1,yTop:2.7,frosted:!1},{id:"porta-area-servico",type:"wood-door",orientation:"vertical",x:3.8,z1:11.28,z2:12.18,yBottom:0,yTop:2.1,swingAngle:-1.38},{id:"janela-banheiro",type:"window",orientation:"vertical",x:3.8,z1:13.1,z2:13.9,yBottom:1.8,yTop:2.4,frosted:!0},{id:"porta-banheiro",type:"wood-door",orientation:"vertical",x:.94,z1:13.55,z2:14.35,yBottom:0,yTop:2.1,hingeAt:"end",swingAngle:-1.5},{id:"porta-quarto",type:"wood-door",orientation:"horizontal",x1:0,x2:.87,z:14.5,yBottom:0,yTop:2.1,swingAngle:1.48},{id:"janela-quarto-fundos",type:"window-horizontal",orientation:"horizontal",x1:.86,x2:2.86,z:18.5,yBottom:.8,yTop:2.8,frosted:!1}],dh=[{id:"carro-garagem",kind:"car",x:1.65,z:2.65,rotY:0},{id:"tapete-sala",kind:"rug",x:2.05,z:6.2,width:1.8,depth:2,color:"#dfd6c8"},{id:"sofa-sala",kind:"sofa",x:3.24,z:6.2,width:1.95,depth:.88,rotY:-Math.PI/2},{id:"mesa-centro",kind:"coffee-table",x:2.05,z:6.2},{id:"rack-tv-sala",kind:"tv-unit",x:.24,z:6.2,rotY:Math.PI/2},{id:"quadro-sala",kind:"wall-art",x:.03,z:9.25,rotY:Math.PI/2,variant:0},{id:"peninsula-cozinha",kind:"peninsula",x:2.68,z:8.15,width:1.8,depth:.68},{id:"bancada-pia-cozinha",kind:"kitchen-counter",x:3.4,z:9.25,width:1.85,depth:.62},{id:"fogao-cozinha",kind:"stove",x:3.38,z:10.56},{id:"coifa-cozinha",kind:"range-hood",x:3.38,z:10.56},{id:"geladeira-cozinha",kind:"fridge",x:2.1,z:10.56},{id:"maquina-lavar",kind:"washer",x:1.42,z:12.1},{id:"tanque-servico",kind:"laundry-tub",x:2.18,z:12.12,rotY:Math.PI},{id:"prateleira-servico",kind:"laundry-shelf",x:1.8,z:12.28},{id:"pia-banheiro",kind:"bathroom-vanity",x:1.48,z:12.82,width:.95,depth:.5},{id:"vaso-banheiro",kind:"toilet",x:3.4,z:12.95,rotY:-Math.PI/2},{id:"box-banheiro",kind:"shower-box",x1:2.35,x2:3.72,z1:13.45,z2:14.42},{id:"armario-closet-1",kind:"wardrobe",x:2.36,z:14.84,width:2.7,depth:.52,rotY:0},{id:"armario-closet-2",kind:"wardrobe",x:2.36,z:15.96,width:2.7,depth:.52,rotY:Math.PI},{id:"tapete-quarto",kind:"rug",x:2.65,z:17.28,width:2.1,depth:2,color:"#e6dfd3"},{id:"cama-quarto",kind:"bed",x:2.71,z:17.28,width:1.48,length:1.98,rotY:-Math.PI/2},{id:"tv-quarto",kind:"wall-tv",x:.06,z:17.28,rotY:Math.PI/2},{id:"jardim-corredor",kind:"corridor-planters"}],fh=[{id:"laje-garagem",x:2.5,z:2.465,w:5.28,d:5.21,y:se}],Pa=[{name:"garagem",pos:[2.5,2.86,2.5],distance:8.5,fixture:!0,fixtureY:2.99},{name:"sala",pos:[1.9,3.04,6.5],distance:8,fixture:!1},{name:"cozinha",pos:[1.9,3.04,9.5],distance:8,fixture:!1},{name:"area-servico",pos:[2.2,2.98,11.75],distance:6.5,fixture:!1},{name:"banheiro",pos:[2.2,2.66,13.5],distance:6.5,fixture:!0,fixtureY:2.79},{name:"closet",pos:[2.2,3,15.4],distance:6.5,fixture:!1},{name:"quarto",pos:[1.9,3.04,17.3],distance:8,fixture:!1},{name:"corredor-int",pos:[.44,2.66,13.4],distance:5.5,fixture:!0,fixtureY:2.79}],ph=[{id:"cota-largura-total",x1:0,z1:-.65,x2:5,z2:-.65,label:"5,00 m (total)"},{id:"cota-largura-casa",x1:0,z1:30.65,x2:3.8,z2:30.65,label:"3,80 m"},{id:"cota-largura-corredor",x1:3.8,z1:30.65,x2:5,z2:30.65,label:"1,20 m"},{id:"cota-garagem",x1:-.65,z1:0,x2:-.65,z2:5,label:"5,00 m"},{id:"cota-sala",x1:-.65,z1:5,x2:-.65,z2:8,label:"3,00 m"},{id:"cota-cozinha",x1:-.65,z1:8,x2:-.65,z2:11,label:"3,00 m"},{id:"cota-area",x1:-.65,z1:11,x2:-.65,z2:12.5,label:"1,50 m"},{id:"cota-banheiro",x1:-.65,z1:12.5,x2:-.65,z2:14.5,label:"2,00 m"},{id:"cota-quarto",x1:-.65,z1:14.5,x2:-.65,z2:18.5,label:"4,00 m"},{id:"cota-profundidade-total",x1:5.75,z1:0,x2:5.75,z2:30,label:"30,00 m (total)"}];function kg(i){const t=i.thickness/2;return Math.abs(i.x1-i.x2)<1e-6?{minX:i.x1-t,maxX:i.x1+t,minZ:Math.min(i.z1,i.z2),maxZ:Math.max(i.z1,i.z2),label:i.id}:{minX:Math.min(i.x1,i.x2),maxX:Math.max(i.x1,i.x2),minZ:i.z1-t,maxZ:i.z1+t,label:i.id}}function mh(i,t){const e=[];for(const n of i)n.collidable&&e.push(kg(n));for(const n of t)if(Array.isArray(n.closedSpans))for(const s of n.closedSpans)e.push({...s,label:n.id});return e}const Hg=[...Ca,{id:"quintal",name:"Quintal",shortName:"Quintal",dimensionsLabel:"5,00 m × 11,50 m",bounds:{minX:0,maxX:5,minZ:18.5,maxZ:30},floorType:"grama",ceiling:!1,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.55,_e,23.4],lookAt:[2.4,1.3,17.5]}}],jc=[...ah,{id:"muro-oeste-quintal",x1:-.07,z1:18.57,x2:-.07,z2:30.15,thickness:Gt,yBottom:0,yTop:ds,material:"reboco",collidable:!0},{id:"muro-leste-corredor",x1:5.07,z1:5,x2:5.07,z2:30.15,thickness:Gt,yBottom:0,yTop:ds,material:"reboco",collidable:!0},{id:"muro-fundos",x1:0,z1:30.07,x2:5,z2:30.07,thickness:Gt,yBottom:0,yTop:ds,material:"reboco",collidable:!0}],$c=[...uh],Gg=[...dh,{id:"banco-quintal",kind:"garden-bench",x:4.58,z:22,rotY:Math.PI/2},{id:"pergolado-quintal",kind:"outdoor-pergola",x:2.5,z:27.6},{id:"arvores-quintal",kind:"garden-trees"}],Vg=[...ph,{id:"cota-quintal",x1:-.65,z1:18.5,x2:-.65,z2:30,label:"11,50 m"}],Wg=[{id:"terrace-v1",x:1.975,z:19.62,w:3.65,d:2.08},{id:"back-deck-v1",x:2.5,z:27.75,w:4.3,d:3.5}],Xg={x:1.45,startZ:21.3,count:7,step:.7},ai={id:"v1",label:"V1: Quintal",title:"Versão 1 (Quintal Livre 5×30 m)",LOT:Ra,ROOMS:Hg,WALLS:jc,GABLES:ch,SANDWICH_ROOFS:lh,WATER_TANK_SLAB:hh,OPENINGS:$c,FURNITURE_ITEMS:Gg,DIMENSION_LINES:Vg,CEILING_SLABS:fh,LIGHT_SPOTS:Pa,FLOOR_DECKS:Wg,STEPPING_STONES:Xg,hasBackEdicula:!1,getColliders:()=>mh(jc,$c)},Yg=[...Ca,{id:"area-lazer",name:"Área de Lazer / Gourmet",shortName:"Lazer",dimensionsLabel:"5,00 m × 7,10 m",bounds:{minX:0,maxX:5,minZ:18.5,maxZ:25.6},floorType:"grama",ceiling:!1,showInNav:!0,showLabel:!0,cameraPreset:{pos:[3.2,_e,19.65],lookAt:[1.4,1.25,22.8]}},{id:"quarto-gamer",name:"Quarto Gamer",shortName:"Q. Gamer",dimensionsLabel:"3,40 m × 4,40 m",bounds:{minX:0,maxX:3.4,minZ:25.6,maxZ:30},floorType:"madeiraPiso",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.9,_e,26.45],lookAt:[.35,1.05,27.35]}},{id:"banheiro-fundos",name:"Banheiro Edícula",shortName:"Banh. Fundos",mapLabel:"WC",dimensionsLabel:"1,60 m × 4,40 m",bounds:{minX:3.4,maxX:5,minZ:25.6,maxZ:30},floorType:"ceramicaBanheiro",ceiling:!0,showInNav:!0,showLabel:!0,cameraPreset:{pos:[3.95,_e,26.45],lookAt:[4.6,1.15,28]}}],Jc=[...ah,{id:"muro-oeste-lazer",x1:-.07,z1:18.57,x2:-.07,z2:25.53,thickness:Gt,yBottom:0,yTop:ds,material:"reboco",collidable:!0},{id:"muro-leste-corredor",x1:5.07,z1:5,x2:5.07,z2:25.53,thickness:Gt,yBottom:0,yTop:ds,material:"reboco",collidable:!0},{id:"muro-oeste-edicula",x1:-.07,z1:25.53,x2:-.07,z2:30.15,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"muro-leste-edicula",x1:5.07,z1:25.53,x2:5.07,z2:30.15,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"muro-fundos",x1:0,z1:30.07,x2:5,z2:30.07,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"edicula-frente-esq",x1:0,z1:25.6,x2:.55,z2:25.6,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"edicula-frente-bandeira",x1:.55,z1:25.6,x2:2.55,z2:25.6,thickness:Gt,yBottom:2.25,yTop:Ke,material:"reboco",collidable:!1},{id:"edicula-frente-meio",x1:2.55,z1:25.6,x2:3.65,z2:25.6,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"edicula-banheiro-peitoril",x1:3.65,z1:25.6,x2:4.75,z2:25.6,thickness:Gt,yBottom:0,yTop:1.65,material:"reboco",collidable:!0},{id:"edicula-banheiro-verga",x1:3.65,z1:25.6,x2:4.75,z2:25.6,thickness:Gt,yBottom:2.25,yTop:Ke,material:"reboco",collidable:!1},{id:"edicula-frente-dir",x1:4.75,z1:25.6,x2:5,z2:25.6,thickness:Gt,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"div-edicula-ombreira-frente",x1:3.4,z1:25.67,x2:3.4,z2:26.05,thickness:ze,yBottom:0,yTop:Ke,material:"reboco",collidable:!0},{id:"div-edicula-porta-verga",x1:3.4,z1:26.05,x2:3.4,z2:26.92,thickness:ze,yBottom:2.15,yTop:Ke,material:"reboco",collidable:!1},{id:"div-edicula-fundo",x1:3.4,z1:26.92,x2:3.4,z2:30,thickness:ze,yBottom:0,yTop:Ke,material:"reboco",collidable:!0}],Qc=[...uh,{id:"porta-balcao-gamer",type:"sliding-door",orientation:"horizontal",x1:.55,x2:2.55,z:25.6,yBottom:0,yTop:2.25,panels:2,openGap:{x1:.6,x2:1.55},closedSpans:[{minX:1.55,maxX:2.55,minZ:25.54,maxZ:25.66}]},{id:"janela-banheiro-fundos",type:"window-horizontal",orientation:"horizontal",x1:3.65,x2:4.75,z:25.6,yBottom:1.65,yTop:2.25,frosted:!0},{id:"porta-banheiro-fundos",type:"wood-door",orientation:"vertical",x:3.4,z1:26.05,z2:26.92,yBottom:0,yTop:2.15,swingAngle:1.5}],qg=[...dh,{id:"churrasqueira-gourmet",kind:"churrasqueira-gourmet",x:.42,z:22.15},{id:"pergolado-gourmet",kind:"gourmet-pergola",x:2.65,z:22.15},{id:"jardim-lazer",kind:"leisure-plants"},{id:"setup-gamer",kind:"gamer-desk",x:.44,z:27.15},{id:"tapete-gamer",kind:"rug",x:2.25,z:29.05,width:2,depth:1.6,color:"#2b323b"},{id:"cama-gamer",kind:"gamer-bed",x:2.34,z:29.1,width:1.38,length:1.94,rotY:-Math.PI/2},{id:"estante-frigobar",kind:"mini-fridge-shelf",x:.36,z:29.35},{id:"pia-banheiro-fundos",kind:"bathroom-vanity",x:4.74,z:26.75,width:.85,depth:.48,rotY:-Math.PI/2,ledMirror:!0},{id:"vaso-banheiro-fundos",kind:"toilet",x:4.68,z:27.85,rotY:-Math.PI/2},{id:"box-banheiro-fundos",kind:"shower-box",x1:3.48,x2:5,z1:28.78,z2:29.96,openSide:"left"}],Zg=[...ph,{id:"cota-lazer",x1:-.65,z1:18.5,x2:-.65,z2:25.6,label:"7,10 m (Lazer)"},{id:"cota-edicula",x1:-.65,z1:25.6,x2:-.65,z2:30,label:"4,40 m (Edícula)"}],Kg=[...fh,{id:"laje-edicula",x:2.5,z:27.84,w:5.28,d:4.62,y:Ke}],jg=[...Pa,{name:"area-gourmet",pos:[2.5,2.55,22.15],distance:9,color:"#ffe5bf",intensity:1.5,fixture:!1},{name:"quarto-gamer",pos:[1.75,2.86,27.8],distance:7.5,fixture:!0,fixtureY:2.99},{name:"quarto-gamer-rgb",pos:[.65,1.55,27.15],distance:4.8,color:"#6b7cff",intensity:1.65,fixture:!1},{name:"banheiro-fundos",pos:[4.2,2.86,27.8],distance:6.5,fixture:!0,fixtureY:2.99}],$g=[{id:"terrace-v2",x:1.975,z:19.35,w:3.65,d:1.55},{id:"gourmet-paving-v2",x:2.5,z:22.15,w:4.88,d:3.95}],Jg={x:1.1,startZ:24.45,count:2,step:.65},gh={id:"v2",label:"V2: Edícula Gamer",title:"Versão 2 (Lazer + Edícula Gamer 5×30 m)",LOT:Ra,ROOMS:Yg,WALLS:Jc,GABLES:ch,SANDWICH_ROOFS:lh,WATER_TANK_SLAB:hh,OPENINGS:Qc,FURNITURE_ITEMS:qg,DIMENSION_LINES:Zg,CEILING_SLABS:Kg,LIGHT_SPOTS:jg,FLOOR_DECKS:$g,STEPPING_STONES:Jg,hasBackEdicula:!0,getColliders:()=>mh(Jc,Qc)},Qg={garagem:{pos:[2.5,1.9,1.2],lookAt:[1.9,.25,5.8]},sala:{pos:[1.85,_e,5.8],lookAt:[2.1,.15,7.6]},cozinha:{pos:[1.8,_e,8.7],lookAt:[2.3,.15,10.6]},"area-servico":{pos:[.6,_e,11.4],lookAt:[2.2,.15,12.1]},banheiro:{pos:[1.9,_e,13.4],lookAt:[2.2,.15,13.6]},closet:{pos:[1.8,_e,15.2],lookAt:[2,.15,15.4]},quarto:{pos:[1.85,_e,16.4],lookAt:[1.9,.2,18.2]},corredor:{pos:[4.45,1.9,7.2],lookAt:[3.6,.2,12.2]}},t_=[...Ca.map(i=>({...i,ceiling:!1,cameraPreset:Qg[i.id]||i.cameraPreset})),{id:"quintal",name:"Quintal",shortName:"Quintal",dimensionsLabel:"5,00 m × 11,50 m",bounds:{minX:0,maxX:5,minZ:18.5,maxZ:30},floorType:"grama",ceiling:!1,showInNav:!0,showLabel:!0,cameraPreset:{pos:[1.85,1.85,22.8],lookAt:[1.9,.25,18.3]}}],{byWall:qn}=or,e_=[{id:"cota-largura-casa",x1:0,z1:4.5,x2:3.8,z2:4.5,label:"Largura Casa: 3,80 m"},{id:"fiada-p1",x1:-.38,z1:5,x2:-.38,z2:18.5,label:`P1: ${qn.P1.total} blocos (13,64 m)`},{id:"fiada-p2",x1:4.18,z1:5,x2:4.18,z2:18.5,label:`P2: ${qn.P2.total} blocos`},{id:"fiada-p3",x1:.28,z1:4.78,x2:3.43,z2:4.78,label:"P3: Vão 3,15 m (2 meio)"},{id:"fiada-p4",x1:0,z1:18.88,x2:3.73,z2:18.88,label:`P4: ${qn.P4.total} bl. (Jan. 2×2)`},{id:"fiada-p5",x1:1.4,z1:10.75,x2:3.65,z2:10.75,label:`P5: ${qn.P5.total} bl.`},{id:"fiada-p6",x1:1.4,z1:12.25,x2:3.65,z2:12.25,label:`P6: ${qn.P6.total} bl.`},{id:"fiada-p7",x1:1.4,z1:14.25,x2:3.65,z2:14.25,label:`P7: ${qn.P7.total} bl.`},{id:"fiada-p8",x1:1.24,z1:11.88,x2:1.24,z2:13.55,label:`P8: ${qn.P8.total} bl.`}],n_={id:"v3",label:"V3: 1ª Fiada",title:`Versão 3 (Modulação 1ª Fiada V1: ${or.totalBlocks} blocos + ${or.groutPointsCount} arranques)`,LOT:Ra,ROOMS:t_,WALLS:[],GABLES:[],SANDWICH_ROOFS:[],WATER_TANK_SLAB:null,OPENINGS:[],FURNITURE_ITEMS:[],DIMENSION_LINES:e_,CEILING_SLABS:[],LIGHT_SPOTS:Pa.map(i=>({...i,fixture:!1})),FLOOR_DECKS:[],STEPPING_STONES:null,hasBackEdicula:!1,isFirstCourseOnly:!0,defaultLabelsVisible:!0,FIRST_COURSE_BLOCKS:Dh,FIRST_COURSE_GROUT_POINTS:Lh,FIRST_COURSE_STATS:or,FIRST_COURSE_THRESHOLDS:Ph,getColliders:()=>[]},i_={v1:ai,v2:gh,v3:n_};function _h(i){return i_[i]||gh}ai.ROOMS;ai.WALLS;ai.OPENINGS;ai.FURNITURE_ITEMS;ai.DIMENSION_LINES;ai.getColliders;const tl={type:"change"},La={type:"start"},xh={type:"end"},sr=new xa,el=new In,s_=Math.cos(70*Dn.DEG2RAD),Se=new I,Be=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_o=1e-6;class r_ extends ef{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ii,this._lastTargetPosition=new I,this._quat=new ii().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ec,this._sphericalDelta=new Ec,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a_.bind(this),this._onPointerDown=o_.bind(this),this._onPointerUp=c_.bind(this),this._onContextMenu=m_.bind(this),this._onMouseWheel=u_.bind(this),this._onKeyDown=d_.bind(this),this._onTouchStart=f_.bind(this),this._onTouchMove=p_.bind(this),this._onMouseDown=l_.bind(this),this._onMouseMove=h_.bind(this),this._interceptControlDown=g_.bind(this),this._interceptControlUp=__.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Se.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<s_?this.object.lookAt(this.target):(el.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane(el,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_o||this._lastTargetPosition.distanceToSquared(this.target)>_o?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function o_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function a_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function c_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xh),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function l_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(La)}function h_(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function u_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(La),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xh))}function d_(i){this.enabled!==!1&&this._handleKeyDown(i)}function f_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(La)}function p_(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function m_(i){this.enabled!==!1&&i.preventDefault()}function g_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function __(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ns=1e-4;function yr(i,t,e){return Math.max(t,Math.min(e,i))}function x_(i,t,e){const n=yr(i.x,t.minX,t.maxX),s=yr(i.z,t.minZ,t.maxZ),r=i.x-n,o=i.z-s,a=r*r+o*o;if(a>=e*e)return;if(a>1e-10){const p=Math.sqrt(a),m=e-p+ns;i.x+=r/p*m,i.z+=o/p*m;return}const c=i.x-t.minX,l=t.maxX-i.x,h=i.z-t.minZ,u=t.maxZ-i.z,d=Math.min(c,l,h,u);d===c?i.x=t.minX-e-ns:d===l?i.x=t.maxX+e+ns:d===h?i.z=t.minZ-e-ns:i.z=t.maxZ+e+ns}function v_(i,t,e){for(const n of t){const s=yr(i.x,n.minX,n.maxX),r=yr(i.z,n.minZ,n.maxZ),o=i.x-s,a=i.z-r;if(o*o+a*a<e*e-1e-6)return!0}return!1}function nl(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r),a=Math.max(.05,n*.4),c=Math.max(1,Math.ceil(o/a)),l={x:i.x,z:i.z};for(let h=1;h<=c;h+=1){const u=s/c,d=r/c;l.x+=u,l.z+=d;for(let p=0;p<4;p+=1)for(const m of e)x_(l,m,n)}return l}function is(i,t,e){const n=[...e].sort((s,r)=>{const o=(s.bounds.maxX-s.bounds.minX)*(s.bounds.maxZ-s.bounds.minZ),a=(r.bounds.maxX-r.bounds.minX)*(r.bounds.maxZ-r.bounds.minZ);return o-a});for(const s of n){const{minX:r,maxX:o,minZ:a,maxZ:c}=s.bounds;if(i>=r&&i<=o&&t>=a&&t<=c)return s}return null}const S_=new I(19.5,23,15),il=new I(2.5,.5,15),sl=2.65,y_=1.65,rl=.0042;function xo(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=t[2]-i[2],r=Math.hypot(e,s)||1e-5,o=Math.atan2(-e,-s),a=Dn.clamp(Math.atan2(n,r),-1.15,1.15);return{yaw:o,pitch:a}}function M_(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return t+e}function w_({camera:i,domElement:t,plan:e,onStateChange:n}){i.rotation.order="YXZ";let s=e.ROOMS,r=e.getColliders();const o=new r_(i,t);o.enabled=!1,o.enableDamping=!0,o.dampingFactor=.08,o.minDistance=4.5,o.maxDistance=48,o.maxPolarAngle=Math.PI*.46,o.target.copy(il);const a=window.matchMedia("(prefers-reduced-motion: reduce)");let c="walk";const l={x:1.75,z:5.65};let h=0,u=0,d=null,p=null;const m=new Set,_={forward:0,strafe:0,turn:0};let g=!1,f=0,M=0;function y(){i.position.set(l.x,_e,l.z),i.rotation.set(u,h,0,"YXZ")}function x(k=!1){const $=is(l.x,l.z,s),_t=$?$.id:null;(k||_t!==d)&&(d=_t,n==null||n({mode:c,room:$}))}function L(k){const $=s.find(q=>q.id===k)||s[0];l.x=$.cameraPreset.pos[0],l.z=$.cameraPreset.pos[2];const _t=xo($.cameraPreset.pos,$.cameraPreset.lookAt);h=_t.yaw,u=_t.pitch,y(),x(!0)}L("sala");function R(k){if(s=k.ROOMS,r=k.getColliders(),p=null,v_(l,r,go)||!is(l.x,l.z,s)){const $=s.find(q=>q.id==="sala")||s[0];l.x=$.cameraPreset.pos[0],l.z=$.cameraPreset.pos[2];const _t=xo($.cameraPreset.pos,$.cameraPreset.lookAt);h=_t.yaw,u=_t.pitch}c==="walk"&&y(),x(!0)}function C(k){k!==c&&(c=k,p=null,c==="aerial"?(o.enabled=!0,o.target.copy(il),i.position.copy(S_),o.update()):(o.enabled=!1,y()),n==null||n({mode:c,room:is(l.x,l.z,s)}))}function D(k,$,_t,q){const st=c!=="walk";st&&(c="walk",o.enabled=!1);const mt=nl({x:k,z:$},{x:k,z:$},r,go);if(st||a.matches){p=null,l.x=mt.x,l.z=mt.z,h=_t,u=q,y(),x(!0);return}p={elapsed:0,duration:.36,startPos:i.position.clone(),endPos:new I(mt.x,_e,mt.z),startYaw:h,endYaw:M_(_t,h),startPitch:u,endPitch:q}}function S(k){const $=s.find(mt=>mt.id===k);if(!$)return;const{pos:_t,lookAt:q}=$.cameraPreset,st=xo(_t,q);D(_t[0],_t[2],st.yaw,st.pitch),n==null||n({mode:"walk",room:$})}function v(k,$){D(k,$,h,0),n==null||n({mode:"walk",room:is(k,$,s)})}function b(k){_.forward=k.forward??_.forward,_.strafe=k.strafe??_.strafe,_.turn=k.turn??_.turn}function U(k){var $;c!=="walk"||k.button!==0||(g=!0,f=k.clientX,M=k.clientY,($=t.setPointerCapture)==null||$.call(t,k.pointerId),t.classList.add("is-dragging"))}function N(k){if(!g||c!=="walk")return;const $=k.clientX-f,_t=k.clientY-M;f=k.clientX,M=k.clientY,h+=$*rl,u=Dn.clamp(u+_t*rl,-1.15,1.15),p=null,y()}function H(k){var $;g&&(g=!1,($=t.releasePointerCapture)==null||$.call(t,k.pointerId),t.classList.remove("is-dragging"))}function Z(k){document.querySelector("dialog[open]")||k.ctrlKey||k.metaKey||k.altKey||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"].includes(k.code)&&c==="walk"&&m.add(k.code)}function V(k){m.delete(k.code)}function et(){m.clear(),_.forward=0,_.strafe=0,_.turn=0,g=!1,t.classList.remove("is-dragging")}t.addEventListener("pointerdown",U),t.addEventListener("pointermove",N),t.addEventListener("pointerup",H),t.addEventListener("pointercancel",H),window.addEventListener("keydown",Z),window.addEventListener("keyup",V),window.addEventListener("blur",et);function X(k){if(c==="aerial"){o.update();return}if(p){p.elapsed+=k;const Lt=Math.min(1,p.elapsed/p.duration),Zt=1-Math.pow(1-Lt,3);i.position.lerpVectors(p.startPos,p.endPos,Zt),h=Dn.lerp(p.startYaw,p.endYaw,Zt),u=Dn.lerp(p.startPitch,p.endPitch,Zt),l.x=i.position.x,l.z=i.position.z,i.rotation.set(u,h,0,"YXZ"),Lt>=1&&(p=null,x(!0));return}const $=(m.has("KeyW")||m.has("ArrowUp")?1:0)-(m.has("KeyS")||m.has("ArrowDown")?1:0),_t=(m.has("KeyD")?1:0)-(m.has("KeyA")?1:0),q=(m.has("ArrowLeft")?1:0)-(m.has("ArrowRight")?1:0),st=Dn.clamp($+_.forward,-1,1),mt=Dn.clamp(_t+_.strafe,-1,1),dt=Dn.clamp(q+_.turn,-1,1);if(dt!==0&&(h+=dt*y_*k),st!==0||mt!==0){const Lt=-Math.sin(h),Zt=-Math.cos(h),Dt=Math.cos(h),Jt=-Math.sin(h);let rt=Lt*st+Dt*mt,nt=Zt*st+Jt*mt;const A=Math.hypot(rt,nt);A>1&&(rt/=A,nt/=A);const Ct={x:l.x+rt*sl*k,z:l.z+nt*sl*k},ot=nl(l,Ct,r,go);l.x=ot.x,l.z=ot.z,x(!1)}y()}function lt(){return{mode:c,x:l.x,z:l.z,yaw:h,room:is(l.x,l.z,s)}}function K(){t.removeEventListener("pointerdown",U),t.removeEventListener("pointermove",N),t.removeEventListener("pointerup",H),t.removeEventListener("pointercancel",H),window.removeEventListener("keydown",Z),window.removeEventListener("keyup",V),window.removeEventListener("blur",et),o.dispose()}return{setPlan:R,setMode:C,goToRoom:S,teleportTo:v,setPadInput:b,update:X,getPose:lt,dispose:K}}function Ee(i=512){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");return{canvas:t,ctx:e,size:i}}function E_(){const{canvas:i,ctx:t,size:e}=Ee(512);t.fillStyle="#ebe6dd",t.fillRect(0,0,e,e);const n=e/2;for(let s=0;s<2;s+=1)for(let r=0;r<2;r+=1){const o=r*n,a=s*n;t.fillStyle=(s+r)%2===0?"#ede9e1":"#e8e3da",t.fillRect(o,a,n,n),t.strokeStyle="rgba(182, 174, 162, 0.22)",t.lineWidth=2;for(let c=0;c<5;c+=1){t.beginPath();const l=a+(c*53+r*41)%n;t.moveTo(o,l),t.bezierCurveTo(o+n*.35,l+(c%2===0?1:-1)*26,o+n*.7,l-(c%2===0?1:-1)*18,o+n,l+10),t.stroke()}}return t.strokeStyle="#cbc3b7",t.lineWidth=3,t.beginPath(),t.moveTo(n,0),t.lineTo(n,e),t.moveTo(0,n),t.lineTo(e,n),t.stroke(),t.strokeRect(1.5,1.5,e-3,e-3),i}function b_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#e8e8e8",t.fillRect(0,0,e,e);const n=e/2;return t.strokeStyle="#606060",t.lineWidth=3,t.beginPath(),t.moveTo(n,0),t.lineTo(n,e),t.moveTo(0,n),t.lineTo(e,n),t.stroke(),t.strokeRect(1.5,1.5,e-3,e-3),i}function T_(){const{canvas:i,ctx:t,size:e}=Ee(512);t.fillStyle="#bc8d5c",t.fillRect(0,0,e,e);const n=e/6,s=["#c59666","#b88757","#ca9b6c","#b38252","#bf9060","#c89a6b"];for(let r=0;r<6;r+=1){const o=r*n;t.fillStyle=s[r],t.fillRect(0,o,e,n),t.strokeStyle="rgba(104, 65, 32, 0.16)",t.lineWidth=1.5;for(let c=0;c<8;c+=1){const l=o+6+c*((n-12)/8);t.beginPath(),t.moveTo(0,l),t.bezierCurveTo(e*.33,l+(c%2===0?3:-3),e*.66,l-2,e,l),t.stroke()}t.strokeStyle="rgba(80, 48, 22, 0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,o),t.lineTo(e,o),t.stroke();const a=(r*197+90)%(e-80)+40;t.beginPath(),t.moveTo(a,o),t.lineTo(a,o+n),t.stroke()}return i}function A_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#d4d4d4",t.fillRect(0,0,e,e);const n=e/6;t.strokeStyle="#555555",t.lineWidth=2;for(let s=0;s<6;s+=1){const r=s*n;t.beginPath(),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}return i}function R_(){const{canvas:i,ctx:t,size:e}=Ee(512);t.fillStyle="#dde2e0",t.fillRect(0,0,e,e);const n=e/4;for(let s=0;s<4;s+=1)for(let r=0;r<4;r+=1)t.fillStyle=(s+r)%2===0?"#e3e7e5":"#dadfda",t.fillRect(r*n,s*n,n,n);for(let s=0;s<180;s+=1){const r=s*73%e,o=s*139%e;t.fillStyle=s%3===0?"rgba(120, 128, 126, 0.25)":"rgba(255, 255, 255, 0.4)",t.fillRect(r,o,3,3)}t.strokeStyle="#bec6c2",t.lineWidth=2.5;for(let s=0;s<=4;s+=1){const r=s*n;t.beginPath(),t.moveTo(r,0),t.lineTo(r,e),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}return i}function C_(){const{canvas:i,ctx:t,size:e}=Ee(512);t.fillStyle="#bcb7ad",t.fillRect(0,0,e,e);const n=e/2;for(let s=0;s<2;s+=1)for(let r=0;r<2;r+=1)t.fillStyle=(s+r)%2===0?"#c3beb4":"#b7b2a8",t.fillRect(r*n,s*n,n,n);for(let s=0;s<420;s+=1){const r=s*67%e,o=s*113%e;t.fillStyle=s%2===0?"rgba(85, 80, 74, 0.14)":"rgba(255, 252, 245, 0.16)",t.fillRect(r,o,2,2)}return t.strokeStyle="#979187",t.lineWidth=4,t.beginPath(),t.moveTo(n,0),t.lineTo(n,e),t.moveTo(0,n),t.lineTo(e,n),t.stroke(),t.strokeRect(2,2,e-4,e-4),i}function P_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#f4f0e8",t.fillRect(0,0,e,e);for(let n=0;n<650;n+=1){const s=n*53%e,r=n*97%e;t.fillStyle=n%2===0?"rgba(180, 170, 155, 0.08)":"rgba(255, 255, 255, 0.14)",t.fillRect(s,r,2,2)}return i}function L_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#9c6b43",t.fillRect(0,0,e,e),t.strokeStyle="rgba(65, 38, 18, 0.18)",t.lineWidth=1.5;for(let n=0;n<28;n+=1){const s=n/28*e;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(e*.3,s+4,e*.7,s-4,e,s),t.stroke()}return i}function D_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#332c28",t.fillRect(0,0,e,e),t.strokeStyle="rgba(20, 16, 14, 0.35)",t.lineWidth=1.5;for(let n=0;n<24;n+=1){const s=n/24*e;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(e*.35,s+3,e*.65,s-3,e,s),t.stroke()}return i}function I_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#2d3136",t.fillRect(0,0,e,e);const n=8,s=e/n,r=e/4,o=["#3a3f46","#444a52","#353940","#4a5058"];for(let a=0;a<n;a+=1){const c=a%2*(r/2);for(let l=-1;l<5;l+=1)t.fillStyle=o[(a+l+4)%o.length],t.fillRect(l*r+c+2,a*s+2,r-4,s-4)}return i}function U_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#404040",t.fillRect(0,0,e,e);const n=8,s=e/n,r=e/4;t.fillStyle="#e0e0e0";for(let o=0;o<n;o+=1){const a=o%2*(r/2);for(let c=-1;c<5;c+=1)t.fillRect(c*r+a+3,o*s+3,r-6,s-6)}return i}function N_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#d2c9bc",t.fillRect(0,0,e,e),t.strokeStyle="rgba(130, 120, 108, 0.16)",t.lineWidth=1;for(let n=0;n<e;n+=6)t.beginPath(),t.moveTo(n,0),t.lineTo(n,e),t.moveTo(0,n),t.lineTo(e,n),t.stroke();return i}function z_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#6f9b57",t.fillRect(0,0,e,e);for(let n=0;n<900;n+=1){const s=n*47%e,r=n*89%e;t.fillStyle=n%3===0?"#7fab64":n%3===1?"#5e8847":"#89b36f",t.fillRect(s,r,2,4)}return i}function O_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#b4bebc",t.fillRect(0,0,e,e);const n=e/4;t.strokeStyle="#8b9694",t.lineWidth=2;for(let s=0;s<=4;s+=1){const r=s*n;t.beginPath(),t.moveTo(r,0),t.lineTo(r,e),t.moveTo(0,r),t.lineTo(e,r),t.stroke()}return i}function F_(){const{canvas:i,ctx:t,size:e}=Ee(256);return t.fillStyle="#f3eee4",t.fillRect(0,0,e,e),t.fillStyle="#2d5a47",t.beginPath(),t.arc(105,130,62,0,Math.PI*2),t.fill(),t.fillStyle="#c88b63",t.fillRect(122,62,80,128),t.strokeStyle="#1f252a",t.lineWidth=5,t.beginPath(),t.arc(140,120,44,.2,Math.PI*1.4),t.stroke(),i}function B_(){const{canvas:i,ctx:t,size:e}=Ee(512),n=t.createLinearGradient(0,0,e,e);n.addColorStop(0,"#101638"),n.addColorStop(.5,"#2b1b59"),n.addColorStop(1,"#0b3c4d"),t.fillStyle=n,t.fillRect(0,0,e,e);const s=t.createRadialGradient(256,210,10,256,210,120);s.addColorStop(0,"#ff6ec7"),s.addColorStop(.6,"#7a5cff"),s.addColorStop(1,"rgba(16, 22, 56, 0)"),t.fillStyle=s,t.beginPath(),t.arc(256,210,120,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(0, 240, 255, 0.45)",t.lineWidth=2;for(let r=0;r<=8;r+=1){const o=290+r*28;t.beginPath(),t.moveTo(0,o),t.lineTo(e,o),t.stroke()}for(let r=-4;r<=12;r+=1)t.beginPath(),t.moveTo(256+(r-4)*30,290),t.lineTo(256+(r-4)*110,e),t.stroke();return i}function k_(){const{canvas:i,ctx:t,size:e}=Ee(512);t.fillStyle="#cfcac2",t.fillRect(0,0,e,e);for(let n=0;n<160;n+=1){const s=(n*89+40)%e,r=(n*151+25)%e,o=28+n%5*16,a=t.createRadialGradient(s,r,4,s,r,o);a.addColorStop(0,n%2===0?"rgba(176, 170, 162, 0.22)":"rgba(226, 222, 214, 0.22)"),a.addColorStop(1,"rgba(207, 202, 194, 0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}for(let n=0;n<700;n+=1){const s=n*61%e,r=n*103%e;t.fillStyle=n%2===0?"rgba(120, 116, 110, 0.1)":"rgba(255, 252, 246, 0.14)",t.fillRect(s,r,2,2)}return t.strokeStyle="rgba(135, 130, 122, 0.38)",t.lineWidth=2,t.beginPath(),t.moveTo(e/2,0),t.lineTo(e/2,e),t.moveTo(0,e/2),t.lineTo(e,e/2),t.stroke(),i}function H_(){const{canvas:i,ctx:t,size:e}=Ee(256);return t.fillStyle="#dadada",t.fillRect(0,0,e,e),t.strokeStyle="#757575",t.lineWidth=2,t.beginPath(),t.moveTo(e/2,0),t.lineTo(e/2,e),t.moveTo(0,e/2),t.lineTo(e,e/2),t.stroke(),i}function G_(){const{canvas:i,ctx:t,size:e}=Ee(256);t.fillStyle="#cfd5db",t.fillRect(0,0,e,e);const n=e/6;for(let s=0;s<6;s+=1){const r=s*n;t.fillStyle="#b4bcc4",t.fillRect(0,r,e,6),t.fillStyle="#e3e7eb",t.fillRect(0,r+6,e,3)}return i}function V_(i=4){const t={porcelanato:E_(),radierPolido:k_(),telhaSanduiche:G_(),madeiraPiso:T_(),ceramicaBanheiro:R_(),pisoExterno:C_(),reboco:P_(),madeiraMovel:L_(),madeiraEscura:D_(),tijoloEscuro:I_(),tecidoSofa:N_(),grama:z_(),boxPiso:O_(),arteQuadro:F_(),telaGamer:B_()},e={porcelanato:b_(),radierPolido:H_(),madeiraPiso:A_(),tijoloEscuro:U_()};function n(r,o=1,a=1){const c=t[r]||t.reboco,l=new Sr(c);return l.colorSpace=Pe,l.wrapS=Jn,l.wrapT=Jn,l.repeat.set(o,a),l.anisotropy=i,l.needsUpdate=!0,l}function s(r,o=1,a=1){const c=e[r];if(!c)return null;const l=new Sr(c);return l.wrapS=Jn,l.wrapT=Jn,l.repeat.set(o,a),l.anisotropy=i,l.needsUpdate=!0,l}return{getTexture:n,getBumpTexture:s}}class W_ extends kl{constructor(){super();const t=new z;t.deleteAttribute("uv");const e=new ct({side:Le}),n=new ct,s=new th(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new P(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new P(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new P(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new P(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new P(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new P(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new P(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new P(t,Ai(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new P(t,Ai(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const m=new P(t,Ai(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new P(t,Ai(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new P(t,Ai(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const f=new P(t,Ai(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ai(i){const t=new Xe;return t.color.setScalar(i),t}function ol(i,t,e){const n=document.createElement("canvas");n.width=32,n.height=256;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,n.height);r.addColorStop(0,i),r.addColorStop(.45,t),r.addColorStop(.55,e),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,n.width,n.height);const o=new Sr(n);return o.colorSpace=Pe,o}function X_(i,t,e=[]){const n=new It;n.name="lighting-rig";const s=new aa(t),r=s.fromScene(new W_,.04).texture;i.environment=r,i.environmentIntensity=.48,s.dispose();const o=ol("#6da7db","#bdddf4","#ebe9e1"),a=ol("#364d7d","#c47b6e","#f4bd86"),c=new ws(110,24,16),l=new Xe({map:o,side:Le,depthWrite:!1}),h=new P(c,l);n.add(h);const u=new Jd("#fffcf5",.22);n.add(u);const d=new Zd("#f2f7ff","#d6c6b3",1);d.position.set(2.5,18,15),n.add(d);const m=typeof window<"u"&&window.innerWidth<768?1024:2048,_=new $d("#fff5e4",1.85);_.position.set(16,25,13),_.target.position.set(2.5,0,15),_.castShadow=!0,_.shadow.mapSize.set(m,m),_.shadow.camera.near=1,_.shadow.camera.far=70,_.shadow.camera.left=-20,_.shadow.camera.right=20,_.shadow.camera.top=20,_.shadow.camera.bottom=-20,_.shadow.bias=-45e-5,_.shadow.normalBias=.025,_.shadow.radius=2.5,n.add(_),n.add(_.target);const g=new It;n.add(g);let f=[],M="dia";function y(){const R=M==="entardecer";for(const C of f)C.customColor?(C.light.color.set(C.customColor),C.light.intensity=R?C.baseIntensity*1.45:C.baseIntensity):(C.light.color.set(R?"#ffd093":"#fff1da"),C.light.intensity=R?3.2:C.baseIntensity)}function x(R){for(;g.children.length>0;)g.remove(g.children[0]);f=R.map(C=>{const D=C.intensity??1.35,S=new th(C.color||"#fff1da",D,C.distance,1.5);return S.position.set(...C.pos),S.castShadow=!1,g.add(S),{light:S,customColor:C.color||null,baseIntensity:D}}),y()}i.add(n),i.fog=new va("#e6e6de",55,130);function L(R){M=R,R==="entardecer"?(l.map=a,l.needsUpdate=!0,i.fog.color.set("#d9b69e"),i.environmentIntensity=.28,u.color.set("#ffdfba"),u.intensity=.18,d.color.set("#ffc899"),d.groundColor.set("#685560"),d.intensity=.68,_.color.set("#ffb46b"),_.intensity=1.3,_.position.set(-15,13,20)):(l.map=o,l.needsUpdate=!0,i.fog.color.set("#e6e6de"),i.environmentIntensity=.48,u.color.set("#fffcf5"),u.intensity=.22,d.color.set("#f2f7ff"),d.groundColor.set("#d6c6b3"),d.intensity=1,_.color.set("#fff5e4"),_.intensity=1.85,_.position.set(16,25,13)),y()}return x(e),L("dia"),{setPreset:L,updateSpots:x}}function vn(i,{minX:t,maxX:e,minZ:n,maxZ:s,y:r=0,thickness:o=.04,material:a}){const c=e-t,l=s-n,h=new P(new z(c,o,l),a);return h.position.set(t+c/2,r-o/2,n+l/2),h.receiveShadow=!0,i.add(h),h}function Y_(i,t,e,n){const s=new It,r=i.yTop-i.yBottom,o=i.z2-i.z1,a=(i.z1+i.z2)/2,c=i.yBottom+r/2,l=.04,h=.07,u=new P(new z(.18,.03,o+.06),n);u.position.set(i.x,i.yBottom+.015,a),u.castShadow=!0,u.receiveShadow=!0,s.add(u);const d=new P(new z(h,l,o),t);d.position.set(i.x,i.yTop-l/2,a);const p=new P(new z(h,l,o),t);p.position.set(i.x,i.yBottom+l/2+.02,a);const m=new P(new z(h,r,l),t);m.position.set(i.x,c,i.z1+l/2);const _=new P(new z(h,r,l),t);_.position.set(i.x,c,i.z2-l/2);const g=new P(new z(h*.75,r-l*2,.03),t);g.position.set(i.x,c,a),s.add(d,p,m,_,g);const f=new P(new z(.012,r-l*2,o-l*2),e);return f.position.set(i.x,c,a),s.add(f),s}function q_(i,t,e,n){const s=new It,r=i.yTop-i.yBottom,o=i.x2-i.x1,a=(i.x1+i.x2)/2,c=i.yBottom+r/2,l=.04,h=.07,u=new P(new z(o+.06,.03,.18),n);u.position.set(a,i.yBottom+.015,i.z),u.castShadow=!0,u.receiveShadow=!0,s.add(u);const d=new P(new z(o,l,h),t);d.position.set(a,i.yTop-l/2,i.z);const p=new P(new z(o,l,h),t);p.position.set(a,i.yBottom+l/2+.02,i.z);const m=new P(new z(l,r,h),t);m.position.set(i.x1+l/2,c,i.z);const _=new P(new z(l,r,h),t);_.position.set(i.x2-l/2,c,i.z);const g=new P(new z(.03,r-l*2,h*.75),t);g.position.set(a,c,i.z),s.add(d,p,m,_,g);const f=new P(new z(o-l*2,r-l*2,.012),e);return f.position.set(a,c,i.z),s.add(f),s}function Z_(i,t,e){const n=new It,s=i.x2-i.x1,r=i.yTop-i.yBottom,o=(i.x1+i.x2)/2,a=.045,c=new P(new z(s,a,.11),t);c.position.set(o,i.yTop-a/2,i.z);const l=new P(new z(s,.018,.11),t);l.position.set(o,.009,i.z);const h=new P(new z(a,r,.11),t);h.position.set(i.x1+a/2,r/2,i.z);const u=new P(new z(a,r,.11),t);u.position.set(i.x2-a/2,r/2,i.z),n.add(c,l,h,u);function d(p,m,_){const g=m-p,f=(p+m)/2,M=r/2,y=i.z+_,x=.035,L=new P(new z(g-x*2,r-.08,.012),e);L.position.set(f,M,y);const R=new P(new z(g,x,.03),t);R.position.set(f,i.yTop-.05,y);const C=new P(new z(g,x,.03),t);C.position.set(f,.035,y);const D=new P(new z(x,r-.04,.03),t);D.position.set(p+x/2,M,y);const S=new P(new z(x,r-.04,.03),t);S.position.set(m-x/2,M,y),n.add(L,R,C,D,S)}if(i.panels===4)d(i.x1+.03,i.openGap.x1,.025),d(i.x1+.05,i.openGap.x1,-.025),d(i.openGap.x2,i.x2-.05,-.025),d(i.openGap.x2,i.x2-.03,.025);else{const p=(i.x1+i.x2)/2;d(p-.02,i.x2-.03,-.025),d(p,i.x2-.02,.025)}return n}function K_(i,t,e){const n=new It,s=i.yTop-i.yBottom,r=.035;if(i.orientation==="vertical"){const o=i.z2-i.z1,a=(i.z1+i.z2)/2,c=new P(new z(.14,r,o),t);c.position.set(i.x,i.yTop-r/2,a);const l=new P(new z(.14,s,r),t);l.position.set(i.x,s/2,i.z1+r/2);const h=new P(new z(.14,s,r),t);h.position.set(i.x,s/2,i.z2-r/2),n.add(c,l,h);const u=o-r*2,d=new It;if(i.hingeAt==="end"){d.position.set(i.x,0,i.z2-r),d.rotation.y=i.swingAngle;const p=new P(new z(.04,s-r,u),t);p.position.set(0,(s-r)/2,-u/2),p.castShadow=!0,p.receiveShadow=!0;const m=new P(new z(.09,.025,.11),e);m.position.set(0,1,-(u-.08)),d.add(p,m)}else{d.position.set(i.x,0,i.z1+r),d.rotation.y=i.swingAngle;const p=new P(new z(.04,s-r,u),t);p.position.set(0,(s-r)/2,u/2),p.castShadow=!0,p.receiveShadow=!0;const m=new P(new z(.09,.025,.11),e);m.position.set(0,1,u-.08),d.add(p,m)}n.add(d)}else{const o=i.x2-i.x1,a=(i.x1+i.x2)/2,c=new P(new z(o,r,.14),t);c.position.set(a,i.yTop-r/2,i.z);const l=new P(new z(r,s,.14),t);l.position.set(i.x1+r/2,s/2,i.z);const h=new P(new z(r,s,.14),t);h.position.set(i.x2-r/2,s/2,i.z),n.add(c,l,h);const u=o-r*2,d=new It;d.position.set(i.x1+r,0,i.z),d.rotation.y=-i.swingAngle;const p=new P(new z(u,s-r,.04),t);p.position.set(u/2,(s-r)/2,0),p.castShadow=!0,p.receiveShadow=!0;const m=new P(new z(.11,.025,.09),e);m.position.set(u-.08,1,0),d.add(p,m),n.add(d)}return n}function j_(i,t,e){const n=new It,s=i.x2-i.x1,r=i.yTop-i.yBottom,o=(i.x1+i.x2)/2,a=new P(new z(s,.05,.05),t);a.position.set(o,i.yTop-.025,i.z);const c=new P(new z(s,.05,.05),t);c.position.set(o,.04,i.z);const l=new P(new z(.05,r,.05),t);l.position.set(i.x1+.025,r/2,i.z);const h=new P(new z(.05,r,.05),t);h.position.set(i.x2-.025,r/2,i.z),n.add(a,c,l,h);const u=12;for(let d=0;d<u;d+=1){const p=.16+d*((r-.28)/(u-1)),m=new P(new z(s-.08,.09,.025),e);m.position.set(o,p,i.z),m.castShadow=!0,n.add(m)}return n}function $_(i,t){const e=l=>3.4-.4*(l/3.8),n=e(i.x1),s=e(i.x2),r=new Kl;r.moveTo(i.x1,3),r.lineTo(i.x2,3),r.lineTo(i.x2,s),r.lineTo(i.x1,n),r.closePath();const o=new Ta(r,{depth:i.thickness,bevelEnabled:!1});o.translate(0,0,-i.thickness/2);const a=new ct({color:"#ffffff",map:t.getTexture("reboco",2,1),roughness:.86}),c=new P(o,a);return c.position.set(0,0,i.z),c.castShadow=!0,c.receiveShadow=!0,c}function J_(i,t){const e=new It,n=i.zEnd-i.zStart,s=(i.zStart+i.zEnd)/2,r=-.24,o=4.04,a=o-r,c=Math.atan2(i.yEast-i.yWest,3.8),l=a/Math.cos(c),h=(r+o)/2,u=i.yWest-(i.yWest-i.yEast)*(h/3.8),d=new It;d.position.set(h,u,s),d.rotation.z=c;const p=new ct({color:"#f7f6f2",roughness:.5}),m=new ct({color:"#ffffff",roughness:.78}),_=new ct({map:t.getTexture("telhaSanduiche",1.5,Math.max(1,n/2)),color:"#c7ced6",roughness:.36,metalness:.45}),g=new ct({color:"#8f99a3",roughness:.32,metalness:.55}),f=new ct({color:"#2b3036",roughness:.42,metalness:.6}),M=new P(new z(l,.018,n),p);M.position.set(0,.009,0),M.castShadow=!0,M.receiveShadow=!0;const y=new P(new z(l-.02,.045,n-.02),m);y.position.set(0,.04,0);const x=new P(new z(l,.016,n),_);x.position.set(0,.068,0),x.castShadow=!0,x.receiveShadow=!0,d.add(M,y,x);const R=Math.floor(n/.32);for(let b=0;b<=R;b+=1){const U=-n/2+.12+b*((n-.24)/Math.max(1,R)),N=new P(new z(l,.03,.045),g);N.position.set(0,.088,U),N.castShadow=!0,d.add(N)}for(const b of[-1.45,0,1.45]){const U=new P(new z(.05,.075,n-.24),f);U.position.set(b,-.036,0),U.castShadow=!0,d.add(U)}e.add(d);const C=new ct({color:"#2b3036",roughness:.38,metalness:.55}),D=new P(new z(.14,.09,n+.04),C);D.position.set(4.02,2.94,s),D.castShadow=!0;const S=new P(new Ot(.04,.04,2.86,12),C);S.position.set(3.92,1.5,i.zEnd-.16),S.castShadow=!0;const v=new P(new z(.12,.08,.08),C);return v.position.set(3.97,.08,i.zEnd-.16),e.add(D,S,v),e}function Q_(i){const t=new It,e=i.x2-i.x1,n=i.z2-i.z1,s=(i.x1+i.x2)/2,r=(i.z1+i.z2)/2,o=new ct({color:"#868d94",roughness:.84}),a=new P(new z(e,.14,n),o);a.position.set(s,i.yTop-.03,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a);const c=new ct({color:"#2b3036",roughness:.4,metalness:.6}),l=new P(new z(.16,.015,.16),c);l.position.set(3.35,i.yTop+.045,r),t.add(l);const h=new ct({color:"#a5aab0",roughness:.8}),u=new P(new z(1.26,.08,1.26),h);u.position.set(i.tank.x,i.yTop+.08,i.tank.z),u.castShadow=!0,u.receiveShadow=!0,t.add(u);const d=new It,p=new ct({color:"#1565b8",roughness:.34,metalness:.06}),m=new ct({color:"#0f4f94",roughness:.36}),_=new P(new Ot(.71,.57,.94,28),p);_.position.y=.47,_.castShadow=!0,_.receiveShadow=!0,d.add(_);for(const[L,R]of[[.24,.615],[.52,.655],[.78,.695]]){const C=new P(new Ar(R,.016,8,28),p);C.rotation.x=Math.PI/2,C.position.y=L,d.add(C)}const g=new P(new Ot(.74,.73,.06,28),m);g.position.y=.96,g.castShadow=!0;const f=new P(new Ot(.32,.35,.05,22),m);f.position.y=1.01,d.add(g,f);const M=new ct({color:"#9c7864",roughness:.55}),y=new P(new Ot(.025,.025,.9,10),M);y.rotation.z=Math.PI/2,y.position.set(.72,.14,0);const x=new P(new Ot(.025,.025,.18,10),M);return x.position.set(1.16,.06,0),d.add(y,x),d.position.set(i.tank.x,i.yTop+.12,i.tank.z),t.add(d),t}function tx(i){const t=new It;t.name="first-course-modulation";const e={inteiro:new ct({color:"#c8cdd2",roughness:.88}),amarracao:new ct({color:"#9ab8a8",roughness:.85}),meio:new ct({color:"#dcc29e",roughness:.86})},n=new ya({color:"#2b3036"}),s=new ct({color:"#7a7f85",roughness:.94}),r=new ct({color:"#202429",roughness:.95}),o=new ct({color:"#2b6cb0",roughness:.45}),a=new ct({color:"#5c636b",roughness:.78}),c=new ct({color:"#b8522a",roughness:.5,metalness:.65}),l=new ct({color:"#eab308",roughness:.35}),h=new ct({color:"#1f513f",roughness:.55}),u=new Map,d=new Map,p=(f,M,y)=>{const x=`${f}_${M}_${y}`;if(!u.has(x)){const L=new z(f,M,y);u.set(x,L),d.set(x,new Td(L))}return{box:u.get(x),edge:d.get(x)}};for(const f of i.FIRST_COURSE_BLOCKS){const M=new P(new z(f.sizeX+.008,f.yBottom,f.sizeZ+.008),s);M.position.set(f.x,f.yBottom/2,f.z),M.receiveShadow=!0,t.add(M);const{box:y,edge:x}=p(f.sizeX,f.height,f.sizeZ),L=new P(y,e[f.type]||e.inteiro),R=f.yBottom+f.height/2;L.position.set(f.x,R,f.z),L.castShadow=!0,L.receiveShadow=!0,t.add(L);const C=new dd(x,n);C.position.copy(L.position),t.add(C);const D=f.yBottom+f.height,S=f.axis==="z",v=.086;if(f.type==="meio"){const U=new P(new z(S?v:.11,.004,S?.11:v),r);U.position.set(f.x,D+.001,f.z),t.add(U)}else{const U=Math.max(f.sizeX,f.sizeZ)*.24,N=f.type==="amarracao"?.095:.12;for(const H of[-1,1]){const Z=new P(new z(S?v:N,.004,S?N:v),r);Z.position.set(S?f.x:f.x+H*U,D+.001,S?f.z+H*U:f.z),t.add(Z)}}if(f.underWindow){const b=new P(new z(S?.022:f.sizeX-.01,.006,S?f.sizeZ-.01:.022),o);b.position.set(f.x,D+.003,f.z),t.add(b)}}const m=new z(.092,.012,.092),_=new Ot(.009,.009,.48,8),g=new Ot(.018,.018,.032,10);for(const f of i.FIRST_COURSE_GROUT_POINTS||[]){const M=new P(m,a);M.position.set(f.x,.203,f.z);const y=new P(_,c);y.position.set(f.x,.25,f.z),y.castShadow=!0;const x=new P(g,l);x.position.set(f.x,.5,f.z),x.castShadow=!0,t.add(M,y,x)}for(const f of i.FIRST_COURSE_THRESHOLDS||[]){const M=f.axis==="x",y=M?f.x2-f.x1:.14,x=M?.14:f.z2-f.z1,L=M?(f.x1+f.x2)/2:f.x,R=M?f.z:(f.z1+f.z2)/2,C=new P(new z(y,.006,x),h);C.position.set(L,.003,R),t.add(C)}return t}function ex(i,t){const e=new It;e.name="house-architecture";const n=new It;n.name="house-ceiling";const s=new ct({color:"#d8d3c9",roughness:.95}),r=new P(new Ms(180,180),s);r.rotation.x=-Math.PI/2,r.position.set(2.5,-.045,15),r.receiveShadow=!0,e.add(r);const o=new ct({color:"#ccc6bc",roughness:.88}),a=new P(new z(9,.04,1.8),o);a.position.set(2.5,-.022,-.95),a.receiveShadow=!0,e.add(a);const c=new ct({color:"#55585c",roughness:.9}),l=new P(new z(26,.02,5.5),c);l.position.set(2.5,-.036,-4.6),l.receiveShadow=!0,e.add(l);const h=(b,U)=>new ct({map:t.getTexture("radierPolido",b,U),bumpMap:t.getBumpTexture("radierPolido",b,U),bumpScale:.004,roughness:.26,metalness:.06}),u=(b,U)=>new ct({map:t.getTexture("pisoExterno",b,U),roughness:.8}),d=(b,U)=>new ct({map:t.getTexture("madeiraPiso",b,U),bumpMap:t.getBumpTexture("madeiraPiso",b,U),bumpScale:.005,roughness:.44}),p=(b,U)=>new ct({map:t.getTexture("ceramicaBanheiro",b,U),roughness:.36});if(vn(e,{minX:0,maxX:5,minZ:0,maxZ:5,material:u(5,5)}),i.isFirstCourseOnly?(vn(e,{minX:-.16,maxX:3.9,minZ:4.9,maxZ:18.6,material:h(2.2,7.5)}),vn(e,{minX:3.9,maxX:5,minZ:5,maxZ:18.5,material:u(1.1,13.5)})):(vn(e,{minX:0,maxX:3.8,minZ:5,maxZ:18.5,material:h(2.2,7.5)}),vn(e,{minX:3.8,maxX:5,minZ:5,maxZ:18.5,material:u(1.2,13.5)})),i.hasBackEdicula){const b=new ct({map:t.getTexture("grama",3,4.5),roughness:.92});vn(e,{minX:0,maxX:5,minZ:18.5,maxZ:25.6,material:b}),vn(e,{minX:0,maxX:3.4,minZ:25.6,maxZ:30,material:d(2.8,3.4)}),vn(e,{minX:3.4,maxX:5,minZ:25.6,maxZ:30,material:p(1.5,3.8)})}else{const b=new ct({map:t.getTexture("grama",3,7),roughness:.92});vn(e,{minX:0,maxX:5,minZ:18.5,maxZ:30,material:b})}if(Array.isArray(i.FLOOR_DECKS))for(const b of i.FLOOR_DECKS){const U=new ct({map:t.getTexture("pisoExterno",Math.max(1,b.w),Math.max(1,b.d)),roughness:.78}),N=new P(new z(b.w,.028,b.d),U);N.position.set(b.x,.014,b.z),N.receiveShadow=!0,e.add(N)}if(i.STEPPING_STONES){const{x:b,startZ:U,count:N,step:H}=i.STEPPING_STONES,Z=new ct({color:"#c4beb3",roughness:.78});for(let V=0;V<N;V+=1){const et=new P(new z(.9,.025,.44),Z);et.position.set(b,.012,U+V*H),et.receiveShadow=!0,e.add(et)}}if(!i.isFirstCourseOnly){const b=new ct({color:"#edeae3",roughness:.45}),U=new P(new z(.014,.09,13.4),b);if(U.position.set(.007,.045,11.75),e.add(U),i.hasBackEdicula){const N=new P(new z(.014,.09,4.3),b);N.position.set(.007,.045,27.8),e.add(N)}}i.isFirstCourseOnly&&Array.isArray(i.FIRST_COURSE_BLOCKS)&&e.add(tx(i));const m=new Set(["muro-oeste-quintal","muro-oeste-lazer","muro-leste-corredor","muro-fundos"]);for(const b of i.WALLS){const U=Math.abs(b.x1-b.x2)<1e-6,N=Math.abs(U?b.z2-b.z1:b.x2-b.x1),H=b.yTop-b.yBottom,Z=U?b.thickness:N,V=U?N:b.thickness,et=(b.x1+b.x2)/2,X=(b.z1+b.z2)/2,lt=b.yBottom+H/2,K=m.has(b.id)&&b.yTop<2.6,k=new ct({color:K?"#e4ddd2":"#ffffff",map:t.getTexture("reboco",Math.max(1,N/2),Math.max(1,H/2)),roughness:.86}),$=new P(new z(Z,H,V),k);$.position.set(et,lt,X),$.castShadow=!0,$.receiveShadow=!0,e.add($)}if(Array.isArray(i.GABLES))for(const b of i.GABLES)e.add($_(b,t));const _=new ct({color:"#24272c",roughness:.3,metalness:.6}),g=new Wi({color:"#d9eef5",transparent:!0,opacity:.3,roughness:.06,metalness:.08,reflectivity:.92}),f=new Wi({color:"#e8eff2",transparent:!0,opacity:.72,roughness:.65}),M=new ct({color:"#dfd9ce",roughness:.38}),y=new ct({map:t.getTexture("madeiraMovel",1,2),roughness:.5}),x=new ct({color:"#b7bcc2",roughness:.22,metalness:.88}),L=new ct({color:"#23262b",roughness:.4,metalness:.65}),R=new ct({map:t.getTexture("madeiraMovel",2,1),color:"#8c613e",roughness:.55});for(const b of i.OPENINGS)b.type==="window"?e.add(Y_(b,_,b.frosted?f:g,M)):b.type==="window-horizontal"?e.add(q_(b,_,b.frosted?f:g,M)):b.type==="sliding-door"?e.add(Z_(b,_,g)):b.type==="wood-door"?e.add(K_(b,y,x)):b.type==="gate"&&e.add(j_(b,L,R));const C=new ct({color:"#faf8f4",roughness:.9}),D=new ct({color:"#c8c3b9",roughness:.85});for(const b of i.CEILING_SLABS){const U=b.y??se,N=new P(new z(b.w,.14,b.d),C);N.position.set(b.x,U+.07,b.z),N.castShadow=!0,N.receiveShadow=!0,n.add(N);const H=new P(new z(b.w+.06,.24,b.d+.06),D);H.position.set(b.x,U+.26,b.z),H.castShadow=!0,n.add(H)}if(Array.isArray(i.SANDWICH_ROOFS))for(const b of i.SANDWICH_ROOFS)n.add(J_(b,t));i.WATER_TANK_SLAB&&n.add(Q_(i.WATER_TANK_SLAB));const S=new Xe({color:"#fff8ea"}),v=new ct({color:"#e2e0db",roughness:.35});for(const b of i.LIGHT_SPOTS){if(!b.fixture)continue;const[U,,N]=b.pos,H=b.fixtureY??se-.01,Z=new P(new z(.42,.02,.42),v);Z.position.set(U,H,N);const V=new P(new z(.36,.022,.36),S);V.position.set(U,H-.002,N),n.add(Z,V)}return{houseGroup:e,ceilingGroup:n}}function nx(i,t){const e=new It,n=new Wi({color:"#4e5f6e",roughness:.22,metalness:.6,clearcoat:.75,clearcoatRoughness:.15}),s=new ct({color:"#1b242f",roughness:.1,metalness:.55}),r=new ct({color:"#1b1d21",roughness:.85}),o=new ct({color:"#d5dae0",roughness:.25,metalness:.85}),a=new Xe({color:"#fff5d9"}),c=new Xe({color:"#cc352b"}),l=new P(new z(1.74,.54,4.05),n);l.position.set(0,.46,0),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const h=new P(new z(1.48,.5,1.95),n);h.position.set(0,.96,.2),h.castShadow=!0,e.add(h);const u=new P(new z(1.51,.38,1.82),s);u.position.set(0,.96,.2),e.add(u);for(const m of[-.88,.88]){const _=new P(new z(.14,.08,.11),n);_.position.set(m,.82,-.58),e.add(_)}const d=new Ot(.3,.3,.22,22);d.rotateZ(Math.PI/2);const p=new Ot(.18,.18,.23,16);p.rotateZ(Math.PI/2);for(const m of[-.82,.82])for(const _ of[-1.25,1.25]){const g=new P(d,r);g.position.set(m,.3,_),g.castShadow=!0;const f=new P(p,o);f.position.set(m,.3,_),e.add(g,f)}for(const m of[-.62,.62]){const _=new P(new z(.28,.11,.04),a);_.position.set(m,.54,-2.02);const g=new P(new z(.28,.1,.04),c);g.position.set(m,.56,2.02),e.add(_,g)}return e.position.set(i,0,t),e}function ix(i,t,e){const n=new It,s=i.width,r=i.depth,o=new P(new z(s,.14,r),e);o.position.set(0,.13,0),o.castShadow=!0,n.add(o);for(const l of[-s/2+.08,s/2-.08])for(const h of[-r/2+.08,r/2-.08]){const u=new P(new Ot(.025,.02,.08,10),e);u.position.set(l,.04,h),n.add(u)}const a=(s-.24)/3;for(let l=0;l<3;l+=1){const h=new P(new z(a-.02,.22,r-.14),t);h.position.set(-s/2+.12+a/2+l*a,.31,.05),h.castShadow=!0,h.receiveShadow=!0,n.add(h);const u=new P(new z(a-.02,.42,.2),t);u.position.set(-s/2+.12+a/2+l*a,.6,-r/2+.12),u.castShadow=!0,n.add(u)}for(const l of[-s/2+.06,s/2-.06]){const h=new P(new z(.12,.46,r),t);h.position.set(l,.43,0),h.castShadow=!0,n.add(h)}const c=["#587a68","#c6845d","#587a68"];return[-.65,0,.65].forEach((l,h)=>{const u=new ct({color:c[h],roughness:.85}),d=new P(new z(.34,.3,.12),u);d.position.set(l,.56,-.14),d.rotation.set(-.2,h===0?.18:h===2?-.18:0,0),d.castShadow=!0,n.add(d)}),n.position.set(i.x,0,i.z),n.rotation.y=i.rotY||0,n}function sx(i,t,e,n){const s=new It,r=new P(new Ot(.42,.42,.035,28),e);r.position.set(0,.38,0),r.castShadow=!0,r.receiveShadow=!0;const o=new P(new Ot(.18,.24,.36,20),n);o.position.set(0,.18,0),o.castShadow=!0;const a=new P(new Ot(.14,.14,.02,20),new ct({color:"#ece7dd",roughness:.4}));return a.position.set(0,.41,0),s.add(r,o,a),s.position.set(i,0,t),s}function rx(i,t,e,n){const s=new It,r=new P(new z(1.85,1.55,.04),t);r.position.set(0,1.25,-.15),r.castShadow=!0,r.receiveShadow=!0;const o=new P(new z(1.8,.34,.34),e);o.position.set(0,.44,0),o.castShadow=!0,o.receiveShadow=!0;const a=new P(new z(1.26,.72,.035),new ct({color:"#1b1d20",roughness:.35}));a.position.set(0,1.24,-.1),a.castShadow=!0;const c=new P(new z(1.21,.67,.038),n);return c.position.set(0,1.24,-.098),s.add(r,o,a,c),s.position.set(i.x,0,i.z),s.rotation.y=i.rotY||0,s}function ox(i,t,e){const n=new It,s=new P(new z(.86,.66,.035),e),r=new P(new z(.8,.6,.038),new ct({map:t.getTexture("arteQuadro",1,1),roughness:.75}));return n.add(s,r),n.position.set(i.x,1.55,i.z),n.rotation.y=i.rotY||0,n}function ax(i,t,e,n){const s=new It,r=new P(new z(i.width-.08,.86,i.depth-.14),e);r.position.set(.02,.43,.05),r.castShadow=!0,r.receiveShadow=!0;const o=new P(new z(i.width,.05,i.depth),t);o.position.set(0,.885,0),o.castShadow=!0,o.receiveShadow=!0,s.add(r,o);for(const c of[-.52,0,.52]){const l=new It,h=new P(new Ot(.025,.03,.62,12),n);h.position.y=.31;const u=new P(new Ot(.16,.16,.02,16),n);u.position.y=.01;const d=new P(new Ot(.17,.17,.055,20),e);d.position.y=.64,d.castShadow=!0,l.add(h,u,d),l.position.set(c,0,-.4),s.add(l)}const a=new Xe({color:"#fff3d4"});for(const c of[-.45,.45]){const l=new P(new Ot(.006,.006,1.06,6),n);l.position.set(c,2.59,0);const h=new P(new Ea(.13,.16,18,1,!0),n);h.position.set(c,2.06,0);const u=new P(new ws(.04,12,10),a);u.position.set(c,2.02,0),s.add(l,h,u)}return s.position.set(i.x,0,i.z),s}function cx(i,t,e,n){const s=new It,r=new P(new z(i.depth,.86,i.width),e);r.position.set(0,.43,0),r.castShadow=!0,r.receiveShadow=!0;const o=new P(new z(i.depth+.02,.04,i.width+.02),t);o.position.set(0,.88,0),o.castShadow=!0,o.receiveShadow=!0;const a=new P(new z(.4,.02,.54),n);a.position.set(0,.905,0);const c=new P(new Ot(.015,.018,.24,12),n);c.position.set(.22,1.02,0);const l=new P(new z(.14,.024,.024),n);return l.position.set(.16,1.13,0),s.add(r,o,a,c,l),s.position.set(i.x,0,i.z),s}function lx(i,t,e){const n=new It,s=new P(new z(.6,.86,.6),e);s.position.set(0,.43,0),s.castShadow=!0;const r=new P(new z(.61,.03,.61),new ct({color:"#1b1d20",roughness:.18}));r.position.set(0,.875,0);const o=new P(new z(.02,.46,.48),new ct({color:"#1a1d21",roughness:.2}));o.position.set(-.305,.42,0);const a=new ct({color:"#2b2e33",roughness:.5});for(const c of[-.15,.15])for(const l of[-.15,.15]){const h=new P(new Ot(.065,.065,.015,16),a);h.position.set(c,.895,l),n.add(h)}return n.add(s,r,o),n.position.set(i,0,t),n}function hx(i,t,e){const n=new It,s=new P(new z(.58,.1,.62),e);s.position.set(0,1.72,0),s.castShadow=!0;const r=new P(new z(.24,1.32,.24),e);return r.position.set(.08,2.41,0),n.add(s,r),n.position.set(i,0,t),n}function ux(i,t,e,n){const s=new It,r=new P(new z(.7,1.78,.68),e);r.position.set(0,.89,0),r.castShadow=!0,r.receiveShadow=!0;const o=new P(new z(.68,.015,.02),new ct({color:"#4c525a"}));o.position.set(0,1.28,-.34);const a=new P(new Ot(.012,.012,.34,10),n);a.position.set(.24,1.52,-.36);const c=new P(new Ot(.012,.012,.62,10),n);return c.position.set(.24,.86,-.36),s.add(r,o,a,c),s.position.set(i,0,t),s}function dx(i,t,e){const n=new It,s=new P(new z(.32,.58,.32),t);s.position.set(0,.29,0),s.castShadow=!0;const r=new P(new z(.6,.3,.52),t);r.position.set(0,.72,0),r.castShadow=!0;const o=new P(new Ot(.014,.014,.18,10),e);return o.position.set(0,.96,-.2),n.add(s,r,o),n.position.set(i.x,0,i.z),n.rotation.y=i.rotY||0,n}function fx(i,t,e,n){const s=new It,r=new P(new z(1.32,.035,.28),e);r.position.set(0,1.68,0),r.castShadow=!0;const o=new P(new Ot(.045,.05,.22,12),new ct({color:"#4b86b4",roughness:.35}));o.position.set(-.35,1.81,0);const a=new P(new z(.32,.12,.22),n);return a.position.set(.26,1.76,0),s.add(r,o,a),s.position.set(i,0,t),s}function px(i,t,e){const n=new It,s=new P(new z(.62,.85,.62),e);s.position.set(0,.425,0),s.castShadow=!0,s.receiveShadow=!0;const r=new P(new Ot(.19,.19,.04,24),new ct({color:"#394048",roughness:.3,metalness:.6}));r.rotation.x=Math.PI/2,r.position.set(0,.46,-.31);const o=new P(new Ot(.14,.14,.045,20),new ct({color:"#2b3440",roughness:.15}));return o.rotation.x=Math.PI/2,o.position.set(0,.46,-.312),n.add(s,r,o),n.position.set(i,0,t),n}function mx(i,t,e,n,s){const r=new It,o=new P(new z(i.width,.56,i.depth),t);o.position.set(0,.54,0),o.castShadow=!0;const a=new P(new z(i.width+.02,.04,i.depth+.02),e);a.position.set(0,.84,0),a.castShadow=!0;const c=new P(new Ot(.2,.16,.12,24),n);c.position.set(0,.92,.02),c.castShadow=!0;const l=new P(new Ot(.013,.015,.18,10),s);l.position.set(0,.95,-.17);const h=new P(new z(i.width*.86,.82,.03),new ct({color:"#272a2e",roughness:.4}));h.position.set(0,1.5,-i.depth/2+.02);const u=new P(new z(i.width*.82,.78,.035),new ct({color:"#cad7dc",roughness:.06,metalness:.92}));if(u.position.set(0,1.5,-i.depth/2+.022),i.ledMirror){const d=new P(new z(i.width*.84,.8,.01),new Xe({color:"#ffeccf"}));d.position.set(0,1.5,-i.depth/2+.012),r.add(d)}return r.add(o,a,c,l,h,u),r.position.set(i.x,0,i.z),r.rotation.y=i.rotY||0,r}function gx(i,t,e){const n=new It,s=new P(new Ot(.15,.17,.38,18),t);s.position.set(0,.19,.06),s.castShadow=!0;const r=new P(new Ot(.2,.15,.14,20),t);r.position.set(0,.36,.08),r.castShadow=!0;const o=new P(new z(.38,.42,.18),t);o.position.set(0,.56,-.18),o.castShadow=!0;const a=new P(new Ot(.022,.022,.015,12),e);return a.position.set(0,.78,-.18),n.add(s,r,o,a),n.position.set(i.x,0,i.z),n.rotation.y=i.rotY||0,n}function _x(i,t,e){const n=new It,s=i.x2-i.x1,r=i.z2-i.z1,o=(i.x1+i.x2)/2,a=(i.z1+i.z2)/2,c=new ct({map:t.getTexture("boxPiso",1.4,1),roughness:.55}),l=new P(new z(s,.02,r),c);l.position.set(o,.01,a),l.receiveShadow=!0,n.add(l);const h=new P(new z(.12,.022,.12),e);h.position.set(i.x2-.25,.012,a),n.add(h);const u=new Wi({color:"#d4ecea",transparent:!0,opacity:.34,roughness:.06});if(i.openSide==="left"){const m=s*.6,_=i.x2-m/2,g=new P(new z(m,1.95,.016),u);g.position.set(_,.98,i.z1);const f=new P(new z(s,.035,.035),e);f.position.set(o,1.97,i.z1),n.add(g,f)}else{const m=new P(new z(s,1.95,.016),u);m.position.set(o,.98,i.z1);const _=new P(new z(s,.035,.035),e);_.position.set(o,1.97,i.z1),n.add(m,_)}const d=new P(new z(.32,.024,.024),e);d.position.set(i.x2-.16,2.1,a);const p=new P(new Ot(.1,.1,.02,16),e);return p.position.set(i.x2-.3,2.08,a),n.add(d,p),n}function xx(i,t,e,n){const s=new It,r=2.45,o=i.width,a=i.depth,c=new P(new z(o,r,.03),e);c.position.set(0,r/2,-a/2+.015),c.castShadow=!0,c.receiveShadow=!0;const l=new P(new z(o,.03,a),t);l.position.set(0,r-.015,0),l.castShadow=!0;const h=new P(new z(o,.06,a),t);h.position.set(0,.03,0),s.add(c,l,h);const u=4;for(let _=0;_<=u;_+=1){const g=-o/2+.015+_*((o-.03)/u),f=new P(new z(.03,r,a),t);f.position.set(g,r/2,0),f.castShadow=!0,s.add(f)}const d=new P(new z(o-.06,.025,a-.06),t);d.position.set(0,1.98,.01);const p=new P(new Ot(.012,.012,o-.08,10),n);p.rotation.z=Math.PI/2,p.position.set(0,1.82,.02),s.add(d,p);const m=new P(new z(o*.48,.65,a-.05),e);return m.position.set(-o*.24,.36,.01),s.add(m),s.position.set(i.x,0,i.z),s.rotation.y=i.rotY||0,s}function al(i,t,e,n="#6b8676",s=null){const r=new It,o=i.width,a=i.length,c=new P(new z(o+.06,.26,a+.04),t);c.position.set(0,.16,0),c.castShadow=!0,c.receiveShadow=!0;const l=s?new ct({color:s,roughness:.85}):e,h=new P(new z(o+.12,1.08,.09),l);h.position.set(0,.54,-a/2+.02),h.castShadow=!0;const u=new ct({color:"#f7f5f0",roughness:.85}),d=new P(new z(o-.04,.26,a-.08),u);d.position.set(0,.4,.03),d.castShadow=!0,d.receiveShadow=!0;const p=new ct({color:n,roughness:.9}),m=new P(new z(o-.01,.06,a*.48),p);m.position.set(0,.52,a*.24),m.castShadow=!0;for(const _ of[-o*.24,o*.24]){const g=new P(new z(.56,.12,.36),u);g.position.set(_,.58,-a/2+.3),g.castShadow=!0,r.add(g)}return r.add(c,h,d,m),r.position.set(i.x,0,i.z),r.rotation.y=i.rotY||0,r}function vx(i,t){const e=new It,n=new P(new z(1.05,.62,.035),new ct({color:"#1b1d20",roughness:.35}));n.position.set(0,1.35,0),n.castShadow=!0;const s=new P(new z(1,.57,.038),t);return s.position.set(0,1.35,.002),e.add(n,s),e.position.set(i.x,0,i.z),e.rotation.y=i.rotY||0,e}function Sx(i,t,e,n){const s=new It,r=new P(new z(.3,.45,.72),e);r.position.set(0,.225,0),r.castShadow=!0,s.add(r);for(const o of[-.2,0,.2]){const a=new P(new gs(.22,1),n);a.position.set(0,.68+(o===0?.14:0),o),a.castShadow=!0,s.add(a)}return s.position.set(i,0,t),s}function yx(i,t,e){const n=new It,s=new P(new z(1.35,.05,.44),t);s.position.set(0,.44,0),s.castShadow=!0;for(const r of[-.56,.56]){const o=new P(new z(.06,.44,.4),e);o.position.set(r,.22,0),o.castShadow=!0,n.add(o)}return n.add(s),n.position.set(i.x,0,i.z),n.rotation.y=i.rotY||0,n}function Mx(i,t,e,n){const s=new It,r=3.9,o=3.1,a=2.5;for(const d of[-r/2,r/2])for(const p of[-o/2,o/2]){const m=new P(new z(.11,a,.11),n);m.position.set(d,a/2,p),m.castShadow=!0,m.receiveShadow=!0,s.add(m)}for(const d of[-r/2,r/2]){const p=new P(new z(.1,.14,o+.24),e);p.position.set(d,a+.05,0),p.castShadow=!0,s.add(p)}const c=7;for(let d=0;d<c;d+=1){const p=-o/2+d*(o/(c-1)),m=new P(new z(r+.3,.12,.06),e);m.position.set(0,a+.15,p),m.castShadow=!0,s.add(m)}const l=.55,h=new P(new z(1.35,.05,.85),e);h.position.set(l,.75,.05),h.castShadow=!0,h.receiveShadow=!0,s.add(h);for(const d of[-.56,.56])for(const p of[-.32,.32]){const m=new P(new z(.05,.73,.05),n);m.position.set(l+d,.365,.05+p),m.castShadow=!0,s.add(m)}const u=[[l-.32,-.58,0],[l+.32,-.58,0],[l-.32,.68,Math.PI],[l+.32,.68,Math.PI]];for(const[d,p,m]of u){const _=new It,g=new P(new z(.42,.04,.42),e);g.position.set(0,.45,0),g.castShadow=!0;const f=new P(new z(.42,.38,.04),e);f.position.set(0,.66,-.19),f.castShadow=!0;const M=new P(new z(.06,.43,.06),n);M.position.set(0,.215,0),_.add(g,f,M),_.position.set(d,0,p),_.rotation.y=m,s.add(_)}return s.position.set(i,0,t),s}function wx(i,t,e,n,s,r){const o=new It,a=new ct({map:e.getTexture("tijoloEscuro",1.4,2.2),bumpMap:e.getBumpTexture("tijoloEscuro",1.4,2.2),bumpScale:.008,roughness:.85}),c=new ct({color:"#24272b",roughness:.2,metalness:.15}),l=new P(new z(.76,.95,.92),a);l.position.set(0,.475,-.8),l.castShadow=!0,l.receiveShadow=!0;const h=new P(new z(.18,.62,.92),a);h.position.set(-.29,1.26,-.8);const u=new P(new z(.76,.62,.14),a);u.position.set(0,1.26,-1.19);const d=new P(new z(.76,.62,.14),a);d.position.set(0,1.26,-.41);const p=new P(new z(.42,.04,.56),new ct({color:"#2b1812",emissive:"#ff4e1a",emissiveIntensity:.85}));p.position.set(.05,.98,-.8);const m=new P(new z(.44,.02,.6),s);m.position.set(.06,1.14,-.8);const _=new P(new Ot(.28,.48,.55,4),a);_.rotation.y=Math.PI/4,_.position.set(-.02,1.84,-.8),_.castShadow=!0;const g=new P(new z(.42,.95,.42),a);g.position.set(-.1,2.55,-.8),g.castShadow=!0;const f=new P(new z(.64,.86,1.88),n);f.position.set(-.04,.43,.62),f.castShadow=!0,f.receiveShadow=!0;const M=new P(new z(.72,.045,1.92),c);M.position.set(-.02,.885,.62),M.castShadow=!0;const y=new P(new z(.38,.02,.48),s);y.position.set(-.02,.912,.52);const x=new P(new Ot(.014,.016,.24,10),s);x.position.set(-.26,1.03,.52);const L=new P(new z(.14,.022,.022),r);return L.position.set(-.2,1.14,.52),o.add(l,h,u,d,p,m,_,g,f,M,y,x,L),o.position.set(i,0,t),o}function Ex(i,t,e,n){const s=new It,r=4.2,o=3.7,a=2.65;for(const _ of[-r/2,r/2])for(const g of[-o/2,o/2]){const f=new P(new z(.11,a,.11),n);f.position.set(_,a/2,g),f.castShadow=!0,f.receiveShadow=!0,s.add(f)}for(const _ of[-r/2,r/2]){const g=new P(new z(.11,.14,o+.28),e);g.position.set(_,a+.05,0),g.castShadow=!0,s.add(g)}const c=8;for(let _=0;_<c;_+=1){const g=-o/2+_*(o/(c-1)),f=new P(new z(r+.3,.12,.06),e);f.position.set(0,a+.15,g),f.castShadow=!0,s.add(f)}const l=new P(new z(r+.25,.02,o+.2),new Wi({color:"#e6f0f2",transparent:!0,opacity:.22,roughness:.2}));l.position.set(0,a+.22,0),s.add(l);const h=new Xe({color:"#ffd991"});for(const _ of[-1.25,0,1.25])for(const g of[-1.35,-.45,.45,1.35]){const f=new P(new ws(.038,10,8),h);f.position.set(g,a-.03,_),s.add(f)}const u=.25,d=new P(new z(.95,.055,2.05),e);d.position.set(u,.76,0),d.castShadow=!0,d.receiveShadow=!0,s.add(d);for(const _ of[-.36,.36])for(const g of[-.82,.82]){const f=new P(new z(.055,.74,.055),n);f.position.set(u+_,.37,g),f.castShadow=!0,s.add(f)}const p=[[u-.62,-.58,Math.PI/2],[u-.62,0,Math.PI/2],[u-.62,.58,Math.PI/2],[u+.62,-.58,-Math.PI/2],[u+.62,0,-Math.PI/2],[u+.62,.58,-Math.PI/2]],m=new ct({color:"#dfd8cc",roughness:.8});for(const[_,g,f]of p){const M=new It,y=new P(new z(.42,.05,.42),m);y.position.set(0,.45,0),y.castShadow=!0;const x=new P(new z(.42,.38,.04),e);x.position.set(0,.66,-.19),x.castShadow=!0;const L=new P(new z(.36,.43,.36),n);L.position.set(0,.215,0),L.scale.set(.14,1,.14),M.add(y,x,L),M.position.set(_,0,g),M.rotation.y=f,s.add(M)}return s.position.set(i,0,t),s}function cl(i,t,e,n){const s=new It;for(const[r,o,a]of i){const c=new It,l=new P(new Ot(.28,.24,.36,16),t);l.position.y=.18,l.castShadow=!0;const h=new P(new Ot(.05,.07,.95*a,10),n);h.position.y=.36+.45*a,h.castShadow=!0;const u=new P(new gs(.42*a,1),e);u.position.set(0,1.25*a,0),u.castShadow=!0;const d=new P(new gs(.3*a,1),e);d.position.set(.1,1.56*a,-.06),d.castShadow=!0,c.add(l,h,u,d),c.position.set(r,0,o),s.add(c)}return s}function bx(i,t,e,n){const s=new It,r=new ct({map:e.getTexture("madeiraEscura",1.4,1),roughness:.42}),o=new ct({color:"#1b1e24",roughness:.38,metalness:.4}),a=new Xe({color:"#39e6ff"}),c=new Xe({color:"#a26bff"}),l=new Xe({map:e.getTexture("telaGamer",1,1)}),h=new P(new z(.72,.045,1.82),r);h.position.set(0,.75,0),h.castShadow=!0,h.receiveShadow=!0,s.add(h);const u=new P(new z(.025,.02,1.76),c);u.position.set(-.35,.755,0),s.add(u);for(const et of[-.84,.84]){const X=new P(new z(.62,.73,.05),o);X.position.set(0,.365,et),X.castShadow=!0,s.add(X)}const d=new P(new z(.36,.008,.9),new ct({color:"#14171c",roughness:.9}));d.position.set(.11,.777,-.05);const p=new P(new z(.14,.022,.38),o);p.position.set(.12,.79,-.14);const m=new P(new z(.12,.024,.36),a);m.position.set(.12,.792,-.14);const _=new P(new z(.09,.03,.06),o);_.position.set(.12,.795,.2),s.add(d,p,m,_);const g=new P(new Ot(.012,.06,.26,12),n);g.position.set(-.14,.9,-.68);const f=new P(new Ar(.075,.015,8,16,Math.PI),o);f.position.set(-.14,1,-.68),s.add(g,f);for(const[et,X]of[[-.36,.16],[.26,-.16]]){const lt=new It,K=new P(new Ot(.02,.025,.18,10),o);K.position.set(-.1,.86,0);const k=new P(new z(.03,.36,.62),o);k.position.set(-.08,1.06,0),k.castShadow=!0;const $=new P(new z(.034,.33,.59),l);$.position.set(-.078,1.06,0),lt.add(K,k,$),lt.position.set(-.1,0,et),lt.rotation.y=X,s.add(lt)}const M=new P(new z(.42,.44,.21),o);M.position.set(-.04,.995,.72),M.castShadow=!0;const y=new P(new z(.36,.38,.015),new Wi({color:"#1b2638",transparent:!0,opacity:.45,roughness:.1}));y.position.set(-.04,.995,.612);const x=new P(new Ot(.055,.055,.02,16),a);x.rotation.x=Math.PI/2,x.position.set(-.1,1.07,.625);const L=new P(new Ot(.055,.055,.02,16),c);L.rotation.x=Math.PI/2,L.position.set(.05,.93,.625),s.add(M,y,x,L);const R=new ct({color:"#2b323b",roughness:.92}),C=[[1.46,-.45],[1.64,-.22],[1.46,.02],[1.64,.26],[1.46,.48]];for(const[et,X]of C){const lt=new P(new Ot(.14,.14,.03,6),R);lt.rotation.z=Math.PI/2,lt.position.set(-.36,et,X),s.add(lt)}const D=new P(new z(.24,.03,1.3),r);D.position.set(-.26,1.92,-.05);const S=new P(new z(.02,.015,1.24),a);S.position.set(-.35,1.9,-.05),s.add(D,S);const v=new It,b=new ct({color:"#1f6f54",roughness:.7}),U=new P(new Ot(.26,.26,.04,5),o);U.position.y=.05;const N=new P(new Ot(.03,.03,.38,10),n);N.position.y=.24;const H=new P(new z(.48,.09,.48),o);H.position.set(0,.45,0),H.castShadow=!0;const Z=new P(new z(.09,.72,.46),o);Z.position.set(.2,.84,0),Z.rotation.z=-.08,Z.castShadow=!0;const V=new P(new z(.1,.56,.18),b);return V.position.set(.19,.84,0),V.rotation.z=-.08,v.add(U,N,H,Z,V),v.position.set(.62,0,-.06),s.add(v),s.position.set(i,0,t),s}function Tx(i,t,e,n){const s=new It,r=new ct({map:e.getTexture("madeiraEscura",1,1),roughness:.48}),o=new P(new z(.5,.82,.52),new ct({color:"#20242a",roughness:.3,metalness:.5}));o.position.set(0,.41,0),o.castShadow=!0;const a=new P(new Ot(.01,.01,.28,8),n);a.position.set(.26,.56,-.18);const c=new P(new z(.03,1.32,.6),r);c.position.set(-.26,1.56,0),s.add(c);for(const u of[1.05,1.48,1.92]){const d=new P(new z(.32,.03,.58),r);d.position.set(-.11,u,0),d.castShadow=!0,s.add(d)}const l=new P(new z(.18,.2,.14),new ct({color:"#39e6ff",emissive:"#114455",roughness:.4}));l.position.set(-.1,1.6,-.12);const h=new P(new z(.16,.22,.18),new ct({color:"#a26bff",roughness:.5}));return h.position.set(-.1,1.18,.14),s.add(o,a,l,h),s.position.set(i,0,t),s}function Ax(i,t){const e=new It;e.name="house-furniture";const n=new ct({map:t.getTexture("madeiraMovel",1,1),roughness:.52}),s=new ct({map:t.getTexture("madeiraEscura",1,1),roughness:.45}),r=new ct({map:t.getTexture("tecidoSofa",2,2),roughness:.88}),o=new ct({color:"#e5e0d7",roughness:.26}),a=new ct({color:"#f6f5f2",roughness:.4}),c=new ct({color:"#2b2f35",roughness:.38,metalness:.65}),l=new ct({color:"#c4cad0",roughness:.2,metalness:.88}),h=new ct({color:"#b4bac0",roughness:.3,metalness:.74}),u=new ct({color:"#22313f",emissive:"#10202e",roughness:.14}),d=new ct({color:"#7a746c",roughness:.85}),p=new ct({color:"#4f7a44",roughness:.8});for(const m of i.FURNITURE_ITEMS)switch(m.kind){case"car":e.add(nx(m.x,m.z));break;case"rug":{const _=new P(new z(m.width,.012,m.depth),new ct({color:m.color,roughness:.95}));_.position.set(m.x,.006,m.z),_.receiveShadow=!0,e.add(_);break}case"sofa":e.add(ix(m,r,n));break;case"coffee-table":e.add(sx(m.x,m.z,n,c));break;case"tv-unit":e.add(rx(m,n,a,u));break;case"wall-art":e.add(ox(m,t,c));break;case"peninsula":e.add(ax(m,o,n,c));break;case"kitchen-counter":e.add(cx(m,o,n,l));break;case"stove":e.add(lx(m.x,m.z,l));break;case"range-hood":e.add(hx(m.x,m.z,h));break;case"fridge":e.add(ux(m.x,m.z,h,l));break;case"laundry-tub":e.add(dx(m,a,l));break;case"laundry-shelf":e.add(fx(m.x,m.z,n,a));break;case"washer":e.add(px(m.x,m.z,a));break;case"bathroom-vanity":e.add(mx(m,n,o,a,l));break;case"toilet":e.add(gx(m,a,l));break;case"shower-box":e.add(_x(m,t,l));break;case"wardrobe":e.add(xx(m,n,a,l));break;case"bed":e.add(al(m,n,r));break;case"gamer-bed":e.add(al(m,s,r,"#2f5d62","#262b33"));break;case"wall-tv":e.add(vx(m,u));break;case"corridor-planters":for(const _ of[6.4,9.6,13.4,16.5])e.add(Sx(4.82,_,d,p));break;case"garden-bench":e.add(yx(m,n,c));break;case"outdoor-pergola":e.add(Mx(m.x,m.z,n,c));break;case"garden-trees":e.add(cl([[.45,23.6,1],[4.55,24.4,.9],[.45,29.4,1.15],[4.55,29.4,1.05]],d,p,n));break;case"churrasqueira-gourmet":e.add(wx(m.x,m.z,t,n,l,c));break;case"gourmet-pergola":e.add(Ex(m.x,m.z,n,c));break;case"leisure-plants":e.add(cl([[4.55,19.3,.85],[.35,24.9,.95],[3.15,25,.9],[4.6,25,.8]],d,p,n));break;case"gamer-desk":e.add(bx(m.x,m.z,t,l));break;case"mini-fridge-shelf":e.add(Tx(m.x,m.z,t,l));break}return e}function ll(i,t,e=1.9){const n=document.createElement("canvas");n.width=512,n.height=170;const s=n.getContext("2d");s.fillStyle="rgba(24, 28, 32, 0.84)",s.beginPath(),s.roundRect(16,16,480,138,24),s.fill(),s.strokeStyle="rgba(255, 255, 255, 0.25)",s.lineWidth=3,s.stroke(),s.fillStyle="#ffffff",s.font=t?'700 42px "Segoe UI", system-ui, sans-serif':'700 46px "Segoe UI", system-ui, sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,t?64:85),t&&(s.fillStyle="#b9e2ce",s.font='600 30px "Segoe UI", system-ui, sans-serif',s.fillText(t,256,118));const r=new Sr(n);r.colorSpace=Pe;const o=new Hl({map:r,depthTest:!1,transparent:!0}),a=new ld(o);return a.scale.set(e,e*(170/512),1),a.renderOrder=20,a}function Rx(i){const t=new It;t.name="house-labels";const e=!!i.isFirstCourseOnly,n=e?2.4:2.55,s=e?1.55:2.35,r=e?.04:.12,o=e?.38:.65,a=e?1.35:1.85;for(const l of i.ROOMS){if(!l.showLabel)continue;const h=(l.bounds.minX+l.bounds.maxX)/2,u=(l.bounds.minZ+l.bounds.maxZ)/2,d=ll(l.name,l.dimensionsLabel,s);d.position.set(h,n,u),t.add(d)}const c=new ya({color:"#1f513f"});for(const l of i.DIMENSION_LINES){const h=[new I(l.x1,r,l.z1),new I(l.x2,r,l.z2)],u=new De().setFromPoints(h);t.add(new Vl(u,c));const d=(l.x1+l.x2)/2,p=(l.z1+l.z2)/2,m=ll(l.label,"",a);m.position.set(d,o,p),t.add(m)}return t.visible=!!i.defaultLabelsVisible,t}const hl=8;function Cx({canvas:i,plan:t,onTeleport:e}){const n=i.getContext("2d"),s=114,r=356,o=Math.min(window.devicePixelRatio||1,2);i.width=s*o,i.height=r*o,i.style.width=`${s}px`,i.style.height=`${r}px`;const a=document.createElement("canvas");a.width=i.width,a.height=i.height;const c=a.getContext("2d");let l=t,h=1,u=0,d=0;const p=M=>u+M*h,m=M=>d+M*h;function _(){const{LOT:M,ROOMS:y,WALLS:x,OPENINGS:L}=l,R=(s-hl*2)/M.width,C=(r-hl*2)/M.totalLength;h=Math.min(R,C),u=(s-M.width*h)/2,d=(r-M.totalLength*h)/2,c.setTransform(o,0,0,o,0,0),c.clearRect(0,0,s,r);const D={pisoExterno:"#ddd9d0",porcelanato:"#f5f2eb",radierPolido:"#e6e1d8",ceramicaBanheiro:"#dde6e3",madeiraPiso:"#e8d5bd",grama:"#cce0bf"};for(const S of y){if(S.id==="corredor-interno")continue;const{minX:v,maxX:b,minZ:U,maxZ:N}=S.bounds;c.fillStyle=D[S.floorType]||"#f2efe8",c.fillRect(p(v),m(U),(b-v)*h,(N-U)*h)}if(l.hasBackEdicula&&(c.fillStyle="#ddd9d0",c.fillRect(p(.06),m(20.18),4.88*h,3.95*h)),l.isFirstCourseOnly&&Array.isArray(l.FIRST_COURSE_BLOCKS)){const S={inteiro:"#6b727a",amarracao:"#1f513f",meio:"#b7791f"};for(const v of l.FIRST_COURSE_BLOCKS)c.fillStyle=S[v.type]||"#6b727a",c.fillRect(p(v.x-v.sizeX/2),m(v.z-v.sizeZ/2),Math.max(1.5,v.sizeX*h),Math.max(1.5,v.sizeZ*h));c.fillStyle="#d97706";for(const v of l.FIRST_COURSE_GROUT_POINTS||[])c.beginPath(),c.arc(p(v.x),m(v.z),1.8,0,Math.PI*2),c.fill()}else{c.fillStyle="#252a30";for(const S of x){if(S.yBottom>=1.8)continue;const v=S.thickness/2,b=Math.min(S.x1,S.x2)-(Math.abs(S.x1-S.x2)<1e-6?v:0),U=Math.max(S.x1,S.x2)+(Math.abs(S.x1-S.x2)<1e-6?v:0),N=Math.min(S.z1,S.z2)-(Math.abs(S.z1-S.z2)<1e-6?v:0),H=Math.max(S.z1,S.z2)+(Math.abs(S.z1-S.z2)<1e-6?v:0);c.fillRect(p(b),m(N),Math.max(1.5,(U-b)*h),Math.max(1.5,(H-N)*h))}c.strokeStyle="#3b82b8",c.lineWidth=2;for(const S of L)["sliding-door","window","window-horizontal"].includes(S.type)&&(c.beginPath(),S.orientation==="horizontal"?(c.moveTo(p(S.x1),m(S.z)),c.lineTo(p(S.x2),m(S.z))):(c.moveTo(p(S.x),m(S.z1)),c.lineTo(p(S.x),m(S.z2))),c.stroke())}c.fillStyle="#263038",c.font='600 8px "Segoe UI", system-ui, sans-serif',c.textAlign="center",c.textBaseline="middle";for(const S of y){if(!S.showLabel||S.id==="corredor")continue;const v=(S.bounds.minX+S.bounds.maxX)/2,b=(S.bounds.minZ+S.bounds.maxZ)/2;c.fillText(S.mapLabel||S.shortName,p(v),m(b))}}function g(M){l=M,_()}_();function f(M){n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,s,r),n.drawImage(a,0,0,s,r);const y=p(M.x),x=m(M.z),L=-Math.sin(M.yaw),R=-Math.cos(M.yaw),C=Math.atan2(R,L);n.save(),n.fillStyle="rgba(31, 81, 63, 0.28)",n.beginPath(),n.moveTo(y,x),n.arc(y,x,22,C-.5,C+.5),n.closePath(),n.fill(),n.fillStyle="#1f513f",n.beginPath(),n.arc(y,x,4.2,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.restore()}return i.addEventListener("click",M=>{const{LOT:y}=l,x=i.getBoundingClientRect(),L=M.clientX-x.left,R=M.clientY-x.top,C=Math.max(.25,Math.min(y.width-.25,(L-u)/h)),D=Math.max(.3,Math.min(y.totalLength-.3,(R-d)/h));e==null||e(C,D)}),{setPlan:g,render:f}}const Px="modulepreload",Lx=function(i,t){return new URL(i,t).href},ul={},dl=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(e.map(h=>{if(h=Lx(h,n),h in ul)return;ul[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const g=a[_];if(g.href===h&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Px,u||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((_,g)=>{m.addEventListener("load",_),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function Dx({controller:i,initialPlan:t,getGroups:e,lighting:n,minimap:s,onVersionSwitch:r}){"commandForElement"in HTMLButtonElement.prototype||dl(()=>import("./invokers-polyfill-BWFjuSge.js"),[],import.meta.url),Object.hasOwn(HTMLElement.prototype,"popover")||dl(()=>import("./popover-CvMEDj4i.js"),[],import.meta.url);const o=document.getElementById("help-dialog");if(o&&!("closedBy"in HTMLDialogElement.prototype)){const K=($,_t)=>{const q=_t.getBoundingClientRect();return $.clientX<q.left||$.clientX>q.right||$.clientY<q.top||$.clientY>q.bottom};let k=!1;o.addEventListener("pointerdown",$=>{k=K($,o)}),o.addEventListener("pointerup",$=>{k&&K($,o)&&o.close()})}const a=document.getElementById("current-room-label"),c=document.getElementById("live-status"),l=Array.from(document.querySelectorAll("[data-version]")),h=Array.from(document.querySelectorAll("[data-camera-mode]")),u=Array.from(document.querySelectorAll('[data-action="ceiling"]')),d=Array.from(document.querySelectorAll('[data-action="furniture"]')),p=Array.from(document.querySelectorAll('[data-action="labels"]')),m=Array.from(document.querySelectorAll('[data-action="lighting"]')),_=document.getElementById("toggle-minimap"),g=document.getElementById("minimap-panel"),f=document.getElementById("room-nav");let M=t,y=!0,x=!1,L=!0,R=!!(t!=null&&t.defaultLabelsVisible),C="walk",D=!1,S=null,v=new Map;if(typeof window<"u"&&window.__IS_PORTABLE__)for(const K of document.querySelectorAll(".print-plan-link"))K.hidden=!0;window.innerWidth<768&&g&&_&&(g.classList.add("is-collapsed"),_.setAttribute("aria-expanded","false"),_.textContent="Mapa");function b(K){c&&(window.clearTimeout(S),S=window.setTimeout(()=>{c.textContent=K},120))}function U(K,k){for(const $ of K)$.setAttribute("aria-pressed",String(k))}function N(K,k){const{ceilingGroup:$}=e();$&&($.visible=k),U(u,k),K==="aerial"?x=k:y=k}function H(){const{ceilingGroup:K,furnitureGroup:k,labelsGroup:$}=e(),{mode:_t}=i.getPose(),q=_t==="aerial"?x:y;K&&(K.visible=q),k&&(k.visible=L),$&&($.visible=R),U(u,q),U(d,L),U(p,R)}function Z(K){f.innerHTML="",v=new Map;const k=K.ROOMS.filter($=>$.showInNav);for(const $ of k){const _t=document.createElement("button");_t.type="button",_t.className="room-btn",_t.dataset.roomId=$.id,_t.textContent=$.shortName,_t.setAttribute("aria-pressed","false"),_t.addEventListener("click",()=>{N("walk",y),i.goToRoom($.id)}),f.appendChild(_t),v.set($.id,_t)}}function V(K){for(const k of l)k.setAttribute("aria-pressed",String(k.dataset.version===K))}for(const K of l)K.addEventListener("click",()=>{const k=K.dataset.version;k!==M.id&&(M=r(k),R=!!M.defaultLabelsVisible,V(M.id),Z(M),H(),X({mode:i.getPose().mode,room:i.getPose().room}),b(`Carregada ${M.title}`))});for(const K of h)K.addEventListener("click",()=>{const k=K.dataset.cameraMode;N(k,k==="aerial"?x:y),i.setMode(k),b(k==="aerial"?"Modo vista aérea ativado":"Modo caminhar ativado")});for(const K of u)K.addEventListener("click",()=>{const{mode:k}=i.getPose(),{ceilingGroup:$}=e(),_t=!(($==null?void 0:$.visible)??!0);N(k,_t),b(_t?"Teto visível":"Teto oculto")});for(const K of d)K.addEventListener("click",()=>{L=!L;const{furnitureGroup:k}=e();k&&(k.visible=L),U(d,L),b(L?"Móveis visíveis":"Móveis ocultos")});for(const K of p)K.addEventListener("click",()=>{R=!R;const{labelsGroup:k}=e();k&&(k.visible=R),U(p,R),b(R?"Medidas e nomes visíveis":"Medidas e nomes ocultos")});for(const K of m)K.addEventListener("click",()=>{D=!D,n.setPreset(D?"entardecer":"dia"),U(m,D);for(const k of m)k.textContent=D?"Luz: Entardecer":"Luz: Dia";b(D?"Iluminação de entardecer":"Iluminação de dia")});_==null||_.addEventListener("click",()=>{const K=g.classList.toggle("is-collapsed");_.setAttribute("aria-expanded",String(!K)),_.textContent=K?"Mapa":"Ocultar"});const et=document.querySelectorAll("[data-pad-action]");for(const K of et){const k=K.dataset.padAction,$=q=>{const st=q?1:0;k==="forward"?i.setPadInput({forward:st}):k==="backward"?i.setPadInput({forward:-st}):k==="turn-left"?i.setPadInput({turn:st}):k==="turn-right"&&i.setPadInput({turn:-st})};K.addEventListener("pointerdown",q=>{var st;q.preventDefault(),(st=K.setPointerCapture)==null||st.call(K,q.pointerId),$(!0)});const _t=()=>$(!1);K.addEventListener("pointerup",_t),K.addEventListener("pointercancel",_t),K.addEventListener("lostpointercapture",_t)}function X({mode:K,room:k}){K!==C&&(N(K,K==="aerial"?x:y),C=K);for(const $ of h)$.setAttribute("aria-pressed",String($.dataset.cameraMode===K));for(const[$,_t]of v.entries()){const q=k&&(k.id===$||k.id==="corredor-interno"&&$==="cozinha");_t.setAttribute("aria-pressed",String(!!q))}K==="aerial"?a.textContent=`${M.label} (5,00 m × 30,00 m)`:k?(a.textContent=`${k.name} (${k.dimensionsLabel})`,b(`Em ${k.name}`)):a.textContent="Área externa"}V(M.id),Z(M),H(),X({mode:"walk",room:i.getPose().room});function lt(){s.render(i.getPose())}return{onCameraStateChange:X,update:lt}}function Ix(){return typeof window<"u"&&window.__INITIAL_VERSION__?window.__INITIAL_VERSION__:new URLSearchParams(window.location.search).get("v")||"v2"}function rr(i){i&&i.traverse(t=>{var e,n,s,r,o;if(t.geometry&&t.geometry.dispose(),t.material){const a=Array.isArray(t.material)?t.material:[t.material];for(const c of a)(n=(e=c.map)==null?void 0:e.dispose)==null||n.call(e),(r=(s=c.bumpMap)==null?void 0:s.dispose)==null||r.call(s),(o=c.dispose)==null||o.call(c)}})}const vh=document.getElementById("scene-canvas"),an=new Bg({canvas:vh,antialias:!0,powerPreference:"high-performance"});an.setPixelRatio(Math.min(window.devicePixelRatio||1,2));an.setSize(window.innerWidth,window.innerHeight,!1);an.outputColorSpace=Pe;an.toneMapping=_l;an.toneMappingExposure=1.06;an.shadowMap.enabled=!0;an.shadowMap.type=ml;const Mr=new kl,wr=new Ve(62,window.innerWidth/window.innerHeight,.08,160);let en=_h(Ix());const fl=V_(an.capabilities.getMaxAnisotropy()),Sh=X_(Mr,an,en.LIGHT_SPOTS);let Ri=null,rs=null,os=null,as=null;function yh(i){Ri&&(Mr.remove(Ri,rs,os,as),rr(Ri),rr(rs),rr(os),rr(as));const t=ex(i,fl);Ri=t.houseGroup,rs=t.ceilingGroup,os=Ax(i,fl),as=Rx(i),Mr.add(Ri,rs,os,as)}yh(en);let fs=null;const Pr=w_({camera:wr,domElement:vh,plan:en,onStateChange:i=>{fs==null||fs.onCameraStateChange(i)}}),Mh=Cx({canvas:document.getElementById("minimap-canvas"),plan:en,onTeleport:(i,t)=>{Pr.teleportTo(i,t)}});function Ux(i){return en=_h(i),yh(en),Sh.updateSpots(en.LIGHT_SPOTS),Pr.setPlan(en),Mh.setPlan(en),en}fs=Dx({controller:Pr,initialPlan:en,getGroups:()=>({houseGroup:Ri,ceilingGroup:rs,furnitureGroup:os,labelsGroup:as}),lighting:Sh,minimap:Mh,onVersionSwitch:Ux});function Nx(){const i=window.innerWidth,t=window.innerHeight;wr.aspect=i/t,wr.updateProjectionMatrix(),an.setSize(i,t,!1)}window.addEventListener("resize",Nx);const zx=new tf;function wh(){const i=Math.min(zx.getDelta(),.05);Pr.update(i),fs.update(),an.render(Mr,wr),requestAnimationFrame(wh)}requestAnimationFrame(wh);
