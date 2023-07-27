import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-registration/user-data.service';
@Component({
  selector: 'app-walkin-specific',
  templateUrl: './walkin-specific.component.html',
  styleUrls: ['./walkin-specific.component.scss']
})
export class WalkinSpecificComponent implements OnInit {
  dynamicValue: string = "";
   dataById: any = [];
  constructor(private route: ActivatedRoute,private userdataService: UserDataService) { }
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.dynamicValue = this.route.snapshot.paramMap.get('id') ?? '';
      console.log(this.dynamicValue)
      const data = this.userdataService.getWalkinInfo();
      this.dataById = data[+this.dynamicValue - 1];
      console.log(this.dataById)
    });
  }
  }
 
