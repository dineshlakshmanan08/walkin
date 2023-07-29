import { Component, OnInit,ElementRef,Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-registration/user-data.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
   togglePreCheck: boolean = false;
   packageJ: string = '';
   description: string = '';
   requirements: string = '';
   richTextData: string = '<h1>Welcome to My Website</h1><p>This is some <strong>rich text</strong> content.</p>';
   selectedOption: string = '9:00 AM - 11:00 AM'; 
   isChecked1: boolean = false;
   isChecked2: boolean = false;
   isChecked3: boolean = false;
    email: string = "";
  constructor(private router: Router,private route: ActivatedRoute,private userdataService: UserDataService,private elementRef: ElementRef, private renderer: Renderer2,private formBuilder: FormBuilder) { }
   myForm: FormGroup = new FormGroup({

  });
  open(i: number){
    console.log(i)
    console.log(this.dataById.jobRoles[i].name);
    console.log(this.dataById.jobRoles[i].package);
  }
  onResumeSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0] || null;
    console.log(file)
    if (file) {
      this.myForm.get('resume')?.setValue(file);
      
    }
  }
// form submission
   formData(): void {
    if (this.myForm.valid) {
      
      const a = this.myForm.get('role1') as FormControl;
      console.log(a)
      console.log(this.myForm.value);
      const applicationData = this.myForm.value;
      applicationData["email"] = this.email;
      applicationData["walkinId"] = this.dynamicValue;
      this.userdataService.setApplication(applicationData);
      this.router.navigate(['/walkin/','hallticket']);
     
    } else {
      
      alert('Form is invalid');
    }
  }
   ngOnInit(){
 

    this.route.paramMap.subscribe(params => {
      this.dynamicValue = this.route.snapshot.paramMap.get('id') ?? '';
      this.email = this.route.snapshot.paramMap.get('email') ?? '';
      console.log(this.dynamicValue)
      console.log(this.email)
      const data = this.userdataService.getWalkinInfo();
      console.log(data)
      this.dataById = data[+this.dynamicValue - 1];
      console.log(this.dataById)
    });

    this.myForm = this.formBuilder.group({
      'time': ['', Validators.required],
        'role1': [false, ],
        'role2': [false, ],
        'role3': [false, ],
      'resume': ['', ]
    });
  }


   toggleCheckbox1() {
    this.isChecked1 = !this.isChecked1;
    this.myForm.patchValue({
      role1: this.isChecked1,
    });
  }
  toggleCheckbox2() {
    this.isChecked2 = !this.isChecked2;
    this.myForm.patchValue({
      role2: this.isChecked2,
    });
  }
  toggleCheckbox3() {
    this.isChecked3 = !this.isChecked3;
    this.myForm.patchValue({
      role3: this.isChecked3,
    });
  }
  togglePrerequisite(){
    
    this.toggleCheck = !this.toggleCheck;
  }
  togglePre(){
    this.togglePreCheck = !this.togglePreCheck; 
  }
  onRadioChange(event: any) {
    this.selectedOption = event.target.value;
  }
  togglePrerequisite2(a: number){
    const element = this.elementRef.nativeElement;
  
   
   console.log(a)
   this.toggleCheck2 = !this.toggleCheck2;
   console.log(this.dataById.jobRoles[a].package)
  }


  }
 
