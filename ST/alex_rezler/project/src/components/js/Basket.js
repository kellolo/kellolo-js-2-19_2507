export class Basket {
    constructor(basketList) {
        this.basketList = basketList;
    }

    render() {
        const goodsList = document.querySelector('.goods-list');
        let resHTML = '';
        this.basketList.forEach((item) => {
            resHTML += `
            <div class="basket-item">
                <p>Price: ${item.calculatePrice()}</p>
                <p>Calories: ${item.calculateCalories()}</p>
            </div>
            `
        });
        goodsList.innerHTML = resHTML;
    }
}