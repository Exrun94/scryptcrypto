import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoins } from '../interfaces';
import { CoinsService } from '../services';


@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit, OnDestroy {


  coinsData: ICoins[] = [];
  p: number = 1;
  currency: any;
  key: any;
  reverse: boolean = false;
  coin: any;

  private _dataSubscription: any;

  constructor(
    private coinsService: CoinsService,
    private router: Router,
    private route: ActivatedRoute,
    ){}


  ngOnInit(): void {
    this._dataSubscription = this.coinsService.getData().subscribe((data) => {
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

  coinDetails(id: any) {
    this.router.navigate([id], { relativeTo: this.route })
  }


  ngOnDestroy(){
    this._dataSubscription.unsubscribe()
  }



}
