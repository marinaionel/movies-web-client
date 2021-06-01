import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewStatsTabComponent } from './crew-stats-tab.component';

describe('CrewStatsTabComponent', () => {
  let component: CrewStatsTabComponent;
  let fixture: ComponentFixture<CrewStatsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewStatsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewStatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
