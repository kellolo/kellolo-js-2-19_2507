import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
// import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // {
  //   path: '/basket',
  //   name: 'Basket',
  //   component: Basket
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
