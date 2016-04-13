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
    var DoctorService, DOCTOR_PROVIDERS;
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
            DoctorService = (function () {
                function DoctorService(http) {
                    this.http = http;
                }
                DoctorService.prototype.query = function (URL, params) {
                    var queryURL = "" + DoctorService.BASE_URL + URL;
                    if (params) {
                        queryURL = queryURL + "?" + params.join('&');
                    }
                    return this.http.request(queryURL).map(function (res) { return res.json(); });
                };
                DoctorService.prototype.getDoctors = function () {
                    return this.query("/doctors");
                };
                DoctorService.BASE_URL = "http://private-deaf6-addvalng2app.apiary-mock.com/api/v1";
                DoctorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DoctorService);
                return DoctorService;
            })();
            exports_1("DoctorService", DoctorService);
            exports_1("DOCTOR_PROVIDERS", DOCTOR_PROVIDERS = [
                core_1.provide(DoctorService, { useClass: DoctorService })
            ]);
        }
    }
});
