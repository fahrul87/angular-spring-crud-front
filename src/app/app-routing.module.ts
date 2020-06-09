import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SeacrhDeleteComponent } from './seacrh-delete/seacrh-delete.component';


const routes: Routes = [
{path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegistrationComponent},
{path:"search",component:SeacrhDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
