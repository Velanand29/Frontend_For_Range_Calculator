import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SavedRangeDataNiftyComponent } from './saved-range-data-nifty/saved-range-data-nifty.component';
import { SavedRangeDataBankniftyComponent } from './saved-range-data-banknifty/saved-range-data-banknifty.component';
import { SavedRangeDataFinniftyComponent } from './saved-range-data-finnifty/saved-range-data-finnifty.component';
import { SavedRangeDataStocksComponent } from './saved-range-data-stocks/saved-range-data-stocks.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SavedRangeDataNiftyComponent,
    SavedRangeDataBankniftyComponent,
    SavedRangeDataFinniftyComponent,
    SavedRangeDataStocksComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
