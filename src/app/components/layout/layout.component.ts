import {Component, OnInit} from '@angular/core';
import {MoviesProviderService} from '../../services/movies-provider.service';
import {Movie} from '../../dto/Movie';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public movies: Movie[];

  private readonly destroy$: Subject<void>;

  constructor(private moviesProvider: MoviesProviderService) {
    this.destroy$ = new Subject();
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesProvider.movies$().pipe(takeUntil(this.destroy$)).subscribe(
      movies => {
        movies.length !== 0 ? this.movies = movies : this.showError();
      }
    );
  }

  private showError(): void {

  }
}
