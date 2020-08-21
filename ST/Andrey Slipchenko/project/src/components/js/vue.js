let app = new Vue({
    el: '#catalog',
    data: {
        //здесь все "переменные", которые связаны с реактивным поведением (перерендером)
        catalogItems: [],
        catalogUrl: `https://raw.githubusercontent.com/Rutard-Hash/static/master/JSON/catalog.json`,
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            let find = this.items.find(el => el.id == item.id);
    
            if (!find) {
                this.items.push(item);
                this.total = this.total + Number(item.price);
            } else {
                find.amount++;
                this.total = this.total + Number(find.price);
            }
            this._render();
        },
        remove(itemId) {
            let find = this.items.find(el => el.id == itemId);
    
            if (find.amount > 1) {
                find.amount--;
                this.total = this.total - Number(find.price);
            } else {
                this.items.splice(this.items.indexOf(find), 1);
                this.total = this.total - Number(find.price);
            }
            this._render();
        }
    },
    computed: {
        //вычисляемые значения
    },
    // watch: {
    //     //следящие
    // },
    //хуки жизненного цикла
    mounted() {
        this.get(this.catalogUrl).then(item => {
            this.catalogItems = item;
        })
    }
});