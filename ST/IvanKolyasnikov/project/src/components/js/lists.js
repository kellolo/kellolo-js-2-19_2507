import List from "./list";

export class Catalog extends List {
    constructor(url, container, basket) {
        super(url, container, basket);
        this.container = container;
        this.basket = basket;
        this._handleActions();
    }

    _handleActions() {
        let container = document.querySelector(this.container)
        container.addEventListener('click', evt => {
            if (evt.target.name === 'add') {
                let item = {
                    id: +evt.target.dataset.id,
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    img: evt.target.dataset.img,
                    quantity: 1,
                }
                this.basket.add(item);
            }
        })
    }
}

export class Basket extends List {
    constructor(url, container) {
        super(url, container);
        this._handleActions();
    }

    add(item) {
        let find = this.items.find(el => el.id === +item.id);
        if (!find) {
            this.items.push(item);
        } else {
            find.quantity++;
        }
        this._render();
        this._sumBasket();
    };

    _remove(itemID) {
        let find = this.items.find(el => el.id === itemID);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
        this._sumBasket();
    };

    _handleActions() {
        let container = document.querySelector(this.container)
        container.addEventListener('click', evt => {
            if (evt.target.name === 'remove') {
                this._remove(+evt.target.dataset.id);
            }
        })
    };

    _sumBasket() {
        this.sum = 0;
        let allProd = document.querySelectorAll('.product__Price');
        allProd.forEach(el => this.sum += +(el.textContent));
        document.querySelector('.prod_sum').innerHTML = `$${this.sum}`;
    };

    openCart() {
        let dropdownOn = document.querySelector('.basket__Product');
        document.addEventListener('click', evt => {
            if (evt.target.classList.contains('my__cart')) {
                dropdownOn.classList.toggle('open__basket');
            }
            this._sumBasket();
        })

    };
}