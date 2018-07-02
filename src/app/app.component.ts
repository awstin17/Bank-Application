import { Component } from '@angular/core';

import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  balance: number;
  constructor(private _service : BankService) {
    this.balance = this._service.balance;
  };
  
  bankName = 'Bank of San Diego';
  
  testFunction() {
  return this._service.deposit();
  }
  
}

