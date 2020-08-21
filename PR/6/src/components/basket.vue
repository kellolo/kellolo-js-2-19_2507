<template>
    <div class="headerCartWrap">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket" class="d-flex flex-column">
                <!--BASKET ITEMS-->
                <item 
                    v-for="item of items" 
                    type="basket" 
                    :item="item"
                    :key="item.productId"
                />
            </div>
            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>$500.00</div>
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
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            items: []
        }
    },
    mounted() {
        this.$parent.parentGet(this.url)
        .then(data => { this.items = data.content })
    }
}
</script>

<style>

</style>