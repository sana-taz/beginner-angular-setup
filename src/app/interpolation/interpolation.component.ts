import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name = 'normal interpolation'
  operation = 'interpolation in operators'
  concat = 'concat'



  constructor() { }

  ngOnInit(): void {
  }

  interpolation(){
    return this.name
  }

}
