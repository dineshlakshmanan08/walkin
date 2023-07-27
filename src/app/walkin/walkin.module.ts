import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalkinComponent } from './walkin.component';
import { HallticketComponent } from './hallticket/hallticket.component';
import { WalkinHeaderComponent } from './walkin-header/walkin-header.component';
import { WalkinListsComponent } from './walkin-lists/walkin-lists.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { WalkinSpecificComponent } from './walkin-lists/walkin-specific/walkin-specific.component';
@NgModule({
  declarations: [
    HallticketComponent,
    WalkinHeaderComponent,
    WalkinListsComponent,
    WalkinComponent,
    WalkinSpecificComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports: [
    HallticketComponent,WalkinHeaderComponent,WalkinListsComponent,WalkinComponent,WalkinSpecificComponent
  ]
})
export class WalkinModule { }
