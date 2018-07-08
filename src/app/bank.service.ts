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
  
  name: string = "";
  email: string = "";
  message: string = "";
  
  deposit20(a) {
    
    this.account.balanceTotal = this.account.balanceTotal + 20;
    
    if(a === 1) {
    document.getElementById('atmview').innerHTML = `Congrats, Henry! You successfuly deposited $20. <br> Your new balance is ${this.account.balanceTotal}`;
    }
  
    else {
    // document.getElementById('customerinfo').classList.remove("disappear");
    // document.getElementById('transactions').classList.add("disappear");
    document.getElementById("beforeinformation").innerHTML = `Congrats teller, you successfully deposited $20 to Henry's account. <br> Their new balance is ${this.account.balanceTotal}`;
    }
  }
  
  withdraw20(b) {
      
        if(b === 0 && this.account.balanceTotal >=20) {
          this.account.balanceTotal = this.account.balanceTotal - 20;
          // document.getElementById('customerinfo').classList.remove("disappear");
          // document.getElementById('transactions').classList.add("disappear");
          document.getElementById("beforeinformation").innerHTML =  `Congrats, teller, you successfuly withdrew $20 from Henry's account. <br> Their new balance is ${this.account.balanceTotal}`;
        }  
        
        else if(b ===0) {
          // document.getElementById('customerinfo').classList.remove("disappear");
          // document.getElementById('transactions').classList.add("disappear");
          document.getElementById("beforeinformation").innerHTML = "This punk don't got cash. Kick 'em out!";
        }
        
        if(b === 1 && this.account.balanceTotal >=20) {
          this.account.balanceTotal = this.account.balanceTotal - 20;
          document.getElementById("atmview").innerHTML = `Congrats, Henry! You successfuly withdrew $20. <br> Your new balance is ${this.account.balanceTotal}`;
        }
         
        else if(b === 1) {
          document.getElementById('atmview').innerHTML = "You ain't got cash, punk. Now SCRAM";
        }
  }
  
  balance() {
  document.getElementById('atmview').innerHTML = `Your account balance is ${this.account.balanceTotal}`;
  }

  transactions(c) {
    
    // let section;
    
    // if(c === 1) {
    // section = document.getElementById('atmview');
    // }
    
    // else {
    //   section = document.getElementById('transactions');
    //   // section.classList.remove("disappear");
    //   let customerInfo = document.getElementById('customerinfo');
    //   // customerInfo.classList.add("disappear");
    // }
    
    // section.innerHTML = "";
  
    // for(let i = 0; i < this.account.transactions.length; i++) {
    //   for(let property in this.account.transactions[i]) {
    //     let variable = document.createTextNode(` ${property} : ${this.account.transactions[i][property]}`);
    //     section.appendChild(variable);
    //     section.appendChild(document.createElement("BR"));
      
    //     if(property === 'currency') {
    //       section.appendChild(document.createElement("BR"));
    //     }
    //   }
    // }
  }
  
  submit() {
    alert(`name = ${this.name}
email = ${this.email}
message = ${this.message}

Everything submitted properly :). We'll get back to you as soon as we can!`);

this.router.navigate([`./atm`]);
  }
}
