import { Component } from '@angular/core';

import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public _service : BankService) {
  };
  
  bankName = 'Bank of Austin';
}

