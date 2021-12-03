import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  name = ''
  myId = 'id'
  isDisable = false
  isNotDisable = true

  constructor() { }

  ngOnInit(): void {
  }

}
