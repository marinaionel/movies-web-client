import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsReviewsTabComponent } from './movie-details-reviews-tab.component';


describe('MovieDetailsCommentsComponent', () => {
  let component: MovieDetailsReviewsTabComponent;
  let fixture: ComponentFixture<MovieDetailsReviewsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsReviewsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsReviewsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
