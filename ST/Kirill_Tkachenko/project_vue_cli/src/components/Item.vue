<template>
    <div :class="classes">
        <template v-if="type == 'catalog'">
            <div class="feturedItem">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button class="add" @click="$parent.$emit('add', item)">
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
        </template>

        <template v-if="type == 'basket'">
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
            <a href="#" class="remove" @click.stop.prevent="$emit('remove', item)">
                <i class="fas fa-times-circle remove"></i>
            </a>
        </template>
    </div>
</template>

<script>
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
        decimal(numb) { return numb.toFixed(2) }
    },
    computed: {
        classes() {
            return this.type == "catalog" ?
                "col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" :
                "d-flex headerCartWrapIn"
        }
    },
}
</script>

<style>

</style>
