import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  private personalInfo: any[] = [];
  private qualificationInfoF: any[] = [];
  private qualificationInfoE: any[] = [];
  private qualificationInfo: any[] = [];
  private application: any[] = [];
  private walkinInfo = [{
    "id": 1,
    "walkinFor": "Designer",
    "date": "10-Jul-2021 to 11-Jul-2021",
    "location": "Mumbai",
    "jobRoles": [{'name': 'Instructional Designer', 'package': 'Rs. 5,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",
    'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"}],
    "expiry": '2023-08-5',
    "internship": "Internship Opportunity for MCA Students",
    "generalInstructions": "- We have a two&ndash;year indemnity for permanent candidates. We will provide training to the selected candidates. <br />- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.",
     "instructions": "- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; capture your video for invigilation purposes.<br /> - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.<br /> - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. <br />- Candidate&rsquo;s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. <br />- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. <br />- Candidates cannot use an iOS system/device for this exam.",
    "systemRequirement": "- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). <br />- The latest version of Google Chrome Browser only.<br /> - Please note that Internet speed should be minimum 1 Mbps. <br />- Do not use a MacBook or iPad for the proctored exam.",
    "process": "- Every round is an elimination round. Candidates need to clear all rounds to get selected. <br /><br /><br />Round I : 4th August, 2018 <br />Aptitude Test : 25 Questions <br /><br /><br />Round II (Interview) : 4th August, 2018.",
  },{
    "id": 2,
    "walkinFor": "Design and Developmet",
    "date": "10-Jul-2021 to 16-Jul-2021",
    "location": "Latur",
    "jobRoles": [{'name': 'Instructional Designer', 'package': 'Rs. 5,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",
    'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"},
    {'name': 'Software Engineer', 'package': 'Rs. 8,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"}
  ],
    "expiry": '2023-09-2',
    "internship": "",
    "generalInstructions": "- We have a two&ndash;year indemnity for permanent candidates. We will provide training to the selected candidates. <br />- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.",
     "instructions": "- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; capture your video for invigilation purposes.<br /> - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.<br /> - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. <br />- Candidate&rsquo;s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. <br />- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. <br />- Candidates cannot use an iOS system/device for this exam.",
    "systemRequirement": "- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). <br />- The latest version of Google Chrome Browser only.<br /> - Please note that Internet speed should be minimum 1 Mbps. <br />- Do not use a MacBook or iPad for the proctored exam.",
    "process": "- Every round is an elimination round. Candidates need to clear all rounds to get selected. <br /><br /><br />Round I : 4th August, 2018 <br />Aptitude Test : 25 Questions <br /><br /><br />Round II (Interview) : 4th August, 2018.",
 
  },{
    "id": 3,
    "walkinFor": "Multiple",
    "date": "10-Jul-2021 to 19-Jul-2021",
    "location": "Patna",
    "jobRoles": [{'name': 'Instructional Designer', 'package': 'Rs. 5,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",
    'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"},
    {'name': 'Software Engineer', 'package': 'Rs. 8,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"}
    ,{'name': 'Software Quality Engineer', 'package': 'Rs. 6,00,000 lpa','description': "- Generate highly interactive and innovative instructional strategies for e-learning solutions <br />- Develop course structure and learning specifications addressing the requirements of the target audience <br />- Construct appropriate testing strategies to ensure learners' understanding and performance <br />- Address usability issues - Keep abreast of new trends in e-learning <br />- Ensure that the instructional strategies are as per global standards <br />- Prepare instructional design checklists and guidelines - Check for quality assurance",    'requirements': "- Experience in creating instructional plans and course maps. <br />- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction <br />- Awareness of different instructional design models and familiarity with instructional and learning theories <br />- Awareness of latest trends in e-learning and instructional design <br />- Strong client consulting/interfacing skills. <br />- Ability to guide clients to focus on specific objectives and teaching points <br />- Strong meeting facilitation, presentation and interpersonal skills <br />- A thorough understanding of the web as an instructional medium <br />- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"},
    
  ],
   
 
    "expiry": '2023-08-15',
    "internship": "",
    "generalInstructions": "- We have a two&ndash;year indemnity for permanent candidates. We will provide training to the selected candidates. <br />- Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.",
     "instructions": "- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; capture your video for invigilation purposes.<br /> - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.<br /> - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. <br />- Candidate&rsquo;s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. <br />- Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. <br />- Candidates cannot use an iOS system/device for this exam.",
    "systemRequirement": "- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). <br />- The latest version of Google Chrome Browser only.<br /> - Please note that Internet speed should be minimum 1 Mbps. <br />- Do not use a MacBook or iPad for the proctored exam.",
    "process": "- Every round is an elimination round. Candidates need to clear all rounds to get selected. <br /><br /><br />Round I : 4th August, 2018 <br />Aptitude Test : 25 Questions <br /><br /><br />Round II (Interview) : 4th August, 2018.",
    
  },



]
getApplication(){
  return this.application;
}
setApplication(data: any){
this.application.push(data)
}
getWalkinInfo(){
  return this.walkinInfo;
}

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
