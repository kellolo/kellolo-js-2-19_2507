class object1 {
    constructor(title, price, kcal){
        this.title = title;
        this.price = price;
        this.kcal = kcal;
    }
}

class burger {
    constructor(){
        this.size = [
            {title: 'small', price: 50, kcal: 20},
            {title: 'big', price: 100, kcal: 40}
        ];
        this.stuffing = [
            {title: 'cheeze', price: 10, kcal: 20},
            {title: 'salad', price: 20, kcal: 5},
            {title: 'potato', price: 15, kcal: 10}
        ];
        this.topping = [
            {title: 'spice', price: 15, kcal: 0},
            {title: 'mayo', price: 20, kcal: 5}
        ]
    }
   
}


