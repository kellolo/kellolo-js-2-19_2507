let app = new Vue({
    el: '#all',
    data: {
        //здесь все "переменные", которые связаны с реактивным поведением (перерендером)
        catalogUrl: 'https://raw.githubusercontent.com/Smart97/Static/master/catalog.json',
        catalogItems: [],
        catalogItemsFiltered: [],
        basketUrl: 'https://raw.githubusercontent.com/Smart97/Static/master/basket.json',
        basketItems: [],
        basketShown: true,
        searchText: ''
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            this.basketItems.push(item);
        },
        filter() {
            let reg = new RegExp(this.searchText, 'i');
            this.catalogItemsFiltered = this.catalogItems.filter(item => item.productName.match(reg));
        }
    },
    computed: {
        //вычисляемые значения
        buttonPlaceholder() {
            return this.catalogShown ? 'Hide' : 'Show'
        }
    },
    // watch: {
    //     //следящие
    // },
    //хуки жизненного цикла
    mounted() {
        this.get(this.catalogUrl).then(items => {
            this.catalogItems = items;
            this.catalogItemsFiltered = items;
        })
        this.get(this.basketUrl).then(items => {
            this.basketItems = items.content;
        })
    }
});