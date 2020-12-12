import { Component, OnInit } from '@angular/core';
import { IExchanges } from '../interfaces';
import { ExchangesService } from '../services/exchanges.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  constructor(private exchangesServices: ExchangesService) { }

  exchanges: IExchanges[] = [];

  ngOnInit(): void {
    this.exchangesServices.getData().subscribe((data) => {
      // console.log(data)
      this.exchanges = data;
    })
  }

}
