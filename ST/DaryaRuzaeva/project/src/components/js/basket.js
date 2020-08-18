// ------- Creating Basket -------- //

class BasketAccount {
    constructor(container) {
        this.items = [];
        this.container = null;
        this.total = 0;
        this._init();
    }
    _init() {
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
        this.items.forEach(item => {
            str += `
                <div class="account_img">
                    <a href="#" class="drop_account-img">
                        <img src="${item.img}" alt="drop_account-img">
                    </a>
                </div>
                <div class="account_description">
                    <div class="account__h3">${item.name}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <div class="account_price">
                        <p>${item.amount}</p>
                        <span class="multiply">x</span> $${item.price}
                    </div>
                    <button name="remove" data-id="${item.id}">x</button>
                </div>
            `
        })
        this.container.innerHTML = str + `
        <div class="total_price">
            <div class="total_h3">total&nbsp;</div>
            <div class="total_h3">$${this.total}</div>
        </div>
        `;
    }

    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
            this.total = this.total + Number(item.price);
        } else {
            find.amount++;
            this.total = this.total + Number(find.price);            
        }
        this._render();
    }

    remove(itemId) {
        
        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
            this.total = this.total - Number(find.price);
        } else {
            this.items.splice(this.items.indexOf(find), 1);
            this.total = this.total - Number(find.price);
        }
        this._render();
    }
}

let ItemBasket = new BasketAccount('#basket');

    //basket.init();

    //export default basket


