import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

balanceTotal: number 0;
  constructor(private _service : BankService) {
    this.balanceTotal = this._service.balanceTotal;
  }
  
name: 'Austin';

deposit() {
  this._service.deposit2();
}
}
