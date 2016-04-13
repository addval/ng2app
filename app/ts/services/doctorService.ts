import {Injectable, provide} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class DoctorService {
  static BASE_URL: string = `http://private-deaf6-addvalng2app.apiary-mock.com/api/v1`;

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${DoctorService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  getDoctors(): Observable<any[]> {
    return this.query(`/doctors`);
  }
}

export var DOCTOR_PROVIDERS: Array<any> = [
  provide(DoctorService, {useClass: DoctorService})
];
