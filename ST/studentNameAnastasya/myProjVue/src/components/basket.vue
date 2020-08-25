<template>
  <div id="basket" class="account" v-show="basketShown">
     <item v-for="item of items" type="basket" 
     :key="item.id"
     :item = "item"/>
    <div class="account-total">
      <h3 class="account-total__h">Total</h3>
      <h3 class="account-total__h">0</h3>
    </div>
    <button class="account__btn" onclick="document.location='checkout.html'">Checkout</button>
    <button class="account__btn" onclick="document.location='ShoppingCart.html'">
      Go to
      cart
    </button>
  </div>
</template>
<script>
import item from './item.vue'
export default {
    components: {item},
    data() {
        return {
        url: 'https://raw.githubusercontent.com/AnastasyaChe/json/master/getBasket.json',
        items: [],
        }
    },
    mounted() {
        this.$parent.parentGet(this.url).then(d=> {this.items = d.contents})
    }
}
</script>