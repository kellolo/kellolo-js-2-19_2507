
// ------- Creating Catalog of Products ------- //

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog() {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7];
    let names = ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", 
                "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", 
                "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"];

    let prices = ["52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00"];

    let imgs = ["https://raw.githubusercontent.com/RDarya/static/master/img/item_1.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_2.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_3.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_4.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_5.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_6.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_7.png",
                "https://raw.githubusercontent.com/RDarya/static/master/img/item_8.png",];

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

const catalog = {
    items: [],
    container: null,

    init() {
        this.items = initCatalog();
        this.container = document.querySelector("#catalog");
        this._render();
    },

    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="product">
                <img class="product__img" src="${item.img}">
                <div class="product__name">${item.name}</div>
                <div class="product__price">$${item.price}</div>
                <button class="product__add">
                    <i class="fas fa-shopping-cart"></i>Add to Cart
                </button>
            </div>
            `
        })
        this.container.innerHTML = str;
    }
}
//catalog.init();

