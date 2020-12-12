import { Component, OnInit } from '@angular/core';
import { CoinDetailsService, ShowcaseService } from '../services';
import { ICoins, ICoinsDetails } from '../interfaces'
import * as _ from 'lodash'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coinsData: ICoins[] = [];
  coinDetails: ICoinsDetails[] = []
  showSpinner: boolean = true;


  constructor(private showcaseService: ShowcaseService, private coinDetailsService: CoinDetailsService) { }

  ngOnInit(): void {
    this.showcaseService.getData().subscribe(data => {
      this.coinsData = _.sampleSize(data, 3)

      _.forEach(this.coinsData, (val) => {
        this.coinDetailsService.getCurrencyDetails(val.id).subscribe(data => {
          this.showSpinner = false;
          this.coinDetails.push(data)
          // console.log(this.coinDetails)
        })
      })

    })


  }
}
