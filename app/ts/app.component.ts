// Angular Modules
import { Component, OnInit } from "angular2/core";

// Services
import { DoctorsList } from './components/doctorListComponents';
import { DoctorProfile } from './components/doctorProfileComponent';
import { PatientProfile } from './components/patientProfileComponent';
import { EditPatientProfile } from './components/editPatientProfileComponent';
import {JqueryComponent} from './components/jqueryComponent.ts';

// Routes
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig
} from 'angular2/router';
@RouteConfig([
  { path: '/doctors', name: 'DoctorsList', component: DoctorsList, useAsDefault:true },
  { path: '/doctorsprofile/:id', name: 'DoctorProfile', component: DoctorProfile },
  { path: '/patientsprofile/:id', name: 'PatientProfile', component: PatientProfile },
  { path: '/editpatientprofile/:id', name: 'EditPatientProfile', component: EditPatientProfile},
  { path: '/jquery', name: 'Jquery', component: JqueryComponent }

])

// Main App
@Component({
  selector: 'ng2app',
  directives: [ ROUTER_DIRECTIVES ],
  template:
  `
    <router-outlet></router-outlet>
  `
})
export class Ng2App{
}