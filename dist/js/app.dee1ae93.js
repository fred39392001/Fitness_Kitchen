(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bdb87":"bc962c47","chunk-2d0cf132":"a28735d2","chunk-2d0d6d05":"fba837a2","chunk-2d0de760":"3f6c308e","chunk-2d0e9004":"86ff5058","chunk-2d221e36":"d4c7fc67","chunk-2d2302fe":"a6668554","chunk-36c619e5":"50fb170b","chunk-605afda8":"295112bd","chunk-ce7a6e26":"b6ca5bf3","chunk-ef7fddb4":"f3bf8102"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-36c619e5":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0bdb87":"31d6cfe0","chunk-2d0cf132":"31d6cfe0","chunk-2d0d6d05":"31d6cfe0","chunk-2d0de760":"31d6cfe0","chunk-2d0e9004":"31d6cfe0","chunk-2d221e36":"31d6cfe0","chunk-2d2302fe":"31d6cfe0","chunk-36c619e5":"59893565","chunk-605afda8":"31d6cfe0","chunk-ce7a6e26":"31d6cfe0","chunk-ef7fddb4":"31d6cfe0"}[t]+".css",s=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Fitness_Kitchen/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),s=n.n(r),i=n("a7fe"),c=n.n(i),o=n("7212"),l=n.n(o),u=n("9062"),d=n.n(u),f=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Toast"),n("router-view")],1)}),h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},t._l(t.messages,(function(e,a){return n("div",{key:a,staticClass:"toast fade show",attrs:{id:"toast-"+a,role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false"}},[n("div",{staticClass:"toast-header"},[n("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+e.status,staticStyle:{width:"20px",height:"20px"}}),n("strong",{staticClass:"mr-auto"},[t._v("六角實戰班")]),n("small",[t._v("現在")]),t._m(0,!0)]),n("div",{staticClass:"toast-body"},[t._v(" "+t._s(e.message)+" ")])])})),0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],v=(n("4160"),n("a434"),n("159b"),{name:"Toasts",data:function(){return{messages:[]}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,n)}))},methods:{updateMessage:function(t,e){var n=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(n,a){n.timestamp===t&&e.messages.splice(a,1)}))}),5e3)}}}),b=v,g=(n("f515"),n("2877")),k=Object(g["a"])(b,p,m,!1,null,null,null),_=k.exports,y={name:"App",components:{Toast:_},data:function(){return{}}},C=y,x=(n("5c0b"),Object(g["a"])(C,f,h,!1,null,null,null)),w=x.exports,E=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},O=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary sticky-top"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticStyle:{height:"55px"},attrs:{src:"img/Fitness_Kitchen_Logo_W.svg",alt:""}})]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link text-light",attrs:{to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link mx-md-2 text-light",attrs:{to:"/products"}},[t._v("美味餐點")])],1),n("li",{staticClass:"nav-item d-flex"},[n("router-link",{staticClass:"nav-link text-light",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"})])],1)])])],1)])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],$={},N=Object(g["a"])($,T,S,!1,null,null,null),M=N.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-4 d-flex align-items-center"},[t._m(0),n("div",{staticClass:"col-lg-6 mt-3 mt-lg-0"},[n("ul",{staticClass:"d-flex list-unstyled mb-0 h4 align-items-center justify-content-center\n      justify-content-lg-end"},[t._m(1),t._m(2),t._m(3),t._m(4),n("li",[n("router-link",{staticClass:"text-white ml-3 btn btn-sm btn-outline-light",attrs:{to:"/admin"}},[t._v(" 管理後台")])],1)])])])])])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 d-flex justify-content-center justify-content-lg-start"},[n("p",{staticClass:"mb-0 text-light",staticStyle:{"font-family":"'Arimo'"}},[t._v("Copyright © 2020 "),n("span",{staticStyle:{"font-family":"'Russo One'"}},[t._v("FITNESS KITCHEN")]),t._v(" All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mr-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-line"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"https://github.com/fred39392001",target:"_blank",rel:"noreferrer noopener"}},[n("i",{staticClass:"fab fa-github-square"})])])}],L={},F=Object(g["a"])(L,P,A,!1,null,null,null),q=F.exports,B={components:{Navbar:M,Footer:q}},K=B,D=Object(g["a"])(K,j,O,!1,null,null,null),I=D.exports;a["default"].use(E["a"]);var R=[{path:"/",component:I,children:[{path:"",component:function(){return n.e("chunk-2d2302fe").then(n.bind(null,"eae1"))}},{path:"/products",component:function(){return n.e("chunk-ef7fddb4").then(n.bind(null,"81b1"))}},{path:"/product/:id",component:function(){return n.e("chunk-605afda8").then(n.bind(null,"0fd0"))}},{path:"/cart",component:function(){return n.e("chunk-ce7a6e26").then(n.bind(null,"2355"))}},{path:"/cart-form",component:function(){return n.e("chunk-2d221e36").then(n.bind(null,"cbef"))}},{path:"/cart-check",component:function(){return n.e("chunk-2d0d6d05").then(n.bind(null,"73c6"))}},{path:"/cart-complete",component:function(){return n.e("chunk-2d0bdb87").then(n.bind(null,"2ccc"))}}]},{path:"/admin",component:function(){return n.e("chunk-36c619e5").then(n.bind(null,"8eeb"))},children:[{path:"/",component:function(){return n.e("chunk-2d0de760").then(n.bind(null,"866b"))}},{path:"products",component:function(){return n.e("chunk-2d0cf132").then(n.bind(null,"61bc"))}},{path:"coupons",component:function(){return n.e("chunk-2d0e9004").then(n.bind(null,"8c58"))}}]}],W=new E["a"]({routes:R}),H=W,J=(n("bbe3"),n("a15b"),n("ac1f"),n("25f0"),n("5319"),n("1276"),function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"NT $".concat(e.join("."))});n("4989");a["default"].prototype.$bus=new a["default"],a["default"].config.productionTip=!1,a["default"].component("Loading",d.a),a["default"].use(c.a,s.a),a["default"].use(l.a),a["default"].filter("money",J),new a["default"]({router:H,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},ead7:function(t,e,n){},f515:function(t,e,n){"use strict";var a=n("ead7"),r=n.n(a);r.a}});
//# sourceMappingURL=app.dee1ae93.js.map