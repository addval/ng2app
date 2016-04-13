System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var Doctor, DoctorsList;
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
            exports_1("Doctor", Doctor);
            DoctorsList = (function () {
                function DoctorsList() {
                }
                DoctorsList = __decorate([
                    core_1.Component({
                        selector: 'doctors-list',
                        inputs: ['doctorsList'],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n  <div class=\"row\">\n        <!--result start-->\n        <div class=\"col-md-6\" *ngFor=\"#doctor of doctorsList\">\n            <div class=\"well well-sm\">\n                <div class=\"row\">\n                    <div class=\"col-xs-3 col-md-3 text-center\">\n                        <img [src]=\"doctor.profile_pic\" alt=\"bootsnipp\"\n                            class=\"img-rounded img-responsive\" />\n                    </div>\n                    <div class=\"col-xs-9 col-md-9 section-box\">\n                        <h2>\n                            {{doctor.title}}\n                        </h2>\n                        <p>{{doctor.gender}}</p>\n                        <p>{{doctor.education}}</p>\n                        <hr />\n                        <div class=\"row rating-desc\">\n                            <div class=\"col-md-12\">\n                                <a href=\"doctor-profile.html\" [routerLink]=\"['/Doctors', {id: doctor.id}]\">View Details</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--result end-->\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoctorsList);
                return DoctorsList;
            })();
            exports_1("DoctorsList", DoctorsList);
        }
    }
});
