export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        return `
            <div class="col-10 offset-1 col-sm-6 col-md-3 offset-sm-0  feturedItems px-0 prod-cart " >
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                             <button 
                                class="d-flex justify-content-center align-items-center" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}"
                                
                            >
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.img}" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>
                            <button 
                                class="d-flex justify-content-center align-items-center kartProdBtn2" 
                                name="add"
                                data-name="${item.name}"
                                data-img="${item.img}"
                                data-price="${item.price}"
                                data-id="${item.id}"
                            >
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                    </div>
                </div>
            </div>
            `
    }
}