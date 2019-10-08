import { Component, OnInit, ViewChild } from '@angular/core';
import { CardListsService } from 'src/app/board/card-lists.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Card } from '../card';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-card',
    templateUrl: './edit-card.component.html',
    styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
    @ViewChild("modal", { static: false }) modal: ModalComponent
    card: Card = new Card();

    public modalSize = ModalSize.large
    visible = false

    constructor(
        private cardListService: CardListsService,
        private toastrService: ToastrService) { }

    ngOnInit() { }

    onSaveClick() {
        if(!this.isValid()){
            return
        }

        let updated = this.cardListService.updateCard(this.card)

        if (!updated) {
            this.toastrService.error('There is another card with the same card title.')
            return
        }

        this.modal.hide()
    }

    onCancelClick() {
        this.modal.hide()
    }

    show(card: Card) {
        if (!card) {
            throw "card is required"
        }

        this.card = { ...card };
        this.modal.show()
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
