import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/frontend/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/frontend/Products.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/frontend/Cart.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/frontend/Dashboard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/backend/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
