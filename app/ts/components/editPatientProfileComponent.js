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
    var EditPatientProfile;
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
            EditPatientProfile = (function () {
                function EditPatientProfile(_patientService, _routeparams) {
                    this._patientService = _patientService;
                    this._routeparams = _routeparams;
                    this.patProfileId = "";
                    this.patientDetail = {};
                    this.patient = {};
                    this.patientName = "";
                }
                EditPatientProfile.prototype.ngOnInit = function () {
                    var _this = this;
                    this.patProfileId = this._routeparams.get("id");
                    this.newContact = { patient_name: this.patProfileId };
                    // console.log(this.patProfileId);
                    this._patientService
                        .getPatientDetail(this.patProfileId)
                        .subscribe(function (res) { return _this.renderPatientDetail(res); });
                };
                EditPatientProfile.prototype.renderPatientDetail = function (res) {
                    this.patient_detail = res.profile;
                    console.log(this.patient_detail);
                    // this.newContact = {patient_name : this.patient_detail.patient_name};
                    // console.log(this.newContact)
                };
                EditPatientProfile.prototype.onEditPatient = function (_patientName) {
                    var patient = { patient_name: _patientName, patient_id: this.patProfileId };
                    console.log(patient);
                    // this._patientService.editPatientDetail(patient);
                    console.log('done');
                };
                EditPatientProfile = __decorate([
                    core_1.Component({
                        selector: 'edit-patient-profile',
                        providers: [patientService_1.PatientService],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n    <div class=\"row\">\n        <form role=\"form\" #myForm=\"ngForm\" (ngSubmit) = \"onEditPatient()\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Patient Name\"\n              ngControl = \"patient_name\" [(ngModel)] = \"newContact.patient_name\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Edit</button>\n        </form>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [patientService_1.PatientService, router_1.RouteParams])
                ], EditPatientProfile);
                return EditPatientProfile;
            })();
            exports_1("EditPatientProfile", EditPatientProfile);
        }
    }
});
