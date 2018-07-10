import { Component } from '@angular/core';
import {BankService} from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(private _service : BankService) { }
  
  withdraw() {
    this._service.withdraw20();
    document.getElementById("customerinfo").style.display = 'inline';
  }
  
  deposit() {
    this._service.deposit20();
    document.getElementById("customerinfo").style.display = 'inline';
  }
  
  transactions() {
    this._service.transactions();
    document.getElementById("customerinfo").style.display = 'none';
  }

}
