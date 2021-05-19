import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../dto/Movie';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService{
  private moviesEndpoint = './config/movies-mock.json';
  private mockedMoviesFile = './config/movies-mock.json';
  private getMovieEndpoint = 'https://moviesss.azurewebsites.net/api/Movie/';

  constructor(private client: HttpClient) {
  }

  public movies$(): Observable<Movie[]> {
    return this.client.get<Movie[]>(this.getUrl()).pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

  public getMovie$(idString: string | null): Observable<Movie | null>{
    return this.client.get<Movie>(this.getMovieEndpoint + idString).pipe(catchError(error => {
      console.log(error);
      return of(null);
    }));
  }

  private getUrl(): string {
    return isDevMode() ? this.mockedMoviesFile : this.moviesEndpoint;
  }
}
