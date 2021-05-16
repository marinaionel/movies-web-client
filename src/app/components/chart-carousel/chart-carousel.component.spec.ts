import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCarouselComponent } from './chart-carousel.component';

describe('ChartCarouselComponent', () => {
  let component: ChartCarouselComponent;
  let fixture: ComponentFixture<ChartCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
