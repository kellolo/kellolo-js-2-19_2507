<template>
<div class="headerCartWrap">
    <div class="headerCartWrapBlock"></div>
    <div class="headerCartWrapInAll">
        <div id="basket" class="d-flex flex-column">
            <!--BASKET ITEMS-->
            <item v-for="item of items" type="basket" :item="item" :key="item.productId" @remove="remove" />
        </div>
        <div class="headerCartWrapTotalPrice">
            <div>total</div>
            <div>$500.00</div>
        </div>
    </div>
</div>
</template>

<script>
import item from './item.vue';
import {
    get,
    put,
    del,
    post
} from '../utils/reqs.js';

export default {
    components: {
        item
    },
    data() {
        return {
            url: '/api/basket',
            items: []
        }
    },
    mounted() {
        get(this.url)
            .then(basket => {
                this.items = basket.content
            });
        // this.$parent.parentGet(this.url)
        // .then(d => { this.items = d.content })
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (!find) {
                let newItem = Object.assign({}, item, {
                    amount: 1
                });
                post(this.url, newItem)
                    .then(res => {
                        if (res.status) {
                            this.items.push(newItem)
                        } else {
                            console.log('Server err')
                        }
                    })
            } else {
                put(`${this.url}/${item.productId}`, 1)
                    .then(res => {
                        if (res.status) {
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
                put(`${this.url}/${item.productId}`, -1)
                    .then(res => {
                        if (res.status) {
                            find.amount--
                        } else {
                            console.log('Server err')
                        }
                    })
            } else {
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
}
</script>

<style>
.headerCartWrapInAll {
    height: 300px;
    z-index: 50;
    overflow-y: auto;
}

.headerCartWrapInAll img {
    max-height: 50px;
}
</style>