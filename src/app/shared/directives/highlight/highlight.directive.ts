import { Directive, ElementRef } from '@angular/core';

/* Aqui se modifica el comportamiento del elemento y modificar algo en el DOM */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'blue';
   }

}
