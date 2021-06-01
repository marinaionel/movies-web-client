import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsChartTabComponent } from './movie-details-chart-tab.component';

describe('MovieDetailsChartTabComponent', () => {
  let component: MovieDetailsChartTabComponent;
  let fixture: ComponentFixture<MovieDetailsChartTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsChartTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsChartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
