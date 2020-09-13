<template>
  <main class="cart container">
    <section class="cart__block">
      <div class="cart__product-details">
        <div class="cart__header-text">Product Details</div>
      </div>
      <div class="cart__unite-price">
        <div class="cart__header-text">unite price</div>
      </div>
      <div class="cart__quantity">
        <div class="cart__header-text">quantity</div>
      </div>
      <div class="cart__shippping">
        <div class="cart__header-text">shippping</div>
      </div>
      <div class="cart__subtotal">
        <div class="cart__header-text">subtotal</div>
      </div>
      <div class="cart__action">
        <div class="cart__header-text">action</div>
      </div>
    </section>
	 <div id="cart">
		 <item v-for="item of this.$store.state.itemsBasket" type="cart" :key="item.id" :item="item" @remove="remove" />
	 </div>
    
  </main>
</template>

<script>
import item from "./item.vue";
import { get, put, del, post } from "../utils/reqs.js";
export default {
  components: { item },
  data() {
    return {
      // url: "https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/getBasket.json",
      url: "/api/getBasket",
      items: [],
    };
  },
  computed: {
    getSum: function () {
      let a = 0;
      this.$store.state.itemsBasket.forEach((item) => {
        a += item.price * item.amount;
      });
      return a;
    },
  },
  mounted() {
    get(this.url).then((basket) => {
      this.$store.state.itemsBasket = basket.content;
    });
    //  this.$parent.$parent.parentGet(this.url).then((d) => {
    //    this.items = d.content;
    // });
  },
  methods: {
    remove(item) {
      let find = this.$store.state.itemsBasket.find((el) => el.id == item.id);
      if (find.amount > 1) {
        put(`${this.url}/${item.id}`, -1).then((res) => {
          if (res.status) {
            find.amount--;
          } else {
            console.log("Server err");
          }
        });
      } else {
        del(`${this.url}/${item.id}`).then((res) => {
          if (res.status) {
            this.$store.state.itemsBasket.splice(this.$store.state.itemsBasket.indexOf(find), 1);
          } else {
            console.log("Server err");
          }
        });
      }
    },
  },
};
</script>

<style>
</style>