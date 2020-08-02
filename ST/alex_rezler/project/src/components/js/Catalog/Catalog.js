import {Menu} from '../Menu/Menu.js'

export class Catalog {
    constructor(list) {
        this.list = list;
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

    };
}