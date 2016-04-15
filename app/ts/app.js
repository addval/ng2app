System.register(["angular2/platform/browser", "angular2/core", 'angular2/http', './components/doctorListComponents', './components/doctorProfileComponent', './components/patientProfileComponent', './components/editPatientProfileComponent', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, doctorListComponents_1, doctorProfileComponent_1, patientProfileComponent_1, editPatientProfileComponent_1, router_1;
    var Ng2App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (doctorListComponents_1_1) {
                doctorListComponents_1 = doctorListComponents_1_1;
            },
            function (doctorProfileComponent_1_1) {
                doctorProfileComponent_1 = doctorProfileComponent_1_1;
            },
            function (patientProfileComponent_1_1) {
                patientProfileComponent_1 = patientProfileComponent_1_1;
            },
            function (editPatientProfileComponent_1_1) {
                editPatientProfileComponent_1 = editPatientProfileComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Ng2App = (function () {
                function Ng2App() {
                }
                Ng2App = __decorate([
                    router_1.RouteConfig([
                        { path: '/doctors', name: 'DoctorsList', component: doctorListComponents_1.DoctorsList, useAsDefault: true },
                        { path: '/doctorsprofile/:id', name: 'DoctorProfile', component: doctorProfileComponent_1.DoctorProfile },
                        { path: '/patientsprofile/:id', name: 'PatientProfile', component: patientProfileComponent_1.PatientProfile },
                        { path: '/editpatientprofile/:id', name: 'EditPatientProfile', component: editPatientProfileComponent_1.EditPatientProfile }
                    ]),
                    core_1.Component({
                        selector: 'ng2app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Ng2App);
                return Ng2App;
            })();
            // Bootstrap App
            browser_1.bootstrap(Ng2App, [http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
