import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService, CoinsService, WidgetService } from '../services/';
import { IExchangeRates, ICoins } from '../interfaces'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rates!: IExchangeRates;
  user_widgets: any;
  currencies!: ICoins[];
  selected!: string;
  value!: number;


  constructor(
    private exchangeRates: ExchangeRatesService,
    private coinsService: CoinsService,
    private widgetService: WidgetService
  ) { }



  ngOnInit(): void {
    const user: any = localStorage.getItem('user')

    this.exchangeRates.getData().subscribe(data => {
      this.rates = data
      //console.log(this.rates)
    })
    this.coinsService.getData().subscribe((data) => {
      this.currencies = data;
      console.log(this.currencies)

    })

    this.widgetService.getWidgets(user).subscribe(data => {
      this.user_widgets = data;
      console.log(data)
    })
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value)
    this.value = +formData.value

    let imageUrl: string = '';

    for (let i of this.currencies) {
      if (i.name == this.selected) {
        imageUrl = i.image
      }
    }

    const user = localStorage.getItem('user')
    this.widgetService.createWidgets(user, this.selected, formData.value.price, formData.value.amount, imageUrl).subscribe(res => {
      this.ngOnInit()
    })
  }

  onChange(e: any) {
    console.log(e)
    this.selected = e;
  }

  onDelete(id: any) {
    this.widgetService.onDelete(id).subscribe(res => {
      //console.log(res)
      this.ngOnInit();
    })



  }








}
