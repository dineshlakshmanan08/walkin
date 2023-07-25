import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  email: string = "asdf";
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
   this.email = this.route.snapshot.params['email']

}
}





  

