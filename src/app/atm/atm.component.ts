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
  document.getElementById('test').innerHTML = `Congrats, Henry! You successfuly deposited $20. <br> Your new balance is ${this._service.account.balanceTotal}`;
}

withdraw() {
  if(this._service.account.balanceTotal >= 20) {
    this._service.withdraw20();
    document.getElementById('test').innerHTML = `Congrats, Henry! You successfuly withdrew $20. <br> Your new balance is ${this._service.account.balanceTotal}`;
  }
  else {
    document.getElementById('test').innerHTML = "You ain't got cash, punk. Now SCRAM";
  }
}

balance() {
  document.getElementById('test').innerHTML = `Your account balance is ${this._service.account.balanceTotal}`;
}

transactions() {
  let section = document.getElementById('test');
  section.innerHTML = "";
  
  for(let i = 0; i < this._service.account.transactions.length; i++) {
    for(let property in this._service.account.transactions[i]) {
      let variable = document.createTextNode(` ${property} : ${this._service.account.transactions[i][property]}`);
      section.appendChild(variable);
      section.appendChild(document.createElement("BR"));
      
      if(property === 'currency') {
        section.appendChild(document.createElement("BR"));
      }
    }
  }
}
}
