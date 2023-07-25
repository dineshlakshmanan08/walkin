import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';

@NgModule({
  declarations: [
    LoginNavbarComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
