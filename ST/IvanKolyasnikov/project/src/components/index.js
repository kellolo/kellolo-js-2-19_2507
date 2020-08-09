import { Catalog, Basket } from "./js/lists";

export default () => {
    let catalog = new Catalog('/catalogData.json', '#index_catalog');
    let basket = new Basket('/getBasket.json', '#basket', true, catalog.container );
    basket.openCart()



}


// import Basket from "./js/basket";
// import Catalog from "./js/catalog";
//
// export default () => {
//     let cartBasket = new Basket();
//     cartBasket.openCart()
//     let productCatalog = new Catalog('#index_catalog', cartBasket, 0, 8);
// }