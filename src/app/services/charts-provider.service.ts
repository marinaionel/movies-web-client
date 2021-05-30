import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chart } from '../dto/Chart';
import { Routes } from '../dto/Routes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChartsProviderService{

  private moviesEndpoint = Routes.GET_ALL_CHARTS;
  private mockedMoviesFile = Routes.GET_ALL_CHARTS;

  constructor(private client: HttpClient, private auth: AuthService) {
  }

  public charts$(): Observable<Chart[]> {
    return this.client.get<Chart[]>(
      this.getUrl(),
      {
        params: { max: Routes.GET_ALL_CHARTS_PARAM_MAX, offset: Routes.GET_ALL_CHARTS_PARAM_OFFSET },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401){
            this.auth.SignOut();
          }
          console.log(error);
          return of([]);
        })
      );
  }

  private getUrl(): string {
    return isDevMode() ? this.mockedMoviesFile : this.moviesEndpoint;
  }
}
