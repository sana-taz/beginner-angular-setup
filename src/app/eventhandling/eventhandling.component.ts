import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  templateUrl: './eventhandling.component.html',
  styleUrls: ['./eventhandling.component.css']
})
export class EventhandlingComponent implements OnInit {

  constructor() { }
  text = ""
  onClick(){
    return this.text = 'am clicked'
  }
  onClickEvent(event: { type: any; }){
    console.log(event)
  }
  referenceClick(value: { type: string; }){
    return console.log(value)
  }

  ngOnInit(): void {
  }

}
