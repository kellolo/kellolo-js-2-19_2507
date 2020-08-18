
export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        
        return `
        <div class="product">
            <img class="product__img" src="${item.img}">
            <div class="product__name">${item.name}</div>
            <div class="product__price">$${item.price}</div>
            <button class="product__add"
                name="add"
                data-name="${item.name}"
                data-img="${item.img}"
                data-price="${item.price}"
                data-id="${item.id}"
            >
                <i class="fas fa-shopping-cart"></i>Add to Cart
            </button>
        </div>
        `
    }
}

export class BasketItem extends Item { }