import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "text in lowercase"
  public text = "string in uppercase"
  public heading = "heading in titlecase"
  public slice = "text in slicecase"
  public person = {
    name: "tazeen",
    age: "23",
    height: "5.3"

  }
  public employees : object[] =  []



  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }

}
