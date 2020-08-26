<template>
  <div>
    <template v-if="type == 'catalog'">
        <div class="feturedBlock">
            <div class="featuredImgWrap">
                <div class="featuredBuy justify-content-center align-items-center">
                    <button @click="$parent.$emit('add', item)">
                    <img src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/addToCart.png?raw=true" alt="">
                    Add to Cart
                    </button>
                </div>
                <img class="addtocartPhones d-md-none d-block" src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/cart.png?raw=true" alt="Cart">
                <img :src="item.productImg" alt="Featured1">
            </div>
            <div class="featured-text ml-3 mt-2">{{ item.productName }}</div>
            <div class="featured-price ml-3 mt-2">${{ item.productPrice }}</div>
        </div>
    </template>

    <template v-if="type == 'basket'">
        <div class="cartMenu-block d-flex justify-content-between align-items-center mx-3 py-3">
            <img :src="item.productImg">
            <div class="cartMenu-block-content my-auto ml-3">
                <h4 class="cartMenu-h4-f1">{{item.productName}}</h4>
                <h4 class="cartMenu-h4-f2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></h4>
                <h4 class="cartMenu-h4-f3">{{item.quantity}}  x  ${{item.productPrice}}</h4>
            </div>
            <button class="cartMenu-h4-f4">
            <i class="fas fa-times-circle"
            @click="$emit('remove', item)"></i>
            </button>
        </div>
    </template>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'catalog'
        },
        item: { type: Object }
    }
}
</script>

<style>
</style>