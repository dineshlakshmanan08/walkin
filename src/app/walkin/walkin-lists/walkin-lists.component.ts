import { Component, OnInit } from '@angular/core';
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
  checkExpiry: boolean = false;
  constructor(private router: Router,private userdataService: UserDataService) { }

  ngOnInit(){
    this.datas = this.userdataService.getWalkinInfo()
    console.log(this.datas)
    
  }
}
