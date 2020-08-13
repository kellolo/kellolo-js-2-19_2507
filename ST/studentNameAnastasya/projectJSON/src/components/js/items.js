import Item from './item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.amount = 1;
    }
    render() {
        let item = this.item;
        return `
        <div class="d-flex headerCartWrapIn">
                <a href="#" class="d-flex">
                    <img src="${item.img}" alt="" style="height: 85px">
                    <div>
                        <div>${item.name}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.quantity} 
                            <span>x</span> $${item.price}
                        </div>
                    </div>
                </a>
                <a href="#" class="remove"><i class="fas fa-times-circle remove" data-id="${item.id}"></i></a>
            </div>
        `
    }

}

export class CatalogItem extends Item {

}