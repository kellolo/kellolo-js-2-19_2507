import Item from './item';

export class BasketItem extends Item {
	constructor(item) {
		super(item);
		this.sum = 37;
	}

	render() {
		document.getElementById("sum").innerHTML = this.sum;
		let item = this.item;
		return `
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
	}
}

export class CatalogItem extends Item {
	
}