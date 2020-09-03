function _search(arr, id) {
    return arr.find(item => item.id == id);
}

module.exports = {
    add(basket, item) {
        basket.contents.push(item);
        return basket;
    },
    change(basket, id, quantity, size=null, color=null) {
        
        let find = _search(basket.contents, id);
        ((size === null) & (color === null)) ? find.quantity = quantity : find.quantity += quantity;
        find.color = color;
        find.size = size;
        return basket;
    },
    delete(basket, id) {
        let find = _search(basket.contents, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        return basket;
    }
}
