export class Basket {
    constructor(basketList) {
        this.basketList = basketList;
    }

    render() {
        const goodsList = document.querySelector('.goods-list');
        let resHTML = '';
        console.log(this.basketList);
        this.basketList.forEach((item) => {
            resHTML += `
            <div class="basket-item">
                <p>${item.calculatePrice()}</p>
                <p>${item.calculateCalories()}</p>
            </div>
            `
        });
        goodsList.innerHTML = resHTML;
    }
}