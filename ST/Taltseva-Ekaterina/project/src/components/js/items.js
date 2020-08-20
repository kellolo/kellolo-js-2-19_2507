import Item from './item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
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
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.price}
                        </div>
                    </div>
                  <button name="remove" data-id="${item.id}">x</button>
            </div>
        `
    }
}

export class CatalogItem extends Item { }