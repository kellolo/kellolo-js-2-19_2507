<template>
    <div class="w-100 feturedItems d-flex flex-wrap justify-content-between">
        <div class="row" id="catalog">
            <item 
                v-for="item of items"  
                :key="item.productId"
                :item="item"
            />
        </div> 
    </div>                   
</template>

<script>
    import item from './item.vue';
    import { get } from '../utils/reqs.js';
    export default {
        components: { item },
        data(){
            return{
                url:'https://raw.githubusercontent.com/O2xy/stattic/master/img/JS1_shop/JSON/catalog.json',
                items:[]
            }
        },
        mounted() {
            get(this.url)
            .then(d => {this.items = d })
        }
    }
</script>

<style>

</style>