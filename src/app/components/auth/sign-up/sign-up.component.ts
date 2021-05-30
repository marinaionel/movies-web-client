import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Constants } from '../dto/Constants';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../styling/auth.scss']
})
export class SignUpComponent implements OnInit{

  public appIcon = Constants.APP_ICON;
  public userIcon = Constants.USER_ICON;
  public passwordIcon = Constants.PASSWORD_ICON;
  public googleIcon = Constants.GOOGLE_ICON;
  public email!: string;
  public password1!: string;
  public password2!: string;

  constructor(public authService: AuthService, private validation: ValidationService ) {
  }

  ngOnInit(): void {
  }

  public validateEmail(): boolean {
    return this.validation.validateEmail(this.email);
  }

  public validatePassword1(): boolean {
    return this.validation.validatePassword(this.password1);
  }

  public validatePassword2(): boolean {
    return this.validation.validatePassword(this.password2);
  }

  public validatePasswords(): boolean {
    return this.password1 === this.password2;
  }

  public loginValidator(): boolean {
    return this.validatePasswords() && this.validateEmail();
  }
}
