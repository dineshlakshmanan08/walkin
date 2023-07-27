import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallticketComponent } from './hallticket/hallticket.component';
import { WalkinHeaderComponent } from './walkin-header/walkin-header.component';



@NgModule({
  declarations: [
    HallticketComponent,
    WalkinHeaderComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    HallticketComponent
  ]
})
export class WalkinModule { }
