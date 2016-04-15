import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class PatientService {

  constructor(public http: Http) {
  }

  getPatientDetail(id){
    return this.http.get(`http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/patients/${id}`)
    .map(result => result.json());
  }

  editPatientDetail(patient_object) {
    var jsonObj = JSON.stringify({patient_name: patient_object.patient_name});
    var params = 'patient_name=' + jsonObj;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://private-anon-6e80b3cfa-addvalng2app.apiary-mock.com/api/v1/patients/${patient_object.patient_id}`, params, {
      headers: headers
    })
    .map(result => result.json());
  }
}