import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  style = 'orange'
  hasError = true
  object = {
    "color": 'blue',

  }

  constructor() { }

  ngOnInit(): void {
  }

}
