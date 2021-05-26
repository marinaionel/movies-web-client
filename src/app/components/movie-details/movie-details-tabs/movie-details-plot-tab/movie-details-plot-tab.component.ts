import { Component, Input } from '@angular/core';
import { Movie } from '../../../../dto/Movie';

@Component({
  selector: 'app-movie-details-plot-tab',
  templateUrl: './movie-details-plot-tab.component.html',
  styleUrls: ['./movie-details-plot-tab.component.scss']
})
export class MovieDetailsPlotTabComponent{

  @Input() movie!: Movie;

  constructor() {
  }

  public showPlot(): boolean {
    if (this.movie && this.movie.plot && this.movie.plot.length > 0) {
      return true;
    }
    return false;
  }
}
