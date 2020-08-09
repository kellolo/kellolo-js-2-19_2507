function createAllToppings(name, price, calories) {
    return {name, price, calories};
}

function initAllToppings() {
    let names = ["cheese", "salad", "potato"];
    let prices = [10, 20, 15];
    let calories = [20, 5, 10];
    return names.map((names, index) => createAllToppings(names, prices[index], calories[index]));
}

function createBurgers(name, price, calories) {
    return {name, price, calories};
}

function initBurgers() {
    let names = ["Маленький бургер", "Большой бургер"];
    let price = [50, 100];
    let calories = [20, 40];
    return names.map((names, index) => createBurgers(names, price[index], calories[index]))
}

function AdditionallyToppings(name, price, calories) {
    return {name, price, calories};
}

function initAdditionallyToppings() {
    let names =["Приправа", "Майонез"];
    let price = [15, 20];
    let calories = [0, 5];
    return names.map((names, index) => createBurgers(names, price[index], calories[index]))
}


class Hamburger {
    constructor(size, stuffing) {
        this.container = document.querySelector("#container");
        this.toppingsListContainer = document.querySelector("#stuffingList");
        this.chooseToppingsContainer = document.querySelector("#chooseToppings");
        this.additionallyToppingsContainer = document.querySelector("#additionallyToppingsList");
        this.chooseAdditionallyToppingsContainer = document.querySelector("#chooseAdditionallyToppings");
        this.allToppings = initAllToppings();
        this.chooseToppings = [];
        this.allBurgers = initBurgers();
        this.allAdditionallyToppings = initAdditionallyToppings();
        this.chooseAdditionallyToppings = [];
        this.size = "Не выбран";
        this.stuffing = "Не выбрана";
        this.calories = null;
        this.price = null;
        this._handleEvents();
        this.renderToppingsList();
        this.renderAddititionallyToppings();
        this.getSize();
    }

    _handleEvents() {
        this.container.addEventListener('click', evt => {
            let topping = {
                name: evt.target.dataset.name,
                price: evt.target.dataset.price,
                calories: evt.target.dataset.calories,
                amount: 1,
            }

            if (evt.target.name == "showStuffingList") {
                this.toppingsListContainer.classList.toggle('hidden')
            }

            if (evt.target.name == "showAdditionallyToppings") {
                this.additionallyToppingsContainer.classList.toggle('hidden')
            }

            if (evt.target.name == 'addTopping') {
                console.log(topping.price);
                this.addTopping(topping);
            }

            if (evt.target.name == 'addAdditionallyTopping') {
                this.addAdditionallyToppings(topping);
            }

            if (evt.target.name == 'remove') {
                console.log(topping.price);
                this.removeTopping(topping);
            }
        })
    }

    renderToppingsList() {   // Получить список добавок
        let toppings = "";
        this.allToppings.forEach(item => {
            toppings += `
                        <div>
                            <span>Название: ${item.name}</span>
                            <span>Цена: ${item.price}</span>
                            <span>Калории: ${item.calories}</span>
                        </div>
                        <button name="addTopping" data-name="${item.name}" data-price="${item.price}" data-calories="${item.calories}">Добавить</button>
            `
        })

        this.toppingsListContainer.innerHTML = toppings;
    }

    renderAddititionallyToppings() {   // Получить список доп добавок
        let toppings = "";
        this.allAdditionallyToppings.forEach(item => {
            toppings += `
                        <div>
                            <span>Название: ${item.name}</span>
                            <span>Цена: ${item.price}</span>
                            <span>Калории: ${item.calories}</span>
                        </div>
                        <button name="addAdditionallyTopping" data-name="${item.name}" data-price="${item.price}" data-calories="${item.calories}">Добавить</button>
            `
        })

        this.additionallyToppingsContainer.innerHTML = toppings;
    }

    renderChooseHamburger() {
        document.querySelector("#chooseH").innerHTML = `размер гамбургера: ${this.size}, начинка: ${this.stuffing}, Цена = ${this.price}, Калорийность: ${this.calories}`;
    }

    addTopping(topping) {    // Добавить добавку
        let find = this.chooseToppings.find(el => el.name == topping.name);
        if (!find && this.stuffing == "Не выбрана") {
            this.chooseToppings.push(topping);
            this.stuffing = topping.name;
            this.price = this.price + +topping.price;
            this.calories = this.calories + +topping.calories;
            this.chooseToppingsContainer.innerHTML = `<button name="remove">убрать начинку</button>`;
        } else {
            alert("вы уже выбрали начинку")
        }
        this.renderChooseHamburger()
    }

    removeTopping(topping) { // Убрать добавку
        this.stuffing = "Не выбрана";
        this.calories = this.calories - topping.calories;
        this.price = this.price - topping.price;
        this.chooseToppingsContainer.innerHTML = ` `
        this.renderChooseHamburger();
    }

    getSize() {              // Узнать размер гамбургера
        this.container.addEventListener('click', evt => {
            if (evt.target.name == "smallH") {
                this.size = this.allBurgers[0].name;
                this.price = this.price + +this.allBurgers[0].price;
                this.calories = this.calories + +this.allBurgers[0].calories;
                this.renderChooseHamburger();
            }

            if (evt.target.name == "bigH") {
                this.size = this.allBurgers[1].name;
                this.price = this.allBurgers[1].price;
                this.calories = this.allBurgers[1].calories;
                this.renderChooseHamburger();
            }
        })
    }

    addAdditionallyToppings(topping) {
        let find = this.chooseToppings.find(el => el.name == topping.name);
        if (!find) {
            this.chooseAdditionallyToppings.push(topping);
            this.price = this.price + +topping.price;
            this.calories = this.calories + +topping.calories;
            this.chooseAdditionallyToppingsContainer.innerHTML = `<span>Выбранные дополнительные добавки: ${topping.name}, (${topping.amount++})</span>`
        } else {
            find.amount++;
            this.price = this.price + +topping.price;
            this.calories = this.calories + +topping.calories;
            this.chooseAdditionallyToppingsContainer.innerHTML = `<span>Выбранные дополнительные добавки: ${topping.name}, (${topping.amount})</span>`
        }

        this.renderChooseHamburger()
    }
}

new Hamburger();




