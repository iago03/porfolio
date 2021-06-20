import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageChangeService } from '../shared_service/language-change.service';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css']
})
export class HeaderNavBarComponent implements OnInit {
  index:boolean = false;
  index2:boolean = false;
  backgroundColor:boolean = false;
  languageChangeStatus:boolean = true;
  languageButtonImg:string = "../../assets/img/united-kingdom.png";
  
  @Output() colorEvent:EventEmitter<boolean> = new EventEmitter();

  constructor(private languageChangeEvent:LanguageChangeService) { }

  ngOnInit(): void {
    if(localStorage.getItem("backgroundColor") != null){
      this.backgroundColor = ("true" === localStorage.getItem("backgroundColor"))
    }
    if(localStorage.getItem("language") != null){
      this.languageChangeStatus = ("true" === localStorage.getItem("language"))
    }
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

  changeBackgroun(){
    this.backgroundColor = !this.backgroundColor;
    this.colorEvent.emit(this.backgroundColor);
    localStorage.setItem("backgroundColor",JSON.stringify(this.backgroundColor));
  }

  languageChange(){
    this.languageChangeStatus = !this.languageChangeStatus;
    this.languageChangeEvent.languageChangeEvent.emit(this.languageChangeStatus);
    localStorage.setItem("language",JSON.stringify(this.languageChangeStatus));
    this.languageButtonImg = this.languageChangeStatus ? "../../assets/img/united-kingdom.png":"../../assets/img/georgia.png";
  }

}
