import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Output() onClose = new EventEmitter();

    visible = false;

    constructor() { }

    ngOnInit() {
    }

    show() {
        this.visible = true;
    }

    close() {
        this.visible = false;
        this.onClose.emit();
    }
}
