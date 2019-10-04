import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card

    constructor(private appService: AppService) { }

    ngOnInit() {
        if (!this.card) {
            throw "card input is required."
        }
    }

    mouseDown(){
        this.appService.startDragCard();
    }
}
