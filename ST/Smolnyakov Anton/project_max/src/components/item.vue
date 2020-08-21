<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="d-flex">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button @click="add(item)">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" :src="item.img" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{ item.name }}</div>
                        <div class="feturedItemPrice">${{ item.price }}</div>
                        <button class="d-md-none" @click="add(item)">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>


        </template>

        <template v-if="type == 'cart'">
            <a href="#" class="d-flex justify-content-between align-items-center">
                <div class="d-flex ">
                    <div class="cartImg"><img :src="item.img" alt=""></div>
                    <div class="d-flex flex-column justify-content-around cartItemName">
                        <div>{{ item.name }}</div>
                        <span class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                        <div class="headerCartWrapPrice">
                            {{item.amount}}
                            <span>x</span>
                            ${{item.price}}
                        </div>
                    </div>
                </div>
                <button @click="remove(item)"><i class="fas fa-times-circle" id="removeProductCart" aria-hidden="true"></i></button>
            </a>
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

<style scoped>

</style>