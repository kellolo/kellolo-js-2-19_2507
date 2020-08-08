import {catalog, cart} from './components/js/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './layout/style/style.css';
import  './layout/style/normalize.css';
catalog.construct (cart); //тут происходит создание объекта и вся прочая магия
cart.construct ();