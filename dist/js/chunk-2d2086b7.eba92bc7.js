(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center align-items-center login-page-height"},[s("div",{staticClass:"col-md-5"},[t._m(0),s("form",{on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[s("div",{staticClass:"form-group mt-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"請輸入電子郵件地址",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-center mt-4"},[s("router-link",{staticClass:"btn btn-outline-dark",attrs:{to:"/products"}},[t._v("返回賣場")]),s("button",{staticClass:"btn btn-dark ml-3",attrs:{type:"submit",disabled:t.loadingItem}},[t._v("登入")])],1),t._m(1)])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h4 text-center"},[s("span",{staticClass:"font-RussoOne"},[t._v("FITNESS KITCHEN")]),s("br"),t._v(" 管理者登入 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt-4 text-muted text-center"},[s("span",{staticClass:"font-RussoOne"},[t._v("FITNESS KITCHEN")]),t._v(" 管理後台 ")])}],i=(s("99af"),{data:function(){return{user:{email:"",password:""},token:"",loadingItem:!1}},methods:{signIn:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.loadingItem=!0,this.$http.post(e,this.user).then((function(e){var s=e.data.token,a=e.data.expired;document.cookie="fitnessKitchenToken=".concat(s,"; expires=").concat(new Date(1e3*a),"; path=/"),t.$router.push("/admin/products"),t.loadingItem=!1,t.$bus.$emit("message:push","登入成功!","success")})).catch((function(){t.$bus.$emit("message:push","登入失敗！請再試一次！","danger"),t.loadingItem=!1}))}}}),o=i,r=s("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.eba92bc7.js.map