import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private draggingSubject: Subject<boolean> = new Subject<boolean>()

    dragging = this.draggingSubject.asObservable()

    constructor() { }

    startDragCard() {
        this.draggingSubject.next(true)
    }

    stopDragCard() {
        this.draggingSubject.next(false)
    }
}
