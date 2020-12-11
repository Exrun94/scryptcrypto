import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, retry, } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:3000/api/v1'
  headers = new HttpHeaders({
    'content-type': 'application/json',

  })

  status!: Observable<any>;
  isLoggedIn!: boolean;

  @Output() IsLoggedInEmiter: EventEmitter<any> = new EventEmitter<any>();


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    this.status = this.httpClient.post(`${this.baseUrl}/login`,
      JSON.stringify({ username: username, password: password }),
      { headers: this.headers })
    console.log(status)

    if (!status) {
      this.IsLoggedInEmiter.emit(this.isLoggedIn = true)
      return this.status
    }
    return this.status
  }

  register(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`,
      JSON.stringify({ username: username, password: password }),
      { headers: this.headers })
  }

  emitStatus() {
    return this.IsLoggedInEmiter;
  }



}
