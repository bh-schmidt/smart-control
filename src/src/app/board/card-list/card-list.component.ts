import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { CardList } from './card-list';
import { Card } from './card/card';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    @Input() cardList: CardList
    draggingClass = ''

    constructor(private appService: AppService) { }

    ngOnInit() {
        if (!this.cardList) {
            throw "cardList input required";
        }

        this.appService.dragging.subscribe(dragging => {
            this.draggingClass = dragging ? 'dragging' : ''
        })
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