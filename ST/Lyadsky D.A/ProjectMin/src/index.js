import catalog from "./components/js/catalog";
import cart from "./components/js/cart";
import './layout/styles/style.css';
import './layout/styles/normalize.css';

catalog.construct (cart) //тут происходит создание объекта и вся прочая магия
cart.construct ()