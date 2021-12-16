import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  public name = 'text in lowercase';
  public text = 'string in uppercase';
  public heading = 'heading in titlecase';
  public slice = 'text in slicecase';
  public person = {
    name: 'tazeen',
    age: '23',
    height: '5.3',
  };

  public employees: Array<any> = [
    { id: 1, name: 'ajax' },
    { id: 2, name: 'ajax2' },
    { id: 3, name: 'ajax3' },
    { id: 4, name: 'ajax4' },
  ];
  public newIndex = -1;
  public index = this.employees.length - 1;
  public add = this.index + 1;
  public newElement = { id: this.add, name: '' };
  public selectedId: any = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data)
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id') as any);
    });
  }
  delete(employee: any, index: any) {
    this.newElement = employee;
    this.newIndex = index;
    this.employees.splice(this.newIndex, 1);
  }
  addElement() {
    console.log('before', this.add);
    this.employees.push(this.newElement);
    console.log('after', this.employees);
  }
  onSelect(employee: any) {
    // this.router.navigate(['/pipes',employee.id])
    console.log(employee);

    this.router.navigate([employee.id], { relativeTo: this.route });
    console.log(this.router);
  }
  isSelected(employee: any) {
    return employee.id === this.selectedId;
  }
}
