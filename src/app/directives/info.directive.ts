import { Directive , ElementRef, OnInit, Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {

  constructor(private elementRef: ElementRef,private renderer: Renderer) { }

  ngOnInit() { 
    //this.elementRef.nativeElement.innerHTML ='<h1>Hello World</h1>';
   }

   @HostListener('mouseover') onMouseOver() { 
    this.elementRef.nativeElement.innerHTML ='<h1>Hello World</h1>';
  }
}
