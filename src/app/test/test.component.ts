import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>testing Inline template</div>`,
  styles: [`div {
    color: purple;
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
