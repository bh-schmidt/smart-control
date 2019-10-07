import { Component, OnInit, ViewChild } from '@angular/core';
import { CardListsService } from 'src/app/board/card-lists.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Card } from '../card';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';

@Component({
    selector: 'app-edit-card',
    templateUrl: './edit-card.component.html',
    styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
    @ViewChild("modal", { static: false }) modal: ModalComponent
    card: Card = new Card();

    modalSize = ModalSize.large
    visible = false

    constructor(private cardListService: CardListsService) { }

    ngOnInit() { }

    onSaveClick() {
        let updated = this.cardListService.updateCard(this.card)
        
        if(updated){
            this.modal.hide()
        }
    }

    onCancelClick(){
        this.modal.hide()
    }

    show(card: Card) {
        if (!card) {
            throw "card is required"
        }

        this.card = {...card};
        this.modal.show()
    }
}
