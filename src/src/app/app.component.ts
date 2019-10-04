import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'smart-control';
    draggingClass = ''

    constructor(public appService: AppService) {
        appService.dragging.subscribe(dragging => {
            this.draggingClass = dragging? 'dragging' : ''
        })
    }

    mouseUp(){
        this.appService.stopDragCard();
    }
}
