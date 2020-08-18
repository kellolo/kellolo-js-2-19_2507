export default class Item {
	constructor(item) {
		this.item = item;
	}

	render() {
		let item = this.item;
		return `
		<div class="products__item col-sm-6 col-lg-3">
			<div class="products__wrap-img">
				<div class="products__buy">
					<button
						name="add"
						data-name="${item.name}"
						data-img="${item.img}"
						data-price="${item.price}"
						data-id="${item.id}"
					>
						<img src="../src/assets/imgs/addToCart.png" alt="">
						Add to Cart
					</button>
				</div>
				<img class="products__img" src="${item.img}" alt="product1">
			</div>
			<div class="products__bottom">
				<div class="products__name">${item.name}</div>
				<div class="products__price">$${item.price}</div>
			</div>
		</div>
		`
	}
	
}