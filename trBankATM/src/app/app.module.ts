import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BankComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
