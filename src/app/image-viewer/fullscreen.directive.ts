import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from "screenfull";
import {Screenfull} from "screenfull";

@Directive({
    selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('ngxToggleFullscreen')
    isFullscreen: boolean;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if (this.isFullscreen && (<Screenfull>screenfull).enabled) {
            (<Screenfull>screenfull).request(this.el.nativeElement);
        } else if ((<Screenfull>screenfull).enabled) {
            (<Screenfull>screenfull).exit();
        }
    }

}
