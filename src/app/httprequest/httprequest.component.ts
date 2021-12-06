import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent implements OnInit {
  public users : object[] = []
  public errorMsg : string = ''

  constructor(private _userservice: HttpService) { }

  ngOnInit(): void {
    this._userservice.getUsers()
    .subscribe(data => this.users = data,
               error => this.errorMsg = error )
  }

}
