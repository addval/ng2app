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
                    this.patientDetail = {};
                }
                PatientProfile.prototype.ngOnInit = function () {
                    var _this = this;
                    this.patientId = this._routeparams.get("id");
                    this._patientService
                        .getPatientDetail(this.patientId)
                        .subscribe(function (res) { return _this.showPatientDetails(res); });
                };
                PatientProfile.prototype.showPatientDetails = function (result) {
                    this.patientDetail = result.profile;
                };
                PatientProfile = __decorate([
                    core_1.Component({
                        selector: 'patient-profile',
                        providers: [patientService_1.PatientService],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n  <div class=\"well profile\">\n    <div class=\"col-xs-12  text-center\">\n        <h2>Profile</h2>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"col-xs-12 col-sm-8\">\n        <h3>{{patientDetail.patientId}}</h3>\n        <h3>{{patientDetail.patient_name}}</h3>\n        <p><strong>age: </strong> {{patientDetail.patient_age}} </p>\n        <p><strong>email: </strong> {{patientDetail.patient_email}} </p>\n        <p><strong>Phone Number: </strong> {{patientDetail.patient_phone_number}} </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <figure>\n          <img src={{patientDetail.profile_pic}} alt=\"\" class=\"img-circle img-responsive\">\n        </figure>\n      </div>\n    </div>\n    <div class=\"col-xs-12 divider text-center\">\n      <h2>History</h2>\n    </div>\n    <div class=\"col-xs-12  text-left\">\n      <p>This is simple text</p>\n      <p>This is simple text</p>\n      <p>This is simple text</p>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [patientService_1.PatientService, router_1.RouteParams])
                ], PatientProfile);
                return PatientProfile;
            })();
            exports_1("PatientProfile", PatientProfile);
        }
    }
});
