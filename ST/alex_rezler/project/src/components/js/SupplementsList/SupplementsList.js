import {SupplementItemConfiguration} from "../SupplementItem/SupplementItemConfiguration.js"
import {SupplementItem} from "../SupplementItem/SupplementItem.js"

export class SupplementsList {
    constructor(list) {
        this.list = this._serialize(list);
    }

    _serialize(list) {
        return list.map(item => {
            const supplementItemConfiguration = new SupplementItemConfiguration()
            supplementItemConfiguration.toConfigInstance(item)
            return new SupplementItem(supplementItemConfiguration)
        })
    }
}