import { bootstrap } from "angular2/platform/browser";
import { Component , OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';

import {DOCTOR_PROVIDERS} from './services/doctorService';

import {DoctorService} from './services/doctorService';
import {Doctor} from './components/doctorComponents';
import {DoctorsList} from './components/doctorComponents';

@Component({
  selector: 'ng2app',
  directives: [DoctorsList],
  template: `
    <doctors-list
      [doctorsList]="doctors">
    </doctors-list>
  `
})

class Ng2App implements OnInit{
  doctors: Doctor[];

  constructor(public _doctorService: DoctorService){
  }

  ngOnInit(): void {
    this._doctorService
      .getDoctors()
      .subscribe((res: any) => this.renderDoctors(res));
  }

  renderDoctors(res: any): void {
    this.doctors = res.doctors_list;
  }
}

bootstrap(Ng2App,
  [HTTP_PROVIDERS,
  DOCTOR_PROVIDERS]);