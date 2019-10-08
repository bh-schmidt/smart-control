import { Component, OnInit, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Card } from '../../card';
import { ToastrService } from 'ngx-toastr';
import { CardService } from '../card.service';

@Component({
    selector: 'app-new-card',
    templateUrl: './new-card.component.html',
    styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
    @Input() cardListGuid: Guid
    card = new Card()

    constructor(
        private cardService: CardService,
        private toastrService: ToastrService) { }

    ngOnInit() {
        if (!this.cardListGuid) {
            throw 'cardListGuid is required.'
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()

        if(!this.isValid()){
            return
        }

        var added = this.cardService.addCard(this.card, this.cardListGuid)

        if (!added) {
            this.toastrService.error('There is another card with the same name.')
            return
        }

        this.card = new Card()
    }

    private isValid(): boolean {
        if (!this.card.title) {
            this.toastrService.error('The card title is required.')
            return false
        }

        if (!this.card.description) {
            this.toastrService.error('The card description is required.')
            return false
        }

        return true
    }
}
