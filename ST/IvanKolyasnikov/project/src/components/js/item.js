export default class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        let item = this.item;
        return `
        <div class="prodCard card col-12 col-md-6 col-lg-4 border-0 mx-0 px-0 mb-5">
            <div class="psevProdCard mx-0 px-0">
                <button class="d-flex justify-content-around"
                    name="add"
                    data-name="${item.name}"
                    data-img="${item.img}"
                    data-price="${item.price}"
                    data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i>Add to Cart
                </button>
            </div>
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="psevProdCardBody card-body d-flex flex-column align-content-start pb-0 px-0">
                <a href="#" class="card-text px-3">${item.name}</a>
                <div class="d-flex justify-content-between align-items-center">
                <p class="d-flex justify-content-between px-3">$${item.price}</p>
                <button class="d-flex d-md-none justify-content-around"
                    name="add"
                    data-name="${item.name}"
                    data-img="${item.img}"
                    data-price="${item.price}"
                    data-id="${item.id}">
                    Add to Cart
                    <i class="fas fa-cart-plus pl-2"></i>
                </button>
                </div>
            </div>
        </div>`
    }
}