export default class Catalog {
    constructor(container, basket) {
        this.items = ['item_1', 'item_2', 'item_3'];
        this.basket = basket;
        this.container = container;
        this._init();
    }

    _init() {
        this._render();
    }

    _render() {
        console.log(this)
        let cat = document.querySelector(this.container);
        let str = '';
        this.items.forEach(item => {
            str += `
                    <div class="item"> 
                        <strong>${item}</strong>
                        <button 
                            name="buy" 
                            data-prod="${item}"
                        >Buy</button>
                    </div>
            `
        })
        cat.innerHTML = str;
        cat.addEventListener('click', evt => {
            if (evt.target.name == 'buy') {
                this.basket.add(evt.target.dataset.prod);
            }
        })
    }
}