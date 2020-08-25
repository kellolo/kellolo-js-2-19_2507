<template>
	<div id="basketBlock">
		<div id="basket">
		<!--BASKET ITEMS-->
            <item 
                v-for="item of items" 
                type="basket" 
                :item="item"
                :key="item.productId"
            />
		</div>
		<div class="cartMenu-price d-flex mx-3 mt-3 justify-content-between align-items-center">
			<h2>TOTAL</h2>
			<h2 id="amount">${{basketTotal}}</h2>
		</div>
		<div class="cartMenu-chkButton mx-3 d-flex justify-content-center align-items-center">
			<a href="#">Checkout</a>
		</div>
		<div class="cartMenu-crtButton mx-3 d-flex justify-content-center align-items-center">
			<a href="#">Go to cart</a>
		</div>
	</div>
</template>
<script>
	import item from './item.vue';
	export default {
	    components: { item },
	    data() {
	        return {
	            url: 'https://raw.githubusercontent.com/MoffAndrey/Static/master/JSON/GeekBrains/getBasket.json',
	            items: [],
	            basketTotal: 0
	        }
	    },

	    methods: {
	    	
	    },
	    
	    mounted() {
	        this.$parent.parentGet(this.url).then(d => { 
	        	this.items = d.contents;
	        	this.basketTotal = +d.amount })
	    }
	}
</script>