import cart from "./js/cart";
import catalog from "./js/catalog";
import header from "./js/header"

export default () => {
    catalog(cart);
    header.handleEvents();
}


