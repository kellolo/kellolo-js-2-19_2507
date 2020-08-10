export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        console.log(item)
        return `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button 
                                class="add" 
                                data-name="${item.productName}" 
                                data-price="${item.productPrice}" 
                                data-img="${item.productImg}" 
                                data-id="${item.productId}"
                            >
                                <div 
                                    class="add" 
                                    data-name="${item.productName}" 
                                    data-price="${item.productPrice}" 
                                    data-img="${item.productImg}" 
                                    data-id="${item.productId}"
                                >
                                <i 
                                    class="add fas fa-shopping-cart" 
                                    data-name="${item.productName}" 
                                    data-price="${item.productPrice}" 
                                    data-img="${item.productImg}" 
                                    data-id="${item.productId}"
                                ></i>Add to Cart</div>
                            </button>
                        </div>
                        <img 
                            class="feturedProduct" 
                            src="${item.productImg}" 
                            alt="product1"
                        >
                    </div>
                    <div 
                        class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
                    >
                        <div class="feturedItemName">${item.productName}</div>
                        <div class="feturedItemPrice">$${item.productPrice}</div>

                    </div>
                </div>
            </div>
        `
    }
}