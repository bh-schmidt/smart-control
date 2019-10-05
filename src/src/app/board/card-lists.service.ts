import { Injectable } from '@angular/core';
import { CardList } from './card-list/card-list';
import { Guid } from 'guid-typescript';

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
                    title: 'Card 1',
                    description: 'Description'
                },
                {
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
                    title: 'Card 4',
                    description: 'Description'
                }
            ]
        },
        {
            guid: Guid.create(),
            name: 'List 3',
            cards: [
                {
                    title: 'Card 7',
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

        if (this.isThereAnotherCardListName(name,guid)){
            return false
        }

        var existingCardList = this.cardLists.find(x => x.guid === guid)

        if (existingCardList) {
            existingCardList.name = name
            return true
        }
        
        return false
    }

    isThereCardListName(name: string): boolean {
        if (!this.cardLists) {
            return false
        }

        return this.cardLists.some(x => x.name === name)
    }

    isThereAnotherCardListName(name: string, guid: Guid = Guid.createEmpty()): boolean {
        if (!this.cardLists) {
            return false
        }

        return this.cardLists.some(x => x.name === name && x.guid !== guid)
    }
}
