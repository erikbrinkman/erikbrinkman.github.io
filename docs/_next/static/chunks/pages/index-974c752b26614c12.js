(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2973:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4598)}])},4598:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(8731),a=n(1562),s=n.n(a),l=n(7423);function o(e){var t=e.children;return(0,r.jsx)("code",{className:"block whitespace-pre overflow-x-auto p-6 bg-gray-600 text-white",children:t})}function c(e){var t=e.children,n=e.className,a=void 0===n?"":n;return(0,r.jsx)("div",{className:"space-y-4 p-10 text-lg text-justify ".concat(a),children:t})}var u=n(921),h=n(5937);function d(e){var t=e.hide,n=void 0!==t&&t,a=e.className,i=void 0===a?"":a,s=e.onClick,l=e.children,o=n?"scale-0":"scale-100",c=s?"cursor-pointer":"";return(0,r.jsx)("div",{onClick:s,className:"transition-transform duration-1000 ".concat(o," w-12 h-12 ").concat(c," flex flex-col justify-center items-center ").concat(i),children:l})}var f=[{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],m=n(130),p=n.n(m);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}function j(e){var t=e.href,n=e.className,a=void 0===n?"":n,i=e.external,s=void 0===i?function(e){try{return new URL(e),!0}catch(t){return!1}}(t):i,l=e.children,o=s?{target:"_blank",rel:"noreferrer"}:{};return(0,r.jsx)("span",{className:a,children:(0,r.jsx)(p(),{href:t,children:(0,r.jsx)("a",b({},o,{children:l}))})})}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){if(Array.isArray(e))return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function N(e,t){return v(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(o){l=!0,a=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||A(e,t)||w()}function O(e){return v(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e,i)||w()}function A(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function P(e){var t=e.name,n=e.href,a=e.icon;return(0,r.jsx)(j,{href:n,className:"font-bold hover:underline decoration-inherit h-8",children:(0,r.jsxs)("span",{className:"inline-flex space-x-2 items-center",children:[a,(0,r.jsx)("span",{children:t})]})})}function C(e){var t=e.links,n=e.className,a=void 0===n?"":n,i=e.tag,s=void 0===i?"div":i,l=O(t),o=l[0],c=l.slice(1),h=[(0,u.createElement)(P,k({},o,{key:"0"}))],d=!0,f=!1,m=void 0;try{for(var p,x=c.entries()[Symbol.iterator]();!(d=(p=x.next()).done);d=!0){var b=N(p.value,2),j=b[0],g=b[1];h.push((0,r.jsx)("span",{className:"select-none",children:"/"},"sep-".concat(j))),h.push((0,u.createElement)(P,k({},g,{key:j+1})))}}catch(y){f=!0,m=y}finally{try{d||null==x.return||x.return()}finally{if(f)throw m}}var v=s;return(0,r.jsx)(v,{className:"flex flex-wrap space-x-4 uppercase no-underline text-sm decoration-2 underline-offset-8 ".concat(a),children:h})}function S(e){var t=e.className,n=void 0===t?"":t;return(0,r.jsx)(C,{links:f,className:n,tag:"nav"})}function I(e){var t=e.name,n=e.headerClass,a=void 0===n?"":n,i=e.navClass,s=void 0===i?"":i,l=e.expanded,o=void 0!==l&&l,c=e.children,u=o?"md:basis-1/4":"md:basis-1/2";return(0,r.jsxs)("div",{className:"flex flex-col md:flex-row",id:t,children:[(0,r.jsxs)("div",{className:"h-screen w-full transition-all duration-1000 grow md:sticky top-0 flex flex-col p-6 justify-between items-center ".concat(u," ").concat(a),children:[(0,r.jsx)("div",{}),(0,r.jsx)("h2",{className:"font-section text-8xl text-center capitalize",children:t}),(0,r.jsx)("div",{children:(0,r.jsx)(S,{className:"hidden md:block ".concat(s)})})]}),(0,r.jsx)("div",{className:"md:min-h-screen w-full transition-all duration-1000 md:basis-1/2 grow",children:c})]})}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(o){l=!0,a=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e){var t=e.name,n=e.title,a=e.subtitle,i=e.img,s=e.expanded,l=e.expand,o=e.contents,h=(0,u.useCallback)((function(){l(),location.hash="#".concat(t)}),[t,l]),d=!1===s?"hidden":"",f=s?"block":"hidden",m=s?"h-96":"h-screen",p=null===s?"cursor-pointer":"";return(0,r.jsxs)("div",{className:d,id:t,children:[(0,r.jsxs)("div",{className:"group relative transition-all duration-1000 ".concat(m," w-full flex flex-col justify-center items-center text-white font-details overflow-clip ").concat(p),onClick:null===s?h:void 0,children:[(0,r.jsx)("div",{className:"w-full h-full absolute"}),(0,r.jsx)("div",{className:"w-full h-full absolute bg-cover bg-center -z-10 group-hover:scale-110 transition-all duration-1000",style:{backgroundImage:"url(".concat(i,")")}}),(0,r.jsxs)("div",{className:"text-center capitalize",children:[(0,r.jsx)("div",{className:"text-4xl font-bold",children:n}),(0,r.jsx)("div",{className:"text-2xl",children:a})]})]}),(0,r.jsx)(c,{className:f,children:o})]})}function _(e){var t=e.name,n=e.items,a=e.headerClass,i=void 0===a?"":a,s=e.navClass,l=void 0===s?"":s,o=(0,u.useState)(null),c=o[0],f=o[1],m=(0,u.useCallback)((function(){f(null),location.hash=""}),[f]),p=null!==c;(0,u.useEffect)((function(){for(var e=0;e<n.length;++e)if("#".concat(n[e].name)===location.hash){f(e);break}}),[n]);var x=[],b=!0,j=!1,g=void 0;try{for(var v,y=function(e,t){var n=D(t.value,2),r=n[0],a=n[1],i=(0,u.useCallback)((function(){return f(r)}),[f,r]);x.push((0,u.createElement)(U,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}({},a,{expanded:null===c?null:c===r,expand:i,collapse:m,key:r})))},w=n.entries()[Symbol.iterator]();!(b=(v=w.next()).done);b=!0)y(0,v)}catch(k){j=!0,g=k}finally{try{b||null==w.return||w.return()}finally{if(j)throw g}}return(0,r.jsx)(I,{name:t,headerClass:i,navClass:l,expanded:p,children:(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)("div",{className:"sticky top-0 h-0 z-10",children:(0,r.jsx)(d,{hide:!p,onClick:m,className:"ml-auto md:ml-0 -translate-x-6 translate-y-6 md:translate-y-24 bg-violet-200",children:(0,r.jsx)(h.FU5,{})})}),x]})})}var T=n(1741),q=n.n(T);function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function G(e){return e.src}function L(e){var t=e.alt,n=F(e,["alt"]);return(0,r.jsx)(q(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}({alt:t},n,{loader:G,unoptimized:!0}))}var R="/_next/static/media/logo.dfb03ba2.svg";function Y(e){var t=e.clipPath;return(0,r.jsx)(L,{alt:"logo",src:R,width:"300",height:"300",style:{clipPath:t}})}function W(e){var t=e.parallax,n=void 0===t?0:t,a=e.clipPath;return(0,r.jsx)("div",{className:"absolute w-full h-full flex flex-col justify-center items-center",style:{transform:"translate3d(".concat(-8.5*n,"px, 0, ").concat(-n,"px) scale(").concat(n+1,")")},children:(0,r.jsx)("div",{children:(0,r.jsx)(Y,{clipPath:a})})})}function B(){return(0,r.jsxs)("div",{className:"w-full h-screen relative bg-violet-200",style:{transformStyle:"preserve-3d"},children:[(0,r.jsx)(W,{clipPath:"polygon(0 0, 55% 0, 55% 18%, 0 18%)",parallax:-.25}),(0,r.jsx)(W,{clipPath:"polygon(0 40%, 50% 40%, 50% 57%, 0 57%)",parallax:-.8}),(0,r.jsx)(W,{clipPath:"polygon(34% 18%, 55% 18%, 55% 100%, 34% 100%)",parallax:-.1}),(0,r.jsx)(W,{clipPath:"polygon(0 80%, 34% 80%, 34% 100%, 0 100%)",parallax:-.6}),(0,r.jsx)(W,{clipPath:"polygon(100% 0, 55% 0, 55% 30%, 100% 30%)",parallax:-.8}),(0,r.jsx)(W,{clipPath:"polygon(100% 30%, 55% 30%, 55% 70%, 100% 70%)",parallax:-.2}),(0,r.jsx)(W,{clipPath:"polygon(100% 70%, 55% 70%, 55% 100%, 100% 100%)",parallax:-.65})]})}function Q(){return(0,r.jsxs)("div",{className:"w-full h-screen relative bg-gray-600",children:[(0,r.jsx)("div",{className:"w-full h-screen absolute flex flex-col justify-center items-center blur opacity-50",children:(0,r.jsx)(L,{alt:"blurred logo",src:R,width:"400",height:"400"})}),(0,r.jsxs)("div",{className:"w-full h-screen absolute flex flex-col justify-between items-center p-6 text-white",children:[(0,r.jsx)("div",{className:"uppercase font-bold text-sm"}),(0,r.jsx)("h1",{className:"relative font-section font-bold text-8xl text-center max-w-[90%] break-words",children:"Erik Brinkman"}),(0,r.jsx)("div",{children:(0,r.jsx)(S,{className:"decoration-violet-200"})})]})]})}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e){var t=e.name,n=e.href,a=e.close;return(0,r.jsx)("a",{href:n,onClick:a,className:"uppercase font-bold",children:t})}function K(){var e=(0,u.useState)(!0),t=e[0],n=e[1],a=(0,u.useCallback)((function(){return n(!t)}),[t,n]),i=(0,u.useCallback)((function(){return n(!0)}),[n]),s=t?"hidden":"",l=f.map((function(e,t){return(0,u.createElement)(X,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}({},e,{close:i,key:t}))})),o=t?(0,r.jsx)(h.xXU,{}):(0,r.jsx)(h.FU5,{});return(0,r.jsxs)("div",{className:"fixed z-10 w-full md:hidden",children:[(0,r.jsx)(d,{onClick:a,className:"absolute m-6 z-50 bg-gray-800 text-white",children:o}),(0,r.jsx)("div",{className:"absolute h-screen w-full z-40 flex flex-col justify-center items-center space-y-2 bg-white text-xl ".concat(s),children:l})]})}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){var t=e.href,n=e.children;return(0,r.jsx)(j,{href:t,className:"text-violet-400 hover:underline underline-offset-4 decoration-violet-200",children:n})}var H=[{name:"d3dag",title:"D3 DAG",subtitle:"DAG layout library",img:"/_next/static/media/cdc-W7L6KCaNfRU-unsplash.e81c4ff2.jpg",contents:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"D3 DAG is is an open source typescript library for rendering directed acyclic graphs using a few different layout methods. It's based around the layered dag methodology from Sugiyama."}),(0,r.jsx)("p",{children:"Using D3 Dag you can render DAGs like:"}),(0,r.jsx)("div",{className:"max-w-xs mx-auto",children:(0,r.jsx)(L,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){J(e,t,n[t])}))}return e}({},{src:"/_next/static/media/d3-dag.4495a4c1.png",height:960,width:732,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAuUlEQVR42mMAgfSrMxhBtM/vqqCUrj1xOeanZRiQgfnVXX6+D5dEhD5eJAUWKAvdItgYtTYs6vCZCMeTF7jAgvNjd8TMC9sgFsawgOfIzdTw43fyIRL3QqYY/0mr8QWxD32NlF73qjVIfNoLP4Yd8Tsi/oaUx+w5VByY/z8zsOd5i7937atQhn+TQ8Ieh6/0vzWzKfnpGQbrlLxrbgmlt7QZvi3xiP80NwJs7je3idofg6YFMTAwMAAAku5K8tl3zjsAAAAASUVORK5CYII="},{alt:"example dag"}))}),(0,r.jsx)(C,{links:[{name:"NPM",href:"https://www.npmjs.com/package/d3-dag"},{name:"Github",href:"https://github.com/erikbrinkman/d3-dag"}],className:"decoration-violet-200 justify-center"})]})},{name:"mechanism",title:"Empirical Mechanism Design",subtitle:"EC 2017",img:"/_next/static/media/matteo-catanese-tr7PoBH0Aow-unsplash.650ec0ae.jpg",contents:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Several recent authors have advocated for financial markets to move from continuous clearing to discrete or batched clearing, as a way to defeat the latency arms race: the never-ending quest for small advantages in time to access markets. How frequently should such a modern batch auction clear? We conduct a systematic simulation-based investigation on the relationship between clearing frequency and metrics of market quality, such as allocative efficiency, comparing the performance of discrete and continuous auction mechanisms under empirical equilibrium behavior of all participating traders. In effect we perform empirical mechanism design on frequent batch auctions. We find that in a wide array of environments, equilibrium efficiency is improved for small positive intervals but falls off dramatically when there are too few opportunities to trade. The result is a large range of batch frequencies that are near optimally efficient; this range is more pronounced in thick markets."}),(0,r.jsxs)("div",{className:"flex justify-around uppercase",children:[(0,r.jsx)("span",{children:"E. Brinkman"}),(0,r.jsx)("span",{children:"M. P. Wellman"})]}),(0,r.jsx)(C,{links:[{name:"PDF",href:"https://dl.acm.org/authorize?N30521"},{name:"Video",href:"https://youtu.be/26djyL_5HsI"}],className:"decoration-violet-200 justify-center"})]})},{name:"repub",title:"reMarkable ePub",subtitle:"ePub render for reMarkable",img:"/_next/static/media/jon-r8AFUpRp0J0-unsplash.a2885183.jpg",contents:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"rePub is a chrome extension that provides website to epub conversion specifically tailored to viewing on remarkable. In includes several improvements over the standard reMarkable extension for saving websites:"}),(0,r.jsxs)("ul",{className:"list-[square] pl-4",children:[(0,r.jsx)("li",{children:"It saves images, making many articles much more detailed. This extension also provides options to tweak the uploaded images, making them much more readable."}),(0,r.jsx)("li",{children:"It uses the page capture api, allowing it to require fewer permissions than the default Read on reMarkable extension."}),(0,r.jsx)("li",{children:"It provides many other options like adjusting the default justification or margins."}),(0,r.jsx)("li",{children:"It's open source so it can be improved and modified if it's not working as desired."})]}),(0,r.jsx)(C,{links:[{name:"Chrome",href:"https://chrome.google.com/webstore/detail/repub/blkjpagbjaekkpojgcgdapmikoaolpbl"},{name:"Github",href:"https://github.com/hafaio/repub"}],className:"decoration-violet-200 justify-center"})]})},{name:"asciimath",title:"Ascii Math Unicode",subtitle:"Render Unicode Math",img:"/_next/static/media/zoltan-tasi-XM40OT9lIFM-unsplash.97b5c6d2.jpg",contents:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"AsciiMath Unicode is a chrome extension for converting AsciiMath into its formatted unicode representation. This representation is easier to read and can still be sent as plain text in almost any format without otherwise requiring advanced rendering."}),(0,r.jsx)("p",{children:"This extension will turn the somewhat legible expression"}),(0,r.jsx)(o,{children:"sum_k phi(k)^2"}),(0,r.jsx)("p",{children:"into"}),(0,r.jsx)(o,{children:"\u2211\u2096 \u03d5(k)\xb2"}),(0,r.jsx)("p",{children:"Which is closer to the mathematical rendering, but also pure unicode and easily transferred between rendering environments."}),(0,r.jsx)("p",{children:"This extension uses a custom AsciiMath parser that allows it to preserve white space, which all other parsers inherently strip."}),(0,r.jsx)(C,{links:[{name:"Chrome",href:"https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab"},{name:"Github",href:"https://github.com/hafaio/ascii-math-unicode"}],className:"decoration-violet-200 justify-center"})]})},{name:"statscli",title:"Stats CLI",subtitle:"Command Line Statistics",img:"/_next/static/media/daniele-levis-pelusi-e87DcJU5XeA-unsplash.a89a8b1f.jpg",contents:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Stats CLI is a rust based command line utility for quickly summarizing streams of numbers represented in ascii. It pairs well with general streaming unix utilities."}),(0,r.jsx)("p",{children:"Install with cargo install stats-cli which allows you to do things like:"}),(0,r.jsx)(o,{children:"$ seq 1 100000 | stats\ncount   100000\nmin     1\nmax     100000\nmean    50000.5\nstddev  28867.65779668774"}),(0,r.jsx)("p",{children:"or"}),(0,r.jsx)(o,{children:'seq 1 100000 | stats -p 25 --json | jq .\n{\n  "25%": 25000.75\n}'}),(0,r.jsx)(C,{links:[{name:"Crates.io",href:"https://crates.io/crates/stats-cli"},{name:"Github",href:"https://github.com/erikbrinkman/stats"}],className:"decoration-violet-200 justify-center"})]})}];function $(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Erik Brinkman"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(K,{}),(0,r.jsxs)("div",{className:"h-screen overflow-y-scroll scroll-smooth overflow-x-clip",style:{perspective:"1px"},children:[(0,r.jsx)(Q,{}),(0,r.jsx)(I,{name:"about",headerClass:"bg-violet-200",navClass:"decoration-white",children:(0,r.jsxs)(c,{children:[(0,r.jsxs)("p",{children:["I am a research scientist at"," ",(0,r.jsx)(Z,{href:"https://meta.com",children:"Meta"})," studying the fairness of recommender systems. I'm particularly interested in the underlying incentives of recommender systems, and the processes that create them. In 2022 I switched to fairness after spending the past four years studying people representation and candidate generation at Meta. Before joining Meta I completed my PhD in Computer Science at the"," ",(0,r.jsx)(Z,{href:"https://umich.edu",children:"University of Michigan"})," ","from 2012 to 2018. There I was advised by"," ",(0,r.jsx)(Z,{href:"https://strategicreasoning.org/michael-p-wellman/",children:"Michael Wellman"}),"."]}),(0,r.jsx)("p",{children:"My research interests include the incentives and dynamics in complex systems. This relates to embedding learning, user representation, fairness, recommender systems as markets, and general learning."}),(0,r.jsx)(C,{links:[{name:"Resume",href:"https://erikbrinkman.github.io/resume"},{name:"Curriculum Vitae",href:"https://erikbrinkman.github.io/resume/cv"}],className:"decoration-violet-200 justify-center"})]})}),(0,r.jsx)(_,{name:"projects",items:H,headerClass:"text-gray-800 bg-white",navClass:"decoration-violet-200"}),(0,r.jsx)(I,{name:"contact",headerClass:"text-white bg-gray-800",navClass:"decoration-violet-200",children:(0,r.jsxs)(c,{children:[(0,r.jsx)("p",{children:"You can find more information about me via any of the following services:"}),(0,r.jsx)(C,{links:[{name:"Github",href:"https://github.com/erikbrinkman",icon:(0,r.jsx)(l.pZu,{})},{name:"Google Scholar",href:"https://scholar.google.com/citations?user=4CerxXxb7KAC",icon:(0,r.jsx)(l.S4z,{})},{name:"email",href:"mailto:erik.brinkman@gmail.com",icon:(0,r.jsx)(l.IeF,{})},{name:"LinkedIn",href:"https://www.linkedin.com/in/erikbrinkman",icon:(0,r.jsx)(l.n7M,{})},{name:"Facebook",href:"https://www.facebook.com/erik.brinkman",icon:(0,r.jsx)(l.u5I,{})}],className:"decoration-violet-200 justify-center"}),(0,r.jsxs)("p",{className:"pt-16",children:["Thanks to"," ",(0,r.jsx)(Z,{href:"https://www.alisonwilcoxdesign.com/",children:"Alison Wilcox"})," ","for the logo design,"," ",(0,r.jsx)(Z,{href:"https://www.melaniedaveid.com/",children:"Melanie David"})," ","for inspiring the design of this website, and"," ",(0,r.jsx)(Z,{href:"https://www.sarforre.com",children:"Sarah Forrest"})," ","for design guidance."]}),(0,r.jsxs)("p",{children:["All project hero images come from"," ",(0,r.jsx)(Z,{href:"https://unsplash.com/",children:"Unsplash"})," ","courtesy of"," ",(0,r.jsx)(Z,{href:"https://unsplash.com/@cdc",children:"CDC"}),","," ",(0,r.jsx)(Z,{href:"https://unsplash.com/@matteocatanese",children:"Matteo Catanese"}),", ",(0,r.jsx)(Z,{href:"https://unsplash.com/@j_mk18",children:"Jon"}),","," ",(0,r.jsx)(Z,{href:"https://unsplash.com/@zoltantasi",children:"Zoltan Tasi"}),", and"," ",(0,r.jsx)(Z,{href:"https://unsplash.com/@yogidan2012",children:"Daniele Levis Pelusi"}),"."]})]})}),(0,r.jsx)(B,{})]})]})}}},function(e){e.O(0,[518,166,717,774,888,179],(function(){return t=2973,e(e.s=t);var t}));var t=e.O();_N_E=t}]);