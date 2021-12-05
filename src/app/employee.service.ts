import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees() {
    return [
      {id: 1, name: "hello", age: 23},
      {id: 2, name: "hello2", age: 23}
    ];
  }

  constructor() { }
}
