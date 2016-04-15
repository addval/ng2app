import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, RouterLink, LocationStrategy, Router } from 'angular2/router';
// import { PatientService } from '.././services/patientService';

@Component({
  selector: 'edit-patient-profile',
  // providers: [ PatientService ],
  directives: [ RouterLink, CORE_DIRECTIVES ],
  template:
  `
    <h1>Edit Profile</h1>
  `
})

export class EditPatientProfile implements OnInit{
  public patientId = "";

  // constructor(public _patientService: PatientService, private _routeparams: RouteParams){}

  ngOnInit():any{
    // this.patientId = this._routeparams.get("id");
  }
}