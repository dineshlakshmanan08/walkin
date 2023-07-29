import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageModule } from './login-page/login-page.module';


import { UserRegistrationModule } from './user-registration/user-registration.module';
import { WalkinModule } from './walkin/walkin.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    

    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
   FormsModule,
   UserRegistrationModule,
   WalkinModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
