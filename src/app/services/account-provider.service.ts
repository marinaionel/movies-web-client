import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EMPTY, Observable } from 'rxjs';
import { CrewMember } from '../dto/CrewMember';
import { Routes } from '../dto/Routes';
import { catchError } from 'rxjs/operators';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class AccountProviderService {

  constructor(private client: HttpClient, private auth: AuthService) { }

  public getUser$(): Observable<User> {
    return this.client.get<User>(Routes.GET_ACCOUNT)
      .pipe(catchError((error: HttpResponse<User>) => {
        if (error.status === 401) {
          this.auth.SignOut();
        }
        console.log(error);
        return EMPTY;
      }));
  }
}
