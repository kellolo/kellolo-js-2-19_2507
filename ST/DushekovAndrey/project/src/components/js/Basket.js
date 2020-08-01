export default {
    items: [],
    container: null,
    basket: basket,
    total: 0,

    init() {
        this.container = document.querySelector("#basket");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        document.addEventListener('click', evt => {
            if (evt.target.id == 'remove') {
                this.remove(evt.target.dataset.id);
            }

            if (evt.target.classList.contains('cartButton')) {
           		this.container.classList.toggle('d-none');
           		this.container.classList.toggle('d-block');
        	}
        })
    },
    _render() {
        let str = "";
        this.items.forEach(item => {   	
            str += ` 
				<div class="cartMenu-block d-flex justify-content-between align-items-center mx-3 py-3">
						<img src="${item.img}" alt="First">
						<div class="cartMenu-block-content my-auto ml-3">
							<h4 class="cartMenu-h4-f1">${item.name}</h4>
							<h4 class="cartMenu-h4-f2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></h4>
							<h4 class="cartMenu-h4-f3">${item.amount}  x  $${item.price}</h4>
						</div>
						<button class="cartMenu-h4-f4">
							<i class="fas fa-times-circle" 
							id="remove" 
							data-id="${item.id}"></i>
						</button>
				</div>
            `
        });
        str += `
       		<div class="cartMenu-price d-flex mx-3 mt-3 justify-content-between align-items-center">
				<h2>TOTAL</h2>
				<h2>$${this.total}</h2>
			</div>
			<div class="cartMenu-chkButton mx-3 d-flex justify-content-center align-items-center">
				<a href="#">Checkout</a>
			</div>
			<div class="cartMenu-crtButton mx-3 d-flex justify-content-center align-items-center">
				<a href="#">Go to cart</a>
			</div>
        `
        this.container.innerHTML = str;
    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);
        
        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this.total += item.price;
        this._render();
    },
    remove(itemId) {
        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this.total -= find.price;
        this._render();
    }
}