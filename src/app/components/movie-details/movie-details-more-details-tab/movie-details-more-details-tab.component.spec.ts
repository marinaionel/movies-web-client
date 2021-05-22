import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsMoreDetailsTabComponent } from './movie-details-more-details-tab.component';

describe('MovieDetailsMoreDetailsTabComponent', () => {
  let component: MovieDetailsMoreDetailsTabComponent;
  let fixture: ComponentFixture<MovieDetailsMoreDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsMoreDetailsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsMoreDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
