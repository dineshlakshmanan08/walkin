import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalkinComponent } from './walkin.component';
import { HallticketComponent } from './hallticket/hallticket.component';
import { WalkinHeaderComponent } from './walkin-header/walkin-header.component';
import { WalkinListsComponent } from './walkin-lists/walkin-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { WalkinSpecificComponent } from './walkin-lists/walkin-specific/walkin-specific.component';
import { ShowRolesComponent } from './show-roles/show-roles.component';
import { InnerContentComponent } from './inner-content/inner-content.component';
@NgModule({
  declarations: [
    HallticketComponent,
    WalkinHeaderComponent,
    WalkinListsComponent,
    WalkinComponent,
    WalkinSpecificComponent,
    ShowRolesComponent,
    InnerContentComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule,ReactiveFormsModule
  ],
  exports: [
    HallticketComponent,WalkinHeaderComponent,WalkinListsComponent,WalkinComponent,WalkinSpecificComponent
  ]
})
export class WalkinModule { }
