import Item from './item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.amount = 1;
    }

    render() {
               let str = "";
        this.items.forEach(item => {
            str += `
            <div class="d-flex headerCartWrapIn">
                <a href="#" class="d-flex">
                    <img src="${item.img}" alt="" style="height: 85px">
                    <div>
                        <div>${item.name}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.price}
                        </div>
                    </div>
                </a>
                <a href="#" class="remove"><i class="fas fa-times-circle remove" data-id="${item.id}"></i></a>
            </div>
            `
        })
        this.container.innerHTML = str + `
        <div class="headerCartWrapTotalPrice">
                            <div>total&nbsp;</div>
                            <div>$${this.total}</div>
                        </div>

                        <button type="button" class="productsButtonIndex">Checkout</button>
                        <button type="button" class="productsButtonIndex">Go to cart</button>`;

    }
}

export class CatalogItem extends Item { }