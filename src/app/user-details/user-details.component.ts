import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public departmentId:any

  constructor(private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {
    // this.departmentId = parseInt(
    //   this.route.snapshot.paramMap.get('id') as any);
    this.route.paramMap.subscribe((params: ParamMap) =>
    {
      this.departmentId = parseInt(params.get('id') as any )
    })
  }
  goPrevious(){
    let previousId = this.departmentId - 1
    this.router.navigate(['/pipes', previousId])
  }
  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/pipes', nextId])
  }
  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId: null
    // this.router.navigate(['/pipes', {id: selectedId}])
    this.router.navigate(['../',{id: selectedId}],{relativeTo:this.route})
  }
  goToOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route})
  }

}
