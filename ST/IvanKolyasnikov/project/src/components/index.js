import Basket from "./js/basket";
import Catalog from "./js/catalog";

export default () => {
    let cartBasket = new Basket();
    cartBasket.openCart()
    let productCatalog = new Catalog('#index_catalog', cartBasket, 0, 8);
}