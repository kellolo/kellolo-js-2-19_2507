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
                    <a href="#"
                       class="btn btn-primary btn-lg buttMyAccount mt-4 d-flex align-items-center justify-content-center"
                       role="button" aria-pressed="true">Checkout</a>
                    <a href="#"
                       class="btn btn-primary btn-lg buttMyAccount my-2 d-flex align-items-center justify-content-center"
                       role="button" aria-pressed="true">Go to cart</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Item from "./Item.vue";

    export default {
        name: 'basket',
        components: {
            Item,
        },

        data() {
            return {
                url: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/getBasket.json',
                items: [],
                basketSum: '',
            }
        },

        computed: {
            countingGoods() {
                this.basketSum = '';
                this.items.forEach(item => this.basketSum += item.price * item.quantity);
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
                // },
                // add(item) {
                //     let find = items.find(el => el.id === +item.id);
                //     if (!find) {
                //         items.push(item);
                //     } else {
                //         find.quantity++;
                //     }
            },
        },

        mounted() {
            this.$parent.$parent.parentGet(this.url)
                .then(items => {
                    this.items = items.contents;
                });

        },
    }

</script>

<style>

</style>