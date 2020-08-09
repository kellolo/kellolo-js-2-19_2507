import basket from './basket';

function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalog(qty) {  
    let ids = [];
    let names = [];
    let imgs = [];
    let prices = [];

    for (let i = 1; i <= qty; i++) {
        ids.push(i);
        names.push("MANGO PEOPLE T-SHIRT");
        prices.push("1" + String(i) + ".00");
        imgs.push(`https://raw.githubusercontent.com/O2xy/stattic/master/img/JS1_shop/Fetured${i}.jpg`)
    } 

    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));
};

export default class Catalog {
    constructor (container, basket) {
        this.items = [];
        this.container = document.querySelector(container);
        this.basket = basket;
        this._init(8, basket);
    }

    _init(qty, bask) {
        this.basket = bask;
        this.items = initCatalog(qty);
        // this.container = document.querySelector("#catalog");
        this._render(qty);
        this._handleActions();
    };

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
    };

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

// const catalog = {
//     items: [],
//     container: null,
//     basket: comnull,


//     init(qty, bask) {
//         this.basket = bask;
//         this.items = initCatalog(qty);
//         this.container = document.querySelector("#catalog");
//         this._render(qty);
//         this._handleActions();
//     },
//     _handleActions() {
//         this.container.addEventListener('click', evt => {
//             if (evt.target.classList.contains("add")) {
//                 let item = {
//                     name: evt.target.dataset.name,
//                     price: +evt.target.dataset.price,
//                     img: evt.target.dataset.img,
//                     amount: 1,
//                     id: evt.target.dataset.id
//                 }
//                 this.basket.add(item);
//             }
//         })
//     },
//     _render() {

//         let str = "";
//         this.items.forEach(item => {
//             str += `
//             <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" >
//                 <div class="feturedItem">
//                     <div class="feturedImgWrap">
//                         <div class="feturedBuy">
//                             <button class="add" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}">
//                                 <div class="add" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}"><i class="add fas fa-shopping-cart" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-id="${item.id}"></i>Add to Cart</div>
//                             </button>
//                         </div>
//                         <img class="feturedProduct" src="${item.img}" alt="product1">
//                     </div>
//                     <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
//                         <div class="feturedItemName">${item.name}</div>
//                         <div class="feturedItemPrice">$${item.price}</div>

//                     </div>
//                 </div>
//             </div>
//             `

            
//         })
//         this.container.innerHTML = str;
//     }
// }

// export default catalog;