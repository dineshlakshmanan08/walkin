import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  isChecked: boolean = false;
  
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  onSubmit(form: NgForm){
    if(form.valid){
     
      const email = form.value.email;
      const password = form.value.password;
      const checkbox = form.value.checkbox;
      console.log(`${email}  ${password}  ${checkbox}`)
    }else{
      alert("Wrong user credentials")
    }
  }
}
