import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { RegistrationNavbarComponent } from './registration-navbar/registration-navbar.component';
import { RegistrationSubnavbarComponent } from './registration-subnavbar/registration-subnavbar.component';
import { RegistrationProgressbarComponent } from './registration-progressbar/registration-progressbar.component';
import { PersonalinfoFormComponent } from './personalinfo-form/personalinfo-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ UserRegistrationComponent,
    RegistrationNavbarComponent,
    RegistrationSubnavbarComponent,
    RegistrationProgressbarComponent,
    PersonalinfoFormComponent,
    QualificationFormComponent,
    ReviewFormComponent,],
  imports: [
    CommonModule, FormsModule,RouterModule,ReactiveFormsModule
   
  ],
  exports: [
   UserRegistrationComponent,QualificationFormComponent,PersonalinfoFormComponent,ReviewFormComponent
  ]
})
export class UserRegistrationModule { }
