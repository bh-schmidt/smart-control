import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CardListsService } from '../card-lists.service';
import { Card } from './card';
import { CardList } from './card-list';
import { EditCardComponent } from './view-card/edit-card/edit-card.component';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    @Input() cardList: CardList
    @ViewChild("listName", { static: true }) listName: ElementRef
    @ViewChild("editCard", {static: false}) editCardComponent : EditCardComponent

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

    dropCard(event: CdkDragDrop<Card[]>) {
        moveItemInArray(this.cardList.cards, event.previousIndex, event.currentIndex);
    }

    drop(event: CdkDragDrop<string[]>) {
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

    onCardMouseUp(card: Card){
        this.editCardComponent.show(card);
    }
}