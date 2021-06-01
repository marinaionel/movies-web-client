import { Component, Input, OnInit } from '@angular/core';
import { ChartItem } from '../../../movie-details/movie-details-tabs/movie-details-chart-tab/ChartItem';
import { CrewMember } from '../../../../dto/CrewMember';
import { Movie } from '../../../../dto/Movie';

@Component({
  selector: 'app-crew-stats-tab',
  templateUrl: './crew-stats-tab.component.html',
  styleUrls: ['./crew-stats-tab.component.scss']
})
export class CrewStatsTabComponent implements OnInit{

  @Input() crewMember!: CrewMember;
  public chartItemsActor: ChartItem[] = [];
  public chartItemsDirector: ChartItem[] = [];

  public xAxisLabel = 'Movies';
  public yAxisLabel = 'Rating';

  public errorActor!: boolean;
  public errorDirector!: boolean;

  colorScheme = {
    domain: ['#F3A807', '#F3A807', '#F3A807']
  };

  constructor() {
  }

  ngOnInit(): void {
    this.errorActor = this.crewMember && this.crewMember.actedInMovies && this.crewMember.actedInMovies.length > 0;
    this.errorDirector = this.crewMember && this.crewMember.directedMovies && this.crewMember.directedMovies.length > 0;
    if (this.errorActor) {
      this.crewMember.actedInMovies.forEach((movie: Movie) => {
        if (movie.totalRatings && movie.totalRatings.averageRating){
          this.chartItemsActor.push({ name: movie.title, value: movie.totalRatings.averageRating });
        }
      });
    }

    if (this.errorDirector) {
      this.crewMember.directedMovies.forEach((movie: Movie) => {
        if (movie.totalRatings && movie.totalRatings.averageRating) {
          this.chartItemsDirector.push({ name: movie.title, value: movie.totalRatings.averageRating });
        }
      });
    }
  }
}
