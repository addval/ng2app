import { bootstrap } from "angular2/platform/browser";
import { Component , OnInit} from "angular2/core";
import {DoctorService} from './services/doctorService';
import {Doctor} from './components/doctorComponents';
import {HTTP_PROVIDERS} from 'angular2/http';

import {DOCTOR_PROVIDERS} from './services/doctorService';

@Component({
  selector: 'ng2app',
  template: `
    <h2> Angular 2 Practice App </h2>
  `
})

class Ng2App implements OnInit{
  doctors: Doctor[];

  // constructor() {
  //   this.doctors =  dataService.getDoctors();
  //   // console.log(DoctorService)
  // }

  constructor(public _doctorService: DoctorService) {}

    ngOnInit(): void {
    this._doctorService
      .getDoctors()
      .subscribe((res: any) => this.renderDoctors(res));
  }

  renderDoctors(res: any): void {
    this.doctors = res;
    console.log(res)
  }
}

bootstrap(Ng2App,[HTTP_PROVIDERS,
  DOCTOR_PROVIDERS]);