function _search(arr, id) {
    return arr.find(item => item.productId == id);
}

module.exports = {
    add(basket, item) {
        basket.totalPrice += item.productPrice
        basket.content.push(item);
        return basket;
    },
    change(basket, id, amount, price) {
        let find = _search(basket.content, id);
        basket.totalPrice += price
        find.amount += amount;
        return basket;
    },
    delete(basket, id, price) {
        let find = _search(basket.content, id);
        basket.totalPrice += -find.productPrice * find.amount
        basket.content.splice(basket.content.indexOf(find), 1);
        return basket;
    }
}