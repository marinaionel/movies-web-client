import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { Movie } from '../../dto/Movie';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChartCarouselComponent } from '../chart-carousel/chart-carousel.component';
import { ChartSlide } from '../../dto/ChartSlide';
import { Chart } from '../../dto/Chart';
import { Router } from '@angular/router';
import { AnimationType } from '../chart-carousel/animations/carousel.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @ViewChild(ChartCarouselComponent) carousel: ChartCarouselComponent;

  private readonly destroy$: Subject<void>;
  private slides: ChartSlide[] = [];

  public animationType = AnimationType.Scale;
  public movies: Movie[] = [];
  public charts: Chart[] = [];

  constructor(private moviesProvider: MoviesProviderService, private router: Router) {
    this.carousel = new ChartCarouselComponent(router);
    this.destroy$ = new Subject();
  }

  ngOnInit(): void {
    this.moviesProvider.movies$().pipe(takeUntil(this.destroy$)).subscribe(
      movies => {
        if(movies.length !== 0) {
          this.movies = movies;
          this.slides = [
            {
              movies: [this.movies[0], this.movies[1], this.movies[2], this.movies[3],
                this.movies[4], this.movies[5], this.movies[6], this.movies[7]]
            },
            {
              movies: [this.movies[8], this.movies[9], this.movies[10], this.movies[11],
                this.movies[12], this.movies[13], this.movies[14], this.movies[15]]
            },
            { movies: [this.movies[2]] }
          ];
          this.charts = [
            {
              title: 'Trending Now',
              slides: this.slides
            },
            {
              title: 'Most Viewed',
              slides: this.slides
            }
          ];
        } else {
          this.showError();
        }
      }
    );
  }

  private showError(): void {
    window.alert('Movies are not available.');
  }
}
