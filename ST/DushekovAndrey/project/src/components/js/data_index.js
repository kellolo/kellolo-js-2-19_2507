export default {
        ids: [1, 2, 3, 4, 5, 6, 7, 8],
        names: ['Mango People T-shirt', 'Orange People T-shirt', 'Apple People T-shirt', 'Mango Men Jacket', 'Mango Women Jacket', 'Mango People Coat', 'Grape People T-shirt', 'Mango People Jeans'],
        prices: ['52.00', '32.00', '12.00', '48.00', '34.00', '27.00', '52.00', '54.00'],
        imgs: [
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured1.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured2.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured3.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured4.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured5.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured6.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured7.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Featured8.jpg?raw=true',
        ],
        container: '.feturedArea',
        template(name, price, img, id) {
          return `
            <div class="feturedBlock">
              <div class="featuredImgWrap">
                <div class="featuredBuy justify-content-center align-items-center">
                   <button
                    id="add"
                    data-name="${name}"
                    data-img="${img}"
                    data-price="${price}"
                    data-id="${id}"
                   >
                    <img 
                     id="add"
                     data-name="${name}"
                     data-img="${img}"
                     data-price="${price}"
                     data-id="${id}"
                     src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/addToCart.png?raw=true" alt="">
                     Add to Cart
                    </button>
                </div>
                 <img class="addtocartPhones d-md-none d-block" src="https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/cart.png?raw=true" alt="Cart">
                 <img src="${img}" alt="Featured1">
              </div>
             <div class="featured-text ml-3 mt-2">${name}</div>
             <div class="featured-price ml-3 mt-2">$${price}</div>
            </div>
          `
        }
      }