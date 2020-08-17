import List from './list';

export class Catalog extends List {
    constructor(url, container, basket) {
        super(url, container, basket);
    }
}

export class Basket extends List {
    constructor(url, container) {
        super(url, container);
        this._handleActions();
        this.classBasket = document.querySelector('#basketBlock');
    }

    _handleActions() {
        document.addEventListener('click', evt => {
            if (evt.target.id == 'remove') {
                this.remove(evt.target.dataset.id);
            }

            if (evt.target.classList.contains('cartButton')) {
                this.classBasket.classList.toggle('d-none');
                this.classBasket.classList.toggle('d-block');
            }
            if (evt.target.id == 'add') {
               let item = {
                       productId: evt.target.dataset.id,
                       productName: evt.target.dataset.name,
                       productPrice: +evt.target.dataset.price,
                       productImg: evt.target.dataset.img,
                       quantity: 1   
                    }
               this.add(item);
            }
        })
    }

    add(item) {
        let find = this.items.find(el => el.productId == item.productId);
        if (!find) {
            this.items.push(item);
        } else {
            find.quantity++;
        }
       this.total += item.productPrice;
       this._render(this.total);
    }

    remove(itemId) {
        let find = this.items.find(el => el.productId == itemId);

        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this.total -= find.productPrice;
        this._render(this.total);
    }
}