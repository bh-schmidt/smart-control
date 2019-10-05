import { Card } from './card/card'
import {Guid} from 'guid-typescript'

export class CardList {
    guid: Guid
    name: string
    cards?: Card[] = []

    constructor(cardList: CardList = null){
        Object.assign(this, cardList)
    }
}
