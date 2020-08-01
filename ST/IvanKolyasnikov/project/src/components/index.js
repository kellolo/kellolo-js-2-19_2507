import basket from "./js/basket";
import catalog from "./js/catalog";


export default () => {
    basket.init();
    catalog.init('#catalog');
    catalog.init('#index_catalog', 0, 8)
    catalog.init('#single_catalog', 0, 4)
    catalog.openCart()
}