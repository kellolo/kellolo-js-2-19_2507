<template>
    <div class="headerCartWrap">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket" class="d-flex flex-column">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.id"
                    @remove="remove"
                />
                <div class="headerCartWrapTotalPrice">
                    <div>total&nbsp;</div>
                    <div>${{ total }}</div>
                </div>

                <button type="button" class="productsButtonIndex">Checkout</button>
                <button type="button" class="productsButtonIndex">Go to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { get } from "../utils/index.js";
import Item from "./Item.vue";

export default {
    name: "Basket",
    components: {
        Item,
    },
    data() {
        return {
            url: "/api/basket",
            items: [],
        }
    },
    computed: {
        total() {
            let result = 0;
            this.items.forEach(item => { result += item.price * item.amount });
            return result.toFixed(2);
        }
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.id == item.id);

            if (!find) {
                this.items.push(Object.assign({}, item, {amount: 1}));
            } else {
                find.amount++;
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id == item.id);

            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        },
    },
    mounted() {
        get(this.url).then(data => { this.items = data });
    },
    updated() {
        fetch(this.url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.items)
        })
        .then(res => { console.log(res.status) });
    },
}
</script>

<style>

</style>
