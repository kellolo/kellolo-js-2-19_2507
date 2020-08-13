export default {
    items: [],
    add(prod) {
        this.items.push(prod);
        console.log('Куплен ' + prod, this.items);
    }
}