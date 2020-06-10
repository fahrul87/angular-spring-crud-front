import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SeacrhDeleteComponent } from './seacrh-delete/seacrh-delete.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"register",component:RegistrationComponent},
{path:"search",component:SeacrhDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
