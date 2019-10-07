import { Component, OnInit, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../../card-lists.service';

@Component({
    selector: 'app-new-card',
    templateUrl: './new-card.component.html',
    styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
    @Input() cardListGuid: Guid
    card = new Card()

    constructor(private cardListService: CardListsService) { }

    ngOnInit() {
        if (!this.cardListGuid) {
            throw 'cardListGuid is required.'
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()

        var added = this.cardListService.addCard(this.card, this.cardListGuid)

        if (added) {
            this.card = new Card()
        }
    }
}
