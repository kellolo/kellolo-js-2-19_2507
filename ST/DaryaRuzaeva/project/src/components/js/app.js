
//let app = new Vue


export default {
    el: '#app',
    data: {
        catalogUrl: 'https://raw.githubusercontent.com/RDarya/static/master/JSON/catalog.json',
        catalogItems: [],
        basketItems: [],
        basketShown: true,   
    },

    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {       
            console.log('Куплен товар: ' + item.name)
        }
        
    },
   
    mounted() {
        
        this.get(this.catalogUrl).then(items => { 
            this.catalogItems = items;
        })
        
    }
}