import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 registrationForm = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   email: new FormControl(''),
   phone: new FormControl(''),
   address: new FormGroup({
     city: new FormControl(''),
     state: new FormControl(''),
     country: new FormControl('')
   })
 })
//   constructor( private fb:FormBuilder) { }
//  builderForm = this.fb.group({
//    firstName: [],
//    lastName: [],
//    phone: [],
//    email: [],
//    address: this.fb.group({
//      city: [],
//      state: [],
//      address: []
//    })

//  })
//  get() { return this.builderForm.get('name'); }
  ngOnInit(): void {
  }
  loadApiPatchData(){
    this.registrationForm.patchValue({
      firstName: 'tam',
      lastName: 'marry',
      email: 'abc@gmail.com',
      phone: 2345678900,
      // address: {
      // city: "xyz",
      // state: 'sdsd',
      // country: 'were'
      // }
    })
  }
 loadApiData(){
   this.registrationForm.setValue({
     firstName: 'tam',
     lastName: 'marry',
     email: 'abc@gmail.com',
     phone: 2345678900,
     address: {
     city: "xyz",
     state: 'sdsd',
     country: 'were'
     }
   })
 }
}
