(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{777:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(6006),i=t(9497),a=t.n(i),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,m=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&h(e,t,n[t]);if(c)for(var t of c(n))d.call(n,t)&&h(e,t,n[t]);return e},f=(e,n)=>m(e,o(n)),p=(e,n)=>{var t={};for(var r in e)u.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))0>n.indexOf(r)&&d.call(e,r)&&(t[r]=e[r]);return t},y=(e,n,t)=>{let i=(0,r.forwardRef)((n,i)=>{var{color:a="currentColor",size:l=24,stroke:m=2,children:o}=n,c=p(n,["color","size","stroke","children"]);return(0,r.createElement)("svg",x(f(x({ref:i},s),{width:l,height:l,stroke:a,strokeWidth:m,className:`tabler-icon tabler-icon-${e}`}),c),[...t.map(([e,n])=>(0,r.createElement)(e,n)),...o||[]])});return i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},i.displayName=`${n}`,i}},8941:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(777).Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},9789:function(e,n,t){Promise.resolve().then(t.bind(t,5688))},5688:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(2805),i=t(9268),a=t(1835),s=t(6006),l=t(3383),m=t(4945),o=t(3133);let c=e=>{switch(e){case 1:return"rgb(236, 154, 0)";case 2:return"rgb(67, 95, 122)";case 3:return"rgb(173, 86, 0)";default:return"inherit"}},u=(e,n,t)=>Math.min(Math.max(e,n),t),d=e=>u(e,2,10),h=e=>u(e,1,300);var x=t(1555),f=t(3335),p=t(8941);function y(){let e=(0,r._)(["\n  display: flex;\n  gap: 0 8px;\n"]);return y=function(){return e},e}function j(){let e=(0,r._)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  gap: 0 16px;\n"]);return j=function(){return e},e}let g=[5,10,15,20,25,30,40,50,60,90,120,150,180,210,240,270,300].map(e=>({label:"".concat(e,"분"),value:e})),v=f.default.div(y()),b=f.default.div(j());function P(){let[e,n]=(0,s.useState)(3),[t,r]=(0,s.useReducer)((e,n)=>g.reduce((e,t)=>Math.abs(t.value-n)<Math.abs(e.value-n)?t:e,g[0]).value,120),[u,f]=(0,s.useReducer)((e,t)=>{let i=l.find(e=>e.id===t);return n(Math.round((d(i.players.max)+d(i.players.min))/2)),r(h(i.estimatedPlayTime.max)),t},"terraforming-mars"),{players:y,estimatedPlayTime:j,name:P}=l.find(e=>e.id===u),T=Math.max(2,Math.min(10,y.min)),O=Math.max(2,Math.min(10,y.max));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.T,{h:64}),(0,i.jsxs)(a.W2,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(o.Z,{value:u,onChange:e=>{let{value:n}=e;return f(n)},style:{width:"12em"}}),(0,i.jsx)(a.Ph,{items:Array(O-T+1).fill(void 0).map((e,n)=>({value:n+T})),value:e,render:e=>{let{value:n}=e;return"".concat(n,"인")},onChange:e=>{let{value:t}=e;return n(t)},style:{width:"6em"}}),(0,i.jsx)(a.Ph,{items:g,value:t,render:e=>{let{label:n}=e;return n},onChange:e=>{let{value:n}=e;return r(n)},style:{width:"8em"}})]}),(0,i.jsx)(a.T,{h:16}),"custom"!==u&&(0,i.jsx)("div",{children:(0,i.jsxs)(a.Jd,{description:!0,children:[(0,i.jsx)(p.Z,{})," ",P,"의 적정 플레이 인원은"," ",T===O?(0,i.jsxs)(i.Fragment,{children:[T,"명"]}):(0,i.jsxs)(i.Fragment,{children:[T," – ",O,"명"]}),"이며, 예상 플레이 시간은 ",j.min," –"," ",j.max,"분입니다."]})}),(0,i.jsx)("div",{children:(0,i.jsxs)(a.Jd,{description:!0,children:[(0,i.jsx)(p.Z,{})," 아래는 예상 점수이며, 실제 점수는 실제 플레이 시간을 기준으로 계산합니다."]})}),(0,i.jsx)(a.T,{h:32}),(0,i.jsxs)(a.iA,{fullWidth:!0,children:[(0,i.jsx)(a.ss,{children:(0,i.jsxs)(a.X2,{children:[(0,i.jsx)(a.bL,{style:{width:"20%"},children:"순위"}),(0,i.jsx)(a.bL,{style:{width:"80%"},children:"점수"})]})}),(0,i.jsx)(a.RM,{children:Array(e).fill(void 0).map((n,r)=>(0,i.jsxs)(a.X2,{style:{color:c(r+1)},children:[(0,i.jsx)(a.bL,{children:(0,i.jsxs)(a.Jd,{tabular:!0,children:[r+1,"위"]})}),(0,i.jsx)(a.bL,{style:{textAlign:"right"},children:(0,i.jsxs)(b,{children:[(0,i.jsxs)(a.Jd,{tabular:!0,description:!0,children:[(0,i.jsxs)(a.Jd,{tabular:!0,style:{fontFeatureSettings:"'frac' 1",fontSize:"1.4em",verticalAlign:"-5%",fontWeight:400/Math.sqrt(1.4)},children:[(0,x.WR)(e,r+1).toLocaleString("en-US"),"⁄",(0,x.Ab)(e).toLocaleString("en-US")]})," ","\xd7 ",(0,i.jsx)(m.Z,{value:e})," \xd7"," ",(0,i.jsx)(m.Z,{value:t})," \xd7 10 ="]}),(0,i.jsx)(a.Jd,{tabular:!0,h2:!0,"no-margin":!0,as:"span",children:(0,i.jsx)(m.Z,{value:(0,x.Gs)(e,t,r+1)})})]})})]},r))})]})]}),(0,i.jsx)(a.T,{h:64})]})}},4945:function(e,n,t){"use strict";var r=t(9268),i=t(3196),a=t(4355),s=t(182),l=t(6006);let m=e=>e.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),o=e=>{let{value:n,format:t=m}=e,o=(0,l.useRef)(null),c=(0,a.c)(0);return(0,i.F)(()=>{(0,s.j)(c,n,{duration:.5,ease:"easeOut"})},[n],[c]),(0,l.useEffect)(()=>c.onChange(e=>{o.current&&(o.current.textContent=t(e))}),[t,c]),(0,r.jsx)("span",{ref:o,children:t(n)})};n.Z=o},6649:function(e,n,t){"use strict";var r=t(2805),i=t(9268),a=t(3335),s=t(1527);function l(){let e=(0,r._)(["\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.05em 0 0.1em;\n  vertical-align: -0.25em;\n"]);return l=function(){return e},e}let m=e=>"https://twemoji.maxcdn.com/v/latest/72x72/".concat(e,".png"),o=a.default.img(l()),c=e=>{let{emoji:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{src:m(s.Z.convert.toCodePoint(n)),alt:n})})};n.Z=c},3133:function(e,n,t){"use strict";var r=t(2805),i=t(9268),a=t(3383),s=t(3335),l=t(1835),m=t(6649);function o(){let e=(0,r._)(["\n  display: inline-block;\n  text-align: center;\n  width: 2em;\n"]);return o=function(){return e},e}let c=s.default.span(o()),u=a.map(e=>({label:e.name,value:e.id,emoji:e.emoji})).sort((e,n)=>"custom"===e.value?1:"custom"===n.value?-1:e.label.localeCompare(n.label)),d=e=>{let{value:n,onChange:t,...r}=e;return(0,i.jsx)(l.Ph,{items:u,value:n,render:e=>{let{label:n,emoji:t}=e;return(0,i.jsxs)("span",{children:[(0,i.jsx)(c,{children:(0,i.jsx)(m.Z,{emoji:t})}),n]})},onChange:e=>t(e),...r})};n.Z=d},3196:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});var r=t(6006);let i=(e,n,t)=>{let i=(0,r.useRef)();return i.current&&n.every((e,n)=>{var t;return Object.is(e,null===(t=i.current)||void 0===t?void 0:t[n])})||(i.current=[...n,...t]),(0,r.useEffect)(e,i.current)}},1555:function(e,n,t){"use strict";t.d(n,{Ab:function(){return i},Gs:function(){return a},WR:function(){return r}});let r=(e,n)=>2*e+1-n,i=e=>e*e+e*(e+1)/2,a=(e,n,t)=>10*Math.ceil(r(e,t)/i(e)*n*e)},7611:function(e,n,t){"use strict";var r=t(6054);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,a,s){if(s!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},9497:function(e,n,t){e.exports=t(7611)()},6054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2805:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{_:function(){return r}})},3383:function(e){"use strict";e.exports=JSON.parse('[{"id":"terraforming-mars","name":"테라포밍 마스","emoji":"\uD83C\uDF0D","players":{"min":1,"max":5},"estimatedPlayTime":{"min":90,"max":120}},{"id":"sakura-arms","name":"벚꽃 내리는 시대에 결투를","emoji":"\uD83C\uDF38","players":{"min":2,"max":2},"estimatedPlayTime":{"min":10,"max":20}},{"id":"halli-galli","name":"할리갈리","emoji":"\uD83C\uDF4B","players":{"min":2,"max":7},"estimatedPlayTime":{"min":5,"max":15}},{"id":"chess","name":"체스","emoji":"♟","players":{"min":2,"max":2},"estimatedPlayTime":{"min":30,"max":60}},{"id":"crazy-time","name":"크레이지 타임","emoji":"\uD83D\uDD70","players":{"min":3,"max":14},"estimatedPlayTime":{"min":20,"max":30}},{"id":"dominion","name":"도미니언","emoji":"\uD83C\uDFF0","players":{"min":2,"max":4},"estimatedPlayTime":{"min":30,"max":40}},{"id":"splendor","name":"스플렌더","emoji":"\uD83D\uDC8E","players":{"min":2,"max":4},"estimatedPlayTime":{"min":20,"max":30}},{"id":"yacht-dice","name":"요트 다이스","emoji":"\uD83C\uDFB2","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":20}},{"id":"no-thanks","name":"노 땡스!","emoji":"\uD83D\uDE45‍♂️","players":{"min":3,"max":7},"estimatedPlayTime":{"min":20,"max":30}},{"id":"uno","name":"UNO","emoji":"\uD83C\uDCCF","players":{"min":2,"max":10},"estimatedPlayTime":{"min":20,"max":30}},{"id":"bang","name":"뱅!","emoji":"\uD83D\uDD2B","players":{"min":4,"max":7},"estimatedPlayTime":{"min":20,"max":40}},{"id":"zenga","name":"젠가","emoji":"\uD83D\uDCE6","players":{"min":1,"max":8},"estimatedPlayTime":{"min":5,"max":20}},{"id":"richii-mahjong","name":"리치 마작","emoji":"\uD83C\uDC04","players":{"min":3,"max":4},"estimatedPlayTime":{"min":30,"max":60}},{"id":"custom","name":"직접 입력","emoji":"\uD83D\uDCDD","players":{"min":1,"max":20},"estimatedPlayTime":{"min":5,"max":120}}]')}},function(e){e.O(0,[169,454,759,146,347,667,139,744],function(){return e(e.s=9789)}),_N_E=e.O()}]);