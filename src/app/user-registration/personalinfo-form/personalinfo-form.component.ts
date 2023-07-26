import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinfo-form',
  templateUrl: './personalinfo-form.component.html',
  styleUrls: ['./personalinfo-form.component.scss']
})

export class  PersonalinfoFormComponent{
  constructor(private router: Router) { }
  isChecked: boolean = false;
  
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  onSubmit(form: NgForm){
    console.log(form)
    if(form.valid){
     
      const email = form.value.email;
     
      console.log(`${email}  `)
      this.router.navigate(['/registration/','qualification']);
      // this.router.navigate(['/qualification/']);
      
    }else{
      alert("Wrong user credentials")
    }
  }
}