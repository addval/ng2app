import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class PatientService {
  // static BASE_URL: string = `http://private-deaf6-addvalng2app.apiary-mock.com/api/v1`;

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${PatientService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  getPatientDetail(id){
    return this.http.get(`http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/patients/${id}`)
    .map(result => result.json());
  }
}

// export var DOCTOR_PROVIDERS: Array<any> = [
//   provide(DoctorService, {useClass: DoctorService})
// ];
