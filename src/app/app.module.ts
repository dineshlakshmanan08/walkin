import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageModule } from './login-page/login-page.module';
import { FormsModule } from '@angular/forms';

import { UserRegistrationModule } from './user-registration/user-registration.module';
import { WalkinModule } from './walkin/walkin.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
