import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import singlepage from '../views/single page.vue'
import product from '../views/product.vue'
import checkout from '../views/checkout.vue'
import shoppingcart from '../views/shoppingcart'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/singlepage',
    name: 'singlepage',
    component: singlepage
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: shoppingcart
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
