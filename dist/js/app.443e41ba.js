(function(){"use strict";var e={7089:function(e,n,t){var r=t(9242),o=t(3396);const i=(0,o._)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},null,-1),a=(0,o._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),u=(0,o._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),c=(0,o._)("link",{href:"https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap",rel:"stylesheet"},null,-1);function l(e,n,t,r,l,s){const d=(0,o.up)("router-view"),f=(0,o.up)("Navbar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d),(0,o.Wm)(f),i,a,u,c],64)}const s=e=>((0,o.dD)("data-v-2f770a1a"),e=e(),(0,o.Cn)(),e),d=s((()=>(0,o._)("span",{class:"material-symbols-outlined"},"exercise",-1))),f=s((()=>(0,o._)("span",{class:"material-symbols-outlined"},"search",-1))),p=s((()=>(0,o._)("span",{class:"material-symbols-outlined"},"account_circle",-1)));function m(e,n,t,r,i,a){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/search"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/profile"},{default:(0,o.w5)((()=>[p])),_:1})])}var g={name:"Navbar"},h=t(89);const v=(0,h.Z)(g,[["render",m],["__scopeId","data-v-2f770a1a"]]);var b=v,y={name:"App",components:{Navbar:b}};const w=(0,h.Z)(y,[["render",l]]);var _=w,k=t(2483);const S={id:"home"},j={id:"trainings-container"},C={key:0};function O(e,n,t,r,i,a){const u=(0,o.up)("Hero"),c=(0,o.up)("TrainingCard");return(0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(u,{title:"Trainings",imageSrc:"/img/workout_1.jpeg"}),(0,o._)("div",j,[i.trainings.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("em",C,"No trainings.")),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.trainings,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e,img:e.img,title:e.title,duration:e.duration,url:e.url},null,8,["img","title","duration","url"])))),128))])])}var T=t(8849),N=t(7139);const x={id:"training-card-container"},E=["src"],A={id:"content-container"},P={class:"title"},D={class:"duration"};function L(e,n,t,r,i,a){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(u,{to:t.url},{default:(0,o.w5)((()=>[(0,o._)("div",x,[(0,o._)("img",{src:t.img,alt:"training img"},null,8,E),(0,o._)("div",A,[(0,o._)("h2",P,(0,N.zw)(t.title),1),(0,o._)("p",D,(0,N.zw)(t.duration)+" min",1)])])])),_:1},8,["to"])}var H={name:"TrainingCard",props:{title:String,duration:Number,img:String,url:String},data(){return{}}};const I=(0,h.Z)(H,[["render",L],["__scopeId","data-v-f287521e"]]);var W=I,Z={components:{Hero:T.Z,TrainingCard:W},data(){return{trainings:[]}},async mounted(){const e=await fetch("/exercises.json"),n=await e.json();this.workouts=n,console.log(this.workouts)}};const B=(0,h.Z)(Z,[["render",O],["__scopeId","data-v-a7e873a4"]]);var F=B;const z=[{path:"/",name:"Home",component:F},{path:"/search",name:"Search",component:()=>Promise.all([t.e(955),t.e(443)]).then(t.bind(t,4085))},{path:"/profile",name:"Profile",component:()=>t.e(178).then(t.bind(t,2178))},{path:"/training/:id",name:"Training",component:()=>Promise.all([t.e(955),t.e(781)]).then(t.bind(t,4781))},{path:"/exercise/:id",name:"Exercise",component:()=>Promise.all([t.e(955),t.e(104)]).then(t.bind(t,6104))}],M=(0,k.p7)({history:(0,k.r5)("/telovadba/"),routes:z,scrollBehavior(e,n,t){return"Search"===e.name&&t||{top:0}}});var q=M;(0,r.ri)(_).use(q).mount("#app")},8849:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3396),o=t(7139);const i={id:"hero-container"},a=["src"];function u(e,n,t,u,c,l){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("img",{src:t.imageSrc||"/img/workout_1.jpeg",alt:"hero"},null,8,a),(0,r.WI)(e.$slots,"default",{},void 0,!0),(0,r._)("h1",null,(0,o.zw)(t.title||"Title"),1)])}var c={name:"Hero",props:{title:String,imageSrc:String}},l=t(89);const s=(0,l.Z)(c,[["render",u],["__scopeId","data-v-58406cec"]]);var d=s}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{104:"b4fcc3b9",178:"7b8134f1",443:"39446d22",781:"36a67952",955:"6a36d9a1"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{104:"d19c8e4f",178:"a82d5e1f",443:"e9125ae9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="telovadba:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/telovadba/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={104:1,178:1,443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunktelovadba"]=self["webpackChunktelovadba"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7089)}));r=t.O(r)})();
//# sourceMappingURL=app.443e41ba.js.map