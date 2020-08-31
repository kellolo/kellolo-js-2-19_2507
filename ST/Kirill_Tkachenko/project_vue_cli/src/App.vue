<template>
  <div id="app">
    <header-block ref="header">
      <router-link to="/">Main</router-link>
      <router-link to="/single_page">Single Page</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/shopping_cart">Shopping Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </header-block>

    <router-view/>

    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from "./components/Header.vue";
import FooterBlock from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
  },
}
</script>

<style>

</style>
