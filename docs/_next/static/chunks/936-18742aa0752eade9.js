(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{6503:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(617).Z,n=r(9165).Z,l=r(5291).Z,i=r(17).Z,a=l(r(9953)),u=n(r(3944)),s=r(1809),c=r(9594),f=r(8206);r(9943);var d=n(r(5535));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,u=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{u=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:h,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:E,onLoadingCompleteRef:C,setBlurComplete:_,setShowAltText:j,onLoad:O,onError:S}=e,x=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},x,r,{width:l,height:n,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:h,style:o({},c,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,g,E,C,_,b))},[v,g,E,C,_,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,E,C,_,b)},onError:e=>{j(!0),"blur"===g&&_(!0),S&&S(e)}})))}),y=a.forwardRef((e,t)=>{let r,n;var l,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:E,className:C,quality:_,width:j,height:O,fill:S,style:x,onLoad:P,onLoadingComplete:k,placeholder:M="empty",blurDataURL:z,layout:R,objectFit:I,objectPosition:L,lazyBoundary:N,lazyRoot:T}=e,A=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(f.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[D]),U=A,W=U.loader||d.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=W;W=e=>{let{config:t}=e,r=i(e,["config"]);return q(r)}}if(R){"fill"===R&&(S=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];F&&(x=o({},x,F));let G={responsive:"100vw",fill:"100vw"}[R];G&&!y&&(y=G)}let H="",K=h(j),V=h(O);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let J=g(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,n=J.blurHeight,z=z||J.blurDataURL,H=J.src,!S){if(K||V){if(K&&!V){let $=K/J.width;V=Math.round(J.height*$)}else if(!K&&V){let Q=V/J.height;K=Math.round(J.width*Q)}}else K=J.width,V=J.height}}let X=!w&&("lazy"===E||void 0===E);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,X=!1),B.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=a.useState(!1),[et,er]=a.useState(!1),eo=h(_),en=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},et?{}:{color:"transparent"},x),el="blur"===M&&z&&!Y?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:r,blurHeight:n,blurDataURL:z}),'")')}:{},ei=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(r);a)i.push(parseInt(a[2]));if(i.length){let u=.01*Math.min(...i);return{widths:n.filter(e=>e>=o[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,o)=>"".concat(a({config:t,src:r,quality:l,width:e})," ").concat("w"===s?e:o+1).concat(s)).join(", "),src:a({config:t,src:r,quality:l,width:u[c]})}}({config:B,src:m,unoptimized:b,width:K,quality:eo,sizes:y,loader:W}),ea=m,eu={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:U.crossOrigin},es=a.useRef(P);a.useEffect(()=>{es.current=P},[P]);let ec=a.useRef(k);a.useEffect(()=>{ec.current=k},[k]);let ef=o({isLazy:X,imgAttributes:ei,heightInt:V,widthInt:K,qualityInt:eo,className:C,imgStyle:en,blurStyle:el,loading:E,config:B,fill:S,unoptimized:b,placeholder:M,loader:W,srcString:ea,onLoadRef:es,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:er},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ef,{ref:t})),w?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},eu))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(9165).Z,n=r(17).Z,l=o(r(9953)),i=r(7196),a=r(1841),u=r(1673),s=r(8519),c=r(8495),f=r(7101),d=r(6503),p=r(2081);let g=new Set;function h(e,t,r,o){if(i.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let r,o;let{href:a,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:E,scroll:C,locale:_,onClick:j,onMouseEnter:O,onTouchStart:S,legacyBehavior:x=!1}=e,P=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,x&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let k=!1!==y,M=l.default.useContext(s.RouterContext),z=l.default.useContext(c.AppRouterContext),R=null!=M?M:z,I=!M,{href:L,as:N}=l.default.useMemo(()=>{if(!M){let e=m(a);return{href:e,as:g?m(g):e}}let[t,r]=i.resolveHref(M,a,!0);return{href:t,as:g?i.resolveHref(M,g):r||t}},[M,a,g]),T=l.default.useRef(L),A=l.default.useRef(N);x&&(o=l.default.Children.only(r));let D=x?o&&"object"==typeof o&&o.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(A.current!==N||T.current!==L)&&(W(),A.current=N,T.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[N,D,L,W,B]);l.default.useEffect(()=>{R&&U&&k&&h(R,L,N,{locale:_})},[N,L,U,_,k,null==M?void 0:M.locale,R]);let q={ref:Z,onClick(e){x||"function"!=typeof j||j(e),x&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,o,n,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:a,locale:s,scroll:u}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,R,L,N,w,E,C,_,I,k)},onMouseEnter(e){x||"function"!=typeof O||O(e),x&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(k||!I)&&h(R,L,N,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){x||"function"!=typeof S||S(e),x&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(k||!I)&&h(R,L,N,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||b||"a"===o.type&&!("href"in o.props)){let F=void 0!==_?_:null==M?void 0:M.locale,G=(null==M?void 0:M.isLocaleDomain)&&d.getDomainLocale(N,F,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=G||p.addBasePath(u.addLocale(N,F,null==M?void 0:M.defaultLocale))}return x?l.default.cloneElement(o,q):l.default.createElement("a",Object.assign({},P,q),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[c,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},a.push(r),i.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let o=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(o)}},[d,s,r,t,c]);let g=o.useCallback(()=>{f(!1)},[]);return[p,c,g]};var o=r(9953),n=r(6966);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l}=e,i=o||t,a=n||r,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},5535:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},1341:function(e,t,r){e.exports=r(3944)},4517:function(e,t,r){e.exports=r(3271)},9629:function(e,t,r){e.exports=r(3291)},2033:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var o=r(9953),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function u(e){return function(t){return o.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,n=e.attr,l=e.size,u=e.title,s=a(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&o.createElement("title",null,u),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}}]);