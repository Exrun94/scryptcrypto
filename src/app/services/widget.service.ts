import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  baseUrl: string = 'http://localhost:3000/api/v1'




  constructor(private httpClient: HttpClient) { }

  createWidgets(username: any, currency: any, value: any, price: any, imageUrl: any): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' })
    return this.httpClient.post(`${this.baseUrl}/widgets`,
      JSON.stringify({ username: username, currency: currency, value: value, price: price, image: imageUrl }),
      { headers: headers }

    )
  }

  getWidgets(username: string): Observable<any> {
    const headers = new HttpHeaders({ 'user': username, })

    return this.httpClient.get(`${this.baseUrl}/widgets`, { headers: headers })
  }

  onDelete(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/widgets/${id}`)
  }



}
