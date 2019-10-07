import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CardListsService } from '../card-lists.service';
import { Card } from './card';
import { CardList } from './card-list';
import { EditCardComponent } from './edit-card/edit-card.component';
import { DeleteCardListComponent } from './delete-card-list/delete-card-list.component';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    @Input() cardList: CardList
    @ViewChild("listName", { static: true }) listName: ElementRef
    @ViewChild("editCardComponent", { static: false }) editCardComponent: EditCardComponent
    @ViewChild("deleteCardListComponent",{static:false}) deleteCardListComponent: DeleteCardListComponent

    cardListNameUpdating: string = ''
    updatingCardListName = false

    constructor(
        private cardListService: CardListsService,
        private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        if (!this.cardList) {
            throw "cardList input required";
        }
    }

    drop(event: CdkDragDrop<Card[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    onClickTitle() {
        this.cardListNameUpdating = this.cardList.name
        this.updatingCardListName = true;
        this.changeDetector.detectChanges();
        this.listName.nativeElement.focus()
    }

    onNameKeyDown() {
        this.updatingCardListName = false
    }

    onSubmit() {
        if (!this.cardList || !this.cardListNameUpdating) {
            return
        }

        var updated = this.cardListService.updateCardListName(this.cardList.guid, this.cardListNameUpdating)

        if (updated) {
            this.updatingCardListName = false
        }
    }

    onCardMouseUp(card: Card) {
        this.editCardComponent.show(card);
    }

    deleteCardList() {
        this.deleteCardListComponent.show(this.cardList)
    }
}