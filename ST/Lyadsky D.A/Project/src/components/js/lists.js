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
    }
    // _handleActions() {
    //     this.container.addEventListener('click', evt => {
    //         if (evt.target.classList.contains("add")) {
    //             let item = {
    //                 name: evt.target.dataset.productName,
    //                 price: +evt.target.dataset.productPrice,
    //                 img: evt.target.dataset.productImg,
    //                 amount: 1,
    //                 id: evt.target.dataset.productId
    //             }
    //             this.basket.add(item);
    //         }
    //     })
    // }
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
            this.total = this.total - Number(find.productPrice);
        }
        this._render();

    }

}