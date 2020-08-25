let appBasket = new Vue({
    el: '#basket',
    data: {
        //здесь все "переменные", которые связаны с реактивным поведением (перерендером)
        basketUrl: 'https://raw.githubusercontent.com/Smart97/Static/master/basket.json',
        basketItems: [],
        basketItemsFiltered: [],
        basketShown: true,
        searchText: ''
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            console.log('Куплен товар: ' + item.productName);
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
        this.get(this.basketUrl).then(items => {
            this.basketItems = items.content;
            this.basketItemsFiltered = items.content;
        })
    }
});