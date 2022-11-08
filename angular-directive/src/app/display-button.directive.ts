import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[displayButton]'
})
export class DisplayButtonDirective {

  constructor(e:ElementRef) {
    e.nativeElement.style.backgroundColor="blue";
   }

}
