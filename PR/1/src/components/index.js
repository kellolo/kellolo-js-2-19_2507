import basket from './js/basket';
import catalog from './js/catalog';

export default () => {
    basket.init();
    catalog.init(9, basket);
    console.log(catalog)
}