import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class PatientService {

  constructor(public http: Http) {
  }

  getPatientDetail(id){
    return this.http.get(`http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/patients/${id}`)
    .map(result => result.json());
  }

  editPatientDetail() {
    var jsonObj = JSON.stringify({patient_name: patient_name});
    var params = 'json=' + jsonObj;
    return this.http.post(`http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/patients/${id}`, params)
    .map(result => result.json());
  }
}