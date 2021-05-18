import { Injectable } from '@angular/core';
import { MovieDetailsTab } from '../dto/MovieDetailsTab';
import { Constants } from '../dto/Constants';
import { Observable, of } from 'rxjs';
import { MovieDetailsPlotTabComponent } from '../movie-details-plot-tab/movie-details-plot-tab.component';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';

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
        icon: '/assets/plot-icon.png',
        orderNumber: 0,
        component: MovieDetailsPlotTabComponent
      },
      {
        title: Constants.MOVIE_DETAILS,
        active: false,
        icon: '/assets/details-icon.png',
        orderNumber: 1,
        component: SignInComponent
      },
      {
        title: Constants.MOVIE_CREW,
        active: false,
        icon: '/assets/crew-icon.png',
        orderNumber: 2,
        component: SignInComponent
      },
      {
        title: Constants.MOVIE_STATS,
        active: false,
        icon: '/assets/stats-icon.png',
        orderNumber: 4,
        component: SignInComponent
      },
      {
        title: Constants.MOVIE_COMMENTS,
        active: false,
        icon: '/assets/comment-icon.png',
        orderNumber: 3,
        component: SignInComponent
      }
    ];
  }

  public tabs$(): Observable<MovieDetailsTab[]> {
    return of(this.tabs.sort(((a, b) => a.orderNumber < b.orderNumber ? -1 : (a.orderNumber > b.orderNumber) ? 1 : 0)));
  }

  public getTabByOrderNumber(orderNumber: number): MovieDetailsTab {
    let foundTab: any;
    this.tabs$().subscribe((tabs: MovieDetailsTab[]) => {
      foundTab = tabs.find(tab => tab.orderNumber === orderNumber);
    });
    return foundTab;
  }
}
