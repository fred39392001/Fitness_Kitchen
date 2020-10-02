(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afdf8"],{"0fd0":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),i("div",{staticClass:"row justify-content-center mt-5"},[i("div",{staticClass:"col-md-7"},[i("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl[0],alt:"..."}})]),i("div",{staticClass:"col-md-5 d-flex flex-column justify-content-center"},[i("p",{staticClass:"h2 mt-3 mt-md-0 text-primary"},[t._v(t._s(t.product.title))]),i("hr",{staticClass:"border-primary mt-0 w-100 hr-border-width"}),i("p",[t._v(t._s(t.product.content))]),i("div",{staticClass:"d-flex"},[i("p",{staticClass:"h4 text-primary mb-0 mr-3"},[t._v(" 售價："),i("strong",[t._v(t._s(t._f("money")(t.product.price)))])]),i("del",{staticClass:"text-muted"},[i("small",[t._v("原價："+t._s(t._f("money")(t.product.origin_price)))])])]),i("div",{staticClass:"d-flex mt-3"},[i("div",{staticClass:"w-50 mr-3"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mr-3 border border-dark select-text-align",attrs:{name:"unit"},on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.product,"num",s.target.multiple?i:i[0])}}},t._l(8,(function(s){return i("option",{key:s,staticClass:"text-center",domProps:{value:s}},[t._v(" "+t._s(s)+" "+t._s(t.product.unit)+" ")])})),0)]),i("button",{staticClass:"btn btn-outline-primary w-50\n        d-flex justify-content-center\n        align-items-center",attrs:{type:"button"},on:{click:function(s){return t.addToCart(t.product.id,t.product.num)}}},[t.status.loadingItem===t.product.id?i("i",{staticClass:"mr-2 spinner-grow spinner-grow-sm spinner-size-s"}):t._e(),t._v(" 加到購物車 ")])])])]),i("div",{staticClass:"row mt-5"},[t._m(0),i("div",{staticClass:"col-md-9"},[i("p",{domProps:{innerHTML:t._s(t.product.description)}})])]),i("div",{staticClass:"row mt-5"},[t._m(1),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-weight-hanging pr-2"}),t._v("重量： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.weight)+" ")]),t._v("克 ")])]),i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-fire-alt pr-2"}),t._v("熱量： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.calories)+" ")]),t._v("卡 ")])]),i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-egg pr-2"}),t._v("蛋白質： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.protein)+" ")]),t._v("克 ")])])]),i("div",{staticClass:"row mt-md-2"},[i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-tint pr-2"}),t._v("脂肪： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.fat)+" ")]),t._v("克 ")])]),i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-cookie-bite pr-2"}),t._v("碳水： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.carbohydrate)+" ")]),t._v("克 ")])]),i("div",{staticClass:"col-md-4"},[i("p",[i("i",{staticClass:"fas fa-certificate pr-2"}),t._v("鈉： "),i("span",{staticClass:"border-bottom border-dark text-center nutrition-border"},[t._v(" "+t._s(t.product.options.na)+" ")]),t._v("毫克 ")])])])])]),i("ProductNotice"),i("hr",{staticClass:"mt-5 hr-border-width"}),i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col"},[i("h4",{staticClass:"mb-4"},[t._v("相關商品")]),i("RelatedPorducts",{attrs:{product:t.product},on:{update:t.getProduct}})],1)])],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-3"},[i("h4",{staticClass:"text-primary"},[t._v("商品資訊")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-3"},[i("h4",{staticClass:"text-primary"},[t._v("營養成份")])])}],r=(i("99af"),function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-md-3"},[i("h4",{staticClass:"text-primary"},[t._v("購物須知")])]),i("div",{staticClass:"col-md-9"},[i("p",[t._v("每次購物滿 3,000 元以上免運費，未達 3,000 元，需加付 230 元運費，訂單完成後，將在 1 ~ 3 個工作天內出貨。")])]),i("div",{staticClass:"col-md-3 mt-5"},[i("h4",{staticClass:"text-primary"},[t._v("退貨需知")])]),i("div",{staticClass:"col-md-9 mt-md-5"},[i("p",[t._v("在 FITNESS KITCHEN 官網購物，享有商品到貨日起 10 天猶豫期，猶豫期內，可無條件退費。猶豫期並非試用期，所以，您所退回的商品必須是包裝完整、保存良好的狀態。")])])])}],o={data:function(){return{}}},n=o,d=i("2877"),l=Object(d["a"])(n,r,c,!1,null,null,null),p=l.exports,u=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mb-5"},[i("Swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.identical,(function(s){return i("swiper-slide",{key:s.id,staticClass:"item"},[i("div",{staticClass:"card h-100 pointer",on:{click:function(i){return i.preventDefault(),t.getDetail(s.id)}}},[i("div",{staticClass:"bg-cover card-img-top card-img-height",style:{backgroundImage:"url("+s.imageUrl[0]+")"}}),i("div",{staticClass:"card-body text-center px-2 py-3"},[i("h5",{staticClass:"mb-0"},[i("router-link",{attrs:{to:"/product/"+s.id}},[t._v(t._s(s.title))])],1),i("div",{staticClass:"mt-2 d-lg-flex justify-content-center align-items-center"},[i("del",{staticClass:"text-muted mr-lg-2"},[i("span",{staticClass:"font-size-xs"},[t._v("原價："+t._s(t._f("money")(s.origin_price)))])]),i("p",{staticClass:"text-primary mb-0 font-size-s"},[t._v(" 售價："),i("strong",[t._v(t._s(t._f("money")(s.price)))])])])])])])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},m=[],v=(i("4de4"),i("7212")),f={data:function(){return{products:[],swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:30},768:{slidesPerView:3,spaceBetween:20},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}},components:{Swiper:v["Swiper"],SwiperSlide:v["SwiperSlide"]},props:{product:{type:Object}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/products");this.$http.get(s).then((function(s){t.products=s.data.data}))},getDetail:function(t){this.$router.push("/product/".concat(t)),this.$emit("update")}},computed:{identical:function(){var t=this;return this.products.filter((function(s){return s.id!==t.product.id&&s.category===t.product.category}))},swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.swiper.slideTo(3,1e3,!1)}},_=f,h=Object(d["a"])(_,u,m,!1,null,null,null),C=h.exports,g={data:function(){return{product:{num:1,imageUrl:[],options:{}},status:{loadingItem:""},isLoading:!1}},components:{ProductNotice:p,RelatedPorducts:C},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.isLoading=!0;var s=this.$route.params.id,i="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/product/").concat(s);this.$http.get(i).then((function(s){t.isLoading=!1,t.product=s.data.data,t.$set(t.product,"num",1)}))},addToCart:function(t){var s=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/shopping");this.isLoading=!0;var a={product:t,quantity:i};this.$http.post(e,a).then((function(){s.status.loadingItem="",s.$bus.$emit("get-cart"),s.$bus.$emit("message:push","商品已成功加入購物車!","success"),s.isLoading=!1})).catch((function(t){s.status.loadingItem="",s.$bus.$emit("message:push","加入失敗!".concat(t.response.data.errors),"danger"),s.isLoading=!1}))}}},b=g,w=Object(d["a"])(b,e,a,!1,null,null,null);s["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0afdf8.11b65eeb.js.map