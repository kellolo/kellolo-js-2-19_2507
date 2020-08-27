export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            catalogUrl: 'https://raw.githubusercontent.com/AnastasyaChe/json/master/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/AnastasyaChe/json/master/getBasket.json',
            catalogItems: [],
            basketItems: [],
            basketShown: false
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json())
            }, 
            add(item) {
                console.log('added')
            },
            remouve (item) {
                console.log('removed') 
            }
        },
        mounted() {
            this.get(this.catalogUrl).then(data => this.catalogItems = data);
            this.get(this.basketUrl).then(data => this.basketItems = data.contents)


        }
    })
}