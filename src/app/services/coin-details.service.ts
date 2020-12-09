import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as ENV } from '../../environments/environment'
import { ICoinsDetails, IMarketData } from '../interfaces'




@Injectable({
  providedIn: 'root'
})
export class CoinDetailsService {

  constructor(private httpClient: HttpClient) { }


  public getCurrencyDetails(id: string): Observable<ICoinsDetails> {
    return this.httpClient.get<ICoinsDetails>(`${ENV.baseUrl}coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false`)
  }

  public getMarketData(id: string): Observable<IMarketData[]> {
    return this.httpClient.get<IMarketData[]>(`${ENV.baseUrl}/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C%207d%2C%2030d%2C%201y`)
  }

}
