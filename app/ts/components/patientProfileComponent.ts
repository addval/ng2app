import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, RouterLink, LocationStrategy, Router } from 'angular2/router';
import { PatientService } from '.././services/patientService';

@Component({
  selector: 'patient-profile',
  providers: [ PatientService ],
  directives: [ RouterLink, CORE_DIRECTIVES ],
  template:
  `
  <div class="well profile">
    <div class="col-xs-12  text-center">
        <h2>Profile</h2>
    </div>
    <div class="col-sm-12">
      <div class="col-xs-12 col-sm-8">
        <h3>{{patientDetail.patientId}}</h3>
        <h3>{{patientDetail.patient_name}}</h3>
        <p><strong>age: </strong> {{patientDetail.patient_age}} </p>
        <p><strong>email: </strong> {{patientDetail.patient_email}} </p>
        <p><strong>Phone Number: </strong> {{patientDetail.patient_phone_number}} </p>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <figure>
          <img src={{patientDetail.profile_pic}} alt="" class="img-circle img-responsive">
        </figure>
      </div>
    </div>
    <div class="col-xs-12 divider text-center">
      <h2>History</h2>
    </div>
    <div class="col-xs-12  text-left">
      <p>This is simple text</p>
      <p>This is simple text</p>
      <p>This is simple text</p>
    </div>
  </div>
  `
})

export class PatientProfile implements OnInit{
  public patientId = "";
  public patientDetail = {};

  constructor(public _patientService: PatientService, private _routeparams: RouteParams){}

  ngOnInit():any{
    this.patientId = this._routeparams.get("id");
    this._patientService
      .getPatientDetail(this.patientId)
      .subscribe((res: any) => this.showPatientDetails(res));
  }

  showPatientDetails(result: any): void {
    this.patientDetail = result.profile;
  }
}