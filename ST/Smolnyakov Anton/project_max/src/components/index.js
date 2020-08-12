import { Catalog, Cart } from './js/lists';
import header from "./js/header"

export default () => {
    let cart = new Cart('/cart.json', '#cart');
    let catalog = new Catalog('/catalog.json', '#catalog', cart);
    header.handleEvents();
}

