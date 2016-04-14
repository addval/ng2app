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
}
