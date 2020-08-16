import List from "./list";

export class Catalog extends List {}

export class Basket extends List {
    constructor(container, url) {
        super(container, url, false);
    }

    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains('remove')) {
                this.remove(evt.target.dataset.id);
            }
        })
    }

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
    }

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
}