import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[stop-propagation-mouseup]'
})
export class StopPropagationMouseupDirective {

    constructor() {}

    @HostListener("mouseup",["$event"])
    public onClick(event: MouseEvent): void {
        event.stopImmediatePropagation()
        event.stopPropagation()
    }
}
