(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0afdf8":"b37ecec5","chunk-2d0b2197":"5948b7ff","chunk-2d0be179":"2f000aa6","chunk-2d0d63f1":"e58a7f21","chunk-2d0d6d05":"0a0f907d","chunk-2d0dd9be":"e86a4831","chunk-2d2086b7":"9765fded","chunk-2d2302fe":"45b0b82f","chunk-7e840659":"58792e69","chunk-b20ea300":"d0a53ec3","chunk-cf175992":"02012a3a"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Fitness_Kitchen/dist/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("4160"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),s=n.n(r),i=n("a7fe"),o=n.n(i),c=n("7212"),l=n.n(c),u=n("9062"),d=n.n(u),f=(n("e40d"),n("1157")),p=n.n(f),h=n("7bb1"),b=n("4c93"),v=n("60d4"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Toast"),n("router-view")],1)},g=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},t._l(t.messages,(function(e,a){return n("div",{key:a,staticClass:"toast fade show",attrs:{id:"toast-"+a,role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false"}},[n("div",{staticClass:"toast-header"},[n("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+e.status,staticStyle:{width:"20px",height:"20px"}}),n("strong",{staticClass:"mr-auto"},[t._v("FITNESS KITCHEN")]),n("small",[t._v("現在")]),n("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.closeToast("toast-"+a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"toast-body"},[t._v(" "+t._s(e.message)+" ")])])})),0)},y=[],k=(n("a434"),{name:"Toasts",data:function(){return{messages:[]}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,n)}))},methods:{updateMessage:function(t,e){var n=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(n,a){n.timestamp===t&&e.messages.splice(a,1)}))}),5e3)},closeToast:function(t){$("#".concat(t)).toast("hide")}}}),C=k,x=(n("f515"),n("2877")),w=Object(x["a"])(C,_,y,!1,null,null,null),j=w.exports,O={name:"App",components:{Toast:j},data:function(){return{}}},T=O,E=(n("5c0b"),Object(x["a"])(T,m,g,!1,null,null,null)),S=E.exports,N=(n("d3b7"),n("8c4f")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},P=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary sticky-top"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticStyle:{height:"55px"},attrs:{src:"img/Fitness_Kitchen_Logo_W.svg",alt:""}})]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item is-active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item is-active"},[n("router-link",{staticClass:"nav-link ml-md-2",attrs:{to:"/about"}},[t._v("關於我們")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link mx-md-2",attrs:{to:"/products"}},[t._v("美味餐點")])],1),n("li",{staticClass:"nav-item d-flex"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"}),t.carts.length?n("span",{staticClass:"badge badge-pill badge-warm",staticStyle:{transform:"translateX(-6px) translateY(-11px)"}},[t._v(" "+t._s(t.carts.length))]):t._e()])],1)])])],1)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],K=(n("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping");this.$http.get(e).then((function(e){t.carts=e.data.data})).catch((function(t){console.log(t.response.data.errors)}))}}}),L=K,A=Object(x["a"])(L,F,I,!1,null,null,null),R=A.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-4 d-flex align-items-center"},[t._m(0),n("div",{staticClass:"col-lg-6 mt-3 mt-lg-0"},[n("ul",{staticClass:"d-flex list-unstyled mb-0 h4 align-items-center justify-content-center\n      justify-content-lg-end"},[t._m(1),t._m(2),n("li",[n("router-link",{staticClass:"text-white ml-2 btn btn-sm btn-outline-light",attrs:{to:"/login"}},[t._v(" 管理後台")])],1)])])])])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 d-flex justify-content-center justify-content-lg-start"},[n("p",{staticClass:"mb-0 text-light",staticStyle:{"font-family":"'Arimo'"}},[t._v("Copyright © 2020 "),n("span",{staticStyle:{"font-family":"'Russo One'"}},[t._v("FITNESS KITCHEN")]),t._v(" All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mr-2",attrs:{href:"mailto:service@FitnessKitchen.com.tw"}},[n("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-2",attrs:{href:"https://github.com/fred39392001",target:"_blank",rel:"noreferrer noopener"}},[n("i",{staticClass:"fab fa-github-square"})])])}],H={},J=Object(x["a"])(H,W,q,!1,null,null,null),V=J.exports,z={components:{Navbar:R,Footer:V}},D=z,X=Object(x["a"])(D,M,P,!1,null,null,null),Y=X.exports;a["default"].use(N["a"]);var B=[{path:"/",component:Y,children:[{path:"",component:function(){return n.e("chunk-2d2302fe").then(n.bind(null,"eae1"))}},{path:"/about",component:function(){return n.e("chunk-2d0be179").then(n.bind(null,"2f7f"))}},{path:"/products",component:function(){return n.e("chunk-2d0dd9be").then(n.bind(null,"81b1"))}},{path:"/product/:id",component:function(){return n.e("chunk-2d0afdf8").then(n.bind(null,"0fd0"))}},{path:"/cart",component:function(){return n.e("chunk-2d0b2197").then(n.bind(null,"2355"))}},{path:"/cart-form",component:function(){return n.e("chunk-cf175992").then(n.bind(null,"cbef"))}},{path:"/cart-check/:orderId",component:function(){return n.e("chunk-2d0d6d05").then(n.bind(null,"73c6"))}}]},{path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/admin",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},children:[{path:"products",component:function(){return n.e("chunk-b20ea300").then(n.bind(null,"61bc"))}},{path:"orders",component:function(){return n.e("chunk-7e840659").then(n.bind(null,"efd9"))}}]}],G=new N["a"]({routes:B}),Q=G,U=(n("bbe3"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),function(t){var e=Number(t);return"NT $".concat(e.toFixed(0).replace(/./g,(function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a})))});n("4989");a["default"].prototype.$bus=new a["default"],a["default"].config.productionTip=!1,window.$=p.a,a["default"].component("Loading",d.a),a["default"].use(o.a,s.a),a["default"].use(l.a),Object.keys(b).forEach((function(t){Object(h["d"])(t,b[t])})),Object(h["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(h["e"])("tw",v),a["default"].component("ValidationObserver",h["a"]),a["default"].component("ValidationProvider",h["b"]),a["default"].filter("money",U),new a["default"]({router:Q,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},ead7:function(t,e,n){},f515:function(t,e,n){"use strict";var a=n("ead7"),r=n.n(a);r.a}});
//# sourceMappingURL=app.8851b775.js.map