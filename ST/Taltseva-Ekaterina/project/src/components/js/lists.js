import List from './list';

export class Catalog extends List {
	constructor(url, container, basket) {
		super(url, container, basket);
		this.basket = basket;
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
		document.querySelector('.basketHidden').addEventListener('click', evt => {
			let elHid = document.querySelector('.headerCartWrap');
			elHid.classList.toggle('headerCartWrapHidden');
		})
	}
}

export class Basket extends List {
	constructor(url, container) {
		super(url, container);
		this._summ();

	}
	_handleActions() {
		let cat = document.querySelector(this.container);
		cat.addEventListener('click', evt => {
			if (evt.target.name == 'remove') {
				this.remove(evt.target.dataset.id);
			}
		})
	}
	add(item) {
		let find = this.items.find(el => el.id == item.id);
		if (!find) {
			this.items.push(item);
		} else {
			find.amount++;
		}
		this.sum += item.price;
		this._render();
		[...document.querySelectorAll(".sum")].forEach(el => el.innerHTML = this.sum);
	}
	remove(itemId) {
		let find = this.items.find(el => el.id == itemId);

		if (find.amount > 1) {
			find.amount--;
		} else {
			this.items.splice(this.items.indexOf(find), 1);
		}
		this.sum -= find.price;
		this._render();
		[...document.querySelectorAll(".sum")].forEach(el => el.innerHTML = this.sum);
	}
	_summ() {
    this._get('https://raw.githubusercontent.com/EkaterinaTaltseva/static/master/api'  + this.url)
			.then(data => {
					this.sum = data.sum;
			})
			.then(() => {
					[...document.querySelectorAll(".sum")].forEach(el => el.innerHTML = this.sum);
			})
	}
}
