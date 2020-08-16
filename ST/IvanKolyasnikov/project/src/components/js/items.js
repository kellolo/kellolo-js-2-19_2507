import Item from "./item";

export class BasketItem extends Item {
    constructor(item) {
        super(item);
    }
    render() {
        let item = this.item;
        return `
        <div class="d-flex px-3 justify-content-between align-items-center py-1">
            <a href="#""><img src="${item.img}" alt="${item.name}"></a>
            <div class="d-flex flex-column justify-content-center align-items-center product__text">
                <h3 class="mb-0">${item.name}</h3>
                <div class="stars py-0">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <p class="mt-1">${+item.quantity} x $
                <span class="product__Price">${+item.price * +item.quantity}</span>
                </p>
            </div>
            <button name="remove" class="dell__Product fa fa-times-circle" 
                data-id="${item.id}" 
                aria-hidden="true">
            </button>
        </div>
        <div class="dropdown-divider mx-3"></div> `

    }
}

export class CatalogItem extends Item {

}