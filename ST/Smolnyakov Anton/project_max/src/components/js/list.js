import { CartItem, CatalogItem } from './items';

let classes = {
    'Catalog': CatalogItem,
    'Cart': CartItem
}

export default class List {
    constructor(url, container, cart) {
        this.url = url;
        this.container = container;
        this.items = [];
        this._init(cart);
    }

    _init(cart = false) {
        let url = 'https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/' + this.url;
        this._get(url)
            .then(data => {
                this.items = !cart ? data : data.contents;
                console.log(data.contents)
            })
            .then(() => {
                this._render();
            });
    }

    _get(url) {
        return fetch(url)
            .then(data => data.json());
    }

    _render() {
        let template = '';
        this.items.forEach(item => {
            template += new classes[this.constructor.name](item).render();
            // new Catalog()._render >> template += new classes['Catalog'](item).render()
            // new Cart()._render >> template += new classes['Cart'](item).render()
        });
        document.querySelector(this.container).innerHTML = template;
    }
}
