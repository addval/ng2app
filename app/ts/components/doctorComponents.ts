import {
  Component
} from 'angular2/core';

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
  template: `
  <div class="row">
        <!--result start-->
        <div class="col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-xs-3 col-md-3 text-center">
                        <img src="https://dermamedical.co.uk/wp-content/uploads/2015/06/Doctor.jpg" alt="bootsnipp"
                            class="img-rounded img-responsive" />
                    </div>
                    <div class="col-xs-9 col-md-9 section-box">
                        <h2>
                            Doctor name
                        </h2>
                        <p>Gender</p>
                        <p>Doctor Education</p>
                        <p>Education</p>
                        <hr />
                        <div class="row rating-desc">
                            <div class="col-md-12">
                                <a href="doctor-profile.html">View Details</a>
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
class DoctorsList {
}




