<template>
    <div class="headerCartWrapInAll">
        <div id="cart" class="d-flex flex-column">
            <!--BASKET/CART ITEMS Here-->
            <item v-for="item of items"
                  type="cart"
                  :key="item.id"
                  :item="item"
                  @remove="remove"
            />
        </div>

        <div class="headerCartWrapTotalPrice">
            <div>total</div>
            <div id="totalSum">{{ renderTotalSum }}</div>
        </div>

        <button type="button" class="productsButtonIndex">Checkout</button>
        <button type="button" class="productsButtonIndex">Go to cart</button>
    </div>
</template>

<script>
    import item from './item.vue';

    export default {
        components: {item},
        data() {
            return {
                url: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/cart.json",
                items: [],
                totalSum: null,
            }
        },

        mounted() {
            this.$parent.parentGet(this.url)
                .then(data => {
                    this.items = data.contents
                });
        },

        methods: {
            add(item) {
                let cartItem = {
                    name: item.name,
                    price: +item.price,
                    img: item.img,
                    amount: 1,
                    id: item.id
                }
                let find = this.items.find(el => el.id == cartItem.id);
                if (!find) {
                    this.items.push(Object.assign(cartItem))
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

        computed: {
            renderTotalSum() {
                let sum = 0;
                this.totalSum = sum;
                this.items.forEach(item => {
                    sum += +item.price * +item.amount;
                });
                return "$" + sum;
            },
        },
    }
</script>

<style scoped>

</style>