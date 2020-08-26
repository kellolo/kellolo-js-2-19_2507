<template>
    <header class="container">
        <div class="row d-flex align-items-center justify-content-center mb-3 mt-5 mt-sm-0 pt-2">
            <a href="#" class="logo col-7 col-sm-4 col-lg-2 d-flex justify-content-center pl-5">Bran<span>d</span></a>
            <div class="input-group searchBrowse col-sm-8 col-lg-5 pr-sm-5 mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                            type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Browse
                    </button>
                    <div class="dropdown-menu drMenuHeaderLeft">
                        <a class="dropdown-item drMenuHeaderLeftLinkH pl-4" href="#">WOMAN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Dresses</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Tops</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Sweaters/Knits</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Jackets/Coats</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Blazers</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Denim</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Leggings/Pants</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Skirts/Shorts</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Accessories</a>
                        <a class="dropdown-item drMenuHeaderLeftLinkH pl-4" href="#">MEN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Tees/Tank tops</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Shirts/Polos</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Sweaters</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Sweatshirts/Hoodies</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Blazers</a>
                        <a class="dropdown-item drMenuHeaderLeftLink" href="#">Jackets/vests</a>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with dropdown button"
                       placeholder="Search for Item...">
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="rTop d-none d-sm-flex col-lg-3 ml-lg-auto justify-content-center justify-content-lg-end p-0 align-items-center">
                <div class="basket__block" id="basket" >
                    <i class="fa fa-shopping-cart my__cart" aria-hidden="true" @click="showBasket = !showBasket"></i>

                    <!-- BASKET -->
                    <basket v-show="showBasket"/>

                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-danger ml-4">My Account</button>
                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>

                </div>
            </div>
        </div>
    </header>
</template>

<script>

    import Basket from "./Basket.vue";

    export default {
        name: "Header",
        components:{
            Basket,
        },
        data() {
            return {
                showBasket: false,
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>