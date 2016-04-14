import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy, Router} from 'angular2/router';
import {PatientService} from '.././services/patientService';

@Component({
    selector: 'patient-profile',
    inputs: ['patientProfile'],
    providers: [PatientService],
    directives:[RouterLink,CORE_DIRECTIVES],
    template:
    `
    <h1>hello</h1>

    `
})
export class PatientProfile implements OnInit{
  public patientId = "";
  constructor(public _patientService: PatientService, private _routeparams: RouteParams){}

  ngOnInit():any{
    this.patientProfileId = this._routeparams.get("id");
    console.log("h1");
    this._patientService
      .getPatientDetail(this.patientProfileId)
      .subscribe((res:any) => this.renderPatientDetail(res));
  }

  renderPatients(res1: any): void {
    this.patients = res1.patients;
  }
}