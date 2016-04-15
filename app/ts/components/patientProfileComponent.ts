import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, RouterLink, LocationStrategy, Router } from 'angular2/router';
import { PatientService } from '.././services/patientService';

@Component({
  selector: 'patient-history',
  providers: [ PatientService ],
  inputs: ['patientHistory'],
  template:
  `
    <div class="col-xs-12 divider text-center">
      <h2>History</h2>
    </div>
    <div class="col-xs-12  text-left">
      <p>{{patientHistory}}</p>
    </div>
  `
})
class PatientHistory{
}

@Component({
  selector: 'patient-detail',
  providers: [ PatientService ],
  inputs: ['patientDetail'],
  template:
  `
    <div class="col-xs-12 col-sm-8">
      <h3>{{patientDetail.patient_name}}</h3>
      <p><strong>Gender: </strong> {{patientDetail.patient_gender}} </p>
      <p><strong>age: </strong> {{patientDetail.patient_age}} </p>
      <p><strong>email: </strong> {{patientDetail.patient_email}} </p>
      <p><strong>Phone Number: </strong> {{patientDetail.patient_phone_number}} </p>
    </div>
  `
})
class PatientDetail{
}

@Component({
  selector: 'patient-image',
  providers: [ PatientService ],
  inputs: ['patientImage'],
  template:
  `
    <div class="col-xs-12 col-sm-4 text-center">
      <figure>
        <img src={{patientImage}} alt="" class="img-circle img-responsive">
      </figure>
    </div>
  `
})
class PatientImage{
}

@Component({
  selector: 'patient-profile',
  providers: [ PatientService ],
  directives: [ PatientDetail, PatientImage, PatientHistory, RouterLink, CORE_DIRECTIVES ],
  template:
  `
    <div class="col-xs-12  text-center">
      <h2>Profile</h2>
    </div>
    <p><a (click)="editPatientProfile(patientId)">Edit Profile</a></p>
    <div class="col-sm-12">
      <patient-detail [patientDetail]="patientDetail"></patient-detail>
      <patient-image [patientImage]="patientDetail.profile_pic"></patient-image>
    </div>
    <patient-history [patientHistory]="patientHistory"></patient-history>
  `
})

export class PatientProfile implements OnInit{
  public patientId = "";
  public patientDetail = {};
  public patientHistory = "";

  constructor(public _patientService: PatientService, private _routeparams: RouteParams, private _router: Router){}

  ngOnInit():any{
    this.patientId = this._routeparams.get("id");
    this._patientService
      .getPatientDetail(this.patientId)
      .subscribe((res: any) => this.showPatientDetails(res));

    this._patientService
      .getPatientHistory(this.patientId)
      .subscribe((res: any) => this.showPatientHistory(res));
  }

  showPatientDetails(result: any): void {
    this.patientDetail = result.profile;
  }

  showPatientHistory(result: any): void {
    this.patientHistory = result.history;
  }

  editPatientProfile(n): void{
    this._router.navigate(['EditPatientProfile', {id: n}])
  }
}