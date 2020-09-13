<template>
    <section class="shopping center">
        <div class="shopping__product__titles">
            <h4 class="shopping__product__title">Product Details</h4>
            <h4 class="shopping__product__title">unite Price</h4>
            <h4 class="shopping__product__title">Quantity</h4>
            <h4 class="shopping__product__title">shipping</h4>
            <h4 class="shopping__product__title">Subtotal</h4>
            <h4 class="shopping__product__title">ACTION</h4>
        </div>
        <item
            v-for="item of items"
            type="shopping"
            :item="item"
            :key="item.productId" 
            @add = "add"
            @remove = "remove"
            @removeall = "removeall"
        />
        <article class="shopping__buttons">
            <a href="#" class="shopping__button"><h2>cLEAR SHOPPING CART</h2></a>
            <a href="#" class="shopping__button"><h2>cONTINUE sHOPPING</h2></a>
        </article>
    </section>
</template>

<script>
import item from '../components/item'
import { get, post, put, del } from '../utils/regs.js';
export default {
    components: {
        item,
    },
    data() {
        return {
            url: '/api/basket',
            items: [],
            totalPrice: 0
        }
    },
    mounted() {
        setInterval(() => {
            get(this.url)
            .then(basket => {
                this.totalPrice = basket.totalPrice
                this.items = basket.content  
            })
        }, 500)
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            put(`${this.url}/${item.productId}`, 1, item.productPrice)
                .then(res => {
                    if (res.status) {
                        this.plusTotalPrice(item)
                        find.amount++
                    } else {
                        console.log('Server err')
                    }
                })
            
        },
        remove(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find.amount > 1) {
                put(`${this.url}/${item.productId}`, -1, -item.productPrice)
                    .then(res => {
                        if (res.status) {
                            this.minusTotalPrice(item)
                            find.amount--
                        } else {
                            console.log('Server err')
                        }
                    })
            }
        },
        removeall(item) {
            let find = this.items.find(el => el.productId == item.productId);
            del(`${this.url}/${item.productId}`)
                .then(res => {
                    if (res.status) {
                        this.items.splice(this.items.indexOf(find), 1);
                    } else {
                        console.log('Server err')
                    }
                })
            }
        },
    }
</script>

<style>

</style>