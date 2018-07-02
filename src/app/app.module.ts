import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';

import { routes } from './app.router';
import { NavComponent } from './nav/nav.component';
import { BankService } from './bank.service'

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
