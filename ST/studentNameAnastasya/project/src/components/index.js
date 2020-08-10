import Basket from './js/basket';
import Catalog from './js/catalog';



export default () => {
    let basket = new Basket('#basket');
    let cat1 = new Catalog('#catalog', basket, 9);
}