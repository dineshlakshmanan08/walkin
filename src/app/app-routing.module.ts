import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalinfoFormComponent } from './user-registration/personalinfo-form/personalinfo-form.component';
import { QualificationFormComponent } from './user-registration/qualification-form/qualification-form.component';
import { ReviewFormComponent } from './user-registration/review-form/review-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HallticketComponent } from './walkin/hallticket/hallticket.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' }, 
  { path: 'registration',  component: UserRegistrationComponent,children: [
    { path: 'personalinfo', component: PersonalinfoFormComponent },
    { path: 'qualification', component: QualificationFormComponent },
    { path: 'review', component: ReviewFormComponent },
  ]}, 
  { path: 'hallticket', component: HallticketComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
