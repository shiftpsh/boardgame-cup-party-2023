(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9319:function(e,t,n){Promise.resolve().then(n.bind(n,2175))},2175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var s=n(9268),a=n(2665),l=n(6866),i=n(6628),r=n(1555),o=n(6006),d=n(6192);let c=()=>{let e=(0,d.Z)(),[t]=(0,l.Z)(),n=(0,o.useMemo)(()=>{let n=new Map;return i.map(n=>{let{handle:s,type:a,solves:l}=n,i=e.filter(e=>e.players.includes(s)).sort((e,t)=>e.startedAt-t.startedAt),o=i.filter(e=>"finishedAt"in e==!1),d=i.filter(e=>"finishedAt"in e),c=[{type:"solves",score:10*l,solves:l},...d.map(e=>{let n=e.result.find(e=>e.handle===s),a=t<e.finishedAt,l=a?null:(0,r.Gs)(e.result.length,e.durationMinutes,n.rank);return{type:"game",score:n.exclude?0:l,game:e,result:n}})],m=c.reduce((e,t)=>{let{score:n}=t;return e+(n||0)},0);return{handle:s,exclude:"staff"===a,score:m,scoreEntries:c,ongoingGames:o,rank:0}}).sort((e,t)=>t.score-e.score).map((e,t)=>{var s;let a=null!==(s=n.get(e.score))&&void 0!==s?s:t+1;return n.set(e.score,a),{...e,rank:a}})},[t,e]);return n};var m=n(1835),u=n(3430),h=n(6649),p=n(9519);let x=e=>{let{data:t}=e,n=(0,a.Z)(t.startedAt),l=(0,p.r)(t.gameId),i="적정 플레이 시간: ".concat(l.estimatedPlayTime.min," - ").concat(l.estimatedPlayTime.max,"분");return(0,s.jsx)(m.u,{title:i,children:(0,s.jsxs)("span",{children:[(0,s.jsx)(h.Z,{emoji:l.emoji})," ",(0,s.jsx)("span",{children:l.name})," ",(0,s.jsxs)(m.Jd,{description:!0,children:[Math.floor(n/60/1e3),(0,s.jsx)(m.Jd,{small:!0,children:"분"})]})]})})};var f=n(2805),y=n(4945),j=n(2120),g=n(3335),v=n(5728);function b(){let e=(0,f._)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n    "]);return b=function(){return e},e}function w(){let e=(0,f._)(["\n  display: inline-block;\n  animation: "," 2s linear infinite;\n  transform-origin: center center;\n  line-height: 1;\n"]);return w=function(){return e},e}let k=(0,j.keyframes)(b()),Z=g.default.span(w(),k),_=e=>(0,s.jsx)(Z,{children:(0,s.jsx)(v.Z,{...e})});var T=n(4445);function J(){let e=(0,f._)(["\n  text-align: right;\n"]);return J=function(){return e},e}let F=g.default.div(J()),P=e=>{let{data:t}=e,n="solves"===t.type?"custom":t.game.gameId,a=(0,p.r)(n),l="solves"===t.type?0:t.game.finishedAt-t.game.startedAt;return(0,s.jsxs)(F,{style:null===t.score?{opacity:.5}:{},children:[(0,s.jsx)(m.Jd,{h3:!0,"no-margin":!0,tabular:!0,as:"span",style:{fontWeight:"initial"},children:null!==t.score?(0,s.jsx)(y.Z,{value:t.score}):(0,s.jsx)(m.Jd,{description:!0,children:(0,s.jsx)(T.Z,{})})}),(0,s.jsx)(m.Jd,{description:!0,children:"solves"===t.type?(0,s.jsxs)(s.Fragment,{children:["=",t.solves," ",(0,s.jsx)(m.u,{title:"보드게임컵 솔브 수",children:(0,s.jsx)(h.Z,{emoji:"\uD83C\uDFC6"})})]}):(0,s.jsxs)(s.Fragment,{children:[null===t.score?(0,s.jsxs)(s.Fragment,{children:[Math.floor(l/60/1e3),(0,s.jsx)(m.Jd,{small:!0,children:"분"})]}):(0,s.jsxs)(s.Fragment,{children:["#",t.result.rank]})," ",(0,s.jsx)(m.u,{title:a.name,children:(0,s.jsx)(h.Z,{emoji:a.emoji})})]})})]})};function A(){let e=(0,f._)(["\n  text-align: right;\n"]);return A=function(){return e},e}let E=g.default.div(A()),S=e=>{let{data:t}=e,{gameId:n}=t,l=(0,p.r)(n),i=(0,a.Z)(t.startedAt);return(0,s.jsxs)(E,{children:[(0,s.jsxs)(m.Jd,{h3:!0,"no-margin":!0,tabular:!0,description:!0,as:"span",style:{fontWeight:"initial"},children:[(0,s.jsx)(_,{}),"\xa0"]}),(0,s.jsxs)(m.Jd,{description:!0,tabular:!0,children:[Math.floor(i/60/1e3),(0,s.jsx)(m.Jd,{small:!0,children:"분"})," ",(0,s.jsx)(m.u,{title:l.name,children:(0,s.jsx)(h.Z,{emoji:l.emoji})})]})]})};function M(){let e=(0,f._)(["\n  white-space: nowrap;\n  word-break: keep-all;\n  height: 96px;\n  direction: ltr;\n  @media (min-width: 768px) {\n    height: 72px;\n  }\n"]);return M=function(){return e},e}function I(){let e=(0,f._)(["\n  position: sticky;\n  padding: 16px;\n  vertical-align: middle;\n  left: 0;\n  width: 216px;\n  background: linear-gradient(\n    to right,\n    ",",\n    "," 80%,\n    transparent\n  );\n"]);return I=function(){return e},e}function G(){let e=(0,f._)(["\n  display: flex;\n"]);return G=function(){return e},e}function z(){let e=(0,f._)(["\n  position: sticky;\n  padding: 16px;\n  vertical-align: middle;\n  right: 0;\n  width: 172px;\n  text-align: right;\n  background: linear-gradient(\n    to left,\n    ",",\n    "," 80%,\n    transparent\n  );\n"]);return z=function(){return e},e}function D(){let e=(0,f._)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return D=function(){return e},e}function N(){let e=(0,f._)(["\n  vertical-align: middle;\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return N=function(){return e},e}function O(){let e=(0,f._)(["\n  direction: ltr;\n  vertical-align: middle;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);return O=function(){return e},e}function C(){let e=(0,f._)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 80px;\n  gap: 0 24px;\n"]);return C=function(){return e},e}function H(){let e=(0,f._)(["\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n  font-size: 0.9em;\n  font-weight: 800;\n  background: ",";\n  color: ",";\n"]);return H=function(){return e},e}let R=(0,g.default)(u.E.tr)(M()),B=g.default.td(I(),e=>{let{theme:t}=e;return t.color.background.page},e=>{let{theme:t}=e;return t.color.background.page}),q=g.default.div(G()),L=g.default.td(z(),e=>{let{theme:t}=e;return t.color.background.page},e=>{let{theme:t}=e;return t.color.background.page}),U=g.default.div(D()),W=g.default.td(N()),Y=g.default.tr(O()),K=g.default.div(C()),X=g.default.div(H(),e=>{let{theme:t}=e;return t.color.text.primary.dark},e=>{let{theme:t}=e;return t.color.text.primary.light}),Q=e=>{let{user:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(R,{layoutId:t.handle,children:[(0,s.jsx)(L,{children:(0,s.jsxs)(U,{children:[0!==t.ongoingGames.length&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Jd,{description:!0,children:(0,s.jsx)(_,{})}),(0,s.jsx)(m.T,{w:8})]}),t.scoreEntries.find(e=>null===e.score)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Jd,{description:!0,children:(0,s.jsx)(T.Z,{})}),(0,s.jsx)(m.T,{w:8})]}):null,(0,s.jsx)(m.Jd,{h2:!0,"no-margin":!0,tabular:!0,as:"span",children:(0,s.jsx)(y.Z,{value:t.score})})]})}),(0,s.jsx)(W,{children:(0,s.jsxs)(K,{children:[t.scoreEntries.map(e=>(0,s.jsx)(P,{data:e},"solves"===e.type?"solves":e.game.uuid)),t.ongoingGames.map(e=>(0,s.jsx)(S,{data:e},e.gameId))]})}),(0,s.jsx)(B,{children:(0,s.jsxs)(q,{children:[(0,s.jsx)(X,{children:(0,s.jsx)(y.Z,{value:t.rank})}),(0,s.jsx)(m.T,{w:8}),(0,s.jsxs)(m.Jd,{ellipsis:!0,children:[(0,s.jsx)("span",{children:t.handle}),t.exclude&&(0,s.jsx)(m.Jd,{description:!0,children:" (스탭)"})]})]})})]}),(0,s.jsx)(Y,{children:(0,s.jsx)("td",{colSpan:2,style:{paddingBottom:16,paddingRight:16},children:(0,s.jsxs)(K,{children:[t.scoreEntries.map(e=>(0,s.jsx)(P,{data:e},"solves"===e.type?"solves":e.game.uuid)),t.ongoingGames.map(e=>(0,s.jsx)(S,{data:e},e.gameId))]})})})]})};function V(){let e=c(),[t]=(0,l.Z)(),n=(0,a.Z)(t),i=Math.floor(-n/1e3),r=(0,o.useMemo)(()=>Array.from(new Set(e.flatMap(e=>e.ongoingGames))).sort((e,t)=>e.startedAt-t.startedAt),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{padding:16,overflowX:"auto"},children:[0!==r.length&&(0,s.jsxs)(s.Fragment,{children:["현재 플레이 중:"," ",r.map((e,t)=>{let{gameId:n}=e;return(0,s.jsxs)(o.Fragment,{children:[0!==t&&", ",(0,s.jsx)(x,{data:e})]},n)})]}),(0,s.jsx)(m.T,{h:8}),3600>=i&&i>60&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(m.Jd,{description:!0,tabular:!0,children:[Math.floor(i/60),"분 후 프리즈"]})}),60>=i&&i>0&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Jd,{success:!0,tabular:!0,children:(0,s.jsxs)("b",{children:[i,"초 후 프리즈"]})})}),i<=0&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Jd,{success:!0,tabular:!0,children:(0,s.jsx)("b",{children:"스코어보드 프리즈됨"})})})]}),(0,s.jsx)("div",{style:{position:"relative",overflowX:"auto",direction:"rtl"},children:(0,s.jsx)("table",{style:{width:"100%"},children:(0,s.jsx)(u.E.tbody,{layout:!0,children:e.map(e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(Q,{user:e}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:3,children:(0,s.jsx)(m.iz,{margin:"none"})})})]},e.handle))})})})]})}},4945:function(e,t,n){"use strict";var s=n(9268),a=n(4355),l=n(9730),i=n(6006);let r=e=>e.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),o=e=>{let{value:t,format:n=r}=e,o=(0,i.useRef)(null),d=(0,a.c)(0),c=(0,l.q)(d);return(0,i.useEffect)(()=>{d.set(t)},[d,t]),(0,i.useEffect)(()=>c.onChange(e=>{o.current&&(o.current.textContent=n(e))}),[n,c]),(0,s.jsx)("span",{ref:o,children:n(t)})};t.Z=o},6649:function(e,t,n){"use strict";var s=n(2805),a=n(9268),l=n(3335),i=n(1527);function r(){let e=(0,s._)(["\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.05em 0 0.1em;\n  vertical-align: -0.25em;\n"]);return r=function(){return e},e}let o=e=>"https://twemoji.maxcdn.com/v/latest/72x72/".concat(e,".png"),d=l.default.img(r()),c=e=>{let{emoji:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d,{src:o(i.Z.convert.toCodePoint(t)),alt:t})})};t.Z=c},2665:function(e,t,n){"use strict";var s=n(6006);let a=e=>{let[t,n]=(0,s.useState)(Date.now()),[a,l]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{n(Date.now())},1e3);return()=>{clearInterval(e)}},[]),(0,s.useEffect)(()=>{e instanceof Date?l(t-e.getTime()):l(t-e)},[t,e]),a};t.Z=a},6866:function(e,t,n){"use strict";var s=n(3328),a=n(4890),l=n(6006);let i=()=>{let[e,t]=(0,l.useState)(1683963e6);(0,l.useEffect)(()=>{let e=(0,a.jM)((0,a.iH)(s.db,"freeze"),e=>{e.exists()&&t(e.val())});return()=>e()},[]);let n=async e=>{await (0,a.t8)((0,a.iH)(s.db,"freeze"),e)};return[e,n]};t.Z=i},6192:function(e,t,n){"use strict";var s=n(3328),a=n(4890),l=n(6006);let i=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=(0,a.jM)((0,a.iH)(s.db,"games"),e=>{if(e.exists()){let n=e.toJSON();t(Object.values(n).map(e=>({...e,players:Object.values(e.players),..."result"in e?{result:Object.values(e.result)}:{}})))}});return()=>e()},[]),e};t.Z=i},3328:function(e,t,n){"use strict";n.d(t,{db:function(){return l}});var s=n(4890),a=n(5650);let l=(0,s.N8)(a.Z)},5650:function(e,t,n){"use strict";var s=n(1313);t.Z=(0,s.ZF)({apiKey:"AIzaSyBDw41KqGv7uf0mGNZAnL8tCHcigka5GTo",authDomain:"boardgame-cup-party-2023.firebaseapp.com",databaseURL:"https://boardgame-cup-party-2023-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"boardgame-cup-party-2023",storageBucket:"boardgame-cup-party-2023.appspot.com",messagingSenderId:"98266293147",appId:"1:98266293147:web:69f3ca455edaa16c82b73e"})},9519:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var s=n(3383);let a=e=>s.find(t=>t.id===e)},1555:function(e,t,n){"use strict";n.d(t,{Ab:function(){return a},Gs:function(){return l},WR:function(){return s}});let s=(e,t)=>2*e+1-t,a=e=>e*e+e*(e+1)/2,l=(e,t,n)=>10*Math.ceil(s(e,n)/a(e)*t*e)},3383:function(e){"use strict";e.exports=JSON.parse('[{"id":"terraforming-mars","name":"테라포밍 마스","emoji":"\uD83C\uDF0D","players":{"min":1,"max":5},"estimatedPlayTime":{"min":90,"max":120}},{"id":"sakura-arms","name":"벚꽃 내리는 시대에 결투를","emoji":"\uD83C\uDF38","players":{"min":2,"max":2},"estimatedPlayTime":{"min":10,"max":20}},{"id":"halli-galli","name":"할리갈리","emoji":"\uD83C\uDF4B","players":{"min":2,"max":7},"estimatedPlayTime":{"min":5,"max":15}},{"id":"chess","name":"체스","emoji":"♟","players":{"min":2,"max":2},"estimatedPlayTime":{"min":30,"max":60}},{"id":"crazy-time","name":"크레이지 타임","emoji":"\uD83D\uDD70","players":{"min":3,"max":14},"estimatedPlayTime":{"min":20,"max":30}},{"id":"dominion","name":"도미니언","emoji":"\uD83C\uDFF0","players":{"min":2,"max":4},"estimatedPlayTime":{"min":30,"max":40}},{"id":"splendor","name":"스플렌더","emoji":"\uD83D\uDC8E","players":{"min":2,"max":4},"estimatedPlayTime":{"min":20,"max":30}},{"id":"yacht-dice","name":"요트 다이스","emoji":"\uD83C\uDFB2","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":20}},{"id":"no-thanks","name":"노 땡스!","emoji":"\uD83D\uDE45‍♂️","players":{"min":3,"max":7},"estimatedPlayTime":{"min":20,"max":30}},{"id":"uno","name":"UNO","emoji":"\uD83C\uDCCF","players":{"min":2,"max":10},"estimatedPlayTime":{"min":20,"max":30}},{"id":"bang","name":"뱅!","emoji":"\uD83D\uDD2B","players":{"min":4,"max":7},"estimatedPlayTime":{"min":20,"max":40}},{"id":"zenga","name":"젠가","emoji":"\uD83D\uDCE6","players":{"min":1,"max":8},"estimatedPlayTime":{"min":5,"max":20}},{"id":"richii-mahjong","name":"리치 마작","emoji":"\uD83C\uDC04","players":{"min":3,"max":4},"estimatedPlayTime":{"min":30,"max":60}},{"id":"custom","name":"직접 입력","emoji":"\uD83D\uDCDD","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":120}}]')},6628:function(e){"use strict";e.exports=JSON.parse('[{"handle":"havana723","type":"staff","solves":0},{"handle":"shiftpsh","type":"staff","solves":0},{"handle":"HYEA","type":"staff","solves":0},{"handle":"YouYoung","type":"staff","solves":0},{"handle":"chansol","type":"staff","solves":0},{"handle":"16silver","type":"staff","solves":0},{"handle":"crescent_h","type":"staff","solves":0},{"handle":"pichulia","type":"staff","solves":0},{"handle":"ai4youej","type":"contestant","solves":5},{"handle":"alsrb0504","type":"contestant","solves":6},{"handle":"alswnssl0528","type":"contestant","solves":6},{"handle":"amylo","type":"contestant","solves":5},{"handle":"arietis","type":"contestant","solves":5},{"handle":"asd122032","type":"contestant","solves":4},{"handle":"asdhugh1","type":"contestant","solves":5},{"handle":"atopi0827","type":"contestant","solves":2},{"handle":"Aunps","type":"contestant","solves":2},{"handle":"BothEarRim","type":"contestant","solves":5},{"handle":"cdg0228","type":"contestant","solves":4},{"handle":"cjh970422","type":"contestant","solves":4},{"handle":"djeleanor2","type":"contestant","solves":2},{"handle":"dlalsdn1009","type":"contestant","solves":1},{"handle":"duwang2580","type":"contestant","solves":4},{"handle":"haruki291sa","type":"contestant","solves":6},{"handle":"hijkl2e","type":"contestant","solves":9},{"handle":"hjroh0315","type":"contestant","solves":6},{"handle":"hopedream","type":"contestant","solves":3},{"handle":"ji0513ji","type":"contestant","solves":3},{"handle":"jk410","type":"contestant","solves":7},{"handle":"jshyun912","type":"contestant","solves":3},{"handle":"kimingan","type":"contestant","solves":1},{"handle":"kongum","type":"contestant","solves":3},{"handle":"lambda","type":"contestant","solves":6},{"handle":"maple0118","type":"contestant","solves":1},{"handle":"martinok1103","type":"contestant","solves":7},{"handle":"mjhmjh1104","type":"contestant","solves":7},{"handle":"nowdragon12","type":"contestant","solves":3},{"handle":"nunebin","type":"contestant","solves":5},{"handle":"nureongi0214","type":"contestant","solves":3},{"handle":"old_man_and_the_sea","type":"contestant","solves":6},{"handle":"pani","type":"contestant","solves":6},{"handle":"plan_pt","type":"contestant","solves":3},{"handle":"pridom1118","type":"contestant","solves":3},{"handle":"qwerasdfzxcl","type":"contestant","solves":4},{"handle":"riroan","type":"contestant","solves":6},{"handle":"ruykun","type":"contestant","solves":6},{"handle":"sangchoo1201","type":"contestant","solves":5},{"handle":"sch314","type":"contestant","solves":5},{"handle":"seawon0808","type":"contestant","solves":6},{"handle":"shoo040113","type":"contestant","solves":7},{"handle":"smiley07","type":"contestant","solves":5},{"handle":"star7sss","type":"contestant","solves":1},{"handle":"sunso514","type":"contestant","solves":5},{"handle":"swyjs","type":"contestant","solves":3},{"handle":"tankgewehr","type":"contestant","solves":4},{"handle":"tlsdydaud1","type":"contestant","solves":7},{"handle":"toycartoon","type":"contestant","solves":3},{"handle":"utilforever","type":"contestant","solves":4},{"handle":"vyu","type":"contestant","solves":5},{"handle":"w8385","type":"contestant","solves":5},{"handle":"wanderkind","type":"contestant","solves":2},{"handle":"wapas","type":"contestant","solves":7},{"handle":"wizardrabbit","type":"contestant","solves":7},{"handle":"wnstjd732","type":"contestant","solves":6}]')}},function(e){e.O(0,[169,759,770,294,754,860,89,667,139,744],function(){return e(e.s=9319)}),_N_E=e.O()}]);