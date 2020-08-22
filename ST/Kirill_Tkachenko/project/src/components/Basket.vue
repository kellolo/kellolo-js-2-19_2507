<template>
    <div class="headerCartWrap">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket" class="d-flex flex-column">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.id"
                />
                <div class="headerCartWrapTotalPrice">
                    <div>total&nbsp;</div>
                    <div>${{ decimal(total) }}</div>
                </div>

                <button type="button" class="productsButtonIndex">Checkout</button>
                <button type="button" class="productsButtonIndex">Go to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { get, decimal } from "../utils/index.js";
import Item from "./Item.vue";

export default {
    name: "Basket",
    components: {
        Item,
    },
    data() {
        return {
            url: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/basket.json",
            items: [],
            total: 0,
        }
    },
    methods: {
        decimal,
    },
    mounted() {
        get(this.url).then(data => {
            this.items = data.contents;
            this.total = data.total;
        });
    },
}
</script>

<style>

</style>
