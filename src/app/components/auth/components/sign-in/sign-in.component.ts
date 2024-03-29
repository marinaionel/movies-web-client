import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Constants } from '../../dto/Constants';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../styling/auth.scss'],
})
export class SignInComponent implements OnInit{

  public userIcon = Constants.USER_ICON;
  public passwordIcon = Constants.PASSWORD_ICON;
  public googleIcon = Constants.GOOGLE_ICON;
  public appIcon = Constants.APP_ICON;
  public email!: string;
  public password!: string;
  public emailError = false;
  public passwordError = false;

  public signUpPath = Constants.SIGN_UP_URL;
  public forgotPasswordPath = Constants.FORGOT_PASSWORD_URL;

  constructor(public authService: AuthService, private fb: FormBuilder, private validation: ValidationService) {
  }

  ngOnInit(): void {
  }

  // development
  public signInWithOneAccount(): void{
    this.authService.SignIn('test@email.com', '123456');
  }

  public validateEmail(): boolean {
    return this.validation.validateEmail(this.email);
  }

  public validatePassword(): boolean {
    return this.validation.validatePassword(this.password);
  }

  public loginValidator(): boolean {
    return this.validatePassword() && this.validateEmail();
  }

  public onSubmit(): void{
    if (this.loginValidator()){
      this.passwordError = false;
      this.emailError = false;
      this.authService.SignIn(this.email, this.password);
    }else{
      this.emailError = !this.validateEmail();
      this.passwordError = !this.validatePassword();
    }
  }
}
