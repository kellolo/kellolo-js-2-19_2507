<template>
        <div class="headerCartWrapInAll">
            <div id="cart" class="d-flex flex-column">
                <!--BASKET/CART ITEMS Here-->
                <item v-for="item of items"
                      type="cart"
                      :key="item.id"
                      :item="item"
                />
            </div>

            <div class="headerCartWrapTotalPrice">
                <div>total</div>
<!--                <div id="totalSum">{{ renderTotalSum }}</div>-->
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
</template>

<script>
    import item from './item.vue';
    export default {
        components: { item },
        data() {
            return {
                url: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/cart.json",
                items: []
            }
        },

        mounted() {
            this.$parent.parentGet(this.url)
                .then(data => {
                    this.items = data.contents
                })

        }
    }
</script>

<style scoped>

</style>