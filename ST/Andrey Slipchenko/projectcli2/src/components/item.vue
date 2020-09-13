<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="product__item">
                <a href="single page.html"><img class="product__image" :src="item.productImg"></a>
                <div class="product__description">
                    <a class="product__name" href="single page.html">{{item.productName}}</a>
                    <div class="product__price">&#36; {{item.productPrice}}</div>
                </div>
                <button class="product__add" @click="$parent.$emit('add', item)"> Add to Cart</button>
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
                        <h5 class="amount">{{ item.amount }} x</h5>
                        <h5 class="price">&nbsp;&#36; {{ item.productPrice }}</h5>
                    </div>
                </div>
                <button class="basket__item_icon" id="remove" @click="$emit('remove', item)">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        </template>

        <template v-if="type == 'shopping'">
            <div class="shopping__item">
                    <div class="shopping__product">
                        <a href="single%20page.html"><img class="shopping__product__img" :src="item.productImg"></a>
                        <a href="single%20page.html"><h3 class="shopping__product__name">{{item.productName}}</h3></a>
                        <h5 class="shopping__product__stat">Color:<span> Red</span></h5>
                        <h5 class="shopping__product__stat">Size:<span> Xll</span></h5>
                    </div>
                    <div class="shopping__descriptions">
                        <h3 class="shopping__description shopping__description_price">&#x24;{{ item.productPrice }}</h3>
                        <div class="shopping__description_buttons">
                            <button @click="$emit('remove', item)"><i class="fas fa-minus"></i></button>
                            <input type="text" class="shopping__input" :value = "item.amount">
                            <button @click="$emit('add', item)"><i class="fas fa-plus"></i></button>
                        </div>
                        <h3 class="shopping__description">FREE</h3>
                        <h3 class="shopping__description">{{ subTotal = item.productPrice * item.amount }}</h3>
                        <button class="shopping__description" @click="$emit('removeall', item)">
                            <i class="fas fa-times-circle"></i>
                        </button>
                    </div>
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
    },
    data() {
        return {
            subTotal: 0,
        }
    },
}
</script>

<style>

</style>