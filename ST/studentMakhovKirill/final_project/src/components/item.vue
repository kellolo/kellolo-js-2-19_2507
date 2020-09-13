<template>
  <div>
    <template v-if="type == 'catalog'">
      <div class="products__wrap-img">
        <div class="products__buy">
          <button @click="$parent.$parent.$emit('add', item)">
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
    <template v-if="type == 'cart'">
      <section class="cart__block">
        <div class="cart__product-details">
          <img
            :src="item.img"
            alt="product-1"
          />
          <div class="cart__product">
            <h2 class="cart__header-text">{{ item.name }}</h2>
            <div class="cart__color">
              <span>Color:</span> Red
            </div>
            <div class="cart__size">
              <span>Size:</span> Xll
            </div>
          </div>
        </div>
        <div class="cart__unite-price">
          <div class="cart__price">{{ item.price }}</div>
        </div>
        <div class="cart__quantity">
          <input v-model="message" type="number" :placeholder= item.amount />
        </div>
        <div class="cart__shipping">
          <div class="cart__shipping-posititon">FREE</div>
        </div>
        <div class="cart__subtotal">
          <div class="cart__subtotal-price">$150</div>
        </div>
        <div class="cart__action">
          <div class="cart__action-btn">
            <button @click="$emit('remove', item)">x</button>
          </div>
        </div>
      </section>
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