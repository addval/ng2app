// Angular Modules
import { bootstrap } from "angular2/platform/browser";
import { Component, OnInit, provide } from "angular2/core";
import { HTTP_PROVIDERS } from 'angular2/http';

// Services
import { DoctorsList } from './components/doctorListComponents';
import { DoctorProfile } from './components/doctorProfileComponent';
import { PatientProfile } from './components/patientProfileComponent';

// Routes
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  Router,
  RouteConfig
} from 'angular2/router';
@RouteConfig([
  { path: '/doctors', name: 'DoctorsList', component: DoctorsList, useAsDefault:true },
  { path: '/doctorsprofile/:id', name: 'DoctorProfile', component: DoctorProfile },
  { path: '/patientsprofile/:id', name: 'PatientProfile', component: PatientProfile }
])

// Main App
@Component({
  selector: 'ng2app',
  directives: [ ROUTER_DIRECTIVES ],
  providers:[ ROUTER_PROVIDERS ],
  template:
  `
    <router-outlet></router-outlet>
  `
})
class Ng2App{
}

// Bootstrap App
bootstrap(Ng2App,
  [ HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
);
