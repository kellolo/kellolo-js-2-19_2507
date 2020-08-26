import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/styles/styles.scss';


import Vue from "vue";
import app from "./views/main.vue";

new Vue({
    render: h => h(app)
}).$mount('#app');