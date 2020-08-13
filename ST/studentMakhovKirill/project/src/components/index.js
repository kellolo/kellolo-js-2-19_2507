import { Catalog, Basket } from './js/lists';

export default () => {
	let basket = new Basket('/getBasket.json', '#basket')
	let catalog = new Catalog('/catalog.json', '#catalog', basket);
}
	




// import initCat from './js/initCatalog';
// import Basket from './js/basket';
// import Catalog from './js/catalog';



// export default () => {
// 	let basket = new Basket('#basket', 0, [])
// 	let catalog1 = new Catalog('#catalog', basket, initCat.initCatalog());
// }