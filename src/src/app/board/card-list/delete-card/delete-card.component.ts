import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Card } from '../card';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';
import { CardListsService } from '../../card-lists.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
    selector: 'app-delete-card',
    templateUrl: './delete-card.component.html',
    styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
    @ViewChild("modal", { static: false }) modal: ModalComponent

    card: Card
    modalSize: ModalSize = ModalSize.medium
    modalTitle = 'Delete card'

    constructor(private cardListsService: CardListsService) { }

    ngOnInit() {
    }

    show(card: Card) {
        if (!card) {
            throw "card is required";
        }
        
        this.card = card
        this.modal.show()
    }

    deleteCard() {
        let deleted = this.cardListsService.deleteCard(this.card)
        
        if(deleted){
            this.modal.hide()
        }
    }

    onCancel(){
        this.modal.hide()
    }
}
