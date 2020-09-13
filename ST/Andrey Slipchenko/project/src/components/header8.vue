<template>
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
					<button class="cart__button" @click="showBasket = !showBasket"><img class="header__cart" src="https://raw.githubusercontent.com/Rutard-Hash/static/master/MyLendingImgs/cart.png" alt="cart"></button>
					<a class="button" href="checkout.html">My account</a>
					<basket v-show="showBasket" ref="bask"/>
				</div>
			</div>
		</header>
</template>

<script>
import basket from '../components/basket.vue';
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

<style>

</style>