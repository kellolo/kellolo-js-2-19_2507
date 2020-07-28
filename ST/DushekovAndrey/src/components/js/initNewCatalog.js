import component from './Basket.js'

function createItem(id, name, price, img) {
            return { id, name, price, img }
        }

function initNewCatalog(settings) {
	const element = {
		items: [],

		ids: settings.ids,
		names: settings.names,
		prices: settings.prices,
		imgs: settings.imgs,
		container: settings.container,
		template: settings.template,
		basket: basket,

		init() {
			this._initCatalog();
			this._render();
			this._handleActions();
		},

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
    	},

		_initCatalog() {
			this.items = this.names.map((name, index) => createItem(this.ids[index], name, this.prices[index], this.imgs[index]));
		},

		_render() {
			let str = '';
			this.items.forEach((el) => {
				str += this.template(el.name, el.price, el.img, el.id);
			});
			document.querySelector(this.container).innerHTML = str;
		}
	}
	element.init();
	return element;
}