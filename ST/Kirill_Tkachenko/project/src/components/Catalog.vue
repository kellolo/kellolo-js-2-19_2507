<template>
    <div class="row" id="catalog">
        <item
            v-for="item of items"
            :item="item"
            :key="item.id"
        />
    </div>
</template>

<script>
import { get } from "../utils";
import Item from "./Item.vue";

export default {
    name: "Catalog",
    components: {
        Item,
    },
    data() {
        return {
            url: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/catalog.json",
            items: [],
        }
    },
    mounted() {
        get(this.url).then(data => { this.items = data });
    },
}
</script>

<style>

</style>
