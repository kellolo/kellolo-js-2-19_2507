<template>
    <div>
        <div class="row d-flex justify-content-around justify-content-lg-between" v-if="items">
            <!-- ITEMSCATALOG -->
            <Item
                    v-for="item of itemsFiltered"
                    type="catalog"
                    :item="item"
                    :key="item.id"
            />
        </div>
        <div v-else>
            <h3>Not Products</h3>
        </div>
    </div>
</template>

<script>

    import Item from "./Item.vue";
    import {parentGet} from "../utils/get.js";

    export default {
        components: {
            Item,
        },
        data() {
            return {
                // url: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/catalogData.json',
                url: '/api/catalog',
                items: [],
                itemsFiltered: []
            }
        },
        methods: {
            filterItem(priceFilter = {min: 0, max: 1000}) {
                this.itemsFiltered = [...this.items]
                this.itemsFiltered = this.itemsFiltered
                    .filter(item => priceFilter.min <= +item.price && +item.price <= priceFilter.max)
            },
        },

        mounted() {
            parentGet(this.url)
                .then(items => {
                    items.map(item => item.quantity = 1)
                    this.items = [...items];
                    this.filterItem()
                })
        },
    }
</script>

<style>

</style>