import { Component } from '@angular/core';
import { BankService } from '../bank.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private _service : BankService) { }
  
  submit() {
    this._service.submit();
  }
}