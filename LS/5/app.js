let app = new Vue({
    el: '#app',
    data: {
        //здесь все "переменные", которые связаны с реактивным поведением (перерендером)
        catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        catalogItems: [],
        catalogItemsFiltered: [],
        catalogShown: true,
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
        this.get(this.catalogUrl).then(items => { 
            this.catalogItems = items;
            this.catalogItemsFiltered = items;
        })
    }
});