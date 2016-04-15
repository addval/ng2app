import { Component, OnInit, EventEmitter } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, RouterLink, LocationStrategy, Router } from 'angular2/router';
import { DoctorService } from '.././services/doctorService';

// Doctor class
class Doctor {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public bio: string,
    public speciality: string,
    public education: string
  ){}
}

@Component({
  selector: 'doctors-row',
  directives:[RouterLink,CORE_DIRECTIVES],
  inputs: ['doctor'],
  outputs: ['onDoctorSelected'],
  template:
  `
      <div class="col-md-6">
        <div class="well well-sm">
          <div class="row">
            <div class="col-xs-3 col-md-3 text-center">
              <img [src]="doctor.profile_pic" alt="bootsnipp" class="img-rounded img-responsive"/>
            </div>
            <div class="col-xs-9 col-md-9 section-box">
              <h2 (click)='clicked(doctor)'> {{ doctor.title }} </h2>
              <p>{{ doctor.gender }}</p>
              <p>{{ doctor.education }}</p>
              <hr/>
              <div class="row rating-desc">
                <div class="col-md-12">
                  <a  (click)="showProfile(doctor.id)">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
})
export class DoctorsRow {
  doctor: Doctor;
  onDoctorSelected: EventEmitter<Doctor>;

  constructor(private _router: Router){
    this.onDoctorSelected = new EventEmitter();
  }
  showProfile(n): void{
    this._router.navigate(['DoctorProfile', {id: n}])
  }

  clicked(doctor: Doctor): void {
    this.onDoctorSelected.emit(this.doctor);
  }
}


@Component({
  selector: 'doctors-list',
  providers: [ DoctorService ],
  directives: [ RouterLink, CORE_DIRECTIVES, DoctorsRow ],
  template:
  `
    <div class="row">
      <!--result start-->
      <doctors-row
        *ngFor="#doctor of doctors" (onDoctorSelected)="doctorSelected($event)"
        [doctor]="doctor">
      </doctors-row>
      <!--result end-->
    </div>
  `
})
export class DoctorsList implements OnInit{
  doctors: Doctor[];
  public doctor:Doctor = null;

  constructor(public _doctorService: DoctorService, private _router: Router){
  }

  ngOnInit(): void {
    this._doctorService
      .getDoctors()
      .subscribe((res: any) => this.renderDoctors(res));
  }

  renderDoctors(res: any): void {
    this.doctors = res.doctors_list;
  }

  showDoctorProfile(n): void{
    this._router.navigate(['DoctorProfile', {id: n}])
  }
  doctorSelected(doctor: Doctor){
    alert(doctor.gender);

  }
}
