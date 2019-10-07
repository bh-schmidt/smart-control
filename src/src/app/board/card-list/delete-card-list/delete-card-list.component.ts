import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CardList } from '../card-list';
import { CardListsService } from '../../card-lists.service';

@Component({
    selector: 'app-delete-card-list',
    templateUrl: './delete-card-list.component.html',
    styleUrls: ['./delete-card-list.component.scss']
})
export class DeleteCardListComponent implements OnInit {
    @ViewChild('modal', { static: false }) modal: ModalComponent;

    cardList: CardList
    modalTitle = 'Delete card list'
    modalSize = ModalSize.medium

    constructor(private cardListsService: CardListsService) { }

    ngOnInit() { }

    show(cardList: CardList) {
        if (!cardList) {
            throw 'cardList is required'
        }

        this.cardList = cardList
        this.modal.show()
    }

    cancel() {
        this.modal.hide()
    }

    deleteCardList() {
        var deleted = this.cardListsService.deleteCardList(this.cardList.guid)

        if (deleted) {
            this.modal.hide()
        }
    }
}
