let catalog = {
        ids: [1, 2, 3, 4, 5, 6],
        names: [1, 2, 3, 4, 5, 6],
        prices: [1, 2, 3, 4, 5, 6],
        imgs: [
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery1.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery2.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery3.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery4.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery5.jpg?raw=true',
            'https://github.com/MoffAndrey/Static/blob/master/img/GeekBrains/Galllery/Gallery6.jpg?raw=true'
        ],
        container: '.roulette',
        template(name, price, img) {
          return `
            <img src="${img}" width="50" height="110" class="img-preview mx-4">
          `
        }
      }

      let newGallery = initNewCatalog(catalog);