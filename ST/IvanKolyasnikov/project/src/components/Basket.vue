<template>
    <transition name="basket">
        <div>
            <div class="basket__Product">
                <div class="py-2">
                    <!-- BASKETITEMS -->
                    <Item
                            v-for="item of items"
                            type="basket"
                            :item="item"
                            :key="item.id"
                    />
                </div>
                <div class="row mx-3 d-flex justify-content-between my-2"><span>TOTAL</span> <span
                        class="text-muted">${{countingGoods}}</span>
                    <router-link :to="{name: 'CheckOut'}">
                    <a href="#"
                       class="btn btn-primary btn-lg buttMyAccount mt-4 d-flex align-items-center justify-content-center"
                       role="button"
                       aria-pressed="true">Checkout
                    </a>
                    </router-link>
                    <router-link :to="{name: 'ShoppingCart'}">
                    <a href="#"
                       class="btn btn-primary btn-lg buttMyAccount my-2 d-flex align-items-center justify-content-center"
                       role="button" aria-pressed="true">Go to cart
                    </a>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Item from "./Item.vue";
    import {parentGet} from "../utils/get.js"

    export default {

        name: 'basket',

        components: {
            Item,
        },

        data() {
            return {
                // url: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/getBasket.json',
                url: '/api/basket',
                items: [],
                basketSum: null,
            }
        },

        computed: {
            countingGoods() {
                this.basketSum = null;
                this.items.forEach(item => this.basketSum += +item.price * +item.quantity);
                return this.basketSum
            }
        },

        methods: {
            remove(itemID) {
                let find = this.items.find(el => el.id === itemID);
                if (find.quantity > 1) {
                    find.quantity--;
                } else {
                    this.items.splice(this.items.indexOf(find), 1);
                }
            },
            add(item) {
                let find = this.items.find(el => el.id === +item.id);
                if (!find) {
                    this.items.push(Object.assign(item, {amount: 1}));
                } else {
                    find.quantity++;
                }
            },
        },

        mounted() {
            parentGet(this.url)
                .then(items => {
                    this.items = items.contents;
                });
        },
    }

</script>

<style>

</style>