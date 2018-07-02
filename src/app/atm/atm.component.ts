import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {


  constructor(private _service : BankService) {
    this.balanceTotal = _service.account.balanceTotal;
  }
  
balanceTotal: number;  

deposit() {
  this._service.deposit20();
  console.log(document.getElementById('test'));
  document.getElementById('test').innerHTML = `Congrats, Henry! You successfuly deposited $20. <br> Your new balance is ${this._service.account.balanceTotal}`;
}
}
