import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { DetailsComponent } from './coin-details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crypto-list',
    component: CryptoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crypto-list/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'exchanges',
    component: ExchangesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
