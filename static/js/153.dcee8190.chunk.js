"use strict";(self.webpackChunkfor_aleann_lab=self.webpackChunkfor_aleann_lab||[]).push([[153],{1427:function(e,t,n){var r=n(1087),s=n(9126),a=n(7689),o=n(6856),c=n(8820),l=n(7577),i=n(184);t.Z=function(e){var t=e.savedJobs,n=e.jobs,u=e.onJobSave,f=e.onJobDelete,d=(0,a.TH)();return(0,i.jsx)("ul",{children:n.map((function(e){var n=e.id,a=e.name,x=e.title,h=e.address,m=e.pictures,v=e.createdAt;return(0,i.jsx)("li",{size:600,className:"font-sans font-family:Proxima Nova py-6 px-6 mb-2 border rounded-lg shadow-slate-50 ",children:(0,i.jsxs)("div",{className:"mx-auto flex flex-cols-4 flex-row justify-between",children:[(0,i.jsx)("div",{className:"shrink-0",children:(0,i.jsx)("img",{className:"rounded-full w-20 h-20 mr-6",src:"".concat(m[0],"?random=").concat(Math.floor(1e5*Math.random())),alt:""})}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(r.rU,{to:"/jobs/".concat(n),state:{from:d},children:(0,i.jsx)("h3",{className:"cursor-pointer font-bold text-2xl w-[750px] text-[#3A4562] hover:text-violet-300",children:x})}),(0,i.jsx)("p",{className:"text-[#878D9D] text-lg",children:a}),(0,i.jsxs)("p",{className:"text-[#878D9D] text-lg",children:[(0,i.jsx)(o.vcr,{className:"inline mr-1 fill-[#D8D8D8] text-2xl"}),h]})]}),(0,i.jsx)("div",{className:"w-20",children:(0,i.jsx)(c.pHD,{})}),(0,i.jsxs)("div",{className:"flex flex-col justify-between mx-auto w-34 shrink-0",children:[(0,i.jsx)("button",{className:"self-end",onClick:t.some((function(e){return e.id===n}))?function(){return f(n)}:function(){return u({id:n,name:a,title:x,address:h,pictures:m,createdAt:v})},children:t.some((function(e){return e.id===n}))?(0,i.jsx)(s.vw0,{}):(0,i.jsx)(s.flH,{className:"text-2xl mx-4 text-[#3A4562] hover:scale-125 "})}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{className:"text-[#878D9D] text-lg justify-between",children:["Posted \xa0",(0,l.Z)(Date.parse(v))," ago"]})})]})]})},n)}))})}},4153:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(9343),s=n(1427),a=n(4165),o=n(5861),c=n(885),l=n(2791),i=n(175),u=n(184),f=function(e){var t=e.savedJobs,n=e.onJobSave,f=e.onJobDelete,d=function(){var e=(0,l.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],s=(0,l.useState)(null),u=(0,c.Z)(s,2),f=u[0],d=u[1],x=(0,l.useState)(!1),h=(0,c.Z)(x,2),m=h[0],v=h[1];return(0,l.useEffect)((function(){v(!0);var e=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.L)();case 3:t=e.sent,r(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),d(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{jobs:n,error:f,isLoading:m}}(),x=d.jobs;return(0,u.jsx)(r.$0,{children:(0,u.jsx)(r.W2,{children:(0,u.jsx)(s.Z,{savedJobs:t,jobs:x,onJobSave:n,onJobDelete:f})})})}},175:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(4165),s=n(5861),a=n(2388);a.Z.defaults.baseURL="https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";var o=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},7577:function(e,t){t.Z=function(e){"object"!==typeof e&&(e=new Date(e));var t,n=Math.floor((new Date-e)/1e3),r=Math.floor(n/31536e3);return r>=1?t="year":(r=Math.floor(n/2592e3))>=1?t="month":(r=Math.floor(n/86400))>=1?t="day":(r=Math.floor(n/3600))>=1?t="hour":(r=Math.floor(n/60))>=1?t="minute":(r=n,t="second"),(r>1||0===r)&&(t+="s"),r+" "+t}}}]);
//# sourceMappingURL=153.dcee8190.chunk.js.map