import { Component } from '@angular/core';
import {BankService} from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(private _service : BankService) { }
  
  transactions() {
    this._service.transactions();
    document.getElementById("customerinfo").style.display = 'none';
  }

}
