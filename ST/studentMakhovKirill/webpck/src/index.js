import appIndex from './components/js/_index';
import appProduct from './components/js/product';
import appSinglePage from './components/js/single-page';


appIndex.init();
document.getElementById("sum").innerHTML = appIndex.basket.sum;
appIndex.basket.init();
appProduct.init();
document.getElementById("sum").innerHTML = appProduct.basket.sum;
appProduct.basket.init();
appSinglePage.init();
document.getElementById("sum").innerHTML = appSinglePage.basket.sum;
appSinglePage.basket.init();