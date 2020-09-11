<template>
    <div>
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
    </div>
</template>

<script>
import catalog from '../components/catalog.vue';
import offer from '../components/offer.vue';
export default {
    components: {
		catalog,
		'offer': offer,
    },
    methods: {
        parentGet(url) {
            return fetch(url).then(d => d.json())
		},
		addItem(item) {
			this.$parent.$refs.bask.add(item);
		}
    }
}
</script>

<style>
    
</style>