<template>
   <div class="prodHeaders row col-12 d-flex justify-content-between mt-4 mb-3 text-uppercase">
        <div class="row col-5 img-responsive">
            <div class="productDet d-flex">
                <router-link :to="{name: 'SinglePage', params: item}">
                    <img :src="item.img" :alt="item.name">
                </router-link>
                <div class="ProdDetText d-flex flex-column ml-3 text-capitalize ">
                    <router-link class="item__name" :to="{name: 'SinglePage', params: item}">
                        <h3>{{item.name}}</h3> 
                    </router-link>
                    <span>Color: 
                        <mark>{{item.color}}</mark>
                    </span> 
                    <span>Size: 
                        <mark>{{item.size}}</mark>
                    </span>
                </div>
            </div>
        </div>
        <div class="row col-7 d-flex"><span
                class="col-12 col-md-3 d-flex justify-content-center align-items-center">${{+item.price}}</span>
            <div class="ProdHeadInp col-12 col-md-3 d-flex justify-content-center align-items-center">
                <label>
                    <input 
                    type="number"
                    min="1"
                    max="20"
                    step="1"
                    v-model.number="quantity"
                    @change="tolalQuantity(item, quantity, item.size, item.color)"
                    required pattern="^[0-9]+$"
                   >
                    
                </label></div>
            <span class="col-12 col-md-2 pl-md-0 d-flex justify-content-center align-items-center">free</span>
            <span class="col-12 col-md-2 d-flex justify-content-center align-items-center">${{+item.price * +item.quantity}}</span>
             <button name="remove" class="dell__Product fa fa-times-circle d-flex col-12 col-md-2 justify-content-center align-items-center"
                            @click="dell(item)"
                            data-id="${item.id}"
                            aria-hidden="true">
                    </button>
        </div>
    </div>
</template>

<script>
    const Item = () => import('./Item.vue');
    
    export default {
        name: "ItemShopCart",
        components: {
            Item
        },
        data() {
            return {
                quantity: 0,
            };
        },
         props: {
            type: {
                type: String,
            },
            item: { type: Object }
        },
        methods: {
            tolalQuantity(item, quantity) {
                this.$store.commit('tolalQuantity', {item, quantity});
            },
            dell(item) {
                this.$store.commit('dell', item)
            }
        },
        mounted() {
             this.quantity = this.item.quantity
        }
    }

</script>

<style>
.item__name:hover {
    text-decoration: none;
}
</style>