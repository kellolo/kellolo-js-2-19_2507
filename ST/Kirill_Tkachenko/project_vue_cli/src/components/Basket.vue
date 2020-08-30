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
import { get, post, put, del } from "../utils/index.js";
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
                const addItem = Object.assign({}, item, {amount: 1});
                post(this.url, addItem)
                    .then(res => {
                        if (res.success) {
                            this.items.push(addItem);
                        } else {
                            console.log(res.error);
                        }
                });
            } else {
                put(`${this.url}/${find.id}/${find.amount + 1}`)
                    .then(res => {
                        if (res.success) {
                            find.amount++;
                        } else {
                            console.log(res.error);
                        }
                });
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id == item.id);

            if (find.amount > 1) {
                put(`${this.url}/${find.id}/${find.amount - 1}`)
                    .then(res => {
                        if (res.success) {
                            find.amount--;
                        } else {
                            console.log(res.error);
                        }
                });
            } else {
                del(`${this.url}/${find.id}`)
                    .then(res => {
                        if (res.success) {
                            this.items.splice(this.items.indexOf(find), 1);
                        } else {
                            console.log(res.error);
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
