import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalinfoFormComponent } from './user-registration/personalinfo-form/personalinfo-form.component';
import { QualificationFormComponent } from './user-registration/qualification-form/qualification-form.component';
import { ReviewFormComponent } from './user-registration/review-form/review-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HallticketComponent } from './walkin/hallticket/hallticket.component';
import { WalkinListsComponent } from './walkin/walkin-lists/walkin-lists.component';
import { WalkinComponent } from './walkin/walkin.component';
import { WalkinSpecificComponent } from './walkin/walkin-lists/walkin-specific/walkin-specific.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' }, 
  { path: 'registration',  component: UserRegistrationComponent,children: [
    { path: 'personalinfo', component: PersonalinfoFormComponent },
    { path: 'qualification', component: QualificationFormComponent },
    { path: 'review', component: ReviewFormComponent },
  ]}, 
  { path: 'walkin', component: WalkinComponent,children: [
    { path: 'walkinlists/:email', component: WalkinListsComponent}, 
      { path: 'walkinlists/:email/:id', component: WalkinSpecificComponent },
   
    
   
   
  ] }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
