<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="product__item">
                <a href="single page.html"><img class="product__image" :src="item.productImg"></a>
                <div class="product__description">
                    <a class="product__name" href="single page.html">{{item.productName}}</a>
                    <div class="product__price">&#36; {{item.productPrice}}</div>
                </div>
                <a class="product__add" href="#">Add to Cart</a>
            </div>
        </template>


        <template v-if="type == 'basket'">
            <div class="basket__item">
                <div class="basket__item_img"><img :src="item.productImg" alt="basket-item-img"></div>
                <div class="basket__item_desc">
                    <h4 class="basket__item_name">{{item.productName}}</h4>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <div class="calc">
                        <h5 class="amount"> {{ item.amount }} x</h5>
                        <h5 class="price">&nbsp;&#36; {{ item.productPrice }}</h5>
                    </div>
                </div>
                <button class="basket__item_icon" id="remove">
                    <i class="fas fa-times-circle"></i>
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