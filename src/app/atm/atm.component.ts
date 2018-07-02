import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {


  constructor(private _service : BankService) {
    this.balanceTotal = this._service.account.balanceTotal;
  }
  
balanceTotal: number = 0;  
name: string = 'Austin';

deposit() {
  this._service.deposit2();
  console.log(this.balanceTotal);
}
}
