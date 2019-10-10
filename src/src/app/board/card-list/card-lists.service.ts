import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, Subscriber, Subject } from 'rxjs';
import { ArrayHelper } from 'src/app/shared/helpers/array-helper';
import { CardList } from './card-list';

@Injectable({
    providedIn: 'root'
})
export class CardListsService {
    private cardLists: CardList[] = []

    private subject: Subject<CardList[]> = new Subject<CardList[]>()

    cardListsObservable: Observable<CardList[]> = this.subject.asObservable()

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
        this.publishCardList()

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
        this.publishCardList()
        return true
    }

    deleteCardList(listGuid: Guid): boolean {
        if (!listGuid) {
            return false
        }

        const deleted = ArrayHelper.removeItem(this.cardLists, list => list.guid === listGuid)

        if (deleted) {
            this.publishCardList()
        }

        return deleted
    }

    getCardListByCardGuid(cardGuid: Guid): CardList {
        if (!cardGuid) {
            return null
        }

        return this.cardLists.find(list => list.cards.some(card => card.guid === cardGuid))
    }

    private publishCardList() {
        this.subject.next(this.cardLists)
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
