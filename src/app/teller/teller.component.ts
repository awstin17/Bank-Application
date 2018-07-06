import { Component } from '@angular/core';
import {BankService} from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(private _service : BankService) { }
  
  deposit() {
    this._service.deposit20(0);
  }

  withdraw() {
    this._service.withdraw20();
  }
  
  transactions() {
    this._service.transactions();
  }

}
