
import basket from './js/basket';

import catalog from './js/main_index';

export default () => {
    basket.init();
    catalog.init(9, basket);
}
