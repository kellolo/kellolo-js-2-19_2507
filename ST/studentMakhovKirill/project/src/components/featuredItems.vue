<template>
  <div class="featured-items container">
    <div class="featured-items__head">
      <div class="head-text">
        <h2>Featured Items</h2>
      </div>
      <div class="sub-text">Shop for items based on what we featured in this week</div>
    </div>
    <!--CATALOGHERE-->
    <catalog />
    <button class="featured-items__button products__button">
      <a href="product.html">Browse All Product</a>
      <img
        src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/arrowRight.png"
        alt="arrow"
      />
    </button>
  </div>
</template>

<script>
import catalog from '../components/catalog.vue';
export default {
	components: {
		catalog
	},
};
</script>

<style>
</style>