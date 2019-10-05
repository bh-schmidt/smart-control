import { Component, OnInit } from '@angular/core';
import { CardListsService } from '../card-lists.service';

@Component({
    selector: 'app-new-card-list',
    templateUrl: './new-card-list.component.html',
    styleUrls: ['./new-card-list.component.scss']
})
export class NewCardListComponent implements OnInit {
    listName: string = '';

    inv = true

    constructor(private cardListService: CardListsService) { }

    ngOnInit() {
    }

    onSubmit(event: Event) {
        event.preventDefault()
        this.cardListService.addCardList(this.listName)
        this.listName = ''
    }
}
