import catalog from './catalog';
import cart from './cart';

export default () => {
    catalog.construct(cart); 
    cart.construct();
}