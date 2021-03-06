import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $ from 'jquery';

// vee-validate
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';
import moneyFilter from './filters/money';
import 'bootstrap';

// Bus
import './bus';

Vue.config.productionTip = false;

window.$ = $;

Vue.component('Loading', Loading);

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

localize('tw', zhTW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.filter('money', moneyFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
