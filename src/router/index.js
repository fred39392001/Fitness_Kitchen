import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Layout.vue';

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
        path: '/about',
        component: () => import('../views/frontend/About.vue'),
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
      {
        path: '/cart-form',
        component: () => import('../views/frontend/CartForm.vue'),
      },
      {
        path: '/cart-check/:orderId',
        component: () => import('../views/frontend/CartCheck.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
