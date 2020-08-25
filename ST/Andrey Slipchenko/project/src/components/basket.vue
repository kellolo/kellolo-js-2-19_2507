<template>
    <div class="drop header__basket">
        <div class="drop__flex">
            <div id="basket">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.productId" 
                />
            </div>
            <div class="basket__under">
                <div class="basket__under_total">
                    <h3 class="total__text">TOTAL</h3>
                    <h3 class="total__price">&#36;500.00</h3>
                </div>
                <button class="basket__button_first">checkout</button>
                <button class="basket__button_second">go to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from './item.vue';

export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/Rutard-Hash/static/master/JSON/basket.json',
            items: []
        }
    },
    mounted() {
        this.$parent.parentGet(this.url)
        .then(d => { this.items = d.content })
    }
}
</script>

<style lang="scss" scoped>

</style>