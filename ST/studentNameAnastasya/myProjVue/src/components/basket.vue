<template>
  <div id="basket" class="account">
    <item v-for="item of items" type="basket" :key="item.id" :item="item" @remove="remove" />
    <div class="account-total">
      <h3 class="account-total__h">Total</h3>
      <h3 class="account-total__h">{{basketSum}}</h3>
    </div>
    <button class="account__btn" onclick="document.location='checkout.html'">Checkout</button>
    <button class="account__btn" onclick="document.location='ShoppingCart.html'">
      Go to
      cart
    </button>
  </div>
</template>
<script>
import item from "./item.vue";
export default {
  components: { item },
  data() {
    return {
      url: "/api/basket",
      items: [],
      basketSum: 0,
    };
  },
  methods: {
    add(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (!find) {
        this.items.push(Object.assign({}, item, { quantity: 1 }));
      } else {
        find.quantity++;
      }
      this.getSum(item);
    },
    remove(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (find.quantity > 1) {
        find.quantity--;
      } else {
        this.items.splice(this.items.indexOf(find), 1);
      }
      this.getRemove(item);
    },
    getSum(item) {
      return (this.basketSum += item.price);
    },
    getRemove(item) {
      return (this.basketSum -= item.price);
    },
  },
  mounted() {
    this.$parent.parentGet(this.url).then((d) => {
      this.items = d.contents;
    });
  },
};
</script>