(function(t){function e(e){for(var a,r,s=e[0],l=e[1],o=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},c={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-0086e31e":"f641efbe","chunk-2d0b2197":"4c6c4788","chunk-2d0bdb87":"b15cc1d7","chunk-2d0cf132":"37966419","chunk-2d0d6d05":"7a8ae645","chunk-2d0de760":"d1b8b4db","chunk-2d0e9004":"373ec872","chunk-2d221e36":"4aae931f","chunk-2d2302fe":"2724c315","chunk-36c619e5":"a0f6a915","chunk-3c4c7550":"5c8f4d64"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-36c619e5":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0086e31e":"31d6cfe0","chunk-2d0b2197":"31d6cfe0","chunk-2d0bdb87":"31d6cfe0","chunk-2d0cf132":"31d6cfe0","chunk-2d0d6d05":"31d6cfe0","chunk-2d0de760":"31d6cfe0","chunk-2d0e9004":"31d6cfe0","chunk-2d221e36":"31d6cfe0","chunk-2d2302fe":"31d6cfe0","chunk-36c619e5":"59893565","chunk-3c4c7550":"31d6cfe0"}[t]+".css",c=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var o=i[s],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===a||u===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){o=d[s],u=o.getAttribute("data-href");if(u===a||u===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=i);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/Fitness_Kitchen/dist/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),c=n.n(r),i=n("a7fe"),s=n.n(i),l=n("7212"),o=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],f=(n("5c0b"),n("2877")),h={},p=Object(f["a"])(h,u,d,!1,null,null,null),b=p.exports,m=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},g=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary sticky-top"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticStyle:{height:"55px"},attrs:{src:"img/Fitness_Kitchen_Logo_W.svg",alt:""}})]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link text-light",attrs:{to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link mx-md-2 text-light",attrs:{to:"/products"}},[t._v("美味餐點")])],1),n("li",{staticClass:"nav-item d-flex"},[n("router-link",{staticClass:"nav-link text-light",attrs:{to:"/cart"}},[n("i",{staticClass:"fas fa-shopping-cart"})])],1)])])],1)])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],y={},C=Object(f["a"])(y,k,_,!1,null,null,null),x=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-4 d-flex align-items-center"},[t._m(0),n("div",{staticClass:"col-lg-6 mt-3 mt-lg-0"},[n("ul",{staticClass:"d-flex list-unstyled mb-0 h4 align-items-center justify-content-center\n      justify-content-lg-end"},[t._m(1),t._m(2),t._m(3),t._m(4),n("li",[n("router-link",{staticClass:"text-white ml-3 btn btn-sm btn-outline-light",attrs:{to:"/admin"}},[t._v(" 管理後台")])],1)])])])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 d-flex justify-content-center justify-content-lg-start"},[n("p",{staticClass:"mb-0 text-light",staticStyle:{"font-family":"'Arimo'"}},[t._v("Copyright © 2020 "),n("span",{staticStyle:{"font-family":"'Russo One'"}},[t._v("FITNESS KITCHEN")]),t._v(" All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mr-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"#"}},[n("i",{staticClass:"fab fa-line"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"text-white mx-3",attrs:{href:"https://github.com/fred39392001",target:"_blank",rel:"noreferrer noopener"}},[n("i",{staticClass:"fab fa-github-square"})])])}],j={},O=Object(f["a"])(j,w,E,!1,null,null,null),S=O.exports,N={components:{Navbar:x,Footer:S}},T=N,$=Object(f["a"])(T,v,g,!1,null,null,null),P=$.exports;a["default"].use(m["a"]);var A=[{path:"/",component:P,children:[{path:"",component:function(){return n.e("chunk-2d2302fe").then(n.bind(null,"eae1"))}},{path:"/products",component:function(){return n.e("chunk-0086e31e").then(n.bind(null,"81b1"))}},{path:"/product/:id",component:function(){return n.e("chunk-3c4c7550").then(n.bind(null,"0fd0"))}},{path:"/cart",component:function(){return n.e("chunk-2d0b2197").then(n.bind(null,"2355"))}},{path:"/cart-form",component:function(){return n.e("chunk-2d221e36").then(n.bind(null,"cbef"))}},{path:"/cart-check",component:function(){return n.e("chunk-2d0d6d05").then(n.bind(null,"73c6"))}},{path:"/cart-complete",component:function(){return n.e("chunk-2d0bdb87").then(n.bind(null,"2ccc"))}}]},{path:"/admin",component:function(){return n.e("chunk-36c619e5").then(n.bind(null,"8eeb"))},children:[{path:"/",component:function(){return n.e("chunk-2d0de760").then(n.bind(null,"866b"))}},{path:"products",component:function(){return n.e("chunk-2d0cf132").then(n.bind(null,"61bc"))}},{path:"coupons",component:function(){return n.e("chunk-2d0e9004").then(n.bind(null,"8c58"))}}]}],F=new m["a"]({routes:A}),L=F;n("bbe3"),n("4989");a["default"].config.productionTip=!1,a["default"].use(s.a,c.a),a["default"].use(o.a),new a["default"]({router:L,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.3c55670c.js.map