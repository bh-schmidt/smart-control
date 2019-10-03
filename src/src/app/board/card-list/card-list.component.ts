import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from './card/card';
import { CardList } from './card-list';
import { CardListsService } from '../card-lists.service';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    @Input() cardList: CardList

    constructor(private cardListsService: CardListsService) { }

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
}