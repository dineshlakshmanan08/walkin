import { Component, Input, OnChanges, OnInit, } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-registration-progressbar',
  templateUrl: './registration-progressbar.component.html',
  styleUrls: ['./registration-progressbar.component.scss']
})
export class RegistrationProgressbarComponent  {
  constructor(private router: Router,private userdataService: UserDataService) { }



  isLinkActive(link: string): boolean {
    return this.router.url === link;
   
  }






}
