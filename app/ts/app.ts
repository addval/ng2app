import { bootstrap } from "angular2/platform/browser";
import { Component , OnInit,provide} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';

import {DOCTOR_PROVIDERS,DoctorService} from './services/doctorService';
import {Doctor} from './components/doctorComponents';
import {DoctorsList} from './components/doctorComponents';
import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig,
} from 'angular2/router';
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['Doctors'] },
  { path: '/doctors', name: 'Doctors', component: DoctorsList },
  
])
@Component({
  selector: 'ng2app',
  directives: [DoctorsList,ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS],
  template: `
    <doctors-list
      [doctorsList]="doctors">
    </doctors-list>
    <router-outlet></router-outlet>
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
  DOCTOR_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: DoctorsList}),
  provide(APP_BASE_HREF,            {useValue: '/'}),
  provide(LocationStrategy,         {useClass: HashLocationStrategy})]);
  