<template>
  <transition name="basket">
    <div>
      <div class="basket__Product">
        <div class="py-2">
          <!-- BASKETITEMS -->
          <Item v-for="item of $store.state.itemsBasket" type="basket" :item="item" :key="item.id" />
        </div>
        <div class="row mx-3 d-flex justify-content-between my-2">
          <span>TOTAL</span>
          <span class="text-muted">${{countingGoods}}</span>
          <router-link :to="{name: 'CheckOut'}">
            <a
              href="#"
              class="btn btn-primary btn-lg buttMyAccount mt-4 d-flex align-items-center justify-content-center"
              role="button"
              aria-pressed="true"
            >Checkout</a>
          </router-link>
          <router-link :to="{name: 'ShoppingCart'}">
            <a
              href="#"
              class="btn btn-primary btn-lg buttMyAccount my-2 d-flex align-items-center justify-content-center"
              role="button"
              aria-pressed="true"
            >Go to cart</a>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    const Item = () => import('./Item.vue');

    export default {
        name: "basket",

        components: {
            Item,
        },

        data() {
            return {
            url: "/api/basket",
            items: [],
            basketSum: null,
            };
        },

        computed: {
            countingGoods() {
              this.amount()
              this.basketSum = this.$store.state.basketSum;
              return this.basketSum
            },
        },

        methods: {
            amount() {
              this.$store.commit('countingGoods');
            }
        },

        mounted() {
          this.$store.commit('getCart');
        },
    };
</script>

<style>
</style>