import cart from "./main";
import catalog from "./main";

export default () => {
    catalog.construct(cart); //тут происходит создание объекта и вся прочая магия
    cart.construct ();
}

