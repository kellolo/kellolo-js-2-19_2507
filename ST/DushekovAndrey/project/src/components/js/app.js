export default {
    el: '#app',
    data: {
        catalogUrl: 'https://raw.githubusercontent.com/MoffAndrey/Static/master/JSON/GeekBrains/catalogData.json',
        basketUrl: 'https://raw.githubusercontent.com/MoffAndrey/Static/master/JSON/GeekBrains/getBasket.json',
        catalogItems: [],
        basketItems: [],
        basketShown: false,
        basketTotal: 0
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            let find = this.basketItems.find(el => el.productId == item.productId);
            if (!find) {
                item.quantity = 1;
                this.basketItems.push(item);
            } else {
                find.quantity++;
            }
           this.basketTotal += +item.productPrice;
        },
        remove(itemId) {
            let find = this.basketItems.find(el => el.productId == itemId);

            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(find), 1);
            }
            this.basketTotal -= find.productPrice;
            }
    },

    mounted() {
        this.get(this.catalogUrl).then(items => { 
            this.catalogItems = items;
        });
        this.get(this.basketUrl).then(items => { 
            this.basketItems = items.contents;
            this.basketTotal = +items.amount;
        })
    }
}