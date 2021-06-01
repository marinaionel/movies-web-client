import { Injectable } from '@angular/core';
import { MovieDetailsTab } from '../components/movie-details/dto/MovieDetailsTab';
import { Constants } from '../components/movie-details/dto/Constants';
import { Observable, of } from 'rxjs';
import { MovieDetailsPlotTabComponent } from '../components/movie-details/movie-details-tabs/movie-details-plot-tab/movie-details-plot-tab.component';
import { SignInComponent } from '../components/auth/components/sign-in/sign-in.component';
import { MovieDetailsReviewsTabComponent } from '../components/movie-details/movie-details-tabs/movie-details-reviews-tab/src/movie-details-reviews-tab.component';
import { MovieDetailsMoreDetailsTabComponent } from '../components/movie-details/movie-details-tabs/movie-details-more-details-tab/movie-details-more-details-tab.component';
import { MovieDetailsCrewMembersTabComponent } from '../components/movie-details/movie-details-tabs/movie-details-crew-members-tab/src/movie-details-crew-members-tab.component';
import { CrewDetailsDescriptionTabComponent } from '../components/crew-details/crew-details-tabs/crew-details-description-tab/crew-details-description-tab.component';
import { CrewDirectorTabComponent } from '../components/crew-details/crew-details-tabs/crew-director-tab/crew-director-tab.component';
import { CrewActorTabComponent } from '../components/crew-details/crew-details-tabs/crew-actor-tab/crew-actor-tab.component';
import { MovieDetailsChartTabComponent } from '../components/movie-details/movie-details-tabs/movie-details-chart-tab/movie-details-chart-tab.component';
import { CrewStatsTabComponent } from '../components/crew-details/crew-details-tabs/crew-stats-tab/crew-stats-tab.component';

@Injectable({
  providedIn: 'root'
})
export class TabsProviderService{

  private readonly tabs: MovieDetailsTab[];
  private readonly crewTabs: MovieDetailsTab[];

  /* Icons made by https://www.freepik.com" Freepik
   from https://www.flaticon.com/ Flaticon*/

  constructor() {
    this.tabs = [
      {
        title: Constants.MOVIE_PLOT,
        active: true,
        icon: './assets/plot-icon.png',
        orderNumber: 0,
        component: MovieDetailsPlotTabComponent
      },
      {
        title: Constants.MOVIE_DETAILS,
        active: false,
        icon: './assets/details-icon.png',
        orderNumber: 1,
        component: MovieDetailsMoreDetailsTabComponent
      },
      {
        title: Constants.MOVIE_CREW,
        active: false,
        icon: './assets/crew-icon.png',
        orderNumber: 2,
        component: MovieDetailsCrewMembersTabComponent
      },
      {
        title: Constants.MOVIE_STATS,
        active: false,
        icon: './assets/stats-icon.png',
        orderNumber: 4,
        component: MovieDetailsChartTabComponent
      },
      {
        title: Constants.MOVIE_REVIEWS,
        active: false,
        icon: './assets/comment-icon.png',
        orderNumber: 3,
        component: MovieDetailsReviewsTabComponent
      }
    ];

    this.crewTabs = [
      {
        title: Constants.CREW_DESCRIPTION,
        active: true,
        icon: './assets/user-icon.png',
        orderNumber: 0,
        component: CrewDetailsDescriptionTabComponent
      },
      {
        title: Constants.CREW_DIRECTOR,
        active: false,
        icon: './assets/crew-icon.png',
        orderNumber: 1,
        component: CrewDirectorTabComponent
      },
      {
        title: Constants.CREW_ACTOR,
        active: false,
        icon: './assets/actor.png',
        orderNumber: 2,
        component: CrewActorTabComponent
      },
      {
        title: Constants.CREW_STATS,
        active: false,
        icon: './assets/stats-icon.png',
        orderNumber: 3,
        component: CrewStatsTabComponent
      }
    ];
  }

  public tabs$(): Observable<MovieDetailsTab[]> {
    return of(this.tabs.sort(((a, b) => a.orderNumber < b.orderNumber ? -1 : (a.orderNumber > b.orderNumber) ? 1 : 0)));
  }

  public crewTabs$(): Observable<MovieDetailsTab[]> {
    return of(this.crewTabs.sort(((a, b) => a.orderNumber < b.orderNumber ? -1 : (a.orderNumber > b.orderNumber) ? 1 : 0)));
  }

  public getTabByOrderNumber(orderNumber: number): MovieDetailsTab {
    let foundTab: any;
    this.tabs$().subscribe((tabs: MovieDetailsTab[]) => {
      foundTab = tabs.find(tab => tab.orderNumber === orderNumber);
    });
    return foundTab;
  }

  public getCrewTabByOrderNumber(orderNumber: number): MovieDetailsTab {
    let foundTab: any;
    this.crewTabs$().subscribe((tabs: MovieDetailsTab[]) => {
      foundTab = tabs.find(tab => tab.orderNumber === orderNumber);
    });
    return foundTab;
  }
}
