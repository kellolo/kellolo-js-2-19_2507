import basket from "./js/basket";
import catalog from "./js/product";

export default () => {
    basket.init();
    catalog.init(9, basket);
}