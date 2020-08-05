import {Hamburger} from './Hamburger'
import {Basket} from './Basket.js'

export default () => {
    const supplements = [
        {title: 'cheese', price: 10, cc: 20},
        {title: 'salad', price: 20, cc: 5},
        {title: 'potato', price: 15, cc: 10},
    ];

    const stuffings = [
        {title: 'seasoning', price: 15, cc: 0},
        {title: 'mayonnaise', price: 20, cc: 5},
    ]

    const goods = [
        {title: 'Hamburger', price: 50, size: 'small', cc: 20},
        {title: 'Hamburger', price: 100, size: 'big', cc: 40},
    ];


    const basketList = goods.map((item) => {
        let hamburger = new Hamburger(item, supplements, stuffings)
        hamburger.addSupplements(['cheese', 'salad'])
        hamburger.addStuffing(['seasoning'])
        return hamburger
    })

    const basket = new Basket(basketList)
    basket.render()
}