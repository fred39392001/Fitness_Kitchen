(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2197"],{2355:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),t.carts.length?s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col bg-white py-5 page-content-height"},[t._m(1),s("hr",{staticClass:"border-dark mb-0 hr-border-width"}),t._l(t.carts,(function(a){return s("div",{key:a.product.id+1,staticClass:"d-md-none mt-4 box-shadow"},[s("div",{staticClass:"d-flex align-items-center p-3"},[s("div",{staticClass:"mr-3"},[s("img",{staticClass:"h-55",attrs:{src:a.product.imageUrl[0],alt:""}})]),s("div",{staticClass:"d-flex w-100 align-items-center justify-content-between"},[s("p",{staticClass:"mb-0 h6"},[t._v(t._s(a.product.title))]),s("div",{staticClass:"badge badge-pill badge-primary"},[t._v(" "+t._s(a.product.category)+" ")])])]),s("div",{staticClass:"d-flex justify-content-between align-items-center\n          px-3 mt-2"},[s("div",{staticClass:"input-group input-group-lg mr-5"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-primary d-flex align-items-center",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(s){a.quantity--,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?s("span",{staticClass:"spinner-border spinner-border-sm spinner-size-s"}):s("span",[t._v("-")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"form-control text-center",attrs:{min:"1",type:"number",disabled:1===a.quantity},domProps:{value:a.quantity},on:{keyup:function(s){return t.updateQuantity(a.product.id,a.quantity)},input:function(s){s.target.composing||t.$set(a,"quantity",s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary d-flex align-items-center",attrs:{type:"button",disabled:t.status.loadingUpdateCart===a.product.id},on:{click:function(s){a.quantity++,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?s("span",{staticClass:"spinner-border spinner-border-sm spinner-size-s"}):s("span",[t._v("+")])])])]),s("div",[s("a",{staticClass:"text-primary",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.deleteCartItem(a.product.id)}}},[s("i",{staticClass:"fas fa-lg fa-trash-alt pt-1"})])])]),s("hr"),s("div",{staticClass:"d-flex justify-content-end px-3 pb-3"},[s("p",{staticClass:"h5 mr-2"},[t._v("金額")]),s("p",{staticClass:"h5"},[t._v(" "+t._s(t._f("money")(a.product.price*a.quantity))+" ")])])])})),s("div",{staticClass:"table-responsive d-none d-md-block"},[s("table",{staticClass:"table table-striped mb-0"},[t._m(2),s("tbody",t._l(t.carts,(function(a){return s("tr",{key:a.product.id+1},[s("td",{staticClass:"text-center px-0 table-width-s"},[s("img",{staticClass:"table-img-height-s-plus",attrs:{src:a.product.imageUrl[0],alt:""}})]),s("td",{staticClass:"align-middle text-center table-width-s"},[t._v(" "+t._s(a.product.title)+" ")]),s("td",{staticClass:"align-middle text-center table-width-m-plus"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-primary d-flex align-items-center",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(s){a.quantity--,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?s("span",{staticClass:"spinner-border spinner-border-sm spinner-size-s"}):s("span",[t._v("-")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"form-control text-center",attrs:{min:"1",type:"number",disabled:1===a.quantity},domProps:{value:a.quantity},on:{keyup:function(s){return t.updateQuantity(a.product.id,a.quantity)},input:function(s){s.target.composing||t.$set(a,"quantity",s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary d-flex align-items-center",attrs:{type:"button",disabled:t.status.loadingUpdateCart===a.product.id},on:{click:function(s){a.quantity++,t.updateQuantity(a.product.id,a.quantity)}}},[t.status.loadingUpdateCart===a.product.id?s("span",{staticClass:"spinner-border spinner-border-sm spinner-size-s"}):s("span",[t._v("+")])])])])]),s("td",{staticClass:"align-middle text-center table-width-m-plus"},[t._v(" "+t._s(t._f("money")(a.product.price*a.quantity)))]),s("td",{staticClass:"align-middle text-center table-width-s"},[s("a",{staticClass:"text-primary",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.deleteCartItem(a.product.id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])})),0)])]),s("div",{staticClass:"container"},[t.cartTotal>0?s("div",{staticClass:"d-flex justify-content-between\n          justify-content-md-end mt-4"},[s("p",{staticClass:"mb-0 h4 font-weight-bold table-width-xs"},[t._v("總金額")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(t._s(t._f("money")(t.cartTotal)))])]):t._e()]),s("div",{staticClass:"row d-flex justify-content-between mt-4"},[s("div",{staticClass:"col-md-2"},[s("router-link",{staticClass:"btn btn-outline-dark btn-block",attrs:{to:"/products"}},[t._v(" 繼續選購 ")])],1),s("div",{staticClass:"col-md-2 mt-3 mt-md-0"},[s("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:"/cart-form"}},[t._v(" 下一步 ")])],1)])],2)])]):s("div",{staticClass:"container page-content-height"},[t._m(3),s("div",{staticClass:"row d-flex justify-content-center mt-3 mb-5"},[s("div",{staticClass:"col-md-2"},[s("router-link",{staticClass:"btn btn-outline-dark btn-block",attrs:{to:"/products"}},[t._v(" 繼續選購 ")])],1)])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s",staticStyle:{"background-image":"url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg)"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 d-none d-md-block"},[s("div",{staticClass:"d-flex flex-column align-items-start mt-minus-m"},[s("h2",{staticClass:"text-light font-weight-bold font-size-xl"},[t._v("食指大動， "),s("br"),t._v("宅配到府！")])])]),s("div",{staticClass:"col-md-5 d-md-none"},[s("div",{staticClass:"d-flex justify-content-center align-items-center mt-2 text-shadow"},[s("h2",{staticClass:"text-light font-weight-bold font-size-xl"},[t._v("食指大動，"),s("br"),t._v("宅配到府！")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-center"},[s("h2",{staticClass:"text-dark mb-0 font-weight-bold"},[t._v("購物車")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"text-center"},[s("td",[t._v("產品圖片")]),s("td",[t._v("產品名稱")]),s("td",[t._v("數量")]),s("td",[t._v("價格")]),s("td",[t._v("刪除")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row flex-column justify-content-center align-items-center"},[s("div",{staticClass:"col bg-white pt-5"},[s("div",{staticClass:"d-flex justify-content-center"},[s("h2",{staticClass:"text-dark mb-0 font-weight-bold"},[t._v("購物車")])]),s("hr",{staticClass:"border-dark mb-0 hr-border-width"}),s("div",{staticClass:"d-flex justify-content-center"},[s("p",{staticClass:"h3 text-dark mt-3"},[t._v("購物車無商品，快去逛逛！")])])]),s("div",{staticClass:"col-md-5"},[s("img",{staticClass:"img-fluid mt-3",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nOoInzZIltvbLPKRcHKMFc3zyqrQyBWAGRaN9ke6zVSP9LaMndr8ta41GVAAZhKyOJ4apHZjHwuPv7sgyA96GoF4cXLSSXip7puDq1JRXK7Z7wdr8kIdnwMKU7XvB2tc.jpg",alt:""}})])])}],n=(s("99af"),s("4160"),s("159b"),{data:function(){return{carts:[],cartTotal:0,isLoading:!1,status:{loadingUpdateCart:""}}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping");this.$http.get(a).then((function(a){t.status.loadingUpdateCart="",t.carts=a.data.data,t.updateToTalPrice(),t.isLoading=!1})).catch((function(){t.status.loadingItem="",t.isLoading=!1}))},updateToTalPrice:function(){var t=0;this.carts.forEach((function(a){t+=a.product.price*a.quantity})),this.cartTotal=t},updateQuantity:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingUpdateCart=t;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping"),e={product:t,quantity:s};this.$http.patch(i,e).then((function(){a.status.loadingUpdateCart="",a.getCart(),a.$bus.$emit("message:push","商品數量更新成功!","success")})).catch((function(){a.status.loadingUpdateCart="",a.$bus.$emit("message:push","商品數量更新失敗!","danger")}))},deleteCartItem:function(t){var a=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping/").concat(t);this.$http.delete(s).then((function(){a.$bus.$emit("get-cart"),a.getCart(),a.isLoading=!1,a.$bus.$emit("message:push","商品已刪除!","success")})).catch((function(){a.isLoading=!1,a.$bus.$emit("message:push","商品刪除失敗!","danger")}))}}}),c=n,r=s("2877"),d=Object(r["a"])(c,i,e,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b2197.f2a86633.js.map