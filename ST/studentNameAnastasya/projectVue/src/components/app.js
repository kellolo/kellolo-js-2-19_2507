let app = new Vue({
    el: "#app",

    data: {
        catalogUrl: 'https://raw.githubusercontent.com/AnastasyaChe/json/master/catalog.json',
        catalogItems: [],
        basketItems: [],
        basketSum: 0,
        basketShown: false
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            console.log('i');
            let find = this.basketItems.find(el => el.id == item.id);


            if (!find) {
                this.basketItems.push(item);
            }
            else {
                find.amount++;

            }


            this._getSum(item);
        },

        remove(itemId) {
            console.log(this.basketItems)

            let find = this.basketItems.find(el => el.id == itemId);


            if (find.amount > 1) {
                find.amount--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(find), 1);


            }


            this._getRemove(find);

        },
        _getSum(item) {
            return this.basketSum += item.price;

        },
        _getRemove(item) {
            return this.basketSum -= item.price;

        }

    },
    mounted() {
        this.get(this.catalogUrl).then(items => {
            this.catalogItems = items;
            this.catalogItems.forEach(item => {
                item.amount = 1;
            })
        })


    }
});