<template>
    <div>
        <div class="newsProd">

           <Breadcrubm />

        </div>
        <main class="container">
            <div class="prodHeaders row col-12 d-flex justify-content-between mt-5 mb-3 text-uppercase">
                <div class="row col-5"><span>product detals</span></div>
                <div class="row col-7">
                    <span class="col-3 text-center d-none d-md-flex justify-content-center">unite price</span>
                    <span class="col-3 text-center d-none d-md-flex justify-content-center">quantity</span>
                    <span class="col-2 pl-0 text-center d-none d-md-flex justify-content-center">shipping</span>
                    <span class="col-2 justify-content-center d-none d-md-flex">subtotal</span>
                    <span class="col-2 justify-content-center d-none d-md-flex">action</span>
                </div>
            </div>
            <div class="headerLine"></div>
                                        <!--    ITEM        -->
            <ItemShopCart v-for="item of $store.state.itemsBasket" type="basket" :item="item" :key="item.id" />

            <div class="headerLine"></div>
            <div class="container row d-flex justify-content-center justify-content-md-between mx-0 mt-5">
                <div class="ccShoppingBut">
                    <button type="button">CLEAR SHOPPING CART</button>
                </div>
                <div class="ccShoppingBut">
                    <button type="button">CONTINUE SHOPPING</button>
                </div>
            </div>
        </main>
        <div class="container">
            <div class="row FormUser d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between mt-5 pt-3 pb-5">
                <div class="d-flex col-12 col-lg-3 justify-content-center">
                    <form class="d-flex flex-column justify-content-center align-items-center align-items-lg-start mb-3">
                        <label class="d-flex flex-column text-center text-lg-left">Shipping Adress
                            <input class="pl-3" type="text" list="city" name="city" placeholder="Bangladesh"
                                   pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$">
                            <datalist id="city">
                                <option value="city1"/>
                                <option value="city2"/>
                                <option value="city3"/>
                            </datalist>
                        </label>

                        <label>
                            <input type="text" class="pl-3" placeholder="State" pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$">
                        </label>
                        <label>
                            <input type="text" class="pl-3" placeholder="Postcode / Zip" pattern="^[a-zA-Z0-9]+$">
                        </label>
                        <button>get a quote</button>
                    </form>
                </div>
                <div class="d-flex col-12 col-lg-3 justify-content-center">
                    <form method="post"
                          class="d-flex flex-column justify-content-center align-items-center align-items-lg-start  mb-3">
                        <label class="text-center text-lg-left mt-4 mt-lg-0">coupon discount</label>
                        <span class="mt-0 mt-lg-4">Enter your coupon code if you have one</span>
                        <label>
                            <input type="text" class="pl-3" placeholder="State" pattern="^[a-zA-Z0-9]+$">
                        </label>
                        <button>Apply coupon</button>
                    </form>
                </div>
                <div class="FormUserGT col-12 col-lg-3 d-flex p-4">
                    <form class="d-flex flex-column align-items-sm-center align-items-lg-end "><span
                            class="pb-1">$ {{amountCart}}</span>
                        <h5>GRAND TOTAL<span> $ {{amountCart}}</span></h5>
                        <div class="headerLine mt-4 mb-3"></div>
                        <button class="m-auto m-lg-0">proceed to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    const Breadcrubm = () => import('../components/Breadcrumb.vue');
    const ItemShopCart = () => import('../components/ItemShopCart.vue');

    export default {
        name: "ShoppingCart",
        components: {
            Breadcrubm,
            ItemShopCart
        },
         data() {
            return {
            amount: 0,
            };
        },
        computed: {
            amountCart() {
                this.amount = +this.$store.state.basketSum;
                return this.amount
            }
        },
         mounted() {
            this.$store.commit('getCart');
        },
    }
</script>

<style scoped>

</style>