import { BasketItem, CatalogItem } from './items';

let classes = {
    'Catalog': CatalogItem,
    'Basket': BasketItem
}

export default class List {
    constructor(url, container, basket) {
        this.url = url;
        this.container = container;
        this.items = [];
        this.total = -1;
        this._init(basket);
    }
    _init(basket = false) {
        let url = 'https://raw.githubusercontent.com/MoffAndrey/Static/master/JSON/GeekBrains' + this.url;
        this._get(url)
        .then(data => { 
            this.items = !basket ? data.contents : data;
            if (data.amount >= 0) {
                this.total = +data.amount;
            }
               
        })
        .then(() => {
            this._render(this.total);
        });
    }

    _get(url) {
        return fetch(url)
            .then(data => data.json());
    }

    _render(total = false) {
        let template = '';
        this.items.forEach(item => {
            template += new classes[this.constructor.name](item).render();
        });
        document.querySelector(this.container).innerHTML = template;
        if (total >= 0) {
            document.querySelector('#amount').innerText = `$${total}`;
        }
    }


}