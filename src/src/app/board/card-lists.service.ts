import { Injectable } from '@angular/core';
import { CardList } from './card-list/card-list';
import { Guid } from 'guid-typescript';
import { Card } from './card-list/card';

@Injectable({
    providedIn: 'root'
})
export class CardListsService {
    cardLists: CardList[] = [
        {
            guid: Guid.create(),
            name: 'List 1',
            cards: [
                {
                    guid: Guid.create(),
                    title: 'Card 1',
                    description: 'Description'
                },
                {
                    guid: Guid.create(),
                    title: 'Card 2',
                    description: 'Description'
                }
            ]
        },
        {
            guid: Guid.create(),
            name: 'List 2',
            cards: [
                {
                    guid: Guid.create(),
                    title: 'Card 4',
                    description: 'Description'
                }
            ]
        }
    ]

    constructor() { }

    addCardList(cardListName: string) {
        if (!this.cardLists) {
            this.cardLists = []
        }

        if (this.isThereCardListName(cardListName)) {
            //do error here
            return
        }

        this.cardLists.push(new CardList({ guid: Guid.create(), name: cardListName }))
    }

    updateCardListName(guid: Guid, name: string) {
        if (!guid || !name) {
            return false
        }

        if (this.isThereAnotherCardListName(name, guid)) {
            return false
        }

        var existingCardList = this.cardLists.find(x => x.guid === guid)

        if (existingCardList) {
            existingCardList.name = name
            return true
        }

        return false
    }

    addCard(card: Card, listGuid: Guid): boolean {
        if (!card) {
            return false
        }

        if (this.isThereCardTitle(card.title)) {
            return false
        }

        var cardList = this.getCardList(listGuid)

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
        if (!card) {
            return false
        }

        if (this.isThereAnotherCardTitle(card.title, card.guid)) {
            return false
        }

        let existingCard = this.getCard(card.guid)

        if(!existingCard){
            return false
        }

        existingCard.title = card.title
        existingCard.description = card.description

        return true
    }

    private getCard(cardGuid: Guid) : Card{
        if(!cardGuid){
            return null
        }

        let list = this.cardLists.find(list => list.cards.some(card => card.guid === cardGuid))

        return list.cards.find(card => card.guid === cardGuid)
    }

    private getCardList(listGuid: Guid): CardList {
        if (!listGuid) {
            return null
        }

        return this.cardLists.find(x => x.guid === listGuid)
    }

    private isThereCardTitle(title: string) {
        if (!title) {
            return false
        }

        return this.cardLists.some(list => list.cards.some(card => card.title === title))
    }

    private isThereAnotherCardTitle(title: string, cardGuid: Guid): boolean {
        if (!title || !cardGuid) {
            return false
        }

        return this.cardLists.some(list =>
            list.cards.some(card => card.title === title && card.guid !== cardGuid))
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
