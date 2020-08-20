
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout/styles/styles.css";

let appCatalog = new Vue({
    el: "#appCatalog",
    data: {
        catalogUrl: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/catalog.json",
        cartUrl: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/cart.json",
        catalogItems: [],
        cartItems: [],
        cartShown: false,
        totalSum: null,
    },

    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json());
        },

        add(item) {
            let cartItem = {
                name: item.name,
                price: +item.price,
                img: item.img,
                amount: 1,
                id: item.id
            }
            let find = this.cartItems.find(el => el.id == item.id);
            if (!find) {
                this.cartItems.push(cartItem);
            } else {
                find.amount++;
            }
        },

        remove(item) {
            let find = this.cartItems.find(el => el.id == item.id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(find), 1);
            }
        }
    },

    computed: {
        renderTotalSum() {
            let sum = 0;
            this.totalSum = sum;
            this.cartItems.forEach(item => {
                sum += +item.price * +item.amount;
            });
            return "$" + sum;
        },
    },

    mounted() {
        this.get(this.catalogUrl).then(items => {
            this.catalogItems = items;
        })
        this.get(this.cartUrl).then(items => {
            this.cartItems = items.contents;
        })
    },
})

