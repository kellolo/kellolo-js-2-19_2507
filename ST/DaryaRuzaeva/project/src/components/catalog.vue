
<template>
    <div class="product_box" id="catalog">
        <item 
            v-for="item of items" 
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';

export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/RDarya/static/master/JSON/catalog.json',
            items: []
        }
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d })
    }
}
</script>

<style>

</style>