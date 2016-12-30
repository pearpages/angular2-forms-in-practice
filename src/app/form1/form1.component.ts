import { Contact } from './contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  contact: Contact = { 
    firstname:"Sachin",
    lastname:"Tendulkar",
    address: { city:"Mumbai",street:"Perry Cross Rd", pincode:"400050"}
 };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
