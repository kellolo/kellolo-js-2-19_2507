<template>
  <div class="content">
    <newArrivals />
	 <cart />
    <div class="cart-buttons container">
      <button>cLEAR SHOPPING CART</button>
      <button>cONTINUE sHOPPING</button>
    </div>
	 <cartForm />
  </div>
</template>

<script>
import newArrivals from "../components/newArrivals.vue";
import cart from "../components/cart.vue";
import cartForm from "../components/cartForm.vue";
export default {
  components: {
	 newArrivals,
	 cart,
	 cartForm
  },
};
</script>

<style>
</style>