import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent  {
  builderForm: FormGroup;
  address: FormGroup;
  constructor( private fb:FormBuilder) {
  this.createForm()
}
get alternateEmails(){
 return  this.builderForm.get('alternateEmails') as FormArray
}
addAlternateEmails(){
 this.alternateEmails.push(this.fb.control(''))
}
onSubmit(){
  console.log(this.builderForm.value)
}
  createForm(){
   this.builderForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(3)]],
      lastName: [],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        city: [],
        state: [],
        country: []
      }),
      alternateEmails: this.fb.array([])

    })
  }


}

