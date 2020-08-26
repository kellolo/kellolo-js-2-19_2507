<template>
	<div id="basketBlock">
		<div id="basket">
		<!--BASKET ITEMS-->
            <item 
                v-for="item of items" 
                type="basket" 
                :item="item"
                :key="item.productId"
                @remove="remove"
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
	            url: '/api/basket',
	            items: [],
	            basketTotal: 0
	        }
	    },

	    methods: {
	    	add(item) {
	    		let find = this.items.find(el => el.productId == item.productId);
                if (!find) {
                    this.items.push(Object.assign(item, {quantity: 1}))

                } else {
                    find.quantity++;
                }
               this.basketTotal += +item.productPrice;
	    	},

	    	remove(item) {
	            let find = this.items.find(el => el.productId == item.productId);

	            if (find.quantity > 1) {
	                find.quantity--;
	            } else {
	                this.items.splice(this.items.indexOf(find), 1);
	            }
	            this.basketTotal -= find.productPrice;
            }
	    },

	    mounted() {
	        this.$parent.parentGet(this.url).then(d => { 
	        	this.items = d.contents;
	        	this.basketTotal = +d.amount })
	    }
	}
</script>