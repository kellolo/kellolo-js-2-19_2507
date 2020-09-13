<template>
  <div class="headerCart">
    <div id="basket" class="headerCart__main">
      <!--BASKET ITEM-->
      <item v-for="item of this.$store.state.itemsBasket" type="basket" :key="item.id" :item="item" @remove="remove" />
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
    add(item) {
      let find = this.$store.state.itemsBasket.find((el) => el.id == item.id);
      if (!find) {
        let newItem = Object.assign({}, item, { amount: 1 });
        post(this.url, newItem).then((res) => {
          if (res.status) {
            this.$store.state.itemsBasket.push(newItem);
          } else {
            console.log("Server err");
          }
        });
      } else {
        put(`${this.url}/${item.id}`, 1).then((res) => {
          if (res.status) {
            find.amount++;
          } else {
            console.log("Server err");
          }
        });
      }
    },
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