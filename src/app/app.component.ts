import { Component } from '@angular/core';

import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  balanceTotal: number;
  constructor(private _service : BankService) {
    // this.balanceTotal = this._service.account.balanceTotal;
  };
  
  bankName = 'Bank of San Diego';
  name = 'Austin';
  
  // testFunction() {
  // return this._service.deposit();
  // }
  
}

