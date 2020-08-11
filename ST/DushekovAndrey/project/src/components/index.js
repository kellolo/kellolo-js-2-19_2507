import basket from './js/Basket.js';
import Catalog from './js/initNewCatalog.js';
import data_catalog from './js/data_index.js';


export default () => {
	basket.init();
	let indexCatalog = new Catalog(data_catalog, basket);
}