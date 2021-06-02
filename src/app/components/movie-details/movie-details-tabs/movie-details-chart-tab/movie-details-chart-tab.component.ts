import { Component, Input, OnInit } from '@angular/core';
import { ChartItem } from './ChartItem';
import { Movie } from '../../../../dto/Movie';

@Component({
  selector: 'app-movie-details-chart-tab',
  templateUrl: './movie-details-chart-tab.component.html',
  styleUrls: ['./movie-details-chart-tab.component.css']
})
export class MovieDetailsChartTabComponent implements OnInit{

  @Input() movie!: Movie;
  public chartItems: ChartItem[] = [];

  public xAxisLabel = 'Stars';
  public yAxisLabel = 'No of reviews';
  public reviewError = false;

  colorScheme = {
    domain: ['#F3A807', '#F3A807', '#F3A807']
  };

  constructor() {
  }

  ngOnInit(): void {
    if (this.movie && this.movie.reviews && this.movie.reviews.length > 0) {
      for (let i = 1; i <= 10; i++) {
        const sum = this.movie.reviews.filter((review) => review.rating === i).length;
        this.chartItems.push({ name: i + ' stars', value: sum });
      }
    }
    else{
      this.reviewError = true;
    }
  }
}
