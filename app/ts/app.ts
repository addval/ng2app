import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

class Doctor {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public bio: string,
    public speciality: string,
    public education: string) {
  }
}

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