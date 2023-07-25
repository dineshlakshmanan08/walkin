import { Component } from '@angular/core';



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
}
