import { Component, Input, OnInit } from '@angular/core';
import { workCArd } from 'src/app/shared-file/shared-eduqation';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCArdComponent implements OnInit {
  @Input() cardItem:workCArd = new workCArd("","","");
  constructor() { }

  ngOnInit(): void {
  }

}
