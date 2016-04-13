import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'ng2app',
  template: `
    <h2> Angular 2 Practice App </h2>
  `
})

class Ng2App {
}

bootstrap(Ng2App);