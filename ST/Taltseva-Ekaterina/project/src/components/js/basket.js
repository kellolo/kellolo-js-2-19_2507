
export default class basket {
    constructor() {
        this.items= [];
        this.container = null;
        this.basket = basket;
        this.p = 0;
    }


    init() {
        this.container = document.querySelector("#basket");
        this._render();
        this._handleActions();
    }
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
    }
    _render() {
        let str = "";
        let str2 = 0; // сумма покупки всей корзины
        let priceSum = [...document.querySelectorAll('.priceSum')]; // дивы для суммы покупки всей корзины
        this.items.forEach(item => {
            str += `
            <div class="d-flex">
                <a href="#" class="d-flex headerCartWrapIn">
                    <div class="mini-prod-img"><img src="${item.img}" alt=""></div>
                    <div>
                        <div>${item.name}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.price}
                        </div>
                    </div>
                </a>
                <button name="remove" data-id="${item.id}" class="mini-prod-remove">X</button>
            </div>
            `
            str2 += item.p; // сумма покупки всей корзины
        })
        this.container.innerHTML = str;
        priceSum.forEach( i => i.innerHTML = str2);  // сумма покупки всей корзины
    }
    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
            find.p += item.price; // сумма покупки всей корзины
        }
        this._render();
    }
    remove(itemId) {
       let find = this.items.find(el => el.id == itemId);
        if (find.amount > 1) {
            find.amount--;
            find.p -= find.price;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}

