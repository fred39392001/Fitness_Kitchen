import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/dashboard/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
