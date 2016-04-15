System.register(['angular2/core', 'angular2/common', 'angular2/router', '.././services/doctorService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, doctorService_1;
    var Doctor, DoctorsRow, DoctorsList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (doctorService_1_1) {
                doctorService_1 = doctorService_1_1;
            }],
        execute: function() {
            // Doctor class
            Doctor = (function () {
                function Doctor(id, name, gender, bio, speciality, education) {
                    this.id = id;
                    this.name = name;
                    this.gender = gender;
                    this.bio = bio;
                    this.speciality = speciality;
                    this.education = education;
                }
                return Doctor;
            })();
            DoctorsRow = (function () {
                function DoctorsRow(_router) {
                    this._router = _router;
                    this.onDoctorSelected = new core_1.EventEmitter();
                }
                DoctorsRow.prototype.showProfile = function (n) {
                    this._router.navigate(['DoctorProfile', { id: n }]);
                };
                DoctorsRow.prototype.clicked = function (doctor) {
                    this.onDoctorSelected.emit(this.doctor);
                };
                DoctorsRow = __decorate([
                    core_1.Component({
                        selector: 'doctors-row',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        inputs: ['doctor'],
                        outputs: ['onDoctorSelected'],
                        template: "\n      <div class=\"col-md-6\">\n        <div class=\"well well-sm\">\n          <div class=\"row\">\n            <div class=\"col-xs-3 col-md-3 text-center\">\n              <img [src]=\"doctor.profile_pic\" alt=\"bootsnipp\" class=\"img-rounded img-responsive\"/>\n            </div>\n            <div class=\"col-xs-9 col-md-9 section-box\">\n              <h2 (click)='clicked(doctor)'> {{ doctor.title }} </h2>\n              <p>{{ doctor.gender }}</p>\n              <p>{{ doctor.education }}</p>\n              <hr/>\n              <div class=\"row rating-desc\">\n                <div class=\"col-md-12\">\n                  <a  (click)=\"showProfile(doctor.id)\">View Details</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], DoctorsRow);
                return DoctorsRow;
            })();
            exports_1("DoctorsRow", DoctorsRow);
            DoctorsList = (function () {
                function DoctorsList(_doctorService, _router) {
                    this._doctorService = _doctorService;
                    this._router = _router;
                    this.doctor = null;
                }
                DoctorsList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._doctorService
                        .getDoctors()
                        .subscribe(function (res) { return _this.renderDoctors(res); });
                };
                DoctorsList.prototype.renderDoctors = function (res) {
                    this.doctors = res.doctors_list;
                };
                DoctorsList.prototype.showDoctorProfile = function (n) {
                    this._router.navigate(['DoctorProfile', { id: n }]);
                };
                DoctorsList.prototype.doctorSelected = function (doctor) {
                    alert(doctor.title);
                };
                DoctorsList = __decorate([
                    core_1.Component({
                        selector: 'doctors-list',
                        providers: [doctorService_1.DoctorService],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, DoctorsRow],
                        template: "\n    <div class=\"row\">\n      <!--result start-->\n      <doctors-row\n        *ngFor=\"#doctor of doctors\" (onDoctorSelected)=\"doctorSelected($event)\"\n        [doctor]=\"doctor\">\n      </doctors-row>\n      <!--result end-->\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [doctorService_1.DoctorService, router_1.Router])
                ], DoctorsList);
                return DoctorsList;
            })();
            exports_1("DoctorsList", DoctorsList);
        }
    }
});
