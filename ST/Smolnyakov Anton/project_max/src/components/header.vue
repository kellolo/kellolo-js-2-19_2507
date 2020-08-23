<template>
    <header class="container my-4 px-sm-0" id="header">
        <div class="d-flex justify-content-between px-0 mx-0 flex-wrap" >
            <div class="logoAndSearch d-flex justify-content-between">
                <div class="logo d-flex justify-content-center px-0">
                    <a href="index.html" class="pr-2"><img src="https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/imgs/Html-css-js%20online%20shop/logo.png" alt="logo"></a>
                    <a href="index.html" class="brand">bran<span>d</span></a>
                </div>

                <div class="search d-flex align-items-center ml-md-4">
                    <div class="dropdown">
                        <button class=" btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Browse
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <div class="dropdown-item">woman</div>
                            <a href="#" class="dropdown-item" type="button">Dresses</a>
                            <a href="#" class="dropdown-item" type="button">Tops</a>
                            <a href="#" class="dropdown-item" type="button">Sweaters/Knits</a>
                            <a href="#" class="dropdown-item" type="button">Jackets/Coats</a>
                            <a href="#" class="dropdown-item" type="button">Blazers</a>
                            <a href="#" class="dropdown-item" type="button">Denim</a>
                            <a href="#" class="dropdown-item" type="button">Leggings/Pants</a>
                            <a href="#" class="dropdown-item" type="button">Skirts/Shorts</a>
                            <a href="#" class="dropdown-item" type="button">Accessories</a>

                            <div class="dropdown-item">men</div>
                            <a href="#" class="dropdown-item" type="button">Tees/Tank tops</a>
                            <a href="#" class="dropdown-item" type="button">Shirts/Polos</a>
                            <a href="#" class="dropdown-item" type="button">Sweaters</a>
                            <a href="#" class="dropdown-item" type="button">Sweatshirts/Hoodies</a>
                            <a href="#" class="dropdown-item" type="button">Blazers</a>
                            <a href="#" class="dropdown-item" type="button">Jackets/vests</a>
                        </div>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for Item..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="headerAccountAndCart d-flex align-items-center justify-content-between">

                <div class="row mx-0 d-md-none justify-content-between">
                    <div class="burgermenu justify-content-between align-items-center">
                        <div class="dropdown">
                            <button class="btn btn-secondary px-4 pt-2" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="burgerMenu fas fa-bars"></i></button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <a href="#" class="dropdown-item" type="button">home</a>
                                <a href="#" class="dropdown-item" type="button">man</a>
                                <a href="#" class="dropdown-item" type="button">women</a>
                                <a href="#" class="dropdown-item" type="button">kids</a>
                                <a href="#" class="dropdown-item" type="button">accessories</a>
                                <a href="#" class="dropdown-item" type="button">featured</a>
                                <a href="#" class="dropdown-item" type="button">hot deals</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center">

                    <div class="headerCart mr-3" @click="cartShown = !cartShown">
                        <a href="#"><img src="https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/imgs/Html-css-js%20online%20shop/cart.png" alt="headerCart" id="headerCart" ></a>
                        <!--BASKET/CART HERE-->
                        <cart v-show="cartShown"/>
                    </div>

                    <div class="dropdown">
                        <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </header>
</template>

<script>
    import cart from "../components/cart.vue"

    export default {
        components: {
            'cart': cart,
        },
        data() {
            return {
                cartShown: false,
            }
        },

        methods: {
            parentGet(url) {
                return fetch(url)
                    .then(data => data.json());
            }
        }
    }
</script>

<style scoped>

</style>