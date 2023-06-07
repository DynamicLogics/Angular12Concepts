import { Directive, ElementRef } from '@angular/core';

/*
  
  1] To create an ustom directive either run from below two commands:
     1.1] ng g d <your-directive-class-name>
     1.2] ng generate directive <your-directive-class-name>
  
  2] The @Directive decorator is used to define the 
     selector for the directive, which is [appCustomDirective] in this case

  3] The 'ElementRef' class is injected into the constructor 
     to provide access to the DOM element that the directive is applied to.
    
*/

@Directive({
  selector: '[customDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'green';
  }

}
