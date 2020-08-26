<template>
    <div>
        <div class="container">


            <!------ HEADER ------>
            <header class="header center">

            <headerLeft/>
                
                <!--- BASKET --->
                <div class="drop_cart" >
                    <button class="drop_cart__img"  @click="showBasket = !showBasket" >
                        <img src="src/assets/img/cart.png" alt="headerCart">
                    </button>
                    <!---  BASKETHERE --->
                    <basket v-show="showBasket" ref="bask"/>
                </div>
                <!--- BASKET --->
                
                <div class="button_browse">
                    <details class="my_account">
                        <summary class="button">My&nbsp;account</summary>
                    </details>
                </div>
            </header>
            <!------ HEADER ------>


            <!------ NAV ------>
            <navigation/>
            <!------ NAV ------>


            <!------ MAIN ------>
            <div class="main">
                <div class="promo center">
                    <div class="promo__content">
                        <h2 class="promo__h2">THE BRAND</h2>
                        <h3 class="promo__h3">OF&nbsp;LUXERIOUS 
                            <span class="promo__color">FASHION</span>
                        </h3>
                    </div>
                </div>
                <div class="deal center">
                    <div class="deal__man">
                        <a href="#">
                            <div class="deal__content">
                                <h4 class="deal__h4">HOT DEAL</h4>
                                <h3 class="deal__h3">FOR MEN</h3>   
                            </div>
                            <a href="#">
                                <img src="src/assets/img/deal_man.png" alt="">
                            </a>
                        </a>  
                    </div>
                    <div class="deal__woman">
                        <a href="#">
                            <div class="deal__content_1">
                                <h4 class="deal__h4">30% OFFER</h4>
                                <h3 class="deal__h3">WOMEN</h3>  
                            </div>  
                            <a href="#">
                                <img src="src/assets/img/deal_woman.png" alt="">
                            </a>
                        </a>
                    </div>
                    <div class="deal__wallet">
                        <a href="#">
                            <div class="deal__content_2">
                                <h4 class="deal__h4">LUXIROUS &amp;&nbsp;TRENDY</h4>
                                <h3 class="deal__h3">ACCESORIES</h3>       
                            </div> 
                            <a href="#">
                                <img src="src/assets/img/deal_wallet.png" alt="">
                            </a> 
                        </a>
                    </div> 
                    <div class="deal__kid">
                        <a href="#">
                            <div class="deal__content_3">
                                <h4 class="deal__h4">NEW ARRIVALS</h4>
                                <h3 class="deal__h3">FOR KIDS</h3> 
                            </div>  
                            <a href="#">
                                <img src="src/assets/img/deal_kid.png" alt="">
                            </a> 
                        </a>
                    </div> 
                </div>       
                <div class="product_main center">
                    <p class="product__h3">Fetured Items</p>
                    <p class="product__h4">Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week</p>
                    
                    <!---------------- CATALOGHERE -------------->
                    <catalog @add="addItem"/>
                    <div class="button_browse">
                        <a  href="../public/product.html" class="browse_product">Browse All Product
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </div>
                </div>
                <div class="offer center">
                    <a href="#">
                        <div class="offer_black">
                            <img src="src/assets/img/offer_black.png" alt="">
                        </div>
                        <div class="offer_background">
                            <img src="src/assets/img/background_offer.png" alt="">
                        </div>
                    </a>
                    <div class="offer__content"> 
                        <h3 class="offer__h3">30% <span class="offer__color">OFFER</span></h3>
                        <h4 class="offer__h4">FOR WOMEN</h4> 
                    </div>           
                    <div class="offer__main">
                        <div class="delivery">
                            <img class="offer_img" src="src/assets/img/car.png" alt="car">
                            <div class="offer_text">
                                <h5 class="down_header">Free Delivery</h5>
                                <p class="down_text">
                                    Worldwide delivery on&nbsp;all. 
                                    Authorit tively morph next-generation innov tion with extensive models.
                                </p>
                            </div>
                        </div>
                        <div class="sales_discounts">
                            <img class="offer_img" src="src/assets/img/sale.png" alt="sales_discounts">
                            <div class="offer_text">
                                <h5 class="down_header">Sales &amp;&nbsp;discounts</h5>
                                <p class="down_text">Worldwide delivery on&nbsp;all. 
                                    Authorit tively morph next-generation innov tion with extensive models.
                                </p>
                            </div>
                        </div>
                        <div class="quality">
                            <img class="offer_img" src="src/assets/img/crown.png" alt="crown">
                            <div class="offer_text">
                                <h5 class="down_header">Quality assurance</h5>
                                <p class="down_text">Worldwide delivery on&nbsp;all. 
                                    Authorit tively morph next-generation innov tion with extensive models.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="subscribe">
                    <a href="#">
                        <img src="src/assets/img/footer_surfer.png">
                        <div class="subscribe__footer_grey">
                            <img src="src/assets/img/footer_grey.png" alt="">
                        </div>
                    </a>
                    <div class="subscribe_1 center">
                        <div class="subscribe__left">
                            <img class="photo" src="src/assets/img/avatar.png" alt="photo_quote">
                            <div class="quote">
                                <p class="words">
                                    &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, 
                                    a&nbsp;pulvinar purus condimentum&nbsp;a. 
                                    Aliquam condimentum mattis neque sed pretium&raquo;
                                </p>
                                <p class="author">Bin Burhan</p>
                                <p class="bd">Dhaka, Bd</p>
                                <div class="nav_choice">
                                    <a href="#" class="quote__link"><hr class="quote_line"></a>
                                    <a href="#" class="quote__link"><hr class="quote_line"></a>
                                    <a href="#" class="quote__link"><hr class="quote_line"></a>
                                </div>
                            </div>  
                        </div>
                        <div class="subscribe__right">
                            <p class="subscribe__h3">Subscribe</p>
                            <p class="subscribe__h4">FOR OUR NEWLETTER AND PROMOTION</p> 
                            <form action="#" class="subscribe_form">
                                <input id="email" placeholder="Enter Your Email" class="email" required pattern="\S+@[a-z]+.[a-z]+"/>
                                <input type="submit" value="Subscribe" class="button_subscribe"/>
                            </form> 
                        </div> 
                    </div>    
                </div> 

            </div>
            <!------ MAIN ------>


            <!------ FOOTER ------>
            
            <footerDown/>
            
            <!------ FOOTER ------>


        </div>  
    </div> 
</template>

<script>
import catalog from '../components/catalog.vue';
import basket from '../components/basket.vue';
import navigation from '../components/navigation.vue';
import headerLeft from '../components/headerLeft.vue';
import footerDown from '../components/footer.vue';


export default {
    components: {
        'basket': basket,
        catalog,
        navigation,
        headerLeft,
        footerDown
    },
    data() {
        return {
            showBasket: false
        }
    },
    methods: {
        parentGet(url) {
            return fetch(url).then(d => d.json())
        },
        addItem(item) {
            this.$refs.bask.add(item);
        }
    }
}
</script>

<style>

</style>
