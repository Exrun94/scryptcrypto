import { Component, OnInit, OnChanges } from '@angular/core';
import { ICoinsDetails, IMarketData } from '../interfaces';
import { CoinDetailsService } from '../services';
import { Router } from '@angular/router'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {

  coin: any;
  public currentCoin: string = "";
  coinsData!: ICoinsDetails;
  marketData!: IMarketData[];

  constructor(
    private coinDetailService: CoinDetailsService, 
    private router: Router,
    ){}



  ngOnInit(): void {
    this.currentCoin = this.router.url.split('/')[2]

    this.coinDetailService.getCurrencyDetails(this.currentCoin).subscribe((data) => {
      console.log(data)
      this.coinsData = data
    })

    this.coinDetailService.getMarketData(this.currentCoin).subscribe((data)=> {
      console.log(data)
      this.marketData = data;
    })

  }

  ngOnChanges() {
  }




}
