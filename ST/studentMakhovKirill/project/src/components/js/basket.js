export default {
	items: [],
	container: null,
	basket: basket,
	sum: 0,

	init() {
		this.container = document.querySelector("#basket");
		this._render();
		this._handleActions();
	},
	_handleActions() {
		this.container.addEventListener('click', evt => {
			if (evt.target.name == 'remove') {
				this.remove(evt.target.dataset.id);
			}
		})
	},
	_render() {
		let str = '';
		this.items.forEach(item => {
			str += `
			<div class="headerCart__item">
				<div class="headerCart__product">
						<img src="${item.img}" alt="">
						<div class="headerCart__description">
							<div class="headerCart__name">
								${item.name}
							</div>
							<div class="headerCart__price">
								${item.amount}  <span>x</span> $${item.price}
							</div>
						</div>
				</div>
				<button name="remove" data-id="${item.id}">x</button>
			</div>
			`
		})
		this.container.innerHTML = str;
		document.getElementById("sum").innerHTML = basket.sum;
	},
	add(item) {
		let find = this.items.find(el => el.id == item.id);

		if (!find) {
			this.items.push(item);
		} else {
			find.amount++;
		}
		this.sum += item.price;
		this._render();
	},
	remove(itemId) {
		let find = this.items.find(el => el.id == itemId);

		if (find.amount > 1) {
			find.amount--;
		} else {
			this.items.splice(this.items.indexOf(find), 1);
		}
		this.sum -= find.price;
		this._render();
	}
}

// basket.init();
