<template>
    <div>
        <div class="newsProd">
            <Breadcrubm />
        </div>
        <main class="container my-5">
            <div class="row">
                <div class="leftMenu col-12 col-md-3 d-flex flex-column ">
                    <div class="accordion" id="accordionExample">
                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        category
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                 data-parent="#accordionExample">
                                <div class="drBtnContProd d-flex flex-column pl-3 pt-1">
                                    <a href="#">Accessories</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Denim</a>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                    <a href="#">Jackets & Coats</a>
                                    <a href="#">Pants</a>
                                    <a href="#">Polos</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Shorts</a>
                                    <a href="#">Sweaters & Knits</a>
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Tanks</a>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse" data-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        brand
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordionExample">
                                <div class="drBtnContProd d-flex flex-column pl-3 pt-1">
                                    <a href="#">Accessories</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Denim</a>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                    <a href="#">Jackets & Coats</a>
                                    <a href="#">Pants</a>
                                    <a href="#">Polos</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Shorts</a>
                                    <a href="#">Sweaters & Knits</a>
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Tanks</a>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse" data-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                        designer
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                 data-parent="#accordionExample">
                                <div class="drBtnContProd d-flex flex-column pl-3 pt-1">
                                    <a href="#">Accessories</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Denim</a>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                    <a href="#">Jackets & Coats</a>
                                    <a href="#">Pants</a>
                                    <a href="#">Polos</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Shorts</a>
                                    <a href="#">Sweaters & Knits</a>
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Tanks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightProduct col-12 col-md-9 align-items-start flex-column bd-highlight">
                    <div class="row d-flex col-12 px-0 m-0">
                        <nav aria-label="breadcrumb"
                             class="col-12 col-lg-4 d-flex flex-column justify-content-center justify-content-lg-start px-0">
                            <h4 class="text-center text-lg-left">Trending now</h4>
                            <div class="my-0 d-flex justify-content-center justify-content-lg-start">
                                <ol class="breadcrumb breadCrombProd bg-transparent p-0 m-0">
                                    <li class="breadcrumb-item"><a href="#">Bohemian</a></li>
                                    <li class="breadcrumb-item"><a href="#">Floral</a></li>
                                    <li class="breadcrumb-item"><a href="#">Lace</a></li>
                                </ol>
                            </div>
                            <div class="my-0 d-flex justify-content-center justify-content-lg-start">
                                <ol class="breadcrumb breadCrombProd bg-transparent p-0 m-0">
                                    <li class="breadcrumb-item"><a href="#">Floral</a></li>
                                    <li class="breadcrumb-item"><a href="#">Lace</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Bohemian</li>
                                </ol>
                            </div>
                        </nav>
                        <div class="checkSize row col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center align-items-lg-start m-0 p-0">
                            <div class="m-0 p-0 col-12 d-flex justify-content-center justify-content-lg-start">
                                <h4 class="m-0">Size</h4></div>
                            <div class="row d-flex flex-column m-0 p-0 col-3">
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="option1">
                                    <label class="form-check-label labelSize" for="inlineCheckbox1">XXS</label>
                                </div>
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                           value="option2">
                                    <label class="form-check-label labelSize" for="inlineCheckbox2">L</label>
                                </div>
                            </div>
                            <div class="row d-flex flex-column m-0 p-0 col-3">
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                           value="option2">
                                    <label class="form-check-label labelSize" for="inlineCheckbox3">XS</label>
                                </div>
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4"
                                           value="option2">
                                    <label class="form-check-label labelSize" for="inlineCheckbox4">XL</label>
                                </div>
                            </div>
                            <div class="row d-flex flex-column m-0 p-0 col-3">
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5"
                                           value="option1">
                                    <label class="form-check-label labelSize" for="inlineCheckbox5">S</label>
                                </div>
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox6"
                                           value="option2">
                                    <label class="form-check-label labelSize" for="inlineCheckbox6">XXL</label>
                                </div>
                            </div>
                            <div class="row d-flex flex-column m-0 p-0 col-3">
                                <div class="form-check form-check-inline checkFormProd">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox7"
                                           value="option2">
                                    <label class="form-check-label labelSize" for="inlineCheckbox7">M</label>
                                </div>
                            </div>
                        </div>
                        <div class="price col-12 col-lg-4 d-flex flex-column justify-content-center justify-content-md-start">
                            <div class="m-0 p-0 col-12 d-flex flex-column"><h4
                                    class="d-flex justify-content-center justify-content-lg-start">Price</h4>
                                <div class="range_slider my-2">
                                    <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="10"
                                            v-model.number="priceFilter.min"
                                            @change="setRangeSlider"
                                    />
                                    <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="10"
                                            v-model.number="priceFilter.max"
                                            @change="setRangeSlider"
                                    />
                                </div>
                                <div class="row d-flex justify-content-between px-3 my-2">
                                    <p>$ {{ priceFilter.min }}</p>
                                    <p>$ {{ priceFilter.max }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Catalog type="products" ref='catalogProducts'/>

                    
                </div>
            </div>
        </main>
        <div class="buttBanBGProduct">
            <div class="container">
                <div class="row buttonBannerText d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify pt-3 pt-lg-0">
                        <img src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/car.png"
                             alt="..."><h4>Free Delivery</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify">
                        <img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/corona.png"
                                alt="..."><h4>Sales & discounts</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify">
                        <img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/procent.png"
                                alt="..."><h4>Quality assurance</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Catalog = () => import('../components/Catalog.vue');
    const Breadcrubm = () => import('../components/Breadcrumb.vue');


    export default {
        data() {
            return {
                priceFilter: {
                    min: 0,
                    max: 1000,
                },
              
            }
        },
        components: {
            Catalog,
            Breadcrubm,
        },

        methods: {
           
            setRangeSlider() {
                if (this.priceFilter.min > this.priceFilter.max) {
                    [this.priceFilter.max, this.priceFilter.min] = [this.priceFilter.min, this.priceFilter.max]
                };
                this.$store.state.priceFilter = this.priceFilter
            },
        },
        mounted() {
            this.$store.commit('getCatalog');
            this.$store.commit('filterItem');
        }

    }
</script>

<style scoped>

</style>