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
    var DoctorService;
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
                // static BASE_URL: string = `http://private-deaf6-addvalng2app.apiary-mock.com/api/v1`;
                function DoctorService(http) {
                    this.http = http;
                }
                // query(URL: string, params?: Array<string>): Observable<any[]> {
                //   let queryURL: string = `${DoctorService.BASE_URL}${URL}`;
                //   if (params) {
                //     queryURL = `${queryURL}?${params.join('&')}`;
                //   }
                //   return this.http.request(queryURL).map((res: any) => res.json());
                // }
                DoctorService.prototype.getDoctors = function () {
                    return this.http.get("http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/doctors")
                        .map(function (result) { return result.json(); });
                };
                DoctorService.prototype.getDoctorPatients = function (id) {
                    console.log(id);
                    return this.http.get("http://private-deaf6-addvalng2app.apiary-mock.com/api/v1/doctors/" + id + "/patients_list")
                        .map(function (result) { return result.json(); });
                };
                DoctorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DoctorService);
                return DoctorService;
            })();
            exports_1("DoctorService", DoctorService);
        }
    }
});
// export var DOCTOR_PROVIDERS: Array<any> = [
//   provide(DoctorService, {useClass: DoctorService})
// ];
