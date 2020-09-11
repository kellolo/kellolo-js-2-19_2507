<template>
    <div  class="product" id="catalog">
        <item
            v-for="item of items"
            :key="item.productId"
            :item="item"
        />
    </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/regs';

export default {
    components: {item},
    data() {
        return {
            url: '/api/catalog',
            items: [],
        }
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d})
    }        
}
</script>

<style>

</style>