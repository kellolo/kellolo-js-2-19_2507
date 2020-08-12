import List from "./list"

export class Catalog extends List {
    constructor(url, container, cart) {
        super(url, container, cart);
    }
}

export class Cart extends List {
    constructor(url, container) {
        super(url, container);
    }

    add(item) {

    }

    remove(itemId) {

    }
}

