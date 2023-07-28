import { Component, OnInit,ElementRef, AfterViewInit,  ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-registration/user-data.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-walkin-lists',
  templateUrl: './walkin-lists.component.html',
  styleUrls: ['./walkin-lists.component.scss']
})
export class WalkinListsComponent implements OnInit,AfterViewInit {
  datas: any = [];
  roles: any;
  checkExpiry: boolean = false;
  dateFromDB: string = ''; 
  differenceInDays: number = 0;
  @ViewChildren('myElement') myElements: QueryList<any> | any;
  constructor(private router: Router,private userdataService: UserDataService) { }

  ngOnInit(){
    
   
    this.datas = this.userdataService.getWalkinInfo()
    
    console.log(this.datas)
    
   
  }
  ngAfterViewInit(): void {
    // Call the function you want to run when the element is rendered
    this.myFunction();
  }
  myFunction(): void {
    const today = new Date();

    
    const dbDate = new Date(this.dateFromDB);

   console.log(this.myElements)
    const timeDifferenceInMilliseconds = dbDate.getTime() - today.getTime();
    this.differenceInDays = Math.ceil(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
    console.log('run')
    console.log(this.differenceInDays)
  }
}
