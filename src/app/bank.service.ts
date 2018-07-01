import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { };
  
  test() {
    console.log("hello");
  }
}
