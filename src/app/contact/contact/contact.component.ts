import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from 'src/app/shared-file/shared-eduqation';
import { LanguageChangeService } from '../../shared_service/language-change.service';

import '../../../assets/smtp.js';
declare let Email : any;

const option = {
  PWD: 'B740EA4B6B724F836D54083F4C2B869D1E6B',
  USER: 'iagokharatishvili@gmail.com',
  HOST: 'smtp.elasticemail.com'
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formItem:Form = new Form();

  language:boolean = true;

  constructor(private languageChange:LanguageChangeService){ }

  ngOnInit():void{
    if(localStorage.getItem("language") != null){
      this.language = ("true" === localStorage.getItem("language"))
    }

    this.languageChange.languageChangeEvent.asObservable().subscribe((item:boolean) => {
      this.language = item;
    })
  }


  onClick(ngForm:NgForm){
    Email.send({
      Host : option.HOST,
      Username : option.USER,
      Password : option.PWD,
      To : option.USER,
      From : option.USER,
      Subject : 'Contact',
      Body : `Name : ${this.formItem.Name} <br/> Surname : ${this.formItem.Surname} <br/> Email : ${this.formItem.Email} <br/> Text : ${this.formItem.Text}`
    })
    .then((msg: any) => {
      alert(msg);
      ngForm.reset({})
    } )
  }
  

}
