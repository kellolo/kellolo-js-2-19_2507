import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import footer from '../views/footer.vue'
import header from '../views/header.vue'
import checkout from '../views/checkout.vue'
import nav from '../views/nav.vue'
import singlepage from '../views/singlepage.vue'
import product from '../views/product.vue'
import shoppingcart from '../views/shoppingcart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Main
  },
  {
  path: '/footer',
  name: 'footer',
  component: footer
  },
  {
    path: '/header',
    name: 'header',
    component: header
  //}
   //{
    // path: '/basket',
  // name: 'Basket',
   //  component: Basket
  // }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/nav',
    name: 'nav',
    component: nav
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
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: shoppingcart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
