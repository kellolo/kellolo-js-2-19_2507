module.exports = {
    add(basket, item) {
        basket.push(item);
        return basket;
    },
    change(basket, id, amount) {
        const find = basket.find(el => el.id == id);
        find.amount = amount;
        return basket;
    },
    delete(basket, id) {
        const findIdx = basket.findIndex(el => el.id == id);
        basket.splice(findIdx, 1);
        return basket;
    }
}