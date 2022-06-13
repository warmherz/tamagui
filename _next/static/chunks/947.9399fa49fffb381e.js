"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{76947:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var n=r(52322),i=r(2784);var o=r(68683),a=r(59699),c=r(9303),u=r(45482),l=r(54503),s=Object.defineProperty,d=(e,t)=>s(e,"name",{value:t,configurable:!0});const b={"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"*":(e,t)=>e*t},f=d(((...e)=>{if(l.$L){let t="calc(";for(const r of e)t+=b[r]?" "+r+" ":h(r);return t+")"}let t=0,r=null;for(const n of e)b[n]?r=b[n]:r?(t=r(t,n),r=null):t=+n;return t}),"calc"),h=d((e=>{const t=(0,a.kv)(e);return"number"===typeof t?`${t}px`:t}),"convertToVariableOrNumber");var p=r(63035),v=r(92682),m=r(56695),y=r(4586),w=r(23917),g=r(35730),_=r(63862);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){k(e,t,r[t])}))}return e}function z(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=Object.defineProperty,$=function(e,t){return O(e,"name",{value:t,configurable:!0})},C="Switch",P=(0,v.b)(C),E=S(P,1)[0],I=(P[1],S(E(C),2)),L=I[0],R=I[1],T=$((function(e){return Math.round(.65*(0,a.Ve)((0,c.a)(e)))}),"getSwitchHeight"),A=$((function(e){return 2*T(e)}),"getSwitchWidth"),N=(0,u.z)(m.sL,{name:"Switch",tag:"button",borderRadius:1e3,borderWidth:2,borderColor:"transparent",backgroundColor:"$background",focusStyle:{borderColor:"$borderColorFocus"},variants:{size:{"...size":function(e){var t=f(T(e),"+",4);return{height:t,minHeight:t,width:f(A(e),"+",4)}}}},defaultVariants:{size:"$4"}}),V=i.forwardRef((function(e,t){var r=e.__scopeSwitch,a=e.labeledBy,c=e.name,u=e.checked,s=e.defaultChecked,d=e.required,b=e.disabled,f=e.value,h=void 0===f?"on":f,p=e.onCheckedChange,v=e.size,m=void 0===v?"$4":v,y=z(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),j=S(i.useState(null),2),k=j[0],O=j[1],$=(0,o.e)(t,(function(e){return O(e)})),C=(0,_.t0)(k),P=a||C,E=i.useRef(!1),I=!!l.$L&&(!k||Boolean(k.closest("form"))),R=S((0,w.T)({prop:u,defaultProp:s||!1,onChange:p}),2),T=R[0],A=void 0!==T&&T,V=R[1];return i.useEffect((function(){if(e.id)return(0,g.QS)(e.id,{focus:function(){V((function(e){return!e}))}})}),[e.id]),(0,n.jsxs)(L,{scope:r,checked:A,disabled:b,size:m,children:[(0,n.jsx)(N,x({size:m,role:"switch","aria-checked":A,"aria-labelledby":P,"aria-required":d,"data-state":W(A),"data-disabled":b?"":void 0,disabled:b,tabIndex:b?void 0:0,value:h},y,{ref:$,onPress:function(t){var r;null==(r=e.onPress)||r.call(e,t),V((function(e){return!e})),l.$L&&I&&(E.current=t.isPropagationStopped(),E.current||t.stopPropagation())}})),l.$L&&I&&(0,n.jsx)(M,{control:k,bubbles:!E.current,name:c,value:h,checked:A,required:d,disabled:b,style:{transform:"translateX(-100%)"}})]})}));V.displayName=C;var F=N.extractable((0,p.Y)(V),{neverFlatten:!0}),q="SwitchThumb",B=(0,u.z)(y.K,{name:"SwitchThumb",backgroundColor:"$background",borderRadius:1e3,variants:{size:{"...size":function(e){return{height:T(e),width:T(e)}}}},defaultVariants:{size:"$4"}}),D=B.extractable(i.forwardRef((function(e,t){var r=e.__scopeSwitch,i=z(e,["__scopeSwitch"]),o=R(q,r),c=o.size,u=o.disabled,l=o.checked;return(0,n.jsx)(B,x({size:c,"data-state":W(l),"data-disabled":u?"":void 0},i,{x:l?(0,a.Ve)(A(c))-(0,a.Ve)(T(c)):0,ref:t}))})),{neverFlatten:!0});D.displayName=q,F.Thumb=D;var M=$((function(e){e.control;var t=e.checked,r=e.bubbles,o=void 0===r||r,a=z(e,["control","checked","bubbles"]),c=i.useRef(null),u=function(e){const t=i.useRef({value:e,previous:e});return i.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(t);return i.useEffect((function(){var e=c.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"checked").set;if(u!==t&&n){var i=new Event("click",{bubbles:o});n.call(e,t),e.dispatchEvent(i)}}),[u,t,o]),(0,n.jsx)("input",x({type:"checkbox","aria-hidden":!0,defaultChecked:t},a,{tabIndex:-1,ref:c,style:x({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function W(e){return e?"checked":"unchecked"}$(W,"getState");var H=Object.defineProperty,K=function(e,t){return H(e,"name",{value:t,configurable:!0})};function Q(){return(0,n.jsxs)(m.FA,{alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$3",children:[(0,n.jsx)(U,{size:"$2"}),(0,n.jsx)(U,{size:"$3"}),(0,n.jsx)(U,{size:"$4"}),(0,n.jsx)(U,{size:"$5"})]})}function U(e){return(0,n.jsxs)(m.sL,{x:"_transform-17o6ma4",alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$4",children:[(0,n.jsx)(_.__,{tag:"label",justifyContent:"_jc-1lct8eo",minWidth:"_miw-1it5r1i",paddingRight:"_pr-4rm8j0",size:e.size,htmlFor:"switch-1",children:"Dark mode"}),(0,n.jsx)("div",{className:" _maw-ao3bcm _w-1c386nm _transform-fx81n7 _mih-zdnlnj _bbw-he1ah5 _mah-e01bnd _h-386d6l _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _brw-1737c2r _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii "}),(0,n.jsx)(F,{tag:"button",id:"switch-1",size:e.size,children:(0,n.jsx)(F.Thumb,{debug:"verbose",animation:"bouncy"})})]})}K(Q,"SwitchDemo"),K(U,"SwitchWithLabel")}}]);