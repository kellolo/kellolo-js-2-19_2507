import { Basket, Catalog } from "./js/lists";

export default () => {
    let basket = new Basket("basket", "/basket.json");
    let catalog = new Catalog("catalog", "/catalog.json", basket);
}
