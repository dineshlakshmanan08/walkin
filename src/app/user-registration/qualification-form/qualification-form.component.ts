
import { Component,ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})

export class QualificationFormComponent {
 

  @ViewChild('datePicker') datePicker: any; 

  pageTwoForm: any;
  passYears = [
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' }
  ];
  qualifications = [
    { label: 'Bachelor in Technology [B.Tech]', value: 'Bachelor in Technology [B.Tech]' },
    { label: 'Bachelor in Science [BSc]', value: 'Bachelor in Science [BSc]' },
    { label: 'MCA', value: 'MCA' },
    { label: 'Bachelor in Science [BCA]', value: 'Bachelor in Computer Application [BCA]' },
    { label: 'Bachelor in Science [M.TECH]', value: 'Master in Technology [M.TECH]' },
  ];
  streams = [
    { label: 'Information Technology', value: 'Information Technology' },
    { label: 'Computer Engineering', value: 'Computer Engineering' },
    { label: 'EXTC', value: 'EXTC' },
    { label: 'MECHANICAL ENGINEERING', value: 'Mechanical Engineering' },
    { label: 'Instrumentation Engineering', value: 'Instrumentation Engineering' },
  ];
  colleges = [
    { label: 'VCET', value: 'VCET' },
    { label: 'TCET', value: 'TCET' },
    { label: 'BITS', value: 'BITS' },
    { label: 'IITB', value: 'IITB' },
    { label: 'Other', value: 'Other' }
  ];

  techs = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Angular JS', value: 'Angular JS' },
    { label: 'React', value: 'React' },
    { label: 'Node JS', value: 'Node JS' },
    { label: 'Others', value: 'Others' }
  ];

  months = [
    { label: '1 Month', value: '1 Month' },
    { label: '2 Month', value: '2 Month' },
    { label: '3 Month', value: '3 Month' }
  ];
  

  constructor(private fb: FormBuilder, private formDataService: UserDataService,private router: Router){
    this.pageTwoForm=fb.group({
      percentage:['',Validators.required],
      otherclg: [''],
      clglocation: ['',Validators.required],
      passingYear: ['',Validators.required],
      selectedQualification: ['',Validators.required],
      selectedStream: ['',Validators.required],
      selectedCollege: ['',Validators.required],
      experienceType: ['Fresher',Validators.required],
      expYears: [''],
      currentCTC: [''],
      expectedCTC: [''],
      expertiseTech: fb.array([]),
      familarTech: fb.array([]),
      otherExpertiseTech: [''],
      otherFamilarTech: [''],
      isNoticePeriod: [''],
      selectNoticeDate: [null],
      noticeMonth: [''],
      isAppeared: ['',Validators.required],
      previousAppliedRole: ['']
    })

    this.pageTwoForm.setValidators(this.customFormValidator);
    this.pageTwoForm.updateValueAndValidity(); 


    this.pageTwoForm.get('selectedCollege')?.valueChanges.subscribe((selectedValue: string) => {
      if (selectedValue === 'Other') {
        this.pageTwoForm.get('otherclg')?.enable(); 
      } else {
        this.pageTwoForm.get('otherclg')?.disable(); 
      }
    });
  }

  customFormValidator(formGroup: FormGroup) {
    const experienceValue = formGroup.get('experienceType')?.value;
    const expYearsValue = formGroup.get('expYears')?.value;
    const currentCTCValue = formGroup.get('currentCTC')?.value;
    const expectedCTCValue = formGroup.get('expectedCTC')?.value;
    const expertiseTechValue = formGroup.get('expertiseTech')?.value;
    const isNoticePeriodValue = formGroup.get('isNoticePeriod')?.value;
    const selectNoticeDateValue = formGroup.get('selectNoticeDate')?.value;
    const noticeMonthValue = formGroup.get('noticeMonth')?.value;

    if (experienceValue === 'Experienced') {
      if (!expYearsValue || !currentCTCValue || !expectedCTCValue || expertiseTechValue.length===0 || !isNoticePeriodValue || (isNoticePeriodValue=="Yes"  && !selectNoticeDateValue) || (isNoticePeriodValue=="Yes" && !noticeMonthValue)) {
        return { requiredFields: true };
      }
    }
    return null;
  }

  get fc(){
    return this.pageTwoForm.controls;
  }

  isOtherCollegeDisabled() {
    return this.pageTwoForm.get('selectedCollege').value !== 'Other';
  }
  checkNoticePeriod(){
    return this.pageTwoForm.get('isNoticePeriod').value !== 'Yes';
  }


  get expertiseTechArray() {
    return this.pageTwoForm.get('expertiseTech') as FormArray;
  }

  get familarTechArray(){
    return this.pageTwoForm.get('familarTech') as FormArray;
  }

  getExpertControl(value: string): FormControl {
    return this.fb.control(this.expertiseTechArray.value.includes(value));
  }
  getFamilarControl(value: string): FormControl {
    return this.fb.control(this.familarTechArray.value.includes(value));
  }

  onExpertChange(value: string, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.expertiseTechArray.push(this.fb.control(value));
    } else {
      const index = this.expertiseTechArray.value.findIndex((role: string) => role === value);
      this.expertiseTechArray.removeAt(index);
    }
    
  }
  onFamilarChange(value: string, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.familarTechArray.push(this.fb.control(value));
    } else {
      const index = this.familarTechArray.value.findIndex((role: string) => role === value);
      this.familarTechArray.removeAt(index);
    }
    
  }

  nextButton(){
    
    this.formDataService.pageTwoData=this.pageTwoForm.value;
    console.log(this.formDataService.pageTwoData)
    this.router.navigate(['/registration/','review']);
  }

}