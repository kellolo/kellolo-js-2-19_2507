<template>
    <div class="drop header__basket">
        <div class="drop__flex">
            <div id="basket">
                <item
                    v-for="item of items"
                    type="basket"
                    :item="item"
                    :key="item.productId" 
                    @remove = "remove"
                />
            </div>
            <div class="basket__under">
                <div class="basket__under_total">
                    <h3 class="total__text">TOTAL</h3>
                    <h3 class="total__price">&#36;{{ totalPrice }}</h3>
                </div>
                <button class="basket__button_first">checkout</button>
                <button class="basket__button_second">go to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from './item.vue';
import { get, post, put, del } from '../utils/regs.js';

export default {
    components: { item },
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
            if (!find) {
                let newItem = Object.assign({}, item, {
                    amount: 1
                });
                this.plusTotalPrice(item)
                post(this.url, newItem)
                    .then(res => {
                        if (res.status) {
                            this.items.push(newItem)
                        } else {
                            console.log('Server err')
                        }
                    })
            } else {
                put(`${this.url}/${item.productId}`, 1, item.productPrice)
                    .then(res => {
                        if (res.status) {
                            this.plusTotalPrice(item)
                            find.amount++
                        } else {
                            console.log('Server err')
                        }
                    })
            }
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
            } else {
                del(`${this.url}/${item.productId}`)
                    .then(res => {
                        if (res.status) {
                            this.minusTotalPrice(item)
                            this.items.splice(this.items.indexOf(find), 1);
                        } else {
                            console.log('Server err')
                        }
                    })
            }
        },
      plusTotalPrice(item) {
          this.totalPrice += item.productPrice
      },
      minusTotalPrice(item) {
          this.totalPrice -= item.productPrice
      },
    },
}
</script>

<style>

</style>