import { Component } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private _service : BankService) { }

}
