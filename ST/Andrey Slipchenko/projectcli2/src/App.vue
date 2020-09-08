<template>
  <div>
    <header>
			<div class="header center">
				<div class="header__left">
					<router-link to="/" class="logo"><img class="logo__img" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/18.png" alt="logo"><h1 class="h1__logo">BRAN<span>D</span></h1></router-link>
					<form class="header__form" action="#">
						<details class="header__browse">
							<summary>Browse</summary>
							<div class="drop drop_button">
								<div class="drop__flex">
									<h3 class="drop__h3">Women</h3>
									<ul class="drop__ul">
										<li><router-link to="/product" class="drop__link">Tops</router-link></li>
										<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
										<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
										<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
										<li><router-link to="/product" class="drop__link">Denim</router-link></li>
										<li><router-link to="/product" class="drop__link">Leggins/Pants</router-link></li>
										<li><router-link to="/product" class="drop__link">Skirts/Shorts</router-link></li>
										<li><router-link to="/product" class="drop__link">Accessories</router-link></li>
									</ul>
								</div>
							</div>
						</details>
						<input type="text" placeholder="Search for Item...">
						<button><img src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/59.png" alt="search"></button>
					</form>
				</div>
				<div class="header__right">
					<button class="cart__button" @click="showBasket = !showBasket"><img class="header__cart" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/cart.png" alt="cart"></button>
					<a class="button" href="checkout.html">My account</a>
					<basket v-show="showBasket" ref="bask"/>
				</div>
			</div>
		</header>
    <nav class="nav center">
			<ul class="menu">
				<li class="menu__list">
					<router-link to="/" class="menu__link">Home</router-link>
				</li>
				<li class="menu__list">
					<router-link to="/product" class="menu__link">Man</router-link>
					<div class="drop">
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
								<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
								<li><router-link to="/product" class="drop__link">Denim</router-link></li>
								<li><router-link to="/product" class="drop__link">Leggins/Pants</router-link></li>
								<li><router-link to="/product" class="drop__link">Skirts/Shorts</router-link></li>
								<li><router-link to="/product" class="drop__link">Accessories</router-link></li>
							</ul>
						</div>
						<div class="drop__flex">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
								<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
								<li><router-link to="/product" class="drop__link">Denim</router-link></li>
							</ul>
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link>></li>
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
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
								<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
								<li><router-link to="/product" class="drop__link">Denim</router-link></li>
								<li><router-link to="/product" class="drop__link">Leggins/Pants</router-link></li>
								<li><router-link to="/product" class="drop__link">Skirts/Shorts</router-link></li>
								<li><router-link to="/product" class="drop__link">Accessories</router-link></li>
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
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
								<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
								<li><router-link to="/product" class="drop__link">Denim</router-link></li>
								<li><router-link to="/product" class="drop__link">Leggins/Pants</router-link></li>
								<li><router-link to="/product" class="drop__link">Skirts/Shorts</router-link></li>
								<li><router-link to="/product" class="drop__link">Accessories</router-link></li>
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
								<li><router-link to="/product" class="drop__link">Tops</router-link></li>
								<li><router-link to="/product" class="drop__link">Sweaters/Knits</router-link></li>
								<li><router-link to="/product" class="drop__link">Jackets/Coats</router-link></li>
								<li><router-link to="/product" class="drop__link">Biazers</router-link></li>
								<li><router-link to="/product" class="drop__link">Denim</router-link></li>
								<li><router-link to="/product" class="drop__link">Leggins/Pants</router-link></li>
								<li><router-link to="/product" class="drop__link">Skirts/Shorts</router-link></li>
								<li><router-link to="/product" class="drop__link">Accessories</router-link></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu__list">
					<router-link to="/shoppingcart" class="menu__link">Shopping cart</router-link>
				</li>
				<li class="menu__list">
					<router-link to="/checkout" class="menu__link">Checkout</router-link>
				</li>
				<li class="menu__list">
					<router-link to="/singlepage" class="menu__link">Single Page</router-link>
				</li>
				<li>
					<router-link to="/product" class="menu__link">Product</router-link>
				</li>
			</ul>
		</nav>
		<router-view/>  
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
import basket from './components/basket.vue';
import catalog from './components/catalog.vue';
export default {
	components: {
		'basket': basket,
	},
	data() {
        return {
            showBasket: false
        }
    },
}
</script>

<style lang="sass">

</style>
