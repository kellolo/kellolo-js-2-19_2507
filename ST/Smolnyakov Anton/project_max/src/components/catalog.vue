<template>
    <div class="row row-cols-3" id="catalog">
<!--        CATALOG ITEMS HERE-->
        <item v-for="item of items"
              :key="item.id"
              :item="item"
        />
    </div>
</template>

<script>
    import item from './item.vue';
    import { get } from "../utils/reqs"
    export default {
        components: { item },
        data() {
            return {
                url: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/catalog.json",
                items: []
            }
        },
        mounted() {
            get(this.url)
                .then(data => { this.items = data});
        }
    }
</script>

<style scoped>

</style>