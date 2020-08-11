import parentCartAndCatalog from "./parents"

class cartClass extends parentCartAndCatalog {
    _init() {
        this.container = document.querySelector("#cart");
        this.totalSumContainer = document.querySelector("#totalSum");
        this._render();
        this._handleActions();
        this._minusTotalSum();
    }

    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove' || evt.target.id == "removeProductCart") {
                this.remove(evt.target.dataset.id);
            }
        })
    }

    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="d-flex">
                <a href="#" class="d-flex headerCartWrapIn">
                    <div class="cartImg"><img src="${item.img}" alt=""></div>
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
                <button name="remove" data-id="${item.id}"><i class="fas fa-times-circle" data-id="${item.id}" id="removeProductCart" aria-hidden="true"></i></button>
            </div>
            `
        })
        this.container.innerHTML = str;
    }

    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this._render();
        this.renderTotalSum();
    }

    remove(itemId) {
        let find = this.items.find(el => el.id == itemId);
        console.log(find.amount)
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._minusTotalSum();
        this._render();
    }

    renderTotalSum() {
        let sum = 0;
        this.totalSum = sum;
        this.items.forEach(item => {
            sum += +item.price * +item.amount;
        });
        this.totalSumContainer.innerHTML = "$" + sum;
    }

    _minusTotalSum() {
        let sum = 0;
        this.totalSum = sum;
        this.items.forEach(item => {
            sum -= +item.price * +item.amount * -1;
        });
        this.totalSumContainer.innerHTML = "$" + sum;
    }
}

let cart = new cartClass()

export default cart;
