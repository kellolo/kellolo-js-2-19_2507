import Item from "./item"

export class CartItem extends Item {
    constructor(item) {
        super(item);
    }

    render() {
        let item = this.item;
        return `
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
    }
}

export class CatalogItem extends Item {}
