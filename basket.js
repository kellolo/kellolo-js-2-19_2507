
var basket = {
    items: [],
    container: null,
    basket: basket,

    init() {
        this.container = document.querySelector("#basket");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        });

    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="d-flex">
                <a href="#" class="d-flex headerCartWrapIn">
                    <img src="${item.img}" alt="">
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
                <button name="remove" data-id="${item.id}">x</button>
            </div>
            `
        })
        this.container.innerHTML = str;

    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this._render();
        this.renderTotalSum();
    },
    renderTotalSum() {
        document.querySelector('.total').textContent = '$' + this.getTotalSum();
        if (this.getTotalSum() == undefined) {
            return document.querySelector('.total').textContent = '$ 0'
        }
    },
    getTotalSum() {
        let sum = 0;
        // если делать так, метод прервет итерацию:
        // for (let key in this.items) {
        //     sum += this.items[key].price * this.items[key].amount;
        //     return sum;
        // }
        this.items.forEach(el => {
            sum += el.price * el.amount
        });

        // this._render();

        this._render();
        return sum;
    },
    remove(itemId) {

        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
        this.renderTotalSum();
    }
}

basket.init();

export default catalog
