<template>
    <div>
        <div class="newsProd">
            <div class="container">
                <div class="news row flex-column flex-sm-row container justify-content-between  align-items-center pt-5 pb-5">
                    <div class="newsAr">
                        <h2>news arrivals</h2></div>
                    <nav class="newsNav">
                        <a class="newsNavlink" href="#">Home</a>
                        / <a class="newsNavlink" href="#">Men</a>
                        / <a class="newsNavlink newsNavLinkActive" href="#">news arrivals</a>
                    </nav>
                </div>
            </div>
        </div>
        <div class="col-12 corusBlock">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 corImg"
                             src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/baba.jpeg"
                             alt="Первый слайд">
                    </div>
                    <div class="carousel-item ">
                        <img class="d-block w-100 corImg"
                             src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/baba.jpeg"
                             alt="Второй слайд">
                    </div>
                    <div class="carousel-item ">
                        <img class="d-block w-100 corImg"
                             src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/baba.jpeg"
                             alt="Третий слайд">
                    </div>
                </div>
                <a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon carusRow px-1 py-1" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon carusRow " aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <main class="container productListContainer d-flex justify-content-center">
            <div class="productList row col-12  d-flex justify-content-center align-items-stretch py-4">
                <span class="col-12 d-flex align-items-center justify-content-center">WOMEN COLLECTION</span>
                <div class="plrows col-12 d-flex align-items-stretch justify-content-center ">
                    <div class="plrow"></div>
                    <div class="plrow plrowActive"></div>
                    <div class="plrow"></div>
                </div>
                <h2 class="col-12 text-center">Moschino Cheap And Chic</h2>
                <p class="col-12 d-flex align-items-center justify-content-center">Compellingly actualize fully
                    researched
                    processes before proactive outsourcing. Progressively syndicate
                    collaborative architectures before cutting-edge services. Completely visualize parallel core
                    competencies
                    rather than exceptional portals.</p>
                <div class="spansList col-12 d-flex align-items-stretch justify-content-center">
                    <div class="mx-4"><span>MATERIAL:</span>COTTON</div>
                    <div class="mx-4"><span>DESIGNER:</span>BINBURHAN</div>
                </div>
                <div class="money col-12 d-flex align-items-stretch justify-content-center">$561</div>
                <div class="lineList col-12 d-flex align-items-center justify-content-center"></div>
                <div class="inpList row col-12 d-flex align-items-center justify-content-center">
                    <label class="d-flex flex-column mx-4">CHOOSE COLOR
                        <input type="text" class="pl-3 my-2" placeholder="red" pattern="^[a-zA-Z0-9]+$">
                    </label>
                    <label class="d-flex flex-column mx-4">CHOOSE SIZE
                        <input type="text" class="pl-3 my-2" placeholder="XXL" pattern="^[a-zA-Z0-9]+$">
                    </label>
                    <label class="d-flex flex-column mx-4 ">QUANTITY
                        <input type="text" class="pl-3 my-2" placeholder="2" pattern="^[a-zA-Z0-9]+$">
                    </label>
                </div>
                <div class="ButList col-12 d-flex justify-content-center align-items-center pb-5">
                    <button type="button">
                        <svg class="bi bi-cart2" width="1.6em" height="1.6em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
        <div class="container">
            <div class="row labelText d-flex justify-content-center col-12 my-2 pb-4">you may like also</div>
        </div>
        <div class="container d-flex justify-content-center justify-content-lg-between mt-5">

                <!--CATALOG -->
            <Catalog @add="addItem"/>

        </div>
    </div>
</template>


<script>

    import Catalog from "./Catalog.vue";

    export default {
        components: {
            Catalog,
        },
        methods: {
            addItem(item) {
                this.$parent.$refs.head.$refs.bask.add(item)
            },
        },
    }
</script>

<style>

</style>