import {GoodsItem} from '../GoodsItem/GoodsItem'
import {GoodsItemConfiguration} from "../GoodsItem/GoodsItemConfiguration";

export class Catalog {
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
        const goodsList = [];
        this.list.forEach(item => {
            const goodsItemConfiguration = new GoodsItemConfiguration(item.title, item.price, item.cc, item.supplements);
            const goodsItem = new GoodsItem(GoodsItemConfiguration);
            goodsList.push(goodsItem);
        });

        goodsList.forEach(goodsItem => {
            goodsListElement.appendChild(goodsItem.render());
        });
    };

    _serialize(list) {
        return list
    }
}