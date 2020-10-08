<template>
  <div>
    <template v-if="type == 'catalog'">

            <div class="feturedItem">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button class="add" @click="$parent.$emit('add', item)">
                            <div class="add">
                            <i class="add fas fa-shopping-cart"></i>Add to Cart</div>
                        </button>
                    </div>
                    <img class="feturedProduct" :src="item.productImg" alt="product1">
                </div>
                <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                    <div class="feturedItemName">{{item.productName}}</div>
                    <div class="feturedItemPrice">$${{item.productPrice}}</div>
                </div>
            </div>

    </template>

    <template v-if="type == 'basket'">
        <div class="d-flex headerCartWrapIn">
            <a href="#" class="d-flex ">
                <img :src="item.productImg" alt="">
                <div>
                    <div>{{ item.productName }}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">
                        {{ item.amount }} 
                        <span>x</span> 
                        ${{ item.productPrice }}
                    </div>
                </div>
            </a>
            <button class="fas fa-times-circle"  @click="$emit('remove', item)"></button>
        </div>
    </template>
  </div>
</template>

<script>
export default {
    // props: ['type']
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