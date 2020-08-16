// import Basket from './js/basket';
// import Catalog from './js/catalog';



// export default () => {
//     let basket = new Basket('#basket');
//     let cat1 = new Catalog('#catalog', basket, 9);
// }[]

import { Catalog, Basket } from './js/lists';
export default () => {
    let catalog = new Catalog('/catalog.json', '#catalog');
    let basket1 = new Basket('/getBasket.json', '#basket', basket)
}