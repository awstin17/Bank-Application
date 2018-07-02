import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { };
  
  test() {
    return "wheeee";
  }
}
