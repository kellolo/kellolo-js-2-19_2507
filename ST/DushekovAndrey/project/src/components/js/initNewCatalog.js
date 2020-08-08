export default class Catalog {
	constructor (settings, basket) {
		this.items = [];
		this.ids = settings.ids;
		this.names = settings.names;
		this.prices = settings.prices;
		this.imgs = settings.imgs;
		this.container = settings.container;
		this.template = settings.template;
		this.basket = basket;
		this._init();
	}

	_createItem(id, name, price, img) {
        return { id, name, price, img }
    }

	_init() {
		this._initCatalog();
		this._render();
		this._handleActions();
	}

	_initCatalog() {
		this.items = this.names.map((name, index) => this._createItem(this.ids[index], name, this.prices[index], this.imgs[index]));
	}

	_render() {
		let str = '';
		this.items.forEach((el) => {
			str += this.template(el.name, el.price, el.img, el.id);
		});
		document.querySelector(this.container).innerHTML = str;
	}

	_handleActions() {
       	document.addEventListener('click', evt => {
           if (evt.target.id == 'add') {
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
} 