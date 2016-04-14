import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';
import {PatientService} from '.././services/patientService';

@Component({
    selector: 'patient-profile',
    inputs: ['patientProfile'],
    providers: [PatientService],
    directives:[RouterLink,CORE_DIRECTIVES],
    template:
    `
    <h1>hello</h1>
    // <div>
    // <h2>{{doctorDetail.title}}</h2>
    //                     <p><strong>About: </strong> {{doctorDetail.bio}} </p>
    //                     <p><strong>Speciality: </strong> {{doctorDetail.speciality}} </p>
    // </div>
    // <div class="col-xs-12 divider text-center">
    //    <h2>Patient List</h2>
    // </div>
    // <div class="col-xs-12  text-center">
    //     <div class="col-xs-12 col-sm-4 emphasis" *ngFor="#patient of patients">
    //        <img src="http://gomerblog.com/wp-content/uploads/2015/12/angry-patient.jpg" alt="..." class="img-thumbnail">
    //        <h4>{{patient.patient_name}}</h4>
    //        <p><a (click)="showProfile(patient.id)">View Profile</a></p>
    //     </div>

    // </div>
    `
})
export class PatientProfile implements OnInit{
  public patientId = "";
  constructor(public _patientService: PatientService, private _routeparams: RouteParams){}

  ngOnInit():any{
    // this.docProfileId = this._routeparams.get("id");
    console.log("h1");
    // this._doctorService
    //   .getDoctorDetail(this.docProfileId)
    //   .subscribe((res:any) => this.renderDoctorDetail(res));
  }

  // renderPatients(res1: any): void {
  //   this.patients = res1.patients;
  // }
}