import { bootstrap } from "angular2/platform/browser";
import { Component , OnInit,provide} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';

import {Doctor} from './components/doctorComponents';
import {DoctorsList} from './components/doctorComponents';
import {DoctorProfile} from './components/doctorProfileComponent';
import {EditPatientProfile} from './components/editPatientProfileComponent';

import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  Router,
  RouteConfig
} from 'angular2/router';
@RouteConfig([

  { path: '/doctors', name: 'Doctors', component: DoctorsList, useAsDefault:true },
  { path: '/doctorsprofile/:id', name: 'DoctorProfile', component: DoctorProfile},
  { path: '/editpatientprofile/:id', name: 'EditPatientProfile', component: EditPatientProfile}

])
@Component({
  selector: 'ng2app',
  directives: [ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS],
  template: `

    <router-outlet></router-outlet>
  `
})

class Ng2App{
}

bootstrap(Ng2App,
  [HTTP_PROVIDERS,
  ROUTER_PROVIDERS]);
