function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog(qty) {
    let ids = [];
    let names = [];
    let imgs = [];
    let prices = [];

    for (let i = 0; i <= qty - 1; i++) {
        ids.push(i);
        names.push("MANGO PEOPLE T-SHIRT");
        prices.push(`1${i}.00`);
        imgs.push(`https://raw.githubusercontent.com/Cerzon/assets/master/imgs/Product${i + 1}.jpg`);
    } 

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

export default {
    items: [],
    container: null,
    basket: null,


    init(qty, basket) {
        this.items = initCatalog(qty);
        this.container = document.querySelector("#catalog");
        this.basket = basket;
        this._render(qty);
        this._handleActions();
    },
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
    },
    _render() {

        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button class="add" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}">
                                <div class="add" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}"><i class="add fas fa-shopping-cart" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}"></i>Add to Cart</div>
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>

                    </div>
                </div>
            </div>
            `

            
        })
        this.container.innerHTML = str;
    }
}

