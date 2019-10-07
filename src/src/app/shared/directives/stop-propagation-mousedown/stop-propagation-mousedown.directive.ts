import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[stop-propagation-mousedown]'
})
export class StopPropagationMousedownDirective {

    constructor() { }

    @HostListener("mousedown", ["$event"])
    public onClick(event: MouseEvent): void {
        event.stopImmediatePropagation()
        event.stopPropagation()
    }
}
