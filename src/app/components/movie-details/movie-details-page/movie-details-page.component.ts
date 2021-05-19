import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesProviderService } from '../../../services/movies-provider.service';
import { Movie } from '../../../dto/Movie';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constants } from '../dto/Constants';

@Component({
  selector: 'app-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit{

  private movie$!: Observable<Movie | null>;
  private showLoading = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesProviderService
  ) {
  }

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.movieService.getMovie$(params.get(Constants.MOVIE_URL_PARAMETER));
        }
      ));
  }

  public getShowLoading(): boolean {
    return this.showLoading;
  }

  public getMovie$(): Observable<Movie | null> {
    return this.movie$;
  }

  public onLoad(): void {
    this.showLoading = false;
  }

}
