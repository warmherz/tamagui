(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{50381:function(e,t,n){"use strict";var r=n(91706),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,u,l,s=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),u.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),l&&document.body.removeChild(l),i()}return s}},84501:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},50357:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var o=n(2784),a="right-scroll-bar-position",i="width-before-scroll-bar";var c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e){return e}function l(e,t){void 0===t&&(t=u);var n=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}}}var s=function(e){void 0===e&&(e={});var t=l(null);return t.options=c({async:!0,ssr:!1},e),t}();function f(e,t){return function(e,t){var n=(0,o.useState)((function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}}))[0];return n.callback=t,n.facade}(t,(function(t){return e.forEach((function(e){return function(e,t){return"function"===typeof e?e(t):e&&(e.current=t),e}(e,t)}))}))}var d=function(){},p=o.forwardRef((function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:d}),i=a[0],c=a[1],u=e.forwardProps,l=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,w=e.inert,b=e.allowPinchZoom,E=e.as,C=void 0===E?"div":E,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),O=g,S=f([n,t]),k=r({},x,i);return o.createElement(o.Fragment,null,m&&o.createElement(O,{sideCar:s,removeScrollBar:v,shards:h,noIsolation:y,inert:w,setCallbacks:c,allowPinchZoom:!!b,lockRef:n}),u?o.cloneElement(o.Children.only(l),r({},k,{ref:S})):o.createElement(C,r({},k,{className:p,ref:S}),l))}));p.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},p.classNames={fullWidth:i,zeroRight:a};var v,m=function(e){var t=e.sideCar,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return o.createElement(r,c({},n))};m.isSideCarExport=!0;function h(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=v||n.nc;return t&&e.setAttribute("nonce",t),e}var g=function(){var e=0,t=null;return{add:function(n){var r,o;0==e&&(t=h())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){!--e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},y=function(){var e=function(){var e=g();return function(t){o.useEffect((function(){return e.add(t),function(){e.remove()}}),[])}}();return function(t){var n=t.styles;return e(n),null}},w={left:0,top:0,right:0,gap:0},b=function(e){return parseInt(e||"",10)||0},E=function(e){if(void 0===e&&(e="margin"),"undefined"===typeof window)return w;var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[b(n),b(r),b(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},C=y(),x=function(e,t,n,r){var o=e.left,c=e.top,u=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .with-scroll-bars-hidden {\n   overflow: hidden "+r+";\n   padding-right: "+l+"px "+r+";\n  }\n  body {\n    overflow: hidden "+r+";\n    "+[t&&"position: relative "+r+";","margin"===n&&"\n    padding-left: "+o+"px;\n    padding-top: "+c+"px;\n    padding-right: "+u+"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "+l+"px "+r+";\n    ","padding"===n&&"padding-right: "+l+"px "+r+";"].filter(Boolean).join("")+"\n  }\n  \n  ."+a+" {\n    right: "+l+"px "+r+";\n  }\n  \n  ."+i+" {\n    margin-right: "+l+"px "+r+";\n  }\n  \n  ."+a+" ."+a+" {\n    right: 0 "+r+";\n  }\n  \n  ."+i+" ."+i+" {\n    margin-right: 0 "+r+";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: "+l+"px;\n  }\n"},O=function(e){var t=o.useState(E(e.gapMode)),n=t[0],r=t[1];o.useEffect((function(){r(E(e.gapMode))}),[e.gapMode]);var a=e.noRelative,i=e.noImportant,c=e.gapMode,u=void 0===c?"margin":c;return o.createElement(C,{styles:x(n,!a,u,i?"":"!important")})},S=function(e,t){var n=t;do{if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),k(e,n)){var r=R(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},k=function(e,t){return"v"===e?function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)}(t):function(e){var t=window.getComputedStyle(e);return"range"===e.type||"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)}(t)},R=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t);var n},P=!1;if("undefined"!==typeof window)try{var j=Object.defineProperty({},"passive",{get:function(){return P=!0,!0}});window.addEventListener("test",j,j),window.removeEventListener("test",j,j)}catch(_){P=!1}var D=!!P&&{passive:!1},M=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},T=function(e){return[e.deltaX,e.deltaY]},N=function(e){return e&&"current"in e?e.current:e},L=function(e){return"\n  .block-interactivity-"+e+" {pointer-events: none;}\n  .allow-interactivity-"+e+" {pointer-events: all;}\n"},I=0,W=[];var X,B=(X=function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(I++)[0],i=o.useState((function(){return y()}))[0],c=o.useRef(e);o.useEffect((function(){c.current=e}),[e]),o.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-"+a);var t=[e.lockRef.current].concat((e.shards||[]).map(N)).filter(Boolean);return t.forEach((function(e){return e.classList.add("allow-interactivity-"+a)})),function(){document.body.classList.remove("block-interactivity-"+a),t.forEach((function(e){return e.classList.remove("allow-interactivity-"+a)}))}}}),[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=M(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,f=Math.abs(u)>Math.abs(l)?"h":"v",d=S(f,s);if(!d)return!0;if(d?o=f:(o="v"===f?"h":"v",d=S(f,s)),!d)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return function(e,t,n,r,o){var a=r,i=n.target,c=t.contains(i),u=!1,l=a>0,s=0,f=0;do{var d=R(e,i),p=d[0],v=d[1]-d[2]-p;(p||v)&&k(e,i)&&(s+=v,f+=p),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return(l&&(o&&0===s||!o&&a>s)||!l&&(o&&0===f||!o&&-a>f))&&(u=!0),u}(p,t,e,"h"===p?u:l,!0)}),[]),l=o.useCallback((function(e){var n=e;if(W.length&&W[W.length-1]===i){var r="deltaY"in n?T(n):M(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&(t=e.delta,o=r,t[0]===o[0]&&t[1]===o[1]);var t,o}))[0];if(o&&o.should)n.preventDefault();else if(!o){var a=(c.current.shards||[]).map(N).filter(Boolean).filter((function(e){return e.contains(n.target)}));(a.length>0?u(n,a[0]):!c.current.noIsolation)&&n.preventDefault()}}}),[]),s=o.useCallback((function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout((function(){t.current=t.current.filter((function(e){return e!==a}))}),1)}),[]),f=o.useCallback((function(e){n.current=M(e),r.current=void 0}),[]),d=o.useCallback((function(t){s(t.type,T(t),t.target,u(t,e.lockRef.current))}),[]),p=o.useCallback((function(t){s(t.type,M(t),t.target,u(t,e.lockRef.current))}),[]);o.useEffect((function(){return W.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,D),document.addEventListener("touchmove",l,D),document.addEventListener("touchstart",f,D),function(){W=W.filter((function(e){return e!==i})),document.removeEventListener("wheel",l,D),document.removeEventListener("touchmove",l,D),document.removeEventListener("touchstart",f,D)}}),[]);var v=e.removeScrollBar,m=e.inert;return o.createElement(o.Fragment,null,m?o.createElement(i,{styles:L(a)}):null,v?o.createElement(O,{gapMode:"margin"}):null)},s.useMedium(X),m),Y=o.forwardRef((function(e,t){return o.createElement(p,r({},e,{ref:t,sideCar:B}))}));Y.classNames=p.classNames;var A=Y},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},53098:function(e,t,n){e.exports=n(7575)},7575:function(e,t,n){"use strict";t.getMDXComponent=function(e,t){return u(e,t).default};var r=c(n(2784)),o=c(n(52322)),a=c(n(28316));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function u(e,t){const n={React:r,ReactDOM:a,_jsx_runtime:o,...t};return new Function(...Object.keys(n),e)(...Object.values(n))}}}]);