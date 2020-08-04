import catalog from './js/catalog' 
import basket from './js/basket'

export default() => {
    basket.init()
    catalog.init(9)
}