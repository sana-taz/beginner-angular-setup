import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'https://jsonplaceholder.typicode.com/albums'

  constructor(public http: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);
      })
    )

  }
//   errorHandler(error: HttpErrorResponse ){
//  return Observable.throw(error.message || 'Server Error')

//   }
}
