import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit{
  constructor(private router: Router,private userdataService: UserDataService) { }
  ngOnInit(){
    const data = this.userdataService.getQualificationDataE();
    const data1 = this.userdataService.getQualificationDataF();
    const data2 = this.userdataService.getQualificationData();
    console.log(data)
    console.log(data1)
  }
}
