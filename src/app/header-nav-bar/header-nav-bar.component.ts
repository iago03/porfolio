import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css']
})
export class HeaderNavBarComponent implements OnInit {
  index:boolean = false;
  index2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  
  onBurgerClik(){
    this.index = !this.index;
    console.log(this.index)
    if(!this.index){
      this.index2 = false;
    }
  }

  onDropDownButtonClick(){
    if(this.index){
      this.index2 = !this.index2
      console.log(this.index2)
    }
  }

  collapse(){
    if(this.index){
      this.index = false;
      this.index2 = false;
    }
  }

}
