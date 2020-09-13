<template>
    <div>
        <div class="topBanner d-flex">
            <div class="container-lg topBannerContent d-flex justify-content-between align-items-center" id="fon">
                <div class="menLabel pl-1">
                    <div class="menLabeltop">The brand</div>
                    <div class="menLabelbut">of luxerious <span>fashion</span></div>
                </div>
            </div>
        </div>
        <main class="container mt-lg-5 pt-3">
            <div class="row d-flex flex-lg-column flex-xl-row justify-content-center justify-content-xl-between align-items-center align-items-xl-between">
                <div class="row d-flex align-items-center justify-content-center col-lg-6 p-0 m-0">
                    <div class="offer d-flex p-2"><img
                            src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/offer1.jpg"
                            alt="img">
                        <a href="#" class="offerLink">
                            <div class="offerText">
                                <div class="topOfferLabel">Hot deal</div>
                                <div class="offerLabel">For men</div>
                            </div>
                        </a>
                    </div>
                    <div class="offer d-flex p-2"><img
                            src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/offer2.jpg"
                            alt="img">
                        <a href="#" class="offerLink">
                            <div class="offerText">
                                <div class="topOfferLabel">LUXIROUS & trendy</div>
                                <div class="offerLabel">ACCESORIES</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-center  col-lg-6 p-0 m-0">
                    <div class="offer d-flex p-2"><img
                            src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/offer3.jpg"
                            alt="img">
                        <a href="#" class="offerLink">
                            <div class="offerText">
                                <div class="topOfferLabel">30% offer</div>
                                <div class="offerLabel">women</div>
                            </div>
                        </a>
                    </div>
                    <div class="offer d-flex p-2"><img
                            src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/offer4.jpg"
                            alt="img">
                        <a href="#" class="offerLink">
                            <div class="offerText">
                                <div class="topOfferLabel">new arrivals</div>
                                <div class="offerLabel">FOR kids</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <div class="container  mt-5 pt-5 mb-5 pb-2">
            <div class="FetItems row d-flex flex-column justify-content-center align-items-center">
                <h2>Fetured Items</h2>
                <p>Shop for items based on what we featured in this week</p>
            </div>
        </div>
        <div class="container">

            <!-- CATALOG -->
            <Catalog  type="index"/>

        </div>
        <div class="container d-flex justify-content-center align-items-center mb-5">
            <router-link class="bBa__container" :to="{name: 'Products'}">
                <div>
                    <a 
                    class="d-flex justify-content-center align-items-center"
                    href="#">
                    Browse All Product
                    <i class="pl-2 fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </router-link>
        </div>
        <div class="container">
            <div class="buttBanBG row d-flex justify-content-between">
                <div class="buttonBanner d-flex col-lg-8 justify-content-center justify-content-lg-start">
                    <div class="buttonBannerOffer py-5 mt-lg-5">30% <span>OFFER</span>
                        <p>FOR WOMEN</p></div>
                </div>
                <div class="row buttonBannerText col-lg-4 d-flex align-items-center mx-0 py-4">
                    <div class="row col-12 d-flex flex-column mx-0 align-items-center justify-content-center">
                        <div class="d-flex justify-content-center align-items-center align-items-lg-start my-3"><img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/car.png"
                                alt="..."
                                class="col-lg-3 pb-2 mx-2">
                            <div class="col-lg-9 p-0"><h4>Free Delivery</h4>
                                <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with
                                    extensive
                                    models</p></div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center align-items-lg-start my-3"><img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/corona.png"
                                alt="..."
                                class="col-lg-3 pb-2 mx-2">
                            <div class=" col-lg-9 p-0"><h4>Sales & discounts</h4>
                                <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with
                                    extensive
                                    models</p></div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center align-items-lg-start my-3"><img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/procent.png"
                                alt="..."
                                class="col-lg-3 pb-2 mx-2">
                            <div class="col-lg-9 p-0">
                                <h4>Quality assurance</h4>
                                <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with
                                    extensive
                                    models
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    const Catalog = () =>  import("../components/Catalog.vue");

    export default {
        components: {
            Catalog,
        },
    }
</script>

<style>

</style>