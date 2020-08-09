import { Catalog, Basket } from './js/lists';

export default () => {
    let catalog = new Catalog('/catalog.json', '#catalog');
    console.log(catalog)
}


// import basket from './js/basket';
// import catalog from './js/catalog';

// export default () => {
//     basket.init();
//     catalog.init(9);
// }