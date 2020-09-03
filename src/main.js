import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $ from 'jquery';

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

Vue.filter('money', moneyFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
