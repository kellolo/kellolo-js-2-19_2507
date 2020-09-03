<template>
    <nav class="container">
        <div class="topNav d-none d-sm-flex flex-column flex-lg-row justify-content-center align-items-center">
            <ul class="topMenu d-flex flex-column flex-lg-row justify-content-center align-items-center p-0 m-0 ">
                <router-link :to="{name: 'Index'}">
                    <li><a href="#" class="menu__top__link">Home</a></li>
                </router-link>
                <router-link :to="{name: 'Products'}">
                    <li><a href="#" class="menu__top__link">Man</a></li>
                </router-link>
                <li><a href="#" class="menu__top__link">Women</a>
                    <ul class="d-none submenu row d-md-flex">
                        <li class="col-4 d-flex flex-column mx-0 xp-0">
                            <h3 class="mb-0 mt-2">Women</h3>
                            <div class="dropdown-divider"></div>
                            <a class="subMenuLink" href="#">Dresses</a>
                            <a class="subMenuLink" href="#">Tops</a>
                            <a class="subMenuLink" href="#">Sweaters/Knits</a>
                            <a class="subMenuLink" href="#">Jackets/Coats</a>
                            <a class="subMenuLink" href="#">Blazers</a>
                            <a class="subMenuLink" href="#">Denim</a>
                            <a class="subMenuLink" href="#">Leggings/Pants</a>
                            <a class="subMenuLink" href="#">Skirts/Shorts</a>
                            <a class="subMenuLink" href="#">Accessories </a>
                        </li>
                        <li class="col-4 d-flex flex-column mx-0 xp-0">
                            <h3 class="mb-0 mt-2">Women</h3>
                            <div class="dropdown-divider"></div>
                            <a class="subMenuLink" href="#">Dresses</a>
                            <a class="subMenuLink" href="#">Tops</a>
                            <a class="subMenuLink" href="#">Sweaters/Knits</a>
                            <a class="subMenuLink" href="#">Jackets/Coats</a>
                            <h3 class="mt-3 mb-0">Women</h3>
                            <div class="dropdown-divider"></div>
                            <a class="subMenuLink" href="#">Dresses</a>
                            <a class="subMenuLink" href="#">Tops</a>
                            <a class="subMenuLink" href="#">Sweaters/Knits</a>
                        </li>
                        <li class="col-4 d-flex flex-column mx-0 xp-0">
                            <h3 class="mb-0 mt-2">Women</h3>
                            <div class="dropdown-divider"></div>
                            <a class="subMenuLink" href="#">Dresses</a>
                            <a class="subMenuLink" href="#">Tops</a>
                            <a class="subMenuLink" href="#">Sweaters/Knits</a>
                            <a class="subMenuLink" href="#">Jackets/Coats</a>
                            <img src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/subMenu.jpg"
                                 alt="subMan" class="mt-3">
                        </li>
                    </ul>
                </li>
                <router-link :to="{name: 'Products'}">
                    <li><a href="#" class="menu__top__link">Kids</a></li>
                </router-link>

                <router-link :to="{name: 'Products'}">
                    <li><a href="#" class="menu__top__link">Accoseriese</a></li>
                </router-link>

                <router-link :to="{name: 'Products'}">
                    <li><a href="#" class="menu__top__link">Featured</a></li>
                </router-link>

                <router-link :to="{name: 'Products'}">
                    <li><a href="#" class="menu__top__link">Hot Deals</a></li>
                </router-link>

            </ul>
        </div>
        <div class="topNavMobile fixed-top d-block d-sm-none">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4 d-flex flex-column justify-content-center">
                    <router-link :to="{name: 'Index'}"><a href="#">Home</a></router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Man</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Women</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Kids</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Accoseriese</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Featured</a>
                    </router-link>
                    <router-link :to="{name: 'Products'}">
                        <a href="#">Hot Deals</a>
                    </router-link>

                </div>
            </div>
            <nav class="navbar navbar-light bg-light row mx-1">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="rTop d-flex justify-content-center align-items-center justify-content-lg-start">
                    <router-link :to="{name: 'ShoppingCart'}">     
                        <a href="#" class="fa fa-shopping-cart my__cart px-2" aria-hidden="true"></a>
                    </router-link>
                    <div class="btn-group btnNonSSM ">
                        <router-link class="p-0" :to="{name: 'CheckOut'}">              
                            <button type="button" class="btn btn-danger">  My Account</button>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style>

</style>