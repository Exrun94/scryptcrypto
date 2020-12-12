import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IExchangeRates } from '../interfaces'
import { Observable } from 'rxjs';
import { environment as ENV } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<IExchangeRates> {
    return this.httpClient.get<IExchangeRates>(`${ENV.baseUrl}exchange_rates`)
  }
}
