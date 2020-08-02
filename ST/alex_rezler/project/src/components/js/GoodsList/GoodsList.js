import {GoodsItemConfiguration} from "../GoodsItem/GoodsItemConfiguration";
import {GoodsItem} from "../GoodsItem/GoodsItem";

class GoodsList {
    constructor(list) {
        this.list = this._serialize(list);
    }

    push(goodsItem) {
        if (goodsItem instanceof GoodsItem) {

        } else {

        }
    }

    _serialize(list) {
        return this.list.map(item => {
            const goodsItemConfiguration = new GoodsItemConfiguration(item.title, item.price, item.cc, item.supplements);
            return new GoodsItem(GoodsItemConfiguration)
        });
    }
}