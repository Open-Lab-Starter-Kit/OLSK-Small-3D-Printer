import{r as i,u as R,M as L,s as ot,j as l,F as N,a as S,C as st,S as ye,U as at,b as ke,B as lt,R as D,c as J,L as ie,d as Ve,E as oe,e as Z,f as ct,m as ut,g as dt,h as ft,i as $,G as se,k as De,l as _e,n as pt,o as mt,V as fe,p as ht,q as K,t as gt,v as vt,O as bt}from"./index-8aaca70f.js";import{Vector3 as yt,Vector2 as _t,UniformsUtils as Ie,UniformsLib as Me,ShaderMaterial as St}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import"//cdn.skypack.dev/three@0.130.1/examples/jsm/lines/LineSegmentsGeometry.js";function wt(){const e=i.useRef(),t=R(u=>u.wiringStep);let{currentStepObject:n,setCurrentSVG:o}=i.useContext(L);return i.useEffect(()=>{t&&document.getElementById("myEmbed").addEventListener("load",function(){o(ot(document.getElementById("myEmbed")))})},[t]),l(N,{children:t?l("div",{id:"svgContainer",style:{position:"absolute",width:"100%",height:"100%",bottom:"0px",left:"0px",padding:"10px"},children:l("embed",{style:{width:"100%",height:"100%",backgroundColor:"#e9e9e9"},ref:e,type:"image/svg+xml",src:`./${n.name}.svg`,id:"myEmbed"})}):null})}function xt(){let{setStepPosition:e,stepCount:t,stepList:n}=i.useContext(L);const o=()=>{t++,e(t)},u=()=>{t--,e(t)};return S(N,{children:[t>=1?l("button",{onClick:u,className:"btn",id:"nextStep",children:" ❮ Previous Step  "}):null,n&&t+1<=n.length-1?l("button",{onClick:o,className:"btn",id:"nextStep",children:"Next Step ❯ "}):null]})}function Ct(){const{setModelInOut:e,selectedParts:t}=i.useContext(L),[n,o]=i.useState(!1),u=R(y=>y.wiringStep);return l(N,{children:u?null:l("button",{onClick:()=>{n==!1?(document.getElementById("partsOut").innerHTML="Assemble",o(!0),e(n)):n==!0&&(document.getElementById("partsOut").innerHTML="Explode",o(!1),e(n))},className:"btn",id:"partsOut",children:"Explode"})})}class Pt{constructor(t,n={}){this.enabled=!0;const o=n.defaultThickness!==void 0?n.defaultThickness:.003,u=new st().fromArray(n.defaultColor!==void 0?n.defaultColor:[0,0,0]),d=n.defaultAlpha!==void 0?n.defaultAlpha:1,y=n.defaultKeepAlive!==void 0?n.defaultKeepAlive:!1,h={},m=60,v={},f={},k={outlineThickness:{value:o},outlineColor:{value:u},outlineAlpha:{value:d}},z=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),b=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function P(){return new ye({type:"OutlineEffect",uniforms:at.merge([ke.fog,ke.displacementmap,k]),vertexShader:z,fragmentShader:b,side:lt})}function T(r){let s=h[r.uuid];return s===void 0&&(s={material:P(),used:!0,keepAlive:y,count:0},h[r.uuid]=s),s.used=!0,s.material}function O(r){const s=T(r);return v[s.uuid]=r,V(s,r),s}function M(r){const s=r.geometry;let a=!1;return r.geometry!==void 0&&(s.isBufferGeometry?a=s.attributes.normal!==void 0:a=!0),r.isMesh===!0&&r.material!==void 0&&a===!0}function A(r){if(M(r)!==!1){if(Array.isArray(r.material))for(let s=0,a=r.material.length;s<a;s++)r.material[s]=O(r.material[s]);else r.material=O(r.material);f[r.uuid]=r.onBeforeRender,r.onBeforeRender=g}}function j(r){if(M(r)!==!1){if(Array.isArray(r.material))for(let s=0,a=r.material.length;s<a;s++)r.material[s]=v[r.material[s].uuid];else r.material=v[r.material.uuid];r.onBeforeRender=f[r.uuid]}}function g(r,s,a,_,w){const I=v[w.uuid];I!==void 0&&B(w,I)}function B(r,s){const a=s.userData.outlineParameters;r.uniforms.outlineAlpha.value=s.opacity,a!==void 0&&(a.thickness!==void 0&&(r.uniforms.outlineThickness.value=a.thickness),a.color!==void 0&&r.uniforms.outlineColor.value.fromArray(a.color),a.alpha!==void 0&&(r.uniforms.outlineAlpha.value=a.alpha)),s.displacementMap&&(r.uniforms.displacementMap.value=s.displacementMap,r.uniforms.displacementScale.value=s.displacementScale,r.uniforms.displacementBias.value=s.displacementBias)}function V(r,s){if(r.name==="invisible")return;const a=s.userData.outlineParameters;r.fog=s.fog,r.toneMapped=s.toneMapped,r.premultipliedAlpha=s.premultipliedAlpha,r.displacementMap=s.displacementMap,a!==void 0?(s.visible===!1?r.visible=!1:r.visible=a.visible!==void 0?a.visible:!0,r.transparent=a.alpha!==void 0&&a.alpha<1?!0:s.transparent,a.keepAlive!==void 0&&(h[s.uuid].keepAlive=a.keepAlive)):(r.transparent=s.transparent,r.visible=s.visible),(s.wireframe===!0||s.depthTest===!1)&&(r.visible=!1),s.clippingPlanes&&(r.clipping=!0,r.clippingPlanes=s.clippingPlanes,r.clipIntersection=s.clipIntersection,r.clipShadows=s.clipShadows),r.version=s.version}function U(){let r;r=Object.keys(v);for(let s=0,a=r.length;s<a;s++)v[r[s]]=void 0;r=Object.keys(f);for(let s=0,a=r.length;s<a;s++)f[r[s]]=void 0;r=Object.keys(h);for(let s=0,a=r.length;s<a;s++){const _=r[s];h[_].used===!1?(h[_].count++,h[_].keepAlive===!1&&h[_].count>m&&delete h[_]):(h[_].used=!1,h[_].count=0)}}this.render=function(r,s){if(this.enabled===!1){t.render(r,s);return}const a=t.autoClear;t.autoClear=this.autoClear,t.render(r,s),t.autoClear=a,this.renderOutline(r,s)},this.renderOutline=function(r,s){const a=t.autoClear,_=r.matrixWorldAutoUpdate,w=r.background,I=t.shadowMap.enabled;r.matrixWorldAutoUpdate=!1,r.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,r.traverse(A),t.render(r,s),r.traverse(j),U(),r.matrixWorldAutoUpdate=_,r.background=w,t.autoClear=a,t.shadowMap.enabled=I},this.autoClear=t.autoClear,this.domElement=t.domElement,this.shadowMap=t.shadowMap,this.clear=function(r,s,a){t.clear(r,s,a)},this.getPixelRatio=function(){return t.getPixelRatio()},this.setPixelRatio=function(r){t.setPixelRatio(r)},this.getSize=function(r){return t.getSize(r)},this.setSize=function(r,s,a){t.setSize(r,s,a)},this.setViewport=function(r,s,a,_){t.setViewport(r,s,a,_)},this.setScissor=function(r,s,a,_){t.setScissor(r,s,a,_)},this.setScissorTest=function(r){t.setScissorTest(r)},this.setRenderTarget=function(r){t.setRenderTarget(r)}}}const At=i.createContext(null);function Ot(e){let{children:t,enabled:n=!0}=e;const[o,u]=i.useState([]),d=i.useMemo(()=>({selected:o,select:u,enabled:n}),[o,u,n]);return D.createElement(At.Provider,{value:d},t)}function Et({modelInCopy:e}){const t=new J({color:15461355});var n=new ie({color:10921638,linewidth:10});const o=new ye(Ve);return o.uniforms.diffuse.value.set(0),i.useEffect(()=>{const u=[];e.traverse(d=>{if(d.frustumCulled=!0,d.isMesh){d.material=t,d.frustumCulled=!1;var y=new oe(d.geometry,20),h=new Z(y,n);u.push(d.geometry);const m=new ct(ut(d.geometry)),v=new Z(m,o);d.add(h),d.add(v),y.dispose(),d.geometry.dispose(),t.dispose()}})},[]),l(N,{children:l("primitive",{object:e,scale:1})})}D.memo(Et);new yt;const kt={linewidth:{value:1},resolution:{value:new _t(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},pe={uniforms:Ie.merge([Me.common,Me.fog,kt]),vertexShader:`
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
		`};class Mt extends St{constructor(t){super({type:"ConditionalLineMaterial",uniforms:Ie.clone(pe.uniforms),vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}}}),this.setValues(t)}}Mt.prototype.isConditionalLineMaterial=!0;dt({OutlineEffect:Pt});const me=[],he=[];function Tt({modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}){console.log("render count");const{gl:d,camera:y,scene:h}=ft(),m=i.useRef(),v=i.useRef();i.useRef(),i.useRef(),i.useRef(),d.setPixelRatio(Math.min(window.devicePixelRatio,2));let{stepCount:f,modelProperties:k,partsInOut:z,setVisibleModel:b,setCurrentStepObj:P,currentStepObject:T,selectedParts:O,setProperties:M,setCurrentObject:A,visibleObj:j}=i.useContext(L);const[g,B]=i.useState(!1),[V,U]=i.useState(!1),[r,s]=i.useState(o);i.useState();const[a,_]=i.useState(n);i.useState(o);const[w,I]=i.useState();i.useState(),i.useState();const[Se,Q]=i.useState(),[C,F]=i.useState();i.useState();const te=new J({color:15461355}),ue=new J({color:16777215}),we=new J({color:16711680,wireframe:!0}),xe=new J({color:13754592});var Ce=new ie({color:4210752,linewidth:10}),Pe=new ie({color:6723993,linewidth:50}),qe=new ie({color:10921638,linewidth:10});new ye(Ve).uniforms.diffuse.value.set(0);const de=["01_Glue_the_magnets"],ne=[["031_Prepare_the_bed_1","032_Prepare_the_bed_2","033_Prepare_the_bed_3"],["05_Prepare_back_panels"],["081_Prepare_the_gantry_frame_1","082_Prepare_the_gantry_frame_2","083_Prepare_the_gantry_frame_3","084_Prepare_the_gantry_frame_4","085_Prepare_the_gantry_frame_5"],["09_Prepare_bottom_panel"],["11_Prepare_top_panel"],["151_Prepare_the_head_1","152_Prepare_the_head_2","16_Prepare_the_X_axis"],["201_Prepare_electronic_panel_1","202_Prepare_electronic_panel_2","203_Prepare_electronic_panel_3"],["27_Prepare_the_display"],["291_Prepare_the_side_panel_1","292_Prepare_the_side_panel_2"],["34_Prepare_back_lid"],["381_Prepare_the_doors_1","382_Prepare_the_doors_2"]],Ge=["07_Wiring_AC","351_Wiring_1","352_Wiring_2","353_Wiring_3","354_Wiring_4"],Ae=[];let Oe=[],X=[];i.useEffect(()=>{z===!0?(s(o),F(o.getObjectByName(g[f]))):z===!1&&(s(u),F(u.getObjectByName(g[f])))},[z]),i.useEffect(()=>{r.traverse(c=>{c.isObject3D&&!c.isMesh&&!c.isGroup&&(me.push(c.name),he.push(c.userData.name))},[]),me.sort(),B(me),he.sort(),U(he),a.traverse(c=>{if(c.isMesh){c.material=te,c.frustumCulled=!1;var E=new oe(c.geometry,20),p=new Z(E,qe);c.add(p),c.geometry.dispose(),te.dispose()}}),P(n.getObjectByName(g[0])),F(r.getObjectByName(g[0])),Ee(),$()},[]);const Ke=de.some(c=>c.includes(g[f])),Qe=ne.some(c=>c.includes(g[f]));R(c=>c.wiringStep);const Xe=R(c=>c.isWiringStep),Je=R(c=>c.isNotWiringStep);Ge.some(c=>c.includes(g[f]))?Xe():Je(),i.useEffect(()=>{P(o.getObjectByName(g[f])),F(r.getObjectByName(g[f]))},[g,f]),i.useEffect(()=>{console.log(T),Ee()},[g,f,T]),i.useEffect(()=>{C&&(A(C.getObjectByName(g[f])),O!=[]&&tt(),$())},[O,C]);const Ee=i.useCallback(()=>{let c=[],E=[];const p=[];if(T){for(let q=0;q<T.children.length;q++)T.children[q].traverse(W=>{W.isGroup&&W.userData.name!=null&&p.push(W.userData.name),c=[...new Set(p)],E=c.map(H=>[p.filter(it=>it===H).length,H])});const x=T.userData.name;M({partsNames:E,titleName:x})}}),Ze=i.useCallback(()=>{for(let c=f-1;c>=0;c--)for(let E=X.length-1;E>=0;E--)if(g[c]===X[E]){let p=a.getObjectByName(`${g[c]}`,!0);Oe.push(p)}}),Ye=i.useCallback(()=>{for(let p=0;p<ne.length;p++){X=ne[p];for(let x=0;x<X.length;x++)X.some(W=>W.includes(g[f]))&&Ze()}let c=new se,E=C.clone();c.add(E),Oe.filter(p=>ne.some(x=>x.includes(p.name))).forEach(p=>{p.visible=!0;let x=p.clone();c.add(x)}),b(c)}),et=i.useCallback(()=>{for(let p=f-1;p>=0;p--){let x=a.getObjectByName(`${g[p]}`,!0);Ae.push(x)}let c=new se;g[f]==="16_Prepare_the_X_axis"&&(a.getObjectByName("25_Prepare_Z_ball_screw",!0),console.log("exception")),Ae.filter(p=>!de.some(x=>x.includes(p.name))&&!de.some(x=>x.includes(p.name))).forEach(p=>{p.visible=!0;let x=p.clone();c.add(x)});let E=C.clone();c.add(E),b(c)}),tt=i.useCallback(()=>{if(C){const c=[];for(let E=0;E<C.children.length;E++)C.children[E].traverse(p=>{if(p.isMesh&&O.includes(C.children[E].userData.name)){p.frustumCulled=!1;const H=p.geometry.clone();c.push(H),p.material=xe;var x=new oe(p.geometry,20),q=new Z(x,Pe);p.add(q),xe.dispose(),x.dispose(),Pe.dispose()}else if(p.isMesh&&C.children[E].userData.name!="Curves"){p.frustumCulled=!1,p.material=ue;var x=new oe(p.geometry,20),W=new Z(x,Ce);p.add(W),x.dispose(),Ce.dispose()}else if(p.userData.name==="Curves"&&(p.material=we,p.isGroup))for(let H=0;H<p.children.length;H++)p.children[H].isMesh&&(p.children[H].material=we)});Q(O)}});i.useCallback(()=>{w.traverse(c=>{c.name==="Botom_Panel"&&console.log(w.userData.name)})}),i.useCallback(c=>{c.stopPropagation(),console.log(c.object)});const nt=i.useCallback(()=>{if(C){C.clone();for(let c=0;c<r.children.length;c++)r.children[c].visible=!1;for(let c=0;c<a.children.length;c++)a.children[c].visible=!1;Ke?(console.log("exception"),C.visible=!0,b(C)):Qe?(console.log("preparing step"),C.visible=!0,Ye()):(console.log("main building step"),C.visible=!0,et())}},[C]);i.useEffect(()=>{nt()},[C]);const{setListOfStep:rt}=i.useContext(L);return rt(V),i.useState(null),l(N,{children:l(Ot,{children:g?S(N,{children:[l("primitive",{ref:m,object:r,scale:1.0001}),l("primitive",{ref:v,object:a,scale:1})]}):null})})}const Nt=D.memo(Tt);function zt(){let e=[],t=new se;const{modelProperties:n,visibleObj:o,currentStepObject:u,setClickedParts:d,selectedParts:y,partsInOut:h,setCurrentPartsModel:m,currentObject:v,partBtnState:f,setPartButtonState:k}=i.useContext(L),[z,b]=i.useState(null);i.useState(!1);const[P,T]=i.useState(!1),O=R(g=>g.wiringStep),M=i.useCallback(()=>{if(t=new se,e=[],z){console.log(z);for(let g=0;g<v.children.length;g++)if(v.children[g].userData.name===z){const B=v.children[g].clone();t.add(B),e.push(v.children[g].userData.name)}d(e),m(t)}});i.useEffect(()=>{e=[],d(e),M()},[u,z]),i.useEffect(()=>{k(!1),e=[],d(e),m(null)},[u]);const A=()=>{f===!0&&(k(!1),e=[],d(e),m(null)),f===!1&&(k(!0),M())},j=()=>{console.log("disable"),k(!1),e=[],d(e),m(null),b(null)};return l(N,{children:l("div",{children:l("ul",{children:n?n.partsNames.map(([g,B],V)=>l("li",{children:B===z?S("button",{id:`${B}`,style:{backgroundColor:"#669999",color:"#ffffff"},disabled:P,onClick:()=>{f===!0&&j()},className:"parts",children:[S("b",{children:[" ",g,"x"]}),"  ",B]}):O?S("p",{style:{paddingBottom:10},children:[S("b",{children:[" ",g,"x"]}),"  ",B]}):S("button",{id:`${B}`,disabled:P,onClick:()=>{b(B),A()},className:"parts",children:[S("b",{children:[" ",g,"x "]}),"  ",B]})},V)):null})})})}function jt(){const{modelProperties:e}=i.useContext(L);return l(N,{children:l("div",{children:e?e.titleName:null})})}function Bt(){const{stepList:e,setStepPosition:t,stepCount:n,currentStepName:o,modelProperties:u}=i.useContext(L);i.useState("stepNaviBtn");const[d,y]=i.useState();return e&&[...Array(e.length)],l("div",{children:l("ul",{children:e?e.map((h,m)=>l("li",{children:u&&h===u.titleName?l("button",{id:`${h}`,style:{backgroundColor:"#000000",color:"#ffffff"},onClick:()=>{t(m)},className:"stepNaviBtn",children:h}):l("button",{id:`${h}`,style:{backgroundColor:d},onClick:()=>{t(m)},className:"stepNaviBtn",children:h})},m)):null})})}const Rt=D.memo(Bt);function Lt({cameraControlsRef:e}){let{visibleObj:t,modelProperties:n,selectedPartsModel:o,selectedParts:u,currentObject:d,setCamera:y,partBtnState:h,currentStepObject:m}=i.useContext(L);const v=De(),f=R(k=>k.cameraPositionTag);i.useEffect(()=>{t?(v.refresh(t).fit().clip(),$()):(v.refresh(m).fit().clip(),$())},[m,f]),i.useEffect(()=>{o?(v.refresh(o).fit(),$()):o||(v.refresh(t).fit(),$())},[o])}var Ue={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Te=D.createContext&&D.createContext(Ue),Vt=["attr","size","title"];function Dt(e,t){if(e==null)return{};var n=It(e,t),o,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(u=0;u<d.length;u++)o=d[u],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function It(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ae.apply(this,arguments)}function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,o)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(n),!0).forEach(function(o){Ut(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ut(e,t,n){return t=Ht(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ht(e){var t=$t(e,"string");return typeof t=="symbol"?t:t+""}function $t(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function He(e){return e&&e.map((t,n)=>D.createElement(t.tag,le({key:n},t.attr),He(t.child)))}function ee(e){return t=>D.createElement(Ft,ae({attr:le({},e.attr)},t),He(e.child))}function Ft(e){var t=n=>{var{attr:o,size:u,title:d}=e,y=Dt(e,Vt),h=u||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),D.createElement("svg",ae({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,y,{className:m,style:le(le({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&D.createElement("title",null,d),e.children)};return Te!==void 0?D.createElement(Te.Consumer,null,n=>t(n)):t(Ue)}function Wt(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(e)}let be=1,$e=new Array;new Array;let ge=new Array,re;_e.get("https://sheets.googleapis.com/v4/spreadsheets/19gTabrr6wl83F1d9QXPsfbdLebCnI4RFTVkxUlM6Tog/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)be>2&&o[1]!=""&&($e.push(n),n=new Array),n.push(o),++be});function qt(){let{stepCount:e}=i.useContext(L);return i.useEffect(()=>{re=new Array;for(const t of $e[e+1])t[10]!=""&&t[10]!=null&&(ge=new Array,ge.push(t[10]),re.push(ge)),++be},[e]),l(N,{children:re?S("div",{children:[S("div",{id:"RemarksTitle",style:{margin:"auto",display:"inline",alignContent:"baseline"},children:[S("h3",{children:[" ",l(Wt,{})," Remarks"]})," ",l("br",{})]}),l("ul",{children:re.map((t,n)=>S("li",{children:[" ",t]},n))})]}):null})}/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */var Gt=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},ce=(...e)=>(e[0],`${e[1]}`,void 0);function Fe(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useCallback((...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function Kt(e,t,n){const[o,u]=i.useState(t),d=i.useRef(typeof e<"u"),y=d.current?e:o,h=Fe(n),m=i.useCallback(v=>{const k=typeof v=="function"?v(y):v;d.current||u(k),h==null||h(k)},[h,y]);return i.useEffect(()=>{ce(!(d.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),ce(!(!d.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[y,m]}var Qt="(prefers-reduced-motion: reduce)";function Xt(){const[e,t]=i.useState(!1);return i.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const n=window.matchMedia(Qt);t(n.matches);const o=u=>{t(u.matches)};if(n.addEventListener)return n.addEventListener("change",o),()=>{n.removeEventListener("change",o)};if(n.addListener)return n.addListener(o),()=>{n.removeListener(o)}},[]),e}var Jt=pt["useId".toString()]||(()=>{});function Zt(){return Jt()??""}var Yt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ve=!1,en=0,ze=()=>++en;function tn(e){const t=e||(ve?ze():null),[n,o]=i.useState(t);return Yt(()=>{n===null&&o(ze())},[]),i.useEffect(()=>{ve===!1&&(ve=!0)},[]),n!=null?String(n):void 0}function nn(e){const t=Zt(),n=tn(e);return typeof e=="string"?e:typeof t=="string"?t:n}function rn(e,t){const n=performance.now(),o={};function u(){o.id=requestAnimationFrame(d=>{d-n>t?e():u()})}return u(),o}function je(e){e.id&&cancelAnimationFrame(e.id)}function Be(e){return e!=null&&e.current?e.current.scrollHeight:(ce(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function on(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function sn(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new Gt(`Cannot assign value "${t}" to ref "${e}"`)}}function Re(...e){return e.every(t=>t==null)?null:t=>{e.forEach(n=>{sn(n,t)})}}function an(e){let t=n=>{};t=n=>{if(!(n!=null&&n.current))return;const{paddingTop:o,paddingBottom:u}=window.getComputedStyle(n.current);ce(!(o&&o!=="0px"||u&&u!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},i.useEffect(()=>{t(e)},[e])}var ln=typeof window>"u"?i.useEffect:i.useLayoutEffect;function cn({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:n=()=>{},isExpanded:o,defaultExpanded:u=!1,hasDisabledAnimation:d,id:y,...h}={}){const m=Fe(n),v=nn(y?`${y}`:void 0),[f,k]=Kt(o,u),z=i.useRef(f),[b,P]=i.useState(!1),T=Xt(),O=d??T,M=i.useRef(),A=i.useRef(),j=i.useRef(null),[g,B]=i.useState(null);an(j);const V=`${h.collapsedHeight||0}px`;function U(r){if(!j.current)return;const s=j.current;for(const a in r){const _=r[a];_?s.style[a]=_:s.style.removeProperty(a)}}return ln(()=>{if(!j.current||f===z.current)return;z.current=f;function s(w){return O?0:e??on(w)}const a=w=>`height ${s(w)}ms ${t}`,_=w=>{function I(){f?(U({height:"",overflow:"",transition:"",display:""}),m("expandEnd")):(U({transition:""}),m("collapseEnd")),P(!1)}A.current&&je(A.current),A.current=rn(I,w)};return P(!0),f?M.current=requestAnimationFrame(()=>{m("expandStart"),U({display:"block",overflow:"hidden",height:V}),M.current=requestAnimationFrame(()=>{m("expanding");const w=Be(j);_(s(w)),j.current&&(j.current.style.transition=a(w),j.current.style.height=`${w}px`)})}):M.current=requestAnimationFrame(()=>{m("collapseStart");const w=Be(j);_(s(w)),U({transition:a(w),height:`${w}px`}),M.current=requestAnimationFrame(()=>{m("collapsing"),U({height:V,overflow:"hidden"})})}),()=>{M.current&&cancelAnimationFrame(M.current),A.current&&je(A.current)}},[f,V,O,e,t,m]),{isExpanded:f,setExpanded:k,getToggleProps(r){const{disabled:s,onClick:a,refKey:_,...w}={refKey:"ref",onClick(){},disabled:!1,...r},I=g?g.tagName==="BUTTON":void 0,Se=r==null?void 0:r[_||"ref"],Q={id:`react-collapsed-toggle-${v}`,"aria-controls":`react-collapsed-panel-${v}`,"aria-expanded":f,onClick(te){s||(a==null||a(te),k(ue=>!ue))},[_||"ref"]:Re(Se,B)},C={type:"button",disabled:s?!0:void 0},F={"aria-disabled":s?!0:void 0,role:"button",tabIndex:s?-1:0};return I===!1?{...Q,...F,...w}:I===!0?{...Q,...C,...w}:{...Q,...C,...F,...w}},getCollapseProps(r){const{style:s,refKey:a}={refKey:"ref",style:{},...r},_=r==null?void 0:r[a||"ref"];return{id:`react-collapsed-panel-${v}`,"aria-hidden":!f,"aria-labelledby":`react-collapsed-toggle-${v}`,role:"region",...r,[a||"ref"]:Re(j,_),style:{boxSizing:"border-box",...!b&&!f?{display:V==="0px"?"none":"block",height:V,overflow:"hidden"}:{},...s}}}}}function un(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m18.25 7.6-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"},child:[]}]})(e)}function dn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"},child:[]}]})(e)}function fn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 24H0V0h24v24z",opacity:".87"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},child:[]}]})(e)}function Le(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}let Y=1,We=new Array,G=new Array;_e.get("https://sheets.googleapis.com/v4/spreadsheets/19gTabrr6wl83F1d9QXPsfbdLebCnI4RFTVkxUlM6Tog/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)Y>2&&o[1]!=""&&(We.push(n),n=new Array),n.push(o),++Y});function pn(){const[e,t]=i.useState(),[n,o]=i.useState(),[u,d]=i.useState(),y=R(b=>b.isNotVisibleToggle),h=R(b=>b.isVisibleToggle);R(b=>b.isVisible);let{stepCount:m,howToData:v,setHowToWorkbook:f,setClickedPath:k,path:z}=i.useContext(L);return i.useEffect(()=>{let b=new Array;_e.get("https://sheets.googleapis.com/v4/spreadsheets/1grTucZ2sqLgZ4AtJq8EkyO__kLg-pazRVl3sbLNMaIY/values/Blad1?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(P=>{let T=P.data.values,O=new Array,M=[];for(const A of T)Y>0&&A[0]!=""?(O=new Array,O.push(A),b.push(O)):O.push(A),++Y;f(b);for(const A of b)A[0]!=""&&(G=new Array,G.push(A[0][0],A[0][1]),M.push(G));d(M)})},[]),i.useEffect(()=>{let b=new Array;for(const P of We[m+1])P[12]!=""&&P[12]!=null&&(G=new Array,G.push(P[12]),b.push(G)),++Y;t(b)},[m]),i.useEffect(()=>{let b=[];if(u!=null){for(const P of e)for(const T of u)T.includes(`${P}`)&&b.push(T);o(b),e.length===0?y():h()}},[u,e]),l(N,{children:l("div",{children:l("ul",{children:n?n.map((b,P)=>S("li",{children:[l(mt,{to:`/HowTo/${b[0]}`,target:"_blank",rel:"noopener noreferrer",children:S("button",{type:"button",className:"stepNaviBtn",children:[b[0],". ",b[1]]})})," "]},P)):null})})})}function mn(){const e=i.useRef(),[t,n]=i.useState(!1),{getCollapseProps:o,getToggleProps:u}=cn({isExpanded:t}),d=R(y=>y.isVisible);return S(N,{children:[l("button",{type:"button",...u({onClick:()=>n(y=>!y)}),className:t?"expanded":"btn",style:{position:"absolute",top:"20px",left:"20px",visibility:`${d}`},children:t?S(N,{children:[l(Le,{})," How To ",l(dn,{})]}):S(N,{children:[l(Le,{})," How To ",l(fn,{})]})}),l("div",{ref:e,className:"howToBoxContent",...o(),children:l(pn,{})})]})}function hn(){let{visibleObj:e,selectedParts:t,stepSVG:n}=i.useContext(L);const o=R(f=>f.cameraPositionTag),u=R(f=>f.freeControls),d=R(f=>f.wiringStep),y=De(),[h]=i.useState(()=>new fe),[m]=i.useState(()=>new fe),v=new fe(4,1,8);return ht((f,k)=>{o==="initial"&&d===!1&&(h.lerp(v,.1),m.lerp([0,0,0],.1),f.camera.position.copy(h),f.camera.lookAt(m),u(),y.refresh(e).fit(),$()),o==="initial"&&d===!0&&(console.log(n),n.reset(),u(),$())}),l(N,{})}function Sn(){const e=K("./OLSK_Small_3DPrinter_V3_All_In.glb"),t=K("./OLSK_Small_3DPrinter_V3_All_Out.glb"),n=i.useMemo(()=>e.scene.clone(),[e]),o=i.useMemo(()=>e.scene.clone(),[e]),u=i.useMemo(()=>t.scene.clone(),[t]);i.useState(!1),i.useRef(),i.useRef(),K.clear("./OLSK_Small_3DPrinter_V3_All_In.glb"),K.clear("./OLSK_Small_3DPrinter_V3_All_Out.glb");const d=R(y=>y.resetCamera);return l(N,{children:S(i.Fragment,{children:[l("aside",{className:"stepNavi",children:l(Rt,{})}),S("section",{id:"currentStepArea",children:[S("nav",{className:"currentStepBar",children:[l("h2",{id:"stepTitleArea",children:l(jt,{})}),S("div",{id:"stepControl",children:[l(xt,{}),"                        "]})]}),S("div",{className:"infoColumn",children:[l("div",{className:"stepPartsArea",children:l(zt,{})}),l("div",{className:"stepRemarksArea",children:l(qt,{})})]}),S("article",{className:"viewArea",id:"viewArea",children:[l(i.Suspense,{fallback:null,children:S(gt,{linear:!0,flat:!0,frameloop:"demand",camera:{fov:45,near:1,far:10,position:[4,1,8]},children:[l(gn,{}),l("color",{args:["#f5f5f5"],attach:"background"}),l(vt,{clip:!0,observe:!0,damping:2,margin:.85,children:S(i.Suspense,{fallback:null,children:[l(Nt,{modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}),l(Lt,{})]})}),l(hn,{})]})}),l(wt,{}),S("button",{className:"btn",style:{position:"absolute",bottom:"20px",left:"20px"},onClick:d,children:[l(un,{})," Reset Camera"]}),l(Ct,{}),l(mn,{})]})]})]})})}K.preload("./OLSK_Small_3DPrinter_V3_All_In.glb");K.preload("./OLSK_Small_3DPrinter_V3_All_Out.glb");function gn(){const e=i.useRef();return l(N,{children:l(bt,{ref:e,makeDefault:!0,enableDamping:!1,enableRotate:!0,minAzimuthAngle:1/0,maxAzimuthAngle:1/0,minPolarAngle:0,maxPolarAngle:1/0})})}export{Sn as default};
//# sourceMappingURL=App-02a7e8e9.js.map
