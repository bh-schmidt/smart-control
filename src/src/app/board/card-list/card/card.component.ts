import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CardListsService } from '../../card-lists.service';
import { Card } from './card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() cardListGuid: Guid
    card = new Card()

    constructor(private cardListService: CardListsService) { }

    ngOnInit() {
        if(!this.cardListGuid){
            throw 'cardListGuid is required.'
        }
    }

    onSubmit(event: Event){
        event.preventDefault()
        
        var added = this.cardListService.addCard(this.card,this.cardListGuid)

        if(added){
            this.card = new Card()
        }
    }
}
