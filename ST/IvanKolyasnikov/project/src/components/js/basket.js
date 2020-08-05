export default {
    items: [],
    container: null,
    sum: null,

    init() {
        this.container = document.querySelector("#basket");
        this._render();
        this._handleActions();

    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name === 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="d-flex px-3 justify-content-between align-items-center">
                        <a href="#""><img src="${item.img}" alt="${item.name}"></a>
                        <div class="d-flex flex-column justify-content-center align-items-center product__text">
                            <h3 class="mb-0">${item.name}</h3>
                            <div class="stars py-0">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p class="mt-1">${+item.amount} x $<span class="product__Price">${+item.price*+item.amount}</span></p>
                        </div>
                        <button name="remove" class="dell__Product fa fa-times-circle" data-id="${item.id}" aria-hidden="true"></button>
                    </div>
                    <div class="dropdown-divider mx-3"></div>
            `
        })
        this.container.innerHTML = str;
        this._sumBasket();
    },
    add(item) {
        let find = this.items.find(el => el.id === item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this._render();
    },
    remove(itemId) {
        let find = this.items.find(el => el.id === itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    },
    _sumBasket(){
        this.sum = null;
        let allProd = document.querySelectorAll('.product__Price');
        allProd.forEach(el => this.sum += +(el.textContent));
        document.querySelector('.prod_sum').innerHTML =`$${this.sum}`;

    }
};
