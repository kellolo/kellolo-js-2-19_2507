export default {
    items: [],
    container: null,
    total: 0,

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
        })
    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="drop__flex-account">
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
            </div>`
            
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
    },
    remove(itemId) {
        console.log('remove')
        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}

    //basket.init();

    //export default basket

