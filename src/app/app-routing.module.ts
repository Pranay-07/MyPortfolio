import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  { path :'AboutMe' , component: AboutMeComponent},
  { path :'ContactMe' , component: ContactMeComponent},
  { path :'AllProjects' , component: AllProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }