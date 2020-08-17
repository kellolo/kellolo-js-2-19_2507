import Item from './item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.amount = 1;
    }

    render() {
        let item = this.item;
        console.log(item)
        return `
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
    }
}

export class CatalogItem extends Item { }