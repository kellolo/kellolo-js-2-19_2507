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
                <div>total&nbsp;</div>
                <div>$${this.total}</div>
            </div>
            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
    import item from './item.vue';
    export default {
        components: { item },
        data(){
            return{
                url:'https://raw.githubusercontent.com/O2xy/stattic/master/img/JS1_shop/JSON/basket.json',
                items:[]
            }
        },
        mounted(){
            this.$parent.parentGet(this.url).then(d => {this.items = d.content})
        }
    }
    
</script>

<style>

</style>