<template>
  <div class="headerCart">
    <div id="basket" class="headerCart__main">
      <!--BASKET ITEM-->
      <item 
		v-for="item of items" 
		type="basket" 
		:key="item.id" 
		:item="item" 
		@remove="remove" 
		/>
    </div>
    <div class="headerCart__totalPrice">
      <div>total</div>
      <div>
        ${{ this.getSum }}
        <div id="sum"></div>
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
      
      // url: "https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/getBasket.json",
	  url: '/api/getBasket',
	  items: []
    };
  },
  computed: {
	getSum: function () {
		let a = 0;
		this.items.forEach((item) => {
			a += item.price * item.amount
		})
		return a;
	}
  },
  mounted() {
    this.$parent.$parent.parentGet(this.url).then((d) => {
      this.items = d.content;
    });
  },
    methods: {
        add(item) {
            let find = this.items.find(el => el.id == item.id);
            if (!find) {
                this.items.push(Object.assign(item, {amount: 1}))
            } else {
                find.amount++
				}
        },
        remove(item) {
            let find = this.items.find(el => el.id == item.id);
            if (find.amount > 1) {
                find.amount--
            } else {
                this.items.splice(this.items.indexOf(find), 1);
				}
        }
    }
};
</script>

<style>
</style>