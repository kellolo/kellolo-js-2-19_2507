class Burger {

    constructor() {
        this.dataContainer = null;
        this.size = null;
        this.filling = null;
        this.additionally = null;
        this.price = null;
        this.callory = null;
        this._init();
        this._check(this.size, this.filling, this.additionally);
        this._render();
    }

    _init() {
        this.size = document.querySelector('#burgerSize').value;
        this.filling = document.querySelector('#burgerFilling').value;
        this.additionally = document.querySelector('#burgerAdditionally').value;
        this.dataContainer = document.querySelector('#dataBurger');
    }

    _check(size, filling, additionally) {
        
        this.burgerSize(size);
        this.addFilling(filling);
        this.addAdditionally(additionally);
    }

    _render() {
        let str = `
        <p>Размер: ${this.size}</p>
        <p>Начинка: ${this.filling}</p>
        <p>Добавка: ${this.additionally}</p>
        <p>Калорийность: ${this.callory} ккал.</p>
        <p>Цена: ${this.price} руб.</p>

        `
        this.dataContainer.innerHTML = str;
    }

    burgerSize(size) {
        if (size == 'Маленький') {
            this.price += 50;
            this.callory += 20;
            
        }
        if (size == 'Большой') {
            this.price += 100;
            this.callory += 40;
        }
        this.size = size;
    }

    addFilling(filling) {
        switch (filling) {
            case 'Сыр':
                this.price += 10;
                this.callory += 20;
                break;
            case 'Салат':
                this.price += 20;
                this.callory += 5;
                break;
            case 'Картофель':
                this.price += 15;
                this.callory += 10;
                break;
        }
        this.filling =filling;
    }

    addAdditionally(additionally) {
        if (additionally == 'Приправа') {
            this.price += 15;
        }
        if (additionally == 'Майонез') {
            this.price += 20;
            this.callory += 5;
        }
        this.additionally = additionally;
    }
}


function burger() {
    let burg = new Burger()
}
