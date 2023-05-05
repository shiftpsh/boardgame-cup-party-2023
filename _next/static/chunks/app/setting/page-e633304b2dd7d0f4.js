(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{2166:function(e,s,n){"use strict";n.d(s,{Z:function(){return r}});var r=(0,n(777).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},6976:function(e,s,n){Promise.resolve().then(n.bind(n,9658))},9658:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return b}});var r=n(9268),i=n(402),l=n(3328),t=n(1835),d=n(4890),a=n(6006),c=n(475),h=n(5873),u=n(1313),x=n(2805),o=n(3335);function j(){let e=(0,x._)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n"]);return j=function(){return e},e}function m(){let e=(0,x._)(["\n  display: flex;\n  align-items: center;\n  gap: 0 16px;\n"]);return m=function(){return e},e}let v=o.default.img(j()),f=o.default.div(m()),g=e=>{let{adminUIDs:s,users:n}=e,i=(0,c.Ds)(),[x,o]=(0,a.useState)(""),j=(0,a.useMemo)(()=>new Set(s),[s]),m=(0,a.useMemo)(()=>{let e=x.toLocaleLowerCase();return Array.from(n.values()).filter(s=>!j.has(s.uid)&&!!(s.email.toLocaleLowerCase().includes(e)||s.name.toLocaleLowerCase().includes(e)||s.uid.toLocaleLowerCase().includes(e)))},[j,x,n]),g=async e=>{try{await (0,d.t8)((0,d.iH)(l.db,"admin_emails/"+e),!0),i.enqueue({message:"관리자를 추가했습니다.",severity:"success"})}catch(e){console.error(e),e instanceof u.ZR?i.enqueue({message:"관리자 추가에 실패했습니다: ".concat(e.message),severity:"error"}):i.enqueue({message:"관리자 추가에 실패했습니다.",severity:"error"})}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.qo,{fullWidth:!0,placeholder:"이메일, 이름, UID, ...",value:x,onChange:e=>o(e.target.value)}),(0,r.jsx)(t.Jd,{h3:!0,children:"검색 결과"}),0===m.length?(0,r.jsx)(t.at,{children:"검색 결과가 없습니다."}):(0,r.jsx)(t.xJ,{children:(0,r.jsxs)(t.iA,{fullWidth:!0,children:[(0,r.jsx)(t.ss,{children:(0,r.jsxs)(t.X2,{children:[(0,r.jsx)(t.bL,{width:"60%",children:"이름"}),(0,r.jsx)(t.bL,{width:"20%",children:"UID"}),(0,r.jsx)(t.bL,{width:"20%",children:"추가"})]})}),(0,r.jsx)(t.RM,{children:m.map(e=>{let{uid:s}=e;return(0,r.jsxs)(t.X2,{children:[(0,r.jsx)(t.bL,{style:{verticalAlign:"middle"},children:(0,r.jsxs)(f,{children:[(0,r.jsx)(v,{src:e.photoURL,alt:e.name+"의 프로필 사진"}),(0,r.jsxs)("div",{children:[e.name,(0,r.jsx)("br",{}),(0,r.jsx)(t.Jd,{description:!0,small:!0,children:e.email})]})]})}),(0,r.jsx)(t.bL,{style:{verticalAlign:"middle"},children:(0,r.jsx)(t.Jd,{small:!0,children:s})}),(0,r.jsx)(t.bL,{children:(0,r.jsx)(t.zx,{fullWidth:!0,transparent:!0,onClick:()=>g(s),children:(0,r.jsx)(h.Z,{})})})]},s)})})]})})]})};var p=n(2166);let y=e=>{let{adminUIDs:s,users:n}=e,a=(0,i.aC)(),h=(0,c.Ds)(),x=async e=>{try{await (0,d.Od)((0,d.iH)(l.db,"admin_emails/"+e)),h.enqueue({message:"관리자를 삭제했습니다.",severity:"success"})}catch(e){console.error(e),e instanceof u.ZR?h.enqueue({message:"관리자 삭제에 실패했습니다: ".concat(e.message),severity:"error"}):h.enqueue({message:"관리자 삭제에 실패했습니다.",severity:"error"})}};return s.length?(0,r.jsx)(t.xJ,{children:(0,r.jsxs)(t.iA,{fullWidth:!0,children:[(0,r.jsx)(t.ss,{children:(0,r.jsxs)(t.X2,{children:[(0,r.jsx)(t.bL,{width:"60%",children:"이름"}),(0,r.jsx)(t.bL,{width:"20%",children:"UID"}),(0,r.jsx)(t.bL,{width:"20%",children:"삭제"})]})}),(0,r.jsx)(t.RM,{children:s.map(e=>{var s,i;let l=n.get(e);return(0,r.jsxs)(t.X2,{children:[l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.bL,{style:{verticalAlign:"middle"},children:(0,r.jsxs)(f,{children:[(0,r.jsx)(v,{src:l.photoURL,alt:l.name+"의 프로필 사진"}),(0,r.jsxs)("div",{children:[l.name,(null==a?void 0:null===(s=a.user)||void 0===s?void 0:s.uid)===e&&(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(t.Jd,{description:!0,children:"(나)"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Jd,{description:!0,small:!0,children:l.email})]})]})}),(0,r.jsx)(t.bL,{style:{verticalAlign:"middle"},children:(0,r.jsx)(t.Jd,{small:!0,children:e})})]}):(0,r.jsx)(t.bL,{colSpan:2,children:(0,r.jsx)(t.Jd,{description:!0,children:e})}),(0,r.jsx)(t.bL,{children:(null==a?void 0:null===(i=a.user)||void 0===i?void 0:i.uid)!==e&&(0,r.jsx)(t.zx,{fullWidth:!0,transparent:!0,onClick:()=>x(e),children:(0,r.jsx)(p.Z,{})})})]},e)})})]})}):(0,r.jsx)(t.at,{children:"관리자가 없습니다."})};function b(){let e=(0,i.aC)(),[s,n]=(0,a.useState)([]),[c,h]=(0,a.useState)(new Map);return((0,a.useEffect)(()=>{if(!e.user)return;let s=(0,d.jM)((0,d.iH)(l.db,"admin_emails"),e=>{let s=[];e.forEach(e=>{e.key&&s.push(e.key)}),n(s)});return s},[e.user]),(0,a.useEffect)(()=>{let e=(0,d.jM)((0,d.iH)(l.db,"users"),e=>{let s=new Map;e.forEach(e=>{e.key&&s.set(e.key,{...e.val(),uid:e.key})}),h(s)});return e},[]),e.isAdmin)?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(t.W2,{children:[(0,r.jsx)(t.T,{h:32}),(0,r.jsx)(t.Jd,{h2:!0,children:"관리자 목록"}),(0,r.jsx)(y,{adminUIDs:s,users:c}),(0,r.jsx)(t.T,{h:32}),(0,r.jsx)(t.Jd,{h2:!0,children:"새 관리자 추가"}),(0,r.jsx)(g,{adminUIDs:s,users:c}),(0,r.jsx)(t.T,{h:32})]})}):(0,r.jsx)(t.W2,{children:(0,r.jsx)(t.at,{children:"관리자가 아닙니다."})})}}},function(e){e.O(0,[169,759,770,697,520,604,402,667,139,744],function(){return e(e.s=6976)}),_N_E=e.O()}]);