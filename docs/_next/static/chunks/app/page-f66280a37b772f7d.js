(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9039:function(A,e,t){Promise.resolve().then(t.t.bind(t,984,23)),Promise.resolve().then(t.bind(t,6894)),Promise.resolve().then(t.bind(t,7810)),Promise.resolve().then(t.bind(t,1955)),Promise.resolve().then(t.bind(t,6552)),Promise.resolve().then(t.bind(t,797)),Promise.resolve().then(t.bind(t,7185)),Promise.resolve().then(t.bind(t,6485)),Promise.resolve().then(t.bind(t,5720)),Promise.resolve().then(t.bind(t,605))},2696:function(A,e,t){"use strict";t.d(e,{Z:function(){return ActionButton}});var s=t(5769);function ActionButton(A){let{hide:e=!1,className:t="",onClick:n,children:i}=A;return(0,s.jsx)("div",{onClick:n,className:"transition-transform duration-1000 ".concat(e?"scale-0":"scale-100"," w-12 h-12 ").concat(n?"cursor-pointer":""," flex flex-col justify-center items-center ").concat(t),children:i})}},6894:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Details}});var s=t(5769),n=t(3658),i=t(4740),a=t(2696);function Contents(A){let{children:e,className:t=""}=A;return(0,s.jsx)("div",{className:"space-y-4 p-10 text-lg text-justify ".concat(t),children:e})}var l=t(8688),c=t(4122),r=t.n(c);function CustomLink(A){let{href:e,className:t="",external:n=function(A){try{return new URL(A),!0}catch(A){return!1}}(e),children:i}=A;return(0,s.jsx)("span",{className:t,children:(0,s.jsx)(r(),{href:e,children:(0,s.jsx)("span",{...n?{target:"_blank",rel:"noreferrer"}:{},children:i})})})}function Item(A){let{name:e,href:t,icon:n}=A;return(0,s.jsx)(CustomLink,{href:t,className:"font-bold hover:underline decoration-inherit h-8",children:(0,s.jsxs)("span",{className:"inline-flex space-x-2 items-center",children:[n,(0,s.jsx)("span",{children:e})]})})}function LinkList(A){let{links:e,className:t="",tag:i="div"}=A,[a,...l]=e,c=[(0,n.createElement)(Item,{...a,key:"0"})];for(let[A,e]of l.entries())c.push((0,s.jsx)("span",{className:"select-none",children:"/"},"sep-".concat(A))),c.push((0,n.createElement)(Item,{...e,key:A+1}));return(0,s.jsx)(i,{className:"flex flex-wrap space-x-4 uppercase no-underline text-sm decoration-2 underline-offset-8 ".concat(t),children:c})}function Nav(A){let{className:e=""}=A;return(0,s.jsx)(LinkList,{links:l.t,className:e,tag:"nav"})}function Section(A){let{name:e,headerClass:t="",navClass:n="",expanded:i=!1,children:a}=A;return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row",id:e,children:[(0,s.jsxs)("div",{className:"h-screen w-full transition-all duration-1000 grow md:sticky top-0 flex flex-col p-6 justify-between items-center ".concat(i?"md:basis-1/4":"md:basis-1/2"," ").concat(t),children:[(0,s.jsx)("div",{}),(0,s.jsx)("h2",{className:"font-section text-8xl text-center capitalize",children:e}),(0,s.jsx)("div",{children:(0,s.jsx)(Nav,{className:"hidden md:block ".concat(n)})})]}),(0,s.jsx)("div",{className:"md:min-h-screen w-full transition-all duration-1000 md:basis-1/2 grow",children:a})]})}function DetailsDisplay(A){let{name:e,title:t,subtitle:i,img:a,expanded:l,expand:c,contents:r}=A,o=(0,n.useCallback)(()=>{c(),location.hash="#".concat(e)},[e,c]);return(0,s.jsxs)("div",{className:!1===l?"hidden":"",id:e,children:[(0,s.jsxs)("div",{className:"group relative transition-all duration-1000 ".concat(l?"h-96":"h-screen"," w-full flex flex-col justify-center items-center text-white font-details overflow-clip ").concat(null===l?"cursor-pointer":""),onClick:null===l?o:void 0,children:[(0,s.jsx)("div",{className:"w-full h-full absolute"}),(0,s.jsx)("div",{className:"w-full h-full absolute bg-cover bg-center -z-10 group-hover:scale-110 transition-all duration-1000",style:{backgroundImage:"url(".concat(a,")")}}),(0,s.jsxs)("div",{className:"text-center capitalize",children:[(0,s.jsx)("div",{className:"text-4xl font-bold",children:t}),(0,s.jsx)("div",{className:"text-2xl",children:i})]})]}),(0,s.jsx)(Contents,{className:l?"block":"hidden",children:r})]})}function Details(A){let{name:e,items:t,headerClass:l="",navClass:c=""}=A,[r,o]=(0,n.useState)(null),u=(0,n.useCallback)(()=>{o(null),location.hash=""},[o]),d=null!==r;(0,n.useEffect)(()=>{for(let A=0;A<t.length;++A)if("#".concat(t[A].name)===location.hash){o(A);break}},[t]);let h=[];for(let[A,e]of t.entries()){let t=(0,n.useCallback)(()=>o(A),[o,A]);h.push((0,n.createElement)(DetailsDisplay,{...e,expanded:null===r?null:r===A,expand:t,collapse:u,key:A}))}return(0,s.jsx)(Section,{name:e,headerClass:l,navClass:c,expanded:d,children:(0,s.jsxs)("div",{className:"w-full relative",children:[(0,s.jsx)("div",{className:"sticky top-0 h-0 z-10",children:(0,s.jsx)(a.Z,{hide:!d,onClick:u,className:"ml-auto md:ml-0 -translate-x-6 translate-y-6 md:translate-y-24 bg-violet-200",children:(0,s.jsx)(i.FU5,{})})}),h]})})}},7810:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return MobileNav}});var s=t(5769),n=t(3658),i=t(4740),a=t(8688),l=t(2696);function LinkItem(A){let{name:e,href:t,close:n}=A;return(0,s.jsx)("a",{href:t,onClick:n,className:"uppercase font-bold",children:e})}function MobileNav(){let[A,e]=(0,n.useState)(!0),t=(0,n.useCallback)(()=>e(!A),[A,e]),c=(0,n.useCallback)(()=>e(!0),[e]),r=A?"hidden":"",o=a.t.map((A,e)=>(0,n.createElement)(LinkItem,{...A,close:c,key:e})),u=A?(0,s.jsx)(i.xXU,{}):(0,s.jsx)(i.FU5,{});return(0,s.jsxs)("div",{className:"fixed z-10 w-full md:hidden",children:[(0,s.jsx)(l.Z,{onClick:t,className:"absolute m-6 z-50 bg-gray-800 text-white",children:u}),(0,s.jsx)("div",{className:"absolute h-screen w-full z-40 flex flex-col justify-center items-center space-y-2 bg-white text-xl ".concat(r),children:o})]})}},1955:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return StaticImage}});var s=t(5769),n=t(8154),i=t.n(n);function staticLoader(A){let{src:e}=A;return e}function StaticImage(A){let{alt:e,...t}=A;return(0,s.jsx)(i(),{alt:e,...t,loader:staticLoader,unoptimized:!0})}},8688:function(A,e,t){"use strict";t.d(e,{t:function(){return s}});let s=[{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}]},6552:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/cdc-W7L6KCaNfRU-unsplash.e81c4ff2.jpg",height:2550,width:3300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADBCEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEQA/AJ5p3V21FlrKshAHB5ERKVjtvYFignTP/9k=",blurWidth:8,blurHeight:6}},797:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/d3-dag.4495a4c1.png",height:960,width:732,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAARVBMVEVMaXGDR7xmP5ix4mSD4Zgxi+5yYL7tUpF/53YtzMJ882qrZZutS7PFwU76mD9RbtYz3aRcfLg7/3r4Roz8XW/UhmvcU5NRsiU+AAAAF3RSTlMAGgpSEUtLURtPTxBQQ1IsWl5JKGJfNGImdB8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicBcGFAQAgDMCwosMd/j+VBGBNBeg4AmQfLRSljYUnBOMop6bkaHKr77TMFj4iMQFuwRGnZwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},7185:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/jon-r8AFUpRp0J0-unsplash.a2885183.jpg",height:3106,width:1639,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBAUREjFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwC2vmcAYGmBlmwwjfONjSPO0RFWLWTdjDP/2Q==",blurWidth:4,blurHeight:8}},6485:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logo.dfb03ba2.svg",height:34,width:41,blurWidth:0,blurHeight:0}},5720:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/matteo-catanese-tr7PoBH0Aow-unsplash.650ec0ae.jpg",height:3655,width:5483,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAcEAABBAMBAAAAAAAAAAAAAAAEAAECEQMFEjH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxEi/9oADAMBAAIRAxEAPwCEmj6nQkGYQozy4Wjz3K29a7akRE1drtumPdwwCz//2Q==",blurWidth:8,blurHeight:5}},605:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/zoltan-tasi-XM40OT9lIFM-unsplash.97b5c6d2.jpg",height:3183,width:4773,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIDBBIUQf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECAxH/2gAMAwEAAhEDEQA/AJXZkLnjSqopRbe3oALtrfUCT//Z",blurWidth:8,blurHeight:5}}},function(A){A.O(0,[91,171,35,4,744],function(){return A(A.s=9039)}),_N_E=A.O()}]);