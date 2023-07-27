import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  private personalInfo: any[] = [];
  private qualificationInfoF: any[] = [];
  private qualificationInfoE: any[] = [];
  private qualificationInfo: any[] = [];
  private pageNo: number = 0;
  setData(newData: any) {
    this.personalInfo.push(newData);
  }

  getData() {
    return this.personalInfo;
  }
  setPageNo1() {
    this.pageNo = 1;
  }
  setPageNo2() {
    this.pageNo = 2;
  }
  setPageNo3() {
    this.pageNo = 3;
  }

  getPageNo() {
    return this.pageNo;
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
