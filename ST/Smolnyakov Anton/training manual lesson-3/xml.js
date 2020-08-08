const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class parents {
    constructor(title, price) {
        this.container = document.querySelector('.goods-list');
        this.cartContainer = document.querySelector("#cart");
        this.product_name = title;
        this.price = price;
        this.goods = [];
        this.cartItems = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        })
    }
}


class GoodsItem extends parents {

    render() {
        return `
                <div class="goods-item">
                    <h3>${this.product_name}</h3><p>${this.price}</p>
                    <button name="add" 
                    data-name="${this.product_name}"
                    data-price="${this.price}">buy</button>
                </div>
               `;
    }

    _renderCart() {
        let cart = '';
        this.cartItems.forEach(item => {
            cart += `
                    <div class="cartItem">
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                    <span>${item.amount}</span>
                    <button name="remove" data-name="${item.name}">delete</button>
                    </div>
            `;
        });
        console.log(this.cartItems)
        this.cartContainer.innerHTML = cart;
    }

    add(item) {
        let find = this.cartItems.find(el => el.name == item.name);

        if (!find) {
            this.cartItems.push(item);
        } else {
            find.amount++;
        }
        this._renderCart()
    }

    remove(item) {
        console.log(this.cartItems)
        let find = this.cartItems.find(el => el.name == item);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
        }
        this._renderCart();
    }


    _handleAction() {
        this.container.addEventListener("click", evt => {
            if (evt.target.name == "add") {
                let item = {
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    amount: 1,
                }
                this.add(item);
            }
        })
        this.cartContainer.addEventListener("click", evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.name);
            }
        })
    }
}

class cart extends parents {
    cartInit() {
        this._handleActions();
    }

    _handleActions() {
        let main = document.querySelector('#headerCartWrap');
        document.addEventListener('click', evt => {
            if (evt.target.id == 'headerCart') {
                main.classList.toggle('hidden');
            }
        })
    }
}


class GoodsList extends parents {

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        this.container.innerHTML = listHtml;
    }
}

function makeGETRequest(url, callback) {
    return new Promise(function (resolve, reject) {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', url, true);

        xhr.addEventListener("load", function () {
            if (xhr.readyState === 4) {
                resolve(callback(xhr.responseText));
            } else {
                reject(alert("error"));
            }
        })

        xhr.send();
    })
}


let getGoodsItem = new GoodsItem();
getGoodsItem.fetchGoods(() => {
    getGoodsItem._handleAction();
});

let getCart = new cart();
getCart.cartInit();

const getlist = new GoodsList();
getlist.fetchGoods(() => {
    getlist.render();
});
