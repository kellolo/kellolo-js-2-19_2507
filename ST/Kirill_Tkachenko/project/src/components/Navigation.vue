<template>
    <nav class="nav container d-none d-md-flex justify-content-center mt-3">
        <nav-item
            v-for="item of items"
            :item="item"
            :key="item.name"
        />
    </nav>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
    name: "Navigation",
    components: {
        NavItem,
    },
    data() {
        return {
            items: [
                {
                    name: "Home",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Man",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Woman",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Kids",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Accoseriese",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Featured",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Hot Deals",
                    link: "#",
                    hasDropNav: true,
                },
                {
                    name: "Single Page",
                    link: "singlePage.html",
                    hasDropNav: false,
                },
                {
                    name: "Shopping Cart",
                    link: "shoppingCart.html",
                    hasDropNav: false,
                },
                {
                    name: "Checkout",
                    link: "checkout.html",
                    hasDropNav: false,
                },
                {
                    name: "Product",
                    link: "Product.html",
                    hasDropNav: false,
                },
            ],
        }
    },
}
</script>

<style>

</style>