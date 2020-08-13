export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        return `
            <div class="feturedBlock">
              <div class="featuredImgWrap">
                <div class="featuredBuy justify-content-center align-items-center">
                   <button
                    id="add"
                    data-name="${item.productName}"
                    data-img="${item.productImg}"
                    data-price="${item.productPrice}"
                    data-id="${item.productId}"
                   >
                    <img 
                     id="add"
                     data-name="${item.productName}"
                     data-img="${item.productImg}"
                     data-price="${item.productPrice}"
                     data-id="${item.productId}"
                     src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/addToCart.png?raw=true" alt="">
                     Add to Cart
                    </button>
                </div>
                 <img class="addtocartPhones d-md-none d-block" src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/cart.png?raw=true" alt="Cart">
                 <img src="${item.productImg}" alt="Featured1">
              </div>
             <div class="featured-text ml-3 mt-2">${item.productName}</div>
             <div class="featured-price ml-3 mt-2">$${item.productPrice}</div>
            </div>
        `
    }
}