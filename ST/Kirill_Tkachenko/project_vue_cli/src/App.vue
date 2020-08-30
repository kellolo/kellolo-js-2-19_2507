<template>
  <div id="app">
    <header-block ref="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
