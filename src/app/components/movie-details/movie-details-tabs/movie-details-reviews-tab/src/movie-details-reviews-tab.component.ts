import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../../../../dto/Movie';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormBuilder } from '@angular/forms';
import { Constants } from '../../../dto/Constants';

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
  public pageSize = 5;
  public rating: number;
  public reviewText = '';
  public panelName = 'Leave a review';
  public panelEnabled = false;

  constructor(private changeDetectorReference: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.rating = 0;
  }

  ngOnInit(): void {
    this.movie && this.movie.reviews ? this.length = this.movie.reviews.length : this.length = 0;
  }

  ngAfterViewInit(): void {
    this.changeDetectorReference.detectChanges();
  }

  public showReviews(): boolean {
    if (this.movie && this.movie.reviews) {
      return this.movie.reviews.length >= 1;
    }
    return false;
  }

  public disablePaginator(): boolean {
    return !this.showReviews();
  }

  public getStarURL(): string {
    return Constants.STAR;
  }

  public textReviewValidator(): boolean{
    return this.reviewText.length > 10;
  }

  public ratingReviewValidator(): boolean{
    return this.rating !== 0;
  }

  public reviewValidator(): boolean{
    return this.textReviewValidator() && this.ratingReviewValidator();
  }

  public toggleReviewPanel(): void{
    this.panelEnabled = !this.panelEnabled;
  }

  public onSubmit(): void {
    console.warn(this.reviewText);
  }
}
