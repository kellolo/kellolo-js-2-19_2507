import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/Index.vue";
import Products from "../views/Products.vue";
import SinglePage from "../views/SinglePage.vue";
import CheckOut from "../views/CheckOut.vue";
import ShoppingCart from "../views/ShoppingCart.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    props: true,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    props: true,
  },
  {
    path: '/single-page/:id',
    name: 'SinglePage',
    component: SinglePage,
    props: true,
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    props: true,
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
