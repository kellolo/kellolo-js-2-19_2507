export let appBasket = new Vue({
    el: '#basket',
    data: {
        basketUrl: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/getBasket.json',
        basketItems: [],
        basketShown: false,
        searchText: '',
        basketSum: null,
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        remove(itemID) {
            let find = this.basketItems.find(el => el.id === itemID);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(find), 1);
            }
        },
    },
    computed: {
        buttonPlaceholder() {
            return this.basketShown ? 'Hide' : 'Show'
        },
        countingGoods() {
            this.basketSum = null;
            this.basketItems.forEach( item => this.basketSum += item.price * item.quantity);
            return this.basketSum
        }
    },
    mounted() {
        this.get(this.basketUrl).then(items => {
            this.basketItems = items.contents;
        });
    },
});

export let appCatalog = new Vue({
    el: '#index_catalog',
    data: {
        catalogUrl: 'https://raw.githubusercontent.com/IKolyas/static/master/GBProject/json/catalogData.json',
        catalogItems: [],
        catalogItemsFiltered: [],
        searchText: ''
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        },
        add(item) {
            let find = appBasket.basketItems.find(el => el.id === +item.id);
            if (!find) {
                appBasket.basketItems.push(item);
            } else {
                find.quantity++;
            }
        },
        filter() {
            let reg = new RegExp(this.searchText, 'i');
            this.catalogItemsFiltered = this.catalogItems.filter(item => item.productName.match(reg));
        }
    },
    computed: {
        buttonPlaceholder() {
            return this.catalogShown ? 'Hide' : 'Show';
        }
    },
    mounted() {
        this.get(this.catalogUrl).then(items => {
            items.map(item => item.quantity = 1)
            this.catalogItems = items;
            this.catalogItemsFiltered = items;
        })
    }
});

