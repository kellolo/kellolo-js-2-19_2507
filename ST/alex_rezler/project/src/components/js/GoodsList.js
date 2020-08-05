import {GoodsItem} from './GoodsItem.js'

export class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    calculatePrice() {
        let sumPrice = 0;
        this.goods.forEach((item) => {
            sumPrice +=item.price
        })
        return sumPrice;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        const sumPriceDiv = document.createElement('div');
        sumPriceDiv.setAttribute('class', 'summary-price')
        sumPriceDiv.innerText = `Summary price is ${this.calculatePrice()}`;
        document.querySelector('header').appendChild(sumPriceDiv);
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}