<template>
    <div class="drop header__basket">
        <div class="drop__flex">
            <div id="basket">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.productId" 
                    @remove = "remove"
                />
            </div>
            <div class="basket__under">
                <div class="basket__under_total">
                    <h3 class="total__text">TOTAL</h3>
                    <h3 class="total__price">&#36;{{ totalPrice }}</h3>
                </div>
                <button class="basket__button_first">checkout</button>
                <button class="basket__button_second">go to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/regs';

export default {
    components: { item },
    data() {
        return {
            url: '/api/basket',
            items: [],
            totalPrice: 0
        }
    },
    mounted() {
        get(this.url)
            .then(basket => {
                this.totalPrice = basket.totalPrice
                this.items = basket.content
                
            })
    },
    methods: {
      add(item) {
          
          let find = this.items.find(el => el.productId == item.productId)
          if(!find) {
            this.items.push(Object.assign({}, item,  {amount: "1"}))
            this.plusTotalPrice(item)
          } else {
              find.amount++
              this.plusTotalPrice(item)
          }
      },
      remove(item) {
          let find = this.items.find(el => el.productId == item.productId)
          if(find.amount > 1) {
              find.amount--
              this.minusTotalPrice(item)
          } else {
              this.minusTotalPrice(item)
              this.items.splice(this.items.indexOf(find), 1)
          }
      },
      plusTotalPrice(item) {
          this.totalPrice += item.productPrice
      },
      minusTotalPrice(item) {
          this.totalPrice -= item.productPrice
      },
    },
}
</script>

<style>

</style>