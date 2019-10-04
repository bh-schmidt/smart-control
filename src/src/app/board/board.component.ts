import { Component, OnInit } from '@angular/core';
import { CardListsService } from './card-lists.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    providers: [CardListsService]
})
export class BoardComponent implements OnInit {

    constructor(public cardListsService: CardListsService) { }

    ngOnInit() {
    }
}
