import { Component, OnInit } from '@angular/core';
import { ICoins } from '../interfaces';
import { CoinsService } from '../services/coins.service';


@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  coinsData: ICoins[] = [];
  p: number = 1;
  currency: any;
  key: any;
  reverse: boolean = false;

  constructor(private coinsService: CoinsService) { }


  ngOnInit(): void {
    this.coinsService.getData().subscribe((data) => {
      console.log(data)
      this.coinsData = data;
    })
  }

  currencySearchBar() {
    if(this.currency == '') {
     this.ngOnInit();
    } else {
      this.coinsData = this.coinsData.filter(res => {
        return res.name.toLowerCase().match(this.currency.toLowerCase());
      })
    }
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }



}
