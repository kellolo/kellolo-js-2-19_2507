import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Main.vue";
import SinglePage from "../views/SinglePage.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  // {
    // path: "/about",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
  // },
  {
    path: "/single_page",
    name: "SinglePage",
    component: SinglePage
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/shopping_cart",
    name: "ShoppingCart",
    component: function() {
      return import("../views/ShoppingCart.vue")
    }
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: function() {
      return import("../views/Checkout.vue")
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
