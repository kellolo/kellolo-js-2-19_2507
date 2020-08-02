

export class Basket {
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