(function(t){function e(e){for(var a,r,i=e[0],o=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s={app:0},c=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0afdf8":"a9e062ed","chunk-2d0b2197":"37f2d5e6","chunk-2d0bdb87":"bc962c47","chunk-2d0cf132":"a28735d2","chunk-2d0d6d05":"fba837a2","chunk-2d0dd9be":"42fa9407","chunk-2d0de760":"3f6c308e","chunk-2d0e9004":"86ff5058","chunk-2d221e36":"d4c7fc67","chunk-2d2302fe":"a6668554","chunk-36c619e5":"50fb170b"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-36c619e5":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0afdf8":"31d6cfe0","chunk-2d0b2197":"31d6cfe0","chunk-2d0bdb87":"31d6cfe0","chunk-2d0cf132":"31d6cfe0","chunk-2d0d6d05":"31d6cfe0","chunk-2d0dd9be":"31d6cfe0","chunk-2d0de760":"31d6cfe0","chunk-2d0e9004":"31d6cfe0","chunk-2d221e36":"31d6cfe0","chunk-2d2302fe":"31d6cfe0","chunk-36c619e5":"59893565"}[t]+".css",s=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Fitness_Kitchen/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),s=n.n(r),c=n("a7fe"),i=n.n(c),o=n("7212"),l=n.n(o),u=n("9062"),d=n.n(u),f=(n("e40d"),n("1157")),h=n.n(f),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Toast"),n("router-view")],1)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},t._l(t.messages,(function(e,a){return n("div",{key:a,staticClass:"toast fade show",attrs:{id:"toast-"+a,role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false"}},[n("div",{staticClass:"toast-header"},[n("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+e.status,staticStyle:{width:"20px",height:"20px"}}),n("strong",{staticClass:"mr-auto"},[t._v("FITNESS KITCHEN")]),n("small",[t._v("現在")]),n("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.closeToast("toast-"+a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"toast-body"},[t._v(" "+t._s(e.message)+" ")])])})),0)},v=[],g=(n("4160"),n("a434"),n("159b"),{name:"Toasts",data:function(){return{messages:[]}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,n)}))},methods:{updateMessage:function(t,e){var n=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(n,a){n.timestamp===t&&e.messages.splice(a,1)}))}),5e3)},closeToast:function(t){$("#".concat(t)).toast("hide")}}}),k=g,_=(n("f515"),n("2877")),y=Object(_["a"])(k,b,v,!1,null,null,null),C=y.exports,x={name:"App",components:{Toast:C},data:function(){return{}}},w=x,E=(n("5c0b"),Object(_["a"])(w,p,m,!1,null,null,null)),T=E.exports,j=(n("d3b7"),n("8c4f")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},O=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary sticky-top"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticStyle:{height:"55px"},attrs:{src:"img/Fitness_Kitchen_Logo_W.svg",alt:""}})]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item is-active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link mx-md-2",attrs:{to:"/products"}},[t._v("美味餐點")])],1),n("li",{staticClass:"nav-item d-flex"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"}),t.carts.length?n("span",{staticClass:"badge badge-pill badge-warm",staticStyle:{transform:"translateX(-6px) translateY(-11px)"}},[t._v(" "+t._s(t.carts.length))]):t._e()])],1)])])],1)])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],P=(n("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping");this.$http.get(e).then((function(e){t.carts=e.data.data})).catch((function(t){console.log(t.response.data.errors)}))}}}),A=P,F=Object(_["a"])(A,N,M,!1,null,null,null),L=F.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-4 d-flex align-items-center"},[t._m(0),n("div",{staticClass:"col-lg-6 mt-3 mt-lg-0"},[n("ul",{staticClass:"d-flex list-unstyled mb-0 h4 align-items-center justify-content-center\n      justify-content-lg-end"},[t._m(1),t._m(2),t._m(3),t._m(4),n("li",[n("router-link",{staticClass:"text-white ml-3 btn btn-sm btn-outline-light",attrs:{to:"/admin"}},[t._v(" 管理後台")])],1)])])])])])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 d-flex justify-content-center justify-content-lg-start"},[n("p",{staticClass:"mb-0 text-light",staticStyle:{"font-family":"'Arimo'"}},[t._v("Copyright © 2020 "),n("span",{staticStyle:{"font-family":"'Russo One'"}},[t._v("FITNESS KITCHEN")]),t._v(" All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mr-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-line"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"https://github.com/fred39392001",target:"_blank",rel:"noreferrer noopener"}},[n("i",{staticClass:"fab fa-github-square"})])])}],q={},B=Object(_["a"])(q,I,K,!1,null,null,null),D=B.exports,H={components:{Navbar:L,Footer:D}},R=H,W=Object(_["a"])(R,S,O,!1,null,null,null),J=W.exports;a["default"].use(j["a"]);var z=[{path:"/",component:J,children:[{path:"",component:function(){return n.e("chunk-2d2302fe").then(n.bind(null,"eae1"))}},{path:"/products",component:function(){return n.e("chunk-2d0dd9be").then(n.bind(null,"81b1"))}},{path:"/product/:id",component:function(){return n.e("chunk-2d0afdf8").then(n.bind(null,"0fd0"))}},{path:"/cart",component:function(){return n.e("chunk-2d0b2197").then(n.bind(null,"2355"))}},{path:"/cart-form",component:function(){return n.e("chunk-2d221e36").then(n.bind(null,"cbef"))}},{path:"/cart-check",component:function(){return n.e("chunk-2d0d6d05").then(n.bind(null,"73c6"))}},{path:"/cart-complete",component:function(){return n.e("chunk-2d0bdb87").then(n.bind(null,"2ccc"))}}]},{path:"/admin",component:function(){return n.e("chunk-36c619e5").then(n.bind(null,"8eeb"))},children:[{path:"/",component:function(){return n.e("chunk-2d0de760").then(n.bind(null,"866b"))}},{path:"products",component:function(){return n.e("chunk-2d0cf132").then(n.bind(null,"61bc"))}},{path:"coupons",component:function(){return n.e("chunk-2d0e9004").then(n.bind(null,"8c58"))}}]}],U=new j["a"]({routes:z}),X=U,Y=(n("bbe3"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),function(t){var e=Number(t);return"NT $".concat(e.toFixed(0).replace(/./g,(function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a})))});n("4989");a["default"].prototype.$bus=new a["default"],a["default"].config.productionTip=!1,window.$=h.a,a["default"].component("Loading",d.a),a["default"].use(i.a,s.a),a["default"].use(l.a),a["default"].filter("money",Y),new a["default"]({router:X,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},ead7:function(t,e,n){},f515:function(t,e,n){"use strict";var a=n("ead7"),r=n.n(a);r.a}});
//# sourceMappingURL=app.941daac6.js.map