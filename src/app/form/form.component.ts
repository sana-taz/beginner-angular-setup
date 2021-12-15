import { Component, OnInit } from '@angular/core';
import { User } from '../user2';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//  class = "is-invalid"
  constructor(private _enrollment:EnrollmentService) { }

  ngOnInit(): void {
  }
 userModel = new User('Tob','jacob', 'a@gmail.com', 3465546)
 onSubmit(){
   this._enrollment.enroll(this.userModel)
   .subscribe(
     data => console.log('success',data),
     error => console.log('error',error)
   )
   console.log(this.userModel)
 }
}
