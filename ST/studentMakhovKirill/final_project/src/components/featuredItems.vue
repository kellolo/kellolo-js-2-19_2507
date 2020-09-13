<template>
  <div class="featured-items container">
    <div class="featured-items__head">
      <div class="head-text">
        <h2>Featured Items</h2>
      </div>
      <div class="sub-text">Shop for items based on what we featured in this week</div>
    </div>
    <div class="products d-flex flex-wrap justify-content-between">
		<item 
			v-for="item of items.slice(0, 8)" 
			:key="item.id"
			:item="item"
			class="products__item"
		/>
  </div>
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
import item from './item.vue';
import { get } from '../utils/reqs.js';

export default {
	components: { item },
	data() {
		return {
			// url: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/catalog.json',
			url: '/api/catalog',
			items: []
		}
	},
	mounted() {
		get(this.url)
		.then(d => { this.items = d })
	},
};
</script>

<style>
</style>