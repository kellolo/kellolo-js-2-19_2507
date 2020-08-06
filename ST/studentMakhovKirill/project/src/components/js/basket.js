import Catalog from './catalog';

export default class Basket extends Catalog {
	
	_init() {
		this._render();
		this._handleActions();
		document.getElementById("sum").innerHTML = this.sum;
	}

	_handleActions() {
		let cat = document.querySelector(this.container);
		cat.addEventListener('click', evt => {
			if (evt.target.name == 'remove') {
				this.remove(evt.target.dataset.id);
			}
		})
	}

	_render() {
      let cat = document.querySelector(this.container);
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
		cat.innerHTML = str;
		document.getElementById("sum").innerHTML = this.sum;
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
	}
}