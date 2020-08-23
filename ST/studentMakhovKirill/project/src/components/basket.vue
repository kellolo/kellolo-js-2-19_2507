<template>
  <div class="headerCart">
    <div id="basket" class="headerCart__main">
      <!--BASKET ITEM-->
      <item 
			v-for="item of items" 
			type="basket" 
			:key="item.id"
			:item="item" 
		/>
    </div>
    <div class="headerCart__totalPrice">
      <div>total</div>
      <div>
        $
        <div id="sum">{{ sum }}</div>
      </div>
    </div>
    <button class="headerCart__button">
      <a href="checkout.html">Checkout</a>
    </button>
    <button class="headerCart__button">
      <a href="cart.html">Go to cart</a>
    </button>
  </div>
</template>

<script>
import item from "./item.vue";
export default {
  components: { item },
  data() {
    return {
      url: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/getBasket.json',
      items: [],
    };
  },
  mounted() {
	  this.$parent.$parent.parentGet(this.url)
	  .then(d => { this.items = d.content })
  }
};
</script>

<style>
</style>