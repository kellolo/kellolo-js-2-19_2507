export class Hamburger {
    constructor(configObject, supplementsList, stuffingList) {
        this.configObject = configObject
        this.supplementsList = supplementsList;
        this.stuffingList = stuffingList;

        this.currentSupplements = []
        this.currentStuffing = []
    }

    addSupplements(supplements) {
        if (typeof supplements == 'object') {
            supplements.forEach((name) => {
                const elemToPush = this.supplementsList.filter((item) => {
                    return name === item.title
                })[0]
                console.log(elemToPush)
                this.currentSupplements.push(elemToPush)
            })
        } else {
            const elemToPush = this.supplementsList.filter((item) => {
                return name === item.title
            })[0]
            this.currentSupplements.push(elemToPush)
        }
    }

    removeSupplement(supplement) {
        this.currentSupplements = this.currentSupplements.filter((item) => {
            return item.title !== supplement.title;
        })
    }

    getSupplements(supplement) {
        return this.currentSupplements
    }

    getSize() {
        return this.configObject.size;
    }

    addStuffing(stuffing) {
        if (typeof stuffing == 'object') {
            stuffing.forEach((name) => {
                const elemToPush = this.stuffingList.filter((item) => {
                    return name === item.title
                })[0]
                this.currentStuffing.push(elemToPush)
            })
        } else {
            const elemToPush = this.stuffingList.filter((item) => {
                return name === item.title
            })[0]
            this.currentStuffing.push(elemToPush)
        }
    }

    removeStuffing(stuffing) {
        this.currentStuffing = this.currentStuffing.filter(item => {
            return item.title !== stuffing.title
        })
    }

    getStuffing() {
        return this.currentStuffing
    }

    calculatePrice() {
        let stufPrice = 0
        let suppPrice = 0
        let dishPrice = this.configObject.price

        console.log('currentStuffing', this.currentStuffing, 'currentSupplements', this.currentSupplements)
        this.currentStuffing.forEach(item => {
            stufPrice += item.price;
        })

        this.currentSupplements.forEach(item => {
            suppPrice += item.price;
        })

        return dishPrice + stufPrice + suppPrice;
    }

    calculateCalories() {
        let stufCC = 0
        let suppCC = 0
        let dishCC = this.configObject.cc

        this.currentStuffing.forEach(item => {
            stufCC += item.cc;
        })

        this.currentSupplements.forEach(item => {
            suppCC += item.cc;
        })

        return stufCC + suppCC + dishCC;
    }
}

