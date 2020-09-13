<template>
  <div class="content">
    <newArrivals />
    <carousel />
    <productDescr />
    <asideProducts />
  </div>
</template>

<script>
import newArrivals from "../components/newArrivals.vue";
import carousel from "../components/carousel";
import productDescr from "../components/productDescr";
import asideProducts from "../components/asideProducts";
export default {
  components: {
    newArrivals,
    carousel,
    productDescr,
    asideProducts,
  },
};
</script>

<style>
</style>