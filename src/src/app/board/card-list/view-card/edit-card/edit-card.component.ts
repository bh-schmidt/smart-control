import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Card } from '../../card';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
    selector: 'app-edit-card',
    templateUrl: './edit-card.component.html',
    styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
    @ViewChild("modal", { static: false }) modal: ModalComponent
    card: Card = new Card();

    visible = false

    constructor() { }

    ngOnInit() { }

    onSaveClick() {
    }

    onCancelClick() {

    }

    show(card: Card) {
        if (!card) {
            throw "card is required"
        }

        this.card = card;
        this.modal.show()
    }
}
