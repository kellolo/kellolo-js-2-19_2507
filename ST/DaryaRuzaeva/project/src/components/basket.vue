
<template>
    <div class="headerCartWrap">
        <div class="cart_wrap">
            <div id="basket" class="drop__flex-account">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.id"
                />
            </div>
            <div class="total_price">
                <div>total</div>
                <div>$500.00</div>
            </div>
            <button type="button" class="checkout_button">
                <a class="checkout" href="../public/checkout.html">Checkout</a>
            </button>
            <button type="button" class="cart_button">
                <a class="go_cart" href="../public/shopping_cart.html">Go&nbsp;to&nbsp;cart</a>
            </button>
        </div>       
    </div>
</template>

<script>
import item from './item.vue';
export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/RDarya/static/master/JSON/basket.json',
            items: []
        }
    },
    mounted() {
        this.$parent.parentGet(this.url)
        .then(d => { this.items = d.content })
    }
}
</script>

<style>

</style>