import { Component, OnInit } from '@angular/core';
import { LanguageChangeService } from 'src/app/shared_service/language-change.service';

@Component({
  selector: 'app-about-my',
  templateUrl: './about-my.component.html',
  styleUrls: ['./about-my.component.css']
})
export class AboutMyComponent implements OnInit {
  language:boolean = true;

  constructor(private changeLanguage:LanguageChangeService) { }

  ngOnInit(): void {
    if(localStorage.getItem("language") != null){
      this.language = ("true" === localStorage.getItem("language"))
    }

    this.changeLanguage.languageChangeEvent.subscribe((item:boolean) => {
      this.language = item;
    })
  }

}
