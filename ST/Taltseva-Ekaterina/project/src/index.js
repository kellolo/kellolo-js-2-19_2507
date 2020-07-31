
import listClass from "./components/js/product";

let basketHidden = document.querySelector('.basketHidden');
let containerHidden = document.querySelector('.headerCartWrap');
basketHidden.addEventListener('click', evt => {              // скрыть показать корзину
    containerHidden.classList.toggle('headerCartWrapHidden')
});



let catalog1Data = {   // каталог на странице Product (кстати крупные ссылки в главном меню - линк на страницы)
    ids : [0, 1, 2, 3, 4, 5, 6, 7, 8],
    names : ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
        "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"],

    prices : ["52.00", "62.00", "72.00", "82.00", "52.00", "62.00", "72.00", "82.00", "72.00"],

    imgs : [
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product1.jpg?raw=true",  // как вы показывали копировать ссылки не получилось, но получилось немного иначе) как смогла))
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product2.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product3.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product4.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product5.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product1.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product2.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product3.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Product4.jpg?raw=true"
    ],
}
let catalog2Data = {   // каталог на странице index  (кстати крупные ссылки в главном меню - линк на страницы)
    ids : [0, 1, 2, 3, 4, 5, 6, 7],
    names : ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
        "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"],

    prices : ["52.00", "152.00", "52.00", "252.00", "52.00", "352.00", "52.00", "452.00"],

    imgs : [
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured1.jpg?raw=true",  // как вы показывали копировать ссылки не получилось, но получилось немного иначе) как смогла))
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured2.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured3.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured4.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured5.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured6.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured7.jpg?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/Fetured8.jpg?raw=true"
    ],
}
let catalog3Data = {   // каталог на странице single (кстати крупные ссылки в главном меню - линк на страницы)
    ids : [0, 1, 2, 3],
    names : ["BLAZE LEGGINGS", "ALEXA SWEATER", "AGNES TOP", "SYLVA SWEATER"],

    prices : ["52.00", "252.00", "152.00", "352.00"],

    imgs : [
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/singlePageAlso1.png?raw=true",  // как вы показывали копировать ссылки не получилось, но получилось немного иначе) как смогла))
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/singlePageAlso2.png?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/singlePageAlso3.png?raw=true",
        "https://github.com/EkaterinaTaltseva/shop-img/blob/master/singlePageAlso4.png?raw=true"
    ],
}

////____________!!!!!!!!______РАБОТАЕТ пока только на одной из страниц - Product /index / singlePage >>>> так как иначе ошибка с необьявленых (невызванных) страниц

    //////____________страница Product.html ______________////
    let cat1 = listClass('#container-product-show1', catalog1Data);
    cat1.init();
    let prod1 = [...document.querySelectorAll('.prod-cart')];  // отличия верстки - в ряду 3 продукта
    prod1.forEach((el, i) => {el.classList.add('col-md-4')} );


/*
    //////________________странице index.html ___________/////
    let cat2 = listClass('#container-product-show2', catalog2Data);
    cat2.init();
    let prod2 = [...document.querySelectorAll('.prod-cart')];  // отличия верстки - в ряду 4 продукта
    prod2.forEach((el, i) => {el.classList.add('col-md-3')} );
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
