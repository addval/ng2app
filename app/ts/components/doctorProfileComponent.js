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
    var DoctorProfile;
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
            DoctorProfile = (function () {
                function DoctorProfile(_doctorService, _routeparams, _router) {
                    this._doctorService = _doctorService;
                    this._routeparams = _routeparams;
                    this._router = _router;
                    this.doctorId = "";
                    this.patients = [];
                    this.doctorDetail = {};
                }
                DoctorProfile.prototype.ngOnInit = function () {
                    var _this = this;
                    this.doctorId = this._routeparams.get("id");
                    this._doctorService
                        .getDoctorPatients(this.doctorId)
                        .subscribe(function (res) { return _this.renderPatients(res); });
                    this._doctorService
                        .getDoctorDetail(this.doctorId)
                        .subscribe(function (res) { return _this.renderDoctorDetail(res); });
                };
                DoctorProfile.prototype.renderPatients = function (result) {
                    this.patients = result.patients;
                };
                DoctorProfile.prototype.renderDoctorDetail = function (result) {
                    this.doctorDetail = result.doctor;
                };
                DoctorProfile.prototype.showPatientProfile = function (n) {
                    this._router.navigate(['PatientProfile', { id: n }]);
                };
                DoctorProfile.prototype.editPatientProfile = function (n) {
                    this._router.navigate(['EditPatientProfile', { id: n }]);
                };
                DoctorProfile = __decorate([
                    core_1.Component({
                        selector: 'doctor-profile',
                        providers: [doctorService_1.DoctorService],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n    <div>\n    <h2>{{doctorDetail.title}}</h2>\n      <p><strong>About: </strong> {{doctorDetail.bio}} </p>\n      <p><strong>Speciality: </strong> {{doctorDetail.speciality}} </p>\n    </div>\n    <div class=\"col-xs-12 divider text-center\">\n      <h2>Patient List</h2>\n    </div>\n    <div class=\"col-xs-12  text-center\">\n      <div class=\"col-xs-12 col-sm-4 emphasis\" *ngFor=\"#patient of patients\">\n        <img src=\"http://gomerblog.com/wp-content/uploads/2015/12/angry-patient.jpg\" alt=\"...\" class=\"img-thumbnail\">\n        <h4>{{patient.patient_name}}</h4>\n        <p><a (click)=\"showPatientProfile(patient.id)\">View Profile</a></p>\n        <p><a (click)=\"editPatientProfile(patient.id)\">Edit Profile</a></p>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [doctorService_1.DoctorService, router_1.RouteParams, router_1.Router])
                ], DoctorProfile);
                return DoctorProfile;
            })();
            exports_1("DoctorProfile", DoctorProfile);
        }
    }
});
