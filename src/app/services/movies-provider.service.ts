import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../dto/Movie';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService{
  private moviesEndpoint = '/test';
  private mockedMoviesFile = './config/movies-mock.json';

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

  public getMovie$(title: string | null): Observable<Movie | undefined> {
    return title ? this.movies$().pipe(map((movies: Movie[]) => movies.find(movie => movie.title === title))) : of(undefined);
  }

  private getUrl(): string {
    return isDevMode() ? this.mockedMoviesFile : this.moviesEndpoint;
  }
}
