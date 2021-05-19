import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { Movie } from '../../dto/Movie';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChartCarouselComponent } from '../chart-carousel/chart-carousel.component';
import { Chart } from '../../dto/Chart';
import { Router } from '@angular/router';
import { AnimationType } from '../chart-carousel/animations/carousel.animations';
import { ChartsProviderService } from '../../services/charts-provider.service';
import { ChartSlide } from '../../dto/ChartSlide';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @ViewChild(ChartCarouselComponent) carousel: ChartCarouselComponent;

  private readonly destroy$: Subject<void>;

  public charts: Chart[] = [];
  public animationType = AnimationType.Scale;
  public movies: Movie[] = [];
  public slides: ChartSlide[] = [];

  constructor(private chartsProvider: ChartsProviderService, private router: Router) {
    this.carousel = new ChartCarouselComponent(router);
    this.destroy$ = new Subject();
  }

  ngOnInit(): void {
    this.chartsProvider.charts$().pipe(takeUntil(this.destroy$)).subscribe(
      charts => {
        if (charts.length !== 0) {
          this.charts = charts;
          console.warn(this.charts);
          this.charts.forEach(chart => this.movies.push(...chart.movies));
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
