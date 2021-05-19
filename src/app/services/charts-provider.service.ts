import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chart } from '../dto/Chart';

@Injectable({
  providedIn: 'root'
})
export class ChartsProviderService{

  private moviesEndpoint = 'https://moviesss.azurewebsites.net/api/Chart/all';
  private mockedMoviesFile = 'https://moviesss.azurewebsites.net/api/Chart/all';

  constructor(private client: HttpClient) {
  }

  public charts$(): Observable<Chart[]> {
    return this.client.get<Chart[]>(this.getUrl(), { params: { max: '100', offset: '0' } }).pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

  private getUrl(): string {
    return isDevMode() ? this.mockedMoviesFile : this.moviesEndpoint;
  }
}
