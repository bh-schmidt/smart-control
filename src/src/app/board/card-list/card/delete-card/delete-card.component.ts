import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Card } from '../../card';
import { CardService } from '../card.service';

@Component({
    selector: 'app-delete-card',
    templateUrl: './delete-card.component.html',
    styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
    @ViewChild("modal", { static: false }) modal: ModalComponent

    card: Card
    public modalSize: ModalSize = ModalSize.medium
    modalTitle = 'Delete card'

    constructor(
        private cardService: CardService,
        private toastrService: ToastrService) { }

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
        let deleted = this.cardService.deleteCard(this.card)

        if (!deleted) {
            this.toastrService.error('There was an error while deleting the card.')
            return
        }

        this.modal.hide()
    }

    onCancel() {
        this.modal.hide()
    }
}
