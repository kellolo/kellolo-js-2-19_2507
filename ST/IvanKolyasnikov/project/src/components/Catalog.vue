<template>
    <div>
        <div class="row d-flex justify-content-around justify-content-lg-between" v-if="items">
            <!-- ITEMSCATALOG -->
            <Item
                    v-for="item of items"
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


    export default {
        components: {
            Item,
        },
        data() {
            return {
                url: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/catalogData.json',
                items: [],
            }
        },
        methods: {

        },
        mounted() {
            this.$parent.parentGet(this.url)
                .then(items => {
                    items.map(item => item.quantity = 1)
                    this.items = items;
                })
        },
    }
</script>

<style>

</style>