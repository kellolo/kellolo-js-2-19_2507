export default new Vue({
    el: "#vue-app",
    data: {
        catalogUrl: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/catalog.json",
        basketUrl: "https://raw.githubusercontent.com/Cerzon/assets/master/JSON/basket.json",
        catalogItems: [],
        basketItems: [],
        basketTotal: 0,
        basketShown: false,
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            let find = this.basketItems.find(el => el.id == item.id);

            if (!find) {
                item.amount = 1;
                this.basketItems.push(item);
                this.basketTotal += item.price;
            } else {
                find.amount++;
                this.basketTotal += find.price;            
            }
        },
        remove(itemId) {
            let find = this.basketItems.find(el => el.id == itemId);

            if (find.amount > 1) {
                find.amount--;
                this.basketTotal -= find.price;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(find), 1);
                this.basketTotal -= find.price;
            }
        },
        decimal(number) {
            return number.toFixed(2);
        },
    },
    mounted() {
        this.get(this.basketUrl).then(data => {
            this.basketItems = data.contents;
            this.basketTotal = data.total;
        });
        this.get(this.catalogUrl).then(data => this.catalogItems = data);
    }
})