<template>
	<div class="content">
		<newArrivals />
		<products />
		<productsFooter />
	</div>
</template>

<script>
import newArrivals from "../components/newArrivals.vue";
import products from "../components/products.vue";
import productsFooter from "../components/productsFooter.vue";
export default {
 components: {
	 newArrivals,
	 products,
	 productsFooter
 }
}
</script>

<style>

</style>