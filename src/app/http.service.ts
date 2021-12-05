import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from './user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'https://jsonplaceholder.typicode.com/albums'

  constructor(public http:HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)

  }
}
