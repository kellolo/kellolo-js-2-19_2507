import { catalog1Data, catalog2Data, catalog3Data } from './components/js/catalogData';
import listClass from "./components/js/product";
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/styles/styles.css';  //импорт стилей

let basketHidden = document.querySelector('.basketHidden');
let containerHidden = document.querySelector('.headerCartWrap');
basketHidden.addEventListener('click', evt => {              // скрыть показать корзину
    containerHidden.classList.toggle('headerCartWrapHidden')
});


////____________!!!!!!!!______РАБОТАЕТ пока только на одной из страниц - Product /index / singlePage >>>> так как иначе ошибка с необьявленых (невызванных) страниц
    //////________________странице index.html ___________/////
console.log(catalog2Data);
    let cat2 = new listClass('#container-product-show2', catalog2Data);
    cat2.init();
    let prod2 = [...document.querySelectorAll('.prod-cart')];  // отличия верстки - в ряду 4 продукта
    prod2.forEach((el, i) => {el.classList.add('col-md-3')} );



/*
    //////____________страница Product.html ______________////
    let cat1 = listClass('#container-product-show1', catalog1Data);
    cat1.init();
    let prod1 = [...document.querySelectorAll('.prod-cart')];  // отличия верстки - в ряду 3 продукта
    prod1.forEach((el, i) => {el.classList.add('col-md-4')} );
*/


/*
    ///////_______________странице singlePage.html ______________////
    let cat = listClass('#container-product-show3', catalog3Data);
    cat.init();

    let prod = [...document.querySelectorAll('.prod-cart')]; // отличия верстки - в ряду 4 продукта
    prod.forEach((el, i) => {el.classList.add('col-md-3')} );

    let btn = [...document.querySelectorAll('.kartProdBtn2')];   // отличия верстки - на карточке продукта только одна кнопка "купить" вместо двух
    btn.forEach((el, i) => {el.classList.add('kartProdBtn2Hidden')} );
 */
