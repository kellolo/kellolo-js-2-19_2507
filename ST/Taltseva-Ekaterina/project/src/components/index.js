import { Catalog, Basket } from './js/lists';

export default () => {
    let basket = new Basket('/basket.json', '#basket');
    let catalog = new Catalog('/catalog.json', '#catalog', basket);
}

