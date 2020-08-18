'use strict';
const form = document.forms.first;


let hamburger = {
    calories: null,
    price: null,
    container: document.querySelector('.basket'),

    _init() {
        this._findCheckedRadioElement();
        this._findCheckedCheckboxElement();
        this._handleActions();
    },
    _render() {
        this.container.innerHTML = `<div class="js center">
                                        <div><h1 class="price">Price</h1>
                                            <h2 id="price">${this.price}</h2></div>
                                        <div><h1 class="cal">Calories</h1>
                                            <h2 id="cal">${this.calories}</h2></div>
                                    </div>`; 
    },
    _handleActions() {
        document.addEventListener('click', function(event) {
                hamburger._findCheckedRadioElement();
                hamburger._findCheckedCheckboxElement();
        });
    },

    _findCheckedRadioElement() {
        for (let i = 1; i <= 2; i++) {
            let checked = form.querySelector(`input[name="${i}"]:checked`);
            let price = Number(checked.dataset.price);
            let calories = Number(checked.dataset.cal);
            if(i == 1) {
                this.price = null;
                this.calories = null;
                this.price += price;
                this.calories += calories;
                this._render();
            } else {
                this.price += Number(checked.dataset.price);
                this.calories += Number(checked.dataset.cal);
                this._render();
            }
        }
    },
    _findCheckedCheckboxElement() {
        let checked = form.querySelectorAll(`input[name="checkbox"]:checked`);
        checked.forEach(element => {
            this.price += Number(element.dataset.price);
            this.calories += Number(element.dataset.cal);
            this._render();
        });
    }


}

export default hamburger;
