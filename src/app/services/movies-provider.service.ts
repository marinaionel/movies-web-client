import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../dto/Movie';
import { catchError } from 'rxjs/operators';
import { Routes } from '../dto/Routes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService{

  constructor(private client: HttpClient, private auth: AuthService) {
  }

  public getMovie$(idString: string | null): Observable<Movie | null> {
    return this.client.get<Movie>(Routes.GET_MOVIE_BY_ID + idString)
      .pipe(catchError((error: HttpResponse<Movie>) => {
        if (error.status === 401) {
          this.auth.SignOut();
        }
        console.log(error);
        return this.getMockedMovie();
      }));
  }

  private getMockedMovie(): Observable<Movie> {
    return this.client.get<Movie>(Routes.GET_MOCKED_MOVIE);
  }
}
