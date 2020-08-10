
import basket2 from './basket';
let basket3 = new basket2;
basket3.init();

/////////////

function createItem(id, name, price, img) {
    return {id, name, price, img};
};


function initCatalog(par) {

    return par.names.map((names, index) => createItem(par.ids[index], names, par.prices[index], par.imgs[index]));
};

export default class listClass {
    constructor(container, par) {
        this.items = [];
        this.container = container;
        this.par = par;
        this.basket = basket3;
    }


    init() {
        this.items = initCatalog(this.par);
        this.container = document.querySelector(this.container);
        this._render();
        this._handleActions();
    }
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add') {
                let item = {
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    img: evt.target.dataset.img,
                    amount: 1,
                    p: +evt.target.dataset.price,
                    id: evt.target.dataset.id
                }
                this.basket.add(item);
            }
        })
    }

    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0  feturedItems px-0 prod-cart " >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                             <button 
                                class="d-flex justify-content-center align-items-center" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}"
                            >
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>
                            <button 
                                class="d-flex justify-content-center align-items-center kartProdBtn2" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}"
                            >
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        
                    </div>
                </div>
            </div>
            `
        })
        this.container.innerHTML = str;
    }



}


//let cat = listClass('#container-product-show1', catalog1Data);   перенесла запуск на страницу Product.html
//cat.init();                                                      перенесла запуск на страницу Product.html