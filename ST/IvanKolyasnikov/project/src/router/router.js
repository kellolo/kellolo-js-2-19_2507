import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../components/Index.vue";
import Products from "../components/Products.vue";
import SinglePage from "../components/SinglePage.vue";
import CheckOut from "../components/CheckOut.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
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
            path: '/single-page',
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
        },

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});

export default router;