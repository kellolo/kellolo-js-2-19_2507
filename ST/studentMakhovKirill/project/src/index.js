// import app from './components';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/styles/style.css';

// app();

import Vue from 'vue';
import app from './views/main.vue';

new Vue({
	render: h => h(app)
}).$mount('#app');

// let app =  new Vue({
// 	el: '#app',
// 	data: {
// 		//здесь все "переменные", которые связаны с реактивным поведением (перерендером)
// 		catalogUrl: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/catalog.json',
// 		cartUrl: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/getBasket.json',
// 		catalogItems: [],
// 		cartItems: [],
// 		cartShown: true,
// 		searchText: '',
// 		sum: ''
// 	},
// 	methods: {
// 		get(url) {
// 			return fetch(url).then(d => d.json())
// 		},
// 		add(item) {
// 			let cartItem = {
// 					name: item.name,
// 					price: +item.price,
// 					img: item.img,
// 					amount: 1,
// 					id: item.id
// 			}
// 			let find = this.cartItems.find(el => el.id == cartItem.id);
// 			if (!find) {
// 				this.cartItems.push(cartItem);
// 			} else {
// 				find.amount++;
// 			}
// 			this.sum += cartItem.price;
// 		},
// 		remove(item) {
// 			let find = this.cartItems.find(el => el.id == item.id);
	
// 			if (find.amount > 1) {
// 				find.amount--;
// 			} else {
// 				this.cartItems.splice(this.cartItems.indexOf(find), 1);
// 			}
// 			this.sum -= find.price;
// 		}
// 		// filter() {
// 		// 	let reg = new RegExp(this.searchText, 'i');
// 		// 	this.catalogItemsFiltered = this.catalogItems.filter(item => item.productName.match(reg));
// 		// }
// 	},
// 	computed: {
// 		//вычисляемые значения
// 		buttonPlaceholder() {
// 			return this.cartShown ? 'Hide' : 'Show'
// 		}
// 	},
// 	// watch: {
// 	//     //следящие
// 	// },
// 	//хуки жизненного цикла
// 	mounted() {
// 		this.get(this.catalogUrl).then(items => {
// 			this.catalogItems = items;
// 			//this.catalogItemsFiltered = items;
// 		}),
// 		this.get(this.cartUrl).then(items => {
// 			this.cartItems = items.content;
// 			this.sum = items.sum;
// 			//this.catalogItemsFiltered = items;
// 		})
// 	}
// });