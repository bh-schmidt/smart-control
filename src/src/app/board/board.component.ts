import { Component, OnInit } from '@angular/core';
import { CardListsService } from './card-list/card-lists.service';
import { CardList } from './card-list/card-list';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    cardLists: CardList[] = []

    constructor(cardListsService: CardListsService) { 
        cardListsService.cardListsObservable.subscribe(cardLists => {
            this.cardLists = cardLists
        })
    }

    ngOnInit() {
    }
}
