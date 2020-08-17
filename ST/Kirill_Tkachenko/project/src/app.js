let app = new Vue({
    el: "#vue-app",
    data: {
        catalogUrl: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/catalog.json",
        basketUrl: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/basket.json",
        catalogItems: [],
        basketItems: [],
        basketTotal: 0,
        // basketShown: false,
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
    },
    mounted() {
        this.get(catalogUrl).then(data => this.catalogItems = data);
        this.get(basketUrl).then(data => {
            this.basketItems = data.contents;
            this.basketTotal = data.total;
        });
    }
})