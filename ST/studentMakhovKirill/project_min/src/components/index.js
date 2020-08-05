import basket from './js/basket';
import catalog from './js/catalog';

export default () => {
	catalog.construct(basket);
	basket.construct();
}