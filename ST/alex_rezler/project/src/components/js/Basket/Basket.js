import {GoodsItem} from '../GoodsItem/GoodsItem'
import {GoodsItemConfiguration} from "../GoodsItem/GoodsItemConfiguration";

export class Basket {
    constructor(list) {
        this.list = this._serialize(list);
    }

    summaryPrice() {
        let sum = 0;
        this.list.forEach((item) => {
            sum += item.price;
        })
        return sum;
    }

    summaryItems() {
        return this.list.length;
    }

    render() {
        const goodsListElement = document.querySelector('.goods-list')
        this.list.forEach(item => {
            const goodsItem = new GoodsItem(item.title, item.price);
            goodsListElement.appendChild(goodsItem.render());
        });
    };

    _serialize(list) {
        return list
    }
}