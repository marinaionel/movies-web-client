import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { AnimationType, scaleIn, scaleOut } from './animations/carousel.animations';
import { Protocol } from 'puppeteer';
import { Router } from '@angular/router';
import { Chart } from '../../dto/Chart';
import { ChartSlide } from '../../dto/ChartSlide';
import integer = Protocol.integer;
import { Movie } from '../../dto/Movie';
import { Constants } from '../movie-details/dto/Constants';
import { Routes } from '../../dto/Routes';

@Component({
  selector: 'app-chart-carousel',
  templateUrl: './chart-carousel.component.html',
  styleUrls: ['./chart-carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => scale', [
        useAnimation(scaleIn, { params: { time: '500ms' } })
      ]),
      transition('scale => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } })
      ]),
    ])
  ]
})

export class ChartCarouselComponent implements OnInit{
  @Input() public chart!: Chart;
  @Input() public animationType = AnimationType.Scale;

  private slides: ChartSlide[] = [];
  private currentSlide = 0;
  private chunk = Constants.CHART_SLIDE_CHUNK;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let temp: Movie[];
    this.chart.movies.$values.forEach((movie: Movie) => {
      if (!movie.poster){
        movie.poster = Constants.NOT_FOUND_IMAGE;
      }
    });
    for (let i = 0, j = this.chart.movies.$values.length; i < j; i += this.chunk) {
      temp = this.chart.movies.$values.slice(i, i + this.chunk);
      this.slides.push({ movies: temp });
    }
  }

  public getCurrentSlide(): integer {
    return this.currentSlide;
  }

  public getLastSlide(): integer {
    return this.slides.length;
  }

  public getSlides(): ChartSlide[] {
    return this.slides;
  }

  public onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  public onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  public navigateTo(idString: string): void {
    this.router.navigate([Routes.BASE_DETAILS_URL, idString]);
  }
}
