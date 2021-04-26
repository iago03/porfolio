import { Component, OnInit, Output } from '@angular/core';
import { workCArd } from 'src/app/shared-file/shared-eduqation';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Output() workCardAll:workCArd[] = [
    new workCArd("https://blogcastillo.netlify.app","./assets/img/blogcastillo.jpg","Blog Castillo"),
    new workCArd("https://nageboba.netlify.app","./assets/img/building.jpg","building"),
    new workCArd("https://fashionbeautyblog.netlify.app","./assets/img/fashionblog.jpg","HTML/CSS"),
    new workCArd("https://tik-tak-toi.netlify.app","./assets/img/tik-tak.jpg","Tic-Tac-Toe"),
    new workCArd("https://calculatoriago.netlify.app","./assets/img/calculator.png","Calculator"),
    new workCArd("https://by-healthiest.netlify.app","./assets/img/healthiest.jpg","HTML/CSS"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
