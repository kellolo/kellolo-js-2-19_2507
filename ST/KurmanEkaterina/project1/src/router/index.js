import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import footer from '../views/footer.vue'
import header from '../views/header.vue'
import checkout from '../views/checkout.vue'

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
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
