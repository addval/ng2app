import {
  Component
} from 'angular2/core';

// Doctor class
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
  selector: 'doctors-list',
  template: `

  `

})
class ProductImage {
  product: Product;
}




