import {GoodsItem} from './GoodsItem.js'
import {makeGETRequest} from './helpers.js'

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export class GoodsList {
    constructor() {
        this.goods = [];
    }

    async fetchGoods() {
        return new Promise((resolve, reject) => {
            resolve();
        }).then(() => {
            return makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                this.goods = JSON.parse(goods);
                console.log(1)
            })
        })
    }

    addProduct(goodsItem) {
        return this.goods.push(goodsItem)
    }

    removeProduct(goodsItem) {
        return this.goods.filter((item) => {
            return item.title !== goodsItem
        })
    }

    getProducts() {
        return this.goods
    }

    calculatePrice() {
        let sumPrice = 0;
        this.goods.forEach((item) => {
            sumPrice += item.price
        })
        return sumPrice;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        const sumPriceDiv = document.createElement('div');
        sumPriceDiv.setAttribute('class', 'summary-price');
        sumPriceDiv.innerText = `Summary price is ${this.calculatePrice()}`;
        document.querySelector('header').appendChild(sumPriceDiv);
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}