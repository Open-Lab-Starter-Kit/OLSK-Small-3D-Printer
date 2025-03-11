import{r as i,u as R,M as L,s as ot,j as l,F as N,a as w,C as st,S as _e,U as at,b as Me,B as lt,R as D,c as Y,L as re,d as Ve,E as ie,e as J,f as ct,m as ut,g as dt,h as ft,i as $,G as oe,k as De,l as ye,n as pt,o as mt,V as fe,p as ht,q as K,t as gt,v as vt,O as bt}from"./index-ad446e46.js";import{Vector3 as _t,Vector2 as yt,UniformsUtils as Ie,UniformsLib as ke,ShaderMaterial as St}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import"//cdn.skypack.dev/three@0.130.1/examples/jsm/lines/LineSegmentsGeometry.js";function wt(){const e=i.useRef(),t=R(u=>u.wiringStep);let{currentStepObject:n,setCurrentSVG:o}=i.useContext(L);return i.useEffect(()=>{t&&document.getElementById("myEmbed").addEventListener("load",function(){o(ot(document.getElementById("myEmbed")))})},[t]),l(N,{children:t?l("div",{id:"svgContainer",style:{position:"absolute",width:"100%",height:"100%",bottom:"0px",left:"0px",padding:"10px"},children:l("embed",{style:{width:"100%",height:"100%",backgroundColor:"#e9e9e9"},ref:e,type:"image/svg+xml",src:`./${n.name}.svg`,id:"myEmbed"})}):null})}function xt(){let{setStepPosition:e,stepCount:t}=i.useContext(L);const n=()=>{t++,e(t)},o=()=>{t--,e(t)};return w(N,{children:[t>=1?l("button",{onClick:o,className:"btn",id:"nextStep",children:" ❮ Previous Step  "}):null,l("button",{onClick:n,className:"btn",id:"nextStep",children:"Next Step ❯ "})]})}function Ct(){const{setModelInOut:e,selectedParts:t}=i.useContext(L),[n,o]=i.useState(!1),u=R(_=>_.wiringStep);return l(N,{children:u?null:l("button",{onClick:()=>{n==!1?(document.getElementById("partsOut").innerHTML="Assemble",o(!0),e(n)):n==!0&&(document.getElementById("partsOut").innerHTML="Explode",o(!1),e(n))},className:"btn",id:"partsOut",children:"Explode"})})}class Pt{constructor(t,n={}){this.enabled=!0;const o=n.defaultThickness!==void 0?n.defaultThickness:.003,u=new st().fromArray(n.defaultColor!==void 0?n.defaultColor:[0,0,0]),d=n.defaultAlpha!==void 0?n.defaultAlpha:1,_=n.defaultKeepAlive!==void 0?n.defaultKeepAlive:!1,h={},m=60,v={},f={},M={outlineThickness:{value:o},outlineColor:{value:u},outlineAlpha:{value:d}},z=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),b=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function P(){return new _e({type:"OutlineEffect",uniforms:at.merge([Me.fog,Me.displacementmap,M]),vertexShader:z,fragmentShader:b,side:lt})}function T(r){let s=h[r.uuid];return s===void 0&&(s={material:P(),used:!0,keepAlive:_,count:0},h[r.uuid]=s),s.used=!0,s.material}function O(r){const s=T(r);return v[s.uuid]=r,V(s,r),s}function k(r){const s=r.geometry;let a=!1;return r.geometry!==void 0&&(s.isBufferGeometry?a=s.attributes.normal!==void 0:a=!0),r.isMesh===!0&&r.material!==void 0&&a===!0}function A(r){if(k(r)!==!1){if(Array.isArray(r.material))for(let s=0,a=r.material.length;s<a;s++)r.material[s]=O(r.material[s]);else r.material=O(r.material);f[r.uuid]=r.onBeforeRender,r.onBeforeRender=g}}function j(r){if(k(r)!==!1){if(Array.isArray(r.material))for(let s=0,a=r.material.length;s<a;s++)r.material[s]=v[r.material[s].uuid];else r.material=v[r.material.uuid];r.onBeforeRender=f[r.uuid]}}function g(r,s,a,y,S){const I=v[S.uuid];I!==void 0&&B(S,I)}function B(r,s){const a=s.userData.outlineParameters;r.uniforms.outlineAlpha.value=s.opacity,a!==void 0&&(a.thickness!==void 0&&(r.uniforms.outlineThickness.value=a.thickness),a.color!==void 0&&r.uniforms.outlineColor.value.fromArray(a.color),a.alpha!==void 0&&(r.uniforms.outlineAlpha.value=a.alpha)),s.displacementMap&&(r.uniforms.displacementMap.value=s.displacementMap,r.uniforms.displacementScale.value=s.displacementScale,r.uniforms.displacementBias.value=s.displacementBias)}function V(r,s){if(r.name==="invisible")return;const a=s.userData.outlineParameters;r.fog=s.fog,r.toneMapped=s.toneMapped,r.premultipliedAlpha=s.premultipliedAlpha,r.displacementMap=s.displacementMap,a!==void 0?(s.visible===!1?r.visible=!1:r.visible=a.visible!==void 0?a.visible:!0,r.transparent=a.alpha!==void 0&&a.alpha<1?!0:s.transparent,a.keepAlive!==void 0&&(h[s.uuid].keepAlive=a.keepAlive)):(r.transparent=s.transparent,r.visible=s.visible),(s.wireframe===!0||s.depthTest===!1)&&(r.visible=!1),s.clippingPlanes&&(r.clipping=!0,r.clippingPlanes=s.clippingPlanes,r.clipIntersection=s.clipIntersection,r.clipShadows=s.clipShadows),r.version=s.version}function H(){let r;r=Object.keys(v);for(let s=0,a=r.length;s<a;s++)v[r[s]]=void 0;r=Object.keys(f);for(let s=0,a=r.length;s<a;s++)f[r[s]]=void 0;r=Object.keys(h);for(let s=0,a=r.length;s<a;s++){const y=r[s];h[y].used===!1?(h[y].count++,h[y].keepAlive===!1&&h[y].count>m&&delete h[y]):(h[y].used=!1,h[y].count=0)}}this.render=function(r,s){if(this.enabled===!1){t.render(r,s);return}const a=t.autoClear;t.autoClear=this.autoClear,t.render(r,s),t.autoClear=a,this.renderOutline(r,s)},this.renderOutline=function(r,s){const a=t.autoClear,y=r.matrixWorldAutoUpdate,S=r.background,I=t.shadowMap.enabled;r.matrixWorldAutoUpdate=!1,r.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,r.traverse(A),t.render(r,s),r.traverse(j),H(),r.matrixWorldAutoUpdate=y,r.background=S,t.autoClear=a,t.shadowMap.enabled=I},this.autoClear=t.autoClear,this.domElement=t.domElement,this.shadowMap=t.shadowMap,this.clear=function(r,s,a){t.clear(r,s,a)},this.getPixelRatio=function(){return t.getPixelRatio()},this.setPixelRatio=function(r){t.setPixelRatio(r)},this.getSize=function(r){return t.getSize(r)},this.setSize=function(r,s,a){t.setSize(r,s,a)},this.setViewport=function(r,s,a,y){t.setViewport(r,s,a,y)},this.setScissor=function(r,s,a,y){t.setScissor(r,s,a,y)},this.setScissorTest=function(r){t.setScissorTest(r)},this.setRenderTarget=function(r){t.setRenderTarget(r)}}}const At=i.createContext(null);function Ot(e){let{children:t,enabled:n=!0}=e;const[o,u]=i.useState([]),d=i.useMemo(()=>({selected:o,select:u,enabled:n}),[o,u,n]);return D.createElement(At.Provider,{value:d},t)}function Et({modelInCopy:e}){const t=new Y({color:15461355});var n=new re({color:10921638,linewidth:10});const o=new _e(Ve);return o.uniforms.diffuse.value.set(0),i.useEffect(()=>{const u=[];e.traverse(d=>{if(d.frustumCulled=!0,d.isMesh){d.material=t,d.frustumCulled=!1;var _=new ie(d.geometry,20),h=new J(_,n);u.push(d.geometry);const m=new ct(ut(d.geometry)),v=new J(m,o);d.add(h),d.add(v),_.dispose(),d.geometry.dispose(),t.dispose()}})},[]),l(N,{children:l("primitive",{object:e,scale:1})})}D.memo(Et);new _t;const Mt={linewidth:{value:1},resolution:{value:new yt(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},pe={uniforms:Ie.merge([ke.common,ke.fog,Mt]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 control0;
		attribute vec3 control1;
		attribute vec3 direction;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

			// conditional logic
			// Transform the line segment ends and control points into camera clip space
			vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
			vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
			vec4 p0 = projectionMatrix * modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 p1 = projectionMatrix * modelViewMatrix * vec4( instanceStart + direction, 1.0 );

			c0 /= c0.w;
			c1 /= c1.w;
			p0 /= p0.w;
			p1 /= p1.w;

			// Get the direction of the segment and an orthogonal vector
			vec2 segDir = p1.xy - p0.xy;
			vec2 norm = vec2( - segDir.y, segDir.x );

			// Get control point directions from the line
			vec2 c0dir = c0.xy - p1.xy;
			vec2 c1dir = c1.xy - p1.xy;

			// If the vectors to the controls points are pointed in different directions away
			// from the line segment then the line should not be drawn.
			float d0 = dot( normalize( norm ), normalize( c0dir ) );
			float d1 = dot( normalize( norm ), normalize( c1dir ) );
			float discardFlag = float( sign( d0 ) != sign( d1 ) );
			gl_Position = discardFlag > 0.5 ? c0 : gl_Position;
			// end conditional line logic

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class kt extends St{constructor(t){super({type:"ConditionalLineMaterial",uniforms:Ie.clone(pe.uniforms),vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}}}),this.setValues(t)}}kt.prototype.isConditionalLineMaterial=!0;dt({OutlineEffect:Pt});const me=[],he=[];function Tt({modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}){console.log("render count");const{gl:d,camera:_,scene:h}=ft(),m=i.useRef(),v=i.useRef();i.useRef(),i.useRef(),i.useRef(),d.setPixelRatio(Math.min(window.devicePixelRatio,2));let{stepCount:f,modelProperties:M,partsInOut:z,setVisibleModel:b,setCurrentStepObj:P,currentStepObject:T,selectedParts:O,setProperties:k,setCurrentObject:A,visibleObj:j}=i.useContext(L);const[g,B]=i.useState(!1),[V,H]=i.useState(!1),[r,s]=i.useState(o);i.useState();const[a,y]=i.useState(n);i.useState(o);const[S,I]=i.useState();i.useState(),i.useState();const[Se,Q]=i.useState(),[C,W]=i.useState();i.useState();const ee=new Y({color:15461355}),ue=new Y({color:16777215}),we=new Y({color:16711680,wireframe:!0}),xe=new Y({color:13754592});var Ce=new re({color:4210752,linewidth:10}),Pe=new re({color:6723993,linewidth:50}),qe=new re({color:10921638,linewidth:10});new _e(Ve).uniforms.diffuse.value.set(0);const de=["01_Glue_the_magnets"],te=[["031_Prepare_the_bed_1","032_Prepare_the_bed_2","033_Prepare_the_bed_3"],["05_Prepare_back_panels"],["081_Prepare_the_gantry_frame_1","082_Prepare_the_gantry_frame_2","083_Prepare_the_gantry_frame_3","084_Prepare_the_gantry_frame_4","085_Prepare_the_gantry_frame_5"],["09_Prepare_bottom_panel"],["11_Prepare_top_panel"],["151_Prepare_the_head_1","152_Prepare_the_head_2","16_Prepare_the_X_axis"],["201_Prepare_electronic_panel_1","202_Prepare_electronic_panel_2","203_Prepare_electronic_panel_3"],["27_Prepare_the_display"],["291_Prepare_the_side_panel_1","292_Prepare_the_side_panel_2"],["34_Prepare_back_lid"],["381_Prepare_the_doors_1","382_Prepare_the_doors_2"]],Ge=["07_Wiring_AC","351_Wiring_1","352_Wiring_2","353_Wiring_3","354_Wiring_4"],Ae=[];let Oe=[],X=[];i.useEffect(()=>{z===!0?(s(o),W(o.getObjectByName(g[f]))):z===!1&&(s(u),W(u.getObjectByName(g[f])))},[z]),i.useEffect(()=>{r.traverse(c=>{c.isObject3D&&!c.isMesh&&!c.isGroup&&(me.push(c.name),he.push(c.userData.name))},[]),me.sort(),B(me),he.sort(),H(he),a.traverse(c=>{if(c.isMesh){c.material=ee,c.frustumCulled=!1;var E=new ie(c.geometry,20),p=new J(E,qe);c.add(p),c.geometry.dispose(),ee.dispose()}}),P(n.getObjectByName(g[0])),W(r.getObjectByName(g[0])),Ee(),$()},[]);const Ke=de.some(c=>c.includes(g[f])),Qe=te.some(c=>c.includes(g[f]));R(c=>c.wiringStep);const Xe=R(c=>c.isWiringStep),Ye=R(c=>c.isNotWiringStep);Ge.some(c=>c.includes(g[f]))?Xe():Ye(),i.useEffect(()=>{P(o.getObjectByName(g[f])),W(r.getObjectByName(g[f]))},[g,f]),i.useEffect(()=>{console.log(T),Ee()},[g,f,T]),i.useEffect(()=>{C&&(A(C.getObjectByName(g[f])),O!=[]&&tt(),$())},[O,C]);const Ee=i.useCallback(()=>{let c=[],E=[];const p=[];if(T){for(let q=0;q<T.children.length;q++)T.children[q].traverse(F=>{F.isGroup&&F.userData.name!=null&&p.push(F.userData.name),c=[...new Set(p)],E=c.map(U=>[p.filter(it=>it===U).length,U])});const x=T.userData.name;k({partsNames:E,titleName:x})}}),Je=i.useCallback(()=>{for(let c=f-1;c>=0;c--)for(let E=X.length-1;E>=0;E--)if(g[c]===X[E]){let p=a.getObjectByName(`${g[c]}`,!0);Oe.push(p)}}),Ze=i.useCallback(()=>{for(let p=0;p<te.length;p++){X=te[p];for(let x=0;x<X.length;x++)X.some(F=>F.includes(g[f]))&&Je()}let c=new oe,E=C.clone();c.add(E),Oe.filter(p=>te.some(x=>x.includes(p.name))).forEach(p=>{p.visible=!0;let x=p.clone();c.add(x)}),b(c)}),et=i.useCallback(()=>{for(let p=f-1;p>=0;p--){let x=a.getObjectByName(`${g[p]}`,!0);Ae.push(x)}let c=new oe;g[f]==="16_Prepare_the_X_axis"&&(a.getObjectByName("25_Prepare_Z_ball_screw",!0),console.log("exception")),Ae.filter(p=>!de.some(x=>x.includes(p.name))&&!de.some(x=>x.includes(p.name))).forEach(p=>{p.visible=!0;let x=p.clone();c.add(x)});let E=C.clone();c.add(E),b(c)}),tt=i.useCallback(()=>{if(C){const c=[];for(let E=0;E<C.children.length;E++)C.children[E].traverse(p=>{if(p.isMesh&&O.includes(C.children[E].userData.name)){p.frustumCulled=!1;const U=p.geometry.clone();c.push(U),p.material=xe;var x=new ie(p.geometry,20),q=new J(x,Pe);p.add(q),xe.dispose(),x.dispose(),Pe.dispose()}else if(p.isMesh&&C.children[E].userData.name!="Curves"){p.frustumCulled=!1,p.material=ue;var x=new ie(p.geometry,20),F=new J(x,Ce);p.add(F),x.dispose(),Ce.dispose()}else if(p.userData.name==="Curves"&&(p.material=we,p.isGroup))for(let U=0;U<p.children.length;U++)p.children[U].isMesh&&(p.children[U].material=we)});Q(O)}});i.useCallback(()=>{S.traverse(c=>{c.name==="Botom_Panel"&&console.log(S.userData.name)})}),i.useCallback(c=>{c.stopPropagation(),console.log(c.object)});const nt=i.useCallback(()=>{if(C){C.clone();for(let c=0;c<r.children.length;c++)r.children[c].visible=!1;for(let c=0;c<a.children.length;c++)a.children[c].visible=!1;Ke?(console.log("exception"),C.visible=!0,b(C)):Qe?(console.log("preparing step"),C.visible=!0,Ze()):(console.log("main building step"),C.visible=!0,et())}},[C]);i.useEffect(()=>{nt()},[C]);const{setListOfStep:rt}=i.useContext(L);return rt(V),i.useState(null),l(N,{children:l(Ot,{children:g?w(N,{children:[l("primitive",{ref:m,object:r,scale:1.0001}),l("primitive",{ref:v,object:a,scale:1})]}):null})})}const Nt=D.memo(Tt);function zt(){let e=[],t=new oe;const{modelProperties:n,visibleObj:o,currentStepObject:u,setClickedParts:d,selectedParts:_,partsInOut:h,setCurrentPartsModel:m,currentObject:v,partBtnState:f,setPartButtonState:M}=i.useContext(L),[z,b]=i.useState(null);i.useState(!1);const[P,T]=i.useState(!1),O=R(g=>g.wiringStep),k=i.useCallback(()=>{if(t=new oe,e=[],z){console.log(z);for(let g=0;g<v.children.length;g++)if(v.children[g].userData.name===z){const B=v.children[g].clone();t.add(B),e.push(v.children[g].userData.name)}d(e),m(t)}});i.useEffect(()=>{e=[],d(e),k()},[u,z]),i.useEffect(()=>{M(!1),e=[],d(e),m(null)},[u]);const A=()=>{f===!0&&(M(!1),e=[],d(e),m(null)),f===!1&&(M(!0),k())},j=()=>{console.log("disable"),M(!1),e=[],d(e),m(null),b(null)};return l(N,{children:l("div",{children:l("ul",{children:n?n.partsNames.map(([g,B],V)=>l("li",{children:B===z?w("button",{id:`${B}`,style:{backgroundColor:"#669999",color:"#ffffff"},disabled:P,onClick:()=>{f===!0&&j()},className:"parts",children:[w("b",{children:[" ",g,"x"]}),"  ",B]}):O?w("p",{style:{paddingBottom:10},children:[w("b",{children:[" ",g,"x"]}),"  ",B]}):w("button",{id:`${B}`,disabled:P,onClick:()=>{b(B),A()},className:"parts",children:[w("b",{children:[" ",g,"x "]}),"  ",B]})},V)):null})})})}function jt(){const{modelProperties:e}=i.useContext(L);return l(N,{children:l("div",{children:e?e.titleName:null})})}function Bt(){const{stepList:e,setStepPosition:t,stepCount:n,currentStepName:o,modelProperties:u}=i.useContext(L);i.useState("stepNaviBtn");const[d,_]=i.useState();return e&&[...Array(e.length)],l("div",{children:l("ul",{children:e?e.map((h,m)=>l("li",{children:u&&h===u.titleName?l("button",{id:`${h}`,style:{backgroundColor:"#000000",color:"#ffffff"},onClick:()=>{t(m)},className:"stepNaviBtn",children:h}):l("button",{id:`${h}`,style:{backgroundColor:d},onClick:()=>{t(m)},className:"stepNaviBtn",children:h})},m)):null})})}const Rt=D.memo(Bt);function Lt({cameraControlsRef:e}){let{visibleObj:t,modelProperties:n,selectedPartsModel:o,selectedParts:u,currentObject:d,setCamera:_,partBtnState:h,currentStepObject:m}=i.useContext(L);const v=De(),f=R(M=>M.cameraPositionTag);i.useEffect(()=>{t?(v.refresh(t).fit().clip(),$()):(v.refresh(m).fit().clip(),$())},[m,f]),i.useEffect(()=>{o?(v.refresh(o).fit(),$()):o||(v.refresh(t).fit(),$())},[o])}let be=1,He=new Array;new Array;let ge=new Array,ne;ye.get("https://sheets.googleapis.com/v4/spreadsheets/19gTabrr6wl83F1d9QXPsfbdLebCnI4RFTVkxUlM6Tog/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)be>2&&o[1]!=""&&(He.push(n),n=new Array),n.push(o),++be});function Vt(){let{stepCount:e}=i.useContext(L);return i.useEffect(()=>{ne=new Array;for(const t of He[e+1])t[10]!=""&&t[10]!=null&&(ge=new Array,ge.push(t[10]),ne.push(ge)),++be},[e]),l(N,{children:ne?w("div",{children:[w("div",{id:"RemarksTitle",style:{margin:"auto",display:"inline",alignContent:"baseline"},children:[l("h3",{children:" Remarks"})," ",l("br",{})]}),l("ul",{children:ne.map((t,n)=>w("li",{children:[" ",t]},n))})]}):null})}/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */var Dt=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},se=(...e)=>(e[0],`${e[1]}`,void 0);function Ue(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useCallback((...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function It(e,t,n){const[o,u]=i.useState(t),d=i.useRef(typeof e<"u"),_=d.current?e:o,h=Ue(n),m=i.useCallback(v=>{const M=typeof v=="function"?v(_):v;d.current||u(M),h==null||h(M)},[h,_]);return i.useEffect(()=>{se(!(d.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),se(!(!d.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[_,m]}var Ht="(prefers-reduced-motion: reduce)";function Ut(){const[e,t]=i.useState(!1);return i.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const n=window.matchMedia(Ht);t(n.matches);const o=u=>{t(u.matches)};if(n.addEventListener)return n.addEventListener("change",o),()=>{n.removeEventListener("change",o)};if(n.addListener)return n.addListener(o),()=>{n.removeListener(o)}},[]),e}var $t=pt["useId".toString()]||(()=>{});function Wt(){return $t()??""}var Ft=typeof window<"u"?i.useLayoutEffect:i.useEffect,ve=!1,qt=0,Te=()=>++qt;function Gt(e){const t=e||(ve?Te():null),[n,o]=i.useState(t);return Ft(()=>{n===null&&o(Te())},[]),i.useEffect(()=>{ve===!1&&(ve=!0)},[]),n!=null?String(n):void 0}function Kt(e){const t=Wt(),n=Gt(e);return typeof e=="string"?e:typeof t=="string"?t:n}function Qt(e,t){const n=performance.now(),o={};function u(){o.id=requestAnimationFrame(d=>{d-n>t?e():u()})}return u(),o}function Ne(e){e.id&&cancelAnimationFrame(e.id)}function ze(e){return e!=null&&e.current?e.current.scrollHeight:(se(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function Xt(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Yt(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new Dt(`Cannot assign value "${t}" to ref "${e}"`)}}function je(...e){return e.every(t=>t==null)?null:t=>{e.forEach(n=>{Yt(n,t)})}}function Jt(e){let t=n=>{};t=n=>{if(!(n!=null&&n.current))return;const{paddingTop:o,paddingBottom:u}=window.getComputedStyle(n.current);se(!(o&&o!=="0px"||u&&u!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},i.useEffect(()=>{t(e)},[e])}var Zt=typeof window>"u"?i.useEffect:i.useLayoutEffect;function en({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:n=()=>{},isExpanded:o,defaultExpanded:u=!1,hasDisabledAnimation:d,id:_,...h}={}){const m=Ue(n),v=Kt(_?`${_}`:void 0),[f,M]=It(o,u),z=i.useRef(f),[b,P]=i.useState(!1),T=Ut(),O=d??T,k=i.useRef(),A=i.useRef(),j=i.useRef(null),[g,B]=i.useState(null);Jt(j);const V=`${h.collapsedHeight||0}px`;function H(r){if(!j.current)return;const s=j.current;for(const a in r){const y=r[a];y?s.style[a]=y:s.style.removeProperty(a)}}return Zt(()=>{if(!j.current||f===z.current)return;z.current=f;function s(S){return O?0:e??Xt(S)}const a=S=>`height ${s(S)}ms ${t}`,y=S=>{function I(){f?(H({height:"",overflow:"",transition:"",display:""}),m("expandEnd")):(H({transition:""}),m("collapseEnd")),P(!1)}A.current&&Ne(A.current),A.current=Qt(I,S)};return P(!0),f?k.current=requestAnimationFrame(()=>{m("expandStart"),H({display:"block",overflow:"hidden",height:V}),k.current=requestAnimationFrame(()=>{m("expanding");const S=ze(j);y(s(S)),j.current&&(j.current.style.transition=a(S),j.current.style.height=`${S}px`)})}):k.current=requestAnimationFrame(()=>{m("collapseStart");const S=ze(j);y(s(S)),H({transition:a(S),height:`${S}px`}),k.current=requestAnimationFrame(()=>{m("collapsing"),H({height:V,overflow:"hidden"})})}),()=>{k.current&&cancelAnimationFrame(k.current),A.current&&Ne(A.current)}},[f,V,O,e,t,m]),{isExpanded:f,setExpanded:M,getToggleProps(r){const{disabled:s,onClick:a,refKey:y,...S}={refKey:"ref",onClick(){},disabled:!1,...r},I=g?g.tagName==="BUTTON":void 0,Se=r==null?void 0:r[y||"ref"],Q={id:`react-collapsed-toggle-${v}`,"aria-controls":`react-collapsed-panel-${v}`,"aria-expanded":f,onClick(ee){s||(a==null||a(ee),M(ue=>!ue))},[y||"ref"]:je(Se,B)},C={type:"button",disabled:s?!0:void 0},W={"aria-disabled":s?!0:void 0,role:"button",tabIndex:s?-1:0};return I===!1?{...Q,...W,...S}:I===!0?{...Q,...C,...S}:{...Q,...C,...W,...S}},getCollapseProps(r){const{style:s,refKey:a}={refKey:"ref",style:{},...r},y=r==null?void 0:r[a||"ref"];return{id:`react-collapsed-panel-${v}`,"aria-hidden":!f,"aria-labelledby":`react-collapsed-toggle-${v}`,role:"region",...r,[a||"ref"]:je(j,y),style:{boxSizing:"border-box",...!b&&!f?{display:V==="0px"?"none":"block",height:V,overflow:"hidden"}:{},...s}}}}}var $e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Be=D.createContext&&D.createContext($e),tn=["attr","size","title"];function nn(e,t){if(e==null)return{};var n=rn(e,t),o,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(u=0;u<d.length;u++)o=d[u],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function rn(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ae.apply(this,arguments)}function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,o)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Re(Object(n),!0).forEach(function(o){on(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function on(e,t,n){return t=sn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e){var t=an(e,"string");return typeof t=="symbol"?t:t+""}function an(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function We(e){return e&&e.map((t,n)=>D.createElement(t.tag,le({key:n},t.attr),We(t.child)))}function ce(e){return t=>D.createElement(ln,ae({attr:le({},e.attr)},t),We(e.child))}function ln(e){var t=n=>{var{attr:o,size:u,title:d}=e,_=nn(e,tn),h=u||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),D.createElement("svg",ae({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,_,{className:m,style:le(le({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&D.createElement("title",null,d),e.children)};return Be!==void 0?D.createElement(Be.Consumer,null,n=>t(n)):t($e)}function cn(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m18.25 7.6-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"},child:[]}]})(e)}function un(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"},child:[]}]})(e)}function dn(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 24H0V0h24v24z",opacity:".87"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},child:[]}]})(e)}function Le(e){return ce({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}let Z=1,Fe=new Array,G=new Array;ye.get("https://sheets.googleapis.com/v4/spreadsheets/18hHq4XYLPYSN1Wc0RjY5zl5vCHoVVrlugpG-O7cULLw/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)Z>2&&o[1]!=""&&(Fe.push(n),n=new Array),n.push(o),++Z});function fn(){const[e,t]=i.useState(),[n,o]=i.useState(),[u,d]=i.useState(),_=R(b=>b.isNotVisibleToggle),h=R(b=>b.isVisibleToggle);R(b=>b.isVisible);let{stepCount:m,howToData:v,setHowToWorkbook:f,setClickedPath:M,path:z}=i.useContext(L);return i.useEffect(()=>{let b=new Array;ye.get("https://sheets.googleapis.com/v4/spreadsheets/1grTucZ2sqLgZ4AtJq8EkyO__kLg-pazRVl3sbLNMaIY/values/Blad1?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(P=>{let T=P.data.values,O=new Array,k=[];for(const A of T)Z>0&&A[0]!=""?(O=new Array,O.push(A),b.push(O)):O.push(A),++Z;f(b);for(const A of b)A[0]!=""&&(G=new Array,G.push(A[0][0],A[0][1]),k.push(G));d(k)})},[]),i.useEffect(()=>{let b=new Array;for(const P of Fe[m+1])P[12]!=""&&P[12]!=null&&(G=new Array,G.push(P[12]),b.push(G)),++Z;t(b)},[m]),i.useEffect(()=>{let b=[];if(u!=null){for(const P of e)for(const T of u)T.includes(`${P}`)&&b.push(T);o(b),e.length===0?_():h()}},[u,e]),l(N,{children:l("div",{children:l("ul",{children:n?n.map((b,P)=>w("li",{children:[l(mt,{to:`/HowTo/${b[0]}`,target:"_blank",rel:"noopener noreferrer",children:w("button",{type:"button",className:"stepNaviBtn",children:[b[0],". ",b[1]]})})," "]},P)):null})})})}function pn(){const e=i.useRef(),[t,n]=i.useState(!1),{getCollapseProps:o,getToggleProps:u}=en({isExpanded:t}),d=R(_=>_.isVisible);return w(N,{children:[l("button",{type:"button",...u({onClick:()=>n(_=>!_)}),className:t?"expanded":"btn",style:{position:"absolute",top:"20px",left:"20px",visibility:`${d}`},children:t?w(N,{children:[l(Le,{})," How To ",l(un,{})]}):w(N,{children:[l(Le,{})," How To ",l(dn,{})]})}),l("div",{ref:e,className:"howToBoxContent",...o(),children:l(fn,{})})]})}function mn(){let{visibleObj:e,selectedParts:t,stepSVG:n}=i.useContext(L);const o=R(f=>f.cameraPositionTag),u=R(f=>f.freeControls),d=R(f=>f.wiringStep),_=De(),[h]=i.useState(()=>new fe),[m]=i.useState(()=>new fe),v=new fe(4,1,8);return ht((f,M)=>{o==="initial"&&d===!1&&(h.lerp(v,.1),m.lerp([0,0,0],.1),f.camera.position.copy(h),f.camera.lookAt(m),u(),_.refresh(e).fit(),$()),o==="initial"&&d===!0&&(console.log(n),n.reset(),u(),$())}),l(N,{})}function yn(){const e=K("./OLSK_Small_3DPrinter_V3_All_In.glb"),t=K("./OLSK_Small_3DPrinter_V3_All_Out.glb"),n=i.useMemo(()=>e.scene.clone(),[e]),o=i.useMemo(()=>e.scene.clone(),[e]),u=i.useMemo(()=>t.scene.clone(),[t]);i.useState(!1),i.useRef(),i.useRef(),K.clear("./OLSK_Small_3DPrinter_V3_All_In.glb"),K.clear("./OLSK_Small_3DPrinter_V3_All_Out.glb");const d=R(_=>_.resetCamera);return l(N,{children:w(i.Fragment,{children:[l("aside",{className:"stepNavi",children:l(Rt,{})}),w("section",{id:"currentStepArea",children:[w("nav",{className:"currentStepBar",children:[l("h2",{id:"stepTitleArea",children:l(jt,{})}),w("div",{id:"stepControl",children:[l(xt,{}),"                        "]})]}),w("div",{className:"infoColumn",children:[l("div",{className:"stepPartsArea",children:l(zt,{})}),l("div",{className:"stepRemarksArea",children:l(Vt,{})})]}),w("article",{className:"viewArea",id:"viewArea",children:[l(i.Suspense,{fallback:null,children:w(gt,{linear:!0,flat:!0,frameloop:"demand",camera:{fov:45,near:1,far:10,position:[4,1,8]},children:[l(hn,{}),l("color",{args:["#f5f5f5"],attach:"background"}),l(vt,{clip:!0,observe:!0,damping:2,margin:.85,children:w(i.Suspense,{fallback:null,children:[l(Nt,{modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}),l(Lt,{})]})}),l(mn,{})]})}),l(wt,{}),w("button",{className:"btn",style:{position:"absolute",bottom:"20px",left:"20px"},onClick:d,children:[l(cn,{})," Reset Camera"]}),l(Ct,{}),l(pn,{})]})]})]})})}K.preload("./OLSK_Small_3DPrinter_V3_All_In.glb");K.preload("./OLSK_Small_3DPrinter_V3_All_Out.glb");function hn(){const e=i.useRef();return l(N,{children:l(bt,{ref:e,makeDefault:!0,enableDamping:!1,enableRotate:!0,minAzimuthAngle:1/0,maxAzimuthAngle:1/0,minPolarAngle:0,maxPolarAngle:1/0})})}export{yn as default};
//# sourceMappingURL=App-1dd8e8ec.js.map
