import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AngularProjectsComponent } from './angular-projects/angular-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CppprojectsComponent } from './cppprojects/cppprojects.component';
import { IotprojectsComponent } from './iotprojects/iotprojects.component';
import { ReactProjectsComponent } from './react-projects/react-projects.component';

const routes: Routes = [
  { path :'' , component: AboutMeComponent},
  { path :'AboutMe' , component: AboutMeComponent},
  { path :'ContactMe' , component: ContactMeComponent},
  { path :'AllProjects' , component: AllProjectsComponent},
  { path :'AngularProjects' , component: AngularProjectsComponent},
  { path :'ReactProjects' , component: ReactProjectsComponent},
  { path :'IOTProjects' , component: IotprojectsComponent},
  { path :'CppProject' , component: CppprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }