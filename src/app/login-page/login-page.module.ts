import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    LoginNavbarComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule, FormsModule,RouterModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
