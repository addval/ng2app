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

  editPatientDetail(name, id) {
    // var jsonObj = JSON.stringify({patient_name: patient_object.patient_name});
    var params = 'patient_name=' + name;
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://private-711c8-ng2app.apiary-mock.com/api/v1/patients/${id}`)
    .map(result => result.json());
  }

  getPatientHistory(id){
    return this.http.get(`http://private-3f161-addvalng2app.apiary-mock.com/api/v1/patients/${id}/history`)
    .map(result => result.json());
  }
}
