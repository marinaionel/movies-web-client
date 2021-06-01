import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsTabsComponent } from './crew-details-tabs.component';

describe('CrewDetailsTabsComponent', () => {
  let component: CrewDetailsTabsComponent;
  let fixture: ComponentFixture<CrewDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDetailsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
