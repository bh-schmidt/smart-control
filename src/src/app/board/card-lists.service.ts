import { Injectable } from '@angular/core';
import { CardList } from './card-list/card-list';

@Injectable({
    providedIn: 'root'
})
export class CardListsService {
    cardLists: CardList[] = [
        {
            name: 'List 1',
            cards: [
                {
                    title: 'Card 1',
                    description: 'Description'
                },
                {
                    title: 'Card 2',
                    description: 'Description'
                },
                {
                    title: 'Card 10',
                    description: 'Description'
                },
                {
                    title: 'Card 11',
                    description: 'Description'
                },
                {
                    title: 'Card 12',
                    description: 'Description'
                },
                {
                    title: 'Card 13',
                    description: 'Description'
                }
            ]
        },
        {
            name: 'List 2',
            cards: [
                {
                    title: 'Card 4',
                    description: 'Description'
                },
                {
                    title: 'Card 5',
                    description: 'Description'
                },
                {
                    title: 'Card 6',
                    description: 'Description'
                }
            ]
        },
        {
            name: 'List 3',
            cards: [
                {
                    title: 'Card 7',
                    description: 'Description'
                },
                {
                    title: 'Card 8',
                    description: 'Description'
                },
                {
                    title: 'Card 9',
                    description: 'Description'
                }
            ]
        }
    ]

    constructor() { }


}
