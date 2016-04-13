import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';

// Doctor class
export class Doctor {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public bio: string,
    public speciality: string,
    public education: string) {
  }
}

@Component({
  selector: 'doctors-list',
  inputs: ['doctorsList'],
  directives:[RouterLink,CORE_DIRECTIVES],
  template: `
  <div class="row">
        <!--result start-->
        <div class="col-md-6" *ngFor="#doctor of doctorsList">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-xs-3 col-md-3 text-center">
                        <img [src]="doctor.profile_pic" alt="bootsnipp"
                            class="img-rounded img-responsive" />
                    </div>
                    <div class="col-xs-9 col-md-9 section-box">
                        <h2>
                            {{doctor.title}}
                        </h2>
                        <p>{{doctor.gender}}</p>
                        <p>{{doctor.education}}</p>
                        <hr />
                        <div class="row rating-desc">
                            <div class="col-md-12">
                                <a href="doctor-profile.html" [routerLink]="['/Doctors', {id: doctor.id}]">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--result end-->
    </div>
  `

})
export class DoctorsList {
  doctorsList: Doctor[];
}




