import { Component, OnInit } from '@angular/core';
import { User } from '../user2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//  class = "is-invalid"
  constructor() { }

  ngOnInit(): void {
  }
 userModel = new User('Tob','jacob', 'a@gmail.com', 3465546)
}
