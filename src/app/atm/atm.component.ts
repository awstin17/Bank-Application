import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {


  constructor(private _service : BankService) {}

  deposit() {
    this._service.deposit20(1);
  }

  withdraw() {
    this._service.withdraw20(1);
  }
  
  balance() {
    this._service.balance();
  }
  
  transactions() {
    this._service.transactions(1);
  }
}
