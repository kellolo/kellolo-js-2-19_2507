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
                find = Object.assign({}, item, {amount: 1});
                fetch(this.url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(find)
                }).then(res => {
                    if (res.status == 200) {
                        this.items.push(find);
                    }
                });
            } else {
                fetch(this.url, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(Object.assign({}, find, {amount: find.amount + 1}))
                }).then(res => {
                    if (res.status == 200) {
                        find.amount++;
                    }
                });
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id == item.id);

            if (find.amount > 1) {
                fetch(this.url, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(Object.assign({}, find, {amount: find.amount - 1}))
                }).then(res => {
                    if (res.status == 200) {
                        find.amount--;
                    }
                });
            } else {
                fetch(this.url, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(find)
                }).then(res => {
                    if (res.status == 200) {
                        this.items.splice(this.items.indexOf(find), 1);
                    }
                });
            }
        },
    },
    mounted() {
        get(this.url).then(data => { this.items = data });
    },
}
</script>

<style>

</style>
