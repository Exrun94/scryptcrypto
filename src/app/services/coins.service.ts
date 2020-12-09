import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICoins } from '../interfaces';
import { environment as ENV } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<ICoins[]> {
    return this.httpClient.get<ICoins[]>(`${ENV.baseUrl}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
  }
}
