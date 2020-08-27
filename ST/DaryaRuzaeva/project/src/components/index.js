export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            catalogUrl: 'https://raw.githubusercontent.com/RDarya/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/RDarya/static/master/JSON/basket.json',
            basketShown: true
        },
        methods: {
            get(url) {
                return fetch(url)
                        .then(data => data.json());
            },
            add(item) {
                console.log('added ' + item.name)
            },
            remove(item) {
                console.log('removed ' + item.name)
            }
        },
        mounted() {
            this.get(this.catalogUrl).then(data => this.catalogItems = data);
            this.get(this.basketUrl).then(data => this.basketItems = data.content);
        }
    })    
}

