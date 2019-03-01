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
  }
  @HostListener('mouseenter') onMouseenter(){
    
}
@HostListener('mouseleave') onMouseLeave(){
  this.elementRef.nativeElement.appendChild  ="<h1 style='background-color: #9e9e9e00;position: relative;font-size: 10px;text-align: center;float: left;left: 0px;border: 1px solid black;top: 50px;padding: 5px;'>"+
  "Hello World</h1>";
}

  @HostListener('mouseout') onMouseOut() {
    
}
