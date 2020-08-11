export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        return `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems" >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>
                        <button class="d-md-none" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            `
    }
}

