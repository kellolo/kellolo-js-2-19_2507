export default {
        ids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        names: ['Mango People T-shirt', 'Orange People T-shirt', 'Apple People T-shirt', 'Mango Men Jacket', 'Mango Women Jacket', 'Mango People Coat', 'Grape People T-shirt', 'Mango People Jeans', 'Mango People Pants'],
        prices: ['52.00', '32.00', '12.00', '48.00', '34.00', '27.00', '52.00', '54.00', '89.00'],
        imgs: [
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product1.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product2.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product3.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product4.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product5.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product6.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product7.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product8.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/BrandShop/Product9.jpg?raw=true',
        ],
        container: '.rightCatalogList',
        template(name, price, img, id) {
          return `
            <div class="catalogListBlock">
              <img src="${img}">
              <div class="d-flex justify-content-between">
                <div>
                  <div class="featured-text ml-3 mt-2">${name}</div>
                  <div class="featured-price ml-3 mt-2">$${price}</div>
                </div>
                <button class="d-flex justify-content-center align-items-center addToBasket">
                <i class="fas fa-shopping-cart" 
                  id="add"
                  data-name="${name}"
                  data-img="${img}"
                  data-price="${price}"
                  data-id="${id}"
                ></i>
                </button>
              </div>
            </div>
          `
        }
      }