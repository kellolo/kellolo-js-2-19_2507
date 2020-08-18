export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        return `
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button 
                                class="add" 
                                data-name="${item.name}" 
                                data-price="${item.price}" 
                                data-img="${item.img}" 
                                data-id="${item.id}"
                            >
                                <div 
                                    class="add" 
                                    data-name="${item.name}" 
                                    data-price="${item.price}" 
                                    data-img="${item.img}" 
                                    data-id="${item.id}"
                                >
                                <i 
                                    class="add fas fa-shopping-cart" 
                                    data-name="${item.name}" 
                                    data-price="${item.price}" 
                                    data-img="${item.img}" 
                                    data-id="${item.id}"
                                ></i>Add to Cart</div>
                            </button>
                        </div>
                        <img 
                            class="feturedProduct" 
                            src="${item.img}" 
                            alt="product1"
                        >
                    </div>
                    <div 
                        class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
                    >
                        <div class="feturedItemName">${item.name}</div>
                        <div class="feturedItemPrice">$${item.price}</div>

                    </div>
                </div>
            </div>
        `
    }
}