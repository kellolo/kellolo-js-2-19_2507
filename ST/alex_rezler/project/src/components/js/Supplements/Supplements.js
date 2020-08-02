import {SupplementItem} from './SupplementItem/SupplementItem.js'

export class Supplements {
    constructor() {
        this.supplementsList = []
    }

    init(supplements) {
        this.supplementsList = supplements.map(item => {
            return new SupplementItem(item)
        })
    }
}