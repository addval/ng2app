System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var PatientService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PatientService = (function () {
                function PatientService(http) {
                    this.http = http;
                }
                PatientService.prototype.getPatientDetail = function (id) {
                    return this.http.get("http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/patients/" + id)
                        .map(function (result) { return result.json(); });
                };
                PatientService.prototype.editPatientDetail = function (patient_object) {
                    var jsonObj = JSON.stringify({ patient_name: patient_object.patient_name });
                    var params = 'patient_name=' + jsonObj;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post("http://private-anon-6e80b3cfa-addvalng2app.apiary-mock.com/api/v1/patients/" + patient_object.patient_id, params, {
                        headers: headers
                    })
                        .map(function (result) { return result.json(); });
                };
                PatientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PatientService);
                return PatientService;
            })();
            exports_1("PatientService", PatientService);
        }
    }
});
