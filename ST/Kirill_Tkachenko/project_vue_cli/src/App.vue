<template>
  <div id="app">
    <header-block ref="header">
      <div class="navAll">
        <router-link to="/" class="nav-link">Main</router-link>
      </div>
      <div class="navAll">
        <router-link to="/single_page" class="nav-link">Single Page</router-link>
      </div>
      <div class="navAll">
        <router-link to="/product" class="nav-link">Product</router-link>
      </div>
      <div class="navAll">
        <router-link to="/shopping_cart" class="nav-link">Shopping Cart</router-link>
      </div>
      <div class="navAll">
        <router-link to="/checkout" class="nav-link">Checkout</router-link>
      </div>
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
