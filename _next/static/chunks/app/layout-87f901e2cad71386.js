(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2450:function(e,t,n){Promise.resolve().then(n.bind(n,1820))},1820:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ei}});var r=n(9268),i=n(2805),s=n(1313),a=(0,s.ZF)({apiKey:"AIzaSyBDw41KqGv7uf0mGNZAnL8tCHcigka5GTo",authDomain:"boardgame-cup-party-2023.firebaseapp.com",databaseURL:"https://boardgame-cup-party-2023-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"boardgame-cup-party-2023",storageBucket:"boardgame-cup-party-2023.appspot.com",messagingSenderId:"98266293147",appId:"1:98266293147:web:69f3ca455edaa16c82b73e"}),l=n(4734),d=n(6006),o=n(2120),u=n(555),c=n(3335),m=n(1835),f=n(8941),p=n(9545),h=n(5157),x=n(3244),g=n(3465),v=n(1460),y=n(6762),j=n.n(y),b=n(5021),w=n(8431);function k(){let e=(0,i._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding-bottom: 4vh;\n  z-index: 2000000;\n  overflow: hidden;\n  pointer-events: none;\n"]);return k=function(){return e},e}function I(){let e=(0,i._)(["\n  position: relative;\n  height: 100%;\n  width: 600px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 16px;\n"]);return I=function(){return e},e}function C(){let e=(0,i._)(["\n  width: 100%;\n  display: flex;\n  padding: 8px;\n  background: ",";\n  border-radius: 4px;\n  box-shadow: "," 0px 8px\n    16px;\n  align-items: center;\n  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;\n  transform-origin: bottom;\n  transform: ",";\n  opacity: ",";\n  pointer-events: all;\n"]);return C=function(){return e},e}function q(){let e=(0,i._)(["\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 0;\n  transition: transform 0.3s ease;\n"]);return q=function(){return e},e}function E(){let e=(0,i._)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return E=function(){return e},e}function _(){let e=(0,i._)(["\n          "," 1s infinite linear\n        "]);return _=function(){return e},e}function S(){let e=(0,i._)(["\n  width: 32px;\n  height: 32px;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 32px;\n  transition: color 0.3s ease;\n  animation: ",";\n  color: ",";\n"]);return S=function(){return e},e}function Z(){let e=(0,i._)(["\n  flex: 1 0 0;\n  padding-left: 8px;\n"]);return Z=function(){return e},e}let z=c.default.div(k()),O=c.default.div(I()),T=c.default.div(C(),e=>{let{theme:t}=e;return t.color.background.card.main},e=>{let{themeColor:t}=e;return(0,b.DZ)(.6,t)},e=>{let{phase:t}=e;return"destroying"===t||"request-creation"===t?"scale(0.8) translate(0, 8px)":"scale(1) translate(0, 0)"},e=>{let{phase:t}=e;return"destroying"===t||"request-creation"===t?0:1}),A=c.default.div(q()),R=(0,o.keyframes)(E()),J=c.default.div(S(),e=>{let{rotateAnimation:t}=e;return t?(0,o.css)(_(),R):"unset"},e=>{let{themeColor:t}=e;return t}),N=c.default.div(Z()),P=e=>"info"===e?(0,r.jsx)(f.Z,{}):"warn"===e?(0,r.jsx)(p.Z,{}):"error"===e?(0,r.jsx)(h.Z,{}):"success"===e?(0,r.jsx)(x.Z,{}):"updating"===e?(0,r.jsx)(g.Z,{}):"rare"===e||"epic"===e||"legendary"===e?(0,r.jsx)("img",{src:"https://static.solved.ac/tier_small/item-".concat(e,".svg"),style:{height:"1em"},alt:e}):(0,r.jsx)(f.Z,{}),B=e=>{let t=(0,u.u)();return"info"===e?t.color.text.secondary.main:"warn"===e?t.color.status.warn:"error"===e?t.color.status.error:"success"===e?t.color.status.success:"rare"===e?"#0089f9":"epic"===e?"#8b00e5":"legendary"===e?"#ff7900":"updating"===e?t.color.solvedAc:t.color.text.secondary.main},D=d.forwardRef((e,t)=>{var n,i;let{item:s,phase:a,position:l}=e,d=P(null!==(n=s.severity)&&void 0!==n?n:"info"),o=B(null!==(i=s.severity)&&void 0!==i?i:"info");return(0,r.jsx)(A,{style:{transform:"translate(0, ".concat(-l,"px)")},children:(0,r.jsxs)(T,{themeColor:o,phase:a,ref:t,children:[(0,r.jsx)(J,{themeColor:o,rotateAnimation:"updating"===s.severity,children:d}),(0,r.jsx)(N,{children:s.message}),(0,r.jsx)(J,{style:{pointerEvents:"all"},themeColor:o,children:(0,r.jsx)(m.zx,{transparent:!0,circle:!0,style:{width:32,height:32},onClick:e.dequeue,children:(0,r.jsx)(v.Z,{})})})]})})});D.displayName="SnackbarItemDisplay";let F=e=>{let{items:t}=e,n=(0,d.useRef)(new Map),[i,s]=(0,d.useState)(!1);(0,d.useEffect)(()=>(s(!0),()=>s(!1)),[]);let[a,l]=(0,d.useState)([]),[o,u]=(0,d.useState)([]),[c,m]=(0,d.useState)([]),[f,p]=(0,d.useState)([]);(0,d.useEffect)(()=>()=>{f.forEach(e=>clearTimeout(e.timeoutId))},[]),(0,d.useEffect)(()=>{l(e=>[...t.filter(t=>void 0===e.find(e=>e.item.id===t.id)).map(e=>({item:e,phase:"request-creation"})),...e.map(e=>({displayed:e,updated:t.find(t=>t.id===e.item.id)})).filter(e=>{let{updated:t}=e;return void 0!==t}).map(e=>{let{displayed:t,updated:n}=e;return{...t,item:{...t.item,value:n.value}}}),...e.filter(e=>void 0===t.find(t=>t.id===e.item.id)).map(e=>({item:e.item,phase:"destroying"}))].sort((e,t)=>e.item.id-t.item.id))},[t]);let h=(0,d.useCallback)((e,t)=>{l(n=>n.map(n=>({...n,phase:n.item.id===e?t:n.phase})))},[l]),x=(0,d.useCallback)(e=>{l(t=>t.filter(t=>t.item.id!==e))},[l]),g=(0,d.useCallback)(e=>{p(t=>t.filter(t=>t.timeoutId!==e))},[p]),v=(0,d.useCallback)(e=>{p(t=>(t.filter(t=>t.itemId===e&&"destroying"!==t.phase).forEach(e=>{clearTimeout(e.timeoutId)}),t.filter(t=>t.itemId!==e)))},[p]),y=(0,d.useCallback)(t=>{v(t),e.dequeue(t)},[v,e]);(0,d.useEffect)(()=>{p(t=>[...t,...a.filter(e=>"request-creation"===e.phase&&!t.find(t=>t.itemId===e.item.id&&"request-creation"===t.phase)).map(e=>{let t=setTimeout(()=>{h(e.item.id,"creating"),g(t)},30);return{itemId:e.item.id,timeoutId:t,phase:"request-creation"}}),...a.filter(e=>"creating"===e.phase&&!t.find(t=>t.itemId===e.item.id&&"creating"===t.phase)).map(e=>{let t=setTimeout(()=>{h(e.item.id,"created"),g(t)},500);return{itemId:e.item.id,timeoutId:t,phase:"creating"}}),...a.filter(e=>"created"===e.phase&&!0!==e.item.value.persist&&!t.find(t=>t.itemId===e.item.id&&"created"===t.phase)).map(t=>{let n=setTimeout(()=>{h(t.item.id,"destroying"),e.dequeue(t.item.id),g(n)},5e3);return{itemId:t.item.id,timeoutId:n,phase:"created"}}),...a.filter(e=>"destroying"===e.phase&&!t.find(t=>t.itemId===e.item.id&&"destroying"===t.phase)).map(e=>{let t=setTimeout(()=>{x(e.item.id),g(t)},500);return{itemId:e.item.id,timeoutId:t,phase:"destroying"}})])},[h,x,a,e,g]);let b=(0,d.useCallback)(()=>{var e;u(a.map(t=>{var r;return{id:t.item.id,height:"destroying"!==t.phase?null!==(e=null===(r=n.current.get(t.item.id))||void 0===r?void 0:r.offsetHeight)&&void 0!==e?e:0:-16}}))},[a,n]),k=(0,d.useCallback)(()=>{m(a.map(e=>({id:e.item.id,position:o.filter(t=>t.id>e.item.id).reduceRight((e,t)=>e+t.height+16,16)})))},[o,a]);(0,d.useEffect)(()=>{b()},[a,b]),(0,d.useEffect)(()=>{k()},[o,k]),(0,d.useEffect)(()=>{let e=j()(()=>{b(),k()},300);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[b,k]);let I=(0,r.jsx)(z,{children:(0,r.jsx)(O,{children:a.map(e=>{var t,i;let{item:s,phase:a}=e,l=e=>(n.current.set(s.id,e),n.current.get(s.id));return(0,r.jsx)(D,{ref:l,item:s.value,phase:a,dequeue:()=>y(s.id),position:null!==(i=null===(t=c.find(e=>e.id===s.id))||void 0===t?void 0:t.position)&&void 0!==i?i:0},s.id.toString())})})});return i?w.createPortal(I,document.body,"snackbar"):null},G=d.createContext(null),H=e=>{let[t,n]=(0,d.useState)(0),[i,s]=(0,d.useState)([]),a=e=>(s(n=>[...n,{id:t,value:e}]),n(e=>e+1),t),l=(e,n)=>{s(r=>[...r.filter(t=>t.id!==e),{id:t,value:n}].sort((e,t)=>e.id-t.id))},o=e=>{s(t=>[...t.filter(t=>t.id!==e)])};return(0,r.jsxs)(G.Provider,{value:{enqueue:a,dequeue:o,update:l},children:[e.children,(0,r.jsx)(F,{items:i,dequeue:o})]})},K=()=>(0,d.useContext)(G),L=["me@shiftpsh.com"],M=(0,d.createContext)({user:null,signIn:async()=>{},signOut:async()=>{}}),Q=e=>{let{children:t}=e,n=K(),[i,o]=(0,d.useState)(null),u=(0,d.useRef)(null),c=(0,d.useRef)(null),m=()=>{u.current=(0,l.v0)(a),u.current.languageCode="ko",c.current=new l.hJ;let e=u.current.onAuthStateChanged(e=>{o(e)});return()=>e()};(0,d.useEffect)(()=>{let e=m();return()=>e()},[]);let f=async()=>{if(u.current&&c.current)try{await (0,l.Fb)(u.current,l.a$);let e=await (0,l.rh)(u.current,c.current),t=e.user;L.includes(t.email)||(n.enqueue({message:"허용되지 않은 이메일입니다.",severity:"error"}),await p()),o(t),n.enqueue({message:"로그인되었습니다.",severity:"success"})}catch(e){console.log(e),e instanceof s.ZR?n.enqueue({message:"로그인에 실패했습니다: ".concat(e.message),severity:"error"}):n.enqueue({message:"로그인에 실패했습니다.",severity:"error"})}},p=async()=>{if(u.current)try{await u.current.signOut()}catch(e){console.log(e)}};return(0,r.jsx)(M.Provider,{value:{user:i,signIn:f,signOut:p},children:t})},U=()=>(0,d.useContext)(M);var $=n(4421),V=n(5873),W=n(789),X=n(5846),Y=n.n(X),ee=n(6008);function et(){let e=(0,i._)(["\n  position: sticky;\n  top: 0;\n  display: flex;\n"]);return et=function(){return e},e}let en=c.default.div(et()),er=()=>{let e=U(),t=(0,ee.usePathname)();return(0,r.jsxs)(en,{children:[(0,r.jsxs)(m.mQ,{children:[(0,r.jsx)(Y(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(m.OK,{current:"/"===t,as:"a",children:"스코어보드"})}),(0,r.jsx)(Y(),{href:"/calculator",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(m.OK,{current:"/calculator"===t,as:"a",children:"점수 계산"})})]}),(0,r.jsx)("div",{style:{flex:1}}),e.user?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.zx,{transparent:!0,onClick:()=>e.signOut(),children:(0,r.jsx)(m.Jd,{children:(0,r.jsx)($.Z,{})})}),(0,r.jsx)(m.zx,{transparent:!0,children:(0,r.jsx)(m.Jd,{children:(0,r.jsx)(V.Z,{})})}),(0,r.jsx)(m.zx,{transparent:!0,children:(0,r.jsx)(m.Jd,{children:(0,r.jsx)(W.Z,{})})}),(0,r.jsx)(m.T,{w:8})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.zx,{transparent:!0,onClick:()=>e.signIn(),children:(0,r.jsx)(m.Jd,{description:!0,children:"관리"})})})]})};function ei(e){let{children:t}=e;return(0,r.jsx)(u.a,{theme:m.Sk.light,children:(0,r.jsx)(Q,{children:(0,r.jsx)(H,{children:(0,r.jsxs)("html",{lang:"ko",children:[(0,r.jsx)("head",{children:(0,r.jsx)("link",{rel:"stylesheet",as:"style",crossOrigin:"anonymous",href:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"})}),(0,r.jsxs)("body",{children:[(0,r.jsx)(m.nl,{}),(0,r.jsx)(o.Global,{styles:{".tabler-icon":{verticalAlign:"middle",height:"1.15em"}}}),(0,r.jsx)(er,{}),t]})]})})})})}}},function(e){e.O(0,[169,759,697,520,151,667,139,744],function(){return e(e.s=2450)}),_N_E=e.O()}]);