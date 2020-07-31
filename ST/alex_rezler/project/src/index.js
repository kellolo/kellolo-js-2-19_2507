import { basket } from "./components/js/basket";
import { catalog } from "./components/js/product";

basket.init();
catalog.init(8);
document.querySelectorAll(".feturedItems").forEach(e => e.classList.add("col-lg-3"));