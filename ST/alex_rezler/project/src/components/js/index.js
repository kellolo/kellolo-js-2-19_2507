import {GoodsList} from './GoodsList'
import {GoodsItem} from './GoodsItem.js'

export default () => {
    const list = new GoodsList();
    list.fetchGoods().then(() => {
        console.log(2)
        list.render();
    })
}