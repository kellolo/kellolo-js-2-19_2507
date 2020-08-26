<template>
  <div class="products d-flex flex-wrap justify-content-between">
    <item 
		v-for="item of items" 
		:key="item.id"
		:item="item"
		class="products__item"
	 />
  </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';

export default {
	components: { item },
	data() {
		return {
			url: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/catalog.json',
			items: []
		}
	},
	mounted() {
		get(this.url)
		.then(d => { this.items = d })
	}
};
</script>

<style>
</style>