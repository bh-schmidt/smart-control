
export class ArrayHelper {
    static removeItem<TItem>(array: TItem[], predicate: (item: TItem) => boolean): boolean {
        if (!predicate || !array) {
            return false
        }

        const item = array.find(predicate)

        if (!item) {
            return false
        }

        const index = array.indexOf(item)
        array.splice(index, 1)

        return true
    }
}
