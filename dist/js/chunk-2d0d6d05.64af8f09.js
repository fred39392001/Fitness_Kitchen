(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d05"],{"73c6":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),!1===t.order.paid?e("div",{staticClass:"jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s",staticStyle:{"background-image":"url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg)"}},[t._m(0)]):e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"bg-cover bg-img-height-l",staticStyle:{"background-image":"url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ErASO6igoTN6AOjj5Gs10f6rUrz1bBqoXsueQLy5g2pUFHNplCw4a7LysALUj8nhfYBFA8m97SDlTM3kclf9tDdPYQqomMGvRN3i0IghBVJGlBM0rIhZubl4tCEp37Uo.jpg)"}},[e("div",{staticClass:"h-100 d-flex justify-content-center align-items-center",staticStyle:{position:"relative"}},[e("section",{staticClass:"bg-alpha-dark d-flex flex-column align-items-center px-3 py-4 py-md-5"},[e("h1",{staticClass:"text-light font-weight-bold font-size-xl text-shadow"},[t._v("訂單完成")]),t._m(1),!0===t.order.paid?e("router-link",{staticClass:"btn btn-outline-light w-25 mt-3 d-none d-md-block",attrs:{to:"/products"}},[t._v(" 繼續選購 ")]):t._e(),!0===t.order.paid?e("router-link",{staticClass:"btn btn-outline-light mt-3 w-50 d-md-none",attrs:{to:"/products"}},[t._v(" 繼續選購 ")]):t._e()],1)])])]),!1===t.order.paid?e("div",{staticClass:"container my-3"},[e("div",{staticClass:"row justify-content-center flex-md-row"},[t._m(2),e("div",{staticClass:"col-md-5 my-3"},[e("div",{staticClass:"border p-4"},[e("h4",{staticClass:"font-weight-bold mb-3 d-flex justify-content-center\n          justify-content-md-start"},[t._v("訂單明細")]),e("hr"),t._l(t.order.products,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"d-flex mb-3"},[e("img",{staticClass:"mr-2 table-img-width",attrs:{src:s.product.imageUrl[0],alt:""}}),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between"},[e("h6",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(s.product.title))]),e("h6",{staticClass:"mb-0 font-weight-bold"},[t._v("X "+t._s(s.quantity))])]),e("div",{staticClass:"d-flex justify-content-between"},[e("small",{staticClass:"mb-0 text-muted"},[t._v(" "+t._s(t._f("money")(s.product.price))+" / "+t._s(s.product.unit)+" ")])])])])])})),e("ul",{staticClass:"mt-4 mb-0 border-top border-bottom text-muted pl-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-3 pb-0 font-weight-normal",attrs:{scope:"row"}},[t._v("電子郵件")]),e("p",{staticClass:"text-right border-0 px-0 pt-3 pb-0"},[t._v(t._s(t.order.user.email))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人姓名")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.user.name))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人電話")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.tel))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人地址")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.address))])])]),e("ul",{staticClass:"text-muted pl-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-3 pb-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款金額")]),e("p",{staticClass:"text-right border-0 px-0 pt-3 pb-0"},[t._v(t._s(t._f("money")(t.order.amount)))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.payment))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal mb-0",attrs:{scope:"row"}},[t._v("付款狀態")]),t.order.paid?t._e():e("p",{staticClass:"text-right border-0 px-0 pt-0 mb-0 text-primary\n              font-weight-bold"},[t._v(" 尚未付款 ")])])]),!1===t.order.paid?e("hr"):t._e(),e("div",{staticClass:"row justify-content-between"},[e("div",{staticClass:"col-md-6"},[!1===t.order.paid?e("div",[e("a",{staticClass:"btn btn-outline-dark d-none d-md-block",on:{click:function(s){return s.preventDefault(),t.backHome(s)}}},[t._v(" 回到首頁 ")])]):t._e(),!1===t.order.paid?e("div",[e("a",{staticClass:"mb-3 btn btn-outline-dark btn-block\n                d-md-none",on:{click:function(s){return s.preventDefault(),t.backHome(s)}}},[t._v(" 回到首頁 ")])]):t._e()]),e("div",{staticClass:"col-md-6"},[!1===t.order.paid?e("div",[e("a",{staticClass:"btn btn-primary d-flex align-items-center justify-content-center",attrs:{disabled:t.loadingItem},on:{click:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._v(" 確認付款 "),t.loadingItem?e("span",{staticClass:"spinner-grow spinner-grow-sm ml-2\n                spinner-size-s"}):t._e()])]):t._e()])])],2)])])]):e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"row justify-content-center flex-md-row"},[e("div",{staticClass:"col mt-3"},[e("div",{staticClass:"border p-4"},[e("h4",{staticClass:"font-weight-bold mb-3 d-flex justify-content-center"},[t._v("訂單明細")]),e("hr"),e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-6 d-none d-md-block",staticStyle:{}},[t._l(t.order.products,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"d-flex align-items-center my-3"},[e("img",{staticClass:"mr-3\n                  table-img-height-s",attrs:{src:s.product.imageUrl[0],alt:""}}),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between"},[e("h6",{staticClass:"mb-0 font-weight-bold mr-2"},[t._v(" "+t._s(s.product.title))]),e("h6",{staticClass:"mb-0 font-weight-bold ml-auto"},[t._v(" X "+t._s(s.quantity))])]),e("div",{staticClass:"d-flex"},[e("small",{staticClass:"mb-0 text-muted"},[t._v(" "+t._s(t._f("money")(s.product.price))+" / "+t._s(s.product.unit)+" ")])])])])])})),t.order.products.length>=4?e("span",{staticClass:"headerDivider-r"}):t._e()],2),e("div",{staticClass:"col-6 d-none d-md-block",staticStyle:{}},[e("ul",{staticClass:"mb-0 border-bottom text-muted pl-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pb-0 font-weight-normal",attrs:{scope:"row"}},[t._v("電子郵件")]),e("p",{staticClass:"text-right border-0 px-0 pb-0"},[t._v(t._s(t.order.user.email))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人姓名")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.user.name))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人電話")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.tel))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人地址")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.address))])])]),e("ul",{staticClass:"text-muted pl-0 mb-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-3 pb-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款金額")]),e("p",{staticClass:"text-right border-0 px-0 pt-3 pb-0"},[t._v(t._s(t._f("money")(t.order.amount)))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.payment))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal mb-0",attrs:{scope:"row"}},[t._v("付款狀態")]),t.order.paid?e("p",{staticClass:"text-right border-0 px-0 pt-0 mb-0 text-success\n                  font-weight-bold"},[t._v(" 已完成付款 ")]):t._e()])]),t.order.products.length<4?e("span",{staticClass:"headerDivider-l"}):t._e()]),e("div",{staticClass:"col-12 d-md-none"},t._l(t.order.products,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"d-flex align-items-center mb-3"},[e("img",{staticClass:"mr-3\n                  table-img-width",attrs:{src:s.product.imageUrl[0],alt:""}}),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between"},[e("h6",{staticClass:"mb-0 font-weight-bold mr-2"},[t._v(t._s(s.product.title))]),e("h6",{staticClass:"mb-0 font-weight-bold ml-auto"},[t._v("X "+t._s(s.quantity))])]),e("div",{staticClass:"d-flex"},[e("small",{staticClass:"mb-0 text-muted"},[t._v(" "+t._s(t._f("money")(s.product.price))+" / "+t._s(s.product.unit)+" ")])])])])])})),0),e("div",{staticClass:"col-12 border-top d-md-none"},[e("ul",{staticClass:"mb-0 border-bottom text-muted pl-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pb-0 pt-3 font-weight-normal",attrs:{scope:"row"}},[t._v("電子郵件")]),e("p",{staticClass:"text-right border-0 px-0 pb-0 pt-3"},[t._v(t._s(t.order.user.email))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人姓名")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.user.name))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人電話")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.tel))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收件人地址")]),e("p",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.order.user.address))])])]),e("ul",{staticClass:"text-muted pl-0 mb-0"},[e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-3 pb-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款金額")]),e("p",{staticClass:"text-right border-0 px-0 pt-3 pb-0"},[t._v(t._s(t._f("money")(t.order.amount)))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),e("p",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.order.payment))])]),e("li",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"border-0 px-0 pt-0 font-weight-normal mb-0",attrs:{scope:"row"}},[t._v("付款狀態")]),t.order.paid?e("p",{staticClass:"text-right border-0 px-0 pt-0 mb-0 text-success\n                  font-weight-bold"},[t._v(" 已完成付款 ")]):t._e()])])])])])])])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 d-none d-md-block"},[e("div",{staticClass:"d-flex flex-column align-items-start mt-minus-m"},[e("h1",{staticClass:"text-light font-weight-bold font-size-xl"},[t._v("食指大動， "),e("br"),t._v("宅配到府！")])])]),e("div",{staticClass:"col-md-5 d-md-none"},[e("div",{staticClass:"d-flex justify-content-center align-items-center mt-2 text-shadow"},[e("h1",{staticClass:"text-light font-weight-bold font-size-xl"},[t._v("食指大動，"),e("br"),t._v("宅配到府！")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"text-light text-center font-weight-bold font-size-l text-shadow"},[t._v(" 感謝您的購買！"),e("br"),t._v("您的訂單， 將在 1 ~ 3 個工作天內出貨！ ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"bg-light mt-3"},[e("div",{staticClass:"d-flex justify-content-center justify-content-md-start"},[e("h4",{staticClass:"text-dark mb-0 font-weight-bold"},[t._v("結帳")])]),e("hr",{staticClass:"border-dark hr-border-width"}),e("p",[t._v(" 只差一步了！點選確認付款以完成訂單。"),e("br"),t._v("我們將在收到您的訂單後， 約 1 ~ 3 個工作天內出貨！ ")]),e("img",{staticClass:"img-fluid w-100",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dry9BIAASb4giKnaoSNHtSk3l5GPx4a6lcxAxtoWM9GekuI7w9wUWmb53XFkhg1WWY9rBIPobkNvyGtttxQzHfU1zKpAyZvzJLo4g4XfFQODfneK8E2tGIquXnH9rAcK.jpg",alt:""}})])])}],r=(e("99af"),{data:function(){return{order:{user:{},products:[]},orderId:"",isLoading:!1,loadingItem:!1}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},methods:{getOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/orders/").concat(this.orderId);this.isLoading=!0,this.$http.get(s).then((function(s){t.order=s.data.data,t.isLoading=!1})).catch((function(){t.$bus.$emit("message:push","無法取得資料！請稍後再試！","danger"),t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("9e5f06ba-feb2-48ad-896c-c990bd81a761","/ec/orders/").concat(this.orderId,"/paying");this.loadingItem=!0,this.$http.post(s).then((function(s){s.data.data.paid&&t.getOrder(),t.$bus.$emit("message:push","已完成付款！","success"),t.loadingItem=!1})).catch((function(){t.$bus.$emit("message:push","付款失敗！請再試一次！","danger"),t.loadingItem=!1}))},backHome:function(){this.$router.push("/"),this.$bus.$emit("message:push","尚未付款！訂單已放棄，請重新下單。","danger")}}}),o=r,l=e("2877"),n=Object(l["a"])(o,a,i,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0d6d05.64af8f09.js.map