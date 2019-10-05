import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';
import { AppService } from 'src/app/app.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card

    mouseUpped = false
    clickSubject = new Subject<void>()

    constructor(private appService: AppService) { 
        this.clickSubject
            .pipe(debounceTime(0))
            .subscribe(() => {
                console.log(this.mouseUpped)
                if (!this.mouseUpped){
                    this.appService.startDragCard();
                }
            })
    }

    ngOnInit() {
        if (!this.card) {
            throw "card input is required."
        }
    }

    mouseDown() {
        this.mouseUpped = false
        this.clickSubject.next()
    }

    mouseUp(){
        this.mouseUpped = true
    }
}
