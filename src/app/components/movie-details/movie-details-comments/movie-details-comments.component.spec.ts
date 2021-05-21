import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsCommentsComponent } from './movie-details-comments.component';

describe('MovieDetailsCommentsComponent', () => {
  let component: MovieDetailsCommentsComponent;
  let fixture: ComponentFixture<MovieDetailsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
