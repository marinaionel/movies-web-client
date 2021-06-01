import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Routes } from '../dto/Routes';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CrewMember } from '../dto/CrewMember';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrewMemberProviderService {

  constructor(private client: HttpClient, private auth: AuthService) { }

  public getCrewMember$(idString: string | null): Observable<CrewMember | null> {
    return this.client.get<CrewMember>(Routes.GET_CREW_MEMBER_BY_ID + idString)
      .pipe(catchError((error: HttpResponse<CrewMember>) => {
        if (error.status === 401) {
          this.auth.SignOut();
        }
        console.log(error);
        return EMPTY;
      }));
  }
}
