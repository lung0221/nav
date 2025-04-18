import{da as gt}from"./chunk-GK7UUKDW.js";import{$d as Z,Md as L,Nd as X,a as Y,b as G,d as mt,f as Q,g as K,ie as R,je as z,me as tt,oe as S,re as U}from"./chunk-W6FT5HF6.js";var et=mt((O,J)=>{"use strict";(function(e,f){typeof O=="object"&&typeof J=="object"?J.exports=f():typeof define=="function"&&define.amd?define([],f):typeof O=="object"?O.ClipboardJS=f():e.ClipboardJS=f()})(O,function(){return function(){var n={686:function(a,r,t){"use strict";t.d(r,{default:function(){return pt}});var u=t(279),l=t.n(u),d=t(370),o=t.n(d),b=t(817),E=t.n(b);function h(g){try{return document.execCommand(g)}catch{return!1}}var i=function(c){var s=E()(c);return h("cut"),s},y=i;function w(g){var c=document.documentElement.getAttribute("dir")==="rtl",s=document.createElement("textarea");s.style.fontSize="12pt",s.style.border="0",s.style.padding="0",s.style.margin="0",s.style.position="absolute",s.style[c?"right":"left"]="-9999px";var p=window.pageYOffset||document.documentElement.scrollTop;return s.style.top="".concat(p,"px"),s.setAttribute("readonly",""),s.value=g,s}var P=function(c,s){var p=w(c);s.container.appendChild(p);var m=E()(p);return h("copy"),p.remove(),m},q=function(c){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},p="";return typeof c=="string"?p=P(c,s):c instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(c?.type)?p=P(c.value,s):(p=E()(c),h("copy")),p},T=q;function C(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(s){return typeof s}:C=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},C(g)}var M=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=c.action,p=s===void 0?"copy":s,m=c.container,v=c.target,I=c.text;if(p!=="copy"&&p!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(v!==void 0)if(v&&C(v)==="object"&&v.nodeType===1){if(p==="copy"&&v.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(p==="cut"&&(v.hasAttribute("readonly")||v.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(I)return T(I,{container:m});if(v)return p==="cut"?y(v):T(v,{container:m})},W=M;function A(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(s){return typeof s}:A=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},A(g)}function H(g,c){if(!(g instanceof c))throw new TypeError("Cannot call a class as a function")}function x(g,c){for(var s=0;s<c.length;s++){var p=c[s];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(g,p.key,p)}}function _(g,c,s){return c&&x(g.prototype,c),s&&x(g,s),g}function st(g,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(c&&c.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),c&&B(g,c)}function B(g,c){return B=Object.setPrototypeOf||function(p,m){return p.__proto__=m,p},B(g,c)}function ct(g){var c=ft();return function(){var p=D(g),m;if(c){var v=D(this).constructor;m=Reflect.construct(p,arguments,v)}else m=p.apply(this,arguments);return ut(this,m)}}function ut(g,c){return c&&(A(c)==="object"||typeof c=="function")?c:lt(g)}function lt(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},D(g)}function F(g,c){var s="data-clipboard-".concat(g);if(c.hasAttribute(s))return c.getAttribute(s)}var dt=function(g){st(s,g);var c=ct(s);function s(p,m){var v;return H(this,s),v=c.call(this),v.resolveOptions(m),v.listenClick(p),v}return _(s,[{key:"resolveOptions",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof m.action=="function"?m.action:this.defaultAction,this.target=typeof m.target=="function"?m.target:this.defaultTarget,this.text=typeof m.text=="function"?m.text:this.defaultText,this.container=A(m.container)==="object"?m.container:document.body}},{key:"listenClick",value:function(m){var v=this;this.listener=o()(m,"click",function(I){return v.onClick(I)})}},{key:"onClick",value:function(m){var v=m.delegateTarget||m.currentTarget,I=this.action(v)||"copy",k=W({action:I,container:this.container,target:this.target(v),text:this.text(v)});this.emit(k?"success":"error",{action:I,text:k,trigger:v,clearSelection:function(){v&&v.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(m){return F("action",m)}},{key:"defaultTarget",value:function(m){var v=F("target",m);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(m){return F("text",m)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return T(m,v)}},{key:"cut",value:function(m){return y(m)}},{key:"isSupported",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof m=="string"?[m]:m,I=!!document.queryCommandSupported;return v.forEach(function(k){I=I&&!!document.queryCommandSupported(k)}),I}}]),s}(l()),pt=dt},828:function(a){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(l,d){for(;l&&l.nodeType!==r;){if(typeof l.matches=="function"&&l.matches(d))return l;l=l.parentNode}}a.exports=u},438:function(a,r,t){var u=t(828);function l(b,E,h,i,y){var w=o.apply(this,arguments);return b.addEventListener(h,w,y),{destroy:function(){b.removeEventListener(h,w,y)}}}function d(b,E,h,i,y){return typeof b.addEventListener=="function"?l.apply(null,arguments):typeof h=="function"?l.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(w){return l(w,E,h,i,y)}))}function o(b,E,h,i){return function(y){y.delegateTarget=u(y.target,E),y.delegateTarget&&i.call(b,y)}}a.exports=d},879:function(a,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(a,r,t){var u=t(879),l=t(438);function d(h,i,y){if(!h&&!i&&!y)throw new Error("Missing required arguments");if(!u.string(i))throw new TypeError("Second argument must be a String");if(!u.fn(y))throw new TypeError("Third argument must be a Function");if(u.node(h))return o(h,i,y);if(u.nodeList(h))return b(h,i,y);if(u.string(h))return E(h,i,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(h,i,y){return h.addEventListener(i,y),{destroy:function(){h.removeEventListener(i,y)}}}function b(h,i,y){return Array.prototype.forEach.call(h,function(w){w.addEventListener(i,y)}),{destroy:function(){Array.prototype.forEach.call(h,function(w){w.removeEventListener(i,y)})}}}function E(h,i,y){return l(document.body,h,i,y)}a.exports=d},817:function(a){function r(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var d=window.getSelection(),o=document.createRange();o.selectNodeContents(t),d.removeAllRanges(),d.addRange(o),u=d.toString()}return u}a.exports=r},279:function(a){function r(){}r.prototype={on:function(t,u,l){var d=this.e||(this.e={});return(d[t]||(d[t]=[])).push({fn:u,ctx:l}),this},once:function(t,u,l){var d=this;function o(){d.off(t,o),u.apply(l,arguments)}return o._=u,this.on(t,o,l)},emit:function(t){var u=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),d=0,o=l.length;for(d;d<o;d++)l[d].fn.apply(l[d].ctx,u);return this},off:function(t,u){var l=this.e||(this.e={}),d=l[t],o=[];if(d&&u)for(var b=0,E=d.length;b<E;b++)d[b].fn!==u&&d[b].fn._!==u&&o.push(d[b]);return o.length?l[t]=o:delete l[t],this}},a.exports=r,a.exports.TinyEmitter=r}},e={};function f(a){if(e[a])return e[a].exports;var r=e[a]={exports:{}};return n[a](r,r.exports,f),r.exports}return function(){f.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return f.d(r,{a:r}),r}}(),function(){f.d=function(a,r){for(var t in r)f.o(r,t)&&!f.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:r[t]})}}(),function(){f.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)}}(),f(686)}().default})});var ot=Q(gt(),1),it=Q(et(),1);var nt=(o=>(o[o.All=1]="All",o[o.Title=2]="Title",o[o.Desc=3]="Desc",o[o.Url=4]="Url",o[o.Current=5]="Current",o[o.Quick=6]="Quick",o[o.Id=7]="Id",o[o.Tag=8]="Tag",o[o.Class=9]="Class",o))(nt||{});function ht(n){return Math.floor(Math.random()*n)}function At(n,e){if(!e.trim())return[];e=e.toLowerCase();let{type:f,id:a}=V(),{oneIndex:r,twoIndex:t}=at(a),u=Number(f)||1,l=[],d=[{nav:l,id:-1,title:U("_searchRes"),icon:""}],o=new Map;u===9&&(d=[]);function b(E){E=E||n;t:for(let h=0;h<E.length;h++){let i=E[h];if(u===9){i.title&&(i.title.toLowerCase().includes(e)||i.id==e)&&d.push(i),Array.isArray(i.nav)&&b(i.nav);continue}if(Array.isArray(i.nav)&&b(i.nav),i.name){i.name=rt(i.name),i.desc=rt(i.desc);let y=i.name.toLowerCase(),w=i.desc.toLowerCase(),P=i.url.toLowerCase();if(w[0]===X)continue;let T=()=>{if(y.includes(e)){let x=i,_=new RegExp(`(${e})`,"i");if(x.__name__=x.name,x.name=x.name.replace(_,"<b>$1</b>"),!o.has(x.id))return o.set(x.id,!0),l.push(x),!0}return!1},C=()=>{if(P.includes(e)&&!o.has(i.id)||i.tags.some(_=>_.url?.includes(e))&&!o.has(i.id))return o.set(i.id,!0),l.push(i),!0},M=()=>{if(w.includes(e)){let x=i,_=new RegExp(`(${e})`,"i");if(x.__desc__=x.desc,x.desc=x.desc.replace(_,"<b>$1</b>"),!o.has(x.id))return o.set(x.id,!0),l.push(x),!0}return!1},W=()=>{if(i.top&&y.includes(e)){let x=i,_=new RegExp(`(${e})`,"i");if(x.__name__=x.name,x.name=x.name.replace(_,"<b>$1</b>"),!o.has(x.id))return o.set(x.id,!0),l.push(x),!0}return!1},A=()=>i.tags.forEach(x=>{tt[x.id]?.name?.toLowerCase()===e&&(o.has(i.id)||(o.set(i.id,!0),l.push(i)))}),H=()=>i.id==e?(l.push(i),!0):!1;try{switch(u){case 4:C();break;case 2:T();break;case 3:M();break;case 6:W();break;case 8:A();break;case 7:if(H())break t;break;default:T(),M(),C()}}catch(x){console.error(x)}}}}return u===5?b(n[r].nav[t].nav):b(),u!==9&&l.length<=0?[]:d}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var N;function St(){N&&clearInterval(N);let n="random-light-bg",e=document.getElementById(n)||document.createElement("div"),f=ht(360);e.id=n,e.className="dark-bg",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,e.style.backgroundImage=`linear-gradient(${f}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(e),N=setInterval(()=>{let r=`linear-gradient(${f}deg, ${$()} 0%, ${$()} 100%)`;e.style.opacity="0.3",setTimeout(()=>{e.style.backgroundImage=r,e.style.opacity="1"},1e3)},1e4)}function Tt(){N&&(clearInterval(N),N=null);let n=document.getElementById("random-light-bg");n&&n.parentNode?.removeChild(n)}function V(){let{href:n}=location,e=n.split("?")[1]||"",f=ot.default.parse(e),a=f.id;if(f.id==null)try{let r=localStorage.getItem(L.LOCATION);r&&(a=JSON.parse(r).id)}catch{}return G(Y({},f),{type:f.type,q:f.q||"",id:a})}function Lt(){let{id:n}=V();window.localStorage.setItem(L.LOCATION,JSON.stringify({id:n}))}function Nt(){let n=z.list[0]||{};try{let e=window.localStorage.getItem(L.SEARCH_ENGINE);if(e){let f=JSON.parse(e),a=z.list.find(r=>r.name===f.name);a&&(n=a)}}catch{}return n}function Ot(n){window.localStorage.setItem(L.SEARCH_ENGINE,JSON.stringify(n))}function Pt(){let n=window.localStorage.getItem(L.IS_DARK),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!n&&e?e:!!Number(n)}function Mt(n,e){let f=n.target,a=`copy-${Date.now()}`;return f.id=a,f.setAttribute("data-clipboard-text",e),new Promise(r=>{let t=new it.default(`#${a}`);t.on("success",function(){t.destroy(),r(!0)}),t.on("error",function(){t.destroy(),r(!1)})})}function Dt(n){return K(this,null,function*(){let e={valid:!1,url:n};if(!n||n==="null"||n==="undefined")return e;let{protocol:f}=window.location;return f==="https:"&&n.startsWith("http:")?e:new Promise(a=>{let r=document.createElement("img");r.src=n,r.style.display="none",r.onload=()=>{r.parentNode?.removeChild(r),e.valid=!0,a(e)},r.onerror=()=>{r.parentNode?.removeChild(r),a(e)},document.body.append(r)})})}function rt(n=""){return n?n.replace(/<b>|<\/b>/g,""):""}function kt(){let{id:n}=V(),{oneIndex:e,twoIndex:f}=at(n),a=[];try{S[e]&&S[e]?.nav?.length>0&&(Z||!S[e].nav[f].ownVisible)?a=S[e].nav[f].nav:a=[]}catch{a=[]}return a}function j(n){return String(n).padStart(2,"0")}function Rt(n){let e=document.querySelectorAll(n),f=Number.MAX_SAFE_INTEGER;if(e.length<=0)return f;let r=e[0].parentNode.clientWidth,t=0;for(let u=0;u<e.length;u++){let l=e[u];if(t+=l.clientWidth,t>r){f=u-1;break}}return f}function yt(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function $t(){let n=new Date,e=new Date(n.getFullYear(),0,0),f=n-e,a=1e3*60*60*24;return Math.floor(f/a)}function jt(){let n=U("_weeks"),e=new Date,f=e.getFullYear(),a=j(e.getHours()),r=j(e.getMinutes()),t=j(e.getSeconds()),u=e.getMonth()+1,l=e.getDate(),d=e.getDay(),o=j(l);return{year:f,hours:a,minutes:r,seconds:t,month:u,date:l,zeroDate:o,dayText:n[d]}}function Wt(){let n=yt()?R.appTheme:R.theme;return n==="Current"?R.theme:n}function at(n,e=0,f=!1){n=Number(n);let a=e,r=e,t=e,u=-1,l=[];t:for(let d=0;d<S.length;d++){let o=S[d];if(o.id===n){a=d,l.push(o.title);break}if(Array.isArray(o.nav))for(let b=0;b<o.nav.length;b++){let E=o.nav[b];if(E.id===n){u=o.id,a=d,r=b,l.push(o.title,E.title);break t}if(Array.isArray(E.nav))for(let h=0;h<E.nav.length;h++){let i=E.nav[h];if(i.id===n){u=E.id,a=d,r=b,t=h,l.push(o.title,E.title,i.title);break t}if(f&&Array.isArray(i.nav)){for(let y=0;y<i.nav.length;y++)if(i.nav[y].id===n){u=i.id,a=d,r=b,t=h,l.push(o.title,E.title,i.title);break t}}}}}return{parentId:u,oneIndex:a,twoIndex:r,threeIndex:t,breadcrumb:l}}function Ht(n,e,f){if(!n||!e)return;let a=n.offsetWidth,r=e.offsetWidth,u=e.offsetLeft-(a-r)/2;n.scrollTo(Y({left:u,behavior:"smooth"},f))}export{nt as a,ht as b,At as c,$ as d,St as e,Tt as f,V as g,Lt as h,Nt as i,Ot as j,Pt as k,Mt as l,Dt as m,rt as n,kt as o,Rt as p,yt as q,$t as r,jt as s,Wt as t,at as u,Ht as v};
