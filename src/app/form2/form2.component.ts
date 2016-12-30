import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  // A FormControl takes 3 arguments. a default value, a validator and an asynchronous validator. All of them are optional.
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
