<template>
	<aside class="container aside-products">
		<div class="head-text text-center text-uppercase">
   		<h2>you may like also</h2>
		</div>
		<div class="products d-flex flex-wrap justify-content-between">
			<item 
			v-for="item of items.slice(0, 4)" 
			:key="item.id"
			:item="item"
			class="products__item"
			/>
		</div>
	</aside>
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