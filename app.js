var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var Ng2App = (function () {
    function Ng2App() {
    }
    Ng2App = __decorate([
        core_1.Component({
            selector: 'ng2app',
            template: "\n    <h2> Angular 2 Practice App </h2>\n  "
        })
    ], Ng2App);
    return Ng2App;
})();
browser_1.bootstrap(Ng2App);
