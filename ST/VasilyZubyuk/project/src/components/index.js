import basket from './js/basket';
import Catalog from './js/catalog';

let Cat1 = new Catalog('#catalog', basket);

export default () => {
    basket.init();
    catalog.init(8, basket);
}