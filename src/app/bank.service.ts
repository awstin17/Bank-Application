import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private router : Router) { };
  
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
  
  withdrawAmount: number;
  depositAmount: number;
  name: string = "";
  email: string = "";
  message: string = "";
  makeAppear: string;
  
  deposit20() {
    this.makeAppear = "deposit";
    this.account.balanceTotal = this.account.balanceTotal + this.depositAmount;
  }
  
  withdraw20() {
    
    if(this.account.balanceTotal >= this.withdrawAmount) {
    this.makeAppear = "withdraw";
    this.account.balanceTotal = this.account.balanceTotal - this.withdrawAmount;
    }
        
    else {
    this.makeAppear = "nomoney"
    }
  }
  
  balance() { this.makeAppear = "balance";
  }
  
  transactions() { this.makeAppear = "transactions";
  }
  
  submit() {
    alert(`name = ${this.name}
email = ${this.email}
message = ${this.message}

// Everything submitted properly :). We'll get back to you as soon as we can!`);

this.router.navigate([`./atm`]);
  }
  
  resetMakeAppear() {
    this.makeAppear = "";
    this.depositAmount = 0;
    this.withdrawAmount = 0;
  }
}
