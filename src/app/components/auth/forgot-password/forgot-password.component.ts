import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Constants } from '../dto/Constants';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../styling/auth.scss'],
})
export class ForgotPasswordComponent implements OnInit{

  public appIcon = Constants.APP_ICON;
  public userIcon = Constants.USER_ICON;
  public email!: string;

  constructor(public authService: AuthService, private validation: ValidationService) {
  }

  ngOnInit(): void {
  }

  public validateEmail(): boolean {
    return this.validation.validateEmail(this.email);
  }
}
