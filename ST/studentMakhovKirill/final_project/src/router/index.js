import Vue from 'vue'
import VueRouter from 'vue-router'
import content_ from '../views/content.vue'
import SinglePage from '../views/SinglePage.vue'
import Checkout from '../views/Checkout'
import Product from '../views/Product'
import Cart from '../views/Cart'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: content_
  },
  {
	path: '/SinglePage',
	name: 'SinglePage',
	component: SinglePage
 },
 {
	path: '/Checkout',
	name: 'Checkout',
	component: Checkout
 },
 {
	path: '/Product',
	name: 'Product',
	component: Product
 },
 {
	path: '/Cart',
	name: 'Cart',
	component: Cart
 },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
