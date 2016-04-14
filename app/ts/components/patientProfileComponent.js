System.register(['angular2/core', 'angular2/common', 'angular2/router', '.././services/patientService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, patientService_1;
    var PatientProfile;
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
            function (patientService_1_1) {
                patientService_1 = patientService_1_1;
            }],
        execute: function() {
            PatientProfile = (function () {
                function PatientProfile(_patientService, _routeparams) {
                    this._patientService = _patientService;
                    this._routeparams = _routeparams;
                    this.patientId = "";
                }
                PatientProfile.prototype.ngOnInit = function () {
                    // this.docProfileId = this._routeparams.get("id");
                    console.log("h1");
                    // this._doctorService
                    //   .getDoctorDetail(this.docProfileId)
                    //   .subscribe((res:any) => this.renderDoctorDetail(res));
                };
                PatientProfile = __decorate([
                    core_1.Component({
                        selector: 'patient-profile',
                        inputs: ['patientProfile'],
                        providers: [patientService_1.PatientService],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n    <h1>hello</h1>\n    // <div>\n    // <h2>{{doctorDetail.title}}</h2>\n    //                     <p><strong>About: </strong> {{doctorDetail.bio}} </p>\n    //                     <p><strong>Speciality: </strong> {{doctorDetail.speciality}} </p>\n    // </div>\n    // <div class=\"col-xs-12 divider text-center\">\n    //    <h2>Patient List</h2>\n    // </div>\n    // <div class=\"col-xs-12  text-center\">\n    //     <div class=\"col-xs-12 col-sm-4 emphasis\" *ngFor=\"#patient of patients\">\n    //        <img src=\"http://gomerblog.com/wp-content/uploads/2015/12/angry-patient.jpg\" alt=\"...\" class=\"img-thumbnail\">\n    //        <h4>{{patient.patient_name}}</h4>\n    //        <p><a (click)=\"showProfile(patient.id)\">View Profile</a></p>\n    //     </div>\n\n    // </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [patientService_1.PatientService, router_1.RouteParams])
                ], PatientProfile);
                return PatientProfile;
            })();
            exports_1("PatientProfile", PatientProfile);
        }
    }
});
