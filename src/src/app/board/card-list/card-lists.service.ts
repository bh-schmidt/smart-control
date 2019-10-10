import { Injectable } from '@angular/core';
import { CardList } from './card-list';
import { Guid } from 'guid-typescript';
import { Card } from './card';
import { ArrayHelper } from 'src/app/shared/helpers/array-helper';

@Injectable({
    providedIn: 'root'
})
export class CardListsService {
    private cardLists: CardList[] = []

    constructor() { }

    getCardLists(): CardList[] {
        return this.cardLists
    }

    getCardList(listGuid: Guid): CardList {
        if (!listGuid) {
            return null
        }

        return this.cardLists.find(x => x.guid === listGuid)
    }

    addCardList(cardListName: string): boolean {
        if (!cardListName) {
            return false
        }

        if (!this.cardLists) {
            this.cardLists = []
        }

        if (this.isThereCardListName(cardListName)) {
            return false
        }

        this.cardLists.push(new CardList({ guid: Guid.create(), name: cardListName }))

        return true
    }

    updateCardListName(guid: Guid, name: string) {
        if (!guid || !name) {
            return false
        }

        if (this.isThereAnotherCardListName(name, guid)) {
            return false
        }

        var existingCardList = this.cardLists.find(x => x.guid === guid)

        if (!existingCardList) {
            return false
        }

        existingCardList.name = name
        return true
    }

    deleteCardList(listGuid: Guid): boolean {
        if (!listGuid) {
            return false
        }

        return ArrayHelper.removeItem(this.cardLists, list => list.guid === listGuid)
    }

    getCardListByCardGuid(cardGuid: Guid): CardList {
        if (!cardGuid) {
            return null
        }

        return this.cardLists.find(list => list.cards.some(card => card.guid === cardGuid))
    }

    private isThereCardListName(name: string): boolean {
        if (!this.cardLists) {
            return false
        }

        return this.cardLists.some(x => x.name === name)
    }

    private isThereAnotherCardListName(name: string, listGuid: Guid = Guid.createEmpty()): boolean {
        if (!this.cardLists) {
            return false
        }

        return this.cardLists.some(x => x.name === name && x.guid !== listGuid)
    }
}
