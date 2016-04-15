import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';
import {PatientService} from '.././services/patientService';
import {Router} from 'angular2/router';

// class Patient {
//   constructor(
//     public patient_name: number,
//     public bio: string,
//     public age: number,
//     public patient_email: string,
//     public patient_gender: string,
//     public patient_phone_number: number,
//     public profile_pic: string,
//     public status: string
//   ){}
// }

@Component({
    selector: 'edit-patient-profile',
    providers: [PatientService],
    directives:[RouterLink,CORE_DIRECTIVES],
    template:
    `
    <div class="row">
        <form role="form" #myForm="ngForm" (ngSubmit) = "onEditPatient(patient)">
            <div class="form-group">
            <label for="patient_name">Patient Name</label>
              <input type="text" class="form-control" placeholder="Patient Name" id="patient_name"
              ngControl = "patient_name" [(ngModel)] = "patient.patient_name">
            </div>
            <button type="submit" class="btn btn-default">Edit</button>
        </form>
    </div>
    <div>{{updatedName}}</div>
    `
})
export class EditPatientProfile implements OnInit{
	public patProfileId = "";
	public patient = {};
	public patient_detail = {};

	// patient:Patient ;
	constructor(public _patientService: PatientService, private _routeparams: RouteParams, private _router: Router){}

	ngOnInit():any{
		this.patProfileId = this._routeparams.get("id");
		// this.patientModel = {patient_name : this.patProfileId};
		console.log(this.patProfileId);

		this._patientService
			.getPatientDetail(this.patProfileId)
			.subscribe((res:any) => this.renderPatientDetail(res));
	}

	renderPatientDetail(res: any) :void{
		this.patient_detail = res.profile;
		console.log(this.patient_detail);
		this.patient= this.patient_detail;
	}

	onEditPatient(patient: any){
		// let patientModel = {};
		console.log(patient)
		// console.log(patient1);
		this._patientService.editPatientDetail(patient.patient_name, this.patProfileId)
		.subscribe((res:any) => this.profileEdited(res),
			error => console.log(error),
			() => console.log("finished"));
	}

	profileEdited(res){
		console.log(res);
		this._router.navigate(['PatientProfile', {id: this.patProfileId}])
	}
}
