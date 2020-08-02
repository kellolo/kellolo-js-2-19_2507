export class SupplementItemConfiguration {
    constructor(title = '', price = '', cc = '') {
        this.title = title;
        this.price = price;
        this.cc = cc;
    }

    toConfigInstance(kwarg) {
        this.title = kwarg.title;
        this.price = kwarg.price;
        this.cc = kwarg.cc;
    }
}