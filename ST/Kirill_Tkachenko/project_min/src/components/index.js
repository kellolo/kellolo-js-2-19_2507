import cart from "./cart";
import catalog from "./catalog";

export default () => {
    cart.construct ();
    catalog.construct (cart); //тут происходит создание объекта и вся прочая магия
}