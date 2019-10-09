import { Injectable } from '@angular/core';
import { CardListsService } from '../card-lists.service';
import { Card } from '../card';
import { Guid } from 'guid-typescript';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    constructor(private cardListService: CardListsService) { }

    addCard(card: Card, listGuid: Guid): boolean {
        if (!card || !listGuid) {
            return false
        }

        if (this.isThereCardTitle(card.title)) {
            return false
        }

        var cardList = this.cardListService.getCardList(listGuid)

        if (!cardList) {
            return false
        }

        if (!cardList.cards) {
            cardList.cards = []
        }

        cardList.cards.push({
            ...card,
            guid: Guid.create()
        })

        return true
    }

    updateCard(card: Card): boolean {
        if (!card || !card.guid || !card.title || !card.description) {
            return false
        }

        if (this.isThereAnotherCardTitle(card.title, card.guid)) {
            return false
        }

        let existingCard = this.getCard(card.guid)

        if (!existingCard) {
            return false
        }

        existingCard.title = card.title
        existingCard.description = card.description

        return true
    }

    deleteCard(card: Card): boolean {
        if (!card) {
            return false
        }

        var cardList = this.cardListService.getCardListByCardGuid(card.guid)

        if (!cardList) {
            return false
        }

        this.removeItemFromArray<Card>(cardList.cards, c => c.guid === card.guid)
        return true
    }

    getCard(cardGuid: Guid): Card {
        if (!cardGuid) {
            return null
        }

        const cardList = this.cardListService.getCardListByCardGuid(cardGuid)

        if (!cardList || !cardList.cards) {
            return null
        }

        return cardList.cards.find(card => card.guid === cardGuid)
    }

    private isThereCardTitle(title: string) {
        if (!title) {
            return false
        }

        let cardLists = this.cardListService.getCardLists();

        if (!cardLists) {
            return false
        }

        return cardLists.some(list => list.cards.some(card => card.title === title))
    }

    private isThereAnotherCardTitle(title: string, cardGuid: Guid): boolean {
        if (!title || !cardGuid) {
            return false
        }

        let cardLists = this.cardListService.getCardLists();

        if (!cardLists) {
            return false
        }

        return cardLists.some(list =>
            list.cards && list.cards.some(card => card && card.title === title && card.guid !== cardGuid))
    }

    private removeItemFromArray<TItem>(array: TItem[], predicate: (item: TItem) => boolean) {
        if (!predicate || !array) {
            return
        }

        const item = array.find(predicate)

        if (!item) {
            return
        }

        const index = array.indexOf(item)
        array.splice(index, 1)
    }
}
