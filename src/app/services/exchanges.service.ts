import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExchanges } from '../interfaces';
import { environment as ENV } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ExchangesService {


  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<IExchanges[]> {
    return this.httpClient.get<IExchanges[]>(`${ENV.baseUrl}exchanges?per_page=15`)
  }
}
