import component from './basket';

function createItem(id, name, price, img) {
	return { id, name, price, img }
};

function initCatalog() {
	let ids = [1, 2, 3, 4, 5, 6, 7, 8];

	let names = ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
		"MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"];

	let prices = ["12.00", "25.00", "32.00", "100.00", "10500.00", "666.00", "69.00", "11111.00"];

	let imgs = [
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product1.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product2.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product3.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product4.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product5.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product6.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product7.jpg",
		"https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/product8.jpg",
	]

	return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
}

export default {
	items: [],
	container: null,
	basket: component,

	init() {
		this.items = initCatalog();
		this.container = document.querySelector("#catalog");
		this._render();
		this._handleActions();
	},
	_handleActions() {
		this.container.addEventListener('click', evt => {
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

	},
	_render() {
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
		this.container.innerHTML = str;
	}
}

// catalog.init();
