<template>
    <div :class="classes">
        <template v-if="place == 'header'">
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
        </template>

        <template v-if="place == 'main'">
            <div class="productDetailsTitles">
                <div class="productDetailsTitlesLeft">Product Details</div>
                <div class="productDetailsTitlesRight">
                    <div>unite Price</div>
                    <div>quantity</div>
                    <div>shipping</div>
                    <div>Subtotal</div>
                    <div>Action</div>
                </div>
            </div>

            <item
                v-for="item of items"
                type="cart"
                :item="item"
                :key="item.id"
                @update="update"
                @remove="remove"
            />

            <div class="productDetailsButtons">
                <button>cLEAR SHOPPING CART</button>
                <button>cONTINUE sHOPPING</button>
            </div>
        </template>
    </div>
</template>

<script>
import { get, post, put, del } from "../utils/index.js";
import Item from "./Item.vue";

export default {
    name: "Basket",
    props: {
        place: {
            type: String,
            default: "header",
        },
    },
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
        },
        classes() {
            return this.place == "header" ? "headerCartWrap" : "productDetailsAll container";
        },
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
        update(item) {
            console.log('update basket method entry');
            let find = this.items.find(el => el.id == item.id);

            if (item.amount > 0) {
                put(`${this.url}/${find.id}/${item.amount}`)
                    .then(res => {
                        if (res.success) {
                            find.amount = item.amount;
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
