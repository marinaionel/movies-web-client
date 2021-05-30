import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService{

  constructor() { }

  public validateEmail(email: string | undefined): boolean {
    if (!email){
      return false;
    }
    const validator = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    return validator.test(email);
  }

  public validatePassword(password: string | undefined): boolean {
    if (!password){
      return false;
    }
    return password.length > 5;
  }
}
