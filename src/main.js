import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';
import 'bootstrap';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
