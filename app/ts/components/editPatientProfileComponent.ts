import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';
import {PatientService} from '.././services/patientService';
import {Router} from 'angular2/router';

@Component({
    selector: 'edit-patient-profile',
    providers: [PatientService],
    directives:[RouterLink,CORE_DIRECTIVES],
    template:
    `
    <div class="row">
        <form role="form" #myForm="ngForm" (ngSubmit) = "onEditPatient()">
            <div class="form-group">
            <label for="patient_name">Patient Name</label>
              <input type="text" class="form-control" placeholder="Patient Name" id="patient_name"
              ngControl = "patient_name" [(ngModel)] = "patientModel.patient_name">
            </div>
            <button type="submit" class="btn btn-default">Edit</button>
        </form>
    </div>
    `
})
export class EditPatientProfile implements OnInit{
	public patProfileId = "";
	public patient_detail = {};
	public patient = {};

	public patientModel = {};
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
		console.log(this.patient_detail.patient_name);
		this.patientModel = {patient_name : this.patient_detail.patient_name};
		// console.log(this.patientModel)
	}

	onEditPatient(){
		let patient = {patient_name: this.patientModel.patient_name, patient_id: this.patProfileId};
		console.log(patient);
		this._patientService.editPatientDetail(patient)
		.subscribe((res:any) => this.profileEdited(res),
			error => console.log('here ' + error),
			() => console.log("finished"));
	}

	profileEdited(res){
		console.log(res);
		this._router.navigate(['PatientProfile', {id: this.patProfileId}])
	}

}