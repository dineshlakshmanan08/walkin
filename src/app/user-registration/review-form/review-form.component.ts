
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit{
 personalInfo: any;

  pageTwoData: any;
  constructor(private fb: FormBuilder, private formDataService: UserDataService,private router: Router){}

  ngOnInit() {
    // Fetch data from the service
    this.personalInfo = this.formDataService.personalInfo;
    
    this.pageTwoData = this.formDataService.pageTwoData;
    console.log(this.personalInfo)
    console.log(this.pageTwoData)
  }
}
