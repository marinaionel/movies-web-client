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

  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    this.client.get(this.movie.posterUrl).pipe(catchError(err => {
      this.movie.posterUrl = Constants.NOT_FOUND_IMAGE_WHITE;
      return EMPTY;
    }));
  }
}
