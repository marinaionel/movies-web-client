import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPlotTabComponent } from './movie-details-plot-tab.component';

describe('MovieDetailsPlotTabComponent', () => {
  let component: MovieDetailsPlotTabComponent;
  let fixture: ComponentFixture<MovieDetailsPlotTabComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsPlotTabComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPlotTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
