import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Movie } from '../../../../../dto/Movie';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Constants } from '../../../dto/Constants';
import { ReviewManagerService } from '../../../../../services/review-manager.service';
import { AccountProviderService } from '../../../../../services/account-provider.service';
import { MovieReview } from '../../../../../dto/MovieReview';

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
  public reviewTitle = '';
  public panelName = 'Leave a review';
  public panelEnabled = false;
  public textError = false;
  public ratingError = false;
  public titleError = false;
  public newRatingEvent = new EventEmitter<boolean>();

  constructor(private changeDetectorReference: ChangeDetectorRef,
              private reviewManager: ReviewManagerService, private accountProvider: AccountProviderService) {
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

  public titleReviewValidator(): boolean{
    return this.reviewTitle.length > 3;
  }

  public reviewValidator(): boolean{
    return this.textReviewValidator() && this.ratingReviewValidator() && this.titleReviewValidator();
  }

  public toggleReviewPanel(): void{
    this.panelEnabled = !this.panelEnabled;
  }

  public onSubmit(): void {
    if (this.reviewValidator()){
      this.textError = false;
      this.ratingError = false;
      this.titleError = false;
      this.accountProvider.getUser$().subscribe((user) => {
        const review: MovieReview = {movieId: this.movie.idString, rating: this.rating,
          text: this.reviewText, title: this.reviewTitle, account: {name: user.name}};
        this.movie.reviews.push(review);
        this.reviewManager.postReview(review);
        this.reviewTitle = '';
        this.reviewText = '';
        this.newRatingEvent.emit(true);
      });
    }
    else {
      this.textError = !this.textReviewValidator();
      this.ratingError = !this.ratingReviewValidator();
      this.titleError = !this.titleReviewValidator();
    }
  }
}
