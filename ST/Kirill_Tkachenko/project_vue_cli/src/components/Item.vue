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

        <template v-if="type == 'cart'">
                <div class="productDetailsDescription">
                    <img :src="item.img" alt="item.name">
                    <div class="productDescription">
                        <div class="productDescriptionTitle">{{ item.name }}</div>
                        <div>
                            <div class="productDescriptionFeature">Color: <span>Red</span></div>
                            <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                        </div>
                    </div>
                </div>
                <div class="productDetailsRight">
                    <div class="productDetailsPrice">${{ decimal(item.price) }}</div>
                    <div class="productDetailsQuantity">
                        <form>
                            <input
                                type="number"
                                min="0"
                                max="9999"
                                v-model="item.amount"
                                @change="$emit('update', item)"
                            >
                        </form>
                    </div>
                    <div class="productDetailsShipping">Free</div>
                    <div class="productDetailsSubtotal">${{ decimal(item.price * item.amount) }}</div>
                    <div class="productDetailsAction"  @click="$emit('remove', item)">
                        <i class="fas fa-times-circle"></i>
                    </div>
                </div>
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
            switch (this.type) {
                case "catalog":
                    return "col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems";
                case "basket":
                    return "d-flex headerCartWrapIn";
                case "cart":
                    return "productDetailsProduct";
            }
        }
    },
}
</script>

<style>

</style>
