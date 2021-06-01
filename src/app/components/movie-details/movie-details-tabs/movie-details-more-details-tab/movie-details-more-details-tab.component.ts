import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../../dto/Movie';
import { Constants } from '../../dto/Constants';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-movie-details-more-details-tab',
  templateUrl: './movie-details-more-details-tab.component.html',
  styleUrls: ['./movie-details-more-details-tab.component.scss']
})
export class MovieDetailsMoreDetailsTabComponent implements OnInit {

  @Input() movie!: Movie;

  public boxOfficePanelName = 'Box Office';
  public runTimePanelName = 'Runtime';
  public releaseDatePanelName = 'Release Date';
  public yearPanelName = 'Year';

  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    this.client.get(this.movie.posterUrl).pipe(catchError(err => {
      this.movie.posterUrl = Constants.NOT_FOUND_IMAGE_WHITE;
      return EMPTY;
    }));
  }

  public showBoxOffice(): boolean {
    return !!(this.movie && this.movie.boxOffice && this.movie.boxOffice.length > 0);
  }

  public showCountries(): boolean {
    return this.movie && this.movie.countries && this.movie.countries.length > 0;
  }

  public showRuntime(): boolean {
    return !!(this.movie && this.movie.runtime && this.movie.runtime.length > 0);
  }
  public showReleaseDate(): boolean {
    return !!(this.movie && this.movie.releaseDate && this.movie.releaseDate.length > 0);
  }

  public showYear(): boolean {
    return !!(this.movie && this.movie.year);
  }

  public showLanguages(): boolean {
    return this.movie && this.movie.languages && this.movie.languages.length > 0;
  }

  public showGenres(): boolean {
    return this.movie && this.movie.genres && this.movie.genres.length > 0;
  }
}
