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


  constructor(private coinsService: CoinsService) { }


  ngOnInit(): void {
    this.coinsService.getData().subscribe((data) => {
      console.log(data)
      this.coinsData = data;
    })
  }



}
