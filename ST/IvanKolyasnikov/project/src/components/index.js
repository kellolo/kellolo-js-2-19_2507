import { Catalog, Basket } from "./js/lists";

export default () => {
    let basket = new Basket('/getBasket.json', '#basket' );
    basket.openCart()
    let catalog = new Catalog('/catalogData.json', '#index_catalog', basket);

}
