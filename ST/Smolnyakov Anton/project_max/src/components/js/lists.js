import List from "./list"

export class Catalog extends List {
    constructor(url, container, cart) {
        super(url, container, cart);
        this.cart = cart;
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
                this.cart.add(item);
            }
        });
    }
}

export class Cart extends List {
    constructor(url, container) {
        super(url, container);
    }

    _handleActions() {
        let catCart = document.querySelector(this.container);
        catCart.addEventListener('click', evt => {
            if (evt.target.name == 'remove' || evt.target.id == "removeProductCart") {
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
        this._render();
        this.renderTotalSum();
    }

    remove(itemId) {
        let find = this.items.find(el => el.id == itemId);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._minusTotalSum();
        this._render();
    }

    renderTotalSum() {
        let sum = 0;
        this.totalSum = sum;
        this.items.forEach(item => {
            sum += +item.price * +item.amount;
        });
        this.totalSumContainer.innerHTML = "$" + sum;
    }

    _minusTotalSum() {
        let sum = 0;
        this.totalSum = sum;
        this.items.forEach(item => {
            sum -= +item.price * +item.amount * -1;
        });
        this.totalSumContainer.innerHTML = "$" + sum;
    }
}

