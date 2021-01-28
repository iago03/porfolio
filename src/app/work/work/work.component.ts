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
    new workCArd("https://tik-tak-toi.netlify.app","./assets/img/tik-tak.jpg","tik-tak Game"),
    new workCArd("https://fashionbeautyblog.netlify.app","./assets/img/fashionblog.jpg","fashion beauty blog"),
    new workCArd("https://freecolorgame.netlify.app","./assets/img/color-game.jpg","Color Game"),
    new workCArd("https://phonenumberimitation.netlify.app","./assets/img/number.jpg","JS HTML and CSS"),
    new workCArd("https://by-healthiest.netlify.app","./assets/img/healthiest.jpg","Healthy"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
