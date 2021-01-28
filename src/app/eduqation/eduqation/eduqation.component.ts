import { Component, OnInit } from '@angular/core';
import { Eduqation } from 'src/app/shared-file/shared-eduqation';

@Component({
  selector: 'app-eduqation',
  templateUrl: './eduqation.component.html',
  styleUrls: ['./eduqation.component.css']
})
export class EduqationComponent implements OnInit {

  eduqationItems:Eduqation[] = [
    new Eduqation("ილიას სახელმწიფო უნივერსიტეტი","../assets/img/poster.jpg","ბიზნესის, ტექნოლოგიისა და განათლების ფაკულტეტი","ბაკალავრი: კომპიუტერული ინჟინერია","2013-2017"),
    new Eduqation("აკაკი წერეთლის სახელმწიფო უნივერსიტეტი","../assets/img/ATSU-edu-logo.png","ჰუმანიტარულ მეცნიერებათა ფაკულტეტი","მაგისტრი: ფილოსოფია - რელიგიის კვლევები","2017-2019"),
    new Eduqation("IT აკადემია STEP","../assets/img/itStep.png","ონლაინ აკადემია ","Front-End ვებ-პროგრამირება","2019")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
