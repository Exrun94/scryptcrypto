import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { DetailsComponent } from './coin-details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangesComponent } from './exchanges/exchanges.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'crypto-list',
    component: CryptoListComponent,
  },
  {
    path: 'crypto-list/:id',
    component: DetailsComponent,
  },
  {
    path: 'exchanges',
    component: ExchangesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
