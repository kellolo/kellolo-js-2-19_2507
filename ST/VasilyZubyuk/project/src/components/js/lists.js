import List from './list';

export class Catalog extends List {
    constructor(url, container, basket) {
        super(url, container, basket);
        this.basket = basket;
    }
}

export class Basket extends List {
    constructor(url, container) {
        super(url, container);
        this.total = 0;
    }

    _render(){
        let template = "";
        this.items.forEach(item => {
            template += `
            <div class="d-flex headerCartWrapIn">
                <a href="#" class="d-flex">
                    <img src="${item.productImg}" alt="" style="height: 85px">
                    <div>
                        <div>${item.productName}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.productPrice}
                        </div>
                    </div>
                </a>
                <a href="#" class="remove"><i class="fas fa-times-circle remove" data-id="${item.productId}"></i></a>
            </div>
            `
        })
        // this.container.innerHTML = template + `
        template += `
        <div class="headerCartWrapTotalPrice">
                            <div>total&nbsp;</div>
                            <div>$${this.total}</div>
                        </div>

                        <button type="button" class="productsButtonIndex">Checkout</button>
                        <button type="button" class="productsButtonIndex">Go to cart</button>`;
        document.querySelector(this.container).innerHTML = template;

    }

    add(item) {
        let find = this.items.find(el => el.productId == item.productId);

        if (!find) {
            this.items.push(item);
            this.total = this.total + Number(item.productPrice);
        } else {
            find.amount++;
            this.total = this.total + Number(find.productPrice);            
        }
        this._render();
    }

    remove(itemId) {
        let find = this.items.find(el => el.productId == itemId);

        if (find.amount > 1) {
            find.amount--;
            this.total = this.total - Number(find.productPrice);
        } else {
            this.items.splice(this.items.indexOf(find), 1);
            this.total = this.total - Number(find.priproductPricece);
        }
        this._render();
    }
}