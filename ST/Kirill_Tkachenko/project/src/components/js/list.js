import { CatalogItem, BasketItem } from "./items";

let classes = {
    "Catalog": CatalogItem,
    "Basket": BasketItem
}

const BASE_URL = "https://raw.githubusercontent.com/Cerzon/assets/master/JSON";

export default class List {
    constructor(container, url, basket) {
        this.url = BASE_URL + url;
        this.container = document.getElementById(container);
        this.items = [];
        this.basket = basket;
        this._init();
    }

    _init() {
        this._get()
            .then(data => {
                if(!this.basket) {
                    this.items = data.contents;
                    this.total = data.total;
                }
                else {
                    this.items = data;
                }
            })
            .then(() => {
                this._render();
            })
            .then(() => {
                this._handleActions();
            });
    }

    _get() {
        return fetch(this.url)
                .then(data => data.json());
    }

    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains("add")) {
                let item = {
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    img: evt.target.dataset.img,
                    amount: 1,
                    id: evt.target.dataset.id
                }
                this.basket.add(item);
            }
        })
    }

    _render() {
        let listContent = "";
        this.items.forEach(item => {
            listContent += new classes[this.constructor.name](item).render()
        });
        this.container.innerHTML = listContent;
    }
}
