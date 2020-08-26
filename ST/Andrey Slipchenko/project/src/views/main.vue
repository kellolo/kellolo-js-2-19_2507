<template>
    <div>
        <header>
			<div class="header center">
				<div class="header__left">
					<a href="index.html" class="logo"><img class="logo__img" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/18.png" alt="logo"><h1 class="h1__logo">BRAN<span>D</span></h1></a>
					<form class="header__form" action="#">
						<details class="header__browse">
							<summary>Browse</summary>
							<div class="drop drop_button">
								<div class="drop__flex">
									<h3 class="drop__h3">Women</h3>
									<ul class="drop__ul">
										<li><a href="#" class="drop__link">Tops</a></li>
										<li><a href="#" class="drop__link">Sweaters/Knits</a></li>
										<li><a href="#" class="drop__link">Jackets/Coats</a></li>
										<li><a href="#" class="drop__link">Biazers</a></li>
										<li><a href="#" class="drop__link">Denim</a></li>
										<li><a href="#" class="drop__link">Leggins/Pants</a></li>
										<li><a href="#" class="drop__link">Skirts/Shorts</a></li>
										<li><a href="#" class="drop__link">Accessories</a></li>
									</ul>
								</div>
							</div>
						</details>
						<input type="text" placeholder="Search for Item...">
						<button><img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/59.png" alt="search"></button>
					</form>
				</div>
				<div class="header__right">
					<button class="cart__button"><img class="header__cart" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/cart.png" alt="cart"></button>
					<a class="button" href="checkout.html">My account</a>
					<basket />
				</div>
			</div>
		</header>
		<nav class="nav center">
			<ul class="menu">
				<li class="menu__list"><a href="index.html" class="menu__link">Home</a></li>
				<li class="menu__list">
					<a href="#" class="menu__link">Man</a>
					<div class="drop">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
							</ul>
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<a href="#" class="menu__link">Women</a>
					<div class="drop">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<a href="#" class="menu__link">Kids</a>
					<div class="drop">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<a href="#" class="menu__link">Accoseriese</a>
					<div class="drop">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<a href="#" class="menu__link">Featured</a>
					<div class="drop drop__last">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
							</ul>
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<a href="#" class="menu__link">Hot Deals</a>
					<div class="drop drop__last">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="product.html" class="drop__link">Tops</a></li>
								<li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
								<li><a href="product.html" class="drop__link">Biazers</a></li>
								<li><a href="product.html" class="drop__link">Denim</a></li>
								<li><a href="product.html" class="drop__link">Leggins/Pants</a></li>
								<li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
								<li><a href="product.html" class="drop__link">Accessories</a></li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</nav>
			<section class="promo">
				<div class="center promo__content">
					<div class="promo__text">
						<h1 class="promo__h1">THE BRAND</h1>
						<h3 class="promo__h3">OF LUXERIOUS <span>FASHION</span></h3>
					</div>
				</div>
			</section>>
			<section class="promo__two ">
				<div class="promo__content__two center">
					<div class="promo__items">
						<div class="promo__item">
							<div class="item__text">
								<div>hot deal</div>
								<span>FOR MEN</span>
							</div>
							<img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/man.png">
						</div>
						<div class="promo__item">
							<div class="item__text cratches__1">
								<div>LUXIROUS & trendy</div>
								<span>ACCESORIES</span>
							</div>
							<img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/trendy.png">
						</div>
					</div>
					<div class="promo__items">
						<div class="promo__item">
							<div class="item__text cratches__2">
								<div>30% offer</div>
								<span>women</span>
							</div>
							<img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/women.png">
						</div>
						<div class="promo__item">
							<div class="item__text">
								<div>new arrivals</div>
								<span>FOR kids</span>
							</div>
							<img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/kids.png">
						</div>
					</div>
				</div>
			</section>> <!-- end of this block -->

			<section class="block__text">
				<h3 class="title">Fetured Items</h3>
				<p class="subtitle">Shop for items based on what we featured in this week</p>
			</section>>

			<section class="center">
				<catalog />
				<div class="shop__button center">
					<a class="button" href="#">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
				</div>
			</section>


			<section class="offer center">
				<div class="offer__content">
					<div class="offer__left">
						<a href="#"><img class ="offer__img" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/offer.png"></a>
						<a class="offer__add">
							<h2 class="offer__left__text">30% <span>OFFER</span></h2>
							<h3 class="offer__left__text__two">FOR WOMEN</h3>
						</a>
					</div>
					<div class="offer__right">
						<section class ="offer__description">
							<img class="offer__icon" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/car.png">
							<article class="offer__description__text">
								<h3 class="offer__description__title">Free Delivery</h3>
								<p class="offer__description__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
							</article>
						</section>
						<section class ="offer__description">
							<img class="offer__icon" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/offer2.png">
							<article class="offer__description__text">
								<h3 class="offer__description__title">Sales & discounts</h3>
								<p class="offer__description__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
							</article>
						</section>
						<section class ="offer__description">
							<img class="offer__icon" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/offer3.png">
							<article class="offer__description__text">
								<h3 class="offer__description__title">Quality assurance</h3>
								<p class="offer__description__subtitle">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
							</article>
						</section>
					</div>
				</div>
			</section>	<!-- end of this block -->
		<footer>
			<section class="subscribe__box">
				<div class="background">
					<div class="subscribe center">
						<img class="subscribe__img" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/subscribe.png">
					<div class="subscribe__left">
						<article class="subscribe__text">
							<p class="subscribe__description">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
							<h4 class="subscribe__author">Bin Burhan</h4>
							<h5 class="subscribe__country">Dhaka, Bd</h5>
						</article>
					</div>
					<div class="subscribe__right">
						<h3>Subscribe</h3>
						<h5><span>FOR OUR NEWLETTER AND PROMOTION</span></h5>
						<form class="subscribe__form">
							<input class="subscribe__input" type="email" name="email" placeholder="Enter Your Email">
							<a class="button" href="#">Subscribe</a>
						</form>
					</div>
				</div>
			</div>
			</section> <!--  END OF THIS (HARD) BLOCK  -->
			<section class="first__footer__part center">
				<div class="first__left">
					<a href="index.html" class="logo"><img class="logo__img" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/18.png" alt="logo"><h1 class="h1__logo">BRAN<span>D</span></h1></a>
					<p class="footer__text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
					<p class="footer__text">Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
				</div>
				<div class="first__right">
					<ul class="footer__nav">
						<a href="#"><li class="column__name">COMPANY</li></a>
						<a href="#"><li class="footer__same">Home</li></a>
						<a href="#"><li class="footer__same">Shop</li></a>
						<a href="#"><li class="footer__same">About</li></a>
						<a href="#"><li class="footer__same">How It Works</li></a>
						<a href="#"><li class="footer__same">Contact</li></a>
					</ul>
					<ul class="footer__nav">
						<a href="#"><li class="column__name">INFORMATION</li></a>
						<a href="#"><li class="footer__same">Tearms & Condition</li></a>
						<a href="#"><li class="footer__same">Privacy Policy</li></a>
						<a href="#"><li class="footer__same">How to Buy</li></a>
						<a href="#"><li class="footer__same">How to Sell</li></a>
						<a href="#"><li class="footer__same">Promotion</li></a>
					</ul>
					<ul class="footer__nav">
						<a href="#"><li class="column__name">SHOP CATEGORY</li></a>
						<a href="#"><li class="footer__same">Men</li></a>
						<a href="#"><li class="footer__same">Women</li></a>
						<a href="#"><li class="footer__same">Child</li></a>
						<a href="#"><li class="footer__same">Apparel</li></a>
						<a href="#"><li class="footer__same">Browse All</li></a>
					</ul>
				</div>
			</section> <!--    END OF FIRST FOOTER SECTION    -->
			<section class="last__footer__part center">
				<div class="second__left">
					<h5 class="copy__text">&copy; 2017 Brand All Rights Reserved.</h5>
				</div>
				<div class="second__right">
					<a href="#"><i class="fab fa-facebook-f same__icon"></i></a>
					<a href="#"><i class="fab fa-twitter same__icon"></i></a>
					<a href="#"><i class="fab fa-linkedin-in same__icon"></i></a>
					<a href="#"><i class="fab fa-pinterest-p same__icon"></i></a>
					<a href="#"><i class="fab fa-google-plus-g same__icon"></i></a>
				</div>
			</section>
		</footer>
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