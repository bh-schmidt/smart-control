import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Card } from '../card';
import { CardListsService } from '../../card-lists.service';
import { DeleteCardComponent } from '../delete-card/delete-card.component';

@Component({
    selector: 'app-view-card',
    templateUrl: './view-card.component.html',
    styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
    @Input() card: Card
    @ViewChild("deleteCardComponent", {static: false}) deleteCardComponent: DeleteCardComponent

    constructor(
        private appService: AppService) { }

    ngOnInit() {
        if (!this.card) {
            throw "card input is required."
        }
    }

    mouseDown() {
        this.appService.startDragCard();
    }

    deleteCard() {
        this.deleteCardComponent.show(this.card)
    }
}
