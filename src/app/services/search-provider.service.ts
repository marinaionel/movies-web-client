import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Routes } from '../dto/Routes';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../dto/Movie';
import { CrewMember } from '../dto/CrewMember';

@Injectable({
  providedIn: 'root'
})
export class SearchProviderService {

  private searchEndpoint = Routes.GET_SEARCH;

  constructor(private client: HttpClient, private auth: AuthService) {
  }

  public getSearchedMovies$(searchString: string): Observable<Movie[]> {
    return this.client.get<Movie[]>(
      this.searchEndpoint,
      {
        params: { q: searchString, type: '0', max: '10', offset: '0' },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401){
            console.log(error);
            this.auth.SignOut();
          }
          return of([]);
        })
      );
  }

  public getSearchedCrewMembers$(searchString: string): Observable<CrewMember[]> {
    return this.client.get<CrewMember[]>(
      this.searchEndpoint,
      {
        params: { q: searchString, type: '1', max: '10', offset: '0' },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401){
            console.log(error);
            this.auth.SignOut();
          }
          return of([]);
        })
      );
  }
}
