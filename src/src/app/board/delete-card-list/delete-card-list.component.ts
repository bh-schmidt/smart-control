import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalSize } from 'src/app/shared/components/modal/modal-size.enum';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CardList } from '../card-list/card-list';
import { CardListsService } from '../card-list/card-lists.service';
import { ToastrService } from 'ngx-toastr';

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

    constructor(
        private cardListsService: CardListsService,
        private toastrService: ToastrService) { }

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

        if (!deleted) {
            this.toastrService.error('There was an error while deleting the card list.')
        }

        this.modal.hide()
    }
}
