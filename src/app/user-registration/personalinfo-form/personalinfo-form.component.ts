import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-personalinfo-form',
  templateUrl: './personalinfo-form.component.html',
  styleUrls: ['./personalinfo-form.component.scss']
})

export class  PersonalinfoFormComponent {
  constructor(private router: Router,private userdataService: UserDataService) { }
  selectedFile: File | undefined;
  selectedImage: any | undefined;
  isChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  profile: any | undefined;
  page: number = 0;
  ngOnInit() {

  }
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  toggleCheckbox1() {
    this.isChecked1 = !this.isChecked1;
  }
  toggleCheckbox2() {
    this.isChecked2 = !this.isChecked2;
  }
  toggleCheckbox3() {
    this.isChecked3 = !this.isChecked3;
  }
  toggleCheckbox4() {
    this.isChecked4 = !this.isChecked4;
  }
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.selectedFile = inputElement.files[0];
     
    }
  }
  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.selectedImage = e.target?.result;
        this.profile = this.selectedImage;
      };
      fileReader.readAsDataURL(inputElement.files[0]);
      
    }
    
  }
  onSubmit(form: NgForm){
    console.log(form.value)
    if(form.valid){
      console.log(this.profile)
      const email = form.value.email;
      const profilepic = this.profile;
      const firstname = form.value.firstname;
      const lastname =  form.value.lastname;
      const number = form.value.number;
      const resume =  this.selectedFile;
      const portfolio = form.value.portfolio;
      const jobupdates = form.value.jobupdates;
      const referral = form.value.referral;
      const softwareengineer = form.value.softwareengineer;
      const instructionaldesigner = form.value.instructionaldesigner;
      const softwarequalityengineer = form.value.softwarequalityengineer;
     
      this.userdataService.setData({email,profilepic,firstname,lastname,number,referral,resume,portfolio,jobupdates,softwareengineer,softwarequalityengineer,instructionaldesigner})

    
      this.router.navigate(['/registration/','qualification']);
      // this.router.navigate(['/qualification/']);
      
    }else{
      alert("Wrong user credentials")
    }
  }
 
}





