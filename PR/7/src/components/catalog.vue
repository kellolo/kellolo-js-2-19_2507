<template>
    <div class="w-100 feturedItems d-flex flex-wrap justify-content-between">
            <item 
                v-for="item of items" 
                :key="item.productId"
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
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            url: '/api/catalog',
            items: []
        }
    },
    methods: {
        
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d })
    }
}
</script>

<style>

</style>