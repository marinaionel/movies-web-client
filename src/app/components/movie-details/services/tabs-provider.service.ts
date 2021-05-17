import { Injectable } from '@angular/core';
import { MovieDetailsTab } from '../dto/MovieDetailsTab';
import { Constants } from '../dto/Constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsProviderService{

  private readonly tabs: MovieDetailsTab[];

  /* Icons made by https://www.freepik.com" Freepik
   from https://www.flaticon.com/ Flaticon*/

  constructor() {
    this.tabs = [
      {
        title: Constants.MOVIE_PLOT,
        active: true,
        icon: '/assets/plot-icon.png'
      },
      {
        title: Constants.MOVIE_DETAILS,
        active: false,
        icon: '/assets/details-icon.png'
      },
      {
        title: Constants.MOVIE_CREW,
        active: false,
        icon: '/assets/crew-icon.png',
      },
      {
        title: Constants.MOVIE_STATS,
        active: false,
        icon: '/assets/stats-icon.png',
      }
    ];
  }

  public tabs$(): Observable<MovieDetailsTab[]> {
    return of(this.tabs);
  }
}
