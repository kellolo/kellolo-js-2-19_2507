

export default class Catalog {
	constructor(container, basket, items) {
		this.items = items;
		this.basket = basket;
		this.container = container;
		this.sum = 0;
		this._init();
	}

	_init() {
		this._render();
		this._handleActions();
	}

	_handleActions() {
		let cat = document.querySelector(this.container);
		cat.addEventListener('click', evt => {
			if (evt.target.name == 'add') {
				let item = {
					name: evt.target.dataset.name,
					price: +evt.target.dataset.price,
					img: evt.target.dataset.img,
					amount: 1,
					id: evt.target.dataset.id
				}
				this.basket.add(item);
			}
		});
		document.addEventListener('click', evt => {
			let main = document.querySelector('#cart');
			if (evt.target.id == 'hide') {
				main.classList.toggle('hidden');
			}
		})
	}

	_render() {
      let cat = document.querySelector(this.container);
		let str = '';
		this.items.forEach(item => {
			str += `
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
		});
		cat.innerHTML = str;
	}
}

// export default {
// 	items: [],
// 	container: null,
// 	basket: component,

// 	init() {
// 		this.items = initCatalog();
// 		this.container = document.querySelector("#catalog");
// 		this._render();
// 		this._handleActions();
// 	},
// 	_handleActions() {
// 		this.container.addEventListener('click', evt => {
// 			if (evt.target.name == 'add') {
// 				let item = {
// 					name: evt.target.dataset.name,
// 					price: +evt.target.dataset.price,
// 					img: evt.target.dataset.img,
// 					amount: 1,
// 					id: evt.target.dataset.id
// 				}
// 				this.basket.add(item);
// 			}
// 		});
// 		document.addEventListener('click', evt => {
// 			let main = document.querySelector('#cart');
// 			if (evt.target.id == 'hide') {
// 				main.classList.toggle('hidden');
// 			}
// 		})

// 	},
// 	_render() {
// 		let str = '';

// 		this.items.forEach(item => {
// 			str += `
// 			<div class="products__item col-sm-6 col-lg-3">
// 			<div class="products__wrap-img">
// 				<div class="products__buy">
// 					<button
// 						name="add"
// 						data-name="${item.name}"
// 						data-img="${item.img}"
// 						data-price="${item.price}"
// 						data-id="${item.id}"
// 					>
// 						<img src="../src/assets/imgs/addToCart.png" alt="">
// 						Add to Cart
// 					</button>
// 				</div>
// 				<img class="products__img" src="${item.img}" alt="product1">
// 			</div>
// 			<div class="products__bottom">
// 				<div class="products__name">${item.name}</div>
// 				<div class="products__price">$${item.price}</div>
// 			</div>
// 		</div>
// 			`
// 		});
// 		this.container.innerHTML = str;
// 	}
// }

// catalog.init();

