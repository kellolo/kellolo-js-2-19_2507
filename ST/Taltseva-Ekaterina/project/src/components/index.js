import { Catalog, Basket } from './js/lists';

export default () => {
    let catalog = new Catalog('/indexCatalogData.json', '#catalog');
    //console.log(catalog);

    let basket = new Basket('/addToBasket.json', '#basket');
    //console.log(basket);
}


// import basket from './js/basket';
// import catalog from './js/catalog';

// export default () => {
//     basket.init();
//     catalog.init(9);
// }