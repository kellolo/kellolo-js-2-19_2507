export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            basketShown: false
        }


    })
}


