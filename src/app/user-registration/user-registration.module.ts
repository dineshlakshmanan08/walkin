import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { RegistrationNavbarComponent } from './registration-navbar/registration-navbar.component';
import { RegistrationSubnavbarComponent } from './registration-subnavbar/registration-subnavbar.component';
import { RegistrationProgressbarComponent } from './registration-progressbar/registration-progressbar.component';
import { PersonalinfoFormComponent } from './personalinfo-form/personalinfo-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [ UserRegistrationComponent,
    RegistrationNavbarComponent,
    RegistrationSubnavbarComponent,
    RegistrationProgressbarComponent,
    PersonalinfoFormComponent,
    QualificationFormComponent,
    ReviewFormComponent,],
  imports: [
    CommonModule,
   
  ],
  exports: [
   UserRegistrationComponent
  ]
})
export class UserRegistrationModule { }
