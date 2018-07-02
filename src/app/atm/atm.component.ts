import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

balance: number;
  constructor(private _service : BankService) {
    this.balance = this._service.balance;
  }

deposit() {
  this.balance = this.balance + 20;
}
}
