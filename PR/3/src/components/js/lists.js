import List from './list';

export class Catalog extends List {
    constructor(url, container, basket) {
        super(url, container, basket);
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