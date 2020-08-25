<template>
    <nav class="container">
        <div class="topNav d-none d-sm-flex flex-column flex-lg-row justify-content-center align-items-center">
            <ul class="d-flex flex-column flex-lg-row justify-content-center align-items-center p-0 m-0 topMenu">
                <li><a href="#" class="menu__top__link">Home</a></li>
                <li><a href="#" class="menu__top__link">Man</a></li>
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
                <li><a href="#" class="menu__top__link">Kids</a></li>
                <li><a href="#" class="menu__top__link">Accoseriese</a></li>
                <li><a href="#" class="menu__top__link">Featured</a></li>
                <li><a href="#" class="menu__top__link">Hot Deals</a></li>
            </ul>
        </div>
        <div class="topNavMobile fixed-top d-block d-sm-none">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4 d-flex flex-column justify-content-center">
                    <a href="#">Home</a> <a href="#">Man</a> <a href="#">Women</a> <a href="#">Kids</a>
                    <a
                            href="#">Accoseriese</a>
                    <a href="#">Featured</a> <a href="#">Hot Deals</a>
                </div>
            </div>
            <nav class="navbar navbar-light bg-light row mx-1">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="rTop d-flex justify-content-center align-items-center justify-content-lg-start">
                    <a href="#" class="fa fa-shopping-cart my__cart px-2" aria-hidden="true"></a>
                    <div class="btn-group btnNonSSM">
                        <button type="button" class="btn btn-danger">My Account</button>
                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>

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

<style scoped>

</style>