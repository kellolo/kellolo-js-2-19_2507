<template>
<div>
<template v-if="type == 'catalog'">
    <article class="galery__product">
        <img class="product__img prodimage" :src="item.img" alt="prodimage">
        <div class="product__add" @click="add(item)">
        <i class="fas fa-shopping-cart"></i> <span class="text_to_cart"> Add to Cart </span>
        </div>

        <div class="galery__info">
        <h2 class="galery__mango">{{item.name}}</h2>
        <div class="galery__price">${{item.price}}</div>
        </div>
    </article>

</template>
    <template v-if="type == 'basket'">
            <div  class="account__box">
                <a href="product.html">
                <img class="account__img" :src="item.img" alt="img"></a>
                <div class="account__item">
                <h3 class="account__h">{{item.name}}</h3>

                <p class="account__price">{{item.quantity}} <span class="account__span"> x </span>
                ${{item.price}}</p>

                </div>
                <button class="account__none" name="remove" @click="remove(item)">x</button>
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
        item: {type: Object}
    }
}
</script>