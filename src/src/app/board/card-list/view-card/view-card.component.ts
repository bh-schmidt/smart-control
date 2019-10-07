import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Card } from '../card';

@Component({
    selector: 'app-view-card',
    templateUrl: './view-card.component.html',
    styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
    @Input() card: Card

    constructor(private appService: AppService) { }

    ngOnInit() {
        if (!this.card) {
            throw "card input is required."
        }
    }

    mouseDown() {
        this.appService.startDragCard();
    }
}
