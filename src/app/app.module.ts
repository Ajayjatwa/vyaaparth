import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { LmsheaderComponent } from './lms/lmsheader/lmsheader.component';
import { MainsectionComponent } from './lms/mainsection/mainsection.component';
import { LoginComponent } from './lms/login/login.component';
import { RagistrationComponent } from './lms/ragistration/ragistration.component';
import { StudentComponent } from './lms/student/student.component';
import { ChildComponent } from './lms/child/child.component';
import { CoursesComponent } from './lms/courses/courses.component';
import { CardComponent } from './lms/card/card.component';
import { Card2Component } from './lms/card2/card2.component';
import { UserService } from './user.service';
import { VyaaparComponent } from './vyaapar/vyaapar.component';
import { ContentComponent } from './lms/content/content.component';
import { NodeJsComponent } from './content-list/node-js/node-js.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TopheaderComponent,
    LmsheaderComponent,
    MainsectionComponent,
    LoginComponent,
    RagistrationComponent,
    StudentComponent,
    ChildComponent,
    CoursesComponent,
    CardComponent,
    Card2Component,
    VyaaparComponent,
    ContentComponent,
    NodeJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
