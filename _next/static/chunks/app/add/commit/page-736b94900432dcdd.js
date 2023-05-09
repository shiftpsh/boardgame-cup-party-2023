(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7037],{608:function(e,n,i){Promise.resolve().then(i.bind(i,1356))},1356:function(e,n,i){"use strict";i.r(n);var a=i(2805),t=i(9268),s=i(1835),r=i(6006),l=i(6628),m=i(4945),d=i(6649),c=i(5002),u=i(6994),o=i(475),x=i(2665),h=i(3328),j=i(9519),f=i(1555),p=i(3335),g=i(8941),y=i(2166),b=i(5873),v=i(1313),P=i(4890),T=i(6008),k=i(3785);function A(){let e=(0,a._)(["\n  display: block;\n"]);return A=function(){return e},e}function Z(){let e=(0,a._)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr 1fr;\n"]);return Z=function(){return e},e}let _=(0,p.default)(s.RM)(A()),w=(0,p.default)(s.X2)(Z()),D=e=>{let n=(0,c.aC)(),i=(0,o.Ds)(),{games:a}=(0,u.ek)(),p=(0,T.useSearchParams)(),A=p.get("uuid")||"",[Z,D]=(0,r.useState)([]),[L,C]=(0,r.useState)(!1),E=(0,r.useMemo)(()=>a.find(e=>e.uuid===A),[a,A]),J=(0,j.r)((null==E?void 0:E.gameId)||"custom"),S=(0,x.Z)((null==E?void 0:E.startedAt)||Date.now()),W=E&&"finishedAt"in E?E.finishedAt-E.startedAt:S,F=Math.floor(W/1e3/60),I=e=>{D(n=>n.filter(n=>n.handle!==e).map((e,n)=>({...e,rank:n+1})))},M=e=>{let{destination:n,source:i}=e;n&&n.index!==i.index&&D(e=>{let a=[...e],[t]=a.splice(i.index,1);return a.splice(n.index,0,t),a.map((e,n)=>({...e,rank:n+1}))})},N=async()=>{if(L||!E)return;C(!0);let e=Date.now();try{await (0,P.t8)((0,P.iH)(h.db,"games/".concat(E.uuid)),{...E,finishedAt:e,durationMinutes:F,result:Z}),i.enqueue({message:"게임 결과가 추가되었습니다.",severity:"success"})}catch(e){e instanceof v.ZR?i.enqueue({message:"게임 결과 추가에 실패했습니다: ".concat(e.message),severity:"error"}):i.enqueue({message:"게임 결과 추가에 실패했습니다.",severity:"error"})}C(!1)};return((0,r.useEffect)(()=>{if(!E){D([]);return}if("result"in E)D(E.result);else{let e=(null==E?void 0:E.players)||[];D(e.map(e=>l.find(n=>n.handle===e)).filter(e=>void 0!==e).map((e,n)=>({handle:e.handle,rank:n+1,exclude:"staff"===e.type})))}},[E,null==E?void 0:E.players]),n.isAdmin)?E?(0,t.jsxs)(s.W2,{children:[(0,t.jsx)(s.T,{h:64}),(0,t.jsx)(s.Jd,{h4:!0,as:"h2",children:"게임"}),(0,t.jsxs)("span",{children:[(0,t.jsx)(d.Z,{emoji:J.emoji})," ",J.name]}),(0,t.jsx)(s.T,{h:16}),(0,t.jsx)(s.Jd,{h4:!0,as:"h2",children:"플레이 시간"}),F,"분 ",Math.floor(W/1e3)%60,"초",(0,t.jsx)(s.T,{h:16}),(0,t.jsxs)(s.Jd,{h4:!0,as:"h2",children:["게임 결과"," ",(0,t.jsxs)(s.Jd,{description:!0,style:{fontWeight:"normal"},children:[(0,t.jsx)(g.Z,{})," ",Z.length,"명"]})]}),(0,t.jsx)(s.T,{h:16}),0===Z.length?(0,t.jsx)(s.at,{children:"게임 결과를 입력하지 않았습니다."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.iA,{fullWidth:!0,padding:"dense",children:[(0,t.jsx)(s.ss,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(s.bL,{children:"순위"}),(0,t.jsx)(s.bL,{children:"핸들"}),(0,t.jsx)(s.bL,{children:"점수"}),(0,t.jsx)(s.bL,{children:"삭제"})]})}),(0,t.jsx)(k.Z5,{onDragEnd:M,children:(0,t.jsx)(k.bK,{droppableId:"list",children:(e,n)=>(0,t.jsxs)(_,{ref:e.innerRef,...e.droppableProps,children:[Z.map(e=>(0,t.jsx)(k._l,{draggableId:e.handle,index:e.rank-1,children:(n,i)=>(0,t.jsxs)(w,{ref:n.innerRef,...n.draggableProps,...n.dragHandleProps,style:{...n.draggableProps.style,...n.draggableProps.style},children:[(0,t.jsx)(s.bL,{style:{textAlign:"center"},children:(0,t.jsxs)(s.Jd,{tabular:!0,style:{verticalAlign:"middle"},children:[e.rank,"위"]})}),(0,t.jsx)(s.bL,{children:(0,t.jsx)(s.Jd,{ellipsis:!0,description:e.exclude,style:{verticalAlign:"middle"},children:e.handle})}),(0,t.jsx)(s.bL,{style:{textAlign:"right"},children:(0,t.jsx)(s.Jd,{tabular:!0,style:{verticalAlign:"middle"},children:(0,t.jsx)(m.Z,{value:e.exclude?0:(0,f.Gs)(Z.length,F,e.rank)})})}),(0,t.jsx)(s.bL,{padding:"none",children:(0,t.jsx)(s.zx,{onClick:()=>I(e.handle),fullWidth:!0,transparent:!0,children:(0,t.jsx)(y.Z,{})})})]})},e.handle)),e.placeholder]})})})]}),(0,t.jsx)(s.T,{h:32}),(0,t.jsxs)(s.zx,{fullWidth:!0,disabled:L,onClick:N,children:[(0,t.jsx)(b.Z,{})," 기록 (",J.name,", ",F,"분, ",Z.length,"명)"]})]}),(0,t.jsx)(s.T,{h:64})]}):(0,t.jsx)(s.W2,{children:(0,t.jsx)(s.at,{children:"게임을 찾을 수 없습니다."})}):(0,t.jsx)(s.W2,{children:(0,t.jsx)(s.at,{children:"관리자가 아닙니다."})})};n.default=D},4945:function(e,n,i){"use strict";var a=i(9268),t=i(3196),s=i(4355),r=i(182),l=i(6006);let m=e=>e.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),d=e=>{let{value:n,format:i=m}=e,d=(0,l.useRef)(null),c=(0,s.c)(0);return(0,t.F)(()=>{(0,r.j)(c,n,{duration:.5,ease:"easeOut"})},[n],[c]),(0,l.useEffect)(()=>c.onChange(e=>{d.current&&(d.current.textContent=i(e))}),[i,c]),(0,a.jsx)("span",{ref:d,children:i(n)})};n.Z=d},6649:function(e,n,i){"use strict";var a=i(2805),t=i(9268),s=i(3335),r=i(1527);function l(){let e=(0,a._)(["\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.05em 0 0.1em;\n  vertical-align: -0.25em;\n"]);return l=function(){return e},e}let m=e=>"https://twemoji.maxcdn.com/v/latest/72x72/".concat(e,".png"),d=s.default.img(l()),c=e=>{let{emoji:n}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d,{src:m(r.Z.convert.toCodePoint(n)),alt:n})})};n.Z=c},2665:function(e,n,i){"use strict";var a=i(6006);let t=e=>{let[n,i]=(0,a.useState)(Date.now()),[t,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{i(Date.now())},1e3);return()=>{clearInterval(e)}},[]),(0,a.useEffect)(()=>{e instanceof Date?s(n-e.getTime()):s(n-e)},[n,e]),t};n.Z=t},9519:function(e,n,i){"use strict";i.d(n,{r:function(){return t}});var a=i(3383);let t=e=>a.find(n=>n.id===e)},3383:function(e){"use strict";e.exports=JSON.parse('[{"id":"terraforming-mars","name":"테라포밍 마스","emoji":"\uD83C\uDF0D","players":{"min":1,"max":5},"estimatedPlayTime":{"min":90,"max":120}},{"id":"sakura-arms","name":"벚꽃 내리는 시대에 결투를","emoji":"\uD83C\uDF38","players":{"min":2,"max":2},"estimatedPlayTime":{"min":10,"max":20}},{"id":"halli-galli","name":"할리갈리","emoji":"\uD83C\uDF4B","players":{"min":2,"max":7},"estimatedPlayTime":{"min":5,"max":15}},{"id":"chess","name":"체스","emoji":"♟","players":{"min":2,"max":2},"estimatedPlayTime":{"min":30,"max":60}},{"id":"crazy-time","name":"크레이지 타임","emoji":"\uD83D\uDD70","players":{"min":3,"max":14},"estimatedPlayTime":{"min":20,"max":30}},{"id":"dominion","name":"도미니언","emoji":"\uD83C\uDFF0","players":{"min":2,"max":4},"estimatedPlayTime":{"min":30,"max":40}},{"id":"splendor","name":"스플렌더","emoji":"\uD83D\uDC8E","players":{"min":2,"max":4},"estimatedPlayTime":{"min":20,"max":30}},{"id":"yacht-dice","name":"요트 다이스","emoji":"\uD83C\uDFB2","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":20}},{"id":"no-thanks","name":"노 땡스!","emoji":"\uD83D\uDE45‍♂️","players":{"min":3,"max":7},"estimatedPlayTime":{"min":20,"max":30}},{"id":"uno","name":"UNO","emoji":"\uD83C\uDCCF","players":{"min":2,"max":10},"estimatedPlayTime":{"min":20,"max":30}},{"id":"bang","name":"뱅!","emoji":"\uD83D\uDD2B","players":{"min":4,"max":7},"estimatedPlayTime":{"min":20,"max":40}},{"id":"zenga","name":"젠가","emoji":"\uD83D\uDCE6","players":{"min":1,"max":8},"estimatedPlayTime":{"min":5,"max":20}},{"id":"richii-mahjong","name":"리치 마작","emoji":"\uD83C\uDC04","players":{"min":3,"max":4},"estimatedPlayTime":{"min":30,"max":60}},{"id":"custom","name":"직접 입력","emoji":"\uD83D\uDCDD","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":120}}]')}},function(e){e.O(0,[3169,8454,759,4770,5697,6133,9146,3229,3347,7257,5066,2667,8139,1744],function(){return e(e.s=608)}),_N_E=e.O()}]);