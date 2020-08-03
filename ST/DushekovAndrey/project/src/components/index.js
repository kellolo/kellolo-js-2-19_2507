import basket from './js/Basket.js';
import initNewCatalog from './js/initNewCatalog.js';
import catalog from './js/data_index.js';

export default () => {
	basket.init();
	initNewCatalog(catalog);
}