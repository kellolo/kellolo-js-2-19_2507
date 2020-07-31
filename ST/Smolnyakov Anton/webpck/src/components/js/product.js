import cart from "./cart";

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog() {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let names = ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
        "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"];

    let prices = ["50.00", "60.00", "70.00", "80.00", "50.00", "60.00", "70.00", "80.00", "70.00"];

    let imgs = [
        "../src/assets/imgs/Product1.jpg",
        "../src/assets/imgs/Product2.jpg",
        "../src/assets/imgs/Product3.jpg",
        "../src/assets/imgs/Product4.jpg",
        "../src/assets/imgs/Product5.jpg",
        "../src/assets/imgs/Product1.jpg",
        "../src/assets/imgs/Product2.jpg",
        "../src/assets/imgs/Product3.jpg",
        "../src/assets/imgs/Product4.jpg"
    ];

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

const catalog = {
    items: [],
    container: null,
    cart: cart,

    init() {
        this.items = initCatalog();
        this.container = document.querySelector("#catalog");
        this._render();
        this._handleActions();
    },

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
                this.cart.add(item);
            }
        })
    },

    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>
                        <button class="d-md-none" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}">
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

export default catalog