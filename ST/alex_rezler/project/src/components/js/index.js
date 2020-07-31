import { basket } from "./basket";
import { catalog } from "./product";

export default () => {
    basket.init();
    catalog.init(8);
}