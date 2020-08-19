import Item from './item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.amount = item.quantity;
    }

    render() {
        let item = this.item;
        
        return `
           	 	<div class="cartMenu-block d-flex justify-content-between align-items-center mx-3 py-3">
						<img src="${item.productImg}" alt="First">
						<div class="cartMenu-block-content my-auto ml-3">
							<h4 class="cartMenu-h4-f1">${item.productName}</h4>
							<h4 class="cartMenu-h4-f2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></h4>
							<h4 class="cartMenu-h4-f3">${item.quantity}  x  $${item.productPrice}</h4>
						</div>
						<button class="cartMenu-h4-f4">
							<i class="fas fa-times-circle" 
							id="remove" 
							data-id="${item.productId}"></i>
						</button>
				</div>
       		 `
    }
}

export class CatalogItem extends Item { }