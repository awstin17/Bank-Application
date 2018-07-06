import { Injectable } from '@angular/core';
// import { AtmComponent } from './atm/atm.component'

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { };
  
  account: any = {
    fname: 'first name',
    lname: 'last name',
    balanceTotal: 0,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    age: 0,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };
  
  test() {
    alert('hello');
  }
  
  deposit20(a) {
    
    this.account.balanceTotal = this.account.balanceTotal + 20;
    
    if(a === 1) {
    document.getElementById('view').innerHTML = `Congrats, Henry! You successfuly deposited $20. <br> Your new balance is ${this.account.balanceTotal}`;
    }
  
    else {
    let tellerDeposit = document.getElementsByTagName("p")[0];
    tellerDeposit.innerHTML = `Congrats teller, you successfully deposited $20 to Henry's account. <br> Their new balance is ${this.account.balanceTotal}`;
    console.log("this is running");
    }
  }
  
  withdraw20() {
    if(this.account.balanceTotal >= 20) {
      this.account.balanceTotal = this.account.balanceTotal - 20;
      document.getElementById('atmview').innerHTML = `Congrats, Henry! You successfuly withdrew $20. <br> Your new balance is ${this.account.balanceTotal}`;
    }
    else {
      document.getElementById('atmview').innerHTML = "You ain't got cash, punk. Now SCRAM";
    }
  }
  
  balance() {
  document.getElementById('view').innerHTML = `Your account balance is ${this.account.balanceTotal}`;
  }

  transactions() {
    let section = document.getElementById('view');
    section.innerHTML = "";
  
    for(let i = 0; i < this.account.transactions.length; i++) {
      for(let property in this.account.transactions[i]) {
        let variable = document.createTextNode(` ${property} : ${this.account.transactions[i][property]}`);
        section.appendChild(variable);
        section.appendChild(document.createElement("BR"));
      
        if(property === 'currency') {
          section.appendChild(document.createElement("BR"));
        }
      }
    }
  }
}
