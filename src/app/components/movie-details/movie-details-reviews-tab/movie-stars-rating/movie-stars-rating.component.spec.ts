import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStarsRatingComponent } from './movie-stars-rating.component';

describe('MovieStarsRatingComponent', () => {
  let component: MovieStarsRatingComponent;
  let fixture: ComponentFixture<MovieStarsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieStarsRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
