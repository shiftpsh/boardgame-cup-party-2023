(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6853],{4910:function(e,n,t){Promise.resolve().then(t.bind(t,2531))},2531:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var i=t(2805),a=t(9268),l=t(3133),s=t(1835),r=t(6006),d=t(6628),m=t(2665);let c=e=>{let{start:n}=e,t=(0,m.Z)(n),i=Math.floor(t/1e3);return(0,a.jsx)(a.Fragment,{children:[Math.floor(i/60).toString().padStart(2,"0"),(i%60).toString().padStart(2,"0")].join(":")})};var h=t(6649),o=t(5002),u=t(6994),x=t(475),j=t(3328),f=t(9519),p=t(3335),y=t(6212),g=t(8941),v=t(2166),b=t(5873),w=t(9545),T=t(1313),L=t(4890),C=t(5846),P=t.n(C),A=t(6462);function S(){let e=(0,i._)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]);return S=function(){return e},e}let Z=p.default.div(S());function k(){let e=(0,o.aC)(),n=(0,x.Ds)(),{games:t}=(0,u.ek)(),[i,m]=(0,r.useState)("terraforming-mars"),[p,C]=(0,r.useState)([]),[S,k]=(0,r.useState)(""),[J,W]=(0,r.useState)(!1),z=(0,r.useRef)(null),_=(0,r.useMemo)(()=>t.filter(e=>!("finishedAt"in e)).sort((e,n)=>n.startedAt-e.startedAt),[t]),D=(0,f.r)(i),E=(0,r.useMemo)(()=>{let e=S.trim().toLocaleLowerCase();return e.length?d.filter(n=>{if(p.find(e=>e===n.handle))return!1;let t=_.find(e=>e.players.includes(n.handle));return!t&&!!n.handle.toLocaleLowerCase().includes(e)}).sort((n,t)=>{let i=n.handle.toLocaleLowerCase().startsWith(e),a=t.handle.toLocaleLowerCase().startsWith(e);return i==a?n.handle.localeCompare(t.handle):i?-1:1}):[]},[_,p,S]),F=(0,r.useMemo)(()=>{let e=[];p.length<2&&e.push("플레이어 수(".concat(p.length,"명)가 2명 미만")),p.length<D.players.min&&e.push("플레이어 수(".concat(p.length,"명)가 ").concat(D.name," 권장 최소 플레이어 수(").concat(D.players.min,"명)보다 적음")),p.length>D.players.max&&e.push("플레이어 수(".concat(p.length,"명)가 ").concat(D.name," 권장 최대 플레이어 수(").concat(D.players.max,"명)보다 많음")),_.find(e=>e.gameId===i)&&e.push("진행 중인 ".concat(D.name," 게임이 있음")),p.forEach(n=>{let t=_.find(e=>e.players.includes(n));t&&e.push("".concat(n,"님이 이미 ").concat((0,f.r)(t.gameId).name," 게임을 진행 중"))});let n=p.map(e=>{let n=t.filter(e=>"finishedAt"in e).filter(n=>n.players.includes(e)).sort((e,n)=>n.startedAt-e.startedAt);return n.length>0?{player:e,lastGame:n[0],uuid:n[0].uuid}:{player:e,lastGame:null,uuid:null}});n.forEach(n=>{if(!n.lastGame)return;let t=n.lastGame;t.gameId===i&&e.push("".concat(n.player,"님이 직전에 ").concat(D.name,"를 플레이함"))});let a=new Set(n.map(e=>e.uuid).filter(e=>null!==e));if(1===a.size){var l;let i=a.values().next().value,s=t.find(e=>e.uuid===i),r=new Set(null!==(l=null==s?void 0:s.players)&&void 0!==l?l:[]),d=new Set(n.map(e=>e.player));if(r.size===d.size){let n=new Set(Array.from(d).filter(e=>!r.has(e)));0===n.size&&e.push("이 플레이어 집합은 직전에 동일한 플레이어 집합으로 ".concat(D.name,"를 플레이함"))}}return e},[D.name,D.players.max,D.players.min,i,t,_,p]),I=e=>{if(!z.current)return;let n=d.find(n=>n.handle===e);n&&(C(n=>n.find(n=>n===e)?n:[...n,e]),k(""),z.current.focus())},M=e=>{C(n=>n.filter(n=>n!==e))},N=async()=>{if(J)return;W(!0);let e=(0,A.Z)();try{await (0,L.t8)((0,L.iH)(j.db,"games/".concat(e)),{uuid:e,startedAt:Date.now(),gameId:i,players:p}),n.enqueue({message:"게임이 추가되었습니다.",severity:"success"}),C([])}catch(e){e instanceof T.ZR?n.enqueue({message:"게임 추가에 실패했습니다: ".concat(e.message),severity:"error"}):n.enqueue({message:"게임 추가에 실패했습니다.",severity:"error"})}W(!1)};return e.isAdmin?(0,a.jsxs)(s.W2,{children:[(0,a.jsx)(s.T,{h:64}),(0,a.jsx)(s.Jd,{h2:!0,as:"h1",children:"진행 중인 게임"}),0===_.length?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.at,{children:"진행 중인 게임이 없습니다."})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.xJ,{children:(0,a.jsxs)(s.iA,{fullWidth:!0,style:{tableLayout:"fixed"},padding:"dense",children:[(0,a.jsx)(s.ss,{children:(0,a.jsxs)(s.X2,{children:[(0,a.jsx)(s.bL,{width:"20%",children:"게임"}),(0,a.jsx)(s.bL,{width:"40%",children:"플레이어"}),(0,a.jsx)(s.bL,{width:"20%",children:"시간"}),(0,a.jsx)(s.bL,{width:"20%",children:"수정"})]})}),(0,a.jsx)(s.RM,{children:_.map(e=>(0,a.jsxs)(s.X2,{children:[(0,a.jsx)(s.bL,{children:(0,a.jsxs)(s.Jd,{ellipsis:!0,style:{verticalAlign:"middle"},children:[(0,a.jsx)(h.Z,{emoji:(0,f.r)(e.gameId).emoji})," ",(0,f.r)(e.gameId).name]})}),(0,a.jsx)(s.bL,{children:(0,a.jsx)(s.Jd,{ellipsis:!0,style:{verticalAlign:"middle"},children:e.players.join(", ")})}),(0,a.jsx)(s.bL,{style:{textAlign:"center"},children:(0,a.jsx)(s.Jd,{tabular:!0,children:(0,a.jsx)(c,{start:e.startedAt})})}),(0,a.jsx)(s.bL,{padding:"none",children:(0,a.jsx)(P(),{href:"/add/commit?uuid=".concat(e.uuid),children:(0,a.jsx)(s.zx,{fullWidth:!0,transparent:!0,children:(0,a.jsx)(y.Z,{})})})})]},e.uuid))})]})})}),(0,a.jsx)(s.T,{h:64}),(0,a.jsx)(s.Jd,{h2:!0,as:"h1",children:"새 게임 추가"}),(0,a.jsx)(s.Jd,{h4:!0,as:"h2",children:"게임"}),(0,a.jsx)(l.Z,{value:i,onChange:e=>{let{value:n}=e;return m(n)},fullWidth:!0}),(0,a.jsx)(s.T,{h:8}),(0,a.jsxs)(s.Jd,{h4:!0,as:"h2",children:["플레이어",(0,a.jsxs)(s.Jd,{description:!0,style:{fontWeight:"normal"},children:[(0,a.jsx)(g.Z,{})," ",p.length,"명"]})]}),(0,a.jsx)(s.qo,{ref:z,placeholder:"유저 검색",value:S,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),E.length>=1&&I(E[0].handle))},onChange:e=>{let{target:{value:n}}=e;return k(n)},fullWidth:!0}),(0,a.jsx)(s.T,{h:16}),(0,a.jsx)(Z,{children:E.slice(0,10).map(e=>(0,a.jsxs)(s.zx,{onClick:()=>I(e.handle),children:[e.handle,"staff"===e.type&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)(s.Jd,{description:!0,children:"(스탭)"})]})]},e.handle))}),(0,a.jsx)(s.T,{h:16}),0===p.length?(0,a.jsx)(s.at,{children:"게임을 입력하지 않았습니다."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.iA,{fullWidth:!0,padding:"dense",children:[(0,a.jsx)(s.ss,{children:(0,a.jsxs)(s.X2,{children:[(0,a.jsx)(s.bL,{children:"핸들"}),(0,a.jsx)(s.bL,{children:"삭제"})]})}),(0,a.jsx)(s.RM,{children:p.map(e=>(0,a.jsxs)(s.X2,{children:[(0,a.jsx)(s.bL,{children:e}),(0,a.jsx)(s.bL,{padding:"none",children:(0,a.jsx)(s.zx,{onClick:()=>M(e),fullWidth:!0,transparent:!0,children:(0,a.jsx)(v.Z,{})})})]},e))})]}),(0,a.jsx)(s.T,{h:32}),(0,a.jsxs)(s.zx,{fullWidth:!0,disabled:J||0!==F.length,onClick:N,children:[(0,a.jsx)(b.Z,{})," 게임 시작 (",D.name,", ",p.length,"명)"]}),0!==F.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.T,{h:16}),F.map(e=>(0,a.jsx)("div",{children:(0,a.jsxs)(s.Jd,{error:!0,children:[(0,a.jsx)(w.Z,{})," ",e]})},e)),(0,a.jsx)(s.T,{h:16}),(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)(s.Jd,{description:!0,small:!0,style:{cursor:"pointer",textDecoration:"underline"},onClick:N,children:"경고 무시하고 등록하기"})})]})]}),(0,a.jsx)(s.T,{h:64})]}):(0,a.jsx)(s.W2,{children:(0,a.jsx)(s.at,{children:"관리자가 아닙니다."})})}},6649:function(e,n,t){"use strict";var i=t(2805),a=t(9268),l=t(3335),s=t(1527);function r(){let e=(0,i._)(["\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.05em 0 0.1em;\n  vertical-align: -0.25em;\n"]);return r=function(){return e},e}let d=e=>"https://twemoji.maxcdn.com/v/latest/72x72/".concat(e,".png"),m=l.default.img(r()),c=e=>{let{emoji:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m,{src:d(s.Z.convert.toCodePoint(n)),alt:n})})};n.Z=c},3133:function(e,n,t){"use strict";var i=t(2805),a=t(9268),l=t(3383),s=t(3335),r=t(1835),d=t(6649);function m(){let e=(0,i._)(["\n  display: inline-block;\n  text-align: center;\n  width: 2em;\n"]);return m=function(){return e},e}let c=s.default.span(m()),h=l.map(e=>({label:e.name,value:e.id,emoji:e.emoji})).sort((e,n)=>"custom"===e.value?1:"custom"===n.value?-1:e.label.localeCompare(n.label)),o=e=>{let{value:n,onChange:t,...i}=e;return(0,a.jsx)(r.Ph,{items:h,value:n,render:e=>{let{label:n,emoji:t}=e;return(0,a.jsxs)("span",{children:[(0,a.jsx)(c,{children:(0,a.jsx)(d.Z,{emoji:t})}),n]})},onChange:e=>t(e),...i})};n.Z=o},2665:function(e,n,t){"use strict";var i=t(6006);let a=e=>{let[n,t]=(0,i.useState)(Date.now()),[a,l]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>{t(Date.now())},1e3);return()=>{clearInterval(e)}},[]),(0,i.useEffect)(()=>{e instanceof Date?l(n-e.getTime()):l(n-e)},[n,e]),a};n.Z=a},9519:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var i=t(3383);let a=e=>i.find(n=>n.id===e)},3383:function(e){"use strict";e.exports=JSON.parse('[{"id":"terraforming-mars","name":"테라포밍 마스","emoji":"\uD83C\uDF0D","players":{"min":1,"max":5},"estimatedPlayTime":{"min":90,"max":120}},{"id":"sakura-arms","name":"벚꽃 내리는 시대에 결투를","emoji":"\uD83C\uDF38","players":{"min":2,"max":2},"estimatedPlayTime":{"min":10,"max":20}},{"id":"halli-galli","name":"할리갈리","emoji":"\uD83C\uDF4B","players":{"min":2,"max":7},"estimatedPlayTime":{"min":5,"max":15}},{"id":"chess","name":"체스","emoji":"♟","players":{"min":2,"max":2},"estimatedPlayTime":{"min":30,"max":60}},{"id":"crazy-time","name":"크레이지 타임","emoji":"\uD83D\uDD70","players":{"min":3,"max":14},"estimatedPlayTime":{"min":20,"max":30}},{"id":"dominion","name":"도미니언","emoji":"\uD83C\uDFF0","players":{"min":2,"max":4},"estimatedPlayTime":{"min":30,"max":40}},{"id":"splendor","name":"스플렌더","emoji":"\uD83D\uDC8E","players":{"min":2,"max":4},"estimatedPlayTime":{"min":20,"max":30}},{"id":"yacht-dice","name":"요트 다이스","emoji":"\uD83C\uDFB2","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":20}},{"id":"no-thanks","name":"노 땡스!","emoji":"\uD83D\uDE45‍♂️","players":{"min":3,"max":7},"estimatedPlayTime":{"min":20,"max":30}},{"id":"uno","name":"UNO","emoji":"\uD83C\uDCCF","players":{"min":2,"max":10},"estimatedPlayTime":{"min":20,"max":30}},{"id":"bang","name":"뱅!","emoji":"\uD83D\uDD2B","players":{"min":4,"max":7},"estimatedPlayTime":{"min":20,"max":40}},{"id":"zenga","name":"젠가","emoji":"\uD83D\uDCE6","players":{"min":1,"max":8},"estimatedPlayTime":{"min":5,"max":20}},{"id":"richii-mahjong","name":"리치 마작","emoji":"\uD83C\uDC04","players":{"min":3,"max":4},"estimatedPlayTime":{"min":30,"max":60}},{"id":"custom","name":"직접 입력","emoji":"\uD83D\uDCDD","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":120}}]')}},function(e){e.O(0,[3169,8454,759,4770,5697,9146,3229,5846,9432,5066,2667,8139,1744],function(){return e(e.s=4910)}),_N_E=e.O()}]);