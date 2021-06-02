import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsPageComponent } from './crew-details-page.component';

describe('CrewDetailsPageComponent', () => {
  let component: CrewDetailsPageComponent;
  let fixture: ComponentFixture<CrewDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
