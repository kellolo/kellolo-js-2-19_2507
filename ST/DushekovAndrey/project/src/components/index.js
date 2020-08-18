import { Catalog, Basket } from './js/lists';

export default () => {
	let basket = new Basket('/getBasket.json', '#basket');
    let catalog = new Catalog('/catalogData.json', '.feturedArea', basket);

}