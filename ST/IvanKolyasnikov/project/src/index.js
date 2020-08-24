import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import './layout/styles/styles.scss';

import Vue from "vue";
import app from "./views/main.vue";
import router from "./router/router.js";

new Vue({
    render: h => h(app),
    router,
}).$mount('#app');