import { Component, OnInit,ElementRef,Renderer2 } from '@angular/core';
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
   toggleCheck: boolean = true;
   toggleCheck2: boolean = true;
  
   packageJ: string = '';
   description: string = '';
   requirements: string = '';

  constructor(private route: ActivatedRoute,private userdataService: UserDataService,private elementRef: ElementRef, private renderer: Renderer2) { }
  togglePrerequisite(){
    
    this.toggleCheck = !this.toggleCheck;
  }
  togglePrerequisite2(a: number){
    const element = this.elementRef.nativeElement;
   
   
   console.log(a)
   this.toggleCheck2 = !this.toggleCheck2;
   console.log(this.dataById.jobRoles[a].package)
  }
  ngOnInit(){
 

    this.route.paramMap.subscribe(params => {
      this.dynamicValue = this.route.snapshot.paramMap.get('id') ?? '';
      console.log(this.dynamicValue)
      const data = this.userdataService.getWalkinInfo();
      console.log(data)
      this.dataById = data[+this.dynamicValue - 1];
      console.log(this.dataById)
    });
  }
  }
 
