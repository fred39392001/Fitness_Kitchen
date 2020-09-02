(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce7a6e26"],{2355:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col bg-white py-5",staticStyle:{"min-height":"calc(100vh - 81px - 81px)"}},[t._m(1),i("hr",{staticClass:"border-dark mb-0",staticStyle:{"border-width":"1.5px"}}),i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-striped mb-0"},[t._m(2),i("tbody",t._l(t.carts,(function(a){return i("tr",{key:a.product.id+1},[i("td",{staticClass:"text-center px-0",staticStyle:{width:"100px"}},[i("img",{staticStyle:{height:"100px","object-fit":"cover"},attrs:{src:a.product.imageUrl[0],alt:""}})]),i("td",{staticClass:"align-middle text-center",staticStyle:{"min-width":"100px"}},[t._v(" "+t._s(a.product.title)+" ")]),i("td",{staticClass:"align-middle text-center",staticStyle:{"min-width":"125px"}},[i("div",{staticClass:"input-group"},[i("div",{staticClass:"input-group-prepend"},[i("button",{staticClass:"btn btn-primary btn-sm  d-flex align-items-center",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(i){a.quantity--,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?i("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{width:"12px",height:"12px"}}):i("span",[t._v("-")])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"form-control text-center",attrs:{min:"1",type:"number",disabled:1===a.quantity},domProps:{value:a.quantity},on:{keyup:function(i){return t.updateQuantity(a.product.id,a.quantity)},input:function(i){i.target.composing||t.$set(a,"quantity",i.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-primary btn-sm d-flex align-items-center",attrs:{type:"button",disabled:t.status.loadingUpdateCart===a.product.id},on:{click:function(i){a.quantity++,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?i("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{width:"12px",height:"12px"}}):i("span",[t._v("+")])])])])]),i("td",{staticClass:"align-middle text-center",staticStyle:{"min-width":"125px"}},[t._v(" "+t._s(t._f("money")(a.product.price*a.quantity)))]),t._m(3,!0)])})),0)])]),i("div",{staticClass:"container"},[i("div",{staticClass:"d-flex justify-content-end mt-4"},[i("p",{staticClass:"mb-0 h4 font-weight-bold",staticStyle:{"min-width":"80px"}},[t._v("總金額")]),i("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(t._s(t._f("money")(t.cartTotal)))])])]),i("div",{staticClass:"row d-flex justify-content-between mt-4"},[i("div",{staticClass:"col-md-2"},[i("router-link",{staticClass:"btn btn-outline-dark btn-block",attrs:{to:"/products"}},[t._v(" 繼續選購 ")])],1),i("div",{staticClass:"col-md-2 mt-3 mt-md-0"},[i("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:"/cart-form"}},[t._v(" 下一步 ")])],1)])])])])],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"jumbotron jumbotron-fluid bg-cover mb-0",staticStyle:{"background-image":"url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg)",height:"250px"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5 d-none d-md-block"},[i("div",{staticClass:"d-flex flex-column align-items-start"},[i("h1",{staticClass:"text-light font-weight-bold pt-2",staticStyle:{"font-size":"50px"}},[t._v("食指大動， "),i("br"),t._v("宅配到府！")])])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"d-flex justify-content-center"},[i("h2",{staticClass:"text-dark mb-0 font-weight-bold"},[t._v("購物車")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",{staticClass:"text-center"},[i("td",[t._v("產品圖片")]),i("td",[t._v("產品名稱")]),i("td",[t._v("數量")]),i("td",[t._v("價格")]),i("td",[t._v("刪除")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("td",{staticClass:"align-middle text-center",staticStyle:{"min-width":"100px"}},[i("a",{staticClass:"text-primary",attrs:{href:""}},[i("i",{staticClass:"fas fa-trash-alt"})])])}],n=(i("99af"),i("4160"),i("159b"),{data:function(){return{carts:[],cartTotal:0,isLoading:!1,status:{loadingUpdateCart:""}}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping");this.$http.get(a).then((function(a){console.log("購物車",a),t.carts=a.data.data,t.updateToTalPrice(),t.isLoading=!1})).catch((function(a){t.status.loadingItem="",console.log(a.response.data.errors),t.isLoading=!1}))},updateToTalPrice:function(){var t=this;this.carts.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))},updateQuantity:function(t){var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingUpdateCart=t;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping"),s={product:t,quantity:i};console.log(s),this.$http.patch(e,s).then((function(t){a.status.loadingUpdateCart="",a.getCart(),console.log(t)})).catch((function(t){a.status.loadingUpdateCart="",console.log(t.response.data.errors)}))}}}),c=n,r=i("2877"),o=Object(r["a"])(c,e,s,!1,null,null,null);a["default"]=o.exports},"99af":function(t,a,i){"use strict";var e=i("23e7"),s=i("d039"),n=i("e8b5"),c=i("861d"),r=i("7b0b"),o=i("50c4"),d=i("8418"),l=i("65f0"),u=i("1dde"),p=i("b622"),h=i("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,b="Maximum allowed index exceeded",v=h>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=u("concat"),y=function(t){if(!c(t))return!1;var a=t[f];return void 0!==a?!!a:n(t)},C=!v||!g;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,i,e,s,n,c=r(this),u=l(c,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?c:arguments[a],y(n)){if(s=o(n.length),p+s>m)throw TypeError(b);for(i=0;i<s;i++,p++)i in n&&d(u,p,n[i])}else{if(p>=m)throw TypeError(b);d(u,p++,n)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-ce7a6e26.b6ca5bf3.js.map