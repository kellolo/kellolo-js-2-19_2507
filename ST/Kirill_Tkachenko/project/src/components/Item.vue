<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button class="add">
                                <div class="add">
                                    <i class="add fas fa-shopping-cart"></i>
                                    Add to Cart
                                </div>
                            </button>
                        </div>
                        <img class="feturedProduct" :src="item.img" :alt="item.name">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{ item.name }}</div>
                        <div class="feturedItemPrice">${{ decimal(item.price) }}</div>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="type == 'basket'">
            <div class="d-flex headerCartWrapIn">
                <a href="#" class="d-flex">
                    <img :src="item.img" alt="" style="height: 85px">
                    <div>
                        <div>{{ item.name }}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">{{ item.amount }}
                            <span>x</span> ${{ decimal(item.price) }}
                        </div>
                    </div>
                </a>
                <a href="#" class="remove">
                    <i class="fas fa-times-circle remove"></i>
                </a>
            </div>
        </template>
    </div>
</template>

<script>
import { decimal } from "../utils/index.js";

export default {
    name: "Item",
    props: {
        type: {
            type: String,
            default: "catalog",
        },
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        decimal,
    }
}
</script>

<style>

</style>
