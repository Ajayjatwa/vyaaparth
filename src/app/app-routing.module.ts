import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeJsComponent } from './content-list/node-js/node-js.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './lms/content/content.component';
import { CoursesComponent } from './lms/courses/courses.component';
import { LmsheaderComponent } from './lms/lmsheader/lmsheader.component';
import { LoginComponent } from './lms/login/login.component';
import { MainsectionComponent } from './lms/mainsection/mainsection.component';
import { RagistrationComponent } from './lms/ragistration/ragistration.component';
import { StudentComponent } from './lms/student/student.component';
// import { VyaaparComponent } from './vyaapar/vyaapar.component';

const routes: Routes = [
  {path:'', redirectTo: 'mainsection', pathMatch: 'full'},
  {
    path:'student', component: StudentComponent
  },
  {
    path:'courses', component: CoursesComponent
  },
  {
    path:'mainsection', children:[
      {path: '', component: MainsectionComponent},
    {
      path: 'ragistration', component: RagistrationComponent
    }],
  },
  {
    path:'content', children:[
      {
        path:'', component: ContentComponent
      },
      {
        path:'node-js', component:NodeJsComponent
      }
    ]},
  {
    path:'login', component:LoginComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
