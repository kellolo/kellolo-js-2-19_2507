import { Catalog, Basket } from './js/lists';

export default () => {
    let basket = new Basket('/addToBasket.json', '#basket');
    let catalog = new Catalog('/indexCatalogData.json', '#catalog', basket);
}


// import basket from './js/basket';
// import catalog from './js/catalog';

// export default () => {
//     basket.init();
//     catalog.init(9);
// }