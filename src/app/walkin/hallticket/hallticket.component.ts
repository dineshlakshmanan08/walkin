import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-registration/user-data.service';
@Component({
  selector: 'app-hallticket',
  templateUrl: './hallticket.component.html',
  styleUrls: ['./hallticket.component.scss']
})
export class HallticketComponent implements OnInit {
  constructor(private router: Router,private userdataService: UserDataService) { }
  data: any = [];
 time: string = "";
  ngOnInit(){
    console.log( this.userdataService.getApplication())
    this.data = this.userdataService.getApplication();
    this.time = this.data[0].time;
  }
  download(){
    alert("successful download")
  }
}
