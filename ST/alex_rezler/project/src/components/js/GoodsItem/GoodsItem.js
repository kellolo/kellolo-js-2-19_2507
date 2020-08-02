export class GoodsItem {
    constructor(configInstance) {
        this.configInstance = configInstance;
    }

    render() {
        const div = document.createElement('div');
        div.setAttribute('class', 'goods-item');
        div.innerHTML = `<h3>${this.configInstance.title}</h3><p>${this.configInstance.price}</p>`;
        return div;
    };
}