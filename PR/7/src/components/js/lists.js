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

    add(item) {

    }

    remove(itemId) {

    }
}