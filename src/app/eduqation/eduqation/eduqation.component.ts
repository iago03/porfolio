import { Component, OnInit } from '@angular/core';
import { Eduqation } from 'src/app/shared-file/shared-eduqation';
import { LanguageChangeService } from 'src/app/shared_service/language-change.service';

@Component({
  selector: 'app-eduqation',
  templateUrl: './eduqation.component.html',
  styleUrls: ['./eduqation.component.css']
})
export class EduqationComponent implements OnInit {

  language:boolean = true;

  eduqationItems:Eduqation[] = [
    new Eduqation("ილიას სახელმწიფო უნივერსიტეტი","../assets/img/poster.jpg","ბიზნესის, ტექნოლოგიისა და განათლების ფაკულტეტი","ბაკალავრი: კომპიუტერული ინჟინერია","2013-2017"),
    new Eduqation("აკაკი წერეთლის სახელმწიფო უნივერსიტეტი","../assets/img/ATSU-edu-logo.png","ჰუმანიტარულ მეცნიერებათა ფაკულტეტი","მაგისტრი: ფილოსოფია - რელიგიის კვლევები","2017-2019"),
    new Eduqation("IT აკადემია STEP","../assets/img/itStep.png","ონლაინ აკადემია ","Front-End ვებ-პროგრამირება","2019")
  ];

  constructor(private languageEvent:LanguageChangeService) { }

  ngOnInit(): void {
    if(localStorage.getItem("language") != null){
      this.language = ("true" === localStorage.getItem("language"))
      this.itemLangugeChangeFun(this.language);
    }

    this.languageEvent.languageChangeEvent.subscribe((item:boolean) => {
      this.language = item;
      this.itemLangugeChangeFun(item);

    })
  }


  itemLangugeChangeFun(item:boolean){
    if(item){
      this.eduqationItems = [
        new Eduqation("ილიას სახელმწიფო უნივერსიტეტი","../assets/img/poster.jpg","ბიზნესის, ტექნოლოგიისა და განათლების ფაკულტეტი","ბაკალავრი: კომპიუტერული ინჟინერია","2013-2017"),
        new Eduqation("აკაკი წერეთლის სახელმწიფო უნივერსიტეტი","../assets/img/ATSU-edu-logo.png","ჰუმანიტარულ მეცნიერებათა ფაკულტეტი","მაგისტრი: ფილოსოფია - რელიგიის კვლევები","2017-2019"),
        new Eduqation("IT აკადემია STEP","../assets/img/itStep.png","ონლაინ აკადემია ","Front-End ვებ-პროგრამირება","2019")
      ];
    }
    else{
      this.eduqationItems = [
        new Eduqation("Ilia State University","../assets/img/poster.jpg","Faculty of Business, Technology and Education","Bachelr's Degrees: computer engineering","2013-2017"),
        new Eduqation("Akaki Tsereteli State University","../assets/img/ATSU-edu-logo.png","Faculty of Humanitarian","Master's Degrees: Philosophy - Studies in Religion","2017-2019"),
        new Eduqation("IT Academy STEP","../assets/img/itStep.png","Online Academy","Front-End Web programming","2019")
      ];
    }
  }
}


