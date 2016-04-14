import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, RouterLink, LocationStrategy } from 'angular2/router';
import { DoctorService } from '.././services/doctorService';

@Component({
  selector: 'doctor-profile',
  inputs: [ 'doctorProfile' ],
  providers: [ DoctorService ],
  directives:[ RouterLink, CORE_DIRECTIVES ],
  template:
  `
    <div>
    <h2>{{doctorDetail.title}}</h2>
      <p><strong>About: </strong> {{doctorDetail.bio}} </p>
      <p><strong>Speciality: </strong> {{doctorDetail.speciality}} </p>
    </div>
    <div class="col-xs-12 divider text-center">
      <h2>Patient List</h2>
    </div>
    <div class="col-xs-12  text-center">
      <div class="col-xs-12 col-sm-4 emphasis" *ngFor="#patient of patients">
        <img src="http://gomerblog.com/wp-content/uploads/2015/12/angry-patient.jpg" alt="..." class="img-thumbnail">
        <h4>{{patient.patient_name}}</h4>
        <p><a (click)="showProfile(patient.id)">View Profile</a></p>
      </div>
    </div>
  `
})
export class DoctorProfile implements OnInit{
  public docProfileId = "";
  public patients = [];
  public doctorDetail = {};

  constructor(public _doctorService: DoctorService, private _routeparams: RouteParams){}

  ngOnInit():any{
    this.docProfileId = this._routeparams.get("id");
    console.log(this.docProfileId);

    this._doctorService
      .getDoctorPatients(this.docProfileId)
      .subscribe((res: any) => this.renderPatients(res));

    this._doctorService
      .getDoctorDetail(this.docProfileId)
      .subscribe((res:any) => this.renderDoctorDetail(res));
  }

  renderPatients(res1: any): void {
    this.patients = res1.patients;
  }

  renderDoctorDetail(res1: any): void {
    this.doctorDetail = res1.doctor;
      console.log(this.doctorDetail)
  }

  showProfile(n): void{
    this._router.navigate(['PatientProfile', {id: n}])
  }
}