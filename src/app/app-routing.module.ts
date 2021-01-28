import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMyComponent } from './about-my/about-my/about-my.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EduqationComponent } from './eduqation/eduqation/eduqation.component';
import { WorkComponent } from './work/work/work.component';

const routes: Routes = [
  {path:'',component:WorkComponent},
  {path:'contact',component:ContactComponent},
  {path:'eduqation',component:EduqationComponent},
  {path:'about-my',component:AboutMyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
