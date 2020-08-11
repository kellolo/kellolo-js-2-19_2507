import { Catalog, Cart } from './js/lists';
import header from "./js/header"

export default () => {
    let cart = new Cart('/cart.json', '#cart');
    let catalog = new Catalog('/catalog.json', '#catalog', cart);
    console.log(cart, catalog)
    header.handleEvents();
}

//{
//  "amount": 150,
//  "countGoods": 2,
//  "contents":
//}

