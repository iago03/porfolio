import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { EduqationComponent } from './eduqation/eduqation/eduqation.component';
import { AboutMyComponent } from './about-my/about-my/about-my.component';
import { ButtonDirDirective } from './shared-dir/button-dir.directive';
import { ScrollDirective } from './scroll-dir/scroll.directive';
import { ContactComponent } from './contact/contact/contact.component';
import { WorkComponent } from './work/work/work.component';
import { WorkCArdComponent } from './work/work-card/work-card/work-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavBarComponent,
    EduqationComponent,
    AboutMyComponent,
    ButtonDirDirective,
    ScrollDirective,
    ContactComponent,
    WorkComponent,
    WorkCArdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
