<template>
	<div class="feturedArea text-left d-flex flex-wrap justify-content-center justify-content-md-between align-items-center">
		<item 
            v-for="item of items" 
            :key="item.productId"
            :item="item"
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
	            url: 'https://raw.githubusercontent.com/MoffAndrey/Static/master/JSON/GeekBrains/catalogData.json',
	            items: []
	        }
	    },

	    mounted() {
	        this.$parent.parentGet(this.url)
	        	.then(d => { this.items = d })
	    }
	}
</script>