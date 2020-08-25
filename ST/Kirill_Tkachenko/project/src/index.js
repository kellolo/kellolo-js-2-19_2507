import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";

import "./layout/styles/styles.css";
import app from "./views/main.vue";

new Vue({
    render: h => h(app)
}).$mount("#app");
