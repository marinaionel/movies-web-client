import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesProviderService } from '../../../services/movies-provider.service';
import { Movie } from '../../../dto/Movie';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constants } from '../dto/Constants';
import { SpinnerOverlayService } from '../../../services/spinner-overlay.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit{

  private movie$!: Observable<Movie | null>;
  private secureMovieURL!: SafeResourceUrl;
  private starURL = Constants.STAR;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesProviderService,
    private overlayService: SpinnerOverlayService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.overlayService.getSpinner$().next(true);
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.movieService.getMovie$(params.get(Constants.MOVIE_URL_PARAMETER));
        }
      ));
    this.movie$.subscribe((movie: Movie | null) => {
      if (movie) {
        this.secureMovieURL = this.secureYoutubeTrailerURL(movie?.trailerYoutubeVideoId);
      }
    });
  }

  public getMovie$(): Observable<Movie | null> {
    return this.movie$;
  }

  public onLoad(): void {
    this.overlayService.getSpinner$().next(false);
  }

  private secureYoutubeTrailerURL(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(Constants.YTB_IFRAME_BASE_URL + id);
  }

  public getSecureMovieURL(): SafeResourceUrl{
    return this.secureMovieURL;
  }

  public getStarURL(): string{
    return this.starURL ;
  }
}
