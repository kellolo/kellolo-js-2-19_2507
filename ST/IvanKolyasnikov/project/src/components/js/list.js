import {BasketItem, CatalogItem} from "./items";

let classes = {
    'Catalog': CatalogItem,
    'Basket': BasketItem,
}

export default class List {
    constructor(url, container, basket) {
        this.url = url;
        this.container = container;
        this.items = [];
        this._init(basket);
    }

    _init(basket=false) {
        let url = 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json' + this.url;
        this._get(url)
            .then(data => {
                this.items = (!basket ? data : data.contents);
            })
            .then(() => {
                this._render();
            })
    }

    _get(url) {
        return fetch(url)
            .then(data => data.json());
    }

    _render() {

        let template = '';
        this.items.forEach(item => {
            template += new classes[this.constructor.name](item).render()
        })
        document.querySelector(this.container).innerHTML = template;
    }
}