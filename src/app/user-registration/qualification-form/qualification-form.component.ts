import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})
export class  QualificationFormComponent{
  toggleCheck: boolean = true;
  toggleCheck2: boolean = true;
  selectedOption: string = 'fresher'; 
  inputValue: string = "";
  constructor(private router: Router,private userdataService: UserDataService) { }
  ngOnInit(): void {
    console.log(this.userdataService.getData())
 }
  toggleForm(){
    
    this.toggleCheck = !this.toggleCheck;
  }
  toggleForm2(){
    this.toggleCheck2 = !this.toggleCheck2;
  }
 

  onRadioChange(event: any) {
    this.selectedOption = event.target.value;
  }

changeTech(){
  const c = this.inputValue;
}
  onSubmit(form: NgForm){
    console.log(form)
    if(form){
     
      const aggregate = form.value.aggregate;
      const passingyear = form.value.passingyear;
      const qualification = form.value.qualification;
      const stream =  form.value.stream;
      const college = form.value.college;
      const othercollege =  form.value.othercollege;
      const locations = form.value.location;
      
      const exp = form.value.exp;
      const Javascript = form.value.Javascript;
      const Angular = form.value.Angular;
      const React = form.value.React;
      const Nodejs = form.value.Nodejs;
      const Others = form.value.Others;
      const othertech = form.value.othertech;
      const bgcheck = form.value.bgcheck;
      const role = form.value.role;

      const yoe =  form.value.yoe;
      const ctc = form.value.ctc;
      const pnumber =  form.value.pnumber;

      const Javascripte = form.value.Javascripte;
      const Angulare = form.value.Angulare;
      const Reacte = form.value.Reacte;
      const Nodejse = form.value.Nodejse;
      const Otherse = form.value.Otherse;
      const otherteche = form.value.otherteche;
      
      const Javascriptf = form.value.Javascriptf;
      const Angularf = form.value.Angularf;
      const Reactf = form.value.Reactf;
      const Nodejsf = form.value.Nodejsf;
      const Othersf = form.value.Othersf;
      const othertechf = form.value.othertechf;

      const bgchecke = form.value.bgchecke;
      const date = form.value.date;
      const noticeperiod = form.value.noticeperiod;
      const bgcheckf = form.value.bgcheckf;
      const rolef = form.value.rolef;

      console.log(form)
      this.userdataService.setQualificationDataF({exp,Javascript,Angular,React,Nodejs,Others,othertech,bgcheck,role})
      this.userdataService.setQualificationData({aggregate,passingyear,qualification,stream,college,othercollege,locations})
      this.userdataService.setQualificationDataE({yoe,ctc,pnumber,Javascripte,Angulare,Reacte,Nodejse,Otherse,otherteche,Javascriptf,Angularf,Reactf,Nodejsf,Othersf,othertechf,bgchecke,date,noticeperiod,bgcheckf,rolef
      })
      
      this.router.navigate(['/registration/','review']);
      // this.router.navigate(['/qualification/']);
      
    }else{
      alert("Wrong user credentials")
    }
  }
  
}
