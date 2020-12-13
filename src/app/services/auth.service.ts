import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, retry, } from 'rxjs/operators';
import { Observable, of, throwError, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:3000/api/v1'
  headers = new HttpHeaders({
    'content-type': 'application/json',

  })

  isLoggedIn!: boolean;
  private status = new Subject<boolean>();


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`,
      JSON.stringify({ email: email, password: password }),
      { headers: this.headers }).pipe(
        catchError(this.handleError))
  }





  register(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`,
      JSON.stringify({ email: email, password: password }),
      { headers: this.headers })

  }

  getToken() {
    return localStorage.getItem('token')
  }

  authInfo() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  sendStatus(isLoggedIn: boolean) {
    this.status.next(isLoggedIn)
  }

  getStatus() {
    return this.status.asObservable();
  }

}
