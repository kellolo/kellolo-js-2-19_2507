
<template>
  <div>
    <template v-if="type == 'catalog'">
        <div class="product-box">
            <div class="product">
                <img :src="item.img" class="product__img" alt="">
                <div class="product__name">{{ item.name }}</div>
                <div class="product__price">${{ item.price }}</div>
                <button @click="add(item)" class="product__add">
                    <i class="fas fa-shopping-cart"></i>Add to Cart
                </button>
            </div>
        </div>
    </template>
    <template v-if="type == 'basket'">
        <div>
            <a href="#" class="drop_account">
                <img class="account-img" :src="item.img" alt="">
                <div class="account_description">
                    <div class="account__h3">{{ item.name }}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="account_price">
                        {{ item.amount }} 
                        <span>x</span> 
                        ${{ item.price }}
                    </div>
                    <button 
                        class="fas fa-times-circle"  
                        @click="remove(item)">
                    </button>
                </div>
            </a>    
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