import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Constants } from '../components/auth/dto/Constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  public signInPath = Constants.SIGN_IN_URL;

  constructor(public authService: AuthService, public router: Router) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate([this.signInPath]);
    }
    return true;
  }
}
