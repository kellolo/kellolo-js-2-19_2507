<template>
    <div>
        <div class="container">
            <header class="header center">
                <div class="header__left">
                    <a class="logo" href="#">
                        <img class="logo__img" src="src/assets/img/logo.png" alt="logo">
                        <p class="brand">BRAN<span class="other-color">D</span></p>
                    </a>
                    <div class="header__form">
                        <details class="browse">
                            <summary class="browse_search">Browse</summary>
                            <div class="drop_browse">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                        <ul class="drop__ul">
                                            <li><a href="#" class="drop__link">Dresses</a></li>
                                            <li><a href="#" class="drop__link">Tops</a></li>
                                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                            <li><a href="#" class="drop__link">Blazers</a></li>
                                            <li><a href="#" class="drop__link">Denim</a></li>
                                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                            <li><a href="#" class="drop__link">Accessories</a></li>
                                            <!--
                                            <li><a href="#" class="drop__link">Bags/Purses</a></li>
                                            <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                                            <li><a href="#" class="drop__link">Nightwear</a></li>
                                            <li><a href="#" class="drop__link">Shoes</a></li>
                                            <li><a href="#" class="drop__link">Beauty</a></li>
                                            --> 
                                        </ul>
                                        <h3 class="drop__h3">Men</h3>
                                        <ul class="drop__ul">
                                            <li><a href="#" class="drop__link">Tees/Tank tops</a></li>
                                            <li><a href="#" class="drop__link">Shirts/Polos</a></li>
                                            <li><a href="#" class="drop__link">Sweaters</a></li>
                                            <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                                            <li><a href="#" class="drop__link">Blazers</a></li>
                                            <li><a href="#" class="drop__link">Jackets/vests</a></li>
                                        </ul>
                                </div>
                            </div>
                        </details>
                        <form action="#" method="get">
                            <div class="search_form">
                                <input class="search_for" placeholder="Search for Item..." type="text">
                                <div class="search__button"> 
                                    <a class="search__link" href="#"><i class="fas fa-search"></i>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <!----------- BASKET ------------>
                <div class="drop_cart" >
                    <button class="drop_cart__img"  @click="showBasket = !showBasket" >
                        <img src="src/assets/img/cart.png" alt="headerCart">
                    </button>
                    <!----  BASKETHERE ----->
                    <basket v-show="showBasket"/>
                </div>
                <!----------- BASKET ------------>
                
                <div class="button_browse">
                    <details class="my_account">
                        <summary class="button">My&nbsp;account</summary>
                    </details>
                </div>
            </header>

            <nav class="nav center">
                <ul class="menu">
                    <li class="menu__list"><a href="#" class="menu__link">Home</a>
                    </li>
                    <li class="menu__list">
                        <a href="../public/product.html" class="menu__link">Man</a>
                    </li>
                    <li class="menu__list">
                        <a href="../public/single_page.html" class="menu__link">Women</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__link">Dresses</a></li>
                                    <li><a href="#" class="drop__link">Tops</a></li>
                                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__link">Blazers</a></li>
                                    <li><a href="#" class="drop__link">Denim</a></li>
                                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__link">Accessories</a></li>
                                    <!--
                                    <li><a href="#" class="drop__link">Bags/Purses</a></li>
                                    <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                                    <li><a href="#" class="drop__link">Nightwear</a></li>
                                    <li><a href="#" class="drop__link">Shoes</a></li>
                                    <li><a href="#" class="drop__link">Beauty</a></li>
                                    --> 
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__link">Dresses</a></li>
                                    <li><a href="#" class="drop__link">Tops</a></li>
                                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <!--
                                    <li><a href="#" class="drop__link">Blazers</a></li>
                                    <li><a href="#" class="drop__link">Denim</a></li>
                                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__link">Accessories</a></li>
                                    <li><a href="#" class="drop__link">Bags/Purses</a></li>
                                    <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                                    <li><a href="#" class="drop__link">Nightwear</a></li>
                                    <li><a href="#" class="drop__link">Shoes</a></li>
                                    <li><a href="#" class="drop__link">Beauty</a></li>
                                    --> 
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__link">Dresses</a></li>
                                    <li><a href="#" class="drop__link">Tops</a></li>
                                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <!--
                                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__link">Blazers</a></li>
                                    <li><a href="#" class="drop__link">Denim</a></li>
                                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__link">Accessories</a></li>
                                    <li><a href="#" class="drop__link">Bags/Purses</a></li>
                                    <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                                    <li><a href="#" class="drop__link">Nightwear</a></li>
                                    <li><a href="#" class="drop__link">Shoes</a></li>
                                    <li><a href="#" class="drop__link">Beauty</a></li>
                                    --> 
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__link">Dresses</a></li>
                                    <li><a href="#" class="drop__link">Tops</a></li>
                                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <!--
                                    <li><a href="#" class="drop__link">Blazers</a></li>
                                    <li><a href="#" class="drop__link">Denim</a></li>
                                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__link">Accessories</a></li>
                                    <li><a href="#" class="drop__link">Bags/Purses</a></li>
                                    <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                                    <li><a href="#" class="drop__link">Nightwear</a></li>
                                    <li><a href="#" class="drop__link">Shoes</a></li>
                                    <li><a href="#" class="drop__link">Beauty</a></li>
                                    --> 
                                </ul>
                                <a href="#">
                                    <img class="drop_img" src="src/assets/img/drop_img.png" alt="drop_img">
                                </a>
                            </div>                          
                        </div>
                    </li>
                    <li class="menu__list"><a href="#" class="menu__link">Kids </a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Accoseriese </a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Featured </a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Hot Deals</a></li>
                </ul>
            </nav>

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
                    <catalog />
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
                <div class="info_board center">
                    <div class="info__left">
                        <a class="logo" href="../public/index.html">
                            <img class="logo__img_1" src="src/assets/img/logo.png" alt="logo">
                            <p class="footer__brand">BRAN
                                <span class="footer__other-color">D</span>
                            </p>
                        </a>
                        <p class="data">Objectively transition extensive data rather than cross functional solutions. 
                            Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. 
                            Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.
                            <br><br> 
                            Efficiently plagiarize 24/365 action items and focused infomediaries. 
                            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize. 
                            <!-- Objectively strategize seamless relationships via resource sucking testing procedures. 
                                Proactively cultivate next-generation results for value-added methodologies. 
                                Dynamically plagiarize unique methodologies after performance based methodologies. 
                                Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. 
                                Dynamically orchestrate resource sucking scenarios after alternative synergy. 
                                Compellingly envisioneer corporate methods of empowerment before standards compliant technologies. 
                                Objectively facilitate progressive. -->
                        </p>
                    </div>
                    <div class="info__menu">
                        <div class="footer__menu">
                        <ul class="menu_company">
                                <li class="company__header">COMPANY</li>
                                <li class="company__list">
                                    <a href="../public/index.html" class="company__link">Home</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Shop</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">About</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">How It&nbsp;Works</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Contact</a>
                                </li>
                            </ul> 
                       </div>
                       <div class="footer__menu">
                         <ul class="menu_company">
                                <li class="company__header">INFORMATION</li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Tearms &amp;&nbsp;Condition</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Privacy Policy</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">How to&nbsp;Buy</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">How to&nbsp;Sell</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Promotion</a>
                                </li>
                            </ul> 
                        </div>
                        <div class="footer__menu-1">
                           <ul class="menu_company">
                                <li class="company__header">SHOP CATEGORY</li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Men</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Women</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Child</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Apparel</a>
                                </li>
                                <li class="company__list">
                                    <a href="#" class="company__link">Brows All</a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>

              <footer class="footer center">
                <div class="brand_rights">
                    <p class="rights">&copy;&nbsp;2017 Brand All Rights Reserved.</p>
                </div>
                <div class="social">
                    <a class="media_icon" href="#"><i class="fab fa-facebook-f"></i></a>
                </div>
                <div class="media">
                    <a class="media_icon" href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <div class="media">       
                    <a class="media_icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="media">
                    <a class="media_icon" href="#"><i class="fab fa-pinterest-p"></i></a>
                </div>
                <div class="media">
                    <a class="media_icon" href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
              </footer>
        </div>  
    </div> 
</template>

<script>
import catalog from '../components/catalog.vue';
import basket from '../components/basket.vue';

export default {
    components: {
        'basket': basket,
        catalog
    },
    data() {
        return {
            showBasket: false
        }
    },
    methods: {
        parentGet(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style>

</style>
