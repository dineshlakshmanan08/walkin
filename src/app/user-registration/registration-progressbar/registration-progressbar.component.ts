import { Component, Input, OnChanges, OnInit, } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-registration-progressbar',
  templateUrl: './registration-progressbar.component.html',
  styleUrls: ['./registration-progressbar.component.scss']
})
export class RegistrationProgressbarComponent implements OnInit {
  constructor(private router: Router,private userdataService: UserDataService) { }
  currentRoute: string = '';
  route1: boolean = false;
  route2: boolean = false;
  route3: boolean = false;


  ngOnInit() {
    this.changeRoute();
   
  }
  changeRoute(){
    if(this.router.url == '/registration/personalinfo'){
      this.route1 = true;
    }else if(this.router.url == '/registration/qualification'){
      this.route1 = true;
      this.route2 = true;
    }else if(this.router.url == '/registration/review'){
      this.route1 = true;
      this.route2 = true;
      this.route3 = true;
    }
  }






}
