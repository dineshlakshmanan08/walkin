import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration-subnavbar',
  templateUrl: './registration-subnavbar.component.html',
  styleUrls: ['./registration-subnavbar.component.scss']
})
export class RegistrationSubnavbarComponent {
  constructor(private location: Location,private router: Router) { }
  goBack() {
    this.location.back();
  }
  goHome(){
    this.router.navigate(['']);
  }
  submit(){
    alert("submitted")
  }
  
  isLinkActive(link: string): boolean {
   
    return this.router.url === link;
   
  }

}
