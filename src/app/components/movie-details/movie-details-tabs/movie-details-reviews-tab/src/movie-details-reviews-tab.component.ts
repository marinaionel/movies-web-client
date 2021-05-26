import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../../../../dto/Movie';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-details-comments',
  templateUrl: './movie-details-reviews.component.html',
  styleUrls: ['./movie-details-reviews.component.scss']
})
export class MovieDetailsReviewsTabComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() movie!: Movie;

  public pageEvent!: PageEvent;
  public length!: number;
  public pageSize = 10;
  public form!: FormGroup;
  public rating: number;

  constructor(private changeDetectorReference: ChangeDetectorRef) {
    this.rating = 0;
  }

  ngOnInit(): void {
    this.movie && this.movie.reviews ? this.length = this.movie.reviews.length : this.length = 0;
  }

  ngAfterViewInit(): void {
    this.changeDetectorReference.detectChanges();
  }

  public showComments(): boolean {
    if (this.movie && this.movie.reviews) {
      return this.movie.reviews.length >= 1;
    }
    return false;
  }

  public disablePaginator(): boolean {
    if (this.movie && this.movie.reviews) {
      return this.movie.reviews.length <= 1;
    } else {
      return true;
    }
  }
}
