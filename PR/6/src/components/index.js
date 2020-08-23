export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            basketShown: false
        },
        methods: {
            get(url) {
                return fetch(url)
                        .then(data => data.json());
            },
            add(item) {
                console.log('added ' + item.productName)
            },
            remove(item) {
                console.log('removed ' + item.productName)
            }
        },
        mounted() {
            this.get(this.catalogUrl).then(data => this.catalogItems = data);
            this.get(this.basketUrl).then(data => this.basketItems = data.content);
        }
    })    
}


