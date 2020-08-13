
// ------- Creating Catalog of Products from Catalog.html ------- //

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog() {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let names = ["MANGO T-SHIRT", "PEOPLE T-SHIRT", "ZARA T-SHIRT", 
                "ZARA POLO", "BANANA REPUBLIC", "TROUSERS", 
                "SWEATSHIRT", "MANGO HAT", "ZARA TROUSERS"];

    let prices = ["52.00", "71.00", "62.00", "55.00", "60.00", "85.00", "45.00", "30.00", "70.00"];

    let imgs = ["https://raw.githubusercontent.com/RDarya/static/master/img/catalog_1.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/catalog_2.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_3.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/catalog_3.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_8.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/catalog_4.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_6.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/catalog_5.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/catalog_6.png"];

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

class CatalogBox {
    constructor(container) {
        this.items = [];
        this.basket = null;
        this.container = null;
        this._init();
    }

    _init(qty, bask) {
        this.basket = bask;
        this.items = initCatalog();
        this.container = document.querySelector("#catalog_2");
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
            <div class="product">
                <img class="product__img" src="${item.img}">
                <div class="product__name">${item.name}</div>
                <div class="product__price">$${item.price}</div>
                <button class="product__add"
                    name="add"
                    data-name="${item.name}"
                    data-img="${item.img}"
                    data-price="${item.price}"
                    data-id="${item.id}"
                >
                    <i class="fas fa-shopping-cart"></i>Add to Cart
                </button>
            </div>
            `
        })
        this.container.innerHTML = str;
    }
}

let ItemProduct = new CatalogBox('#catalog_2');

//export default catalog
