import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  private personalInfo: any[] = [];
  private qualificationInfoF: any[] = [];
  private qualificationInfoE: any[] = [];
  private qualificationInfo: any[] = [];
  setData(newData: any) {
    this.personalInfo.push(newData);
  }

  getData() {
    return this.personalInfo;
  }
  setQualificationDataF(newData: any) {
    this.qualificationInfoF.push(newData);
  }
  getQualificationDataF() {
    return this.qualificationInfoF;
  }
  setQualificationDataE(newData: any) {
    this.qualificationInfoE.push(newData);
  }
  getQualificationDataE() {
    return this.qualificationInfoE;
  }
  setQualificationData(newData: any) {
    this.qualificationInfo.push(newData);
  }
  getQualificationData() {
    return this.qualificationInfo;
  }
}
