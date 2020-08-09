export default {
	_createItem(id, name, price, img) {
		return { id, name, price, img }
	},

	initCatalog() {
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

		return names.map((name, index) => this._createItem(ids[index], name, prices[index], imgs[index]));
	}
}

