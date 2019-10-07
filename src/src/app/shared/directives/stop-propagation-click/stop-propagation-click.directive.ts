import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[stop-propagation-click]'
})
export class StopPropagationClickDirective {

    constructor() { }

    @HostListener("click", ["$event"])
    public onClick(event): void{
        event.stopImmediatePropagation()
        event.stopPropagation()
    }
}
