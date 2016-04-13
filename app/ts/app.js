System.register(["angular2/platform/browser", "angular2/core", 'angular2/http', './services/doctorService', './components/doctorComponents', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, doctorService_1, doctorComponents_1, router_1;
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
            function (doctorService_1_1) {
                doctorService_1 = doctorService_1_1;
            },
            function (doctorComponents_1_1) {
                doctorComponents_1 = doctorComponents_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Ng2App = (function () {
                function Ng2App(_doctorService) {
                    this._doctorService = _doctorService;
                }
                Ng2App.prototype.ngOnInit = function () {
                    var _this = this;
                    this._doctorService
                        .getDoctors()
                        .subscribe(function (res) { return _this.renderDoctors(res); });
                };
                Ng2App.prototype.renderDoctors = function (res) {
                    this.doctors = res.doctors_list;
                };
                Ng2App = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['Doctors'] },
                        { path: '/doctors', name: 'Doctors', component: doctorComponents_1.DoctorsList },
                    ]),
                    core_1.Component({
                        selector: 'ng2app',
                        directives: [doctorComponents_1.DoctorsList, router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS],
                        template: "\n    <doctors-list\n      [doctorsList]=\"doctors\">\n    </doctors-list>\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [doctorService_1.DoctorService])
                ], Ng2App);
                return Ng2App;
            })();
            browser_1.bootstrap(Ng2App, [http_1.HTTP_PROVIDERS,
                doctorService_1.DOCTOR_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: doctorComponents_1.DoctorsList }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
