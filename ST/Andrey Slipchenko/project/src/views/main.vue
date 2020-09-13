<template>
    <div>
		<header8 ref="header"/>
		<topNav />
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
				<catalog @add = "addItem" />
				<div class="shop__button center">
					<a class="button" href="#">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
				</div>
			</section>


			<offer />


		<footer8 />
    </div>
</template>

<script>
import header8 from '../components/header8.vue';
import catalog from '../components/catalog.vue';
import topNav from '../components/topNav.vue';
import offer from '../components/offer.vue';
import footer8 from '../components/footer8.vue';
export default {
    components: {
		catalog,
		'header8': header8,
		'topNav': topNav,
		'offer': offer,
		'footer8': footer8,
    },
    methods: {
        parentGet(url) {
            return fetch(url).then(d => d.json())
		},
		addItem(item) {
			this.$refs.header.$refs.bask.add(item);
		}
    }
}
</script>

<style>
    
</style>