import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonDir]'
})
export class ButtonDirDirective {

  constructor(private element:ElementRef,private render:Renderer2) {
    this.render.setStyle(this.element.nativeElement,'display','block');
    this.render.setStyle(this.element.nativeElement,'margin','10px auto');
    this.render.setStyle(this.element.nativeElement,'background-color','transparent');
    this.render.setStyle(this.element.nativeElement,'border','2px solid #c3942c');
    this.render.setStyle(this.element.nativeElement,'color','#c3942c');
    this.render.setStyle(this.element.nativeElement,'font-size','12px');
    this.render.setStyle(this.element.nativeElement,'padding','13px 25px');
    this.render.setStyle(this.element.nativeElement,'box-shadow','5px 5px #ecd36d');
  }

  @HostListener('mouseenter') OnMouseEnter(){
    this.render.setStyle(this.element.nativeElement,'background-color','#c3942c');
    this.render.setStyle(this.element.nativeElement,'color','white');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.render.setStyle(this.element.nativeElement,'background-color','transparent');
    this.render.setStyle(this.element.nativeElement,'color','#c3942c');
  }

}
