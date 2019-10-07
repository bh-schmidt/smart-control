import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalSize } from './modal-size.enum';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() modalSize: ModalSize
    @Output() onClose = new EventEmitter();

    visible = false;

    constructor() { }

    ngOnInit() { }

    getModalSizeClass(){
        switch (this.modalSize) {
            case ModalSize.small:
                return 'app-modal-sm'

            case ModalSize.medium:
                return 'app-modal-md'
            
            case ModalSize.large:
                return 'app-modal-lg'
            default:
                return ''
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    close() {
        this.visible = false;
        this.onClose.emit();
    }
}
