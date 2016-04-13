import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";


@Component({
  selector: 'ng2app',
  template: `
    <h2> Angular 2 Practice App </h2>
  `
})

class Ng2App {
  doctors: Doctor[];
}

bootstrap(Ng2App);