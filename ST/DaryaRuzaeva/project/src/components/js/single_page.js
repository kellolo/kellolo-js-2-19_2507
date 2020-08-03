
// ------- Creating Catalog of Products ------- //

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog() {
    let ids = [0, 1, 2, 3];
    let names = ["BLAZE LEGGINGS", 
                "ALEXA SWEATER", 
                "AGNES TOP", 
                "SYLVA SWEATER"];

    let prices = ["52.00", "52.00", "52.00", "52.00"];

    let imgs = ["https://raw.githubusercontent.com/RDarya/static/master/img/single_product1.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/single_product2.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/single_product3.png", 
                "https://raw.githubusercontent.com/RDarya/static/master/img/single_product4.png"];

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
            <div class="product_single">
                <img class="product_single-img_4" src="${item.img}">
                <div class="product__content">
                    <div class="product__name">${item.name}</div>
                    <div class="product__price">$${item.price}</div>
                    <button class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </button>
                </div>
            </div>
            `
        })
        this.container.innerHTML = str;
    }
}
//catalog.init();