export class GoodsItemConfiguration {
    constructor(title = '', price = '', supplements = [], size = '', cc='') {
        this.title = title;
        this.price = price;
        this.supplements = supplements;
        this.size = size;
        this.cc = cc;
    }

    toConfigInstance(kwarg) {
        this.title = kwarg.title;
        this.price = kwarg.price;
        this.supplements = kwarg.supplements;
        this.size = kwarg.size;
        this.cc = kwarg.cc;
    }

}