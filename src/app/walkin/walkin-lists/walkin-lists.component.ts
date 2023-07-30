import { Component, OnInit,ElementRef, AfterViewInit,  ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-registration/user-data.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-walkin-lists',
  templateUrl: './walkin-lists.component.html',
  styleUrls: ['./walkin-lists.component.scss']
})
export class WalkinListsComponent implements OnInit {
  datas: any = [];
  roles: any;
  checkExpiry: boolean = false;
  dateFromDB: string = ''; 
  differenceInDays: number = 0;
  expires: boolean = false;
  expiryDay: number = 0;

  @ViewChildren('myElement') myElements: QueryList<any> | any;
  constructor(private router: Router,private userdataService: UserDataService) { }

  ngOnInit(){
    //fetch walkin info
   
    this.datas = this.userdataService.getWalkinInfo()
    
    console.log(this.datas)
    
   
  }

  //check for expiry date
  isExpired(dateDb: string): boolean {
    const today = new Date();

    
    const dbDate = new Date(dateDb);
   
   
    const timeDifferenceInMilliseconds = dbDate.getTime() - today.getTime();
    this.differenceInDays = Math.ceil(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    this.expiryDay = this.differenceInDays;
    if(this.differenceInDays > 0) {
      return false;
    }else {
      return true;
    }
  }
}
