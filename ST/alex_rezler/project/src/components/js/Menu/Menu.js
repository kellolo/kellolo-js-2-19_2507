export class Menu {
    constructor() {
        this.supplementsInstance = None;
        this.menu = {
            'Hamburger': Hamburger,
        };
        this.menuList = [];
    }

    init(menuList, supplementsInstance) {
        this.menuList = menuList.map((item) => {
            if (item.title in this.menu) {
                if (item.title in this.menuList) {

                }
                return new this.menu[item.title](item);
            }
            throw `There is no dish with title ${item.title}`
        })
        this.supplementsInstance = supplementsInstance
    }

    getMenuList() {
        return this.menuList;
    }
}