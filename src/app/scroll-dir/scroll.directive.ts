import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private elemnet:ElementRef, private render:Renderer2) {
    this.render.setStyle(this.elemnet.nativeElement,'transition','1.3s');
   }

  @HostListener("document:scroll")
  scrollFunction(){
    if(window.innerWidth == 1280){

      if(document.documentElement.scrollTop >= 100){
        this.render.setStyle(this.elemnet.nativeElement,'width','100%')
      }
  
      else{
        this.render.setStyle(this.elemnet.nativeElement,'width','0%')
      }
      
    }
    else{
      this.render.setStyle(this.elemnet.nativeElement,'width','100%')
    }
  }
}
