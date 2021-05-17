import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsTabsComponent } from './movie-details-tabs.component';

describe('MovieDetailsTabsComponent', () => {
  let component: MovieDetailsTabsComponent;
  let fixture: ComponentFixture<MovieDetailsTabsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsTabsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
