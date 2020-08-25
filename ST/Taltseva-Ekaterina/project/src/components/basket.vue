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
                    @remove="remove"
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
import { get } from '../utils/reqs.js';
export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            items: []
        }
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d.content });
        //console.log(this )
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (!find) {
                this.items.push(Object.assign(item, {amount: 1}))
            } else {
                find.amount++
            }

        },
        remove(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find.amount > 1) {
                find.amount--
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }

        }

    }

}
</script>

<style>
    .headerCartWrapInAll {
        height: 300px;
        z-index: 50;
        overflow-y: auto;
    }
    .headerCartWrapInAll img {
        max-height: 50px;
    }
</style>