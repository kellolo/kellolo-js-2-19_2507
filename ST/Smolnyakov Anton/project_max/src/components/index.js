import { Catalog, Cart } from './js/lists';
import header from "./js/header"

export default () => {
    let catalog = new Catalog('/catalog.json', '#catalog');
    let cart = new Cart('/cart.json', '#cart');
    header.handleEvents();
}

//{
//  "amount": 150,
//  "countGoods": 2,
//  "contents":
//}

