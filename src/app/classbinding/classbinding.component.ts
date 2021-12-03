import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
   successClass = "text-success"
   hasError = true
   object = {
     "text-success": this.hasError,
     "text-danger": !this.hasError
   }

  constructor() { }

  ngOnInit(): void {
  }

}
