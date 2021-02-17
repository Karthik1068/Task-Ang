import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appBlockCopyPaste]'
  })
  export class BlockCopyPasteDirective {
    constructor() { }
  
    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
      e.preventDefault();
    }
  
    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
      e.preventDefault();
    }
  
    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
      e.preventDefault();
    }
  }
  
@Directive({
    selector: '[numbers-only]'
})
export class NumbersOnly {

    constructor(public el: ElementRef) {
        this.el.nativeElement.onkeypress = (evt) => {
            if (evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        };
    }
}


@Directive({
    selector: '[text-only]'
})
export class TextOnly {

    constructor(public el: ElementRef) {
        this.el.nativeElement.onkeypress = (evt) => {
            if (!((evt.which >= 97 && evt.which <= 122) || (evt.which >= 65 && evt.which <= 90))) {
                evt.preventDefault();
            }
        };
    }
}


