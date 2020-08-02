import {Basket} from './Basket/Basket.js'
import {Catalog} from './Catalog/Catalog.js'
import {SupplementsList} from './SupplementsList/SupplementsList'

export default () => {
    const supplements = [
        {title: 'cheese', price: 10, cc: 20},
        {title: 'salad', price: 20, cc: 5},
        {title: 'potato', price: 15, cc: 10},
        {title: 'seasoning', price: 15, cc: 0},
        {title: 'mayonnaise', price: 20, cc: 5},
    ]

    const supplementsList = new SupplementsList(supplements)

    const goods = [
        {title: 'Hamburger', price: 50, size: 'small', cc: 20, supplements: supplementsList},
        {title: 'Hamburger', price: 100, size: 'big', cc: 40, supplements: supplementsList},
    ];

    const catalog = new Catalog(goods)
    catalog.render()
}