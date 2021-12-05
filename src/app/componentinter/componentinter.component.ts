import { Component, OnInit ,Input , Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componentinter',
  templateUrl: './componentinter.component.html',
  styleUrls: ['./componentinter.component.css']
})
export class ComponentinterComponent implements OnInit {
  @Input() proData = ''
  @Output() public child = new EventEmitter

  constructor() { }
  onClick(){
    this.child.emit('hey eventemitter')
  }

  ngOnInit(): void {
  }

}
