<template>
  <div>
    <template v-if="type == 'catalog'">
      <div class="products__wrap-img">
        <div class="products__buy">
          <button @click="$parent.$parent.$parent.$emit('add', item)">
            <img
              src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/addToCart.png"
              alt
            />
            Add to Cart
          </button>
        </div>
        <img class="products__img" :src="item.img" alt="product1" />
      </div>
      <div class="products__bottom">
        <div class="products__name">{{ item.name }}</div>
        <div class="products__price">{{ item.price }}</div>
      </div>
    </template>
    <template v-if="type == 'basket'">
      <div class="headerCart__item">
        <div class="headerCart__product">
          <img :src="item.img" alt />
          <div class="headerCart__description">
            <div class="headerCart__name">{{ item.name }}</div>
            <div class="headerCart__price">
              {{ item.amount }}
              <span>x</span>
              ${{ item.price }}
            </div>
          </div>
        </div>
        <button @click="$emit('remove', item)">x</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  //props: ['type']
  props: {
    type: {
      type: String,
      default: "catalog",
    },
    item: { type: Object },
  },
};
</script>

<style>
</style>