import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor(@Inject (DOCUMENT) private doqument: Document, private rendere: Renderer2){}
  
  changeBackgroundColor(event:boolean){
    var color = event ? "dark" : "light";
    this.rendere.setAttribute(this.doqument.body, "class", color);
  }
  
  ngOnInit():void{
    if(localStorage.getItem("backgroundColor") != null){
      var storage = localStorage.getItem("backgroundColor");
      var color = ("true" === storage) ? "dark" : "light";
      this.rendere.setAttribute(this.doqument.body, "class", color)
    }
  }
  
  
}