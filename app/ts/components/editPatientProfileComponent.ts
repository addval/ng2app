import { Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';
import {PatientService} from '.././services/patientService';

@Component({
    selector: 'edit-patient-profile',
    providers: [PatientService],
    directives:[RouterLink,CORE_DIRECTIVES],
    template:
    `
    <div class="row">
        <form role="form" #myForm="ngForm" (ngSubmit) = "onEditPatient()">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Patient Name"
              ngControl = "patient_name" [(ngModel)] = "newContact.patient_name">
            </div>
            <button type="submit" class="btn btn-default">Edit</button>
        </form>
    </div>
    `
})
export class EditPatientProfile implements OnInit{
	public patProfileId = "";
	public patientDetail = {};
	public patient = {};
	public patientName = "";

	newContact: Contact;
	constructor(public _patientService: PatientService, private _routeparams: RouteParams){}

	ngOnInit():any{
		this.patProfileId = this._routeparams.get("id");
		this.newContact = {patient_name : this.patProfileId};
		// console.log(this.patProfileId);

		this._patientService
			.getPatientDetail(this.patProfileId)
			.subscribe((res:any) => this.renderPatientDetail(res));
	}

	renderPatientDetail(res: any) :void{
		this.patient_detail = res.profile;
		console.log(this.patient_detail);
		// this.newContact = {patient_name : this.patient_detail.patient_name};
		// console.log(this.newContact)
	}

	onEditPatient(_patientName){
		let patient = {patient_name: _patientName, patient_id: this.patProfileId};
		console.log(patient);
		// this._patientService.editPatientDetail(patient);
		console.log('done')
	}

}