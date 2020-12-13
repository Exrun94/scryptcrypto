import { CookieService } from "angular2-cookie/services/cookies.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './services/interceptor.service'
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { DetailsComponent } from './coin-details/details.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CryptoListComponent,
    DetailsComponent,
    LoadingSpinnerComponent,
    ExchangesComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CoreModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
