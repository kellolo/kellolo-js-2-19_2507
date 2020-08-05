import {GoodsList} from './GoodsList'
import {GoodsItem} from './GoodsItem.js'

export default () => {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
}