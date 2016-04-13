import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http'

export /**
 * name
 */
class DoctorService {
  result: Object;
  constructor(http: Http) {
    this.result = {doctors:[]};
    http.get('http://private-711c8-ng2app.apiary-mock.com/api/v1/doctors').map((res: Response) => res.json()).subscribe(res => this.result = res);
  }
}